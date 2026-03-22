'use client';

import { contact } from '@/lib/data';

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#0a0a0a',
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(232,168,36,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(232,168,36,0.03) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: '#E8A824' }} />
          <span style={{ color: '#E8A824', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Free Quote
          </span>
          <span style={{ display: 'inline-block', width: '32px', height: '1px', backgroundColor: '#E8A824' }} />
        </div>

        <h2
          className="font-playfair"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1.2rem',
          }}
        >
          Ready to Transform{' '}
          <span style={{ color: '#E8A824' }}>Your Property?</span>
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          Contact us today for a free, no-obligation quote. We service all areas
          across Greater Sydney.
        </p>

        {/* CTA Button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <a
            href={`mailto:${contact.email}`}
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              backgroundColor: '#E8A824',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '1rem 2.5rem',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#CC8C1A';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#E8A824';
              el.style.transform = 'none';
            }}
          >
            Get Your Free Quote →
          </a>
        </div>

        {/* Contact info */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={contact.phoneHref}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <span>📞</span>
            <span>{contact.phone}</span>
          </a>
          <a
            href={contact.emailHref}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <span>✉️</span>
            <span>{contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
