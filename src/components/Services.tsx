'use client'

import { motion } from 'framer-motion'
import { Home, Building, Building2, Layers, Hammer } from 'lucide-react'
import { services } from '@/lib/data'
import type { LucideIcon } from 'lucide-react'
import AnimateOnScroll, { StaggerChildren, StaggerItem } from './AnimateOnScroll'

const serviceIcons: Record<string, LucideIcon> = {
  interior: Home,
  exterior: Building,
  commercial: Building2,
  strata: Layers,
  newbuild: Hammer,
}

const filteredServices = services.filter((s) => s.id !== 'roof')

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: 'white', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <AnimateOnScroll style={{ marginBottom: '3rem' }}>
          <p style={{
            color: '#E8A824',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            SERVICES
          </p>
          <h2
            className="font-serif"
            style={{
              color: '#1A1A1A',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
            }}
          >
            What We Do
          </h2>
        </AnimateOnScroll>

        <StaggerChildren staggerDelay={0.08} className="services-grid" style={{ display: 'grid', gap: 16 }}>
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.id] || Home
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                  style={{
                    background: '#F7F5F0',
                    borderRadius: 20,
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    transition: 'box-shadow 0.3s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}>
                    <Icon size={22} color="#E8A824" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '1.05rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>

      <style>{`
        .services-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </section>
  )
}
