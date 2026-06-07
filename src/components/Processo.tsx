import RevealWrapper from "./RevealWrapper";

const STEPS = [
  {
    num: "— 01 / 06",
    title: "Conversa inicial",
    desc: "Nosso primeiro contato é um momento para nos conhecermos melhor. Você me conta sobre o imóvel, suas expectativas e o que busca transformar. Eu apresento minha forma de trabalho, esclareço dúvidas e explico como o projeto pode te ajudar.",
  },
  {
    num: "— 02 / 06",
    title: "Diagnóstico & briefing",
    desc: "Aqui mergulhamos na sua rotina, hábitos, necessidades e desejos para o novo espaço. Através do psicobriefing, buscamos compreender não apenas o que você precisa, mas também como deseja se sentir dentro da sua casa",
  },
  {
    num: "— 03 / 06",
    title: "Estudo de Layout",
    desc: "Com base em tudo o que foi levantado, desenvolvo as melhores soluções para a distribuição dos ambientes. Essa etapa define fluxos, usos e aproveitamento dos espaços, criando a base estratégica de todo o projeto.",
  },
  {
    num: "— 04 / 06",
    title: "Apresentação do projeto",
    desc: "É o momento de visualizar a transformação do seu lar. Apresento o modelo 3D, os conceitos, materiais e soluções desenvolvidas, permitindo que você compreenda o projeto de forma clara antes da etapa executiva.",
  },
  {
    num: "— 05 / 06",
    title: "Projeto executivo e Lista de compras",
    desc: "Após a aprovação, desenvolvo toda a documentação técnica necessária para a execução da obra. São plantas, detalhamentos e especificações que orientam fornecedores e profissionais envolvidos no processo.",
  },
  {
    num: "— 06 / 06",
    title: "Apresentação do projeto",
    desc: "Durante a execução, ofereço suporte para esclarecer dúvidas e auxiliar na tomada de decisões. O objetivo é garantir que o resultado final mantenha a essência e as soluções previstas em projeto.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="processo">
      <div className="wrap">
        <RevealWrapper className="section-head">
          <p className="eyebrow">04 · Processo</p>
          <h2>
            Do papel à chave
            <br />
            na mão — passo a passo.
          </h2>
        </RevealWrapper>

        <div className="proc-grid">
          {STEPS.map((step) => (
            <RevealWrapper key={step.num} className="proc-step">
              <p className="num">{step.num}</p>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
