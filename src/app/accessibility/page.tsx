import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, Monitor, Type } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Declaration - GangaTara Technologies',
  description: 'GangaTara Technologies accessibility statement, WCAG 2.1 AA compliance, and assistive technology support information.',
};

export default function AccessibilityPage() {
  return (
    <div className="pt-28 pb-20 bg-light dark:bg-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary text-sm font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Eye className="w-5 h-5" />
            </div>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">Accessibility</p>
          </div>
          <h1 className="text-3xl font-poppins font-bold text-dark dark:text-white mb-3">Accessibility Declaration</h1>
          <p className="text-dark/55 dark:text-white/50 text-sm">Last updated: July 2026 | GangaTara Technologies</p>
        </div>

        <div className="prose prose-sm max-w-none text-dark/70 dark:text-white/65 space-y-8">
          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Our Commitment</h2>
            <p>GangaTara Technologies is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Conformance Status</h2>
            <p>This website strives to conform to the <strong className="text-dark dark:text-white">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible to people with disabilities.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Technical Specifications</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>HTML5 semantic markup throughout all pages</li>
              <li>ARIA landmark roles and labels on interactive elements</li>
              <li>Keyboard-navigable interface with visible focus indicators</li>
              <li>Color contrast ratios meeting WCAG AA (4.5:1 minimum)</li>
              <li>Descriptive alt text on all non-decorative images</li>
              <li>Responsive layout supporting zoom up to 400% without loss of content</li>
              <li>Skip-to-main-content link available on all pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Assistive Technology Support</h2>
            <p>Our website has been tested with the following assistive technologies:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Screen readers: NVDA, JAWS (Windows), VoiceOver (macOS/iOS), TalkBack (Android)</li>
              <li>Keyboard-only navigation</li>
              <li>Browser zoom and text resize</li>
              <li>High-contrast display modes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Known Limitations</h2>
            <p>While we aim for full compliance, some third-party embedded content (e.g., maps, video embeds) may not meet all accessibility requirements. We are actively working to address these limitations.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Feedback & Contact</h2>
            <p>We welcome feedback on the accessibility of our website. Please contact us:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Email: <a href="mailto:accessibility@gangatara.com" className="text-primary hover:text-secondary transition-colors">accessibility@gangatara.com</a></li>
              <li>Phone: +91 9111903111</li>
              <li>Response time: within 2 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Enforcement</h2>
            <p>If you are not satisfied with our response, you may contact the relevant national authority for disability-related matters in your jurisdiction.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
