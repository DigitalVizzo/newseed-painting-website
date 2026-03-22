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
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          : 'border-b border-transparent'
      }`}
    >
      {/* Main bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="no-underline flex-shrink-0">
          <Logo variant="light" size={40} />
        </a>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline text-[#0a0a0a] text-sm font-medium tracking-wide opacity-80 hover:opacity-100 hover:text-[#E8A824] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="no-underline bg-[#E8A824] hover:bg-[#CC8C1A] text-[#0a0a0a] text-sm font-semibold px-5 py-2.5 rounded tracking-wide transition-colors duration-200"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile hamburger — min 44×44 touch target */}
        <button
          className="md:hidden min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-[22px] h-[2px] bg-[#0a0a0a] transition-transform duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
          />
          <span
            className="block w-[22px] h-[2px] bg-[#0a0a0a] transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[2px] bg-[#0a0a0a] transition-transform duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.08] px-4 pb-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="no-underline text-[#0a0a0a] text-base font-medium tracking-wide min-h-[44px] flex items-center border-b border-black/5 last:border-0 hover:text-[#E8A824] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="no-underline bg-[#E8A824] text-[#0a0a0a] text-[0.95rem] font-semibold py-3 px-5 rounded text-center mt-3 min-h-[44px] flex items-center justify-center hover:bg-[#CC8C1A] transition-colors duration-200"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
