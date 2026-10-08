import React, { useState, useRef } from 'react';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Yorah',
    role: 'Brand owner',
    title: 'Six Months In. Service That Actually Delivers.',
    quote: 'I’ve been working with Pinnacle Media for the past six months and the experience has been genuinely impressive. Their team replies instantly, even on weekends, and the account quality is consistently top-tier.',
    poster: '/assets/posters/testimonial-3.jpg',
    video: '/assets/videos/Testimonial-3.mp4',
  },
  {
    id: 2,
    name: 'Sarah',
    role: 'Brand owner',
    title: 'Two Years of Dropshipping. One Switch That Changed Everything.',
    quote: 'After nearly two years in dropshipping, switching to Pinnacle was a game changer. Instant responses, weekend support, and quick top-ups removed stress and helped me scale confidently.',
    poster: '/assets/posters/testimonial-2.jpg',
    video: '/assets/videos/Testimonial-2.mp4',
  },
  {
    id: 3,
    name: 'Victor',
    role: 'Brand owner',
    title: 'Almost One Year with Pinnacle. Best Decision We Ever Made.',
    quote: 'Nearly a year with Pinnacle and zero regrets. Fast responses, clear guidance, and real integrity. They don’t just fix problems, they genuinely care about your growth.',
    poster: '/assets/posters/testimonial-1.jpg',
    video: '/assets/videos/Testimonial-1.mp4',
  },
  {
    id: 4,
    name: 'Saamir',
    role: 'Brand owner',
    title: 'Five Years in E-Commerce. One Partnership That Made It All Possible.',
    quote: 'After five years in e-commerce, Pinnacle stands above every agency I’ve worked with. Reliable ad accounts and true 24/7 support made scaling safer and faster.',
    poster: '/assets/posters/testimonial-5.jpg',
    video: '/assets/videos/Testimonial-5.mp4',
  },
  {
    id: 5,
    name: 'Henry',
    role: 'Brand owner',
    title: 'From Daily Stress to Sleeping Soundly.',
    quote: 'Pinnacle removed the stress of running ads. Smooth spending, instant top-ups, fast replacements, and reliable support finally let me scale without fear.',
    poster: '/assets/posters/testimonial-6.jpg',
    video: '/assets/videos/Testimonial-6.mp4',
  },
  {
    id: 6,
    name: 'Alex',
    role: 'Brand owner',
    title: 'Years of Partnership. Consistently Phenomenal.',
    quote: 'I’ve worked with Pinnacle for years and the experience has always been phenomenal. Fast replies, deep expertise, and dependable solutions make them my go-to partner.',
    poster: '/assets/posters/testimonial-4.jpg',
    video: '/assets/videos/Testimonial-4.mp4',
  },
];

function TestimonialCard({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--pm-radius-xl)',
        border: '1px solid var(--pm-border-light)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: '0 6px 24px rgba(11, 13, 26, 0.05)',
      }}
    >
      {/* Video Container with Poster & Inline Playback */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 14',
          borderRadius: 'var(--pm-radius-lg)',
          overflow: 'hidden',
          backgroundColor: '#0b0d1a',
        }}
      >
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          preload="none"
          controls={isPlaying}
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onPause={() => {
            if (videoRef.current && videoRef.current.ended) {
              setIsPlaying(false);
            }
          }}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${item.name}'s video testimonial`}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.22)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--pm-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                paddingLeft: '4px',
              }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Quote & Author Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--pm-text-ink)',
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </h4>
        <blockquote
          style={{
            fontSize: '0.92rem',
            color: 'var(--pm-text-muted)',
            lineHeight: 1.55,
            fontStyle: 'normal',
          }}
        >
          “{item.quote}”
        </blockquote>
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontWeight: 700, color: 'var(--pm-text-ink)', fontSize: '0.95rem' }}>
            {item.name}
          </div>
          <div style={{ color: 'var(--pm-text-muted)', fontSize: '0.825rem' }}>
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="pm-section"
      style={{
        backgroundColor: 'var(--pm-bg-wash)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
      }}
    >
      <div className="pm-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div className="pm-badge" style={{ marginBottom: '14px', marginInline: 'auto' }}>
            <span>⭐</span>
            <span>Client Experiences</span>
          </div>
          <h2 className="pm-display-lg">
            In their <span className="pm-gradient-text">words.</span>
          </h2>
          <p className="pm-text-standfirst" style={{ maxWidth: '600px', margin: '14px auto 0' }}>
            Hear directly from the brand owners and founders who scale their ad spend and revenue with Pinnacle.
          </p>
        </div>

        {/* 6 Video Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
