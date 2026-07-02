'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, BookOpen, Trophy, BarChart3 } from 'lucide-react';

const CARDS = [
  {
    icon: <Newspaper className="w-6 h-6" />,
    label: 'Newsroom',
    description: 'Press releases, announcements, and executive statements from GangaTara Technologies.',
    href: '/blog',
    gradient: 'from-blue-600/15 to-primary/10',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10 border-primary/20',
    image: '/slide_team.png',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    label: 'Insights & Blog',
    description: 'Engineering deep-dives, architecture guides, and technology trend analysis from our experts.',
    href: '/blog',
    gradient: 'from-cyan-600/15 to-secondary/10',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10 border-secondary/20',
    image: '/blog_ai.png',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    label: 'Recognitions',
    description: 'Awards, certifications, and analyst recognitions marking our delivery excellence.',
    href: '/about',
    gradient: 'from-amber-600/15 to-yellow-500/10',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    image: '/slide_datacenter.png',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    label: 'Case Studies',
    description: 'Real-world proof: explore how we delivered measurable enterprise outcomes for global clients.',
    href: '/case-studies',
    gradient: 'from-emerald-600/15 to-green-500/10',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    image: '/ind_healthcare.png',
  },
];

export const NewsInsightsRow: React.FC = () => {
  return (
    <section className="py-16 bg-light/60 dark:bg-dark/40 border-y border-dark/5 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-2">News & Insights</p>
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white">
            Knowledge at Your Fingertips
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                href={card.href}
                className={`group flex flex-col h-full rounded-2xl border border-dark/6 dark:border-white/6 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all`}
              >
                {/* Thumbnail image */}
                <div className="w-full h-32 relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} pointer-events-none`} />
                  <div className={`absolute top-3 left-3 w-9 h-9 rounded-xl border flex items-center justify-center ${card.iconBg} ${card.iconColor}`}>
                    {card.icon}
                  </div>
                </div>

                {/* Text body */}
                <div className={`flex flex-col flex-1 p-5 bg-gradient-to-br ${card.gradient}`}>
                  {/* Label */}
                  <p className="text-[15px] font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {card.label}
                  </p>
                  {/* Description */}
                  <p className="text-[12px] text-dark/55 dark:text-white/50 leading-relaxed flex-1">
                    {card.description}
                  </p>
                  {/* Read more */}
                  <div className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-dark/40 dark:text-white/40 group-hover:text-primary transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
