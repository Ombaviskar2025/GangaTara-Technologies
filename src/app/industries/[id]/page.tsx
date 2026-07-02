'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, ShieldCheck, Mail, Building } from 'lucide-react';
import * as Icons from 'lucide-react';
import { industriesData } from '@/data/companyData';

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Building className={className} />;
  return <IconComponent className={className} />;
};

export default function IndustryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const industry = industriesData.find((ind) => ind.id === id);

  if (!industry) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-xl font-bold text-dark dark:text-light mb-4">Division Not Found</h1>
        <button
          onClick={() => router.push('/industries')}
          className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Divisions
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      
      {/* Back button header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => router.push('/industries')}
          className="flex items-center gap-1.5 text-xs font-bold text-dark/60 dark:text-light/60 hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Divisions
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Core details - Left */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Header Title Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-xl shadow-primary/15 shrink-0">
              <DynamicIcon name={industry.iconName} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1.5 block">Industry Practice</span>
              <h1 className="text-3xl font-poppins font-extrabold text-dark dark:text-light leading-tight">{industry.title}</h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-dark/70 dark:text-light/75 leading-relaxed">
            {industry.description}
          </p>

          {/* Key Solutions */}
          <div className="p-8 rounded-3xl glass-panel border border-light/20 dark:border-white/5 bg-slate-900/5 dark:bg-slate-900/10">
            <h3 className="text-sm font-bold text-dark dark:text-light mb-6">Target Operations & Solutions</h3>
            
            <div className="flex flex-col gap-4">
              {industry.solutions.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <span className="text-dark/85 dark:text-light/85 leading-snug">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Dashboard */}
          <div>
            <h3 className="text-sm font-bold text-dark dark:text-light mb-6">Delivered Metrics & KPI Impact</h3>
            
            <div className="grid grid-cols-3 gap-6">
              {industry.stats.map((st, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-light/15 dark:border-white/5 text-center flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-poppins font-black text-primary mb-2">{st.value}</span>
                  <span className="text-[10px] text-dark/50 dark:text-light/50 font-bold uppercase tracking-wider">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Sidebar - Right */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
          
          {/* Compliance & Standards */}
          <div className="p-6 rounded-2xl glass-panel border border-light/20 dark:border-white/5 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-dark dark:text-light uppercase tracking-wider mb-2">Practice Standard</h4>
            <div className="flex items-center gap-2 text-xs font-semibold text-dark/85 dark:text-light/85">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Full compliance alignment</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-dark/85 dark:text-light/85">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Global SLA commitments</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-tr from-primary to-secondary text-white shadow-2xl relative overflow-hidden flex flex-col gap-6">
            {/* background circle decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            
            <div>
              <h3 className="text-lg font-bold font-poppins mb-2">Speak to a Industry Expert</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect with our specialized {industry.title} practice group to discuss proof of concepts, API pilots, and migration details.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl bg-white text-primary hover:bg-slate-100 font-bold text-xs text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5 cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Consult with Practice Lead
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
