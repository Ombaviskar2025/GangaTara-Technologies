'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cloud, Cpu } from 'lucide-react';
import { awardsData } from '@/data/companyData';

export const Awards: React.FC = () => {
  const icons = [
    <ShieldCheck className="w-8 h-8 text-primary" />,
    <Cloud className="w-8 h-8 text-secondary" />,
    <Award className="w-8 h-8 text-accent" />,
    <Cpu className="w-8 h-8 text-success" />
  ];

  return (
    <section className="py-20 bg-light dark:bg-dark relative overflow-hidden border-b border-light/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((aw, idx) => (
            <motion.div
              key={aw.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-light/60 dark:bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <h4 className="text-sm font-bold text-dark dark:text-light mb-1 group-hover:text-primary transition-colors">
                {aw.title}
              </h4>
              <p className="text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider mb-2">
                {aw.issuer}
              </p>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-primary/10 text-primary font-bold">
                Granted {aw.year}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
