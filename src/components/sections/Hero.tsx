'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useContactModal } from '@/context/ContactModalContext';

// ─────────────────────────────────────────────────────────────────────────────
//  Animated Canvas Background  (tech network / particle field)
// ─────────────────────────────────────────────────────────────────────────────
const CanvasBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    // ── Particles ────────────────────────────────────────────────────────────
    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      color: string;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }

    const COLORS = ['#0057FF', '#00B4FF', '#3B82F6', '#00E5FF', '#FF8C00'];
    const particles: Particle[] = [];
    const NODE_COUNT = 90;

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 2.4 + 0.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.012 + Math.random() * 0.018,
        });
      }
    };

    // ── Shooting stars ───────────────────────────────────────────────────────
    interface Star {
      x: number; y: number;
      len: number; speed: number;
      alpha: number; angle: number;
      life: number; maxLife: number;
    }
    const stars: Star[] = [];
    const spawnStar = () => {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.5,
        len: 80 + Math.random() * 120,
        speed: 4 + Math.random() * 5,
        alpha: 0.8 + Math.random() * 0.2,
        angle: Math.PI / 6 + (Math.random() - 0.5) * 0.4,
        life: 0,
        maxLife: 40 + Math.random() * 30,
      });
    };

    // ── Resize ───────────────────────────────────────────────────────────────
    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      createParticles();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let frame = 0;

    // ── Draw loop ─────────────────────────────────────────────────────────────
    const draw = () => {
      animId = requestAnimationFrame(draw);
      frame++;

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0,   '#010818');
      bg.addColorStop(0.5, '#020D24');
      bg.addColorStop(1,   '#010A1A');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Radial glow – left-center
      const glow1 = ctx.createRadialGradient(W * 0.18, H * 0.5, 0, W * 0.18, H * 0.5, W * 0.45);
      glow1.addColorStop(0,   'rgba(0, 87, 255, 0.13)');
      glow1.addColorStop(1,   'transparent');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, W, H);

      // Radial glow – right-center
      const glow2 = ctx.createRadialGradient(W * 0.82, H * 0.45, 0, W * 0.82, H * 0.45, W * 0.38);
      glow2.addColorStop(0,   'rgba(0, 180, 255, 0.09)');
      glow2.addColorStop(1,   'transparent');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, W, H);

      // Subtle grid
      ctx.save();
      ctx.strokeStyle = 'rgba(0,87,255,0.045)';
      ctx.lineWidth = 0.5;
      const GRID = 70;
      for (let x = 0; x < W; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.restore();

      // ── Move & draw connections ─────────────────────────────────────────
      const MAX_DIST = 160;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,140,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // ── Draw particle nodes ─────────────────────────────────────────────
      for (const p of particles) {
        const pAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        const pR = p.r * (0.9 + 0.1 * Math.sin(p.pulse));

        // Glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pR * 5);
        grad.addColorStop(0,   p.color + Math.round(pAlpha * 80).toString(16).padStart(2,'0'));
        grad.addColorStop(1,   'transparent');
        ctx.beginPath();
        ctx.arc(p.x, p.y, pR * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pR, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = pAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // ── Shooting stars ─────────────────────────────────────────────────
      if (frame % 90 === 0) spawnStar();
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.life++;
        const progress = s.life / s.maxLife;
        const fade = progress < 0.2 ? progress / 0.2 : progress > 0.7 ? (1 - progress) / 0.3 : 1;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, `rgba(180,220,255,${s.alpha * fade})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (s.life >= s.maxLife) stars.splice(i, 1);
      }

      // ── Data-stream lines (vertical dashes) ────────────────────────────
      if (frame % 4 === 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(0,200,255,0.07)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 16]);
        const streams = [W * 0.1, W * 0.3, W * 0.55, W * 0.75, W * 0.92];
        for (const sx of streams) {
          const offset = (frame * 0.6) % H;
          ctx.beginPath();
          ctx.moveTo(sx, -H + offset);
          ctx.lineTo(sx, offset);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.restore();
      }
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Floating Particles  (CSS layer on top)
// ─────────────────────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x:       Math.random() * 100,
  y:       10 + Math.random() * 80,
  size:    Math.random() * 3 + 0.8,
  dur:     Math.random() * 9 + 7,
  delay:   Math.random() * 6,
  opacity: Math.random() * 0.3 + 0.06,
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
      className="absolute bottom-0 w-full" style={{ height: 180 }}>
      <path d="M0,60 C240,120 480,10 720,60 C960,110 1200,20 1440,60 L1440,160 L0,160 Z"
        fill="rgba(0,87,255,0.18)" />
    </svg>
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none"
      className="absolute bottom-0 w-full" style={{ height: 140 }}>
      <path d="M0,80 C300,30 600,120 900,70 C1100,40 1300,95 1440,70 L1440,140 L0,140 Z"
        fill="rgba(0,20,80,0.35)" />
    </svg>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full" style={{ height: 80, bottom: 68 }}>
      <path d="M-200,40 C200,5 500,70 800,38 C1050,14 1300,60 1640,28"
        fill="none" stroke="rgba(255,140,0,0.85)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full" style={{ height: 80, bottom: 44 }}>
      <path d="M-200,50 C300,15 600,70 900,40 C1100,20 1350,60 1640,35"
        fill="none" stroke="rgba(0,160,255,0.65)" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
      className="absolute w-full" style={{ height: 80, bottom: 22 }}>
      <path d="M-200,55 C250,25 550,65 850,42 C1070,25 1320,58 1640,38"
        fill="none" stroke="rgba(0,220,255,0.32)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Typewriter
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
      const t = setTimeout(() => setDel(true), 2200);
      return () => clearTimeout(t);
    }
    if (del && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 38);
      return () => clearTimeout(t);
    }
    if (del && text.length === 0) {
      setDel(false);
      setIdx((i) => (i + 1) % TAGLINES.length);
    }
  }, [text, del, idx]);

  return (
    <span className="hero-gradient-text">
      {text}
      <span className="animate-pulse" style={{ opacity: 0.8 }}>|</span>
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Stat counter
// ─────────────────────────────────────────────────────────────────────────────
const StatBadge: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center px-5 py-3 rounded-2xl"
    style={{
      background: 'rgba(0,87,255,0.10)',
      border: '1px solid rgba(0,140,255,0.22)',
      backdropFilter: 'blur(12px)',
    }}
  >
    <span className="text-2xl font-black text-white tracking-tight">{value}</span>
    <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5" style={{ color: 'rgba(140,200,255,0.7)' }}>{label}</span>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Main Hero
// ─────────────────────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
  const { t }         = useLanguage();
  const { openModal } = useContactModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* ══════════════════════════════════════════════════════════════════════
          ▌ LAYER 1 — Animated Canvas Background
          ══════════════════════════════════════════════════════════════════════ */}
      <CanvasBg />

      {/* ══════════════════════════════════════════════════════════════════════
          ▌ LAYER 2 — Left veil for text legibility
          ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(1,8,22,0.55) 0%, rgba(1,8,22,0.28) 50%, transparent 80%)',
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          ▌ LAYER 3 — Floating CSS particles
          ══════════════════════════════════════════════════════════════════════ */}
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
            animate={{ y: [0, -55, 0], opacity: [p.opacity, p.opacity * 0.1, p.opacity] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          ▌ LAYER 4 — Wave ribbons
          ══════════════════════════════════════════════════════════════════════ */}
      <WaveRibbons />

      {/* ══════════════════════════════════════════════════════════════════════
          ▌ LAYER 5 — Hero content  (centred, full-height)
          ══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="hero-content"
            className="absolute inset-0 z-20 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Bottom gradient veil */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '50%',
                background: 'linear-gradient(0deg, rgba(1,6,18,0.75) 0%, transparent 100%)',
              }}
            />

            {/* ── Text block ──────────────────────────────────────────────── */}
            <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
              <div className="max-w-2xl">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
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
                  transition={{ duration: 0.75, delay: 0.45 }}
                  className="font-poppins font-extrabold leading-[1.1] tracking-tight text-white mb-4"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', textShadow: '0 4px 30px rgba(0,0,0,0.55)' }}
                >
                  {t('hero.title1')}{' '}
                  <br className="hidden sm:block" />
                  <Typewriter />
                </motion.h1>

                {/* Sub-tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
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
                  transition={{ duration: 0.7, delay: 0.75 }}
                  className="flex flex-row flex-wrap gap-4 mb-12"
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

                {/* Stat badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-wrap gap-3"
                >
                  <StatBadge value="200+" label="Projects Delivered" delay={1.0} />
                  <StatBadge value="50+"  label="Enterprise Clients"  delay={1.1} />
                  <StatBadge value="15+"  label="Countries Served"    delay={1.2} />
                  <StatBadge value="ISO"  label="27001 Certified"     delay={1.3} />
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════
          ▌ Scroll cue
          ══════════════════════════════════════════════════════════════════════ */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <span
          className="text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: 'rgba(200,225,255,0.55)' }}
        >
          Scroll Down
        </span>
        <ChevronDown
          className="w-4 h-4 hero-chevron-bounce"
          style={{ color: 'rgba(200,225,255,0.55)' }}
        />
      </motion.button>
    </section>
  );
};
