'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import * as Icons from 'lucide-react';
import { servicesData } from '@/data/companyData';
import { landingPagesData } from '@/data/landingPagesData';
import { LandingPageTemplate } from '@/components/sections/LandingPageTemplate';
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Code className={className} />;
  return <IconComponent className={className} />;
};

const getServiceImage = (id: string) => {
  switch (id) {
    case 'cloud-solutions':
      return '/slide_cloud.png';
    case 'ai-machine-learning':
      return '/slide_ai.png';
    case 'software-development':
      return '/slide_datacenter.png';
    case 'web-development':
      return '/slide_team.png';
    case 'application-development':
      return '/career_banner.png';
    case 'cyber-security':
      return '/ind_healthcare.png';
    case 'devops':
      return '/slide_datacenter.png';
    case 'ui-ux-design':
      return '/ind_education.png';
    case 'data-analytics':
      return '/ind_finance.png';
    case 'blockchain':
      return '/ind_government.png';
    case 'iot-solutions':
      return '/ind_manufacturing.png';
    case 'digital-transformation':
      return '/slide_team.png';
    case 'digital-marketing':
      return '/ind_retail.png';
    default:
      return '/slide_team.png';
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const content = landingPagesData[id];
  if (content) {
    return <LandingPageTemplate content={content} />;
  }

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

  const isCustomService = true;

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
    // Per-service config
    const serviceConfig: Record<string, {
      image: string;
      gradientFrom: string;
      gradientTo: string;
      accentFrom: string;
      accentTo: string;
      tag: string;
    }> = {
      'web-development': {
        image: '/service_web_dev.png',
        gradientFrom: 'from-[#0057FF]',
        gradientTo: 'to-[#00B4FF]',
        accentFrom: 'from-[#0057FF]',
        accentTo: 'to-[#00D2FF]',
        tag: 'Web Solutions',
      },
      'application-development': {
        image: '/service_app_dev.png',
        gradientFrom: 'from-[#7C3AED]',
        gradientTo: 'to-[#EC4899]',
        accentFrom: 'from-[#7C3AED]',
        accentTo: 'to-[#EC4899]',
        tag: 'Mobile & App',
      },
      'digital-marketing': {
        image: '/service_digital_marketing.png',
        gradientFrom: 'from-[#0090FF]',
        gradientTo: 'to-[#00D2C8]',
        accentFrom: 'from-[#0090FF]',
        accentTo: 'to-[#00D2C8]',
        tag: 'Growth & Reach',
      },
      'ai-machine-learning': {
        image: '/slide_ai.png',
        gradientFrom: 'from-[#8B5CF6]',
        gradientTo: 'to-[#EC4899]',
        accentFrom: 'from-[#8B5CF6]',
        accentTo: 'to-[#EC4899]',
        tag: 'AI & Cognition',
      },
      'software-development': {
        image: '/slide_datacenter.png',
        gradientFrom: 'from-[#10B981]',
        gradientTo: 'to-[#3B82F6]',
        accentFrom: 'from-[#10B981]',
        accentTo: 'to-[#3B82F6]',
        tag: 'Core Software',
      },
      'cyber-security': {
        image: '/event_security.png',
        gradientFrom: 'from-[#EF4444]',
        gradientTo: 'to-[#F59E0B]',
        accentFrom: 'from-[#EF4444]',
        accentTo: 'to-[#F59E0B]',
        tag: 'Cybersecurity',
      },
      'ui-ux-design': {
        image: '/ind_education.png',
        gradientFrom: 'from-[#EC4899]',
        gradientTo: 'to-[#F59E0B]',
        accentFrom: 'from-[#EC4899]',
        accentTo: 'to-[#F59E0B]',
        tag: 'Design & Experience',
      },
      'cloud-solutions': {
        image: '/slide_cloud.png',
        gradientFrom: 'from-[#0EA5E9]',
        gradientTo: 'to-[#2563EB]',
        accentFrom: 'from-[#0EA5E9]',
        accentTo: 'to-[#2563EB]',
        tag: 'Cloud Solutions',
      },
      'devops': {
        image: '/blog_devops.png',
        gradientFrom: 'from-[#6366F1]',
        gradientTo: 'to-[#A855F7]',
        accentFrom: 'from-[#6366F1]',
        accentTo: 'to-[#A855F7]',
        tag: 'DevOps & GitOps',
      },
      'data-analytics': {
        image: '/ind_finance.png',
        gradientFrom: 'from-[#F59E0B]',
        gradientTo: 'to-[#10B981]',
        accentFrom: 'from-[#F59E0B]',
        accentTo: 'to-[#10B981]',
        tag: 'Analytics & BI',
      },
      'blockchain': {
        image: '/ind_government.png',
        gradientFrom: 'from-[#3B82F6]',
        gradientTo: 'to-[#8B5CF6]',
        accentFrom: 'from-[#3B82F6]',
        accentTo: 'to-[#8B5CF6]',
        tag: 'Web3 & Ledger',
      },
      'iot-solutions': {
        image: '/ind_manufacturing.png',
        gradientFrom: 'from-[#14B8A6]',
        gradientTo: 'to-[#0EA5E9]',
        accentFrom: 'from-[#14B8A6]',
        accentTo: 'to-[#0EA5E9]',
        tag: 'IoT & Edge',
      },
      'digital-transformation': {
        image: '/slide_team.png',
        gradientFrom: 'from-[#6366F1]',
        gradientTo: 'to-[#EC4899]',
        accentFrom: 'from-[#6366F1]',
        accentTo: 'to-[#EC4899]',
        tag: 'Transformation',
      },
    };
    const cfg = serviceConfig[id] || serviceConfig['web-development'];

    return (
      <div className="min-h-screen bg-[#4A4B50] pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
        {/* Background glow blobs */}
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br ${cfg.gradientFrom} ${cfg.gradientTo} pointer-events-none`} />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 bg-gradient-to-tl ${cfg.gradientFrom} ${cfg.gradientTo} pointer-events-none`} />
        <div className="absolute inset-0 grid-bg opacity-8 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">

          {/* Left Column: Image + Title */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Tag */}
            <div className={`inline-flex self-start px-4 py-1.5 rounded-full bg-gradient-to-r ${cfg.accentFrom} ${cfg.accentTo} text-white font-bold text-[10px] uppercase tracking-widest shadow-lg`}>
              {cfg.tag}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-poppins font-black tracking-tight text-white leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              {service.description}
            </p>

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={cfg.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-[#4A4B50]/80 via-transparent to-transparent`} />
              {/* Caption overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="text-white font-poppins font-bold text-lg drop-shadow-lg">
                  {service.caption || 'Enterprise Grade Solutions'}
                </span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${cfg.accentFrom} ${cfg.accentTo} shadow`}>
                  {cfg.tag}
                </span>
              </div>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 4).map((feat, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70 font-medium">
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Glass Enquiry Form */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl shadow-black/40 p-8 sm:p-10 flex flex-col gap-6">

              {/* Form Header */}
              <div className="flex flex-col gap-1">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${cfg.accentFrom} ${cfg.accentTo} bg-clip-text text-transparent`}>
                  Get in Touch
                </span>
                <h3 className="text-2xl font-poppins font-bold text-white">
                  Enquiry Form
                </h3>
                <p className="text-white/40 text-xs">
                  Fill out this form and our consultant will respond within 24 hours.
                </p>
              </div>

              {/* Error / Success */}
              {errorMsg && (
                <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold rounded-xl text-center">
                  {errorMsg}
                </div>
              )}
              {success && (
                <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-2xl text-center flex flex-col gap-1 items-center">
                  <CheckCircle className="w-5 h-5 animate-bounce" />
                  <span>Enquiry submitted successfully!</span>
                  <span className="text-[10px] text-white/30 font-normal">Our consultant will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4">
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

                {/* Service dropdown */}
                <div className="flex border border-white/10 rounded-xl overflow-hidden text-sm bg-white/5">
                  <div className="px-4 py-3 bg-white/8 border-r border-white/10 text-white/50 font-bold text-xs">
                    Service
                  </div>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-white/80 focus:outline-none text-sm cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#4A4B50]">Select a service...</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#4A4B50]">{s.title}</option>
                    ))}
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
                  className={`w-full py-4 rounded-2xl bg-gradient-to-r ${cfg.accentFrom} ${cfg.accentTo} text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg hover:opacity-90 hover:scale-[1.01] cursor-pointer`}
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

      {/* Cover Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-[280px] sm:h-[380px] rounded-3xl overflow-hidden relative border border-light/20 dark:border-white/5">
          <img
            src={getServiceImage(service.id)}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent dark:from-[#4A4B50] dark:via-[#4A4B50]/40" />
          <div className="absolute bottom-8 left-8">
            <span className="px-3 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
              {service.title} Practice
            </span>
          </div>
        </div>
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
