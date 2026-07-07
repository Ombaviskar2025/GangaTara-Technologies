'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { webinarsData } from '@/data/companyData';
import { useContactModal } from '@/context/ContactModalContext';

const CATEGORY_COLORS: Record<string, string> = {
  'AI & Machine Learning': 'from-purple-600/40 to-blue-700/40',
  'Cloud & DevOps': 'from-blue-600/40 to-cyan-600/40',
  'Cybersecurity': 'from-red-600/30 to-orange-600/30',
};
const DEFAULT_GRADIENT = 'from-primary/30 to-secondary/30';

export const EventsSection: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section className="py-20 bg-light dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-2">Events & Webinars</p>
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white">
              Meet Us — Live & Online
            </h2>
            <p className="text-sm text-dark/55 dark:text-white/50 mt-2 max-w-md">
              Join our engineers and architects at upcoming workshops, webinars, and industry events.
            </p>
          </div>
          <button
            onClick={openModal}
            className="shrink-0 flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-secondary transition-colors cursor-pointer bg-transparent border-0 outline-none"
          >
            Request a Private Session <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webinarsData.map((event, i) => {
            const grad = CATEGORY_COLORS[event.category] ?? DEFAULT_GRADIENT;
            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-dark/8 dark:border-white/8 overflow-hidden hover:border-primary/40 transition-all bg-white dark:bg-white/3 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Event Image */}
                <div className={`h-40 relative overflow-hidden`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />
                  {/* Date overlay */}
                  <div className="absolute inset-0 flex items-end px-4 pb-3">
                    <p className="text-white font-poppins font-bold text-sm leading-tight">{event.date}</p>
                  </div>
                  {/* Top badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-dark/60 border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                    {event.location.includes('Virtual') ? '🌐 Virtual' : '📍 In-Person'}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-dark dark:text-white font-bold text-[14px] leading-snug mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-dark/55 dark:text-white/50 text-[12px] leading-relaxed mb-5 flex-1">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 mb-5 text-[11px] text-dark/45 dark:text-white/40">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {event.location}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-primary hover:text-secondary transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none mt-auto w-fit"
                  >
                    Read more →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
