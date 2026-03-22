'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(232,168,36,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(232,168,36,0.03) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Tagline chip */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              height: '1px',
              backgroundColor: '#E8A824',
            }}
          />
          <span
            style={{
              color: '#E8A824',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Sydney&apos;s Premium Painters
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              height: '1px',
              backgroundColor: '#E8A824',
            }}
          />
        </div>

        {/* Main headline */}
        <h1
          className="font-playfair"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto 1.5rem',
          }}
        >
          Planting the Seed of{' '}
          <span style={{ color: '#E8A824' }}>Transformation</span>{' '}
          in Your Sydney Home
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 3rem',
          }}
        >
          Expert painting solutions for residential and commercial properties
          across Greater Sydney
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              backgroundColor: '#E8A824',
              color: '#0a0a0a',
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '0.9rem 2rem',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#CC8C1A';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#E8A824';
              el.style.transform = 'none';
            }}
          >
            Get a Free Quote
          </a>
          <a
            href="#gallery"
            style={{
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '0.95rem',
              padding: '0.9rem 2rem',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
              display: 'inline-block',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.7)';
              el.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.3)';
              el.style.backgroundColor = 'transparent';
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '1.5rem 2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '10+', label: 'Years Experience' },
            { value: '5★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#E8A824',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: '0.2rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
