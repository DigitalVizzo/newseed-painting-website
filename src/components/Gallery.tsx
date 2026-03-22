'use client';

import { galleryItems } from '@/lib/data';

export default function Gallery() {
  return (
    <section
      id="gallery"
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
              Our Work
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
            }}
          >
            Our Recent Work
          </h2>
        </div>

        {/* Gallery Grid */}
        {/* TODO: Replace with real project photos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1rem',
          }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              style={{
                position: 'relative',
                aspectRatio: index === 0 || index === 3 ? '16/10' : '4/3',
                borderRadius: '10px',
                overflow: 'hidden',
                background: `linear-gradient(135deg, #404040 0%, #1a1a1a 100%)`,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'scale(1.02)';
                el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'none';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(50,50,50,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {/* Gold diamond icon */}
                <div
                  style={{
                    width: '2px',
                    height: '40px',
                    backgroundColor: '#E8A824',
                    opacity: 0.5,
                  }}
                />
                <span
                  style={{
                    color: '#E8A824',
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {/* TODO: Replace with real project photos */}
                  Project Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            color: '#6B6B6B',
            fontSize: '0.85rem',
            marginTop: '2rem',
          }}
        >
          More photos available on request. Contact us to discuss your project.
        </p>
      </div>
    </section>
  );
}
