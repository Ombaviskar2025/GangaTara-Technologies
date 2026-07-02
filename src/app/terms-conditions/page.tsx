import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, BookOpen, AlertCircle } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="pt-28 pb-20 bg-light dark:bg-dark min-h-screen text-dark dark:text-light transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-dark/60 dark:text-light/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-light/20 dark:border-white/5 pb-8 mb-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" /> Corporate Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-poppins font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-dark/50 dark:text-light/50 mt-2 font-medium">
            Effective Date: July 2, 2026 | Version 1.8
          </p>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-8 text-xs sm:text-sm text-dark/80 dark:text-light/80 leading-relaxed font-sans">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our web portals, contracting our software development squads, or scheduling architectural audits, you agree to be bound by these Terms & Conditions, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from utilizing our digital assets or custom engineering services.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              2. Intellectual Property (IP) Ownership
            </h2>
            <p>
              GangaTara Technologies adheres to a client-first IP allocation standard. Unless otherwise specified in a custom Master Services Agreement (MSA) or Statement of Work (SOW):
            </p>
            <div className="p-5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-light/10 dark:border-white/5 flex flex-col gap-3">
              <p className="text-[11px] leading-relaxed">
                <strong>Client Deliverables:</strong> All proprietary code bases, user interfaces, custom database schemas, and application integrations developed specifically for a client under a finalized SOW belong exclusively to the client upon full payment of contract invoices.
              </p>
              <p className="text-[11px] leading-relaxed">
                <strong>GangaTara Pre-existing IP:</strong> We retain full ownership of all pre-existing software templates, internal microservice blueprints, boilerplate libraries, and machine-learning models developed independently by GangaTara engineers outside of custom client statements. Clients are granted a non-exclusive, royalty-free, perpetual license to run such elements embedded in their custom builds.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              3. Service Engagements & Billing
            </h2>
            <p>
              Project specifications, engineering milestones, timelines, and payment cycles will be defined in individual Statements of Work (SOW). Invoice terms are Net 30 unless agreed otherwise. Late payments may result in the temporary suspension of development pipelines or cloud deployments.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" /> 4. Limitation of Liability
            </h2>
            <p>
              In no event shall GangaTara Technologies or its directors, officers, or engineering teams be liable for any indirect, incidental, special, or consequential damages (including, without limitation, loss of business profits, transaction data corruption, or server downtime) arising out of the use or inability to use our systems or custom deliverables.
            </p>
            <p>
              Our total cumulative liability under any Statement of Work (SOW) shall not exceed the total fees paid by the client under that specific SOW in the six (6) months preceding the event giving rise to liability.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of Germany (for EMEA clients) and India (for APAC/Global clients), without regard to conflict of law principles. Any legal disputes arising out of these terms shall be settled exclusively in the competent courts of Munich, Germany, or Pune, Maharashtra, India.
            </p>
          </section>

          <section className="flex flex-col gap-3 border-t border-light/10 dark:border-white/5 pt-6 mt-4">
            <h2 className="text-base font-poppins font-bold text-dark dark:text-light">
              Legal Enquiries
            </h2>
            <p>
              For corporate contracts, SLA negotiations, or specific compliance questions, please contact our legal squad:
            </p>
            <div className="text-xs text-dark/60 dark:text-light/60">
              Email: <a href="mailto:legal@gangatara.com" className="text-primary hover:underline font-bold">legal@gangatara.com</a> | Address: Maximilianstraße 35, 80539 München, Germany
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
