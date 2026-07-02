'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle, Mail, Phone, MapPin, Send } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function ContactPage() {
  const faqs: FaqItem[] = [
    {
      q: 'Do you offer formal Service Level Agreements (SLAs)?',
      a: 'Yes. We sign comprehensive corporate SLAs guaranteeing up to 99.99% system availability and detailing 24/7/365 bug-resolution reaction timelines.'
    },
    {
      q: 'Who owns the intellectual property and code repository?',
      a: 'Once project deliverables are signed off and settled, full repository ownership, patents, and copyright licenses are transferred entirely to the client.'
    },
    {
      q: 'Are your cloud migration and software processes ISO certified?',
      a: 'Yes. GangaTara Technologies holds active ISO 27001 certifications for information security management, ensuring strict corporate governance standards.'
    },
    {
      q: 'Do you support legacy system re-architecting?',
      a: 'Frequently. We specialize in wrapping outdated mainframes and monolith systems with secure API layers or refactoring them into serverless microservices.'
    }
  ];

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'cloud-solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', service: 'cloud-solutions', message: '' });
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
            Schedule an Architectural Audit
          </h1>
          <p className="text-base text-dark/70 dark:text-light/60 max-w-2xl mx-auto leading-relaxed">
            Fill out our formal inquiry form below or consult our FAQ section regarding corporate contracts, IP rights, and SLAs.
          </p>
        </div>
      </section>

      {/* 2. Contact Form & FAQ grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Form Intake - Left */}
        <div className="lg:col-span-7">
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
                placeholder="Briefly summarize your integration requirements..."
                className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20 resize-none"
              />

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
        </div>

        {/* FAQs Accordion - Right */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2 mb-2"><HelpCircle className="w-5 h-5 text-primary" /> Core Agreements FAQ</h2>
          
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-light/20 dark:border-white/5 overflow-hidden transition-all bg-light/30 dark:bg-white/5"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-xs font-bold text-dark dark:text-light cursor-pointer hover:bg-primary/5 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 pt-1 text-[11px] text-dark/60 dark:text-light/60 leading-relaxed border-t border-light/10 dark:border-white/5">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
}
