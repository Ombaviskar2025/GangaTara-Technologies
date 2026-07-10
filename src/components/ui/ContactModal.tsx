'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  X, Briefcase, MessageSquare,
  ArrowRight, Mail, Phone, ChevronRight,
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

type Category = 'select' | 'services' | 'feedback';

interface CategoryDef {
  key: Exclude<Category, 'select'>;
  icon: React.ReactNode;
  label: string;
  description: string;
  cta: string;
  href?: string;
  email?: string;
}

const CATEGORIES: CategoryDef[] = [
  {
    key: 'services',
    icon: <Briefcase className="w-6 h-6" />,
    label: 'Request for Services',
    description: 'Discuss a new project, request a proposal, or get a custom quote for enterprise IT services.',
    cta: 'Start a Conversation',
    href: '/contact',
  },
  {
    key: 'feedback',
    icon: <MessageSquare className="w-6 h-6" />,
    label: 'Website Feedback',
    description: 'Spotted an error, accessibility issue, or broken link? Let us know so we can improve.',
    cta: 'Send Feedback',
    email: 'feedback@gangatara.com',
  },
];

const ICON_COLORS: Record<Exclude<Category, 'select'>, string> = {
  services: 'bg-primary/10 text-primary border-primary/20',
  feedback: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

export const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useContactModal();
  const [selected, setSelected] = useState<Category>('select');

  const selectedDef = CATEGORIES.find((c) => c.key === selected);

  const handleClose = () => {
    closeModal();
    setTimeout(() => setSelected('select'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#4A4B50]/85 z-[70] backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[8vh] bottom-[8vh] sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:top-[8vh] sm:w-[680px] sm:max-h-[84vh] z-[75] flex flex-col rounded-2xl overflow-hidden bg-[#57585E] border border-white/10 shadow-2xl shadow-gray-950/60"
            role="dialog"
            aria-modal="true"
            aria-label="Contact GangaTara Technologies"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-0.5">Get in Touch</p>
                <h2 className="text-white font-poppins font-bold text-[18px]">What's on Your Mind?</h2>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category selector or detail */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {selected === 'select' ? (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="p-7"
                  >
                    <p className="text-white/45 text-[13px] mb-6">
                      Select a category and we'll connect you with the right team immediately.
                    </p>
                    <div className="flex flex-col gap-3">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.key}
                          onClick={() => setSelected(cat.key)}
                          className="group flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-primary/40 bg-white/2 hover:bg-primary/4 transition-all cursor-pointer text-left"
                        >
                          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${ICON_COLORS[cat.key]}`}>
                            {cat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[14px] font-semibold text-white group-hover:text-primary transition-colors">
                              {cat.label}
                            </p>
                            <p className="text-[11px] text-white/40 mt-0.5 line-clamp-1">{cat.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/25 group-hover:text-primary transition-colors shrink-0" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : selectedDef ? (
                  <motion.div
                    key={selected}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-7"
                  >
                    {/* Back */}
                    <button
                      onClick={() => setSelected('select')}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white text-[12px] font-medium mb-6 cursor-pointer transition-colors"
                    >
                      ← Back to categories
                    </button>

                    {/* Category header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${ICON_COLORS[selectedDef.key]}`}>
                        {selectedDef.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-[16px] mb-1">{selectedDef.label}</h3>
                        <p className="text-white/50 text-[13px] leading-relaxed">{selectedDef.description}</p>
                      </div>
                    </div>

                    {/* Contact options */}
                    <div className="flex flex-col gap-3 mb-6">
                      {selectedDef.href && (
                        <Link
                          href={selectedDef.href}
                          onClick={handleClose}
                          className="flex items-center justify-between px-5 py-3.5 bg-primary hover:bg-secondary text-white font-bold text-[13px] rounded-xl transition-colors shadow-md shadow-primary/20"
                        >
                          {selectedDef.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                      {selectedDef.email && (
                        <a
                          href={`mailto:${selectedDef.email}`}
                          className="flex items-center justify-between px-5 py-3.5 bg-white/5 border border-white/10 hover:border-primary/40 text-white font-bold text-[13px] rounded-xl transition-all"
                        >
                          <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            {selectedDef.email}
                          </span>
                          <ArrowRight className="w-4 h-4 text-white/40" />
                        </a>
                      )}
                    </div>

                    {/* Quick contact bar */}
                    <div className="p-4 rounded-xl bg-white/3 border border-white/6">
                      <p className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-3">Or reach us directly</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a href="tel:+919009494056" className="flex items-center gap-2 text-[12px] text-white/60 hover:text-white transition-colors">
                          <Phone className="w-3.5 h-3.5 text-primary" /> +91 9009494056
                        </a>
                        <a href="mailto:info@gangatara.com" className="flex items-center gap-2 text-[12px] text-white/60 hover:text-white transition-colors">
                          <Mail className="w-3.5 h-3.5 text-primary" /> info@gangatara.com
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
