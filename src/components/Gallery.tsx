'use client';

import { galleryItems } from '@/lib/data';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
            <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
              Our Work
            </span>
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
            Our Recent Work
          </h2>
        </div>

        {/* Gallery grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className="relative rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
              style={{
                aspectRatio: index === 0 || index === 3 ? '16/10' : '4/3',
                background: 'linear-gradient(135deg, #404040 0%, #1a1a1a 100%)',
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(50,50,50,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                }}
              >
                <div className="w-px h-10 bg-[#E8A824] opacity-50" />
                <span className="text-[#E8A824] text-[0.7rem] tracking-[0.25em] uppercase font-medium">
                  {item.label}
                </span>
                <span className="text-xs tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Project Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-6" style={{ color: '#6B6B6B' }}>
          More photos available on request. Contact us to discuss your project.
        </p>
      </div>
    </section>
  );
}
