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
    <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[380px] z-[80] bg-[#57585E] border border-white/10 rounded-2xl shadow-2xl p-5">
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

// --- Footer -----------------------------------------------------------

export const Footer: React.FC = () => {
  const [showCookies, setShowCookies] = useState(false);
  const { t } = useLanguage();
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
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: 'https://facebook.com/gangataratechnologies',
      label: 'Facebook',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: 'https://youtube.com/@gangataratechnologies',
      label: 'YouTube',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.486 4.907 1.487 5.532 0 10.034-4.502 10.037-10.037.001-2.68-1.041-5.197-2.936-7.094-1.894-1.895-4.41-2.935-7.095-2.936-5.536 0-10.04 4.502-10.044 10.037-.002 1.83.476 3.62 1.383 5.185l-.998 3.642 3.746-.982zm11.585-6.844c-.302-.15-1.786-.88-2.063-.98-.276-.1-.478-.15-.678.15-.2.3-.777.98-.95 1.18-.173.2-.347.225-.648.075-.302-.15-1.272-.469-2.423-1.495-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.13-.611.135-.135.302-.35.453-.525.15-.175.2-.3.302-.5.101-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.244-.59-.493-.51-.678-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.276.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.105 3.215 5.099 4.51.712.308 1.267.493 1.701.631.714.227 1.365.195 1.879.118.572-.085 1.786-.73 2.037-1.435.252-.705.252-1.31.176-1.435-.076-.125-.277-.2-.578-.35z" />
        </svg>
      ),
      href: 'https://wa.me/919111903111',
      label: 'WhatsApp',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: 'https://instagram.com/gangataratechnologies',
      label: 'Instagram',
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
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> Indore, Madhya Pradesh</span>
                <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary" /> +91 9111903111</span>
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
