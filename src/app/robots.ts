import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://leticiamoraes.arq.br/sitemap.xml',
    host: 'https://leticiamoraes.arq.br',
  }
}
