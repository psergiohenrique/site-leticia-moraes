import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
  title: "Letícia Moraes — Design de Interiores · Campinas, SP",
  description:
    "Letícia Moraes. Design de interiores com olhar biofílico. Projetos completos e consultorias em Campinas, SP. Interiores que respiram.",
  keywords: [
    "design de interiores",
    "arquiteta Campinas",
    "design biofílico",
    "projeto residencial",
    "consultoria de interiores",
    "Letícia Moraes",
    "interiores Campinas SP",
  ],
  authors: [{ name: "Letícia Moraes" }],
  creator: "Letícia Moraes",
  metadataBase: new URL("https://leticiamoraes.arq.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leticiamoraes.arq.br",
    title: "Letícia Moraes — Design de Interiores · Campinas, SP",
    description:
      "Interiores com olhar biofílico — luz natural, materiais honestos e o ritmo de quem mora ali.",
    siteName: "Letícia Moraes Studio",
    images: [
      {
        url: "/assets/submark-com-fundo.png",
        width: 800,
        height: 800,
        alt: "Letícia Moraes — Design de Interiores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letícia Moraes — Design de Interiores",
    description: "Interiores com olhar biofílico em Campinas, SP.",
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
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/assets/submark-com-fundo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://leticiamoraes.arq.br",
              name: "Letícia Moraes Studio",
              description:
                "Design de interiores residencial com olhar biofílico. Projetos completos e consultorias em Campinas, SP.",
              url: "https://leticiamoraes.arq.br",
              telephone: "+55-19-99876-4321",
              email: "ola@leticiamoraes.arq.br",
              image: "https://leticiamoraes.arq.br/assets/submark-com-fundo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "R. das Hortênsias, 128",
                addressLocality: "Campinas",
                addressRegion: "SP",
                postalCode: "13025-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -22.9056,
                longitude: -47.0608,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://instagram.com/leticiamoraes.interiores",
                "https://pinterest.com/leticiamoraes",
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -22.9056,
                  longitude: -47.0608,
                },
                geoRadius: "200000",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
