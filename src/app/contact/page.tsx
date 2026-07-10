'use client';

import React, { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'cloud-solutions',
    message: '',
    summary: '',
    advancePayment: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'cloud-solutions',
      message: '',
      summary: '',
      advancePayment: false
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Contact Channels
          </span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold text-dark dark:text-light mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Fill out our formal inquiry form below to get in touch with our team.
          </p>
        </div>
      </section>

      {/* 2. Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        
        {/* Form Intake */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-light/25 dark:border-white/5 shadow-2xl bg-light/70 dark:bg-dark/70">
          <h3 className="text-base font-bold text-dark dark:text-light mb-6">Business Inquiry Form</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name *"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Business Email *"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Callback Number"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                />
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                />
              </div>

              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your integration requirements..."
                className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20 resize-none"
              />

              <div className="flex flex-col gap-1.5">
                <textarea
                  rows={2}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Summarize Project / Requirements (Short 1-sentence summary)..."
                  className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20 resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={formData.advancePayment}
                  onChange={(e) => setFormData({ ...formData, advancePayment: e.target.checked })}
                  className="w-4 h-4 rounded border-dark/15 dark:border-white/10 text-primary focus:ring-primary shrink-0 mt-0.5"
                />
                <span className="text-[11px] text-dark/60 dark:text-light/50 leading-snug">
                  I agree to pay <strong className="text-dark dark:text-light">50% in advance</strong> to start the project.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" /> Submit Request
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-success/15 border border-success/20 text-success text-xs font-semibold text-center flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4" /> Request received. Our relations architect will contact you.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
  );
}
