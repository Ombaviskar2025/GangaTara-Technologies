'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Users, Scale, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Decades of Experience',
      description: 'Over 20 years of designing and maintaining high-performance architectures, databases, and microservices for multinational companies.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      title: 'Continuous Innovation',
      description: 'We integrate emerging tools (like LLM APIs, semantic caches, private blockchains, and edge devices) safely into standard operations.'
    },
    {
      icon: <Users className="w-6 h-6 text-success" />,
      title: 'Rigorous Quality Assurance',
      description: 'We run end-to-end integration, load, and automated vulnerability pen-tests on every build to guarantee 99.99% system availability.'
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: '24/7/365 Support',
      description: 'Our global site reliability teams monitor server nodes and application latency round-the-clock, resolving bugs before user disruption.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Zero-Trust Security',
      description: 'All system endpoints are hardened against external intrusion, complying fully with ISO 27001, GDPR, HIPAA, and SOC 2 requirements.'
    },
    {
      icon: <Scale className="w-6 h-6 text-yellow-500" />,
      title: 'Scalability-First Architecture',
      description: 'We build systems using stateless containers, serverless queries, and distributed caches that grow dynamically with transactions.'
    }
  ];

  return (
    <section className="py-24 bg-light/50 dark:bg-dark/40 relative overflow-hidden border-y border-light/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Panel - Sticky Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-6 leading-tight">
              Why Global Enterprises Choose GangaTara
            </h2>
            <p className="text-sm text-dark/70 dark:text-light/60 leading-relaxed mb-8">
              We combine enterprise-level stability with fast-scaling startup innovation. Our engineering workflows ensure your digital products are secure, accessible, and fast.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 border border-primary/20 flex items-center gap-4">
              <div className="text-3xl font-poppins font-black text-primary">99.99%</div>
              <div className="text-xs text-dark/80 dark:text-light/80 font-semibold leading-snug">Average system availability and uptime delivered across our client fleet.</div>
            </div>
          </div>

          {/* Right Panel - Timeline Value Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex gap-5 group"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-dark dark:text-light mb-2 group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
