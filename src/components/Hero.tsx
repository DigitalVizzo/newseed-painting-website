'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        paddingTop: '72px',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(232,168,36,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(232,168,36,0.03) 0%, transparent 40%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full px-4 py-12 md:px-8 md:py-16 lg:px-6 lg:py-20 relative z-10">

        {/* Tagline chip — centered on mobile, left on lg */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <span className="inline-block w-6 h-px bg-[#E8A824]" />
          <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
            Sydney&apos;s Premium Painters
          </span>
          <span className="inline-block w-6 h-px bg-[#E8A824]" />
        </div>

        {/* Main headline */}
        <h1
          className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-center lg:text-left mb-5 max-w-[900px] mx-auto lg:mx-0"
        >
          Planting the Seed of{' '}
          <span style={{ color: '#E8A824' }}>Transformation</span>{' '}
          in Your Sydney Home
        </h1>

        {/* Sub-headline */}
        <p className="text-white/65 text-sm md:text-base lg:text-lg leading-relaxed max-w-[580px] text-center lg:text-left mx-auto lg:mx-0 mb-8">
          Expert painting solutions for residential and commercial properties
          across Greater Sydney
        </p>

        {/* CTAs — column on mobile, row on md+ */}
        <div className="flex flex-col gap-3 items-center md:flex-row md:justify-center lg:justify-start mb-10">
          <a
            href="#contact"
            className="w-full max-w-xs md:w-auto no-underline inline-flex items-center justify-center text-[#0a0a0a] font-semibold text-[0.95rem] py-[0.9rem] px-8 rounded tracking-wide transition-all duration-200 hover:-translate-y-px"
            style={{ backgroundColor: '#E8A824' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#CC8C1A')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#E8A824')}
          >
            Get a Free Quote
          </a>
          <a
            href="#gallery"
            className="w-full max-w-xs md:w-auto no-underline inline-flex items-center justify-center text-white font-medium text-[0.95rem] py-[0.9rem] px-8 rounded tracking-wide transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'transparent' }}
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

        {/* Stats — column on mobile, row on md+ */}
        <div
          className="flex flex-col gap-4 items-center md:flex-row md:gap-8 md:justify-center lg:justify-start pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '10+', label: 'Years Experience' },
            { value: '5★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#E8A824] text-[1.6rem] font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs tracking-[0.06em] uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
