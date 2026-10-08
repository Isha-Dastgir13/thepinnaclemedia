import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 20px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="pm-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(45deg, rgba(18, 140, 126, 0.7), rgba(52, 94, 235, 0.75))',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '9999px',
          padding: '10px 24px',
          boxShadow: isScrolled
            ? '0 10px 30px rgba(11, 92, 255, 0.25)'
            : '0 4px 20px rgba(0, 0, 0, 0.12)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }} aria-label="The Pinnacle Media Homepage">
          <img
            src="/assets/footer-logo-v2.png"
            alt="The Pinnacle Media"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {/* Services Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              style={{
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform 0.25s ease',
                  transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '12px',
                  zIndex: 50,
                  minWidth: '220px',
                }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '8px',
                    boxShadow: '0 14px 40px rgba(11, 13, 26, 0.18)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    border: '1px solid var(--pm-border-light)',
                  }}
                >
                  <a
                    href="/media_buying"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      color: 'var(--pm-text-ink)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--pm-bg-gray)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    Media Buying
                  </a>
                  <a
                    href="/user-generated-content"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      color: 'var(--pm-text-ink)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--pm-bg-gray)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    Creative
                  </a>
                  <a
                    href="/retention-marketing"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      color: 'var(--pm-text-ink)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--pm-bg-gray)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    Retention Marketing
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="/about-us"
            style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.95rem' }}
          >
            About Us
          </a>
          <a
            href="/contact-us"
            style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.95rem' }}
          >
            Contact Us
          </a>

          {/* Social Quick-Contact Pills */}
          <a
            href="https://wa.me/31626841467?text=Hi%20I%20want%20to%20book%20a%20call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'linear-gradient(to top, #0C3BFB, #128C7E)',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
            </svg>
            WhatsApp
          </a>

          {/* Book Call CTA */}
          <a
            href="#calend"
            className="pm-btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.9rem',
              backgroundColor: '#ffffff',
              color: '#ffffff',
            }}
          >
            Book a call
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            color: '#ffffff',
            padding: '6px',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '12px',
            background: 'rgba(15, 18, 116, 0.96)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '24px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
          className="mobile-menu"
        >
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Services
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '8px' }}>
            <a href="/media_buying" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: 500 }}>
              Media Buying
            </a>
            <a href="/user-generated-content" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: 500 }}>
              Creative
            </a>
            <a href="/retention-marketing" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: 500 }}>
              Retention Marketing
            </a>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)' }} />

          <a href="/about-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            About Us
          </a>
          <a href="/contact-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            Contact Us
          </a>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <a
              href="https://wa.me/31626841467?text=Hi%20I%20want%20to%20book%20a%20call"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderRadius: '9999px',
                background: 'linear-gradient(to top, #0C3BFB, #128C7E)',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/pinnaclemediaofficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, #0088cc, #005f99)',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              Telegram
            </a>
          </div>

          <a
            href="#calend"
            onClick={() => setMobileMenuOpen(false)}
            className="pm-btn-primary"
            style={{ width: '100%', marginTop: '6px' }}
          >
            Book a call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
