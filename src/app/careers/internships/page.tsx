'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, MapPin, Clock, ChevronRight, Search, X, CheckCircle,
  Users, Code, Megaphone, Bot, Palette, FolderKanban,
  Star, ArrowLeft, Upload, Phone, Link2, Mail, User, BookOpen, BadgeCheck, Banknote
} from 'lucide-react';
import { internshipsData, JobItem } from '@/data/companyData';

const DEPT_ICONS: Record<string, React.ReactNode> = {
  'Engineering': <Code className="w-4 h-4" />,
  'Sales & Growth': <Megaphone className="w-4 h-4" />,
  'Marketing': <Megaphone className="w-4 h-4" />,
  'AI & Data': <Bot className="w-4 h-4" />,
  'Design': <Palette className="w-4 h-4" />,
  'Human Resources': <Users className="w-4 h-4" />,
};

const DEPT_COLORS: Record<string, string> = {
  'Engineering': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Sales & Growth': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Marketing': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'AI & Data': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Design': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Human Resources': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const ALL_DEPTS = ['All', ...Array.from(new Set(internshipsData.map(j => j.department)))];

type FormState = {
  name: string;
  email: string;
  phone: string;
  college: string;
  yearOfStudy: string;
  linkedin: string;
  coverLetter: string;
  resume: string;
};

const EMPTY_FORM: FormState = {
  name: '', email: '', phone: '', college: '', yearOfStudy: '', linkedin: '', coverLetter: '', resume: ''
};

export default function InternshipsPage() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const filtered = useMemo(() => {
    return internshipsData.filter(j => {
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
    if (!form.name || !form.email || !form.phone || !form.college) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY_FORM);
      setFileName('');
    }, 4000);
  };

  const deptColor = (dept: string) => DEPT_COLORS[dept] ?? 'bg-purple-500/10 text-purple-400 border-purple-500/20';
  const deptIcon = (dept: string) => DEPT_ICONS[dept] ?? <GraduationCap className="w-4 h-4" />;

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <GraduationCap className="w-3.5 h-3.5" /> Internship Programs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-dark dark:text-light mb-5 tracking-tight"
          >
            Kickstart Your Career <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">at GangaTara</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-dark/65 dark:text-light/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Real projects. Real mentorship. Real impact. Our internship programs are designed to turn talented students into industry-ready professionals.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              { icon: <BadgeCheck className="w-4 h-4" />, label: 'Internship Certificate' },
              { icon: <Banknote className="w-4 h-4" />, label: 'Paid Stipend' },
              { icon: <BookOpen className="w-4 h-4" />, label: 'PPO Opportunity' },
              { icon: <Users className="w-4 h-4" />, label: '1-on-1 Mentorship' },
            ].map((h, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
                {h.icon} {h.label}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { value: `${internshipsData.length}`, label: 'Open Internships' },
              { value: '3–6 Months', label: 'Duration' },
              { value: 'Hybrid', label: 'Work Model' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-poppins font-extrabold text-purple-400">{s.value}</p>
                <p className="text-xs text-dark/50 dark:text-light/50 uppercase tracking-wider font-bold">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t border-light/10 dark:border-white/5">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40 dark:text-white/30" />
            <input
              type="text"
              placeholder="Search internships..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-light/50 dark:bg-white/5 border border-light/20 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_DEPTS.map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${filter === d
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-light/50 dark:bg-white/5 text-dark/60 dark:text-white/50 hover:bg-purple-500/10 hover:text-purple-400 border border-light/20 dark:border-white/10'
                  }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-dark/40 dark:text-white/30 text-sm">
            No internships found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                onClick={() => { setSelectedJob(job); setSubmitted(false); setForm(EMPTY_FORM); setFileName(''); }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl border ${deptColor(job.department)}`}>
                    {deptIcon(job.department)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/40 dark:text-white/30">{job.type}</span>
                    {job.duration && (
                      <span className="text-[10px] font-bold text-purple-400/80">{job.duration}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-dark dark:text-light mb-1 group-hover:text-purple-400 transition-colors">{job.title}</h3>
                <p className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border mb-4 ${deptColor(job.department)}`}>
                  {job.department}
                </p>

                <div className="flex flex-wrap gap-3 text-[11px] text-dark/50 dark:text-light/50 mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.experience}</span>
                </div>

                {job.stipend && (
                  <div className="flex items-center gap-1.5 mb-4 text-xs font-bold text-emerald-400">
                    <Banknote className="w-3.5 h-3.5" /> Stipend: {job.stipend}
                  </div>
                )}

                <p className="text-xs text-dark/60 dark:text-light/55 leading-relaxed line-clamp-2 mb-5">{job.description}</p>

                <div className="flex items-center justify-end">
                  <span className="text-[11px] font-bold text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    View & Apply <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Internship Detail + Application Panel */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-stretch">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            />

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
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-0.5">{selectedJob.department}</p>
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
                    { icon: <Clock className="w-3.5 h-3.5" />, label: selectedJob.duration ?? selectedJob.experience },
                    { icon: <GraduationCap className="w-3.5 h-3.5" />, label: selectedJob.type },
                    ...(selectedJob.stipend ? [{ icon: <Banknote className="w-3.5 h-3.5" />, label: selectedJob.stipend }] : []),
                  ].map((m, i) => (
                    <span key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[11px] font-medium ${i === 3 ? 'text-emerald-400' : 'text-white/60'}`}>
                      {m.icon} {m.label}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">About the Internship</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Responsibilities */}
                {selectedJob.responsibilities && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">What You&apos;ll Do</h3>
                    <ul className="flex flex-col gap-2">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">What We&apos;re Looking For</h3>
                  <ul className="flex flex-col gap-2">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">What You&apos;ll Get</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJob.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 text-xs text-white/65">
                        <Star className="w-3 h-3 fill-purple-400 text-purple-400 shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Form */}
                <div className="border-t border-white/8 pt-6">
                  <h3 className="text-sm font-bold text-white mb-1">Apply for this Internship</h3>
                  <p className="text-xs text-white/40 mb-6">Submit your application below. Our HR team will review and contact you within 3–5 working days.</p>

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
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
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
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
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
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          required
                          type="text"
                          placeholder="College / University *"
                          value={form.college}
                          onChange={e => setForm(f => ({ ...f, college: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        value={form.yearOfStudy}
                        onChange={e => setForm(f => ({ ...f, yearOfStudy: e.target.value }))}
                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#1A1A1A]">Year of Study</option>
                        <option value="1st Year" className="bg-[#1A1A1A]">1st Year</option>
                        <option value="2nd Year" className="bg-[#1A1A1A]">2nd Year</option>
                        <option value="3rd Year" className="bg-[#1A1A1A]">3rd Year</option>
                        <option value="4th Year" className="bg-[#1A1A1A]">4th Year</option>
                        <option value="Completed" className="bg-[#1A1A1A]">Recently Graduated</option>
                      </select>
                      <div className="relative">
                        <Link2 className="absolute left-3 top-3.5 w-3.5 h-3.5 text-white/30" />
                        <input
                          type="url"
                          placeholder="LinkedIn / Portfolio URL"
                          value={form.linkedin}
                          onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                          className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-dashed border-white/15 hover:border-purple-500/50 cursor-pointer transition-colors group">
                      <Upload className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" />
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
                      placeholder="Why do you want to intern at GangaTara? What excites you about this role? Share your goals..."
                      value={form.coverLetter}
                      onChange={e => setForm(f => ({ ...f, coverLetter: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-600/90 hover:to-pink-600/90 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
                    >
                      Submit Application →
                    </button>

                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 p-3.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-300 text-sm font-semibold"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Application submitted! Our HR team will contact you within 3–5 working days.
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
