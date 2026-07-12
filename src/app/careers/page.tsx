'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Briefcase, Award, Heart, Smile, Coffee, Users, Code, GraduationCap, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function CareersPage() {

  const benefits = [
    { icon: <Heart className="w-5 h-5 text-red-500" />, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision insurance policies for you and your family.' },
    { icon: <Smile className="w-5 h-5 text-primary" />, title: 'Work Flexibility', desc: 'Schedules combining office collaboration with structured deep-focus home days.' },
    { icon: <Award className="w-5 h-5 text-secondary" />, title: 'Education Budget', desc: 'Up to €2,000 yearly stipend for books, online courses, and international conferences.' },
    { icon: <Coffee className="w-5 h-5 text-amber-500" />, title: 'Snacks & Beverages', desc: 'A fully stocked pantry with premium coffee, energy drinks, healthy snacks, and fresh fruits.' },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, title: 'Modern Workspace', desc: 'Ergonomic sit-stand desks, noise-canceling headphones, and top-tier Apple/Dell workstation setups.' },
    { icon: <Users className="w-5 h-5 text-blue-500" />, title: 'Team Outings', desc: 'Regular offsites, hackathons, gaming sessions, and team-building dinners to relax and connect.' }
  ];

  const culturalPillars = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'High Code Standards',
      desc: 'We treat coding as an art. We prioritize readability, robust architecture, extensive testing, and thorough review processes over quick, messy patches.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      title: 'Continuous Learning',
      desc: 'Weekly internal tech talks, workshops, and open-source contributions ensure our engineers are always learning and teaching each other.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: 'Innovation Sandbox',
      desc: 'Got a cool idea? We dedicate regular sprint hours for R&D projects, allowing you to prototype new tech stack integrations and toolings.'
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
            Join Our Squad
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Careers at GangaTara
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Build type-safe software platforms and cloud-native microservices with a team dedicated to clean code and architectural integrity.
          </p>
        </div>
      </section>

      {/* 2. Life at GangaTara Section */}
      <section id="culture" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24 border-t border-light/10 dark:border-white/5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold text-primary tracking-widest mb-2 block">Our Environment</span>
          <h2 className="text-3xl font-poppins font-bold text-dark dark:text-light mb-4">Life at GangaTara</h2>
          <p className="text-sm text-dark/60 dark:text-light/60">
            We foster a collaborative, distraction-free environment that empowers engineers to focus on solving hard engineering challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalPillars.map((pillar, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass-panel border border-light/25 dark:border-white/5 flex flex-col gap-5 hover:border-primary/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-dark dark:text-light mb-2">{pillar.title}</h3>
                <p className="text-xs text-dark/65 dark:text-light/60 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Benefits & Perks Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24 border-t border-light/10 dark:border-white/5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-2 block">Perks & Reward</span>
          <h2 className="text-3xl font-poppins font-bold text-dark dark:text-light mb-4">Employee Benefits</h2>
          <p className="text-sm text-dark/60 dark:text-light/60">We support our talent with modern gear, continuing learning stipends, and healthy workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-light/25 dark:border-white/5 flex gap-4 hover:border-secondary/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center text-primary shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="text-xs font-bold text-dark dark:text-light mb-1">{b.title}</h3>
                <p className="text-[11px] text-dark/60 dark:text-light/60 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA: Open Positions */}
      <section id="positions" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24 border-t border-light/10 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Open Positions Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-600/5 border border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Full-Time Roles</span>
            <h2 className="text-2xl font-poppins font-extrabold text-dark dark:text-light mb-3">Open Positions</h2>
            <p className="text-sm text-dark/60 dark:text-light/55 leading-relaxed mb-6">
              We are actively hiring for 10 roles across Engineering, Marketing, AI & Data, QA, and more. Join our growing team and work on real enterprise products.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Full Stack Developer',
                'AI Automation Specialist',
                'Business Development Associate',
                'Project Manager',
                '+ 6 more roles'
              ].map((role, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-dark/70 dark:text-light/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {role}
                </li>
              ))}
            </ul>
            <a
              href="/careers/positions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs transition-all shadow-lg shadow-primary/20 cursor-pointer group-hover:gap-3"
            >
              View All Open Positions <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Internships Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-2 block">Student Programs</span>
            <h2 className="text-2xl font-poppins font-extrabold text-dark dark:text-light mb-3">Internship Programs</h2>
            <p className="text-sm text-dark/60 dark:text-light/55 leading-relaxed mb-6">
              10 internship roles across Engineering, Design, AI, Marketing, and HR. Paid stipend, real projects, and a path to a full-time offer.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Full Stack Developer Intern',
                'AI & Machine Learning Intern',
                'UI/UX Design Intern',
                'HR Intern',
                '+ 6 more programs'
              ].map((role, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-dark/70 dark:text-light/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {role}
                </li>
              ))}
            </ul>
            <a
              href="/careers/internships"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-600/90 text-white font-bold text-xs transition-all shadow-lg shadow-purple-500/20 cursor-pointer group-hover:gap-3"
            >
              View All Internships <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
