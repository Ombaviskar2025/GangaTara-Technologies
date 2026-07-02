'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData, industriesData, productsData } from '@/data/companyData';
import * as Icons from 'lucide-react';

type TabKey = 'industries' | 'services' | 'products';

const DynamicIcon: React.FC<{ name: string }> = ({ name }) => {
  const I = (Icons as any)[name];
  return I ? <I className="w-4 h-4" /> : <Icons.Code className="w-4 h-4" />;
};

const TABS: { key: TabKey; label: string }[] = [
  { key: 'industries', label: 'Industries' },
  { key: 'services', label: 'Services' },
  { key: 'products', label: 'Products & Platforms' },
];

export const TabbedSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('industries');

  const tabContent: Record<TabKey, { items: { label: string; href: string; icon: React.ReactNode; desc: string }[] }> = {
    industries: {
      items: industriesData.map((ind) => ({
        label: ind.title,
        href: `/industries/${ind.id}`,
        icon: <DynamicIcon name={ind.iconName} />,
        desc: ind.shortDesc,
      })),
    },
    services: {
      items: servicesData.map((srv) => ({
        label: srv.title,
        href: `/services/${srv.id}`,
        icon: <DynamicIcon name={srv.iconName} />,
        desc: srv.shortDesc,
      })),
    },
    products: {
      items: productsData.map((p) => ({
        label: p.title,
        href: p.link,
        icon: <Icons.Layers className="w-4 h-4" />,
        desc: p.shortDesc,
      })),
    },
  };

  const currentItems = tabContent[activeTab].items;

  return (
    <section className="py-20 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-2">Cutting Edge Solutions</p>
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white">
              Built for Every Sector & Scale
            </h2>
          </div>
          <p className="text-sm text-dark/55 dark:text-white/50 max-w-sm">
            Explore our full portfolio of industry solutions, technology services, and proprietary enterprise platforms.
          </p>
        </div>

        {/* Tab bar — TCS style: underline tabs */}
        <div className="flex gap-0 border-b border-dark/10 dark:border-white/8 mb-8 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative shrink-0 px-6 py-3 text-[13px] font-semibold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'text-primary'
                  : 'text-dark/50 dark:text-white/40 hover:text-dark dark:hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          >
            {currentItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-start gap-3 p-4 rounded-xl border border-dark/6 dark:border-white/6 hover:border-primary/40 bg-white/60 dark:bg-white/3 hover:bg-primary/3 dark:hover:bg-primary/5 transition-all"
              >
                <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-dark dark:text-white group-hover:text-primary transition-colors leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-dark/50 dark:text-white/40 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-dark/20 dark:text-white/20 group-hover:text-primary shrink-0 mt-1 transition-colors opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <div className="mt-8 flex justify-end">
          <Link
            href={activeTab === 'industries' ? '/industries' : activeTab === 'services' ? '/services' : '/products'}
            className="flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-secondary transition-colors"
          >
            View All {TABS.find(t => t.key === activeTab)?.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
