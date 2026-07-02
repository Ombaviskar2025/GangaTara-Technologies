import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { WhatsNewCarousel } from '@/components/sections/WhatsNewCarousel';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { Statistics } from '@/components/sections/Statistics';
import { TabbedSolutions } from '@/components/sections/TabbedSolutions';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CustomerStoriesCarousel } from '@/components/sections/CustomerStoriesCarousel';
import { Industries } from '@/components/sections/Industries';
import { Technologies } from '@/components/sections/Technologies';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { Testimonials } from '@/components/sections/Testimonials';
import { Process } from '@/components/sections/Process';
import { GlobalPresence } from '@/components/sections/GlobalPresence';
import { Awards } from '@/components/sections/Awards';
import { EventsSection } from '@/components/sections/EventsSection';
import { NewsInsightsRow } from '@/components/sections/NewsInsightsRow';
import { LatestBlog } from '@/components/sections/LatestBlog';
import { CareerBanner } from '@/components/sections/CareerBanner';
import { CareerSection } from '@/components/sections/CareerSection';
import { ClosingCTABand } from '@/components/sections/ClosingCTABand';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Fullscreen Hero Banner */}
      <Hero />

      {/* 2. What's New — Full-width image carousel of recent announcements */}
      <WhatsNewCarousel />

      {/* 3. Client Logo Marquee */}
      <TrustedBy />

      {/* 4. Core Business Statistics */}
      <Statistics />

      {/* 5. Tabbed Solutions — Industries / Services / Products */}
      <TabbedSolutions />

      {/* 6. Detailed Service Cards */}
      <ServicesSection />

      {/* 7. Customer Stories — Horizontal scroll carousel */}
      <CustomerStoriesCarousel />

      {/* 8. Sector Adaptations */}
      <Industries />

      {/* 9. Technology Stacks */}
      <Technologies />

      {/* 10. Why Choose Us */}
      <WhyChooseUs />

      {/* 11. Portfolio Success Case Studies */}
      <SuccessStories />

      {/* 12. Testimonial Quotes Slider */}
      <Testimonials />

      {/* 13. Execution Roadmap */}
      <Process />

      {/* 14. Interactive World Map Hubs */}
      <GlobalPresence />

      {/* 15. Corporate Accreditations */}
      <Awards />

      {/* 16. Events & Webinars */}
      <EventsSection />

      {/* 17. News & Insights Quick-Link Row */}
      <NewsInsightsRow />

      {/* 18. Insights & Blogs */}
      <LatestBlog />

      {/* 19. Career Image Banner */}
      <CareerBanner />

      {/* 20. Career Teaser with Job Listings */}
      <CareerSection />

      {/* 21. Closing CTA Band */}
      <ClosingCTABand />

      {/* 22. Intake Forms & Offices */}
      <ContactSection />
    </div>
  );
}
