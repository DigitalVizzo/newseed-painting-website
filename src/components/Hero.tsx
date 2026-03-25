'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone } from 'lucide-react'
import { contact } from '@/lib/data'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.4])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Video background - ping pong loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="Premium interior painting showcase video"
        ref={(el) => { if (el) el.playbackRate = 0.7 }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/images/video-pingpong.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* Bottom gradient for smooth section transition */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
      }} />

      {/* Scroll-driven extra darkening */}
      <motion.div style={{
        position: 'absolute',
        inset: 0,
        background: 'black',
        opacity: overlayOpacity,
      }} />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          y: textY,
        }}
      >
        <div style={{ maxWidth: 600 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginBottom: 24 }}
          >
            <span style={{
              color: '#E8A824',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}>
              From the Northern Beaches to All of Sydney
            </span>
          </motion.div>

          {/* Headline with glass shadow */}
          <div style={{ position: 'relative', marginBottom: 24 }}>
            {/* Glass blur layer behind text */}
            <div aria-hidden className="font-serif" style={{
              position: 'absolute',
              inset: 0,
              fontSize: 'clamp(2.75rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'transparent',
              WebkitTextStroke: '0px transparent',
              filter: 'blur(30px)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              pointerEvents: 'none',
              zIndex: 0,
            }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)' }}>Your Home Deserves</span>
              <span style={{ display: 'block', color: 'rgba(232,168,36,0.7)' }}>More Than a Paint Job.</span>
            </div>
            {/* Actual text */}
            <h1 className="font-serif" style={{
              position: 'relative',
              fontSize: 'clamp(2.75rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'white',
              zIndex: 1,
            }}>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'block' }}
              >
                Your Home Deserves
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'block', color: '#E8A824' }}
              >
                More Than a Paint Job.
              </motion.span>
            </h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 40,
              textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            }}
          >
            Based in the Northern Beaches, delivering premium painting across all of Sydney. Licensed, insured, 5-year guarantee.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}
          >
            <motion.a
              href={contact.phoneHref}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(232,168,36,0.15)',
                backdropFilter: 'blur(12px) saturate(1.5)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.5)',
                border: '1px solid rgba(232,168,36,0.3)',
                color: '#E8A824',
                fontWeight: 700,
                padding: '1rem 2rem',
                borderRadius: 9999,
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(232,168,36,0.15)',
              }}
            >
              <Phone size={18} />
              0426 745 547
            </motion.a>
            <motion.button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px) saturate(1.5)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.5)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontWeight: 500,
                padding: '1rem 2rem',
                borderRadius: 9999,
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: 26,
            height: 40,
            borderRadius: 13,
            border: '1.5px solid rgba(255,255,255,0.3)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 8,
          }}
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: 3, height: 7, borderRadius: 2, background: '#E8A824' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
