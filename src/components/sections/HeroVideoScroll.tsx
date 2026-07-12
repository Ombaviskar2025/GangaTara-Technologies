'use client';

/**
 * HeroVideoScroll.tsx — v4 (TCS-style)
 * ─────────────────────────────────────────────────────────────────────────────
 * EXACT TCS.COM BEHAVIOUR
 * ────────────────────────
 * Phase 1 (scroll = 0)
 *   → Full-screen video plays. NO text on top. Scroll indicator at bottom.
 *
 * Phase 2 (user scrolls)
 *   → The children panel (your existing <Hero /> section with headline, badges,
 *     wave SVGs, CTA buttons) rises from the bottom like a card, covering the video.
 *
 * Phase 3 (children fully in view)
 *   → Normal page scroll continues. Video unmounts for performance.
 *
 * HOW IT WORKS
 * ─────────────
 * • The video is `position: fixed` (z-index: 0) — immune to any parent
 *   overflow:hidden or display:flex that would break position:sticky.
 * • A transparent 100vh spacer sits in document flow — the video is visible
 *   through it (no background color = video shows through).
 * • Children render immediately after the spacer with z-index: 10 and a white
 *   background — they naturally scroll up over the fixed video.
 * • The video auto-unmounts once scrolled past the hero zone (saves GPU memory).
 */

import React, { useEffect, useState, useRef } from 'react';
import { useScroll } from 'framer-motion';

interface HeroVideoScrollProps {
  /** e.g. "/hero-video.mp4" — keep ≤ 8–10 MB, MP4 H.264 */
  videoSrc: string;
  /** Shown before video loads + on mobile/reduced-motion as static background */
  posterSrc: string;
  /**
   * The section that rises as the curtain panel.
   * Pass your existing <Hero /> here — it becomes the card that slides up.
   */
  children: React.ReactNode;
}

export const HeroVideoScroll: React.FC<HeroVideoScrollProps> = ({
  videoSrc,
  posterSrc,
  children,
}) => {
  // ── Environment ──────────────────────────────────────────────────────────
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile]               = useState(false);
  // Unmount fixed video once curtain has covered it
  const [videoMounted, setVideoMounted]        = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
    mq.addEventListener('change', (e) => setIsReducedMotion(e.matches));

    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Window scroll ────────────────────────────────────────────────────────
  const { scrollY } = useScroll();

  // Unmount video once curtain is well past (1.5× viewport)
  useEffect(() => {
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    const unsub = scrollY.on('change', (y) => setVideoMounted(y < vh * 1.5));
    return () => unsub();
  }, [scrollY]);

  // ── Video speed ─────────────────────────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // 1.5× playback speed — "a little fast" as requested
    if (videoRef.current) videoRef.current.playbackRate = 1.5;
  }, [videoMounted]); // re-apply whenever video mounts

  // ── STATIC fallback (mobile / reduced-motion) ────────────────────────────
  // On mobile: skip the video entirely, just render the children (Hero) normally
  if (isMobile || isReducedMotion) {
    return <>{children}</>;
  }

  // ── FULL desktop experience ──────────────────────────────────────────────
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 0 — Fixed full-screen video
          position:fixed → completely immune to parent overflow:hidden / flex
          z-index: 0 → behind everything
          No text on top — pure cinematic video like TCS.
          Unmounts automatically once the curtain fully covers it.
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {videoMounted && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          {/* ── Video ───────────────────────────────────────────────────── */}
          {/*
           * VIDEO TIPS:
           * • Keep MP4 ≤ 8–10 MB (H.264). Current file: 3.26 MB ✅
           * • For ~30% smaller on Chrome/Firefox, also add:
           *     /public/hero-video.webm
           *   and prepend:  <source src="/hero-video.webm" type="video/webm" />
           */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* ── Subtle bottom gradient so curtain slides in smoothly ─────── */}
          {/* Mimics TCS: video darkens at the bottom, curtain appears from below */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.38) 100%)',
              pointerEvents: 'none',
            }}
          />


        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 1 — Transparent spacer (100vh)
          Creates scroll "real estate" for the pure-video phase.
          NO background → the fixed video shows through this div.
          z-index: 1 (above video, below curtain)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        style={{
          height: '100vh',
          position: 'relative',
          zIndex: 1,
          // NO background — video shows through
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 2 — Curtain panel (your existing <Hero /> component)
          z-index: 10 → renders on top of the fixed video.
          Scrolls naturally upward in document flow — rises over the video.
          border-radius on top corners = the "card lifting off" look.
          overflow:hidden = clips Hero's wave SVGs to the rounded corners.
          margin-top: -32px = slight peek under the spacer (like TCS).
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="hero-video-curtain-panel"
        style={{
          position: 'relative',
          zIndex: 10,
          borderRadius: '28px 28px 0 0',
          overflow: 'hidden',
          marginTop: '-32px',
          // GPU compositing — keeps curtain slide silky at 60fps
          willChange: 'transform',
          boxShadow: '0 -24px 64px rgba(0, 0, 0, 0.28)',
        }}
      >
        {children}
      </div>
    </>
  );
};
