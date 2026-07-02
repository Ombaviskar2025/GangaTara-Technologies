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

  const floatingIcons = [
    { icon: <Cpu className="w-6 h-6 text-primary" />, x: '10%', y: '20%', delay: 0 },
    { icon: <Cloud className="w-8 h-8 text-secondary" />, x: '80%', y: '15%', delay: 1.5 },
    { icon: <Terminal className="w-5 h-5 text-accent" />, x: '15%', y: '70%', delay: 0.8 },
    { icon: <Globe className="w-7 h-7 text-success" />, x: '75%', y: '65%', delay: 2.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-light dark:bg-dark">
      {/* 1. Animated background particles / glow */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full radial-glow-blue animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full radial-glow-cyan animate-pulse-slow z-0" style={{ animationDelay: '2s' }} />

      {/* 2. Floating Tech Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute z-10 hidden sm:flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 dark:bg-dark/40 dark:border-white/5 shadow-xl backdrop-blur-md"
          style={{ top: item.y, left: item.x }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* 3. Core Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6 flex items-center gap-1.5"
          >
            <CpuIcon className="w-3.5 h-3.5" /> {t('hero.badge')}
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

        {/* Corporate Illustration Graphic */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square rounded-[32px] overflow-hidden glass-card flex items-center justify-center p-8 border border-light/20 dark:border-white/5 shadow-2xl bg-slate-900/10 dark:bg-slate-900/30"
          >
            {/* Ambient inner circle glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 rounded-[32px] blur-xl opacity-50" />

            {/* Glowing animated SVG illustration of a central core processing database */}
            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 text-primary dark:text-secondary">
              <motion.circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke="url(#svg-gradient)"
                strokeWidth="2"
                strokeDasharray="40 10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <circle cx="100" cy="100" r="15" className="fill-primary/20 stroke-primary stroke-[1.5]" />
              <CpuIcon className="w-6 h-6 x-[88px] y-[88px] text-primary" style={{ transform: 'translate(88px, 88px)' }} />

              {/* Connecting Nodes */}
              <circle cx="50" cy="50" r="6" className="fill-secondary stroke-white dark:stroke-dark stroke-[1.5] shadow-lg" />
              <path d="M50 50 L88 88" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              
              <circle cx="150" cy="60" r="5" className="fill-primary stroke-white dark:stroke-dark stroke-[1.5]" />
              <path d="M150 60 L112 88" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

              <circle cx="140" cy="150" r="7" className="fill-success stroke-white dark:stroke-dark stroke-[1.5]" />
              <path d="M140 150 L112 112" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

              <circle cx="60" cy="140" r="5" className="fill-accent stroke-white dark:stroke-dark stroke-[1.5]" />
              <path d="M60 140 L88 112" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

              <defs>
                <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0057FF" />
                  <stop offset="100%" stopColor="#00B4FF" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
