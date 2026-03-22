'use client';

export default function About() {
  const pillars = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2L4 7V14c0 6.1 4.3 11.8 10 13.2C19.7 25.8 24 20.1 24 14V7L14 2Z" stroke="#E8A824" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 14l3.5 3.5L19 10" stroke="#E8A824" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Licensed & Insured',
      description: 'Fully licensed painters with comprehensive insurance for your peace of mind.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="11" stroke="#E8A824" strokeWidth="1.5" />
          <path d="M14 7v4l3 3" stroke="#E8A824" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 20l2-2M20 8l-2 2" stroke="#E8A824" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Premium Materials Only',
      description: 'We use only top-grade paints and materials for lasting results that stand the test of time.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3l2.5 7.5H24l-6.5 4.7 2.5 7.5L14 18.2l-6 4.5 2.5-7.5L4 10.5h7.5L14 3Z" stroke="#E8A824" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Satisfaction Guaranteed',
      description: "We're not done until you're completely satisfied. Your happiness is our benchmark.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#ffffff',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '32px',
              height: '1px',
              backgroundColor: '#E8A824',
            }}
          />
          <span
            style={{
              color: '#E8A824',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            About Us
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Text block */}
          <div>
            <h2
              className="font-playfair"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#0a0a0a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Sydney&apos;s Trusted{' '}
              <span style={{ color: '#E8A824' }}>Painting</span>{' '}
              Professionals
            </h2>
            <p
              style={{
                color: '#6B6B6B',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              New Seed Painting Group is a hardworking team of experienced and
              devoted painters operating across the entire Sydney area. We take
              pride in the reputation we&apos;ve developed delivering exceptional
              results for every client.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                color: '#E8A824',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #E8A824',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              Request a Free Quote →
            </a>
          </div>

          {/* Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  display: 'flex',
                  gap: '1.2rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '52px',
                    height: '52px',
                    borderRadius: '8px',
                    border: '1px solid rgba(232,168,36,0.2)',
                    backgroundColor: 'rgba(232,168,36,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#0a0a0a',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p style={{ color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
