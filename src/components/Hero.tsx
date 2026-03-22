'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { hero, contact } from '@/lib/data'

export default function Hero() {
  const [parallaxY, setParallaxY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      if (!isMobile) setParallaxY(window.scrollY * 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  const gridPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/G%3E%3C/svg%3E")`

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0a0a',
        overflow: 'hidden',
        paddingTop: 72,
      }}
    >
      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* Radial gold gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,168,36,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Parallax blur circle */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,168,36,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 0.1s linear',
          pointerEvents: 'none',
        }} />
      )}

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: 760 }}>
          {/* Mobile logo */}
          <div className="hero-logo-mobile" style={{ marginBottom: 32 }}>
            <Image
              src="/logo-dark.png"
              alt="New Seed Painting Group"
              width={120}
              height={120}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>

          {/* Badge */}
          <div style={{ marginBottom: 24 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid rgba(232,168,36,0.3)',
              borderRadius: 9999,
              padding: '6px 16px',
              color: '#E8A824',
              fontSize: '0.875rem',
              fontWeight: 500,
              background: 'rgba(232,168,36,0.05)',
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#E8A824',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-playfair"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
              color: 'white',
            }}
          >
            Your Home Deserves{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E8A824 0%, #fff 60%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}>
              More Than a Paint Job.
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
            maxWidth: 580,
            marginBottom: 40,
            fontFamily: "'Inter', sans-serif",
          }}>
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 64 }}>
            <a
              href={contact.phoneHref}
              style={{
                background: '#E8A824',
                color: '#0a0a0a',
                fontWeight: 700,
                padding: '1rem 2rem',
                borderRadius: 9999,
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 8px 30px rgba(232,168,36,0.2)',
                display: 'inline-block',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#CC8C1A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#E8A824')}
            >
              {hero.ctaPrimary}
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#services')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 500,
                padding: '1rem 2rem',
                borderRadius: 9999,
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {hero.ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="hero-stats">
            {hero.stats.map((stat, i) => (
              <div key={i} style={{
                borderTop: '2px solid rgba(232,168,36,0.5)',
                paddingTop: 16,
              }}>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', marginBottom: 4, lineHeight: 1.3 }}>
                  {stat.label}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (min-width: 1024px) {
          .hero-logo-mobile { display: none !important; }
          .hero-stats { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .hero-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
