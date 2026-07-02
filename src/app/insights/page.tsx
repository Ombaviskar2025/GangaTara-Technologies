'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Download, CheckCircle, Newspaper } from 'lucide-react';

export default function InsightsPage() {
  const whitepapers = [
    { id: 'wp1', title: '2026 Enterprise Cloud Orchestration Standards', size: '2.4 MB', reads: '1.2k downloads' },
    { id: 'wp2', title: 'Data Governance & Vector Cache Security Protocols', size: '1.8 MB', reads: '950 downloads' }
  ];

  const news = [
    { title: 'GangaTara Technologies named AWS Partner of the Year', date: 'April 20, 2026', desc: 'Recognized for helping 50+ European enterprises migrate core ledger layers to high-availability DynamoDB clusters.' },
    { title: 'AI research center opens in Tokyo', date: 'January 14, 2026', desc: 'Our new research lab coordinates LLM fine-tuning and semantic caching optimizations for APAC retail portfolios.' }
  ];

  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloaded(id);
    setTimeout(() => setDownloaded(null), 3000);
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Insights Practice
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Whitepapers & Press Releases
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Download our latest research papers or read about corporate announcements and technological audits.
          </p>
        </div>
      </section>

      {/* 2. Whitepapers Download section */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Whitepapers List */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h2 className="text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2 mb-2"><FileText className="w-5 h-5 text-primary" /> Downloadable Whitepapers</h2>
          
          {whitepapers.map((wp) => (
            <div
              key={wp.id}
              className="p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 hover:border-primary/20 flex items-center justify-between gap-4 transition-all duration-300"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-dark dark:text-light mb-1.5 leading-snug">{wp.title}</h4>
                <div className="flex gap-3 text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">
                  <span>PDF Format</span>
                  <span>•</span>
                  <span>Size: {wp.size}</span>
                  <span>•</span>
                  <span>{wp.reads}</span>
                </div>
              </div>

              <button
                onClick={() => handleDownload(wp.id)}
                className="p-3 bg-primary hover:bg-secondary text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                {downloaded === wp.id ? <CheckCircle className="w-4 h-4 animate-bounce" /> : <Download className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>

        {/* Corporate Press Releases */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h2 className="text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2 mb-2"><Newspaper className="w-5 h-5 text-secondary" /> Press Releases</h2>
          
          {news.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-light/25 dark:border-white/5 flex flex-col gap-3">
              <span className="text-[9px] uppercase font-bold text-primary tracking-widest">{item.date}</span>
              <h3 className="text-xs sm:text-sm font-bold text-dark dark:text-light">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-dark/60 dark:text-light/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
