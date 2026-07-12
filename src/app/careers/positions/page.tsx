'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, ChevronRight, Search, X, CheckCircle,
  Users, Code, Megaphone, Bot, HeadphonesIcon, ShieldCheck, FolderKanban,
  Star, ArrowLeft, Upload, Phone, Link2, Mail, User
} from 'lucide-react';
import { jobsData, JobItem } from '@/data/companyData';

const DEPT_ICONS: Record<string, React.ReactNode> = {
  'Engineering': <Code className="w-4 h-4" />,
  'Sales & Growth': <Megaphone className="w-4 h-4" />,
  'Marketing': <Megaphone className="w-4 h-4" />,
  'AI & Data': <Bot className="w-4 h-4" />,
  'Client Success': <HeadphonesIcon className="w-4 h-4" />,
  'Quality Engineering': <ShieldCheck className="w-4 h-4" />,
  'Project Management Office': <FolderKanban className="w-4 h-4" />,
};

const DEPT_COLORS: Record<string, string> = {
  'Engineering': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Sales & Growth': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Marketing': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'AI & Data': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Client Success': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Quality Engineering': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Project Management Office': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const ALL_DEPTS = ['All', ...Array.from(new Set(jobsData.map(j => j.department)))];

type FormState = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  coverLetter: string;
  resume: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', linkedin: '', coverLetter: '', resume: '' };

export default function OpenPositionsPage() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const filtered = useMemo(() => {
    return jobsData.filter(j => {
      const matchDept = filter === 'All' || j.department === filter;
      const matchSearch = search === '' ||
        j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.department.toLowerCase().includes(search.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [filter, search]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setForm(f => ({ ...f, resume: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY_FORM);
      setFileName('');
    }, 4000);
  };

  const deptColor = (dept: string) => DEPT_COLORS[dept] ?? 'bg-primary/10 text-primary border-primary/20';
  const deptIcon = (dept: string) => DEPT_ICONS[dept] ?? <Briefcase className="w-4 h-4" />;

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Briefcase className="w-3.5 h-3.5" /> Open Positions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-dark dark:text-light mb-5 tracking-tight"
          >
            Build the Future <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">with GangaTara</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-dark/65 dark:text-light/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Join a team of passionate engineers, designers, and business leaders building world-class enterprise solutions from Indore, India.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { value: `${jobsData.length}`, label: 'Open Roles' },
              { value: '100%', label: 'Growth-Focused' },
              { value: 'Hybrid', label: 'Work Model' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-poppins font-extrabold text-primary">{s.value}</p>
                <p className="text-xs text-dark/50 dark:text-light/50 uppercase tracking-wider font-bold">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t border-light/10 dark:border-white/5">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40 dark:text-white/30" />
            <input
              type="text"
              placeholder="Search positions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-light/50 dark:bg-white/5 border border-light/20 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          {/* Dept Filter */}
          <div className="flex flex-wrap gap-2">
            {ALL_DEPTS.map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${filter === d
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-light/50 dark:bg-white/5 text-dark/60 dark:text-white/50 hover:bg-primary/10 hover:text-primary border border-light/20 dark:border-white/10'
                  }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-dark/40 dark:text-white/30 text-sm">
            No positions found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                onClick={() => { setSelectedJob(job); setSubmitted(false); setForm(EMPTY_FORM); setFileName(''); }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl border ${deptColor(job.department)}`}>
                    {deptIcon(job.department)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-dark/40 dark:text-white/30 mt-1">{job.type}</span>
                </div>

                <h3 className="text-base font-bold text-dark dark:text-light mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                <p className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border mb-4 ${deptColor(job.department)}`}>
                  {job.department}
                </p>

                <div className="flex flex-wrap gap-3 text-[11px] text-dark/50 dark:text-light/50 mb-5">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.experience}</span>
                </div>

                <p className="text-xs text-dark/60 dark:text-light/55 leading-relaxed line-clamp-2 mb-5">{job.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <span className="text-[11px] font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View & Apply <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Job Detail + Application Panel */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-stretch">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative ml-auto w-full max-w-2xl h-full bg-[#111111] border-l border-white/8 overflow-y-auto flex flex-col"
            >
              {/* Panel Header */}
              <div className="sticky top-0 z-10 bg-[#111111]/95 backdrop-blur-sm border-b border-white/6 px-6 py-4 flex items-center gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">{selectedJob.department}</p>
                  <h2 className="text-base font-bold text-white truncate">{selectedJob.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 px-6 py-6 flex flex-col gap-8">
                {/* Meta */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <MapPin className="w-3.5 h-3.5" />, label: selectedJob.location },
                    { icon: <Clock className="w-3.5 h-3.5" />, label: selectedJob.experience },
                    { icon: <Briefcase className="w-3.5 h-3.5" />, label: selectedJob.type },
                  ].map((m, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[11px] text-white/60 font-medium">
                      {m.icon} {m.label}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">About the Role</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Responsibilities */}
                {selectedJob.responsibilities && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Key Responsibilities</h3>
                    <ul className="flex flex-col gap-2">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Requirements</h3>
                  <ul className="flex flex-col gap-2">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">What We Offer</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJob.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/5 text-xs text-white/65">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Form */}
                <div className="border-t border-white/8 pt-6">
                  <h3 className="text-sm font-bold text-white mb-1">Apply for this Position</h3>
                  <p className="text-xs text-white/40 mb-6">Fill in your details below. We&apos;ll review your application and get back to you within 3–5 business days.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          required
                          type="text"
                          placeholder="Full Name *"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          required
                          type="email"
                          placeholder="Email Address *"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          required
                          type="tel"
                          placeholder="Phone Number *"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Link2 className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          type="url"
                          placeholder="LinkedIn / Portfolio URL"
                          value={form.linkedin}
                          onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-dashed border-white/15 hover:border-primary/50 cursor-pointer transition-colors group">
                      <Upload className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/60 group-hover:text-white/80 transition-colors">
                          {fileName || 'Upload Resume / CV'}
                        </p>
                        <p className="text-[10px] text-white/30">PDF, DOC, DOCX — Max 5MB</p>
                      </div>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Cover Letter — Tell us why you want to join GangaTara and what makes you the right fit..."
                      value={form.coverLetter}
                      onChange={e => setForm(f => ({ ...f, coverLetter: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="py-3.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer"
                    >
                      Submit Application →
                    </button>

                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-semibold"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Application submitted! We&apos;ll be in touch within 3–5 business days.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
