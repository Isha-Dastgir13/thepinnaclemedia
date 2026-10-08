import React from 'react';

const CLIENTS = [
  { id: '0001', name: 'Ghar Soaps', src: '/assets/home/logos/0001.png' },
  { id: '0002', name: 'HoYoLAB', src: '/assets/home/logos/0002.png' },
  { id: '0003', name: 'Hoyer', src: '/assets/home/logos/0003.png' },
  { id: '0004', name: 'EHS', src: '/assets/home/logos/0004.png' },
  { id: '0005', name: 'Cured', src: '/assets/home/logos/0005.png' },
  { id: '0006', name: 'Publix', src: '/assets/home/logos/0006.png' },
  { id: '0007', name: 'Enhanced Scents', src: '/assets/home/logos/0007.png' },
  { id: '0008', name: 'histrips', src: '/assets/home/logos/0008.png' },
  { id: '0009', name: 'House of Ayurveda', src: '/assets/home/logos/0009.png' },
  { id: '00010', name: 'Natures Sunrise', src: '/assets/home/logos/00010.png' },
  { id: '00011', name: 'Kuro', src: '/assets/home/logos/00011.png' },
  { id: '00012', name: 'Obsessive', src: '/assets/home/logos/00012.png' },
  { id: '00013', name: 'Old Money', src: '/assets/home/logos/00013.png' },
  { id: '00014', name: 'Sana', src: '/assets/home/logos/00014.png' },
  { id: '00015', name: 'Veganic', src: '/assets/home/logos/00015.png' },
];

export default function ClientGrid() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 9vw, 110px)',
        paddingBottom: 'clamp(70px, 9vw, 110px)',
        borderBottom: '1px solid var(--pm-border-light)',
      }}
    >
      <div className="pm-container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 60px)' }}>
          <h2 className="pm-display-md">
            We’ve served over{' '}
            <span className="pm-gradient-text">3000+ clients</span>
          </h2>
          <p
            className="pm-text-standfirst"
            style={{ maxWidth: '540px', margin: '12px auto 0', fontSize: '1rem' }}
          >
            Powering paid growth for market leaders in e-commerce, DTC, supplements, and digital services worldwide.
          </p>
        </div>

        {/* Clean Logo Grid (Plain logos without search input) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px',
            alignItems: 'center',
          }}
          className="client-logo-grid"
        >
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              style={{
                backgroundColor: 'var(--pm-bg-gray)',
                borderRadius: 'var(--pm-radius-md)',
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                border: '1px solid var(--pm-border-light)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(11, 13, 26, 0.06)';
                e.currentTarget.style.borderColor = 'var(--pm-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--pm-border-light)';
              }}
            >
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(1)',
                  opacity: 0.85,
                  transition: 'filter 0.3s, opacity 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(1)';
                  e.currentTarget.style.opacity = '0.85';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .client-logo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .client-logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
