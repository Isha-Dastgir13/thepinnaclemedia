import React from 'react';

const CREATIVES = [
  {
    id: 1,
    src: '/assets/ugc/image-1.jpeg',
    alt: 'Ad creative for a fitness apparel brand: a man in training wear',
    brand: 'Performance Athletic',
  },
  {
    id: 2,
    src: '/assets/ugc/image-2.jpeg',
    alt: 'Ad creative for a migraine relief brand: a woman resting in a cooling headband',
    brand: 'Therapeutic Wellness',
  },
  {
    id: 3,
    src: '/assets/ugc/image-03.jpeg',
    alt: 'Ad creative for a focus supplement, reminding a shopper of their cart',
    brand: 'Nootropics & Focus',
  },
  {
    id: 4,
    src: '/assets/ugc/image-4.jpeg',
    alt: 'Ad creative for a fashion brand: a woman in a yellow summer dress',
    brand: 'Summer Collection',
  },
  {
    id: 5,
    src: '/assets/ugc/image-5.png',
    alt: 'Ad creative for cashmere knitwear collection on a checked floor',
    brand: 'Luxury Cashmere',
  },
  {
    id: 6,
    src: '/assets/ugc/image-6.png',
    alt: 'Ad creative for a fashion brand on a tennis court',
    brand: 'Resort & Clubwear',
  },
  {
    id: 7,
    src: '/assets/ugc/image-7.png',
    alt: 'Ad creative for high-end menswear beside a horse',
    brand: 'Equestrian Lifestyle',
  },
  {
    id: 8,
    src: '/assets/ugc/image-8.jpeg',
    alt: 'Ad creative for a hair care brand: hair growth serum roll-on',
    brand: 'Clinical Haircare',
  },
];

export default function AdsGallery() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 9vw, 120px)',
        paddingBottom: 'clamp(70px, 9vw, 120px)',
        overflow: 'hidden',
      }}
    >
      <div className="pm-container">
        {/* Header Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'flex-end',
            marginBottom: '48px',
          }}
          className="gallery-header-grid"
        >
          <div style={{ gridColumn: 'span 8' }} className="gallery-title-col">
            <div className="pm-badge" style={{ marginBottom: '14px' }}>
              <span>🎯</span>
              <span>UGC & Video Production</span>
            </div>
            <h2 className="pm-display-lg" style={{ lineHeight: 1.05 }}>
              Ads, <span className="pm-gradient-text">not content.</span>
            </h2>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="gallery-desc-col">
            <p className="pm-text-standfirst" style={{ fontSize: '1.05rem', lineHeight: 1.5 }}>
              Hooks, angles and formats tested in a structured system, so your best offers stop dying to ad fatigue.
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Reel */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
          }}
          tabIndex={0}
          role="region"
          aria-label="Ad creatives gallery reel"
        >
          {CREATIVES.map((item) => (
            <div
              key={item.id}
              style={{
                flexShrink: 0,
                width: 'clamp(240px, 22vw, 300px)',
                aspectRatio: '9 / 16',
                borderRadius: 'var(--pm-radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--pm-bg-gray-alt)',
                position: 'relative',
                scrollSnapAlign: 'start',
                boxShadow: '0 8px 24px rgba(11, 13, 26, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(11, 92, 255, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 13, 26, 0.08)';
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  background: 'rgba(11, 13, 26, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{item.brand}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>9:16 Ad</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .gallery-header-grid { display: flex !important; flex-direction: column !important; align-items: flex-start !important; }
          .gallery-title-col, .gallery-desc-col { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
