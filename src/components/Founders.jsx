import React from 'react';

export default function Founders() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
      }}
    >
      <div className="pm-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
          className="founders-grid"
        >
          {/* Founders Photo */}
          <div
            style={{
              gridColumn: 'span 6',
              position: 'relative',
            }}
            className="founders-img-col"
          >
            <div
              style={{
                borderRadius: 'var(--pm-radius-xl)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                backgroundColor: 'var(--pm-bg-gray-alt)',
                boxShadow: '0 20px 50px rgba(11, 13, 26, 0.1)',
              }}
            >
              <img
                src="/assets/about/founders-v2.png"
                alt="Swarith and Ashish, founders of The Pinnacle Media"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Copy and Secondary Team Photo */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            className="founders-text-col"
          >
            <div className="pm-badge">
              <span>👥</span>
              <span>Leadership & Global Team</span>
            </div>

            <h2 className="pm-display-lg" style={{ lineHeight: 1.15 }}>
              Founded by <br />
              <span className="pm-gradient-text">Swarith and Ashish.</span>
            </h2>

            <p className="pm-text-standfirst" style={{ lineHeight: 1.6 }}>
              100+ people across 12 countries and four offices.
              Someone is awake, and answering, at every hour.
            </p>

            {/* Team photo preview */}
            <div
              style={{
                borderRadius: 'var(--pm-radius-lg)',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                backgroundColor: 'var(--pm-bg-gray-alt)',
                boxShadow: '0 12px 30px rgba(11, 13, 26, 0.08)',
                marginTop: '12px',
              }}
            >
              <img
                src="/assets/about/hero.JPG"
                alt="The Pinnacle Media team"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ marginTop: '12px' }}>
              <a
                href="/about-us"
                className="pm-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Learn More About Us
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .founders-grid { display: flex !important; flex-direction: column !important; }
          .founders-img-col, .founders-text-col { width: 100% !important; grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
