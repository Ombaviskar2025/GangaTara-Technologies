'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export const ClosingCTABand: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-[#0047DD] to-secondary py-16 sm:py-20">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      {/* Glow spots */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-secondary/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold leading-tight mb-3">
            With You for the Long Run.
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Whether you're launching a new digital product, modernizing legacy systems, or scaling to global enterprise — GangaTara is your trusted technology partner at every stage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
        >
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold text-[14px] rounded-xl hover:bg-white/90 transition-all shadow-lg cursor-pointer border-0 outline-none"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="tel:+919009494056"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 border border-white/25 text-white font-bold text-[14px] rounded-xl hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
