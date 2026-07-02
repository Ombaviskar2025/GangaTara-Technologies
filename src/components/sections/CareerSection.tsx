'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Sparkles, Smile, ShieldAlert } from 'lucide-react';
import { jobsData } from '@/data/companyData';

export const CareerSection: React.FC = () => {
  const perks = [
    { icon: <Smile className="w-5 h-5 text-primary" />, title: 'Premium Culture', desc: 'Collaborative engineering environments built on respect, agile growth, and transparency.' },
    { icon: <Sparkles className="w-5 h-5 text-secondary" />, title: 'Professional Growth', desc: 'Up to €2,000 annual training budgets for certifications, textbooks, and developer conventions.' },
    { icon: <Briefcase className="w-5 h-5 text-success" />, title: 'Modern Work Setup', desc: 'Flexible hybrid and remote options backed by local home-office equipment stipends.' }
  ];

  return (
    <section className="py-24 bg-light/50 dark:bg-dark/40 relative overflow-hidden border-t border-light/10 dark:border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel - Employer value proposition */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
              Careers at GangaTara
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-6 leading-tight">
              Build Breathtaking Technology With Us
            </h2>
            <p className="text-sm text-dark/70 dark:text-light/60 leading-relaxed mb-8">
              We are expanding our global engineering squads. If you are passionate about cloud infrastructure, type-safe API patterns, zero-trust cybersecurity, or custom vector search models, we would love to meet you.
            </p>

            <div className="flex flex-col gap-6">
              {perks.map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-light/60 dark:bg-white/5 flex items-center justify-center shrink-0 border border-light/10 dark:border-white/5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-dark dark:text-light mb-1">{p.title}</h4>
                    <p className="text-[11px] text-dark/60 dark:text-light/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel - Job lists */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-dark dark:text-light">Current Openings</h3>
              <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">{jobsData.length} active roles</span>
            </div>

            {jobsData.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
              >
                <div>
                  <h4 className="text-sm font-bold text-dark dark:text-light mb-1.5">{job.title}</h4>
                  <div className="flex flex-wrap gap-2 text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="text-primary">{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <Link
                  href="/careers"
                  className="px-5 py-2.5 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}

            <Link
              href="/careers"
              className="text-xs font-bold text-primary hover:text-secondary flex items-center justify-center gap-1.5 self-center mt-2 transition-colors"
            >
              View Internships and Benefits <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
