import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <RevealWrapper className="about-portrait">
            <Image
              src="/assets/leticia.jpg"
              alt="Letícia Moraes, arquiteta e designer de interiores biofílico em Campinas, SP"
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
            <span className="badge" aria-hidden="true" />
          </RevealWrapper>

          <RevealWrapper className="about-copy">
            <p className="eyebrow">01 · Sobre</p>
            <h2>
              Interiores <em>pensados </em>para quem vive neles.
            </h2>

            <p>
              Muito prazer! Sou a Letícia Moraes, arquiteta especializada em
              design biofílico. Acredito que um bom projeto começa muito antes
              das escolhas estéticas: começa na escuta. Entender a rotina, os
              hábitos e as necessidades de cada cliente é o que permite criar
              espaços verdadeiramente personalizados.
            </p>
            <p>
              Meu trabalho busca equilibrar funcionalidade, sensações e conexão
              com a natureza, traduzindo a essência de cada morador em ambientes
              que promovem bem-estar e acolhimento no dia a dia.
            </p>
            <p>
              Acompanho cada projeto de forma próxima e cuidadosa, desde as
              primeiras definições de layout até os detalhes finais da execução,
              garantindo que as ideias concebidas em projeto sejam traduzidas
              com fidelidade para a realidade. Desenvolvo projetos residenciais
              para clientes de diferentes localidades, de forma presencial ou
              remota, sempre com suporte próximo e alinhamento contínuo ao longo
              do processo.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
