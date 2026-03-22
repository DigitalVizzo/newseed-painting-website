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
      className="px-4 pt-10 pb-6 md:px-8 md:pt-14 lg:px-16"
      style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.65)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid — 1 col mobile, 2 col md, 4 col lg */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="dark" size={44} />
            </div>
            <p className="text-sm leading-relaxed max-w-[240px]" style={{ lineHeight: 1.7 }}>
              Sydney&apos;s trusted painting professionals. Licensed, insured, and
              committed to exceptional results.
            </p>
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Painters License: {contact.license}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4"
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="no-underline text-sm transition-colors duration-200 hover:text-[#E8A824]"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
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
              className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4"
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="no-underline text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
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
              className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4"
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={contact.phoneHref}
                className="no-underline text-sm flex items-center gap-2 transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                <span>📞</span> {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="no-underline text-sm flex items-center gap-2 transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E8A824')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                <span>✉️</span> {contact.email}
              </a>
              <div
                className="text-sm flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                <span>📍</span> {contact.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — stacked on mobile, row on md+ */}
        <div className="flex flex-col gap-3 items-center md:flex-row md:justify-between">
          <p className="text-xs text-center md:text-left" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 New Seed Painting Group. All Rights Reserved. | Sydney, NSW, Australia
          </p>
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-[#E8A824] text-xs">★</span>
            ))}
            <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              5.0 Google Rating
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
