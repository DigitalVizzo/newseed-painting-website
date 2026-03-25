'use client'

import { Phone, Mail } from 'lucide-react'
import { cta, contact } from '@/lib/data'
import QuoteForm from './QuoteForm'
import LeafWatermark from './LeafWatermark'

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{ background: '#1A1A1A', padding: '6rem 0', position: 'relative', overflow: 'hidden', zIndex: 1 }}
    >
      <LeafWatermark opacity={0.04} size={500} style={{ top: -80, right: -100, transform: 'rotate(-20deg)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div className="cta-layout">
          {/* Left: Text */}
          <div>
            <h2
              className="font-serif"
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontWeight: 400,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              {cta.title}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.05rem',
              marginBottom: 36,
              lineHeight: 1.6,
              maxWidth: 420,
            }}>
              {cta.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a
                href={contact.phoneHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  color: '#E8A824',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                }}
              >
                <Phone size={22} /> {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <Mail size={18} /> {contact.email}
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            <h3 style={{
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginBottom: 20,
              textAlign: 'center',
            }}>
              Get Your Free Quote
            </h3>
            <QuoteForm dark />
          </div>
        </div>
      </div>

      <style>{`
        .cta-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .cta-layout {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  )
}
