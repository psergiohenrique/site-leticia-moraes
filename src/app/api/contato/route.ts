import {
  CONTACT_QUESTIONS,
  findInvalidAnswer,
  type ContactAnswers,
} from "../../../lib/contact-form";
import { isResponseId, sendToLinkbio } from "../../../lib/linkbio";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: {
    answers?: unknown;
    website?: unknown;
    responseId?: unknown;
    pageUrl?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot anti-spam: bots preenchem o campo escondido "website".
  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  const raw = body.answers;
  if (!raw || typeof raw !== "object") {
    return Response.json({ error: "invalid_answers" }, { status: 400 });
  }

  const answers: ContactAnswers = {};
  for (const q of CONTACT_QUESTIONS) {
    const value = (raw as Record<string, unknown>)[q.id];
    answers[q.id] = typeof value === "string" ? value.trim() : "";
  }

  const invalid = findInvalidAnswer(answers);
  if (invalid) {
    return Response.json({ error: "invalid_field", field: invalid }, { status: 422 });
  }

  // E-mail e Linkbio em paralelo: se um dos dois gravar, o lead não se perde.
  const responseId = isResponseId(body.responseId)
    ? body.responseId
    : crypto.randomUUID();
  const pageUrl =
    typeof body.pageUrl === "string" ? body.pageUrl.slice(0, 500) : undefined;
  const [mailOk, linkbioOk] = await Promise.all([
    sendMail(answers),
    sendToLinkbio({
      responseId,
      status: "complete",
      answers,
      step: CONTACT_QUESTIONS.length,
      pageUrl,
    }),
  ]);

  if (!mailOk && !linkbioOk) {
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}

async function sendMail(answers: ContactAnswers): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "projeto@leticiamoraes.arq.br";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Site Letícia Moraes <nao-responda@codepath.dev.br>";

  if (!apiKey) {
    console.error("[contato] RESEND_API_KEY não configurada");
    return false;
  }

  const rows = CONTACT_QUESTIONS.map((q) => ({
    label: q.label,
    value: answers[q.id] || "—",
  }));

  const text = rows.map((r) => `${r.label}\n${r.value}`).join("\n\n");
  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:400">Nova solicitação de projeto</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          (r) => `<tr>
            <td style="border-bottom:1px solid #eee;vertical-align:top;color:#666;width:40%"><b>${escapeHtml(r.label)}</b></td>
            <td style="border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(r.value)}</td>
          </tr>`
        )
        .join("")}
    </table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Solicitação de projeto — ${answers.nome}`,
      text,
      html,
    }),
  }).catch((err) => {
    console.error("[contato] Falha ao enviar e-mail", err);
    return null;
  });

  if (!res?.ok) {
    if (res) console.error("[contato] Falha ao enviar e-mail", res.status, await res.text());
    return false;
  }
  return true;
}
