'use client'

import { useState, useEffect } from 'react'
import { contact } from '@/lib/data'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      setPastHero(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Colors switch when past the hero
  const textColor = pastHero ? '#1A1A1A' : 'rgba(255,255,255,0.7)'
  const textHover = pastHero ? '#E8A824' : 'white'
  const logoFill = pastHero ? '#1A1A1A' : 'white'
  const hamburgerColor = pastHero ? '#1A1A1A' : 'white'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Logo SVG official */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <svg width="160" height="44" viewBox="0 0 1079 710" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.4s ease' }}>
              {/* Leaf - always gold */}
              <path d="M6.61922 406.561C6.15292 407.384 4.57637 409.743 4.37653 408.819C0.801541 392.92 0.446263 374.173 0.11319 358.364C-0.242088 341.008 0.090985 324.052 3.28849 307.207C27.9692 177.414 153.072 68.9713 296.915 78.5951C298.047 78.6729 297.703 81.4099 297.859 83.635C298.447 92.2909 297.259 111.728 293.151 137.45C290.22 155.763 287.866 177.403 280.994 199.577C276.109 215.353 270.746 231.719 263.552 247.796C244.167 291.131 215.045 332.296 176.753 360.478C138.461 388.659 98.5919 406.027 24.9716 427.533C24.1278 427.777 22.1182 428.412 22.4624 427.599C50.2185 362.569 100.757 288.394 142.502 231.764C142.558 231.697 142.569 231.608 142.591 231.53C143.379 228.626 171.146 197.841 176.209 187.672C176.72 186.66 175.443 185.681 174.588 186.426C108.318 244.414 49.8188 330.193 6.61922 406.561Z" fill="#E8A824"/>
              {/* NEW */}
              <path d="M322.7 263V79.7H354.68L484.42 212.04H476.36V79.7H516.4V263H484.42L354.68 130.4H362.74V263H322.7Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              <path d="M547.234 263V79.7H699.074V111.42H587.534V153.8H690.754V185.78H587.534V231.28H699.074V263H547.234Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              <path d="M782.354 263L702.534 79.7H746.734L808.874 220.88H795.874L860.874 79.7H893.634L958.374 220.88H946.154L1008.03 79.7H1049.89L969.814 263H934.454L872.834 132.48H879.334L817.714 263H782.354Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              {/* SEED */}
              <path d="M401.74 476.6C390.127 476.6 378.773 475.733 367.68 474C356.587 472.267 346.273 469.753 336.74 466.46C327.38 462.993 319.06 458.833 311.78 453.98L325.3 422.52C333.447 427.2 341.593 431.1 349.74 434.22C357.887 437.167 366.38 439.42 375.22 440.98C384.233 442.54 393.853 443.32 404.08 443.32C419.16 443.32 430.6 441.587 438.4 438.12C446.2 434.48 450.1 429.28 450.1 422.52C450.1 418.36 448.887 415.067 446.46 412.64C444.207 410.04 440.827 408.133 436.32 406.92C431.813 405.533 426.44 404.407 420.2 403.54L376.78 397.82C356.673 395.047 341.593 389.413 331.54 380.92C321.487 372.253 316.46 360.727 316.46 346.34C316.46 334.207 320.1 323.807 327.38 315.14C334.66 306.3 344.887 299.627 358.06 295.12C371.233 290.44 386.573 288.1 404.08 288.1C415 288.1 425.4 289.053 435.28 290.96C445.16 292.693 454.26 295.293 462.58 298.76C470.9 302.053 478.18 306.213 484.42 311.24L470.9 341.14C461.02 334.38 450.62 329.44 439.7 326.32C428.953 323.027 416.387 321.38 402 321.38C392.467 321.38 384.407 322.247 377.82 323.98C371.233 325.713 366.293 328.227 363 331.52C359.707 334.64 358.06 338.54 358.06 343.22C358.06 349.287 360.573 353.793 365.6 356.74C370.627 359.687 378.167 361.853 388.22 363.24L428.78 369.48C449.58 372.6 465.267 378.233 475.84 386.38C486.587 394.527 491.96 405.967 491.96 420.7C491.96 432.313 488.32 442.367 481.04 450.86C473.76 459.18 463.36 465.593 449.84 470.1C436.32 474.433 420.287 476.6 401.74 476.6Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              <path d="M508.133 474V290.7H659.973V322.42H548.433V364.8H651.653V396.78H548.433V442.28H659.973V474H508.133Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              <path d="M682.394 474V290.7H834.234V322.42H722.694V364.8H825.914V396.78H722.694V442.28H834.234V474H682.394Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              <path d="M856.655 474V290.7H944.275C969.755 290.7 991.161 294.167 1008.49 301.1C1025.83 308.033 1038.91 318.347 1047.75 332.04C1056.77 345.56 1061.27 362.287 1061.27 382.22C1061.27 402.153 1056.77 418.967 1047.75 432.66C1038.91 446.353 1025.83 456.667 1008.49 463.6C991.161 470.533 969.755 474 944.275 474H856.655ZM898.775 440.46H941.675C968.195 440.46 987.435 435.867 999.395 426.68C1011.35 417.32 1017.33 402.5 1017.33 382.22C1017.33 362.113 1011.27 347.467 999.135 338.28C987.175 328.92 968.021 324.24 941.675 324.24H898.775V440.46Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
              {/* PAINTING */}
              <path d="M311.8 657V551.25H351.7C359.2 551.25 365.55 552.45 370.75 554.85C375.95 557.25 379.85 560.8 382.45 565.5C385.15 570.1 386.5 575.75 386.5 582.45C386.5 589.05 385.15 594.7 382.45 599.4C379.85 604 375.95 607.55 370.75 610.05C365.55 612.45 359.2 613.65 351.7 613.65H320.95V657H311.8ZM320.95 605.55H350.95C359.65 605.55 366.2 603.6 370.6 599.7C375 595.8 377.2 590.05 377.2 582.45C377.2 574.85 375 569.1 370.6 565.2C366.2 561.2 359.65 559.2 350.95 559.2H320.95V605.55ZM374.46 657L420.51 551.25H428.76L474.66 657H465.06L452.01 626.55L456.96 628.8H392.01L397.11 626.55L384.21 657H374.46ZM424.41 562.65L398.91 622.65L395.46 620.85H453.51L450.36 622.65L424.71 562.65H424.41ZM481.962 657V551.25H491.112V657H481.962ZM508.23 657V551.25H515.58L585.93 646.05H582.48V551.25H591.03V657H583.83L513.48 562.2H516.78V657H508.23ZM634.279 657V559.5H594.829V551.25H683.029V559.5H643.579V657H634.279ZM686.741 657V551.25H695.891V657H686.741ZM713.009 657V551.25H720.359L790.709 646.05H787.259V551.25H795.809V657H788.609L718.259 562.2H721.559V657H713.009ZM859.908 658.2C848.808 658.2 839.458 656.1 831.858 651.9C824.258 647.6 818.508 641.4 814.608 633.3C810.708 625.2 808.758 615.45 808.758 604.05C808.758 592.85 810.708 583.25 814.608 575.25C818.508 567.15 824.058 560.95 831.258 556.65C838.558 552.25 847.308 550.05 857.508 550.05C862.508 550.05 867.208 550.55 871.608 551.55C876.008 552.55 880.108 554.1 883.908 556.2C887.708 558.2 891.108 560.7 894.108 563.7L890.058 571.2C885.158 566.8 880.108 563.6 874.908 561.6C869.808 559.6 863.958 558.6 857.358 558.6C844.858 558.6 835.258 562.55 828.558 570.45C821.858 578.35 818.508 589.55 818.508 604.05C818.508 618.95 821.958 630.3 828.858 638.1C835.758 645.9 846.158 649.8 860.058 649.8C865.258 649.8 870.258 649.3 875.058 648.3C879.858 647.3 884.358 645.9 888.558 644.1L886.308 650.4V610.65H858.258V602.85H894.558V651C892.058 652.3 888.858 653.5 884.958 654.6C881.058 655.7 876.908 656.55 872.508 657.15C868.208 657.85 864.008 658.2 859.908 658.2Z" fill={logoFill} style={{ transition: 'fill 0.4s ease' }}/>
            </svg>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="lg-nav">
            <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: textColor,
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      fontFamily: 'inherit',
                      letterSpacing: '0.03em',
                      transition: 'color 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = textHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={contact.phoneHref}
                  style={{
                    background: pastHero ? '#E8A824' : 'rgba(232,168,36,0.15)',
                    backdropFilter: pastHero ? 'none' : 'blur(12px)',
                    WebkitBackdropFilter: pastHero ? 'none' : 'blur(12px)',
                    border: pastHero ? '1px solid #E8A824' : '1px solid rgba(232,168,36,0.25)',
                    color: pastHero ? '#1A1A1A' : '#E8A824',
                    padding: '0.65rem 1.75rem',
                    borderRadius: 9999,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = pastHero ? '#CC8C1A' : 'rgba(232,168,36,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = pastHero ? '#E8A824' : 'rgba(232,168,36,0.15)'
                  }}
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 24, height: 2, background: hamburgerColor, transition: 'all 0.4s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: hamburgerColor, transition: 'all 0.4s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: hamburgerColor, transition: 'all 0.4s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: pastHero ? 'rgba(250,250,248,0.95)' : 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: pastHero ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.08)',
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
                    color: pastHero ? '#1A1A1A' : 'rgba(255,255,255,0.8)',
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
                  color: '#1A1A1A',
                  textAlign: 'center',
                  padding: '0.875rem',
                  borderRadius: 9999,
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginTop: 8,
                }}
              >
                Get Quote
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
