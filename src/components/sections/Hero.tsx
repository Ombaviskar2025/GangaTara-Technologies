'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContactModal } from '@/context/ContactModalContext';

// ─────────────────────────────────────────────────────────────────────────────
//  Typewriter – cycles through key service areas
// ─────────────────────────────────────────────────────────────────────────────
const TAGLINES = [
  'Enterprise Technology',
  'AI & Cloud Solutions',
  'Digital Transformation',
  'Cybersecurity Excellence',
];

const Typewriter: React.FC = () => {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState('');
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const full = TAGLINES[idx];
    if (!del && text.length < full.length) {
      const t = setTimeout(() => setText(full.slice(0, text.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!del && text.length === full.length) {
      const t = setTimeout(() => setDel(true), 2400);
      return () => clearTimeout(t);
    }
    if (del && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (del && text.length === 0) {
      setDel(false);
      setIdx((i) => (i + 1) % TAGLINES.length);
    }
  }, [text, del, idx]);

  return (
    <span className="hero-light-gradient-text">
      {text}
      <span className="hero-cursor">|</span>
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Trust badges  (small icon + text)
// ─────────────────────────────────────────────────────────────────────────────
const TRUST = [
  'ISO 27001 Certified',
  '200+ Projects Delivered',
  '15+ Countries Served',
  'Global IT Partner',
];

// ─────────────────────────────────────────────────────────────────────────────
//  Main Hero
// ─────────────────────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
  const { t }         = useLanguage();
  const { openModal } = useContactModal();

  const scrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 80% 10%, #ffffff 0%, #d1d5db 38%, #9ca3af 75%, #8b919a 100%)',
      }}
    >

      {/* ── Layered wave ribbons (bottom) ─────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: 220, zIndex: 10 }}
      >
        {/* Blue-slate filled waves — deepest layer */}
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none"
          className="absolute bottom-0 w-full" style={{ height: 180 }}>
          <path d="M0,90 C200,140 400,60 600,100 C800,140 1000,70 1200,105 C1320,125 1400,100 1440,95 L1440,180 L0,180 Z"
            fill="rgba(100,116,145,0.55)" />
        </svg>

        {/* Mid blue wave */}
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none"
          className="absolute bottom-0 w-full" style={{ height: 155 }}>
          <path d="M0,80 C180,120 380,50 620,85 C860,118 1060,60 1260,88 C1360,102 1420,85 1440,80 L1440,160 L0,160 Z"
            fill="rgba(130,148,175,0.45)" />
        </svg>

        {/* Light blue wave */}
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none"
          className="absolute bottom-0 w-full" style={{ height: 125 }}>
          <path d="M0,65 C220,100 450,40 700,70 C920,98 1150,48 1380,72 C1410,76 1430,70 1440,68 L1440,130 L0,130 Z"
            fill="rgba(165,185,210,0.38)" />
        </svg>

        {/* Very light blue top wave */}
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none"
          className="absolute bottom-0 w-full" style={{ height: 95 }}>
          <path d="M0,50 C260,78 520,30 780,55 C1000,76 1220,38 1440,52 L1440,100 L0,100 Z"
            fill="rgba(190,210,230,0.28)" />
        </svg>

        {/* Orange thin line */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          className="absolute w-full" style={{ height: 80, bottom: 88 }}>
          <path d="M-100,42 C180,14 420,68 680,40 C900,16 1160,58 1540,32"
            fill="none" stroke="rgba(251,146,60,0.9)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Cyan-blue thin line */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          className="absolute w-full" style={{ height: 80, bottom: 72 }}>
          <path d="M-100,48 C200,22 460,64 720,44 C940,26 1200,60 1540,38"
            fill="none" stroke="rgba(147,197,253,0.7)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}
      >
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 hero-light-badge"
          >
            <span className="hero-light-badge-dot" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)}
            className="font-poppins font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4"
            style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.8rem)' }}
          >
            {t('hero.title1')}{' '}
            <br className="hidden sm:block" />
            <Typewriter />
          </motion.h1>

          {/* Sub-description */}
          <motion.p {...fadeUp(0.3)}
            className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            We empower global brands with innovative AI, cloud computing,
            cybersecurity, and bespoke software solutions to drive digital excellence.
          </motion.p>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.38)}
            className="flex flex-wrap gap-3 mb-9"
          >
            {TRUST.map((item) => (
              <span key={item} className="hero-light-trust-badge">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.46)}
            className="flex flex-row flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="hero-btn-light-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={openModal}
              className="hero-btn-light-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm cursor-pointer"
            >
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 hero-chevron-bounce text-gray-400" />
      </motion.button>
    </section>
  );
};
