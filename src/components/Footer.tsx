'use client';

import Logo from './Logo';
import { contact, services } from '@/lib/data';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: 'rgba(255,255,255,0.65)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.2rem' }}>
              <Logo variant="dark" size={44} />
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '240px' }}>
              Sydney&apos;s trusted painting professionals. Licensed, insured, and
              committed to exceptional results.
            </p>
            <p
              style={{
                fontSize: '0.78rem',
                marginTop: '1rem',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Painters License: {contact.license}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    style={{
                      textDecoration: 'none',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href={contact.phoneHref}
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                <span>📞</span> {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                <span>✉️</span> {contact.email}
              </a>
              <div
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>📍</span> {contact.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 New Seed Painting Group. All Rights Reserved. | Sydney, NSW, Australia
          </p>
          <div
            style={{
              display: 'flex',
              gap: '0.3rem',
              alignItems: 'center',
            }}
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: '#E8A824', fontSize: '0.75rem' }}>★</span>
            ))}
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginLeft: '0.3rem' }}>
              5.0 Google Rating
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
