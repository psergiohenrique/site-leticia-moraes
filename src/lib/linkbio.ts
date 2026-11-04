import {
  CONTACT_QUESTIONS,
  type ContactAnswers,
} from "./contact-form";

// Envio das respostas do formulário ao Linkbio (linkbio.dev.br), que guarda inclusive
// quem parou no meio. Só roda no servidor: a chave nunca vai para o navegador.

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const isResponseId = (value: unknown): value is string =>
  typeof value === "string" && UUID.test(value);

/** Mantém só as perguntas conhecidas, aparadas e no tamanho máximo de cada uma. */
export function sanitizeAnswers(raw: unknown): ContactAnswers {
  const answers: ContactAnswers = {};
  if (!raw || typeof raw !== "object") return answers;
  for (const q of CONTACT_QUESTIONS) {
    const value = (raw as Record<string, unknown>)[q.id];
    if (typeof value === "string" && value.trim()) {
      answers[q.id] = value.trim().slice(0, q.maxLength ?? 2000);
    }
  }
  return answers;
}

type LinkbioSubmission = {
  responseId: string;
  status: "partial" | "complete";
  answers: ContactAnswers;
  /** Quantas perguntas a pessoa já passou. */
  step: number;
  pageUrl?: string;
};

/** Devolve true se o Linkbio gravou. Nunca lança: o formulário não pode quebrar por causa dele. */
export async function sendToLinkbio(s: LinkbioSubmission): Promise<boolean> {
  const key = process.env.LINKBIO_FORM_KEY;
  if (!key) return false;
  const base = process.env.LINKBIO_API_URL ?? "https://linkbio.dev.br";

  try {
    const res = await fetch(`${base}/api/forms/respostas`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        responseId: s.responseId,
        status: s.status,
        step: s.step,
        totalSteps: CONTACT_QUESTIONS.length,
        answers: CONTACT_QUESTIONS.map((q) => ({
          id: q.id,
          label: q.label,
          value: s.answers[q.id] ?? "",
        })),
        contact: { name: s.answers.nome ?? "", phone: s.answers.whatsapp ?? "" },
        pageUrl: s.pageUrl,
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.error("[linkbio] resposta recusada", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[linkbio] falha ao enviar", err);
    return false;
  }
}
