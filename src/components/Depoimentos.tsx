import RevealWrapper from "./RevealWrapper";

const DEPOS = [
  {
    initial: "L&F",
    quote:
      "Obrigada por todo apoio, Le!! Você está sendo impecável no nosso acompanhamento, mesmo a distância! Fazer nosso projeto com você foi uma decisão acertada. O projeto executivo trouxe muita precisão para os prestadores e também para os ajustes que precisamos fazer. Só agradecer!",
    name: "Larissa & Felipe",
    label: "Residencial · Campinas",
  },
  {
    initial: "L&D",
    quote:
      "Lê, queremos te agradecer por toda a parceria ao longo desse processo. Propusemos alinhamentos e novas ideias, e em todas elas você esteve atenta aos detalhes, aberta a ouvir e sempre buscando o melhor resultado. Estamos apaixonados pelo projeto. Ele superou as expectativas e isso só foi possível graças ao seu cuidado, dedicação e olhar profissional. De verdade, muito obrigada por tornar essa etapa tão leve e especial.",
    name: "Luana & Daniel",
    label: "Residencial · Campinas",
  },
  {
    initial: "T&L",
    quote:
      "Obrigado por toda ajuda, com todas as entregas e paciência ao longo do projeto. Com o material que nos forneceu a obra está caminhando sozinha e está tudo ficando do jeito que sonhamos! Então, mais uma vez, muito obrigado pelo apoio até o momento!",
    name: "Thaís & Leonardo",
    label: "Residencial · Campinas",
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
