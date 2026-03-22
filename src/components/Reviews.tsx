'use client';
// TODO: Replace placeholder reviews with real Google Reviews
import { reviews } from '@/lib/data';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#E8A824] text-base">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
            <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
              Client Reviews
            </span>
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight mb-4">
            What Our Clients Say
          </h2>

          {/* Google badge */}
          <div
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium text-[#0a0a0a]"
            style={{ border: '1px solid rgba(0,0,0,0.08)' }}
          >
            <span className="text-[#E8A824]">★★★★★</span>
            <span>5.0 on Google</span>
            <span className="text-xs" style={{ color: '#6B6B6B' }}>· 47 reviews</span>
          </div>
        </div>

        {/* Reviews grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl p-5 md:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Text */}
              <p
                className="text-sm md:text-base leading-relaxed my-4 italic"
                style={{ color: '#374151' }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-sm md:text-base text-[#0a0a0a]">
                    {review.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#6B6B6B' }}>
                    {review.date}
                  </div>
                </div>
                {/* Google G icon */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#f1f3f4', color: '#4285F4' }}
                >
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
