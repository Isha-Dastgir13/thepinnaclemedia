import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--pm-navy-dark)',
        backgroundImage: "url('/assets/footer-bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        paddingTop: 'clamp(70px, 9vw, 110px)',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="pm-container">
        {/* Top Brand & Tagline Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '50px',
            gap: '18px',
          }}
        >
          <a href="/" aria-label="The Pinnacle Media Homepage">
            <img
              src="/assets/footer-logo-v2.png"
              alt="The Pinnacle Media"
              loading="lazy"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </a>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
            }}
          >
            Everything you need in one place.
          </p>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '48px',
          }}
        />

        {/* Multi-Column Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-nav-grid"
        >
          {/* Column 1: Services */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '16px',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li>
                <a href="/media_buying" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Media Buying
                </a>
              </li>
              <li>
                <a href="/user-generated-content" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Creative / UGC
                </a>
              </li>
              <li>
                <a href="/retention-marketing" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Retention Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '16px',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li>
                <a href="/about-us" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#calend" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '16px',
              }}
            >
              Follow
            </h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.instagram.com/pinnaclemediaofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/assets/instagram.jpg" alt="Instagram" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              </a>
              <a href="https://www.linkedin.com/company/thepinnaclemedia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/assets/linkedin.png" alt="LinkedIn" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              </a>
              <a href="https://www.facebook.com/people/Pinnacle-Media/100092620770534/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/assets/facebook.png" alt="Facebook" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              </a>
              <a href="https://x.com/pinnaclemediads" target="_blank" rel="noopener noreferrer" aria-label="X">
                <img src="/assets/x-v1.png" alt="X" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              </a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '16px',
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li>
                <a href="/term-of-use" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy-policy" style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '30px',
            textAlign: 'center',
            fontSize: '0.825rem',
            color: 'rgba(255, 255, 255, 0.65)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <p style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
            Pinnacle MAV Media LLC
          </p>
          <p>
            1507 Lampman Ct, Cheyenne, WY 82007, USA ·{' '}
            <a href="mailto:support@thepinnacle.media" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'underline' }}>
              support@thepinnacle.media
            </a>
          </p>
          <p style={{ marginTop: '4px' }}>
            © 2026 The Pinnacle Media. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
