import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, ShieldAlert } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <Cookie className="w-3.5 h-3.5" /> Tracker Management
          </span>
          <h1 className="text-3xl sm:text-4xl font-poppins font-extrabold tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-dark/50 dark:text-light/50 mt-2 font-medium">
            Effective Date: July 2, 2026 | Version 1.2
          </p>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-8 text-xs sm:text-sm text-dark/80 dark:text-light/80 leading-relaxed font-sans">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary animate-spin-slow" /> 1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you browse websites. They are widely used to make portals work, improve browsing speeds, and provide business analytics telemetry to site administrators.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light">
              2. How We Use Cookies
            </h2>
            <p>
              GangaTara Technologies uses cookies to remember your display preferences (such as Light or Dark mode), analyze visitor navigation patterns, and support newsletter subscriptions. We group cookies into the following categories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-4">
              <div className="p-5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-light/10 dark:border-white/5 flex flex-col gap-2">
                <h4 className="font-bold text-dark dark:text-light text-xs uppercase tracking-wider">Essential</h4>
                <p className="text-[11px] text-dark/65 dark:text-light/65 leading-relaxed">
                  Strictly necessary to enable core site functionality (such as secure session tokens, language choices, and dark/light preference storage). They cannot be turned off.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-light/10 dark:border-white/5 flex flex-col gap-2">
                <h4 className="font-bold text-dark dark:text-light text-xs uppercase tracking-wider">Performance</h4>
                <p className="text-[11px] text-dark/65 dark:text-light/65 leading-relaxed">
                  Help us understand how visitors interact with GangaTara web portals (e.g., page load speeds, exit ratios, and popular services pages) using anonymous telemetry.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-light/10 dark:border-white/5 flex flex-col gap-2">
                <h4 className="font-bold text-dark dark:text-light text-xs uppercase tracking-wider">Marketing</h4>
                <p className="text-[11px] text-dark/65 dark:text-light/65 leading-relaxed">
                  Used to measure the conversion success of our search campaigns and direct-outreach initiatives, ensuring we deliver relevant tech publications to you.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" /> 3. Managing Your Preferences
            </h2>
            <p>
              Most modern web browsers allow you to manage cookie parameters through settings panels. You can configure your browser to block all cookies or notify you when a tracker is saved. Please note that disabling essential cookies may affect the usability and visual layouts of GangaTara web portals.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-poppins font-bold text-dark dark:text-light flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" /> 4. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time in response to shifting compliance standards or operational changes. We encourage you to review this page periodically to stay informed about our use of tracker telemetry.
            </p>
          </section>

          <section className="flex flex-col gap-3 border-t border-light/10 dark:border-white/5 pt-6 mt-4">
            <h2 className="text-base font-poppins font-bold text-dark dark:text-light">
              Questions About Tracking?
            </h2>
            <p>
              If you have queries regarding our cookie usage or analytical tracking details, please contact our information security team:
            </p>
            <div className="text-xs text-dark/60 dark:text-light/60">
              Email: <a href="mailto:security@gangatara.com" className="text-primary hover:underline font-bold">security@gangatara.com</a> | Phone: +91 9009494056
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
