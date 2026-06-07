import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Letícia Moraes — Design de Interiores · Campinas, SP'

export default function Image() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), 'public/assets/logo-horizontal-bege.png')
  )
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#2C3A2E',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative top stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #8AAF8C 0%, #B5C4A8 50%, #8AAF8C 100%)',
            display: 'flex',
          }}
        />

        {/* Decorative bottom stripe */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            backgroundColor: '#4A6B4E',
            display: 'flex',
          }}
        />

        {/* Subtle background texture — right side block */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '380px',
            background:
              'linear-gradient(135deg, rgba(138,175,140,0.08) 0%, rgba(74,107,78,0.15) 100%)',
            display: 'flex',
          }}
        />

        {/* Main layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            height: '100%',
          }}
        >
          {/* Top: location tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '28px',
                height: '1px',
                backgroundColor: '#8AAF8C',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                color: '#8AAF8C',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontFamily: 'serif',
              }}
            >
              Campinas, SP · Brasil
            </span>
          </div>

          {/* Center: logo + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Logo image */}
            <img
              src={logoBase64}
              style={{
                width: '380px',
                objectFit: 'contain',
                objectPosition: 'left center',
              }}
            />

            {/* Tagline */}
            <div
              style={{
                fontSize: '34px',
                fontStyle: 'italic',
                color: '#B5C4A8',
                fontFamily: 'serif',
                lineHeight: 1.3,
              }}
            >
              interiores que respiram.
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '19px',
                color: '#6B8C70',
                fontFamily: 'sans-serif',
                lineHeight: 1.55,
                maxWidth: '600px',
                fontWeight: 300,
              }}
            >
              Projetos residenciais com olhar biofílico — luz natural,
              materiais honestos e o ritmo de quem mora ali.
            </div>
          </div>

          {/* Bottom: services + URL */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '13px',
                color: '#4A6B4E',
                fontFamily: 'sans-serif',
                letterSpacing: '0.08em',
              }}
            >
              <span>Projeto Residencial</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>Consultoria Online</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>Design Biofílico</span>
            </div>
            <span
              style={{
                fontSize: '14px',
                color: '#4A6B4E',
                fontFamily: 'sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              leticiamoraes.arq.br
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
