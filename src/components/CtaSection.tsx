import { cta, contact } from '@/lib/data'

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{ background: '#0a0a0a', padding: '2rem 0 6rem' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          className="fade-in"
          style={{
            background: 'linear-gradient(135deg, #CC8C1A 0%, #E8A824 50%, #D4A030 100%)',
            borderRadius: 24,
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
          }}
        >
          <h2
            className="font-playfair"
            style={{
              color: '#0a0a0a',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            {cta.title}
          </h2>
          <p style={{
            color: 'rgba(10,10,10,0.7)',
            fontSize: '1.1rem',
            marginBottom: 36,
            lineHeight: 1.6,
          }}>
            {cta.subtitle}
          </p>

          {/* Main CTA button */}
          <a
            href={contact.phoneHref}
            style={{
              display: 'inline-block',
              background: '#0a0a0a',
              color: 'white',
              fontWeight: 700,
              padding: '1.25rem 2.5rem',
              borderRadius: 9999,
              textDecoration: 'none',
              fontSize: '1.1rem',
              marginBottom: 24,
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(10,10,10,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}
          >
            {cta.button}
          </a>

          <p style={{
            color: 'rgba(10,10,10,0.55)',
            fontSize: '0.875rem',
            marginBottom: 32,
          }}>
            {cta.note}
          </p>

          {/* Contact links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 24,
          }}>
            <a
              href={contact.phoneHref}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#0a0a0a',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <PhoneIcon /> {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#0a0a0a',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <MailIcon /> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
