'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, ArrowRight, Heart, Cookie } from 'lucide-react';
import { servicesData } from '@/data/companyData';

// ─── Cookie Preference Banner (inline toggle) ─────────────────────────────────
const CookiePreferences: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [prefs, setPrefs] = useState({ essential: true, analytics: true, marketing: false });

  const toggle = (key: keyof typeof prefs) => {
    if (key === 'essential') return; // Essential always on
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  const save = () => {
    // In production, persist to localStorage / cookie consent API
    if (typeof window !== 'undefined') {
      localStorage.setItem('gt_cookie_prefs', JSON.stringify(prefs));
    }
    onClose();
  };

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[380px] z-[80] bg-[#2B2D31] border border-white/10 rounded-2xl shadow-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Cookie className="w-4 h-4 text-primary" />
          <p className="text-white font-bold text-[13px]">Cookie Preferences</p>
        </div>
        <button onClick={onClose} className="text-white/30 hover:text-white text-xs cursor-pointer">✕</button>
      </div>
      <p className="text-white/45 text-[11px] leading-relaxed mb-4">
        We use cookies to enhance your experience. Choose your preferences:
      </p>
      {[
        { key: 'essential', label: 'Essential', desc: 'Required for the site to function.' },
        { key: 'analytics', label: 'Analytics', desc: 'Help us understand usage patterns.' },
        { key: 'marketing', label: 'Marketing', desc: 'Personalized advertisements.' },
      ].map(({ key, label, desc }) => (
        <div key={key} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
          <div>
            <p className="text-white text-[12px] font-semibold">{label}</p>
            <p className="text-white/35 text-[10px]">{desc}</p>
          </div>
          <button
            onClick={() => toggle(key as keyof typeof prefs)}
            className={`relative w-10 h-5.5 rounded-full transition-colors cursor-pointer shrink-0 ${
              prefs[key as keyof typeof prefs] ? 'bg-primary' : 'bg-white/15'
            } ${key === 'essential' ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={key === 'essential'}
            aria-checked={prefs[key as keyof typeof prefs]}
            role="switch"
          >
            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${prefs[key as keyof typeof prefs] ? 'left-5' : 'left-0.5'}`} />
          </button>
        </div>
      ))}
      <button
        onClick={save}
        className="mt-4 w-full py-2.5 bg-primary hover:bg-secondary text-white text-[12px] font-bold rounded-xl transition-colors cursor-pointer"
      >
        Save Preferences
      </button>
    </div>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [showCookies, setShowCookies] = useState(false);

  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: 'https://linkedin.com/company/gangatara-technologies',
      label: 'LinkedIn',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: 'https://twitter.com/gangataratech',
      label: 'Twitter / X',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: 'https://github.com/Ombaviskar2025/GangaTara-Technologies',
      label: 'GitHub',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: 'https://facebook.com/gangataratechnologies',
      label: 'Facebook',
    },
  ];

  return (
    <>
      {/* Cookie preference panel */}
      {showCookies && <CookiePreferences onClose={() => setShowCookies(false)} />}

      <footer className="relative bg-dark dark:bg-dark text-white border-t border-white/5 pt-20 pb-10 overflow-hidden">
        {/* Background radial glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-2 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-white font-extrabold text-lg">GT</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-lg leading-tight tracking-wider text-white">GangaTara</span>
                  <span className="text-[9px] uppercase tracking-widest text-primary font-semibold">Technologies</span>
                </div>
              </Link>

              <p className="text-xs text-white/55 leading-relaxed max-w-sm">
                {t('footer.description')}
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:bg-primary text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold tracking-wider uppercase text-white/90">{t('footer.quickLinks')}</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-white/50">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Technologies', href: '/technologies' },
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Products', href: '/products' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Blog', href: '/blog' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-1 group">
                      {link.label}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold tracking-wider uppercase text-white/90">{t('footer.services')}</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-white/50">
                {servicesData.slice(0, 6).map((srv) => (
                  <li key={srv.id}>
                    <Link href={`/services/${srv.id}`} className="hover:text-primary transition-colors">
                      {srv.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-bold tracking-wider uppercase text-white/90">{t('nav.contact')}</h4>
              <div className="flex flex-col gap-2.5 text-xs text-white/50">
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> Pune, India | Munich, Germany</span>
                <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary" /> +91 9009494056</span>
                <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary" /> info@gangatara.com</span>
              </div>
            </div>
          </div>

          {/* Legal links row */}
          <div className="border-t border-white/5 pt-6 mb-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-white/35">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
              <Link href="/terms-conditions" className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">{t('footer.cookies')}</Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility Declaration</Link>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
              <Link href="/security-policy" className="hover:text-primary transition-colors">Security Policy</Link>
              <button
                onClick={() => setShowCookies(true)}
                className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Cookie className="w-3 h-3" /> Customize Cookies
              </button>
            </div>
          </div>

          {/* Bottom copyright bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} GangaTara Technologies. {t('footer.rights')}
              <span className="hidden sm:inline ml-1">| Made with <Heart className="w-3 h-3 text-red-500 fill-current inline" /> by GangaTara Technologies</span>
            </p>
            <p className="text-[10px]">ISO 27001:2022 Certified · GDPR Compliant · SOC 2 Type II</p>
          </div>
        </div>
      </footer>
    </>
  );
};
