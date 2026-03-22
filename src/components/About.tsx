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
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-px bg-[#E8A824]" />
          <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
            About Us
          </span>
        </div>

        {/* Main grid — 1 col mobile, 2 col md+ */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start">
          {/* Text block */}
          <div>
            <h2
              className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-5"
            >
              Sydney&apos;s Trusted{' '}
              <span style={{ color: '#E8A824' }}>Painting</span>{' '}
              Professionals
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed mb-5"
              style={{ color: '#6B6B6B', lineHeight: 1.8 }}
            >
              New Seed Painting Group is a hardworking team of experienced and
              devoted painters operating across the entire Sydney area. We take
              pride in the reputation we&apos;ve developed delivering exceptional
              results for every client.
            </p>
            <a
              href="#contact"
              className="inline-block no-underline text-sm md:text-base font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
              style={{
                color: '#E8A824',
                borderBottom: '1px solid #E8A824',
                paddingBottom: '2px',
              }}
            >
              Request a Free Quote →
            </a>
          </div>

          {/* Pillars — 1 col mobile, same col md (already in 2-col grid) */}
          <div className="flex flex-col gap-6 md:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-4 items-start"
              >
                <div
                  className="flex-shrink-0 w-[52px] h-[52px] rounded-lg flex items-center justify-center"
                  style={{
                    border: '1px solid rgba(232,168,36,0.2)',
                    backgroundColor: 'rgba(232,168,36,0.04)',
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[#0a0a0a] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
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
