import type { MetadataRoute } from 'next'

const BASE = 'https://leticiamoraes.arq.br'

const PROJETO_IMAGES = [
  `${BASE}/assets/projetos/talita-lugano.png`,
  `${BASE}/assets/projetos/lillan-paulo.png`,
  `${BASE}/assets/projetos/marina-colin.png`,
  `${BASE}/assets/projetos/pamella-gesner.png`,
  `${BASE}/assets/projetos/larissa-felipe.jpg`,
  `${BASE}/assets/projetos/luana-daniel.png`,
  `${BASE}/assets/projetos/murilo-giuliana.png`,
  `${BASE}/assets/projetos/thais-leonardo.png`,
  `${BASE}/assets/leticia.jpg`,
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly',
      priority: 1,
      images: PROJETO_IMAGES,
    },
  ]
}
