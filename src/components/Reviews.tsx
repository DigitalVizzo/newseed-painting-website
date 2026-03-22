'use client';
// TODO: Replace placeholder reviews with real Google Reviews
// You can embed the Google Reviews widget or use Google Places API
import { reviews } from '@/lib/data';

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#E8A824', fontSize: '0.95rem' }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        backgroundColor: '#F5F5F0',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1.2rem',
            }}
          >
            <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: '#E8A824' }} />
            <span style={{ color: '#E8A824', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Client Reviews
            </span>
            <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: '#E8A824' }} />
          </div>
          <h2
            className="font-playfair"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#0a0a0a',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            What Our Clients Say
          </h2>

          {/* Google badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#0a0a0a',
            }}
          >
            <span style={{ color: '#E8A824' }}>★★★★★</span>
            <span>5.0 on Google</span>
            {/* Google icon placeholder */}
            <span style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>· 47 reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '12px',
                padding: '1.8rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                el.style.transform = 'none';
              }}
            >
              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Text */}
              <p
                style={{
                  color: '#374151',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  margin: '1rem 0 1.2rem',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0a0a0a' }}>
                    {review.name}
                  </div>
                  <div style={{ color: '#6B6B6B', fontSize: '0.78rem', marginTop: '2px' }}>
                    {review.date}
                  </div>
                </div>
                {/* Google G icon */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f3f4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#4285F4',
                    flexShrink: 0,
                  }}
                >
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
