import Image from 'next/image'
import { contact, services, areas } from '@/lib/data'

const filteredServices = services.filter((s) => s.id !== 'roof')

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingTop: '4rem',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gap: '3rem', marginBottom: '3rem' }}>
          {/* Col 1: Logo + tagline + contacts */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Image
                src="/logo-dark.png"
                alt="New Seed Painting Group"
                width={80}
                height={80}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontStyle: 'italic',
              fontSize: '0.875rem',
              marginBottom: 24,
              lineHeight: 1.5,
            }}>
              Planting the Seed of Transformation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={contact.phoneHref} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <PhoneIcon /> {contact.phone}
              </a>
              <a href={contact.emailHref} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <MailIcon /> {contact.email}
              </a>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: 4 }}>
                {contact.address}
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16, letterSpacing: '0.05em' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filteredServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#services')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      padding: 0,
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16, letterSpacing: '0.05em' }}>
              Service Areas
            </h4>
            <div style={{ marginBottom: 16 }}>
              <p style={{ color: '#E8A824', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}>
                Northern Beaches
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {areas.northern.slice(0, 8).map((area) => (
                  <span key={area} style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.8rem',
                  }}>
                    {area} ·
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}>
                Greater Sydney
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {areas.greater.slice(0, 5).map((area) => (
                  <span key={area} style={{
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: '0.8rem',
                  }}>
                    {area} ·
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1.5rem 0',
          textAlign: 'center',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.75rem',
            lineHeight: 1.6,
          }}>
            © 2026 New Seed Painting Group Pty Ltd · ABN {contact.abn} · {contact.license}
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
