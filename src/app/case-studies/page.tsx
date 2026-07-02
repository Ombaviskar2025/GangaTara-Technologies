'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen } from 'lucide-react';
import { caseStudiesData } from '@/data/companyData';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  const industries = ['All', 'Healthcare', 'Finance', 'Retail'];

  const filteredCases = filter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.industry === filter);

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Enterprise Success Stories
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-world performance audits, platform upgrades, and cloud migration results achieved for our global enterprise clients.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === ind
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/5 border border-light/10 dark:border-white/5 text-dark/65 dark:text-light/65 hover:text-primary'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col overflow-hidden">
                <div className="w-full h-44 bg-gradient-to-tr from-primary/10 to-secondary/20 flex items-center justify-center p-6 border-b border-light/10 dark:border-white/5 relative">
                  <Trophy className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-dark/60 backdrop-blur-md text-[10px] uppercase font-bold text-white tracking-widest border border-white/10">
                    {cs.industry}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1.5 block">{cs.client}</span>
                    <h3 className="text-base font-bold text-dark dark:text-light mb-3 group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed mb-6">
                      {cs.overview}
                    </p>

                    <div className="grid grid-cols-3 gap-4 border-t border-light/15 dark:border-white/5 pt-4 mb-6">
                      {cs.results.map((res, idx) => (
                        <div key={idx} className="flex flex-col text-center">
                          <span className="text-sm font-poppins font-black text-primary">{res.value}</span>
                          <span className="text-[9px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${cs.id}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary transition-colors mt-auto w-fit"
                  >
                    Read Study details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
