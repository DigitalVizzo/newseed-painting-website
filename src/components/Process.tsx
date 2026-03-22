import { processSteps } from '@/lib/data';

export default function Process() {
  return (
    <section
      id="process"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
            <span className="text-[#E8A824] text-xs font-medium tracking-[0.2em] uppercase">
              Our Process
            </span>
            <span className="inline-block w-8 h-px bg-[#E8A824]" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
            How We Work
          </h2>
        </div>

        {/* Steps — vertical on mobile, horizontal on lg */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
          {/* Connecting line — only visible lg+ */}
          <div
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px"
            style={{ backgroundColor: 'rgba(232,168,36,0.2)' }}
          />

          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="flex gap-4 relative lg:flex-col lg:items-center lg:flex-1 lg:gap-0"
            >
              {/* Step number circle */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold relative z-10 lg:mb-6 lg:mx-auto"
                style={{
                  border: '1.5px solid #E8A824',
                  backgroundColor: index % 2 === 0 ? '#E8A824' : '#ffffff',
                  color: index % 2 === 0 ? '#0a0a0a' : '#E8A824',
                }}
              >
                {step.step}
              </div>

              {/* Content */}
              <div className="lg:text-center">
                <h3 className="text-base md:text-lg font-semibold text-[#0a0a0a] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#6B6B6B' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
