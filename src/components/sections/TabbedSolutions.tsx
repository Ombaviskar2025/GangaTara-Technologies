'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData, industriesData, productsData } from '@/data/companyData';
import * as Icons from 'lucide-react';

type TabKey = 'core' | 'digital' | 'industry';

const DynamicIcon: React.FC<{ name: string }> = ({ name }) => {
  const I = (Icons as any)[name];
  return I ? <I className="w-4 h-4" /> : <Icons.Code className="w-4 h-4" />;
};

const TABS: { key: TabKey; label: string }[] = [
  { key: 'core', label: 'Core Services' },
  { key: 'digital', label: 'Digital Solutions' },
  { key: 'industry', label: 'By Industry' },
];

export const TabbedSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('core');

  const tabContent: Record<TabKey, { items: { label: string; href: string; icon: React.ReactNode; desc: string }[] }> = {
    core: {
      items: servicesData.filter(s => ['ai-machine-learning', 'software-development', 'web-development', 'application-development', 'cyber-security', 'cloud-solutions', 'devops', 'data-analytics'].includes(s.id)).map((srv) => ({
        label: srv.title,
        href: `/services/${srv.id}`,
        icon: <DynamicIcon name={srv.iconName} />,
        desc: srv.shortDesc,
      })),
    },
    digital: {
      items: servicesData.filter(s => ['ui-ux-design', 'digital-marketing', 'digital-transformation', 'iot-solutions', 'blockchain'].includes(s.id)).map((srv) => ({
        label: srv.title,
        href: `/services/${srv.id}`,
        icon: <DynamicIcon name={srv.iconName} />,
        desc: srv.shortDesc,
      })),
    },
    industry: {
      items: industriesData.map((ind) => ({
        label: ind.title,
        href: `/industries/${ind.id}`,
        icon: <DynamicIcon name={ind.iconName} />,
        desc: ind.shortDesc,
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4"
          >
            {currentItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-center gap-3 py-2 text-dark/85 dark:text-white/85 hover:text-primary transition-colors cursor-pointer"
              >
                <span className="shrink-0 w-8 h-8 rounded-lg bg-light-hover dark:bg-white/5 flex items-center justify-center text-dark/70 dark:text-white/70 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="text-[13px] font-semibold tracking-wide flex-1 truncate">
                  {item.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-dark/30 dark:text-white/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <div className="mt-8 flex justify-end">
          <Link
            href={activeTab === 'industry' ? '/industries' : '/services'}
            className="flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-secondary transition-colors"
          >
            View All {TABS.find(t => t.key === activeTab)?.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
