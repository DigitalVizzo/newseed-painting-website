import { areas } from '@/lib/data'

export default function Areas() {
  return (
    <section
      id="areas"
      style={{ background: '#0a0a0a', padding: '6rem 0' }}
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
            WHERE WE WORK
          </p>
          <h2
            className="font-playfair"
            style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            {areas.title}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: 680,
            margin: '0 auto',
          }}>
            {areas.intro}
          </p>
        </div>

        {/* Northern Beaches */}
        <div className="fade-in" style={{ marginBottom: 40 }}>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: 16,
          }}>
            Northern Beaches — Our Heartland
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {areas.northern.map((area) => (
              <span
                key={area}
                style={{
                  background: 'rgba(232,168,36,0.1)',
                  border: '1px solid rgba(232,168,36,0.3)',
                  color: '#E8A824',
                  padding: '6px 14px',
                  borderRadius: 9999,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'default',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#E8A824'
                  el.style.color = '#0a0a0a'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(232,168,36,0.1)'
                  el.style.color = '#E8A824'
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Greater Sydney */}
        <div className="fade-in" style={{ marginBottom: 32 }}>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: 16,
          }}>
            Greater Sydney
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {areas.greater.map((area) => (
              <span
                key={area}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '6px 14px',
                  borderRadius: 9999,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'default',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.1)'
                  el.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.05)'
                  el.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="fade-in" style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: 16,
        }}>
          {areas.note}
        </p>
      </div>
    </section>
  )
}
