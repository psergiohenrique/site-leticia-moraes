import RevealWrapper from "./RevealWrapper";

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="wrap">
        <RevealWrapper className="section-head">
          <p className="eyebrow">02 · Serviços</p>
          <h2>
            Como podemos
            <br />
            trabalhar juntos.
          </h2>
        </RevealWrapper>

        <div className="servicos-grid">
          <RevealWrapper as="article" className="servico-card featured">
            <div className="servico-mark" aria-hidden="true" />
            <h3>Design de interiores residencial</h3>
            <p>
              Desenvolvo projetos de interiores residenciais personalizados,
              pensados para traduzir a rotina, as necessidades e a identidade de
              cada morador em espaços funcionais, acolhedores e conectados à
              natureza. <br></br>Cada projeto é conduzido em etapas, permitindo
              decisões mais seguras e um desenvolvimento cuidadoso de cada
              ambiente.
            </p>
            <ul className="servico-list">
              <li>Reunião de briefing e levantamento de necessidades</li>
              <li>Estudo das melhores soluções de layout </li>
              <li>Definição de materiais, revestimentos, cores e iluminação</li>
              <li>Projeto de marcenaria sob medida</li>
              <li>Imagens realistas para a visualização do seu novo lar</li>
              <li>Projeto executivo com detalhamentos técnicos para a obras</li>
              <li>
                Imagens renderizadas para melhor compreensão do resultado final
              </li>
              <li>Suporte e acompanhamento durante a execução da obra</li>
            </ul>
          </RevealWrapper>

          <RevealWrapper as="article" className="servico-card featured">
            <div className="servico-mark" aria-hidden="true" />
            <h3>Consultoria à distância</h3>
            <p>
              Nem toda transformação exige um projeto completo. Às vezes, alguns
              ajustes bem direcionados já são suficientes para que um ambiente
              funcione melhor e reflita mais quem você é. O processo acontece em
              dois encontros: o primeiro dedicado à compreensão das suas
              necessidades, rotina e objetivos para o espaço, e o segundo para a
              apresentação das propostas e orientações necessárias para a
              implementação.
            </p>
            <ul className="servico-list">
              <li>Análise dos ambientes por vídeo</li>
              <li>Paleta de cores e materiais</li>
              <li>Sugestão de arranjo e mobiliário</li>
              <li>Roteiro de compras com links</li>
              <li>Suporte por 30 dias após a entrega</li>
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
