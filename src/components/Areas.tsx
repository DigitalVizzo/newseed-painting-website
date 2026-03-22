'use client';

import { areas } from '@/lib/data';

export default function Areas() {
  return (
    <section
      id="areas"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-block w-8 h-px bg-[#E8A824]" />
          <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
            Service Areas
          </span>
          <span className="inline-block w-8 h-px bg-[#E8A824]" />
        </div>

        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-3">
          We Cover All of Greater Sydney
        </h2>
        <p className="text-sm md:text-base mb-8 md:mb-12" style={{ color: '#6B6B6B' }}>
          From the Eastern Suburbs to the Blue Mountains — we come to you.
        </p>

        {/* Areas badges — flex-wrap, smaller on mobile */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {areas.map((area) => (
            <AreaBadge key={area} area={area} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs md:text-sm mt-8" style={{ color: '#6B6B6B' }}>
          Not sure if we service your area?{' '}
          <a
            href="#contact"
            className="hover:opacity-80 transition-opacity font-medium underline"
            style={{ color: '#E8A824' }}
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
      className="inline-block px-3 py-1.5 text-sm rounded-full font-medium cursor-default transition-all duration-200 md:px-4 md:py-2 md:text-base"
      style={{
        backgroundColor: '#F5F5F0',
        color: '#374151',
        border: '1px solid rgba(0,0,0,0.06)',
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
