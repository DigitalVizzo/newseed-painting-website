'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { contact, services } from '@/lib/data'

const filteredServices = services.filter((s) => s.id !== 'roof')

export default function Footer() {
  return (
    <footer style={{
      background: '#111111',
      paddingTop: '4rem',
      color: 'rgba(255,255,255,0.4)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gap: '3rem', marginBottom: '3rem' }}>
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="24" height="30" viewBox="0 0 300 440" fill="none">
                <path d="M6.61922 406.561C6.15292 407.384 4.57637 409.743 4.37653 408.819C0.801541 392.92 0.446263 374.173 0.11319 358.364C-0.242088 341.008 0.090985 324.052 3.28849 307.207C27.9692 177.414 153.072 68.9713 296.915 78.5951C298.047 78.6729 297.703 81.4099 297.859 83.635C298.447 92.2909 297.259 111.728 293.151 137.45C290.22 155.763 287.866 177.403 280.994 199.577C276.109 215.353 270.746 231.719 263.552 247.796C244.167 291.131 215.045 332.296 176.753 360.478C138.461 388.659 98.5919 406.027 24.9716 427.533C24.1278 427.777 22.1182 428.412 22.4624 427.599C50.2185 362.569 100.757 288.394 142.502 231.764C142.558 231.697 142.569 231.608 142.591 231.53C143.379 228.626 171.146 197.841 176.209 187.672C176.72 186.66 175.443 185.681 174.588 186.426C108.318 244.414 49.8188 330.193 6.61922 406.561Z" fill="#E8A824"/>
              </svg>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                New Seed Painting
              </span>
            </div>
            <address style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20, fontStyle: 'normal' }}>
              <a href={contact.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>
                <Phone size={14} color="#E8A824" /> {contact.phone}
              </a>
              <a href={contact.emailHref} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>
                <Mail size={14} color="#E8A824" /> {contact.email}
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
                <MapPin size={14} color="#E8A824" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{contact.address}</span>
              </div>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', marginTop: 4, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8A824')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @newseedpainting
              </a>
            </address>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', marginBottom: 16, letterSpacing: '0.05em' }}>Services</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filteredServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'inherit', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', marginBottom: 16, letterSpacing: '0.05em' }}>Areas</h4>
            <p style={{ color: '#E8A824', fontSize: '0.75rem', fontWeight: 600, marginBottom: 8 }}>Sydney Wide</p>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.35)' }}>
              We serve all of Greater Sydney.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 0', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>
            &copy; 2026 New Seed Painting Group Pty Ltd &middot; ABN {contact.abn} &middot; {contact.license}
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; } }
      `}</style>
    </footer>
  )
}
