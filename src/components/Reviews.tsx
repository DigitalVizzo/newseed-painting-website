import { reviews } from '@/lib/data'

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{ background: '#111111', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {reviews.inviteMode ? (
          /* Invite Mode */
          <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            {/* Stars */}
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: '3rem', color: '#E8A824', letterSpacing: 4 }}>★★★★★</span>
            </div>

            {/* Title */}
            <h2
              className="font-playfair"
              style={{
                color: 'white',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {reviews.inviteTitle}
            </h2>

            {/* Text */}
            <p style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: 16,
            }}>
              {reviews.inviteText}
            </p>

            {/* Note */}
            <p style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              marginBottom: 36,
              fontStyle: 'italic',
            }}>
              {reviews.inviteNote}
            </p>

            {/* CTA */}
            <a
              href="https://maps.google.com/?q=New+Seed+Painting+Group"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#E8A824',
                color: '#0a0a0a',
                fontWeight: 700,
                padding: '1rem 2.5rem',
                borderRadius: 9999,
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 8px 30px rgba(232,168,36,0.2)',
                transition: 'background 0.2s ease',
                marginBottom: 28,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#CC8C1A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#E8A824')}
            >
              {reviews.inviteCta}
            </a>

            <div>
              <a
                href="https://maps.google.com/?q=New+Seed+Painting+Group"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                Or read what our first clients are saying →
              </a>
            </div>
          </div>
        ) : (
          /* Review List Mode */
          <div>
            <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <p style={{ color: '#E8A824', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
                CLIENT STORIES
              </p>
              <h2 className="font-playfair" style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
                What Our Clients Say
              </h2>
            </div>
            <div className="fade-in reviews-grid" style={{ display: 'grid', gap: 20 }}>
              {reviews.list.map((review, i) => (
                <div key={i} style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                  <div style={{ color: '#E8A824', marginBottom: 12, fontSize: '1.1rem', letterSpacing: 2 }}>
                    {'★'.repeat(review.rating)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{review.name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .reviews-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
