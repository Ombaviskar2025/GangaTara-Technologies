'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { whatsNewData } from '@/data/companyData';

export const WhatsNewCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = whatsNewData.length;

  const next = useCallback(() => setActiveIndex((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((p) => (p - 1 + total) % total), [total]);

  // Auto-advance every 6 s, paused on hover
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [isHovered, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight') {
        next();
      } else if (e.key === 'ArrowLeft') {
        prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const slide = whatsNewData[activeIndex];

  return (
    <section
      className="relative overflow-hidden"
      aria-label="What's New at GangaTara"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header row */}
      <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-1">What's New</p>
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white">
            Latest from GangaTara
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-secondary transition-colors"
        >
          All News & Insights <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Slide area */}
      <div className="relative h-[420px] sm:h-[480px] overflow-hidden cursor-grab active:cursor-grabbing">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.x < -80) {
                next();
              } else if (info.offset.x > 80) {
                prev();
              }
            }}
          >
            {/* Background image with overlay */}
            <img
              src={slide.image}
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
            {/* Gradient overlay for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, ${slide.gradientFrom}E6 0%, ${slide.gradientTo}99 50%, transparent 100%)`
              }}
            />
            {/* Additional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1F22]/90 via-[#1E1F22]/60 to-transparent" />

            {/* Slide content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-screen-xl mx-auto px-8 sm:px-14 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {slide.tag}
                    </span>
                    <span className="text-white/40 text-[11px]">{slide.date}</span>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-poppins font-bold leading-tight mb-4">
                    {slide.headline}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md line-clamp-2">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-dark font-bold text-[13px] rounded-lg hover:bg-primary hover:text-white transition-all shadow-lg"
                  >
                    Read More →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide progress dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {whatsNewData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom thumbnail strip */}
      <div className="max-w-screen-xl mx-auto px-6 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {whatsNewData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(i)}
              className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                i === activeIndex
                  ? 'border-primary/50 bg-primary/5'
                  : 'border-dark/5 dark:border-white/5 hover:border-primary/25 bg-dark/2 dark:bg-white/2'
              }`}
            >
              <span className={`text-[9px] font-bold uppercase tracking-widest block mb-1 ${i === activeIndex ? 'text-primary' : 'text-dark/40 dark:text-white/30'}`}>
                {item.tag}
              </span>
              <p className={`text-[11px] font-semibold leading-tight line-clamp-2 ${i === activeIndex ? 'text-dark dark:text-white' : 'text-dark/60 dark:text-white/50'}`}>
                {item.headline}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
