'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronDown, SkipForward,
  Pause, Play, Volume2, VolumeX,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContactModal } from '@/context/ContactModalContext';

// ─────────────────────────────────────────────────────────────────────────────
//  Config
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
//  Floating Particles
// ─────────────────────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x:       Math.random() * 100,
  y:       10 + Math.random() * 80,
  size:    Math.random() * 2.5 + 0.6,
  dur:     Math.random() * 9 + 7,
  delay:   Math.random() * 6,
  opacity: Math.random() * 0.25 + 0.05,
  color:
    Math.random() > 0.6 ? '#FF8C00'
    : Math.random() > 0.5 ? '#00E5FF'
    : '#3B82F6',
}));

// ─────────────────────────────────────────────────────────────────────────────
//  Wave Ribbons  (bottom edge)
// ─────────────────────────────────────────────────────────────────────────────
const WaveRibbons: React.FC = () => (
  <div
    className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
    style={{ height: 230, zIndex: 10 }}
  >
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none"
      className="absolute bottom-0 w-full hero-wave-fill-1" style={{ height: 180 }}>
      <path d="M0,60 C240,120 480,10 720,60 C960,110 1200,20 1440,60 L1440,160 L0,160 Z"
        fill="rgba(0,87,255,0.18)" />
    </svg>

    <svg viewBox="0 0 1440 140" preserveAspectRatio="none"
      className="absolute bottom-0 w-full hero-wave-fill-2" style={{ height: 140 }}>
      <path d="M0,80 C300,30 600,120 900,70 C1100,40 1300,95 1440,70 L1440,140 L0,140 Z"
        fill="rgba(0,20,80,0.35)" />
    </svg>

    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full hero-line-orange" style={{ height: 80, bottom: 68 }}>
      <path d="M-200,40 C200,5 500,70 800,38 C1050,14 1300,60 1640,28"
        fill="none" stroke="rgba(255,140,0,0.85)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>

    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full hero-line-blue" style={{ height: 80, bottom: 44 }}>
      <path d="M-200,50 C300,15 600,70 900,40 C1100,20 1350,60 1640,35"
        fill="none" stroke="rgba(0,160,255,0.65)" strokeWidth="2" strokeLinecap="round" />
    </svg>

    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full hero-line-cyan" style={{ height: 80, bottom: 22 }}>
      <path d="M-200,55 C250,25 550,65 850,42 C1070,25 1320,58 1640,38"
        fill="none" stroke="rgba(0,220,255,0.32)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Main Hero
// ─────────────────────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
  const { t }          = useLanguage();
  const { openModal }  = useContactModal();

  const videoRef = useRef<HTMLVideoElement>(null);

  const [introComplete, setIntroComplete] = useState(false);
  const [progress,      setProgress]      = useState(0);   // 0-1 driven by video
  const [isPaused,      setIsPaused]      = useState(false);
  const [isMuted,       setIsMuted]       = useState(true);

  const completeIntro = useCallback(() => {
    setIntroComplete(true);
  }, []);

  // ── Video event handlers ────────────────────────────────────────────────
  // Progress bar tracks video.currentTime / video.duration
  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  }, []);

  // Intro finishes exactly when the video ends — plays once only
  const handleEnded = useCallback(() => {
    setProgress(1);
    completeIntro();
  }, [completeIntro]);

  // ── Sync video pause state ──────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPaused) v.pause();
    else          v.play().catch(() => {});
  }, [isPaused]);

  // ── Sync video mute state ───────────────────────────────────────────────
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  // ── Toggle handlers ─────────────────────────────────────────────────────
  const togglePause = () => setIsPaused((p) => !p);
  const toggleMute  = () => setIsMuted((m)  => !m);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 1 — Background Video  (full-screen, looping)
          ════════════════════════════════════════════════════════════════════ */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        autoPlay
        muted          /* always starts muted — required for autoplay */
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 2 — Dark cinematic overlay  (makes text readable)
          ════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(140deg, rgba(1,10,24,0.62) 0%, rgba(2,14,32,0.48) 50%, rgba(1,8,18,0.55) 100%)',
        }}
      />
      {/* Extra left veil for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(1,8,22,0.72) 0%, rgba(1,8,22,0.42) 45%, transparent 78%)',
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 3 — Floating particles
          ════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              background: p.color, opacity: p.opacity,
            }}
            animate={{ y: [0, -60, 0], opacity: [p.opacity, p.opacity * 0.15, p.opacity] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 4 — Wave ribbons  (always visible)
          ════════════════════════════════════════════════════════════════════ */}
      <WaveRibbons />

      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 5 — INTRO OVERLAY  (visible for 0–20 s, scroll locked)
          ════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro-overlay"
            className="absolute inset-0 z-30 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.4, ease: 'easeInOut' } }}
          >
            {/* ── Top cinematic bar ────────────────────────────────────── */}
            <div
              className="w-full shrink-0 flex items-center justify-between px-6 sm:px-10"
              style={{
                height: 64,
                background: 'rgba(0,5,15,0.70)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Logo */}
              <span className="font-poppins font-extrabold text-white text-lg tracking-tight select-none">
                GangaTara{' '}
                <span style={{ color: '#3BBAFF' }}>Technologies</span>
              </span>

              {/* Skip intro */}
              <button
                onClick={completeIntro}
                className="intro-skip-btn inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full"
              >
                <SkipForward className="w-3.5 h-3.5" />
                Skip Intro
              </button>
            </div>

            {/* Empty centre — pure video plays here */}
            <div className="flex-1" />

            {/* ── Bottom cinematic bar: progress ───────────────────────── */}
            <div
              className="w-full shrink-0 px-6 sm:px-10 pb-5 pt-3"
              style={{
                background: 'rgba(0,5,15,0.70)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: 'rgba(140,185,255,0.55)' }}
                >
                  Playing intro
                </span>
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase tabular-nums"
                  style={{ color: 'rgba(140,185,255,0.55)' }}
                >
                  {Math.round(progress * 100)}%
                </span>
              </div>

              {/* Progress track */}
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 3, background: 'rgba(255,255,255,0.08)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress * 100}%`,
                    background: 'linear-gradient(90deg, #0057FF 0%, #00B4FF 50%, #FF8C00 100%)',
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          ▌ LAYER 6 — POST-INTRO hero content  (text bottom-left)
          ════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            key="hero-content"
            className="absolute inset-0 z-20 flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Bottom gradient veil */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '65%',
                background: 'linear-gradient(0deg, rgba(1,6,18,0.82) 0%, transparent 100%)',
              }}
            />

            {/* Text content */}
            <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-28">
              <div className="max-w-xl">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                  style={{
                    background: 'rgba(0,87,255,0.14)',
                    border: '1px solid rgba(0,140,255,0.38)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#3BBAFF' }} />
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#3BBAFF' }}>
                    {t('hero.badge')}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.7 }}
                  className="font-poppins font-extrabold leading-[1.12] tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
                >
                  {t('hero.title1')}{' '}
                  <span className="hero-gradient-text">{t('hero.title2')}</span>
                </motion.h1>

                {/* AI · Cloud · Software · Innovation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.82 }}
                  className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8"
                >
                  {['AI', 'Cloud', 'Software', 'Innovation'].map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span className="text-sm sm:text-base font-semibold"
                        style={{ color: 'rgba(190,220,255,0.92)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                        {tag}
                      </span>
                      {i < 3 && (
                        <span style={{ color: 'rgba(0,190,255,0.65)', fontSize: '0.78rem' }}>•</span>
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.94 }}
                  className="flex flex-row flex-wrap gap-4"
                >
                  <Link
                    href="/services"
                    className="hero-btn-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
                  >
                    {t('hero.ctaPrimary')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={openModal}
                    className="hero-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm cursor-pointer bg-transparent outline-none"
                    style={{ color: 'rgba(195,225,255,0.92)' }}
                  >
                    {t('hero.ctaSecondary')}
                  </button>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          ▌ CONTROLS  (always visible, bottom-left)
          ════════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-6 z-40 flex items-center gap-2"
      >
        {/* Play / Pause video */}
        <button
          onClick={togglePause}
          className="hero-pause-btn inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-white text-xs font-semibold"
          aria-label={isPaused ? 'Play video' : 'Pause video'}
        >
          {isPaused
            ? <Play  className="w-3.5 h-3.5" />
            : <Pause className="w-3.5 h-3.5" />
          }
          <span className="hidden sm:inline">{isPaused ? 'Play' : 'Pause'}</span>
        </button>

        {/* Mute / Unmute video */}
        <button
          onClick={toggleMute}
          className="hero-pause-btn inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-white text-xs font-semibold"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted
            ? <VolumeX className="w-3.5 h-3.5" />
            : <Volume2 className="w-3.5 h-3.5" />
          }
          <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>
      </motion.div>

      {/* ── Scroll Down (appears after intro) ────────────────────────────── */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            key="scroll-cue"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5"
          >
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: 'rgba(200,225,255,0.6)' }}
            >
              Scroll Down
            </span>
            <ChevronDown
              className="w-4 h-4 hero-chevron-bounce"
              style={{ color: 'rgba(200,225,255,0.6)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
