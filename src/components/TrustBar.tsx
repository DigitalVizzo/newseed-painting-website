import { Shield, CheckCircle, Palette, Phone } from 'lucide-react'

const items = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: CheckCircle, label: '5-Year Guarantee' },
  { icon: Palette, label: 'Premium Paints' },
  { icon: Phone, label: 'Free Quotes' },
]

export default function TrustBar() {
  return (
    <section style={{ position: 'relative', zIndex: 1,
      background: 'white',
      borderTop: '1px solid #E8E4DC',
      borderBottom: '1px solid #E8E4DC',
      padding: '1.25rem 0',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="trustbar-grid">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="trustbar-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '0.5rem 0',
                }}
              >
                <Icon size={16} color="#E8A824" strokeWidth={2} />
                <span style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.02em',
                }}>
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .trustbar-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        @media (min-width: 768px) {
          .trustbar-grid {
            display: flex;
            justify-content: center;
            gap: 0;
          }
          .trustbar-item {
            position: relative;
            padding: 0.5rem 2.5rem !important;
          }
          .trustbar-item:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 25%;
            height: 50%;
            width: 1px;
            background: #E8E4DC;
          }
        }
      `}</style>
    </section>
  )
}
