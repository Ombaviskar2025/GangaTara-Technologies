'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import { servicesData } from '@/data/companyData';

// Dynamic Icon Component
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Code className={className} />;
  return <IconComponent className={className} />;
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background visual indicators */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Our Enterprise IT Services
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            We deliver state-of-the-art software systems, cloud migrations, cognitive models, and cybersecurity protocols to drive productivity and scale.
          </p>
        </div>

        {/* Grid of 12 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass-card border border-light/20 dark:border-white/5 flex flex-col justify-between hover:border-primary/30 dark:hover:border-primary/20 relative overflow-hidden transition-all duration-300">
                {/* Inner Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white mb-6 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                    <DynamicIcon name={srv.iconName} className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-dark dark:text-light mb-3 group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Learn More Button */}
                <Link
                  href={`/services/${srv.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary transition-colors mt-auto w-fit"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
