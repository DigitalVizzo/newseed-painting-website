import { services } from '@/lib/data'

const serviceIcons: Record<string, string> = {
  interior: '🏠',
  exterior: '🏡',
  commercial: '🏢',
  strata: '🏗️',
  newbuild: '🔨',
}

// Filter out roof painting
const filteredServices = services.filter((s) => s.id !== 'roof')

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: '#111111', padding: '6rem 0' }}
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
            WHAT WE DO
          </p>
          <h2
            className="font-playfair"
            style={{
              color: 'white',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Premium Painting Services
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            for Sydney&apos;s Northern Beaches and Greater Sydney
          </p>
        </div>

        {/* First row: 3 cards */}
        <div className="fade-in services-row-3" style={{ display: 'grid', gap: 20, marginBottom: 20 }}>
          {filteredServices.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="fade-in services-row-2" style={{ display: 'grid', gap: 20 }}>
          {filteredServices.slice(3, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        .services-row-3 {
          grid-template-columns: 1fr;
        }
        .services-row-2 {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .services-row-3 { grid-template-columns: repeat(2, 1fr); }
          .services-row-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .services-row-3 { grid-template-columns: repeat(3, 1fr); }
          .services-row-2 {
            grid-template-columns: repeat(2, 1fr);
            max-width: 66.666%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ service }: { service: typeof filteredServices[0] }) {
  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: '2rem',
        background: 'rgba(255,255,255,0.02)',
        transition: 'all 0.5s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(232,168,36,0.4)'
        el.style.background = 'rgba(255,255,255,0.05)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.background = 'rgba(255,255,255,0.02)'
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>
        {serviceIcons[service.id] || '🎨'}
      </div>
      <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.2rem', marginBottom: 12 }}>
        {service.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {service.description}
      </p>
    </div>
  )
}
