import { about } from '@/lib/data'

const pillarIcons = ['🏅', '✨', '🤝']

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#0a0a0a', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="about-grid fade-in" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>
          {/* Left: Text */}
          <div>
            <p style={{
              color: '#E8A824',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              WHO WE ARE
            </p>
            <h2
              className="font-playfair"
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 28,
              }}
            >
              Built on Craft.<br />Backed by Purpose.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
            }}>
              {about.text}
            </p>
          </div>

          {/* Right: Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {about.pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(232,168,36,0.3)'
                  el.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{pillarIcons[i]}</span>
                  <div>
                    <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>
                      {pillar.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
