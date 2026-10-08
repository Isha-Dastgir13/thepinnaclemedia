import React, { useState } from 'react';

const SERVICES_DATA = [
  {
    id: '01',
    category: 'Growth Partners',
    title: 'Full-funnel media buying that leads the algorithm',
    description: 'Audience mapping, high-trust ad accounts, and real-time scaling systems engineered to beat ad fatigue and algorithmic turbulence.',
    link: '/media_buying',
    bullets: [
      { text: 'Audience mapping based on real intent', icon: '/assets/home/user.svg' },
      { text: 'Creative loops that outpace the algorithm', icon: '/assets/home/map.svg' },
      { text: 'Funnel-smart budgeting that shifts with performance', icon: '/assets/home/reload.svg' },
      { text: 'Real-time actions that scale winners and cut waste fast', icon: '/assets/home/compas.svg' },
      { text: 'Compliance-safe structures that keep accounts stable', icon: '/assets/home/check.svg' },
    ],
  },
  {
    id: '02',
    category: 'Creative Systems Leader',
    title: 'Creatives built to outperform the algorithm',
    description: 'Data-backed UGC, hooks, angles, and advertorials shaped around buyer personas and emotional neurostates to drive maximum CTR and ROAS.',
    link: '/user-generated-content',
    bullets: [
      { text: 'Creatives shaped around precise buyer personas', icon: '/assets/home/time.svg' },
      { text: 'Messaging aligned to neurostates to hit the right emotion', icon: '/assets/home/coins.svg' },
      { text: 'Angles and desires tested that truly converts', icon: '/assets/home/headphone.svg' },
      { text: 'Awareness-based content that moves buyers naturally', icon: '/assets/home/compas.svg' },
      { text: 'Advertorial-style storytelling that convinces', icon: '/assets/home/time.svg' },
    ],
  },
  {
    id: '03',
    category: 'Lifecycle Marketing',
    title: 'Retention and email flows built to keep your funnel alive',
    description: 'High-converting Klaviyo email & SMS automations that turn one-time shoppers into repeat buyers and maximize customer lifetime value.',
    link: '/retention-marketing',
    bullets: [
      { text: 'Abandoned cart flows built to recover revenue', icon: '/assets/home/time.svg' },
      { text: 'Post-purchase flows designed to lift AOV and LTV', icon: '/assets/home/coins.svg' },
      { text: 'Re-engagement flows that reignite interest', icon: '/assets/home/headphone.svg' },
      { text: 'Win-back messages crafted to bring customers back', icon: '/assets/home/reload.svg' },
      { text: 'Launch and promo flows timed for maximum action', icon: '/assets/home/map.svg' },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <section
      id="services"
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
      }}
    >
      <div className="pm-container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 70px)' }}>
          <div className="pm-badge" style={{ marginBottom: '16px' }}>
            <span>⚡</span>
            <span>Comprehensive Growth System</span>
          </div>
          <h2 className="pm-display-lg" style={{ maxWidth: '24ch', textWrap: 'balance' }}>
            Most agencies run a channel. <br />
            We run <span className="pm-gradient-text">the funnel.</span>
          </h2>
        </div>

        {/* Numbered Services Stack (Inspired by Vercel layout + Original Copy & Actions) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              style={{
                borderTop: '1px solid var(--pm-border-light)',
                paddingTop: 'clamp(32px, 5vw, 56px)',
                paddingBottom: 'clamp(32px, 5vw, 56px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 'clamp(20px, 4vw, 40px)',
                alignItems: 'flex-start',
                transition: 'background-color 0.3s ease',
              }}
              className="service-row"
            >
              {/* Number Column */}
              <div
                style={{
                  gridColumn: 'span 1',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--pm-blue)',
                  fontVariantNumeric: 'tabular-nums',
                }}
                className="service-num"
              >
                {service.id}
              </div>

              {/* Title & Tag Column */}
              <div
                style={{
                  gridColumn: 'span 5',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
                className="service-title-col"
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--pm-blue)',
                  }}
                >
                  {service.category}
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.3vw, 2.1rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: 'var(--pm-text-ink)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: 'var(--pm-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {service.description}
                </p>

                {/* Dual Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
                  <a href="#calend" className="pm-btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                    Book Free Consultation
                  </a>
                  <a href={service.link} className="pm-btn-secondary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
                    Know More
                  </a>
                </div>
              </div>

              {/* 5-Bullet Feature List Column */}
              <div
                style={{
                  gridColumn: 'span 6',
                  backgroundColor: 'var(--pm-bg-gray-alt)',
                  borderRadius: 'var(--pm-radius-lg)',
                  padding: 'clamp(20px, 3vw, 32px)',
                }}
                className="service-bullets-col"
              >
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {service.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        color: 'var(--pm-text-body)',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                        }}
                      >
                        <img
                          src={b.icon}
                          alt=""
                          loading="lazy"
                          style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                        />
                      </div>
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .service-row { display: flex !important; flex-direction: column !important; }
          .service-num { display: none !important; }
          .service-title-col, .service-bullets-col { width: 100% !important; grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
