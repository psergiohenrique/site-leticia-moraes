import RevealWrapper from "./RevealWrapper";

const STEPS = [
  {
    num: "— 01 / 04",
    title: "Conversa inicial",
    desc: "Uma chamada de 40 minutos para entender a sua rotina, os ambientes que pesam, o orçamento e o prazo. Sem compromisso.",
  },
  {
    num: "— 02 / 04",
    title: "Diagnóstico & briefing",
    desc: "Visita técnica, levantamento das medidas e referências de atmosfera. Saio com o briefing pronto e você com um pequeno mood board.",
  },
  {
    num: "— 03 / 04",
    title: "Projeto & renders",
    desc: "Plantas, marcenaria detalhada, paleta de materiais e renders fotorrealistas. Duas rodadas de ajustes — porque mudar de ideia é parte do processo.",
  },
  {
    num: "— 04 / 04",
    title: "Obra & entrega",
    desc: "Acompanho a execução com visitas semanais e canal direto com os fornecedores. Entrega da casa pronta, com curadoria de objetos inclusa.",
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
