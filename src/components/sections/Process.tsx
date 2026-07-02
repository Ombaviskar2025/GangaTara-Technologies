'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { processData } from '@/data/companyData';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background visual indicators */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Settings className="w-3.5 h-3.5" /> Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Our Delivery Process
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            How we translate your business objectives into production-ready software systems.
          </p>
        </div>

        {/* Vertical Process Steps */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-light-hover dark:bg-white/5 -translate-x-1/2" />

          <div className="flex flex-col gap-12 relative">
            {processData.map((prc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={prc.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node dot */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary border-4 border-light dark:border-dark -translate-x-1/2 flex items-center justify-center text-[10px] text-white font-bold shadow-md z-10">
                    {prc.step}
                  </div>

                  {/* Spacer for horizontal symmetry */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Step Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8">
                    <div className="p-6 rounded-2xl glass-card border border-light/25 dark:border-white/5 hover:border-primary/20 transition-all duration-300">
                      <h3 className="text-sm font-bold text-dark dark:text-light mb-2">
                        {prc.title}
                      </h3>
                      <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed">
                        {prc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
