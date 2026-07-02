'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart, Landmark, ArrowRight, Eye, Milestone, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const leadership = [
    { name: 'Dr. Evelyn Brand', role: 'Chief Executive Officer', bio: 'Former Senior Partner at McKinsey with 20+ years steering IT advisory fleets.' },
    { name: 'Marcus Vance', role: 'VP of Engineering', bio: 'Former Principal Infrastructure Architect at AWS. Guru of distributed serverless networks.' },
    { name: 'Akiro Tanaka', role: 'Head of AI Research', bio: 'Ph.D. in Deep Learning from Stanford. Innovates semantic caches and LLM alignment.' }
  ];

  const milestones = [
    { year: '2006', title: 'Founding in Munich', desc: 'Started as a small database performance advisory team.' },
    { year: '2012', title: 'European Expansion', desc: 'Opened hubs in London and Zurich to support global financial clients.' },
    { year: '2018', title: 'APAC Integration', desc: 'Launched our Bangalore Tech Center and Tokyo AI Lab.' },
    { year: '2024', title: 'Enterprise Cloud Era', desc: 'Reached 1,000+ employees and achieved AWS Advanced Partner status.' }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-20 overflow-hidden">
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
      <section className="py-20 bg-light/50 dark:bg-dark/40 border-y border-light/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Board of Advisors
            </span>
            <h2 className="text-3xl font-poppins font-extrabold text-dark dark:text-light">
              Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-light/20 dark:border-white/5 text-center group cursor-pointer"
              >
                {/* Avatar circle placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-6 shadow-md shadow-primary/15">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-sm font-bold text-dark dark:text-light mb-1 group-hover:text-primary transition-colors">{lead.name}</h3>
                <p className="text-[10px] text-primary uppercase font-bold tracking-wider mb-4">{lead.role}</p>
                <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed">{lead.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. History Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
            Milestones
          </span>
          <h2 className="text-3xl font-poppins font-extrabold text-dark dark:text-light">
            Our Journey So Far
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((ml, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 relative"
            >
              <div className="text-3xl font-poppins font-black text-primary/20 mb-4">{ml.year}</div>
              <h4 className="text-sm font-bold text-dark dark:text-light mb-2">{ml.title}</h4>
              <p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed">{ml.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CSR & Social Responsibility */}
      <section className="py-20 bg-light/50 dark:bg-dark/40 border-t border-light/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              CSR Initiatives
            </span>
            <h2 className="text-3xl font-poppins font-extrabold text-dark dark:text-light mb-6">
              Green Computing & Tech Inclusivity
            </h2>
            <p className="text-sm text-dark/70 dark:text-light/65 leading-relaxed mb-6">
              We pledge to build code architectures that minimize server cluster compute usage and utilize data-center cooling offsets. In addition, we actively sponsor computing scholarships for underprivileged engineering students globally to bridge the opportunity divide.
            </p>
            
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-success/15 flex items-center justify-center text-success"><Heart className="w-5 h-5" /></div>
              <span className="text-xs font-semibold text-dark/85 dark:text-light/85">Commitment to 100% net-zero carbon operations offset by 2030.</span>
            </div>
          </div>
          
          <div className="lg:col-span-6 h-64 rounded-3xl border border-light/20 dark:border-white/5 bg-slate-900/5 dark:bg-slate-900/20 flex items-center justify-center p-8">
            <Landmark className="w-20 h-20 text-primary dark:text-secondary opacity-30" />
          </div>
        </div>
      </section>

    </div>
  );
}
