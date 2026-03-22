'use client';

import { services } from '@/lib/data';

// SVG icons for each service
const ServiceIcons: Record<string, React.ReactNode> = {
  interior: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 13h24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8V6M20 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="13" y="18" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  exterior: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L4 14h3v13h18V14h3L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="12" y="20" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  commercial: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14h24M14 6v20M14 14V6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="19" width="5" height="7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  roof: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16L16 4l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 16v12h18V16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 16h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  strata: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="11" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="10" width="11" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 11h5M6 15h5M6 19h5M21 15h5M21 19h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  newbuild: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8" y="14" width="16" height="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14h24M12 14V10l4-4 4 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="13" y="19" width="6" height="9" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="services"
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
              Our Services
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
            What We Do Best
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5px',
            backgroundColor: 'rgba(0,0,0,0.06)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div
      className="service-card"
      style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.backgroundColor = '#0a0a0a';
        const title = card.querySelector('.card-title') as HTMLElement;
        const desc = card.querySelector('.card-desc') as HTMLElement;
        const iconWrap = card.querySelector('.card-icon') as HTMLElement;
        if (title) title.style.color = '#ffffff';
        if (desc) desc.style.color = 'rgba(255,255,255,0.55)';
        if (iconWrap) {
          iconWrap.style.borderColor = 'rgba(232,168,36,0.3)';
          iconWrap.style.backgroundColor = 'rgba(232,168,36,0.08)';
          iconWrap.style.color = '#E8A824';
        }
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget as HTMLElement;
        card.style.backgroundColor = '#ffffff';
        const title = card.querySelector('.card-title') as HTMLElement;
        const desc = card.querySelector('.card-desc') as HTMLElement;
        const iconWrap = card.querySelector('.card-icon') as HTMLElement;
        if (title) title.style.color = '#0a0a0a';
        if (desc) desc.style.color = '#6B6B6B';
        if (iconWrap) {
          iconWrap.style.borderColor = 'rgba(232,168,36,0.2)';
          iconWrap.style.backgroundColor = 'rgba(232,168,36,0.04)';
          iconWrap.style.color = '#E8A824';
        }
      }}
    >
      {/* Icon */}
      <div
        className="card-icon"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '10px',
          border: '1px solid rgba(232,168,36,0.2)',
          backgroundColor: 'rgba(232,168,36,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          color: '#E8A824',
          transition: 'border-color 0.3s ease, background-color 0.3s ease',
        }}
      >
        {ServiceIcons[service.icon]}
      </div>

      {/* Title */}
      <h3
        className="card-title"
        style={{
          fontSize: '1.15rem',
          fontWeight: 600,
          color: '#0a0a0a',
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
          transition: 'color 0.3s ease',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="card-desc"
        style={{
          color: '#6B6B6B',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          transition: 'color 0.3s ease',
        }}
      >
        {service.description}
      </p>

      {/* Gold accent line on hover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#E8A824',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease',
        }}
      />
    </div>
  );
}
