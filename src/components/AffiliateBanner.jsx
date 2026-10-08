import React from 'react';

export default function AffiliateBanner() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '30px',
        paddingBottom: '80px',
      }}
    >
      <div className="pm-container">
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--pm-radius-xl)',
            background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #dbeafe 100%)',
            border: '1px solid #bedbff',
            padding: 'clamp(36px, 6vw, 64px)',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(11, 92, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '36px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
            className="affiliate-grid"
          >
            {/* Left Content */}
            <div
              style={{
                gridColumn: 'span 8',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
              className="affiliate-text-col"
            >
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--pm-blue)',
                }}
              >
                Turn Your Connections Into Cash
              </div>

              <h2
                className="pm-display-md"
                style={{
                  color: 'var(--pm-text-ink)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)',
                }}
              >
                Become an Affiliate
              </h2>

              <p
                style={{
                  color: 'var(--pm-text-muted)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  maxWidth: '56ch',
                }}
              >
                Earn lifetime commissions for every successful referral you send our way.
                With our proven track record and dedicated partner support, it’s a win-win opportunity.
                Come be a part of our ever-growing family.
              </p>

              <div style={{ marginTop: '12px' }}>
                <a
                  href="#calend"
                  className="pm-btn-primary"
                  style={{
                    backgroundColor: 'var(--pm-blue)',
                    padding: '14px 36px',
                    fontSize: '1rem',
                  }}
                >
                  Become an Affiliate
                </a>
              </div>
            </div>

            {/* Right Visual: 3D Coin Badge */}
            <div
              style={{
                gridColumn: 'span 4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
              className="affiliate-badge-col"
            >
              <div
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)',
                  boxShadow: '0 20px 50px rgba(11, 92, 255, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '3rem',
                    fontWeight: 800,
                  }}
                >
                  $
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .affiliate-grid { display: flex !important; flex-direction: column !important; }
          .affiliate-text-col, .affiliate-badge-col { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
