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
      className="hero-light-section relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Subtle dot-pattern background ─────────────────────────────────── */}
      <div className="hero-light-dots" aria-hidden="true" />

      {/* ── Soft top-left accent blob ─────────────────────────────────────── */}
      <div className="hero-light-blob-tl" aria-hidden="true" />
      {/* ── Soft bottom-right accent blob ────────────────────────────────── */}
      <div className="hero-light-blob-br" aria-hidden="true" />

      {/* ── Content ───────────────────────────────────────────────────────── */}
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
