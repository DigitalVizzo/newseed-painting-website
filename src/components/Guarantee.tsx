'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { guarantee } from '@/lib/data'
import AnimateOnScroll, { StaggerChildren, StaggerItem } from './AnimateOnScroll'

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      style={{ background: '#F7F5F0', padding: '7rem 0', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            color: '#E8A824',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            OUR PROMISE
          </p>
          <h2
            className="font-serif"
            style={{
              color: '#1A1A1A',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: 16,
            }}
          >
            {guarantee.title}
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto',
          }}>
            {guarantee.intro}
          </p>
        </AnimateOnScroll>

        <StaggerChildren
          staggerDelay={0.15}
          className="guarantee-grid"
          style={{ display: 'grid', gap: 24 }}
        >
          {guarantee.items.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '2.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <CheckCircle size={28} color="#E8A824" strokeWidth={1.5} style={{ marginBottom: 20 }} />
                <h3 style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '1.1rem', marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <style>{`
        .guarantee-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .guarantee-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </section>
  )
}
