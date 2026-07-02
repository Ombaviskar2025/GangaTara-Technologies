'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Code } from 'lucide-react';
import { caseStudiesData } from '@/data/companyData';

export const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
              Featured Success Stories
            </h2>
            <p className="text-sm text-dark/70 dark:text-light/60">
              Explore how we have engineered robust, secure platforms that resolve real-world scaling and efficiency challenges for global companies.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-light/20 dark:border-white/10 text-dark dark:text-light hover:border-primary/50 hover:bg-primary/5 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            All Case Studies <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Case Studies List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/25 flex flex-col overflow-hidden">
                <div className="w-full h-48 relative overflow-hidden border-b border-light/10 dark:border-white/5">
                  <img
                    src={cs.imagePath === 'case_healthcare' ? '/ind_healthcare.png' : cs.imagePath === 'case_finance' ? '/ind_finance.png' : '/ind_retail.png'}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-dark/60 backdrop-blur-md text-[10px] uppercase font-bold text-white tracking-widest border border-white/10">
                    {cs.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Client Name */}
                    <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1.5 block">{cs.client}</span>
                    
                    {/* Project Title */}
                    <h3 className="text-base font-bold text-dark dark:text-light mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    
                    {/* Overview */}
                    <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed mb-6 line-clamp-3">
                      {cs.overview}
                    </p>

                    {/* Key Results / Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-light/15 dark:border-white/5 pt-4 mb-6">
                      {cs.results.map((res, idx) => (
                        <div key={idx} className="flex flex-col text-center">
                          <span className="text-sm font-poppins font-black text-primary">{res.value}</span>
                          <span className="text-[9px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">{res.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cs.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-light-hover dark:bg-white/5 text-[9px] text-dark/80 dark:text-light/80 font-semibold border border-light/10 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More */}
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

      </div>
    </section>
  );
};
