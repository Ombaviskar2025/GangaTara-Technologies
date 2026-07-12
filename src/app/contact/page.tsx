'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Mail, Phone, MapPin, Send, ShieldCheck, ArrowLeft } from 'lucide-react';
import { servicesData, industriesData } from '@/data/companyData';

function ContactPageContent() {
  const searchParams = useSearchParams();
  
  // Contact Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [summary, setSummary] = useState('');
  const [advancePayment, setAdvancePayment] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle incoming query params for pre-selection
  useEffect(() => {
    const service = searchParams.get('service');
    const industry = searchParams.get('industry');
    if (service) {
      setSelectedItem(service);
    } else if (industry) {
      setSelectedItem(industry);
    } else {
      setSelectedItem('web-development'); // default fallback
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setErrorMsg('Please enter a valid 10-digit contact number.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!agreed) {
      setErrorMsg('You must agree to our Privacy Policy and Terms Conditions.');
      return;
    }

    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setSummary('');
    setAdvancePayment(false);
    setAgreed(false);
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#4A4B50] pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-[#0057FF] to-[#00B4FF] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 bg-gradient-to-tl from-[#0090FF] to-[#00D2C8] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">

        {/* Left Column: Info + Branding */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-white">
          <Link
            href="/"
            className="inline-flex self-start items-center gap-1.5 text-xs font-bold text-white/60 hover:text-white transition-colors cursor-pointer mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <span className="inline-flex self-start px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-[10px] uppercase tracking-widest shadow-lg">
            Start a Project
          </span>

          <h1 className="text-4xl sm:text-5xl font-poppins font-black tracking-tight leading-[1.1]">
            Let's Build Something Exceptional
          </h1>

          <p className="text-white/70 text-sm leading-relaxed max-w-md">
            Connect with our core team of engineering architects. Whether you have a detailed specification or just a rough idea, we will help you map a digital execution plan.
          </p>

          {/* Quick contact list */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Call Us</p>
                <a href="tel:+919111903111" className="text-white/95 font-semibold hover:text-primary transition-colors">
                  +91 9111903111
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Email Us</p>
                <a href="mailto:info@gangatara.com" className="text-white/95 font-semibold hover:text-primary transition-colors">
                  info@gangatara.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Office Location</p>
                <p className="text-white/95 font-semibold">
                  Indore, Madhya-Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Compliance pills */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] text-white/70 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> GDPR Compliant
            </span>
          </div>
        </div>

        {/* Right Column: Glass Enquiry Form */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl shadow-black/40 p-8 sm:p-10 flex flex-col gap-6">

            {/* Form Header */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </span>
              <h3 className="text-2xl font-poppins font-bold text-white">
                Enquiry Form
              </h3>
              <p className="text-white/45 text-xs">
                Fill out this form and our consultant will respond within 24 hours.
              </p>
            </div>

            {/* Error / Success */}
            {errorMsg && (
              <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold rounded-xl text-center">
                {errorMsg}
              </div>
            )}
            {submitted && (
              <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-2xl text-center flex flex-col gap-1 items-center">
                <CheckCircle className="w-5 h-5 animate-bounce" />
                <span>Enquiry submitted successfully!</span>
                <span className="text-[10px] text-white/30 font-normal">Our consultant will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="10 Digit Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
              />

              {/* Integrated Dropdown */}
              <div className="flex border border-white/10 rounded-xl overflow-hidden text-sm bg-white/5">
                <div className="px-4 py-3 bg-white/8 border-r border-white/10 text-white/50 font-bold text-xs">
                  For
                </div>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="flex-1 px-4 py-3 bg-transparent text-white/80 focus:outline-none text-sm cursor-pointer"
                >
                  <option value="" disabled className="bg-[#4A4B50] text-white">Select a service or industry...</option>
                  <optgroup label="Core & Digital Services" className="bg-[#4A4B50] text-white font-bold">
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#4A4B50] text-white font-normal">{s.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Industries & Sectors" className="bg-[#4A4B50] text-white font-bold">
                    {industriesData.map((ind) => (
                      <option key={ind.id} value={ind.id} className="bg-[#4A4B50] text-white font-normal">{ind.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Summary */}
              <textarea
                placeholder="Summarize your project / requirements..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all resize-none"
              />

              {/* Checkboxes */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={advancePayment}
                  onChange={(e) => setAdvancePayment(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary shrink-0 mt-0.5 cursor-pointer"
                />
                <span className="text-xs text-white/50 leading-snug">
                  I agree to pay <strong className="text-white/80">50% in advance</strong> to start the project.
                </span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary shrink-0 mt-0.5 cursor-pointer"
                />
                <span className="text-xs text-white/50 leading-snug">
                  I agree with our{' '}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-bold">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link href="/terms-conditions" className="text-primary hover:underline font-bold">Terms Conditions</Link>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg hover:opacity-90 hover:scale-[1.01] cursor-pointer"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-white">Loading Enquiry Form...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
