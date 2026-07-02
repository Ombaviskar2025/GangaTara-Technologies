'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import * as Icons from 'lucide-react';
import { servicesData } from '@/data/companyData';

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Code className={className} />;
  return <IconComponent className={className} />;
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const service = servicesData.find((s) => s.id === id);

  // Form states for custom services
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(id);
  const [summary, setSummary] = useState('');
  const [advancePayment, setAdvancePayment] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync selected service when id changes
  useEffect(() => {
    if (service) {
      setSelectedService(service.id);
    }
  }, [id, service]);

  if (!service) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-xl font-bold text-dark dark:text-light mb-4">Service Not Found</h1>
        <button
          onClick={() => router.push('/services')}
          className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>
      </div>
    );
  }

  const isCustomService = ['web-development', 'application-development', 'digital-marketing'].includes(id);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    // Validate 10 digit contact number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setErrorMsg('Please enter a valid 10-digit contact number.');
      return;
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!agreed) {
      setErrorMsg('You must agree to our Privacy Policy and Terms Conditions.');
      return;
    }

    setSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setSummary('');
    setAdvancePayment(false);
    setAgreed(false);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  // Render Custom Split Layout Pages (Web Dev, App Dev, Digital Marketing)
  if (isCustomService) {
    // Custom gradient configurations
    let gradientBg = 'bg-gradient-to-r from-[#0057FF] to-[#00D2FF]'; // Web
    if (id === 'application-development') {
      gradientBg = 'bg-gradient-to-r from-[#FF0057] to-[#7A00FF]';
    } else if (id === 'digital-marketing') {
      gradientBg = 'bg-gradient-to-r from-[#00FFC2] to-[#00B4FF]';
    }

    return (
      <div className={`min-h-screen ${gradientBg} pt-24 pb-16 flex items-center justify-center relative overflow-hidden`}>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          {/* Left Column: Title, Illustration & Caption */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-poppins font-black tracking-tight mb-8 drop-shadow-md">
              {service.title}
            </h1>

            {/* Custom SVG Illustration Containers */}
            <div className="w-full max-w-sm aspect-video mb-8 flex items-center justify-center relative">
              {id === 'web-development' && (
                <svg viewBox="0 0 200 120" className="w-full h-full text-white fill-none stroke-white">
                  {/* Screens */}
                  <rect x="25" y="10" width="85" height="55" rx="4" strokeWidth="2.5" />
                  <line x1="25" y1="52" x2="110" y2="52" strokeWidth="1.5" />
                  <line x1="67" y1="65" x2="67" y2="78" strokeWidth="3.5" />
                  <line x1="50" y1="78" x2="84" y2="78" strokeWidth="3.5" />
                  
                  {/* Laptop & Programmer */}
                  <circle cx="140" cy="55" r="12" strokeWidth="2.5" />
                  <path d="M120,85 C120,70 160,70 160,85" strokeWidth="2.5" />
                  <rect x="125" y="76" width="30" height="15" rx="1.5" strokeWidth="2.5" />
                  
                  {/* Code Elements */}
                  <path d="M10,40 L20,32 L20,48" strokeWidth="1.5" />
                  <path d="M185,32 L175,40 L185,48" strokeWidth="1.5" />
                  <circle cx="170" cy="18" r="5" strokeWidth="1.5" />
                  <path d="M8,15 L18,22" strokeWidth="1.5" />
                </svg>
              )}

              {id === 'application-development' && (
                <svg viewBox="0 0 200 120" className="w-full h-full text-white fill-none stroke-white">
                  {/* Phone Screen */}
                  <rect x="70" y="10" width="60" height="100" rx="10" strokeWidth="2.5" />
                  <line x1="90" y1="16" x2="110" y2="16" strokeWidth="2" />
                  <circle cx="100" cy="103" r="3.5" fill="white" />
                  
                  {/* App Grid */}
                  <rect x="80" y="28" width="15" height="15" rx="2" strokeWidth="2" fill="white" fillOpacity="0.1" />
                  <rect x="105" y="28" width="15" height="15" rx="2" strokeWidth="2" fill="white" fillOpacity="0.1" />
                  <rect x="80" y="50" width="15" height="15" rx="2" strokeWidth="2" fill="white" fillOpacity="0.1" />
                  <rect x="105" y="50" width="15" height="15" rx="2" strokeWidth="2" fill="white" fillOpacity="0.1" />
                  
                  {/* Surrounding clouds/rockets */}
                  <path d="M25,50 C25,45 35,40 45,45 C50,42 60,45 60,50 L25,50 Z" strokeWidth="1.5" />
                  <path d="M150,60 C150,55 160,50 170,55 C175,52 185,55 185,60 L150,60 Z" strokeWidth="1.5" />
                  <circle cx="35" cy="20" r="4" strokeWidth="1.5" />
                  <circle cx="165" cy="25" r="5" strokeWidth="1.5" />
                </svg>
              )}

              {id === 'digital-marketing' && (
                <svg viewBox="0 0 200 120" className="w-full h-full text-white fill-none stroke-white">
                  {/* Giant Phone */}
                  <rect x="80" y="15" width="55" height="95" rx="8" strokeWidth="2.5" />
                  <line x1="80" y1="92" x2="135" y2="92" strokeWidth="1.5" />
                  
                  {/* Chart inside phone */}
                  <rect x="88" y="70" width="8" height="20" fill="white" fillOpacity="0.2" strokeWidth="1.5" />
                  <rect x="100" y="55" width="8" height="35" fill="white" fillOpacity="0.4" strokeWidth="1.5" />
                  <rect x="112" y="40" width="8" height="50" fill="white" strokeWidth="1.5" />

                  {/* Woman Marketer */}
                  <circle cx="45" cy="40" r="10" strokeWidth="2.5" />
                  <path d="M30,75 C30,60 60,60 60,75" strokeWidth="2.5" />
                  <line x1="45" y1="50" x2="45" y2="60" strokeWidth="2" />
                  
                  {/* Trend Arrow */}
                  <path d="M125,45 L155,20 L165,30 M155,20 L142,22 M155,20 L153,32" strokeWidth="2" />
                  <path d="M92,80 L110,60 L155,20" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              )}
            </div>

            {/* Captions */}
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold tracking-wide drop-shadow-md">
              {service.caption || 'Enterprise Services'}
            </h2>
          </div>

          {/* Right Column: Custom Enquiry Form */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-md p-8 sm:p-10 bg-white rounded-[32px] shadow-2xl flex flex-col gap-6">
              
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-poppins font-black text-slate-800">
                  Enquiry Form
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Fill Out This Form to respond about Your intrest
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-500 border border-red-100 text-xs font-semibold rounded-xl text-center">
                  {errorMsg}
                </div>
              )}

              {success && (
                <div className="p-4 bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-semibold rounded-2xl text-center flex flex-col gap-1 items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 animate-bounce" />
                  <span>Enquiry submitted successfully!</span>
                  <span className="text-[10px] text-slate-400 font-normal">Our consultant will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl text-xs focus:outline-none focus:border-primary focus:bg-white transition-all"
                />

                {/* 10 Digit Phone */}
                <input
                  type="tel"
                  placeholder="10 Digit Contact Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl text-xs focus:outline-none focus:border-primary focus:bg-white transition-all"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl text-xs focus:outline-none focus:border-primary focus:bg-white transition-all"
                />

                {/* Select Services dropdown */}
                <div className="flex border border-slate-200 rounded-xl overflow-hidden text-xs bg-slate-50">
                  <div className="px-4 py-3 bg-slate-100 border-r border-slate-200 text-slate-500 font-bold">
                    Select
                  </div>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-slate-700 focus:outline-none"
                  >
                    <option value="" disabled>Services...</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Summarize Project / Requirements */}
                <textarea
                  placeholder="Summarize Project / Requirements"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl text-xs focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                />

                {/* 50% Advance Payment Checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={advancePayment}
                    onChange={(e) => setAdvancePayment(e.target.checked)}
                    className="w-4 h-4 rounded text-primary focus:ring-primary shrink-0 mt-0.5"
                  />
                  <span className="text-[10px] sm:text-xs text-slate-500 leading-snug">
                    I agree to pay <strong>50% in advance</strong> to start the project.
                  </span>
                </label>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded text-primary focus:ring-primary shrink-0 mt-0.5"
                  />
                  <span className="text-[10px] sm:text-xs text-slate-500 leading-snug">
                    I agree with our <Link href="/privacy-policy" className="text-primary hover:underline font-bold">Privacy Policy</Link> and <Link href="/terms-conditions" className="text-primary hover:underline font-bold">Terms Conditions</Link>
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-2xl bg-teal-400 hover:bg-teal-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Submit
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    );
  }

  // Render Standard Enterprise Layout
  return (
    <div className="pt-28 pb-20">
      
      {/* Back button header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => router.push('/services')}
          className="flex items-center gap-1.5 text-xs font-bold text-dark/60 dark:text-light/60 hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Core details - Left */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Header Title Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-xl shadow-primary/15 shrink-0">
              <DynamicIcon name={service.iconName} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1.5 block">Enterprise Capability</span>
              <h1 className="text-3xl font-poppins font-extrabold text-dark dark:text-light leading-tight">{service.title}</h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-dark/70 dark:text-light/75 leading-relaxed">
            {service.description}
          </p>

          {/* Key Features */}
          <div className="p-8 rounded-3xl glass-panel border border-light/20 dark:border-white/5 bg-slate-900/5 dark:bg-slate-900/10">
            <h3 className="text-sm font-bold text-dark dark:text-light mb-6">Service Scope & Features</h3>
            
            <div className="flex flex-col gap-4">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <span className="text-dark/85 dark:text-light/85 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div>
            <h3 className="text-sm font-bold text-dark dark:text-light mb-6">Business Benefits</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((ben, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-light/15 dark:border-white/5 hover:border-primary/10 transition-colors flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                  <p className="text-xs text-dark/75 dark:text-light/75 leading-relaxed">{ben}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Sidebar - Right */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
          
          {/* Tech Integration */}
          <div className="p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5">
            <h4 className="text-xs font-bold text-dark dark:text-light uppercase tracking-wider mb-4">Core Tech Utilized</h4>
            
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl bg-light-hover dark:bg-white/5 border border-light/10 dark:border-white/5 text-[10px] text-dark/80 dark:text-light/80 font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-tr from-primary to-secondary text-white shadow-2xl relative overflow-hidden flex flex-col gap-6">
            {/* background circle decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            
            <div>
              <h3 className="text-lg font-bold font-poppins mb-2">Need an Architecture Audit?</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect with our advisory squad to discuss integration details, scale parameters, and proof of concept deployments.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl bg-white text-primary hover:bg-slate-100 font-bold text-xs text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5 cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Inquire About {service.title}
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
