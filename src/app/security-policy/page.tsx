import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'Security Policy - GangaTara Technologies',
  description: 'GangaTara Technologies security policy, vulnerability disclosure process, and responsible disclosure program.',
};

export default function SecurityPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-light dark:bg-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary text-sm font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Security</p>
          </div>
          <h1 className="text-3xl font-poppins font-bold text-dark dark:text-white mb-3">Security Policy</h1>
          <p className="text-dark/55 dark:text-white/50 text-sm">Last updated: July 2026 | GangaTara Technologies</p>
        </div>

        <div className="prose prose-sm max-w-none text-dark/70 dark:text-white/65 space-y-8">
          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Our Security Commitment</h2>
            <p>GangaTara Technologies takes the security of our systems and client data seriously. We are ISO 27001:2022 certified and operate under a comprehensive Information Security Management System (ISMS) to protect confidentiality, integrity, and availability of data assets.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Security Certifications</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-dark dark:text-white">ISO/IEC 27001:2022</strong> — Information Security Management System</li>
              <li><strong className="text-dark dark:text-white">SOC 2 Type II</strong> — Trust Services Criteria (Security, Availability, Confidentiality)</li>
              <li><strong className="text-dark dark:text-white">GDPR Compliance</strong> — EU General Data Protection Regulation</li>
              <li><strong className="text-dark dark:text-white">HIPAA Ready</strong> — Healthcare data handling protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Website Security Measures</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>TLS 1.3 encryption on all data in transit</li>
              <li>HSTS headers with minimum 12-month max-age</li>
              <li>Content Security Policy (CSP) headers implemented</li>
              <li>Regular automated dependency vulnerability scanning</li>
              <li>DDoS protection via enterprise-grade CDN</li>
              <li>Automated web application firewall (WAF) rules</li>
              <li>90-day SSL certificate rotation schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Vulnerability Disclosure Program</h2>
            <p>We encourage responsible disclosure of security vulnerabilities. If you discover a security issue on our website or services:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Email details to <a href="mailto:security@gangatara.com" className="text-primary hover:text-secondary transition-colors">security@gangatara.com</a> with a clear description</li>
              <li>Include steps to reproduce, impact assessment, and any proof-of-concept</li>
              <li>Do not publicly disclose the vulnerability until we have had 90 days to investigate and remediate</li>
              <li>Do not access, modify, or delete any data beyond what is necessary to demonstrate the issue</li>
            </ol>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Response Commitment</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-dark dark:text-white">Acknowledgement:</strong> Within 2 business days</li>
              <li><strong className="text-dark dark:text-white">Initial assessment:</strong> Within 7 business days</li>
              <li><strong className="text-dark dark:text-white">Remediation timeline:</strong> Communicated within 14 business days</li>
              <li><strong className="text-dark dark:text-white">Critical vulnerabilities:</strong> Emergency patch within 24–72 hours</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Incident Response</h2>
            <p>In the event of a confirmed security incident affecting client data, GangaTara Technologies will notify affected parties within 72 hours of discovery, in accordance with GDPR Article 33 obligations. Notifications will include the nature of the breach, categories of data affected, and remediation steps taken.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Contact Our Security Team</h2>
            <p>
              Email: <a href="mailto:security@gangatara.com" className="text-primary hover:text-secondary transition-colors">security@gangatara.com</a><br />
              Encrypted communications via PGP key available upon request.<br />
              For urgent security matters: +91 9009494056 (24/7 incident hotline)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
