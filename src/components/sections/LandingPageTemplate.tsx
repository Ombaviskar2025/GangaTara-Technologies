'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { LandingPageContent } from '@/data/landingPagesData';
import { servicesData, industriesData } from '@/data/companyData';

interface LandingPageTemplateProps {
  content: LandingPageContent;
}

const TabbedCarousel: React.FC<{
  tabs: { label: string; cards: any[] }[];
  sectionTitle: string;
}> = ({ tabs, sectionTitle }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs[activeTabIdx];

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="py-16 border-b border-dark/5 dark:border-white/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
        <h3 className="text-xl font-poppins font-bold text-dark dark:text-white">
          {sectionTitle}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full border border-dark/15 dark:border-white/10 text-dark/60 dark:text-white/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full border border-dark/15 dark:border-white/10 text-dark/60 dark:text-white/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Tabs list — TCS Style (minimal underline) */}
      <div className="flex gap-2 border-b border-dark/10 dark:border-white/8 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTabIdx(idx)}
            className={`relative px-5 py-3 text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTabIdx === idx
                ? 'text-primary'
                : 'text-dark/45 dark:text-white/40 hover:text-dark dark:hover:text-white'
            }`}
          >
            {tab.label}
            {activeTabIdx === idx && (
              <motion.div
                layoutId={`tab-underline-${sectionTitle}`}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTabIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab.cards.length === 0 ? (
            <div className="py-10 text-center text-xs text-dark/40 dark:text-white/30 border border-dashed border-dark/10 dark:border-white/10 rounded-2xl">
              Coming soon. We are currently preparing content for this category.
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-3 scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {activeTab.cards.map((card: any, ci: number) => (
                <div
                  key={ci}
                  className="shrink-0 w-[290px] sm:w-[320px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="group h-full flex flex-col rounded-2xl border border-dark/6 dark:border-white/6 bg-white dark:bg-white/3 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
                    {/* Visual Cover */}
                    <div className="h-44 relative overflow-hidden bg-slate-900">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <h4 className="text-dark dark:text-white font-poppins font-bold text-[13px] leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {card.title}
                      </h4>
                      <Link
                        href={card.link}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-secondary transition-all"
                      >
                        READ MORE <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({ content }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedItem, setSelectedItem] = useState(content.id);
  const [summary, setSummary] = useState('');
  const [advancePayment, setAdvancePayment] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isIndustry = industriesData.some((ind) => ind.id === content.id);

  // Sync selected item when page changes
  useEffect(() => {
    setSelectedItem(content.id);
  }, [content.id]);

  const handleFormSubmit = (e: React.FormEvent) => {
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

  const scrollToForm = () => {
    const formSec = document.getElementById('enquiry-form-section');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-light dark:bg-dark min-h-screen text-dark dark:text-light">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-24 overflow-hidden">
        {/* Background Image */}
        <img
          src={content.hero.bgImage}
          alt={content.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A4B50]/96 via-[#4A4B50]/80 to-[#4A4B50]/30" />
        <div className="absolute inset-0 grid-bg opacity-15" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-14 py-16 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Breadcrumb */}
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-primary uppercase mb-4">
              {content.hero.breadcrumb}
            </p>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6">
              {content.hero.eyebrow}
            </span>
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold leading-tight mb-5">
              {content.hero.title}
            </h1>
            {/* Subheading */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {content.hero.subtitle}
            </p>
            {/* Contact CTA */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-secondary text-white font-bold text-[13px] rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer border-0 outline-none"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content wrapper */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-14 py-20 flex flex-col gap-20">
        
        {/* 2. INTRO/CONTEXT BLOCK */}
        <section className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-3">
            {content.intro.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-dark dark:text-white mb-6">
            Pioneering the Next Era of Efficiency
          </h2>
          <p className="text-dark/70 dark:text-white/65 text-sm sm:text-base leading-relaxed">
            {content.intro.paragraph}
          </p>
        </section>

        {/* 3. FEATURED INSIGHT BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 border-t border-dark/5 dark:border-white/5">
          <div className={`lg:col-span-6 ${content.featuredInsight.align === 'left' ? 'lg:order-2' : ''}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-72 sm:h-96">
              <img
                src={content.featuredInsight.image}
                alt={content.featuredInsight.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-3">FEATURED REPORT</p>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-dark dark:text-white mb-4">
              {content.featuredInsight.title}
            </h3>
            <p className="text-dark/70 dark:text-white/65 text-xs sm:text-sm leading-relaxed mb-6">
              {content.featuredInsight.text}
            </p>
            <Link
              href={content.featuredInsight.link}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-all"
            >
              Read the full insight <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 4. "IN FOCUS" TABBED CONTENT CAROUSEL */}
        <TabbedCarousel
          tabs={content.inFocus.tabs}
          sectionTitle="In Focus"
        />

        {/* 5. SECOND FEATURED BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 border-t border-dark/5 dark:border-white/5">
          <div className={`lg:col-span-6 ${content.featuredInsight.align === 'right' ? 'lg:order-2' : ''}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-72 sm:h-96">
              <img
                src={content.secondFeatured.image}
                alt={content.secondFeatured.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-3">
              {content.secondFeatured.eyebrow}
            </p>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-dark dark:text-white mb-4">
              {content.secondFeatured.title}
            </h3>
            <p className="text-dark/70 dark:text-white/65 text-xs sm:text-sm leading-relaxed mb-6">
              {content.secondFeatured.text}
            </p>
            <Link
              href={content.secondFeatured.link}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-all"
            >
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 6. "SOLUTIONS" TABBED CAROUSEL */}
        <TabbedCarousel
          tabs={content.solutions.tabs}
          sectionTitle="Target Systems & Platforms"
        />

        {/* 7. CLIENT QUOTE BLOCK */}
        {content.clientQuote && (
          <section className="py-12 px-8 sm:px-12 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden my-6">
            <Quote className="absolute -top-4 -left-4 w-28 h-28 text-primary/5 pointer-events-none" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-primary/95 text-base sm:text-lg font-medium leading-relaxed italic mb-6">
                "{content.clientQuote.quote}"
              </p>
              <div>
                <p className="text-dark dark:text-white font-bold text-xs sm:text-sm">
                  {content.clientQuote.author}
                </p>
                <p className="text-dark/50 dark:text-white/40 text-[10px] sm:text-xs">
                  {content.clientQuote.role} · <strong className="text-primary">{content.clientQuote.company}</strong>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 8. RECOGNITION/AWARD BLOCK */}
        {content.recognition && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 border-t border-dark/5 dark:border-white/5">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden h-60 relative">
                <img
                  src={content.recognition.image}
                  alt={content.recognition.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-3">
                {content.recognition.eyebrow}
              </p>
              <h3 className="text-lg sm:text-xl font-poppins font-bold text-dark dark:text-white mb-3">
                {content.recognition.title}
              </h3>
              <p className="text-dark/70 dark:text-white/65 text-xs sm:text-sm leading-relaxed mb-5">
                {content.recognition.text}
              </p>
              <Link
                href={content.recognition.link}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-all"
              >
                Know more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        )}

        {/* 9. ENQUIRY FORM SECTION (Exactly like Web Development form) */}
        <section id="enquiry-form-section" className="py-12 border-t border-dark/5 dark:border-white/5 scroll-mt-24">
          <div className="max-w-xl mx-auto">
            <div className="w-full bg-[#57585E]/30 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl p-8 sm:p-10 flex flex-col gap-6">
              
              {/* Form Header */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get in Touch
                </span>
                <h3 className="text-2xl font-poppins font-bold text-dark dark:text-white">
                  Enquiry Form
                </h3>
                <p className="text-dark/65 dark:text-white/40 text-xs">
                  Fill out this form and our consultant will respond within 24 hours.
                </p>
              </div>

              {/* Error / Success Messages */}
              {errorMsg && (
                <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold rounded-xl text-center">
                  {errorMsg}
                </div>
              )}
              {success && (
                <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-2xl text-center flex flex-col gap-1 items-center">
                  <CheckCircle className="w-5 h-5 animate-bounce" />
                  <span>Enquiry submitted successfully!</span>
                  <span className="text-[10px] text-dark/45 dark:text-white/30 font-normal">Our consultant will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 text-dark dark:text-white placeholder-dark/45 dark:placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
                />

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="10 Digit Contact Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 text-dark dark:text-white placeholder-dark/45 dark:placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 text-dark dark:text-white placeholder-dark/45 dark:placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all"
                />

                {/* Service/Industry dropdown */}
                <div className="flex border border-dark/15 dark:border-white/10 rounded-xl overflow-hidden text-sm bg-white/5">
                  <div className="px-4 py-3 bg-white/8 dark:bg-white/5 border-r border-dark/15 dark:border-white/10 text-dark/50 dark:text-white/50 font-bold text-xs">
                    {isIndustry ? 'Industry' : 'Service'}
                  </div>
                  <select
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-dark/80 dark:text-white/80 focus:outline-none text-sm cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#57585E] text-white">Select {isIndustry ? 'an industry' : 'a service'}...</option>
                    {isIndustry ? (
                      industriesData.map((ind) => (
                        <option key={ind.id} value={ind.id} className="bg-[#57585E] text-white">{ind.title}</option>
                      ))
                    ) : (
                      servicesData.map((s) => (
                        <option key={s.id} value={s.id} className="bg-[#57585E] text-white">{s.title}</option>
                      ))
                    )}
                  </select>
                </div>

                {/* Summary */}
                <textarea
                  placeholder="Summarize your project / requirements..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-dark/15 dark:border-white/10 text-dark dark:text-white placeholder-dark/45 dark:placeholder-white/30 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white/8 transition-all resize-none"
                />

                {/* Checkboxes */}
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={advancePayment}
                    onChange={(e) => setAdvancePayment(e.target.checked)}
                    className="w-4 h-4 rounded border-dark/15 dark:border-white/20 bg-white/5 text-primary focus:ring-primary shrink-0 mt-0.5 cursor-pointer"
                  />
                  <span className="text-xs text-dark/65 dark:text-white/50 leading-snug">
                    I agree to pay <strong className="text-dark dark:text-white/80">50% in advance</strong> to start the project.
                  </span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded border-dark/15 dark:border-white/20 bg-white/5 text-primary focus:ring-primary shrink-0 mt-0.5 cursor-pointer"
                  />
                  <span className="text-xs text-dark/65 dark:text-white/50 leading-snug">
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
        </section>

      </div>
    </div>
  );
};