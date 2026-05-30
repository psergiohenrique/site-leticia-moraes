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
              alt="Letícia Moraes"
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
            <span className="badge" aria-hidden="true" />
          </RevealWrapper>

          <RevealWrapper className="about-copy">
            <p className="eyebrow">01 · Sobre</p>
            <h2>
              Interiores como <em>cuidado</em> com quem mora.
            </h2>

            <p>
              Sou a Letícia, designer de interiores há oito anos com
              especialização em design biofílico. Acredito que desenhar
              um interior é, antes de tudo, escutar — entender as rotinas,
              os silêncios, e o que faz uma casa virar lar.
            </p>
            <p>
              Trabalho com poucos projetos por ano, sempre com proximidade.
              Combino plantas técnicas, renders e visitas à obra com a
              curadoria afetiva de objetos, tecidos e plantas que dá alma a
              cada ambiente.
            </p>
            <p>
              Atendo Campinas e região, mas também faço consultorias remotas
              para quem está longe e quer um olhar de projeto na sua casa.
            </p>

            <div className="about-stats">
              <div className="item">
                <b>2018</b>
                <span>Início do estúdio</span>
              </div>
              <div className="item">
                <b>Pós</b>
                <span>Design biofílico</span>
              </div>
              <div className="item">
                <b>+40</b>
                <span>Famílias atendidas</span>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
