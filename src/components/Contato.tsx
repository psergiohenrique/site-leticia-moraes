import Script from "next/script";
import RevealWrapper from "./RevealWrapper";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="wrap">
        <RevealWrapper className="section-head">
          <p className="eyebrow">06 · Contato</p>
          <h2>
            Vamos começar
            <br />
            <em>o seu projeto?</em>
          </h2>
        </RevealWrapper>

        <div className="contact-grid">
          <div className="contact-embed">
            <div
              data-respondi-container=""
              data-respondi-mode="regular"
              data-respondi-src="https://form.respondi.app/aduH82KS"
              data-respondi-width="100%"
              data-respondi-height="600px"
            />
            <Script
              id="respondi_src"
              src="https://embed.respondi.app/embed.js"
              strategy="afterInteractive"
            />
          </div>

          <div className="contact-info">
            <p className="lede">
              Me mande uma mensagem e logo entrarei em contato com você! Será um
              prazer te ouvir e ajudar a realizar esse sonho!
            </p>

            <div className="row">
              <div>
                <b>Estúdio</b>
                <p>
                  Rua Maria Monteiro, 1791
                  <br />
                  Cambuí · Campinas, SP
                </p>
              </div>
              <div>
                <b>Por escrito</b>
                <p>projeto@leticiamoraes.arq.br</p>
              </div>
            </div>

            <div className="socials">
              <a
                href="https://www.instagram.com/leticiamoraes.arquiteta/"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=19981037808&text&type=phone_number&app_absent=0"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
