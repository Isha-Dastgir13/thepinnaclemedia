import React from 'react';

const PARTNERS = [
  { name: 'Meta', src: '/assets/logos/meta.png' },
  { name: 'Google', src: '/assets/logos/google.png' },
  { name: 'TikTok', src: '/assets/logos/tiktok.png' },
  { name: 'Snapchat', src: '/assets/logos/snapchat-v1.png' },
  { name: 'Skala Media', src: '/assets/logos/skala-media.png' },
  { name: 'Suits Finance', src: '/assets/logos/suits-finnance.png' },
  { name: 'Whop', src: '/assets/logos/whop.png' },
  { name: 'Ooptics', src: '/assets/logos/ooptics.png' },
  { name: 'Incogniton', src: '/assets/logos/incogniton.png' },
  { name: 'Growthmodo', src: '/assets/logos/growthmodo.png' },
  { name: 'Slash', src: '/assets/logos/slash.png' },
  { name: 'eCover Solutions', src: '/assets/logos/ecover-solutions.png' },
  { name: 'Swapd', src: '/assets/logos/swaped.png' },
  { name: 'Nexcale', src: '/assets/logos/nexcale.png' },
];

export default function GrowthPartners() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '50px',
        paddingBottom: '60px',
        borderBottom: '1px solid var(--pm-border-light)',
      }}
    >
      <div className="pm-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'center',
          }}
          className="partners-strip-grid"
        >
          {/* Label / Headline */}
          <div
            style={{
              gridColumn: 'span 4',
            }}
            className="partners-text-col"
          >
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '6px',
              }}
              className="pm-gradient-text"
            >
              Growth Partners
            </h3>
            <p style={{ color: 'var(--pm-text-muted)', fontSize: '0.95rem' }}>
              Backed by the platforms that shape the digital world
            </p>
          </div>

          {/* Scrolling Partner Logo Marquee */}
          <div
            style={{
              gridColumn: 'span 8',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: 'var(--pm-radius-lg)',
            }}
            className="partners-marquee-col"
          >
            <div className="pm-marquee-wrapper">
              <div className="pm-marquee-fade-left"></div>
              <div className="pm-marquee-fade-right"></div>

              <div className="pm-marquee-track" style={{ animationDuration: '40s' }}>
                {PARTNERS.map((partner, idx) => (
                  <div
                    key={`partner-1-${idx}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '90px',
                      width: '160px',
                      backgroundColor: 'var(--pm-bg-gray-alt)',
                      borderRadius: '16px',
                      padding: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
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

                {/* Duplicate track for seamless marquee */}
                {PARTNERS.map((partner, idx) => (
                  <div
                    key={`partner-2-${idx}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '90px',
                      width: '160px',
                      backgroundColor: 'var(--pm-bg-gray-alt)',
                      borderRadius: '16px',
                      padding: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
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
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .partners-strip-grid { display: flex !important; flex-direction: column !important; }
          .partners-text-col, .partners-marquee-col { width: 100% !important; grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
