'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonialsData } from '@/data/companyData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000); // cycle every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-24 bg-light/35 dark:bg-dark/20 relative overflow-hidden border-b border-light/10 dark:border-white/5">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light">
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonial slider viewport */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl glass-panel border border-light/20 dark:border-white/5 shadow-2xl relative"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quotation text */}
              <p className="text-base sm:text-lg text-dark/95 dark:text-light/95 leading-relaxed font-medium italic mb-8">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Visual Avatar Placeholder container with initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white shadow-md">
                  {current.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark dark:text-light">{current.name}</h4>
                  <p className="text-[11px] text-dark/60 dark:text-light/60">
                    {current.role} at <span className="font-semibold text-primary">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-light/50 dark:bg-white/5 border border-light/20 dark:border-white/5 hover:border-primary/40 text-dark dark:text-light hover:text-primary transition-all cursor-pointer"
                aria-label="Previous Review"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-light/50 dark:bg-white/5 border border-light/20 dark:border-white/5 hover:border-primary/40 text-dark dark:text-light hover:text-primary transition-all cursor-pointer"
                aria-label="Next Review"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-primary' : 'bg-dark/15 dark:bg-light/15'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
