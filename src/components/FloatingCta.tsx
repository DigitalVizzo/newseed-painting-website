'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { contact } from '@/lib/data'

export default function FloatingCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > window.innerHeight * 0.5)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={contact.phoneHref}
      className="floating-cta"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        background: '#1A1A1A',
        color: 'white',
        borderRadius: 9999,
        padding: 16,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.85rem',
        transition: 'all 0.3s ease',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <Phone size={20} strokeWidth={2.5} />

      <style>{`
        .floating-cta:hover {
          background: #E8A824 !important;
          color: #1A1A1A !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(232,168,36,0.3) !important;
        }
      `}</style>
    </a>
  )
}
