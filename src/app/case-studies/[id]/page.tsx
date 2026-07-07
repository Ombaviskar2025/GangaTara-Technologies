'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trophy, CheckCircle, ShieldAlert, Layers } from 'lucide-react';
import { caseStudiesData } from '@/data/companyData';

export default function CaseStudyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const cs = caseStudiesData.find((study) => study.id === id);

  if (!cs) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-xl font-bold text-dark dark:text-light mb-4">Case Study Not Found</h1>
        <button
          onClick={() => router.push('/case-studies')}
          className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => router.push('/case-studies')}
          className="flex items-center gap-1.5 text-xs font-bold text-dark/60 dark:text-light/60 hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </button>
      </div>

      {/* Cover Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-[280px] sm:h-[380px] rounded-3xl overflow-hidden relative border border-light/20 dark:border-white/5">
          <img
            src={cs.imagePath === 'case_healthcare' ? '/ind_healthcare.png' : cs.imagePath === 'case_finance' ? '/ind_finance.png' : '/ind_retail.png'}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent dark:from-[#1E1F22] dark:via-[#1E1F22]/40" />
          <div className="absolute bottom-8 left-8">
            <span className="px-3 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
              {cs.industry} Case Study
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side details */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          <div>
            <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1.5 block">Customer Success Study</span>
            <h1 className="text-3xl font-poppins font-extrabold text-dark dark:text-light leading-tight mb-4">{cs.title}</h1>
            <div className="flex flex-wrap gap-2.5 text-xs text-dark/50 dark:text-light/50 font-semibold">
              <span>Client: {cs.client}</span>
              <span>•</span>
              <span>Sector: {cs.industry}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-dark/55 dark:text-light/55 mb-2">Project Overview</h3>
            <p className="text-sm sm:text-base text-dark/85 dark:text-light/85 leading-relaxed font-medium italic">
              "{cs.overview}"
            </p>
          </div>

          {/* Challenge */}
          <div>
            <h3 className="text-sm font-bold text-dark dark:text-light mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-red-500" /> The Scaling Challenge
            </h3>
            <p className="text-xs sm:text-sm text-dark/70 dark:text-light/75 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-bold text-dark dark:text-light mb-4 flex items-center gap-2">
              <Layers className="w-4.5 h-4.5 text-success" /> Applied Architecture Solution
            </h3>
            <p className="text-xs sm:text-sm text-dark/70 dark:text-light/75 leading-relaxed">
              {cs.solution}
            </p>
          </div>

        </div>

        {/* Right Side summary */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
          
          {/* Key Metrics */}
          <div className="p-6 rounded-2xl glass-panel border border-light/25 dark:border-white/5">
            <h4 className="text-xs font-bold text-dark dark:text-light uppercase tracking-wider mb-4 flex items-center gap-1.5"><Trophy className="w-4.5 h-4.5 text-primary" /> Key Results</h4>
            
            <div className="flex flex-col gap-4">
              {cs.results.map((res, idx) => (
                <div key={idx} className="flex justify-between border-b border-light/10 dark:border-white/5 pb-2 text-xs">
                  <span className="text-dark/65 dark:text-light/65">{res.label}</span>
                  <span className="font-bold text-primary">{res.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stacks */}
          <div className="p-6 rounded-2xl glass-panel border border-light/25 dark:border-white/5">
            <h4 className="text-xs font-bold text-dark dark:text-light uppercase tracking-wider mb-4">Core Tech Utilized</h4>
            <div className="flex flex-wrap gap-2">
              {cs.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl bg-light-hover dark:bg-white/5 border border-light/10 dark:border-white/5 text-[10px] text-dark/80 dark:text-light/80 font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
