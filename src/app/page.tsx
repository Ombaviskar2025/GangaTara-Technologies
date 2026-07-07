import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { WhatsNewCarousel } from '@/components/sections/WhatsNewCarousel';
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
    <div className="overflow-x-hidden">
      {/* 1. Current Hero Section */}
      <Hero />

      {/* 2. "WHAT'S NEW" CAROUSEL */}
      <WhatsNewCarousel />

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
  );
}
