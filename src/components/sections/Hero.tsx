'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContactModal } from '@/context/ContactModalContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-light dark:bg-dark">
      {/* 1. Animated background particles / glow */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full radial-glow-blue animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full radial-glow-cyan animate-pulse-slow z-0" style={{ animationDelay: '2s' }} />

      {/* 2. Core Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
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
            className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold tracking-tight leading-[1.1] text-dark dark:text-light mb-6"
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
            className="text-base sm:text-lg text-dark/70 dark:text-light/75 leading-relaxed mb-8 max-w-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
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

        {/* Right Column: Abstract Dashboard/Graphic */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Floating Uptime Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -top-4 -left-4 px-4 py-2.5 rounded-2xl bg-white/70 border border-black/5 dark:bg-dark/60 dark:border-white/5 shadow-xl backdrop-blur-md z-20 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-dark dark:text-light"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span>Uptime: 99.99%</span>
          </motion.div>

          {/* Floating Security Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl bg-white/70 border border-black/5 dark:bg-dark/60 dark:border-white/5 shadow-xl backdrop-blur-md z-20 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-dark dark:text-light"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Threat Detection: Active</span>
          </motion.div>

          {/* Main Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-md aspect-[4/3.8] rounded-[32px] overflow-hidden glass-card flex flex-col p-6 border border-light/20 dark:border-white/5 shadow-2xl bg-slate-900/5 dark:bg-slate-900/20"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/10 rounded-[32px] blur-xl opacity-55 pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-dark/5 dark:border-white/5 pb-4 mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-dark/40 dark:text-light/40 font-bold font-poppins">
                  System Architecture
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-bold text-dark/70 dark:text-light/50 font-inter">Live Metrics</span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full bg-light/35 dark:bg-dark/30 rounded-2xl p-4 border border-dark/5 dark:border-white/5 mb-4 relative overflow-hidden z-10 flex flex-col justify-end">
              <div className="absolute top-3 left-4 flex gap-4 text-[9px] font-bold text-dark/40 dark:text-light/40 uppercase">
                <div>Load: <span className="text-primary">Normal</span></div>
                <div>Node: <span className="text-secondary">E-G01</span></div>
              </div>

              {/* Chart SVG */}
              <svg viewBox="0 0 300 110" className="w-full h-24 text-primary overflow-visible">
                <defs>
                  <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--color-primary)"/>
                    <stop offset="100%" stopColor="var(--color-secondary)"/>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="15" x2="300" y2="15" stroke="rgba(120,120,120,0.06)" strokeDasharray="3 3"/>
                <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(120,120,120,0.06)" strokeDasharray="3 3"/>
                <line x1="0" y1="95" x2="300" y2="95" stroke="rgba(120,120,120,0.06)" strokeDasharray="3 3"/>
                {/* Area fill under curve */}
                <path d="M 0 110 L 0 85 Q 40 40 80 65 T 160 35 Q 210 95 250 55 T 300 45 L 300 110 Z" fill="url(#area-grad)"/>
                {/* The line */}
                <motion.path 
                  d="M 0 85 Q 40 40 80 65 T 160 35 Q 210 95 250 55 T 300 45" 
                  fill="none" 
                  stroke="url(#line-grad)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                {/* End pulsing dot */}
                <circle cx="300" cy="45" r="4.5" className="fill-secondary animate-ping"/>
                <circle cx="300" cy="45" r="4.5" className="fill-secondary"/>
              </svg>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/3 border border-dark/5 dark:border-white/5 text-center flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-dark/40 dark:text-light/35 font-bold mb-1">
                  Latency
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-primary font-poppins">
                  12.4 ms
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/3 border border-dark/5 dark:border-white/5 text-center flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-dark/40 dark:text-light/35 font-bold mb-1">
                  Database
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-secondary font-poppins">
                  99.997%
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
