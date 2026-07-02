import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { Statistics } from '@/components/sections/Statistics';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { Industries } from '@/components/sections/Industries';
import { Technologies } from '@/components/sections/Technologies';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { Testimonials } from '@/components/sections/Testimonials';
import { Process } from '@/components/sections/Process';
import { GlobalPresence } from '@/components/sections/GlobalPresence';
import { Awards } from '@/components/sections/Awards';
import { LatestBlog } from '@/components/sections/LatestBlog';
import { CareerSection } from '@/components/sections/CareerSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Fullscreen Hero Banner */}
      <Hero />
      
      {/* 2. Client Logo Marquee */}
      <TrustedBy />
      
      {/* 3. Core Business Statistics */}
      <Statistics />
      
      {/* 4. Service Showcase (12 Cards) */}
      <ServicesSection />
      
      {/* 5. Sector Adaptations */}
      <Industries />
      
      {/* 6. Technology Stacks */}
      <Technologies />
      
      {/* 7. Why Choose Us (Alternate Timeline) */}
      <WhyChooseUs />
      
      {/* 8. Portfolio Success Case Studies */}
      <SuccessStories />
      
      {/* 9. Testimonial Quotes Slider */}
      <Testimonials />
      
      {/* 10. Execution Roadmap */}
      <Process />
      
      {/* 11. Interactive World Map Hubs */}
      <GlobalPresence />
      
      {/* 12. Corporate Accreditations */}
      <Awards />
      
      {/* 13. Insights & Blogs */}
      <LatestBlog />
      
      {/* 14. Career Teaser */}
      <CareerSection />
      
      {/* 15. Intake Forms & Offices */}
      <ContactSection />
    </div>
  );
}
