'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo variant="light" size={40} />
        </a>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '2rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: '#0a0a0a',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                opacity: 0.8,
                transition: 'opacity 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = '1';
                (e.target as HTMLElement).style.color = '#E8A824';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = '0.8';
                (e.target as HTMLElement).style.color = '#0a0a0a';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              backgroundColor: '#E8A824',
              color: '#0a0a0a',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '0.6rem 1.4rem',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#CC8C1A';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#E8A824';
            }}
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#0a0a0a',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#0a0a0a',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#0a0a0a',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#0a0a0a',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              backgroundColor: '#E8A824',
              color: '#0a0a0a',
              fontSize: '0.95rem',
              fontWeight: 600,
              padding: '0.8rem 1.4rem',
              borderRadius: '4px',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
