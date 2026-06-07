"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Projeto {
  type: "residencial" | "consultoria";
  title: string;
  loc: string;
  year: string;
  area: string;
  typeLabel: string;
  desc: string;
  img: string;
  alt: string;
}

const PROJETOS: Projeto[] = [
  {
    type: "residencial",
    title: "Talita & Lugano",
    loc: "Campinas, SP",
    year: "2024",
    area: "86 m²",
    typeLabel: "Residencial · Apartamento integrado",
    desc: "Apartamento integrado para um casal jovem com plantas em todo canto. Painel verde-menta acompanha o pé-direito, mesa redonda em madeira ancora a sala de jantar, e a marcenaria abraça a cozinha sem fechá-la. Sofá verde-musgo conversa com as cadeiras.",
    img: "/assets/projetos/talita-lugano.png",
    alt: "Talita e Lugano — sala integrada",
  },
  {
    type: "residencial",
    title: "Lillan & Paulo",
    loc: "Paulínia, SP",
    year: "2024",
    area: "110 m²",
    typeLabel: "Residencial · Reforma completa",
    desc: "Cozinha americana com bancada em pedra natural, banquetas de couro caramelo e adega vertical em madeira. O sol da tarde entra reto pela varanda e desenha caminhos no marfim das paredes.",
    img: "/assets/projetos/lillan-paulo.png",
    alt: "Lillan e Paulo — cozinha com adega",
  },
  {
    type: "residencial",
    title: "Marina Colin",
    loc: "Campinas, SP",
    year: "2024",
    area: "98 m²",
    typeLabel: "Residencial · Projeto completo",
    desc: "Cozinha minimalista em marfim e madeira clara, com ilha curva, azulejos brancos artesanais e pinceladas de pampas. Estante alta integra livros, louças e plantas em uma mesma respiração.",
    img: "/assets/projetos/marina-colin.png",
    alt: "Marina Colin — cozinha com ilha curva",
  },
  {
    type: "residencial",
    title: "Pamella & Gésner",
    loc: "Santa Bárbara, SP",
    year: "2023",
    area: "74 m²",
    typeLabel: "Residencial · Cozinha autoral",
    desc: "Cozinha autoral com azulejo desenhado especialmente para o casal, marcenaria em ipê claro e granito branco. Detalhes em preto fosco amarram o conjunto sem pesar o ambiente.",
    img: "/assets/projetos/pamella-gesner.png",
    alt: "Pamella e Gésner — cozinha autoral",
  },
  {
    type: "consultoria",
    title: "Larissa & Felipe",
    loc: "Campinas, SP",
    year: "2024",
    area: "42 m²",
    typeLabel: "Consultoria à distância",
    desc: "Consultoria para um pequeno apartamento alugado: layout reversado, marcenaria leve em torno da TV, pôsteres autorais e mesa redonda que abre espaço para conversas longas.",
    img: "/assets/projetos/larissa-felipe.jpg",
    alt: "Larissa e Felipe — living compacto",
  },
  {
    type: "residencial",
    title: "Luana & Daniel",
    loc: "Campinas, SP",
    year: "2023",
    area: "6 m²",
    typeLabel: "Residencial · Banheiro",
    desc: "Banheiro pequeno reinventado em camadas: pedra clara matizada no alto, azulejo azul-marinho na metade de baixo, marcenaria em nó-do-pinho e frísia de luz no espelho. Funcional e dramático ao mesmo tempo.",
    img: "/assets/projetos/luana-daniel.png",
    alt: "Luana e Daniel — banheiro azul-marinho",
  },
  {
    type: "residencial",
    title: "Murilo & Giuliana",
    loc: "Campinas, SP",
    year: "2024",
    area: "82 m²",
    typeLabel: "Residencial · Living & jantar",
    desc: "Sala de estar e jantar integradas com mesa redonda em laca off-white, cadeiras sage, pendente globóide e tapete circular em terracota. Painel verde-claro acompanha a passagem para a cozinha.",
    img: "/assets/projetos/murilo-giuliana.png",
    alt: "Murilo e Giuliana — sala integrada",
  },
  {
    type: "consultoria",
    title: "Thaís & Leonardo",
    loc: "Campinas, SP",
    year: "2024",
    area: "58 m²",
    typeLabel: "Consultoria + marcenaria",
    desc: "Living com painel ripado de madeira clara, iluminação em cove escondida, mesa lateral com plantas pendentes e tapete autoral em formato orgânico. Integração com a varanda em painel de vidro.",
    img: "/assets/projetos/thais-leonardo.png",
    alt: "Thaís e Leonardo — sala com painel ripado",
  },
];

export default function Projetos() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    listRef.current.querySelectorAll(".proj-card").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projetos">
      <div className="wrap">
        <div className="proj-head">
          <div>
            <p className="eyebrow">03 · Portfólio</p>
            <h2>
              Projetos
              <br />
              <em>recentes &amp; favoritos.</em>
            </h2>
          </div>
        </div>

        <div className="proj-list" data-layout="masonry" ref={listRef}>
          {PROJETOS.map((p) => (
            <article
              key={p.title}
              className="proj-card reveal"
              data-type={p.type}
            >
              <span className="tag">{p.type === "residencial" ? "Residencial" : "Consultoria"}</span>
              <div className="img-wrap">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div className="meta">
                <h3 className="title">{p.title}</h3>
                <span className="loc">
                  {p.loc.split(",")[0]}
                </span>
              </div>
              <p className="description">{p.desc.split(".")[0]}.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
