import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-poppins font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-dark/50 dark:text-light/50 mt-2 font-medium">
            Effective Date: July 2, 2026 | Version 2.4
          </p>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-8 text-xs sm:text-sm text-dark/80 dark:text-light/80 leading-relaxed font-sans">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> 1. Commitment to Privacy
            </h2>
            <p>
              GangaTara Technologies GmbH (Germany) and GangaTara Technologies Pvt Ltd (India) (collectively, "GangaTara," "we," "us," or "our") are committed to protecting the privacy, confidentiality, and security of personal data entrusted to us by our clients, partners, and website visitors.
            </p>
            <p>
              As a global enterprise technology provider, our information security systems are audited in accordance with the <strong>ISO/IEC 27001:2022</strong> standard, ensuring data confidentiality, integrity, and availability across all cloud platforms and local database nodes.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" /> 2. Compliance Frameworks
            </h2>
            <div className="p-5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-light/10 dark:border-white/5 flex flex-col gap-4">
              <div>
                <h4 className="font-bold text-dark dark:text-light mb-1">GDPR (General Data Protection Regulation) Compliance</h4>
                <p className="text-[11px] text-dark/65 dark:text-light/65">
                  For users residing in the European Economic Area (EEA), we process personal data in accordance with the GDPR principles. Under these parameters, you have the right to access, rectify, or erase your personal datasets ("Right to be Forgotten") and object to or restrict processing operations. Please route inquiries to our Data Protection Officer at <a href="mailto:dpo@gangatara.com" className="text-primary hover:underline font-semibold">dpo@gangatara.com</a>.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-dark dark:text-light mb-1">HIPAA (Health Insurance Portability and Accountability Act) compliance</h4>
                <p className="text-[11px] text-dark/65 dark:text-light/65">
                  When engineering telehealth portals or managing electronic health records (EHR) for clinical entities in the United States, GangaTara acts as a "Business Associate" under HIPAA rules. We execute Business Associate Agreements (BAAs) and implement strict end-to-end encryption, multi-factor biometric authentication, and access audits to protect Protected Health Information (PHI).
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              3. Data Collection and Usage
            </h2>
            <p>
              We collect information that you submit voluntarily through our Enquiry Forms, contact channels, or job application portals. This includes:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2 font-medium">
              <li>Contact details (Name, Email, 10-Digit Contact Number).</li>
              <li>Professional criteria (Company Name, technology interests).</li>
              <li>Technical records (IP address, web browser specs, routing logs).</li>
            </ul>
            <p>
              This data is processed solely to fulfill your service requests, schedule architectural audits, evaluate hiring submissions, or maintain web portal availability.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              4. Data Retention & Safeguards
            </h2>
            <p>
              GangaTara stores personal database records only for as long as necessary to fulfill the business purposes outlined in this policy or to comply with statutory retention laws. We use industry-standard encryption protocols (TLS 1.3 for data in transit and AES-256 for data at rest) to safeguard all records against unauthorized access, leakage, or loss.
            </p>
          </section>

          <section className="flex flex-col gap-3 border-t border-light/10 dark:border-white/5 pt-6 mt-4">
            <h2 className="text-base font-poppins font-bold text-dark dark:text-light">
              Contact Our Security Squad
            </h2>
            <p>
              For privacy audits, GDPR data extraction requests, or queries regarding our ISO 27001 control protocols, please reach out to our privacy management team:
            </p>
            <div className="text-xs text-dark/60 dark:text-light/60">
              Email: <a href="mailto:privacy@gangatara.com" className="text-primary hover:underline font-bold">privacy@gangatara.com</a> | Phone: +91 9009494056 (APAC Support Hub)
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
