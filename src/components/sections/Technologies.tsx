'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { technologiesData } from '@/data/companyData';

type Category = 'frontend' | 'backend' | 'cloud' | 'database' | 'mobile' | 'emerging';

export const Technologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('frontend');

  const categories: { key: Category; label: string }[] = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'database', label: 'Databases & Cache' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'emerging', label: 'Emerging & AI' }
  ];

  const filteredTech = technologiesData.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" /> Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Our Enterprise Technology Stack
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            We build scalable, reliable software using industry-standard tools and modern programming frameworks.
          </p>
        </div>

        {/* Tab Header Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-light/20 dark:border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-dark/60 dark:text-light/60 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Tech Tags */}
        <div className="min-h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="p-6 rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/30 flex flex-col items-center justify-center text-center group cursor-pointer"
                >
                  {/* Decorative glowing background on card hover */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                    <span className="font-poppins font-black text-sm uppercase tracking-wide">
                      {tech.name.slice(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-dark dark:text-light group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
