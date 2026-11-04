// Perguntas do formulário de contato (migradas do Respondi "aduH82KS").
// Usado tanto pelo componente do formulário quanto pela API /api/contato.

export type ContactQuestion = {
  id: string;
  label: string;
  description?: string;
  type: "text" | "tel" | "textarea" | "radio";
  required: boolean;
  options?: string[];
  /** Permite resposta livre além das opções ("Outro"). */
  allowOther?: boolean;
  placeholder?: string;
  maxLength?: number;
};

export const CONTACT_QUESTIONS: ContactQuestion[] = [
  { id: "nome", label: "Qual o seu nome?", type: "text", required: true, placeholder: "Nome e sobrenome", maxLength: 120 },
  { id: "whatsapp", label: "Qual o seu WhatsApp?", type: "tel", required: true, placeholder: "(44) 99999-9999", maxLength: 30 },
  { id: "instagram", label: "Qual o seu Instagram?", type: "text", required: true, placeholder: "@seuinstagram", maxLength: 80 },
  {
    id: "origem",
    label: "Como você conheceu o meu trabalho?",
    type: "radio",
    required: true,
    options: ["Instagram", "Indicação", "Pesquisa no Google"],
    allowOther: true,
  },
  {
    id: "tipo",
    label: "Qual o tipo de imóvel?",
    type: "radio",
    required: true,
    options: ["Apartamento padrão", "Apartamento garden", "Apartamento duplex", "Casa térrea", "Sobrado"],
  },
  { id: "metragem", label: "Quantos metros quadrados possui o seu imóvel?", type: "text", required: true, placeholder: "Ex.: 120 m²", maxLength: 40 },
  { id: "localizacao", label: "Onde o imóvel está localizado?", description: "Qual a cidade e o bairro?", type: "text", required: true, placeholder: "Cidade, bairro", maxLength: 200 },
  { id: "condominio", label: "Qual o nome do condomínio?", description: "(se houver)", type: "text", required: false, maxLength: 200 },
  {
    id: "chaves",
    label: "Você já está com as chaves do imóvel? Se não, quando está previsto receber?",
    type: "radio",
    required: true,
    options: ["Sim, já estou!"],
    allowOther: true,
  },
  {
    id: "imovelNovo",
    label: "O imóvel é novo?",
    type: "radio",
    required: true,
    options: [
      "Sim e não quero aproveitar nenhum acabamento da construtora",
      "Sim e quero aproveitar o que a construtora entregou",
      "Não, mas pretendo trocar tudo.",
      "Não e quero aproveitar algo existente",
    ],
  },
  {
    id: "reforma",
    label: "Você pretende fazer uma reforma completa em todos os ambientes? Se não, quais ambientes serão reformados?",
    type: "textarea",
    required: true,
    maxLength: 2000,
  },
  {
    id: "necessidades",
    label: "Me conte mais sobre as suas necessidades e o que você deseja para o seu projeto.",
    description: "Essa informação é muito importante para que eu possa te apresentar uma proposta alinhada com as suas necessidades.",
    type: "textarea",
    required: true,
    maxLength: 4000,
  },
  { id: "moradores", label: "Quem irá morar com você no imóvel?", type: "text", required: true, maxLength: 300 },
];

export type ContactAnswers = Record<string, string>;

/** Retorna o id da primeira pergunta inválida, ou null se tudo estiver ok. */
export function findInvalidAnswer(answers: ContactAnswers): string | null {
  for (const q of CONTACT_QUESTIONS) {
    const value = (answers[q.id] ?? "").trim();
    if (q.required && !value) return q.id;
    if (q.maxLength && value.length > q.maxLength) return q.id;
    if (q.type === "tel" && value && value.replace(/\D/g, "").length < 10) return q.id;
  }
  return null;
}
