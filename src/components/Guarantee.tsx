import { guarantee } from '@/lib/data'

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="#E8A824" strokeWidth="1.5" />
    <path d="M7 12l3.5 3.5L17 8.5" stroke="#E8A824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      style={{
        background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 100%)',
        padding: '6rem 0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            color: '#E8A824',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            OUR COMMITMENT
          </p>
          <h2
            className="font-playfair"
            style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              marginBottom: 20,
            }}
          >
            {guarantee.title}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: 640,
            margin: '0 auto',
          }}>
            {guarantee.intro}
          </p>
        </div>

        {/* Cards */}
        <div className="fade-in guarantee-grid" style={{ display: 'grid', gap: 20 }}>
          {guarantee.items.map((item, i) => (
            <div
              key={i}
              style={{
                border: '1px solid rgba(232,168,36,0.2)',
                borderRadius: 16,
                padding: '2rem',
                background: 'rgba(232,168,36,0.03)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(232,168,36,0.5)'
                el.style.background = 'rgba(232,168,36,0.06)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(232,168,36,0.2)'
                el.style.background = 'rgba(232,168,36,0.03)'
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <CheckIcon />
              </div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>
                {item.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .guarantee-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .guarantee-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
