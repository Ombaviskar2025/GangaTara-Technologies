'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export const ClosingCTABand: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative overflow-hidden bg-[#2B2D31] border-t border-white/10 py-16 sm:py-20 text-center">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      {/* Glow spots */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-md mx-auto px-6 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold leading-tight mb-4">
            Ready to build what's next?
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Partner with GangaTara's expert engineers and cloud architects to accelerate your digital transformation today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
        >
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-secondary text-white font-bold text-[14px] rounded-xl transition-all shadow-lg cursor-pointer border-0 outline-none"
          >
            Connect With Us <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="tel:+919009494056"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 font-bold text-[14px] rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-primary" />
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
