import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import AdsConversions from "@/components/AdsConversions";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Letícia Moraes — Arquitetura e Interiores · Maringá e Londrina, PR",
  description:
    "Letícia Moraes, arquiteta especializada em interiores biofílicos. Projetos residenciais completos e consultorias em Maringá e Londrina, PR. Interiores que respiram.",
  keywords: [
    "arquitetura e interiores Maringá",
    "arquitetura e interiores Londrina",
    "arquiteta Maringá PR",
    "arquiteta Londrina PR",
    "design biofílico",
    "projeto de interiores residencial",
    "consultoria de interiores online",
    "Letícia Moraes arquiteta",
    "decoração biofílica",
    "psicoarquitetura",
    "projeto residencial Maringá",
    "projeto residencial Londrina",
  ],
  authors: [{ name: "Letícia Moraes" }],
  creator: "Letícia Moraes",
  metadataBase: new URL("https://leticiamoraes.arq.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/assets/submark-com-fundo.png", type: "image/png" }],
    apple: [{ url: "/assets/submark-com-fundo.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leticiamoraes.arq.br",
    title: "Letícia Moraes — Arquitetura e Interiores · Maringá e Londrina, PR",
    description:
      "Projetos residenciais com olhar biofílico — luz natural, materiais honestos e o ritmo de quem mora ali. Maringá e Londrina, PR.",
    siteName: "Letícia Moraes Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letícia Moraes — Arquitetura e Interiores · Maringá e Londrina, PR",
    description:
      "Projetos residenciais com olhar biofílico em Maringá e Londrina, PR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSerifDisplay.variable} ${manrope.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/submark-com-fundo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://leticiamoraes.arq.br/#business",
                  name: "Letícia Moraes Studio",
                  description:
                    "Arquitetura e interiores residenciais com olhar biofílico. Projetos completos e consultorias em Maringá e Londrina, PR.",
                  url: "https://leticiamoraes.arq.br",
                  telephone: "+55-19-98103-7808",
                  email: "projeto@leticiamoraes.arq.br",
                  image:
                    "https://leticiamoraes.arq.br/assets/submark-com-fundo.png",
                  logo: "https://leticiamoraes.arq.br/assets/logo-horizontal-verde.png",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Maringá",
                    addressRegion: "PR",
                    addressCountry: "BR",
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  sameAs: [
                    "https://www.instagram.com/leticiamoraes.arquiteta/",
                  ],
                  priceRange: "$$",
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Maringá",
                    },
                    {
                      "@type": "City",
                      name: "Londrina",
                    },
                    {
                      "@type": "State",
                      name: "Paraná",
                    },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços de Design de Interiores",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Design de interiores residencial",
                          description:
                            "Projeto completo de interiores residenciais: briefing, layout, materiais, marcenaria, renders e acompanhamento de obra.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Consultoria de interiores à distância",
                          description:
                            "Consultoria online com análise dos ambientes, paleta de cores, sugestão de mobiliário e roteiro de compras.",
                        },
                      },
                    ],
                  },
                  review: [
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Larissa & Felipe" },
                      reviewBody:
                        "Obrigada por todo apoio, Le!! Você está sendo impecável no nosso acompanhamento, mesmo a distância! Fazer nosso projeto com você foi uma decisão acertada. O projeto executivo trouxe muita precisão para os prestadores e também para os ajustes que precisamos fazer. Só agradecer!",
                      itemReviewed: {
                        "@id": "https://leticiamoraes.arq.br/#business",
                      },
                    },
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Luana & Daniel" },
                      reviewBody:
                        "Estamos apaixonados pelo projeto. Ele superou as expectativas e isso só foi possível graças ao seu cuidado, dedicação e olhar profissional. De verdade, muito obrigada por tornar essa etapa tão leve e especial.",
                      itemReviewed: {
                        "@id": "https://leticiamoraes.arq.br/#business",
                      },
                    },
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Thaís & Leonardo" },
                      reviewBody:
                        "Obrigado por toda ajuda, com todas as entregas e paciência ao longo do projeto. Com o material que nos forneceu a obra está caminhando sozinha e está tudo ficando do jeito que sonhamos!",
                      itemReviewed: {
                        "@id": "https://leticiamoraes.arq.br/#business",
                      },
                    },
                  ],
                },
                {
                  "@type": "Person",
                  "@id": "https://leticiamoraes.arq.br/#leticia",
                  name: "Letícia Moraes",
                  jobTitle: "Arquiteta e Designer de Interiores",
                  description:
                    "Arquiteta especializada em interiores biofílicos. Atua em Maringá e Londrina, PR, desenvolvendo projetos residenciais que equilibram funcionalidade, bem-estar e conexão com a natureza.",
                  url: "https://leticiamoraes.arq.br",
                  image: "https://leticiamoraes.arq.br/assets/leticia.jpg",
                  sameAs: [
                    "https://www.instagram.com/leticiamoraes.arquiteta/",
                  ],
                  worksFor: { "@id": "https://leticiamoraes.arq.br/#business" },
                  knowsAbout: [
                    "Design de Interiores",
                    "Design Biofílico",
                    "Psicoarquitetura",
                    "Projeto Residencial",
                    "Marcenaria Sob Medida",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://leticiamoraes.arq.br/#website",
                  url: "https://leticiamoraes.arq.br",
                  name: "Letícia Moraes Studio",
                  description:
                    "Site oficial do estúdio de arquitetura e interiores Letícia Moraes, em Maringá e Londrina, PR.",
                  publisher: {
                    "@id": "https://leticiamoraes.arq.br/#business",
                  },
                  inLanguage: "pt-BR",
                },
              ],
            }),
          }}
        />
        <script
          src="https://t.contentsquare.net/uxa/6598ec2a87efc.js"
          defer
        ></script>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <AdsConversions />
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18221438067"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18221438067');
          `}
        </Script>
      </body>
    </html>
  );
}
