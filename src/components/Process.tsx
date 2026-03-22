import { processSteps } from '@/lib/data';

export default function Process() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: '#ffffff',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              Our Process
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
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {/* Connecting line (decorative) */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              backgroundColor: 'rgba(232,168,36,0.2)',
              display: 'none', // hidden on mobile, shown on wider screens via className
            }}
            className="md:block"
          />

          {processSteps.map((step, index) => (
            <div
              key={step.step}
              style={{
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1.5px solid #E8A824',
                  backgroundColor: index % 2 === 0 ? '#E8A824' : '#ffffff',
                  color: index % 2 === 0 ? '#0a0a0a' : '#E8A824',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.step}
              </div>

              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#0a0a0a',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: '#6B6B6B',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
