'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { caseStudiesData } from '@/data/companyData';

// Industry color map
const INDUSTRY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Healthcare: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  Finance: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  'Retail & E-commerce': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
};

const DEFAULT_COLOR = { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };

const getInitials = (name: string) => name.split(' ').map((n) => n[0]).join('').slice(0, 2);

const LOGO_COLORS = ['from-primary to-secondary', 'from-emerald-500 to-teal-400', 'from-purple-500 to-pink-500'];

export const CustomerStoriesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-light/50 dark:bg-dark/60 border-y border-dark/5 dark:border-white/5 relative overflow-hidden">
      {/* Decorative blur orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-2">Customer Stories</p>
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white">
              Real Results for Real Clients
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Arrow nav */}
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-dark/15 dark:border-white/10 text-dark/60 dark:text-white/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-dark/15 dark:border-white/10 text-dark/60 dark:text-white/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              href="/case-studies"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-secondary transition-colors ml-2"
            >
              All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {caseStudiesData.map((cs, i) => {
            const color = INDUSTRY_COLORS[cs.industry] ?? DEFAULT_COLOR;
            const gradClass = LOGO_COLORS[i % LOGO_COLORS.length];

            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="shrink-0 w-[320px] sm:w-[360px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-full flex flex-col p-7 rounded-2xl border border-dark/6 dark:border-white/6 bg-white dark:bg-white/3 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  {/* Client logo / initials */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${gradClass} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {getInitials(cs.client)}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-dark dark:text-white leading-tight">{cs.client}</p>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${color.bg} ${color.text} ${color.border}`}>
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1">
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/20" />
                    <p className="text-dark/70 dark:text-white/65 text-[13px] leading-relaxed pl-4 line-clamp-4">
                      {cs.overview}
                    </p>
                  </div>

                  {/* Key results */}
                  <div className="mt-5 grid grid-cols-3 gap-2 py-4 border-t border-dark/5 dark:border-white/5">
                    {cs.results.slice(0, 3).map((r, ri) => (
                      <div key={ri} className="text-center">
                        <p className="text-primary font-bold text-[15px] leading-tight">{r.value}</p>
                        <p className="text-dark/40 dark:text-white/35 text-[9px] mt-0.5 leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${cs.id}`}
                    className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-primary hover:text-secondary transition-colors group-hover:gap-2.5"
                  >
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 transition-all" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <div className="shrink-0 w-[280px] flex items-center justify-center" style={{ scrollSnapAlign: 'start' }}>
            <Link
              href="/case-studies"
              className="flex flex-col items-center gap-3 p-8 rounded-2xl border-2 border-dashed border-primary/25 hover:border-primary/60 text-center transition-all group h-full justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-[13px] font-bold text-dark dark:text-white">View All Case Studies</p>
              <p className="text-[11px] text-dark/40 dark:text-white/35">See how we deliver for enterprises globally</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
