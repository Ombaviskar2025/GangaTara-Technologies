import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer - GangaTara Technologies',
  description: 'GangaTara Technologies website disclaimer covering limitations of liability, accuracy of information, and third-party links.',
};

export default function DisclaimerPage() {
  return (
    <div className="pt-28 pb-20 bg-light dark:bg-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary text-sm font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <p className="text-xs uppercase tracking-widest text-amber-500 font-bold">Disclaimer</p>
          </div>
          <h1 className="text-3xl font-poppins font-bold text-dark dark:text-white mb-3">Website Disclaimer</h1>
          <p className="text-dark/55 dark:text-white/50 text-sm">Last updated: July 2026 | GangaTara Technologies</p>
        </div>

        <div className="prose prose-sm max-w-none text-dark/70 dark:text-white/65 space-y-8">
          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">General Information</h2>
            <p>The information provided on this website is for general informational purposes only. GangaTara Technologies makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, GangaTara Technologies shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your access to or use of this website or any information herein. This includes, without limitation:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Loss of data or business interruption</li>
              <li>Errors or omissions in content</li>
              <li>Unauthorized access to servers or personal data</li>
              <li>Bugs, viruses, or other harmful code transmitted via the site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Professional Advice</h2>
            <p>Nothing on this website constitutes legal, financial, technical, or professional advice. Before making any business or technical decisions, you should consult a qualified professional. Information about technology solutions, architecture recommendations, or industry best practices is provided as general guidance only.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Third-Party Links</h2>
            <p>This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of linked sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Case Studies & Testimonials</h2>
            <p>Case studies and testimonials featured on this website represent individual client experiences. Results may vary and are not a guarantee of future performance. All client names and details used with express written permission.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Changes to Disclaimer</h2>
            <p>GangaTara Technologies reserves the right to modify this disclaimer at any time. Changes are effective immediately upon posting. Continued use of this website following changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-dark dark:text-white font-bold text-lg mb-3">Contact</h2>
            <p>For questions regarding this disclaimer, contact us at <a href="mailto:legal@gangatara.com" className="text-primary hover:text-secondary transition-colors">legal@gangatara.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
