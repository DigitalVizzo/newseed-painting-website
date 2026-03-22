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
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
            <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
              Our Services
            </span>
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
          </div>
          <h2
            className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight"
          >
            What We Do Best
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col md, 3 col lg */}
        <div
          className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}
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
      className="service-card bg-white p-6 md:p-10 cursor-default relative overflow-hidden transition-colors duration-300 group"
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
        className="card-icon w-14 h-14 rounded-[10px] flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          border: '1px solid rgba(232,168,36,0.2)',
          backgroundColor: 'rgba(232,168,36,0.04)',
          color: '#E8A824',
        }}
      >
        {ServiceIcons[service.icon]}
      </div>

      {/* Title */}
      <h3
        className="card-title text-lg md:text-xl font-semibold text-[#0a0a0a] mb-3 tracking-tight transition-colors duration-300"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="card-desc text-sm md:text-base leading-relaxed transition-colors duration-300"
        style={{ color: '#6B6B6B' }}
      >
        {service.description}
      </p>

      {/* Gold accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8A824] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
      />
    </div>
  );
}
