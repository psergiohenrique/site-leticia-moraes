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
            trabalhar juntas.
          </h2>
        </RevealWrapper>

        <div className="servicos-grid">
          <RevealWrapper as="article" className="servico-card featured">
            <div className="servico-mark" aria-hidden="true" />
            <h3>Design de interiores residencial</h3>
            <p>
              Projeto completo — do briefing à chave na mão. Layout,
              marcenaria sob medida, paleta de materiais, iluminação,
              renders fotorrealistas e curadoria de objetos.
            </p>
            <ul className="servico-list">
              <li>Plantas humanizadas e técnicas</li>
              <li>Marcenaria, iluminação e revestimentos</li>
              <li>Renders 3D realistas</li>
              <li>Acompanhamento de obra semanal</li>
              <li>Curadoria final de objetos e plantas</li>
            </ul>
          </RevealWrapper>

          <RevealWrapper as="article" className="servico-card">
            <div className="servico-mark" aria-hidden="true" />
            <h3>Consultoria à distância</h3>
            <p>
              Para quem mora longe ou quer um olhar profissional sem o
              projeto completo. Três encontros online para resolver os
              ambientes que mais pesam na sua casa.
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
