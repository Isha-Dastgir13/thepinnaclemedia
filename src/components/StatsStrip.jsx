import React from 'react';

const SPEND_LOGOS = [
  { name: 'bhs', src: '/assets/spends/bhs.png' },
  { name: 'cured', src: '/assets/spends/cured.png' },
  { name: 'ES', src: '/assets/spends/ES.png' },
  { name: 'ghar', src: '/assets/spends/ghar.png' },
  { name: 'histrips', src: '/assets/spends/histrips.png' },
  { name: 'HOA', src: '/assets/spends/HOA.png' },
  { name: 'natures-sunrise', src: '/assets/spends/natures-sunrise.png' },
  { name: 'obsessive', src: '/assets/spends/obsessive.png' },
  { name: 'old-money', src: '/assets/spends/old-money.png' },
  { name: 'sana', src: '/assets/spends/sana.png' },
];

export default function StatsStrip() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '40px',
        paddingBottom: '50px',
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
          className="spend-strip-grid"
        >
          {/* Ad Spends Metric */}
          <div
            style={{
              gridColumn: 'span 4',
            }}
            className="spend-text-col"
          >
            <h3
              style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}
            >
              <span className="pm-gradient-text">$100,351,886</span>{' '}
              <span className="pm-gradient-text" style={{ fontWeight: 700 }}>
                Ad spends
              </span>
            </h3>
            <p style={{ color: 'var(--pm-text-muted)', fontSize: '1rem' }}>
              Just a normal month at Pinnacle
            </p>
          </div>

          {/* Scrolling Logo Marquee */}
          <div
            style={{
              gridColumn: 'span 8',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: 'var(--pm-radius-lg)',
            }}
            className="spend-marquee-col"
          >
            <div className="pm-marquee-wrapper">
              <div className="pm-marquee-fade-left"></div>
              <div className="pm-marquee-fade-right"></div>

              <div className="pm-marquee-track">
                {/* Loop 1 */}
                {SPEND_LOGOS.map((logo, idx) => (
                  <div
                    key={`spend-1-${idx}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100px',
                      width: '180px',
                      backgroundColor: 'var(--pm-bg-gray-alt)',
                      borderRadius: '16px',
                      padding: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ))}

                {/* Loop 2 (Continuous marquee duplicate) */}
                {SPEND_LOGOS.map((logo, idx) => (
                  <div
                    key={`spend-2-${idx}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100px',
                      width: '180px',
                      backgroundColor: 'var(--pm-bg-gray-alt)',
                      borderRadius: '16px',
                      padding: '16px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
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
          .spend-strip-grid { display: flex !important; flex-direction: column !important; }
          .spend-text-col, .spend-marquee-col { width: 100% !important; grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
