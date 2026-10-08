import React from 'react';

export default function Hero() {
  return (
    <section
      className="pm-section"
      style={{
        paddingTop: 'clamp(120px, 14vw, 160px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambience / Video */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          opacity: 0.45,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <video
          src="/assets/home/home-hero-1280.webm"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="pm-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Subtitle, Dual CTAs */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            className="hero-text-col"
          >
            <div className="pm-badge">
              <span>🚀</span>
              <span>The Only Growth Partner You Need</span>
            </div>

            <h1 className="pm-display-xl" style={{ textWrap: 'balance' }}>
              Built for the brands <br />
              that <span className="pm-hero-gradient-text">don’t settle.</span>
            </h1>

            <p className="pm-text-standfirst" style={{ maxWidth: '44ch' }}>
              Agency ad accounts, media buying, creative and retention, run by one team.
              Trusted by high-growth e-commerce brands that demand control, consistency, and performance.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginTop: '8px',
              }}
            >
              <a href="#calend" className="pm-btn-primary">
                Talk to Our Team
              </a>
              <a href="#services" className="pm-btn-secondary">
                See How We Work
              </a>
            </div>

            {/* Trust Pilot / Client Trust Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '12px',
                fontSize: '0.875rem',
                color: 'var(--pm-text-muted)',
              }}
            >
              <div style={{ display: 'flex', color: '#ffb800' }}>
                {'★★★★★'}
              </div>
              <span>
                <strong>4.6/5</strong> by 3000+ brands on Trustpilot
              </span>
            </div>
          </div>

          {/* Right Column: Hero Video / Creative Feature */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
            }}
            className="hero-media-col"
          >
            {/* =========================================================================
                [WORDPRESS EMBED SLOT 1 - HERO MEDIA / LIGHTBOX WIDGET]
                In WordPress Elementor/Gutenberg, drop an HTML widget, Video Lightbox,
                or Custom Video Block into this column.
               ========================================================================= */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--pm-radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(11, 13, 26, 0.15)',
                background: '#0b0d1a',
                aspectRatio: '4 / 3',
              }}
            >
              <video
                poster="/assets/posters/creative.jpg"
                src="/assets/creative-720.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="High-converting UGC ad creatives preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Overlay pill indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(11, 13, 26, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#03c1fc', display: 'inline-block' }}></span>
                Top Performing Ads
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid { display: flex !important; flex-direction: column !important; }
          .hero-text-col, .hero-media-col { width: 100% !important; grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
