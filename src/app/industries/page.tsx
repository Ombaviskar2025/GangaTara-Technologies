'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building } from 'lucide-react';
import * as Icons from 'lucide-react';
import { industriesData } from '@/data/companyData';

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Building className={className} />;
  return <IconComponent className={className} />;
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Industry Domains
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Specialized Sector Solutions
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            We adapt cutting-edge technologies to the specific security, compliance, and velocity needs of your business sector.
          </p>
        </div>
      </section>

      {/* 2. Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="p-8 rounded-3xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <DynamicIcon name={ind.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-dark dark:text-light group-hover:text-primary transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-[9px] text-primary uppercase font-bold tracking-widest">Industry Division</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-dark/65 dark:text-light/65 leading-relaxed mb-6">
                    {ind.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-light/15 dark:border-white/5 pt-6 mt-auto">
                  <div className="flex gap-4">
                    {ind.stats.slice(0, 2).map((st, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-sm font-poppins font-black text-primary">{st.value}</span>
                        <span className="text-[8px] text-dark/40 dark:text-light/40 font-bold uppercase tracking-wider">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/industries/${ind.id}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-colors cursor-pointer"
                  >
                    View Division details <ArrowRight className="w-3.5 h-3.5" />
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
