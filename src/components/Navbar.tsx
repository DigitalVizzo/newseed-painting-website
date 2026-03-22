'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { contact } from '@/lib/data'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Areas', href: '#areas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <Image
              src="/logo-dark.png"
              alt="New Seed Painting Group"
              width={48}
              height={48}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
              New Seed Painting
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="lg-nav">
            <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      fontFamily: 'inherit',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={contact.phoneHref}
                  style={{
                    background: '#E8A824',
                    color: '#0a0a0a',
                    padding: '0.625rem 1.5rem',
                    borderRadius: 9999,
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#CC8C1A')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#E8A824')}
                >
                  Get Free Quote
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 24, height: 2, background: 'white', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'white', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'white', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1.5rem',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.5rem 0',
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={contact.phoneHref}
                style={{
                  display: 'block',
                  background: '#E8A824',
                  color: '#0a0a0a',
                  textAlign: 'center',
                  padding: '0.875rem',
                  borderRadius: 9999,
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginTop: 8,
                }}
              >
                Get Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}
