'use client'

import { ShieldCheck, Sparkles, Handshake } from 'lucide-react'
import { about } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'
import LeafWatermark from './LeafWatermark'

const pillarIcons = [ShieldCheck, Sparkles, Handshake]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#F7F5F0', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <LeafWatermark opacity={0.03} size={500} style={{ bottom: -100, right: -100, transform: 'rotate(-30deg)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div className="about-grid" style={{ display: 'grid', gap: '5rem', alignItems: 'start' }}>
          <AnimateOnScroll animation="fadeLeft">
            <p style={{
              color: '#E8A824',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              ABOUT
            </p>
            <h2
              className="font-serif"
              style={{
                color: '#1A1A1A',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              {about.title}
            </h2>
            <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8 }}>
              {about.text}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeRight" delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {about.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i]
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      padding: '1.25rem 0',
                      borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    }}
                  >
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}>
                      <Icon size={20} color="#E8A824" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>
                        {pillar.title}
                      </h3>
                      <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  )
}
