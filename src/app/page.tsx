import React from 'react';
import { HeroVideoScroll } from '@/components/sections/HeroVideoScroll';
import { Hero } from '@/components/sections/Hero';
import { TabbedSolutions } from '@/components/sections/TabbedSolutions';
import { Statistics } from '@/components/sections/Statistics';
import { CustomerStoriesCarousel } from '@/components/sections/CustomerStoriesCarousel';
import { NewsInsightsRow } from '@/components/sections/NewsInsightsRow';
import { EventsSection } from '@/components/sections/EventsSection';
import { CareerBanner } from '@/components/sections/CareerBanner';
import { Testimonials } from '@/components/sections/Testimonials';
import { ClosingCTABand } from '@/components/sections/ClosingCTABand';

export default function Home() {
  return (
    <>
      {/*
       * TCS-STYLE VIDEO CURTAIN
       * ─────────────────────────────────────────────────────────────────────
       * Phase 1 (scroll = 0)
       *   Full-screen video plays. No text on top. Just cinematic video.
       *
       * Phase 2 (user scrolls ↓)
       *   <Hero /> rises from the bottom as a rounded white card, covering
       *   the video — the "curtain rising" effect identical to TCS.com.
       *
       * Phase 3 (Hero fully visible)
       *   Normal page scroll continues with WhatsNewCarousel and below.
       *
       * VIDEO  →  /public/hero-video.mp4  (3.26 MB ✅)
       * POSTER →  /public/slide_ai.png    (mobile fallback + preload)
       *
       * IMPORTANT: No overflow-x-hidden on the root wrapper.
       * overflow:hidden on any ancestor of position:fixed breaks the effect
       * in some browsers. Apply it only to the sections div below.
       */}
      <HeroVideoScroll
        videoSrc="/hero-video.mp4"
        posterSrc="/slide_ai.png"
      >
        {/* <Hero /> is the curtain card that slides up over the video */}
        <Hero />
      </HeroVideoScroll>

      {/* ── Rest of page — normal scroll, overflow-x safe here ── */}
      <div 
        className="overflow-x-hidden"
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: 'var(--background)'
        }}
      >

        {/* 3. "CUTTING EDGE SOLUTIONS" TABBED SECTION */}
        <TabbedSolutions />

        {/* 4. STATS BAND */}
        <Statistics />

        {/* 5. "CUSTOMER STORIES" CAROUSEL */}
        <CustomerStoriesCarousel />

        {/* 6. "NEWS & INSIGHTS" QUICK-LINK ROW */}
        <NewsInsightsRow />

        {/* 7. "MEET US" / EVENTS SECTION */}
        <EventsSection />

        {/* 8. CAREERS BANNER */}
        <CareerBanner />

        {/* 9. CLIENT QUOTE / TESTIMONIAL BLOCK */}
        <Testimonials />

        {/* 10. CLOSING CTA BAND */}
        <ClosingCTABand />
      </div>
    </>
  );
}
