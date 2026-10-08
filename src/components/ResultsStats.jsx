import React from 'react';

const METRICS = [
  {
    value: '24x7',
    label: 'Account activation on Infrastructure',
    detail: 'Zero downtime with immediate replacements',
  },
  {
    value: '37%',
    label: 'Drop in CAC after full-funnel restructuring',
    detail: 'Efficient scaling across cold & warm audiences',
  },
  {
    value: '4.6s',
    label: 'Avg hook engagement on top creatives',
    detail: 'Beating platform benchmarks by over 2.4x',
  },
  {
    value: '68%',
    label: 'Revenue recovered through retention flows',
    detail: 'Automated Klaviyo & SMS lifecycle flows',
  },
];

export default function ResultsStats() {
  return (
    <>
      {/* Dark Statement Impact Strip (from Vercel design / Original brand) */}
      <section
        style={{
          backgroundColor: 'var(--pm-navy-dark)',
          color: '#ffffff',
          paddingTop: 'clamp(70px, 9vw, 120px)',
          paddingBottom: 'clamp(70px, 9vw, 120px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="pm-container">
          <h2
            className="pm-display-lg"
            style={{
              color: '#ffffff',
              maxWidth: '20ch',
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            Advertising is broken. <br />
            <span style={{ color: '#61E5FF' }}>We fix it.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
              fontWeight: 500,
              maxWidth: '30ch',
              margin: '32px auto 0',
              lineHeight: 1.45,
              color: 'rgba(255, 255, 255, 0.92)',
              textWrap: 'balance',
            }}
          >
            <span style={{ color: '#7cd8ff', fontWeight: 700 }}>3,000+</span> brands trust us with their growth.{' '}
            <span style={{ color: '#7cd8ff', fontWeight: 700 }}>5,000+</span> ad accounts under management.{' '}
            <span style={{ color: '#7cd8ff', fontWeight: 700 }}>$25M+</span> in ad spend every month.{' '}
            <span style={{ color: '#7cd8ff', fontWeight: 700 }}>92%</span> of clients stay.
          </p>
        </div>
      </section>

      {/* 4 Performance Metric Cards */}
      <section
        className="pm-section"
        style={{
          backgroundColor: 'var(--pm-bg-wash)',
          paddingTop: 'clamp(60px, 8vw, 100px)',
          paddingBottom: 'clamp(60px, 8vw, 100px)',
        }}
      >
        <div className="pm-container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="pm-display-md" style={{ marginBottom: '12px' }}>
              <span className="pm-gradient-text">
                When The Funnel, Creatives, and Accounts Work Together
              </span>
            </h2>
            <p className="pm-text-standfirst" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Every component is tuned to eliminate bottlenecks, stabilize spending, and scale predictably.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="results-grid"
          >
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--pm-radius-lg)',
                  border: '1px solid var(--pm-border-light)',
                  padding: '36px 28px',
                  textAlign: 'center',
                  boxShadow: '0 4px 18px rgba(11, 13, 26, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(11, 92, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(11, 13, 26, 0.04)';
                }}
              >
                <div
                  className="pm-metric-gradient-text"
                  style={{
                    fontSize: 'clamp(2.5rem, 3.8vw, 3.5rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {metric.value}
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--pm-text-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    {metric.label}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--pm-text-muted)',
                      lineHeight: 1.45,
                    }}
                  >
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 991px) {
            .results-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 540px) {
            .results-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
