'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Search, Code, Cpu, Cloud, ShieldAlert } from 'lucide-react';
import * as Icons from 'lucide-react';
import { servicesData } from '@/data/companyData';
import { IMAGES } from '@/data/images';

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Code className={className} />;
  return <IconComponent className={className} />;
};

const getServiceImage = (id: string) => {
  const service = (IMAGES.services as any)[id];
  return service ? service.hero : IMAGES.services['digital-transformation'].hero;
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(srv => 
    srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Title Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Services Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Our Enterprise IT Offerings
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We provide full-lifecycle software consulting, private and public cloud engineering, security compliance architectures, and cognitive intelligence solutions.
          </p>

          {/* Search bar input */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search services (e.g. Cloud, AI, Security)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-dark/15 dark:border-white/10 rounded-2xl px-5 py-3 pl-12 text-xs text-dark dark:text-white placeholder-dark/30 dark:placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/45 dark:text-white/30 w-4 h-4" />
          </div>
        </div>
      </section>

      {/* 2. Grid Display */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv, index) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col overflow-hidden transition-all duration-300">
                  {/* Card Cover Image */}
                  <div className="w-full h-44 relative overflow-hidden border-b border-light/10 dark:border-white/5">
                    <img
                      src={getServiceImage(srv.id)}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md">
                      <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base font-bold text-dark dark:text-light mb-3 group-hover:text-primary transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed mb-6">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <Link
                      href={`/services/${srv.id}`}
                      className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-colors mt-auto w-fit"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-xs text-dark/45 dark:text-light/40 font-semibold">
            No services match your search query. Try typing another term.
          </div>
        )}
      </section>

    </div>
  );
}
