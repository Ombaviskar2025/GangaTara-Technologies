'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Database, ArrowRight, Server } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 'core-ledger',
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: 'GangaTara Core Ledger',
      desc: 'A private consortium-based blockchain and high-throughput transactional engine designed to settle millions of records with 100% auditable history.',
      specs: ['Throughput: >10k TPS', 'Encryption: AES-256-GCM', 'Compliance: ISO 27001 ready']
    },
    {
      id: 'sentinel-threat',
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      title: 'Sentinel Threat Suite',
      desc: 'An automated agentic cybersecurity module that continuously monitors internal network nodes and isolates malicious activities in seconds.',
      specs: ['Reaction Time: <500ms', 'Core Engine: Neural Network', 'Integration: Okta / AD']
    },
    {
      id: 'omnidata-optimizer',
      icon: <Database className="w-8 h-8 text-success" />,
      title: 'OmniData Optimizer',
      desc: 'A semantic caching layer and automated data pipeline engine that reduces database query latency by caching repetitive query results.',
      specs: ['Latency Reduction: up to 85%', 'Supported: Snowflake, PostgreSQL', 'Deploy: Kubernetes / Serverless']
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Software Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Proprietary Enterprise Software
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Accelerate your operations using our pre-engineered transactional engines, automated security auditors, and database scaling layers.
          </p>
        </div>
      </section>

      {/* 2. List */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12">
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="p-8 rounded-3xl glass-panel border border-light/20 dark:border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark dark:text-light mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-dark/65 dark:text-light/65 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.specs.map((sp, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer self-stretch lg:self-auto justify-center text-center"
            >
              Request Product Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
