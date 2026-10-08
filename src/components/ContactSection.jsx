import React from 'react';

export default function ContactSection() {
  return (
    <section
      id="calend"
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: "url('/assets/reach-out-bg.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 10%',
        backgroundSize: 'cover',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
      }}
    >
      <div className="pm-container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div className="pm-badge" style={{ marginBottom: '14px' }}>
            <span>📞</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="pm-display-lg" style={{ lineHeight: 1.15 }}>
            Don’t hesitate to <br />
            <span className="pm-gradient-text">reach out to us.</span>
          </h2>
          <p className="pm-text-standfirst" style={{ maxWidth: '48ch', marginTop: '12px' }}>
            Book a call below, or write to us on WhatsApp, Telegram or email.
            We answer 24x7x365 across all channels.
          </p>
        </div>

        {/* Split Grid: Calendly on Left, Contact Details on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'flex-start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Embedded Calendly Booking */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--pm-radius-xl)',
              boxShadow: '0 16px 40px rgba(11, 13, 26, 0.08)',
              border: '1px solid var(--pm-border-light)',
              overflow: 'hidden',
              minHeight: '640px',
            }}
            className="contact-calendly-col"
          >
            {/* =========================================================================
                [WORDPRESS EMBED SLOT 2 - CALENDLY / FORM EMBED WIDGET]
                Source URL from thepinnacle.media #calend:
                https://calendly.com/thepinnaclemedia/book-a-call?hide_event_type_details=1&hide_gdpr_banner=1
                In WordPress Elementor/Gutenberg, paste an HTML widget, Calendly shortcode,
                or custom booking form iframe here.
               ========================================================================= */}
            <iframe
              src="https://calendly.com/thepinnaclemedia/book-a-call?hide_event_type_details=1&hide_gdpr_banner=1"
              title="Schedule a Call with The Pinnacle Media"
              style={{
                width: '100%',
                height: '660px',
                border: 'none',
              }}
            />
          </div>

          {/* Right Column: Direct Info Cards */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
            className="contact-details-col"
          >
            {/* Office Address Card */}
            <div
              style={{
                backgroundColor: 'var(--pm-bg-gray)',
                borderRadius: 'var(--pm-radius-lg)',
                padding: '24px',
                border: '1px solid var(--pm-border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--pm-text-ink)' }}>
                  Registered Offices
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--pm-text-muted)' }}>
                <li>
                  <strong style={{ color: 'var(--pm-text-ink)' }}>Pinnacle MAV Media LLC:</strong><br />
                  1507 Lampman Ct, Cheyenne, WY 82007, United States
                </li>
                <li>
                  <strong style={{ color: 'var(--pm-text-ink)' }}>Swarith LLC:</strong><br />
                  Ste 1200, 1309 Coffeen Avenue, Sheridan, WY 82801, USA
                </li>
                <li>
                  <strong style={{ color: 'var(--pm-text-ink)' }}>MF Global Media B.V.:</strong><br />
                  Keizersgracht 482, 1017 EG Amsterdam, Netherlands
                </li>
              </ul>
            </div>

            {/* Quick Contact Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
              className="quick-contact-grid"
            >
              {/* Working Hours */}
              <div
                style={{
                  backgroundColor: 'var(--pm-bg-gray)',
                  borderRadius: 'var(--pm-radius-md)',
                  padding: '18px',
                  border: '1px solid var(--pm-border-light)',
                }}
              >
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>⏰</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--pm-text-muted)', fontWeight: 500 }}>Hours</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pm-text-ink)' }}>24x7x365</div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/31626841467?text=Hi%20I%20want%20to%20book%20a%20call"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--pm-bg-gray)',
                  borderRadius: 'var(--pm-radius-md)',
                  padding: '18px',
                  border: '1px solid var(--pm-border-light)',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>💬</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--pm-text-muted)', fontWeight: 500 }}>WhatsApp</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pm-blue)' }}>+31 6 26841467</div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/pinnaclemediaofficial"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--pm-bg-gray)',
                  borderRadius: 'var(--pm-radius-md)',
                  padding: '18px',
                  border: '1px solid var(--pm-border-light)',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>✈️</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--pm-text-muted)', fontWeight: 500 }}>Telegram</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pm-blue)' }}>@pinnaclemediaofficial</div>
              </a>

              {/* Support Email */}
              <a
                href="mailto:support@thepinnacle.media"
                style={{
                  backgroundColor: 'var(--pm-bg-gray)',
                  borderRadius: 'var(--pm-radius-md)',
                  padding: '18px',
                  border: '1px solid var(--pm-border-light)',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>✉️</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--pm-text-muted)', fontWeight: 500 }}>Email</div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--pm-blue)', wordBreak: 'break-all' }}>
                  support@thepinnacle.media
                </div>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div
              style={{
                backgroundColor: 'var(--pm-bg-gray)',
                borderRadius: 'var(--pm-radius-lg)',
                padding: '18px 24px',
                border: '1px solid var(--pm-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--pm-text-ink)' }}>
                Connect With Us
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href="https://www.instagram.com/pinnaclemediaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img src="/assets/instagram.jpg" alt="Instagram" style={{ width: '34px', height: '34px', borderRadius: '50%' }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/thepinnaclemedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img src="/assets/linkedin.png" alt="LinkedIn" style={{ width: '34px', height: '34px', borderRadius: '50%' }} />
                </a>
                <a
                  href="https://www.facebook.com/people/Pinnacle-Media/100092620770534/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img src="/assets/facebook.png" alt="Facebook" style={{ width: '34px', height: '34px', borderRadius: '50%' }} />
                </a>
                <a
                  href="https://x.com/pinnaclemediads"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img src="/assets/x-v1.png" alt="X" style={{ width: '34px', height: '34px', borderRadius: '50%' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .contact-grid { display: flex !important; flex-direction: column !important; }
          .contact-calendly-col, .contact-details-col { width: 100% !important; grid-column: span 12 !important; }
        }
        @media (max-width: 540px) {
          .quick-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
