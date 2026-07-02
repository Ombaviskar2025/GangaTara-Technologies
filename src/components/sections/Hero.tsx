'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Cloud, Globe, CpuIcon, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContactModal } from '@/context/ContactModalContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-light dark:bg-dark">
      {/* 1. Animated background particles / glow */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full radial-glow-blue animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full radial-glow-cyan animate-pulse-slow z-0" style={{ animationDelay: '2s' }} />

      {/* 2. Core Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6 inline-flex"
        >
          {t('hero.badge')}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6.5xl font-poppins font-extrabold tracking-tight leading-[1.1] text-dark dark:text-light mb-6 max-w-4xl"
        >
          {t('hero.title1')}{' '}
          <span className="text-shimmer bg-gradient-to-r from-primary to-secondary">
            {t('hero.title2')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-dark/70 dark:text-light/75 leading-relaxed mb-8 max-w-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <Link
            href="/services"
            className="px-8 py-4 rounded-2xl bg-primary hover:bg-secondary text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-secondary/25 group cursor-pointer"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-2xl border border-dark/10 dark:border-white/10 text-dark dark:text-light hover:border-primary/50 hover:bg-primary/5 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer bg-transparent outline-none"
          >
            {t('hero.ctaSecondary')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
