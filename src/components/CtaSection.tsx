'use client';

import { contact } from '@/lib/data';

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(232,168,36,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(232,168,36,0.03) 0%, transparent 40%)',
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="inline-block w-8 h-px bg-[#E8A824]" />
          <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
            Free Quote
          </span>
          <span className="inline-block w-8 h-px bg-[#E8A824]" />
        </div>

        <h2
          className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
        >
          Ready to Transform{' '}
          <span style={{ color: '#E8A824' }}>Your Property?</span>
        </h2>

        <p
          className="text-sm md:text-base leading-relaxed mb-8 max-w-[520px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}
        >
          Contact us today for a free, no-obligation quote. We service all areas
          across Greater Sydney.
        </p>

        {/* CTA Button — full width on mobile, auto on md+ */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="w-full max-w-xs md:w-auto no-underline inline-flex items-center justify-center text-[#0a0a0a] font-bold text-sm md:text-base py-4 px-8 rounded tracking-wide transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#E8A824' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#CC8C1A';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#E8A824';
            }}
          >
            Get Your Free Quote →
          </a>
        </div>

        {/* Contact info — stacked on mobile, row on md+ */}
        <div className="flex flex-col gap-3 items-center md:flex-row md:gap-8 md:justify-center text-sm md:text-base">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-[#E8A824]"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <span>📞</span>
            <span>{contact.phone}</span>
          </a>
          <a
            href={contact.emailHref}
            className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-[#E8A824]"
            style={{ color: 'rgba(255,255,255,0.7)' }}
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
