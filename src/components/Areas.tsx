'use client';

import { areas } from '@/lib/data';

export default function Areas() {
  return (
    <section
      id="areas"
      style={{
        backgroundColor: '#ffffff',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
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
            Service Areas
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
          We Cover All of Greater Sydney
        </h2>
        <p
          style={{
            color: '#6B6B6B',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          From the Eastern Suburbs to the Blue Mountains — we come to you.
        </p>

        {/* Areas grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}
        >
          {areas.map((area) => (
            <AreaBadge key={area} area={area} />
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            color: '#6B6B6B',
            fontSize: '0.85rem',
            marginTop: '2.5rem',
          }}
        >
          Not sure if we service your area?{' '}
          <a
            href="#contact"
            style={{
              color: '#E8A824',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            Contact us
          </a>{' '}
          — we&apos;ll let you know.
        </p>
      </div>
    </section>
  );
}

function AreaBadge({ area }: { area: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.55rem 1.1rem',
        backgroundColor: '#F5F5F0',
        color: '#374151',
        borderRadius: '100px',
        fontSize: '0.875rem',
        fontWeight: 500,
        border: '1px solid rgba(0,0,0,0.06)',
        cursor: 'default',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = '#E8A824';
        el.style.color = '#0a0a0a';
        el.style.borderColor = '#E8A824';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = '#F5F5F0';
        el.style.color = '#374151';
        el.style.borderColor = 'rgba(0,0,0,0.06)';
      }}
    >
      {area}
    </span>
  );
}
