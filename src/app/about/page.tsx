'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Eye, Trophy, Award } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const leadership = [
    { name: 'Dr. Evelyn Brand', role: 'Chief Executive Officer', bio: 'Former Senior Partner at McKinsey with 20+ years steering IT advisory fleets.' },
    { name: 'Marcus Vance', role: 'VP of Engineering', bio: 'Former Principal Infrastructure Architect at AWS. Guru of distributed serverless networks.' }
  ];

  const awards = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      title: 'Top Enterprise Solutions Partner',
      year: '2025',
      desc: 'Awarded for outstanding enterprise software delivery and successful cloud migrations in Central India.'
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'AWS Architecting Excellence',
      year: '2024',
      desc: 'Recognized for building highly secure, serverless transaction architectures with zero downtime.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: 'Clutch Frontend Leader',
      year: '2025',
      desc: 'Global leader recognition in high-performance React and Next.js custom applications engineering.'
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section id="about" className="relative py-20 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            About GangaTara
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight"
          >
            Engineering Technological Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed"
          >
            We help global enterprises replace slow, legacy software infrastructures with modern cloud architectures, secure identity layers, and intelligent prediction systems.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl glass-panel border border-light/25 dark:border-white/5 flex gap-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-light mb-3">Our Core Vision</h3>
            <p className="text-xs sm:text-sm text-dark/60 dark:text-light/60 leading-relaxed">
              To be the world's most trusted partner for enterprise digital transformation, building reliable, secure, and clean codebases that protect corporate equity and drive efficiency.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl glass-panel border border-light/25 dark:border-white/5 flex gap-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-light mb-3">Our Daily Mission</h3>
            <p className="text-xs sm:text-sm text-dark/60 dark:text-light/60 leading-relaxed">
              To engineer tailored software systems that solve actual business bottlenecks, delivering high throughput, cost optimization, compliance readiness, and zero unplanned downtime.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. Leadership Team */}
      <section id="leadership" className="py-20 bg-light/50 dark:bg-dark/40 border-y border-light/10 dark:border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Board of Advisors
            </span>
            <h2 className="text-3xl font-poppins font-extrabold text-dark dark:text-light">
              Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((lead, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass-panel border border-light/20 dark:border-white/5 text-center group cursor-pointer hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Interactive premium avatar container */}
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  {/* Decorative dashed outer rotation ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 group-hover:rotate-90 transition-transform duration-[2000ms]" />
                  
                  {/* Glowing core background */}
                  <div className="absolute w-20 h-20 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Avatar circle */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-primary via-blue-500 to-secondary flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-500 border border-white/20">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-base font-bold text-dark dark:text-light mb-2 group-hover:text-primary transition-colors">{lead.name}</h3>
                
                {/* Pill role badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] text-primary uppercase font-black tracking-widest mb-4">
                  {lead.role}
                </span>

                <p className="text-xs text-dark/65 dark:text-light/60 leading-relaxed max-w-xs mx-auto">{lead.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Awards & Recognition */}
      <section id="awards" className="py-20 max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-4 inline-block">
            Achievements
          </span>
          <h2 className="text-3xl font-poppins font-extrabold text-dark dark:text-light">
            Awards & Recognition
          </h2>
          <p className="text-sm text-dark/60 dark:text-light/60 mt-4">
            Proudly recognized by global clients, directories, and technology partners for our strict adherence to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-light/25 dark:border-white/5 flex flex-col gap-5 hover:border-secondary/25 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-sm font-bold text-dark/20 dark:text-white/10 font-poppins">
                {award.year}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center shrink-0">
                {award.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-dark dark:text-light mb-2">{award.title}</h3>
                <p className="text-xs text-dark/65 dark:text-light/60 leading-relaxed">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
