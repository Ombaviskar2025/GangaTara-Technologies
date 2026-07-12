'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, Mail, Briefcase, Award, Heart, Smile, X, Coffee, Users, Code, GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { jobsData, JobItem } from '@/data/companyData';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    github: '',
    coverLetter: ''
  });

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

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.email) return;

    setApplySuccess(true);
    setApplyForm({ name: '', email: '', github: '', coverLetter: '' });
    setTimeout(() => {
      setApplySuccess(false);
      setSelectedJob(null);
    }, 4000);
  };

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

      {/* 4. Job Listings Section */}
      <section id="positions" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24 border-t border-light/10 dark:border-white/5 flex flex-col gap-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-bold text-primary tracking-widest mb-2 block">Available Opportunities</span>
          <h2 className="text-3xl font-poppins font-bold text-dark dark:text-light mb-4">Open Positions</h2>
          <p className="text-sm text-dark/60 dark:text-light/60">Browse active opportunities below. Click to read specifications and apply.</p>
        </div>

        {jobsData.map((job) => (
          <div
            key={job.id}
            className="p-6 rounded-2xl glass-card border border-light/20 dark:border-white/5 hover:border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
          >
            <div>
              <h3 className="text-sm font-bold text-dark dark:text-light mb-1.5">{job.title}</h3>
              <div className="flex flex-wrap gap-2 text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">
                <span>{job.department}</span>
                <span>•</span>
                <span className="text-primary">{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedJob(job)}
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              Apply / Specifications
            </button>
          </div>
        ))}
      </section>

      {/* 5. Internships Section */}
      <section id="internships" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24 border-t border-light/10 dark:border-white/5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold text-purple-500 tracking-widest mb-2 block">For Students & Graduates</span>
          <h2 className="text-3xl font-poppins font-bold text-dark dark:text-light mb-4">Internship Programs</h2>
          <p className="text-sm text-dark/60 dark:text-light/60">
            Kickstart your software engineering career with our structured mentorship programs. We pair you with senior engineers to work on real, production systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl glass-panel border border-light/25 dark:border-white/5 flex gap-5 hover:border-primary/25 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark dark:text-light mb-2">1-on-1 Mentorship</h3>
              <p className="text-xs text-dark/65 dark:text-light/60 leading-relaxed">
                Work directly with a designated Senior Mentor. You will learn modern frontend/backend best practices, code review standards, and scalable system design.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl glass-panel border border-light/25 dark:border-white/5 flex gap-5 hover:border-secondary/25 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-light/60 dark:bg-white/5 border border-light/10 dark:border-white/5 flex items-center justify-center text-secondary shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark dark:text-light mb-2">Real Production Code</h3>
              <p className="text-xs text-dark/65 dark:text-light/60 leading-relaxed">
                We do not do throwaway sandbox projects. You will build and ship features that actively run on GangaTara platforms, gaining invaluable real-world experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xs text-dark/50 dark:text-light/50 mb-4">Looking for an internship opportunity in Madhya Pradesh or Remote?</p>
          <a
            href="mailto:careers@gangatara.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" /> Send your Resume to careers@gangatara.com
          </a>
        </div>
      </section>

      {/* 6. Application / Job Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 bg-dark/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-light dark:bg-dark border border-light/20 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 text-dark/60 dark:text-light/65 hover:bg-light-hover dark:hover:bg-white/5 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[9px] uppercase font-bold text-primary tracking-widest mb-1 block">{selectedJob.department}</span>
              <h3 className="text-xl font-poppins font-bold text-dark dark:text-light mb-4">{selectedJob.title}</h3>

              <div className="flex gap-4 text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider border-b border-light/10 dark:border-white/5 pb-4 mb-6">
                <span>Location: {selectedJob.location}</span>
                <span>•</span>
                <span>Salary/Level: {selectedJob.experience}</span>
              </div>

              {/* Specs */}
              <div className="flex flex-col gap-6 mb-8 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-dark dark:text-light mb-2">Description</h4>
                  <p className="text-dark/70 dark:text-light/75 leading-relaxed">{selectedJob.description}</p>
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-light mb-2">Requirements</h4>
                  <ul className="list-disc list-inside flex flex-col gap-1.5 text-dark/70 dark:text-light/75 pl-2">
                    {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleApplySubmit} className="border-t border-light/10 dark:border-white/5 pt-6 flex flex-col gap-4">
                <h4 className="text-xs font-bold text-dark dark:text-light uppercase tracking-wider mb-2">Application Form</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={applyForm.name}
                    onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                    placeholder="Your Name *"
                    className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    required
                    value={applyForm.email}
                    onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                    placeholder="Your Email *"
                    className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <input
                  type="url"
                  value={applyForm.github}
                  onChange={(e) => setApplyForm({ ...applyForm, github: e.target.value })}
                  placeholder="Portfolio or GitHub Link (Optional)"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary"
                />

                <textarea
                  rows={3}
                  value={applyForm.coverLetter}
                  onChange={(e) => setApplyForm({ ...applyForm, coverLetter: e.target.value })}
                  placeholder="Why would you like to join our engineering practice?"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary resize-none"
                />

                <button
                  type="submit"
                  className="py-3 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Submit Application
                </button>

                {applySuccess && (
                  <div className="p-3 bg-success/15 border border-success/20 rounded-xl text-success text-xs font-semibold text-center flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 animate-pulse" /> Application successfully submitted. We will contact you.
                  </div>
                )}
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
