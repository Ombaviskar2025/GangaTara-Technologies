'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, CheckCircle } from 'lucide-react';
import { technologiesData } from '@/data/companyData';

export default function TechnologiesPage() {
  const categories = [
    { key: 'frontend', label: 'Frontend Libraries' },
    { key: 'backend', label: 'Backend Stacks' },
    { key: 'cloud', label: 'Cloud & DevOps Infrastructure' },
    { key: 'database', label: 'Databases & In-Memory Caches' },
    { key: 'mobile', label: 'Mobile Platforms' },
    { key: 'emerging', label: 'Emerging & Cognitive AI' }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Technology Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Our Corporate Technology Stack
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            We build secure, robust software architectures utilizing standard, modern programming frameworks.
          </p>
        </div>
      </section>

      {/* 2. Structured Sections */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-16">
        {categories.map((cat, index) => {
          const techList = technologiesData.filter(t => t.category === cat.key);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 rounded-3xl glass-panel border border-light/20 dark:border-white/5"
            >
              <h3 className="text-lg font-poppins font-bold text-dark dark:text-light mb-6 border-b border-light/10 dark:border-white/5 pb-4">
                {cat.label}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techList.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-5 rounded-2xl bg-light/50 dark:bg-white/5 border border-light/15 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:border-primary/20 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                      <span className="font-poppins font-extrabold text-xs">{tech.name.slice(0, 2)}</span>
                    </div>
                    <span className="text-xs font-semibold text-dark dark:text-light group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

    </div>
  );
}
