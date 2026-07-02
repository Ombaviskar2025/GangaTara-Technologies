'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
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
    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'cloud-solutions',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const servicesDropdown = [
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'custom-software', label: 'Custom Software Development' },
    { value: 'cybersecurity', label: 'Cybersecurity Audit' },
    { value: 'other', label: 'Other Solutions' }
  ];

  return (
    <section className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" /> Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-dark dark:text-light mb-4">
            Ready to Accelerate Your Digital Scale?
          </h2>
          <p className="text-sm text-dark/70 dark:text-light/60">
            Reach out to our cloud architects and software engineers to schedule an architectural assessment.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Map - Left */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-poppins font-bold text-dark dark:text-light">Corporate Headquarters</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light/60 dark:bg-white/5 border border-light/15 dark:border-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark dark:text-light mb-1">Office Location</h4>
                  <p className="text-[11px] text-dark/60 dark:text-light/60 leading-relaxed">
                    GangaTara Technologies GmbH<br />
                    Maximilianstraße 35, 80539 München, Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light/60 dark:bg-white/5 border border-light/15 dark:border-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark dark:text-light mb-1">Direct Callback</h4>
                  <p className="text-[11px] text-dark/60 dark:text-light/60">
                    +49 (89) 555-0199
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light/60 dark:bg-white/5 border border-light/15 dark:border-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark dark:text-light mb-1">Client Relations Email</h4>
                  <p className="text-[11px] text-dark/60 dark:text-light/60">
                    proposals@gangatara.com
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Vector Mock Map */}
            <div className="h-60 rounded-2xl border border-light/20 dark:border-white/5 bg-slate-900/5 dark:bg-slate-900/30 overflow-hidden relative p-4 flex items-center justify-center group">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              
              {/* Radar pulse effect */}
              <div className="absolute w-20 h-20 rounded-full border border-primary animate-ping opacity-25" />
              <div className="absolute w-10 h-10 rounded-full border border-primary animate-ping opacity-50" style={{ animationDelay: '1s' }} />

              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full bg-primary border-4 border-white dark:border-dark flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="bg-light/95 dark:bg-dark/95 border border-light/20 dark:border-white/5 px-3 py-1 rounded-xl shadow-lg">
                  <span className="text-[9px] uppercase font-bold text-dark dark:text-light">Munich Hub</span>
                </div>
              </div>
              
              <span className="absolute bottom-3 left-3 text-[8px] uppercase tracking-wider text-dark/40 dark:text-light/40 font-semibold">
                EPSG:3857 coordinates grid
              </span>
            </div>
          </div>

          {/* Business Contact Form - Right */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-light/25 dark:border-white/5 shadow-2xl bg-light/70 dark:bg-dark/70">
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Contact Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 0199"
                      className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corporation"
                      className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Core Area of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="px-4 py-3 bg-light dark:bg-dark border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary"
                  >
                    {servicesDropdown.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-light dark:bg-dark text-dark dark:text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-dark/60 dark:text-light/60">Detailed Scope Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your systems challenge..."
                    className="px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 rounded-xl text-xs text-dark dark:text-white focus:outline-none focus:border-primary placeholder-dark/30 dark:placeholder-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Business Request
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-success/10 border border-success/20 text-success text-xs font-semibold flex items-center gap-2 justify-center"
                  >
                    <CheckCircle className="w-4 h-4" /> Message received. Our Client relations manager will reply shortly.
                  </motion.div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
