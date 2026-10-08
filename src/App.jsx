import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import GrowthPartners from './components/GrowthPartners';
import Services from './components/Services';
import ResultsStats from './components/ResultsStats';
import AdsGallery from './components/AdsGallery';
import Testimonials from './components/Testimonials';
import ClientGrid from './components/ClientGrid';
import Founders from './components/Founders';
import ContactSection from './components/ContactSection';
import AffiliateBanner from './components/AffiliateBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="pm-site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header / Sticky Nav */}
      <Header />

      <main style={{ flex: '1 0 auto' }}>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Ad Spend / Stats Strip */}
        <StatsStrip />

        {/* 4. Growth Partners Marquee */}
        <GrowthPartners />

        {/* 5. Services (Media Buying, Creative, Retention) */}
        <Services />

        {/* 6. Results Stats */}
        <ResultsStats />

        {/* 7. Ads, not content (Creative Gallery) */}
        <AdsGallery />

        {/* 8. Video Testimonials (Inline Playback) */}
        <Testimonials />

        {/* 9. 3000+ Clients Logo Grid */}
        <ClientGrid />

        {/* 10. Founders (Swarith & Ashish + Team) */}
        <Founders />

        {/* 11. Contact & Calendly Booking */}
        <ContactSection />

        {/* 12. Affiliate CTA Banner */}
        <AffiliateBanner />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
