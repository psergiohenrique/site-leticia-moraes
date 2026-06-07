import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow" style={{ marginBottom: "32px" }}>
              Estúdio · Campinas, SP · desde 2018
            </p>

            <h1>
              interiores
              <span className="em">que respiram.</span>
            </h1>

            <p className="hero-tag">
              Projetos de interiores pensados para além da estética. Cada
              ambiente é desenhado para refletir a personalidade, os hábitos e
              as necessidades de quem vive ali, criando espaços que favorecem o
              bem-estar e a conexão com a natureza.
            </p>

            <div className="hero-cta-row">
              <a href="#contato" className="btn btn-primary">
                Começar um projeto
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h12M8 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#projetos" className="btn btn-ghost">
                Ver projetos
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <b>5</b>anos de estúdio
              </div>
              <div>
                <b>+ 60</b>clientes atendidos
              </div>
            </div>
          </div>

          <figure className="hero-image">
            <Image
              src="/assets/projetos/talita-lugano.png"
              alt="Projeto Talita e Lugano — sala integrada"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <figcaption className="stamp">
              <span>Talita &amp; Lugano · 2024</span>
              <Image
                src="/assets/submark-positiva.png"
                alt=""
                width={64}
                height={64}
              />
            </figcaption>
          </figure>
        </div>

        <div className="hero-marquee">
          {[
            "residencial",
            "consultoria",
            "design biofílico",
            "psicoarquitetura",
          ].map((item) => (
            <span key={item}>
              <i className="dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
