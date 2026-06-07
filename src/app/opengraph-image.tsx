import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#2C3A2E',
        }}
      >
        {/* top accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: '#8AAF8C',
            }}
          />
          <span
            style={{
              fontSize: '15px',
              color: '#8AAF8C',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'serif',
            }}
          >
            Design de Interiores · Campinas, SP
          </span>
        </div>

        {/* main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 400,
              color: '#F5F0E8',
              lineHeight: 1,
              fontFamily: 'serif',
            }}
          >
            Letícia Moraes
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#B5C4A8',
              fontFamily: 'serif',
              fontStyle: 'italic',
            }}
          >
            interiores que respiram.
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#6B8C70',
              fontFamily: 'sans-serif',
              maxWidth: '680px',
              lineHeight: 1.5,
            }}
          >
            Projetos residenciais com olhar biofílico — luz natural, materiais honestos e o ritmo de quem mora ali.
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '24px',
              fontSize: '14px',
              color: '#4A6B4E',
              fontFamily: 'sans-serif',
            }}
          >
            <span>Residencial</span>
            <span>·</span>
            <span>Consultoria</span>
            <span>·</span>
            <span>Design Biofílico</span>
          </div>
          <span
            style={{
              fontSize: '14px',
              color: '#4A6B4E',
              fontFamily: 'sans-serif',
            }}
          >
            leticiamoraes.arq.br
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
