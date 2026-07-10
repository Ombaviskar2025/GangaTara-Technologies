'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const PERKS = ['Competitive Compensation', 'Remote & Hybrid Roles', '€2,000 Learning Budget', 'ISO-Certified Workplace'];

export const CareerBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex items-center" aria-label="Careers at GangaTara Technologies">
      {/* Background image */}
      <img
        src="/career_banner.png"
        alt="GangaTara Technologies engineering team collaborating on enterprise software"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient overlay — dark from left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A4B50]/96 via-[#4A4B50]/80 to-[#4A4B50]/30" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 sm:px-14 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em]">Careers at GangaTara</span>
          </div>

          {/* Headline */}
          <h2 className="text-white text-3xl sm:text-4xl font-poppins font-bold leading-tight mb-4">
            Build What's Next With Us
          </h2>

          {/* Description */}
          <p className="text-white/65 text-sm leading-relaxed mb-7 max-w-md">
            Join a global team of over 500 engineers, architects, and designers. We build modern, robust solutions that redefine how leading enterprises solve critical scale and security challenges.
          </p>

          {/* Perk pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {PERKS.map((perk, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white/8 border border-white/10 text-white/70 text-[11px] font-medium rounded-full"
              >
                {perk}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-secondary text-white font-bold text-[13px] rounded-xl transition-all shadow-lg shadow-primary/25"
            >
              Join Our Team →
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-[13px] rounded-xl transition-all"
            >
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
