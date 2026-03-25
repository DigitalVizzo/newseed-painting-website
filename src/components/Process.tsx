'use client'

import { processSteps } from '@/lib/data'
import AnimateOnScroll, { StaggerChildren, StaggerItem } from './AnimateOnScroll'

export default function Process() {
  return (
    <section
      id="process"
      style={{ background: 'white', padding: '7rem 0', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="process-layout" style={{ display: 'grid', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Header */}
          <AnimateOnScroll animation="fadeLeft">
            <p style={{
              color: '#E8A824',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              PROCESS
            </p>
            <h2
              className="font-serif"
              style={{
                color: '#1A1A1A',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
              }}
            >
              How It Works
            </h2>
          </AnimateOnScroll>

          {/* Right: Steps */}
          <StaggerChildren staggerDelay={0.12} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1.5px solid #E8E4DC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span className="font-serif" style={{ fontSize: '1rem', color: '#E8A824' }}>
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>
                      {step.title}
                    </h3>
                    <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>

      <style>{`
        .process-layout { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .process-layout { grid-template-columns: 1fr 1.5fr; } }
      `}</style>
    </section>
  )
}
