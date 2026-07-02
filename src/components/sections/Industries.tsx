'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database } from 'lucide-react';
import * as Icons from 'lucide-react';
import { industriesData } from '@/data/companyData';

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Building className={className} />;
  return <IconComponent className={className} />;
};

export const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInd = industriesData[activeIndex];

  return (
    <section className="py-24 bg-light/35 dark:bg-dark/20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full radial-glow-blue opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
            Sectors We Empower
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Custom Technology for Dynamic Industries
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            We adapt cutting-edge technologies to the specific security, compliance, and velocity needs of your business sector.
          </p>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Vertical Menu - Left */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pr-2 no-scrollbar scroll-smooth">
            {industriesData.map((ind, index) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeIndex === index
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-light/60 dark:bg-white/5 border-light/20 dark:border-white/5 text-dark/80 dark:text-light/80 hover:bg-primary/5 dark:hover:bg-white/10'
                }`}
              >
                <DynamicIcon name={ind.iconName} className="w-4.5 h-4.5" />
                <span>{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Details Dashboard - Right */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInd.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full p-8 sm:p-10 rounded-3xl glass-card border border-light/20 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  {/* Title & Description */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                      <DynamicIcon name={activeInd.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-dark dark:text-light">{activeInd.title} Division</h3>
                      <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Enterprise Architecture</p>
                    </div>
                  </div>

                  <p className="text-sm text-dark/70 dark:text-light/75 leading-relaxed mb-8">
                    {activeInd.description}
                  </p>

                  {/* Solutions Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {activeInd.solutions.map((sol, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-dark/80 dark:text-light/85 leading-tight">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats & CTA Section */}
                <div className="border-t border-light/20 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Micro stats */}
                  <div className="flex gap-8">
                    {activeInd.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl font-poppins font-black text-primary">{stat.value}</span>
                        <span className="text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explore button */}
                  <Link
                    href={`/industries/${activeInd.id}`}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    Explore Case Studies <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
