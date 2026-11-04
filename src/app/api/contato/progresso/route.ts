import { after } from "next/server";
import { CONTACT_QUESTIONS } from "../../../../lib/contact-form";
import { isResponseId, sanitizeAnswers, sendToLinkbio } from "../../../../lib/linkbio";

/**
 * Progresso do formulário: chamado a cada etapa, para o Linkbio guardar
 * também quem começou e não terminou. Responde na hora; o envio roda depois.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots preenchem o campo escondido.
  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }
  if (!isResponseId(body.responseId)) {
    return Response.json({ error: "invalid_id" }, { status: 400 });
  }

  const answers = sanitizeAnswers(body.answers);
  if (Object.keys(answers).length === 0) return Response.json({ ok: true });

  const step =
    typeof body.step === "number" && Number.isInteger(body.step)
      ? Math.min(Math.max(body.step, 0), CONTACT_QUESTIONS.length)
      : Object.keys(answers).length;
  const responseId = body.responseId;
  const pageUrl = typeof body.pageUrl === "string" ? body.pageUrl.slice(0, 500) : undefined;

  after(() => sendToLinkbio({ responseId, status: "partial", answers, step, pageUrl }));
  return Response.json({ ok: true });
}
