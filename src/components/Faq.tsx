'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/lib/data'
import AnimateOnScroll from './AnimateOnScroll'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{ background: 'white', padding: '7rem 0', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="faq-layout" style={{ display: 'grid', gap: '3rem', alignItems: 'start' }}>
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
              FAQ
            </p>
            <h2
              className="font-serif"
              style={{
                color: '#1A1A1A',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
              }}
            >
              Common Questions
            </h2>
          </AnimateOnScroll>

          {/* Right: Accordion */}
          <AnimateOnScroll animation="fadeRight" delay={0.1}>
            <div>
              {faq.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={i} style={{ borderBottom: '1px solid #E8E4DC' }}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        gap: 16,
                      }}
                    >
                      <span style={{
                        color: isOpen ? '#E8A824' : '#1A1A1A',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        transition: 'color 0.2s ease',
                      }}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        color={isOpen ? '#E8A824' : '#ccc'}
                        style={{
                          flexShrink: 0,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </button>
                    <div id={`faq-answer-${i}`} role="region" style={{
                      maxHeight: isOpen ? 300 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}>
                      <p style={{
                        color: '#999',
                        fontSize: '0.85rem',
                        lineHeight: 1.7,
                        paddingBottom: '1.25rem',
                      }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      <style>{`
        .faq-layout { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .faq-layout { grid-template-columns: 1fr 1.5fr; } }
      `}</style>
    </section>
  )
}
