import RevealWrapper from "./RevealWrapper";

const DEPOS = [
  {
    initial: "T",
    quote:
      "A Letícia escuta de um jeito raro. Acertou em coisas que a gente nem sabia que queria — e a casa hoje funciona pra nós dois sem perder a beleza.",
    name: "Talita & Lugano",
    label: "Residencial · Campinas",
  },
  {
    initial: "L",
    quote:
      "Fizemos consultoria à distância e mesmo assim parecia que ela estava aqui. Cada material chegou exatamente como nos renders. Vale cada centavo.",
    name: "Larissa & Felipe",
    label: "Consultoria · Hortolândia",
  },
  {
    initial: "M",
    quote:
      "Eu queria uma casa que respirasse e ela entregou exatamente isso. Cada canto tem uma planta, uma luz, um motivo. A casa ficou viva.",
    name: "Murilo & Giuliana",
    label: "Residencial · Vinhedo",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="wrap">
        <RevealWrapper className="section-head">
          <p className="eyebrow">05 · Depoimentos</p>
          <h2>
            O que dizem
            <br />
            <em>as famílias.</em>
          </h2>
        </RevealWrapper>

        <div className="depo-grid">
          {DEPOS.map((d) => (
            <RevealWrapper key={d.name} className="depo-card">
              <div className="leaf-icon" aria-hidden="true" />
              <p className="quote">{d.quote}</p>
              <div className="who">
                <div className="avatar">{d.initial}</div>
                <div>
                  <b>{d.name}</b>
                  <span>{d.label}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
