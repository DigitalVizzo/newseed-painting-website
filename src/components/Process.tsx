import { processSteps } from '@/lib/data'

export default function Process() {
  return (
    <section
      id="process"
      style={{ background: '#0a0a0a', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            color: '#E8A824',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            HOW IT WORKS
          </p>
          <h2
            className="font-playfair"
            style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
            }}
          >
            From First Call to Final Coat
          </h2>
        </div>

        {/* Desktop: 4 columns with connector */}
        <div className="fade-in process-desktop" style={{ display: 'none' }}>
          {processSteps.map((step, i) => (
            <div key={step.step} style={{ position: 'relative', flex: 1 }}>
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 28,
                  left: '50%',
                  right: '-50%',
                  borderTop: '1px dashed rgba(232,168,36,0.2)',
                  zIndex: 0,
                }} />
              )}
              <div style={{ position: 'relative', zIndex: 1, padding: '0 1rem' }}>
                {/* Number background */}
                <div style={{ position: 'relative', marginBottom: 16 }}>
                  <span
                    className="font-playfair"
                    style={{
                      fontSize: '5rem',
                      fontWeight: 700,
                      color: 'rgba(232,168,36,0.15)',
                      lineHeight: 1,
                      display: 'block',
                      userSelect: 'none',
                    }}
                  >
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <div style={{
                    position: 'absolute',
                    top: 8,
                    left: 0,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(232,168,36,0.15)',
                    border: '1px solid rgba(232,168,36,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ color: '#E8A824', fontWeight: 700, fontSize: '0.875rem' }}>{step.step}</span>
                  </div>
                </div>
                <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1rem', marginBottom: 10, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="fade-in process-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {processSteps.map((step) => (
            <div key={step.step} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              {/* Number */}
              <div style={{ flexShrink: 0, position: 'relative' }}>
                <span
                  className="font-playfair"
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    color: 'rgba(232,168,36,0.2)',
                    lineHeight: 1,
                    display: 'block',
                    userSelect: 'none',
                    width: 60,
                    textAlign: 'center',
                  }}
                >
                  {String(step.step).padStart(2, '0')}
                </span>
              </div>
              <div style={{ paddingTop: 4 }}>
                <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.05rem', marginBottom: 8, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-desktop {
            display: flex !important;
            gap: 0;
          }
          .process-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
