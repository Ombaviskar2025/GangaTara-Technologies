'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Globe, Sun, Moon, Menu, X, ChevronDown, 
  ArrowRight, Laptop, Shield, Cpu, Cloud, Database,
  Phone, Mail
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage, Language } from '@/context/LanguageContext';
import { servicesData, industriesData } from '@/data/companyData';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'industries' | 'tech' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Monitor scroll to apply sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'FR', label: 'Français' },
    { code: 'JA', label: '日本語' }
  ];

  return (
    <>
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/95 z-50 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/5 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('nav.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/20 text-white placeholder-white/30 text-xl py-4 pl-4 pr-12 focus:outline-none focus:border-primary transition-colors"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-6 h-6" />
              </div>
              <p className="text-white/40 text-xs mt-3">Press ESC to close. Try searching "Cloud" or "AI Solutions".</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Contact Bar */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center z-45 relative border-b border-white/5 h-[36px]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-primary" /> Enquiry Now: +91 9009494056</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-primary" /> Write Us: info@gangatara.com</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/50 text-[10px] uppercase font-bold tracking-widest">
            <span>Enterprise Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-light/85 dark:bg-dark/85 backdrop-blur-md shadow-lg border-b border-light/10 dark:border-white/5 py-4 top-0' 
            : 'bg-transparent py-6'
        }`}
        style={{ top: isScrolled ? '0px' : '36px' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-extrabold text-lg">GT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg leading-tight tracking-wider text-dark dark:text-light group-hover:text-primary transition-colors">
                GangaTara
              </span>
              <span className="text-[9px] uppercase tracking-widest text-primary font-semibold">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-4">
            <Link 
              href="/" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.home')}
            </Link>

            <Link 
              href="/about" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/about' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.about')}
            </Link>

            {/* Services Dropdown Trigger */}
            <div 
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="relative py-2"
            >
              <button className="flex items-center gap-1 text-[13px] font-semibold text-dark/80 dark:text-light/80 hover:text-primary transition-colors cursor-pointer">
                {t('nav.services')} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Services */}
              <AnimatePresence>
                {activeMegaMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-[850px] p-6 rounded-2xl glass-panel shadow-2xl border border-light/20 dark:border-white/5 grid grid-cols-3 gap-8 bg-light/95 dark:bg-dark/95 backdrop-blur-xl"
                  >
                    {/* Column 1: Web Development */}
                    <Link 
                      href="/services/web-development"
                      className="p-4 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/10 transition-all group flex flex-col items-center text-center text-dark dark:text-light"
                    >
                      <svg viewBox="0 0 200 120" className="w-full h-24 mb-4 text-primary group-hover:scale-105 transition-transform duration-300">
                        <rect x="30" y="10" width="80" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="30" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
                        <line x1="70" y1="60" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
                        <line x1="60" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="2" />
                        <circle cx="130" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M115,75 C115,65 145,65 145,75" fill="none" stroke="currentColor" strokeWidth="2" />
                        <rect x="120" y="68" width="20" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M10,35 L20,30 L20,40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M170,30 L160,35 L170,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="160" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <h4 className="text-sm font-bold text-dark dark:text-light group-hover:text-primary transition-colors flex items-center gap-2">
                        Web Development <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-[11px] text-dark/60 dark:text-light/60 mt-1">Settle/Shift Online</p>
                    </Link>

                    {/* Column 2: Application Development */}
                    <Link 
                      href="/services/application-development"
                      className="p-4 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/10 transition-all group flex flex-col items-center text-center text-dark dark:text-light"
                    >
                      <svg viewBox="0 0 200 120" className="w-full h-24 mb-4 text-primary group-hover:scale-105 transition-transform duration-300">
                        <rect x="75" y="15" width="50" height="90" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="95" y1="20" x2="105" y2="20" stroke="currentColor" strokeWidth="2" />
                        <circle cx="100" cy="100" r="3" fill="currentColor" />
                        <rect x="83" y="30" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
                        <rect x="107" y="30" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
                        <rect x="83" y="45" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
                        <rect x="107" y="45" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
                        <line x1="40" y1="90" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="70" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="40" cy="90" r="3" fill="currentColor" />
                        <circle cx="150" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="125" y1="45" x2="145" y2="35" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <h4 className="text-sm font-bold text-dark dark:text-light group-hover:text-primary transition-colors flex items-center gap-2">
                        Application Development <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-[11px] text-dark/60 dark:text-light/60 mt-1">Pocket In Pocket</p>
                    </Link>

                    {/* Column 3: Digital Marketing */}
                    <Link 
                      href="/services/digital-marketing"
                      className="p-4 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/10 transition-all group flex flex-col items-center text-center text-dark dark:text-light"
                    >
                      <svg viewBox="0 0 200 120" className="w-full h-24 mb-4 text-primary group-hover:scale-105 transition-transform duration-300">
                        <rect x="80" y="20" width="50" height="85" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="80" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1" />
                        <rect x="88" y="70" width="6" height="20" fill="currentColor" fillOpacity="0.3" />
                        <rect x="98" y="60" width="6" height="30" fill="currentColor" fillOpacity="0.5" />
                        <rect x="108" y="45" width="6" height="45" fill="currentColor" />
                        <circle cx="50" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M35,70 C35,60 65,60 65,70" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M120,40 L145,20 L155,30 M145,20 L135,22 M145,20 L143,30" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M90,75 L110,55 L145,20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                      </svg>
                      <h4 className="text-sm font-bold text-dark dark:text-light group-hover:text-primary transition-colors flex items-center gap-2">
                        Digital Marketing <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h4>
                      <p className="text-[11px] text-dark/60 dark:text-light/60 mt-1">Inside Virtual World Market</p>
                    </Link>

                    <div className="col-span-3 border-t border-light/20 dark:border-white/5 pt-4 flex items-center justify-between">
                      <p className="text-xs text-primary font-semibold">Looking for custom integration? Let us help you design it.</p>
                      <Link href="/services" className="text-xs font-bold text-dark dark:text-light hover:text-primary flex items-center gap-1 transition-colors">
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown Trigger */}
            <div 
              onMouseEnter={() => setActiveMegaMenu('industries')}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="relative py-2"
            >
              <button className="flex items-center gap-1 text-[13px] font-semibold text-dark/80 dark:text-light/80 hover:text-primary transition-colors cursor-pointer">
                {t('nav.industries')} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Industries */}
              <AnimatePresence>
                {activeMegaMenu === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] p-6 rounded-2xl glass-panel shadow-2xl border border-light/20 dark:border-white/5 grid grid-cols-2 gap-4 bg-light/95 dark:bg-dark/95 backdrop-blur-xl"
                  >
                    {industriesData.map((ind) => (
                      <Link 
                        key={ind.id} 
                        href={`/industries/${ind.id}`}
                        className="p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/10 transition-all group"
                      >
                        <h4 className="text-sm font-bold text-dark dark:text-light group-hover:text-primary transition-colors flex items-center gap-2">
                          {ind.title} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h4>
                        <p className="text-[11px] text-dark/60 dark:text-light/60 mt-1 line-clamp-1">{ind.shortDesc}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/technologies" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/technologies' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.technologies')}
            </Link>

            <Link 
              href="/case-studies" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/case-studies' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.caseStudies')}
            </Link>

            <Link 
              href="/products" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/products' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.products')}
            </Link>

            <Link 
              href="/careers" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/careers' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.careers')}
            </Link>

            <Link 
              href="/insights" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/insights' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.insights')}
            </Link>

            <Link 
              href="/blog" 
              className={`text-[13px] font-semibold hover:text-primary transition-colors ${pathname === '/blog' ? 'text-primary' : 'text-dark/80 dark:text-light/80'}`}
            >
              {t('nav.blog')}
            </Link>
          </nav>

          {/* Header Controls */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-dark/80 dark:text-light/80 hover:text-primary hover:bg-light/50 dark:hover:bg-white/5 rounded-xl transition-all cursor-pointer"
              aria-label="Search site"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="p-2 text-dark/80 dark:text-light/80 hover:text-primary hover:bg-light/50 dark:hover:bg-white/5 rounded-xl flex items-center gap-1 transition-all cursor-pointer text-xs font-semibold"
              >
                <Globe className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-2 w-36 bg-light dark:bg-dark border border-light/20 dark:border-white/5 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary cursor-pointer ${
                          language === lang.code ? 'text-primary bg-primary/5' : 'text-dark dark:text-light'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-dark/80 dark:text-light/80 hover:text-primary hover:bg-light/50 dark:hover:bg-white/5 rounded-xl transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>



            {/* Contact CTA */}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white font-semibold text-xs transition-colors shadow-md shadow-primary/15"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-dark/80 dark:text-light/80 rounded-xl hover:bg-light-hover dark:hover:bg-white/5 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark/80 dark:text-light/80 rounded-xl hover:bg-light-hover dark:hover:bg-white/5 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full sm:w-85 bg-light dark:bg-dark border-l border-light/10 dark:border-white/5 z-40 p-6 shadow-2xl flex flex-col gap-6 overflow-y-auto pt-24"
          >
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.home')}
              </Link>
              <Link href="/about" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.about')}
              </Link>
              <Link href="/services" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.services')}
              </Link>
              <Link href="/industries" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.industries')}
              </Link>
              <Link href="/technologies" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.technologies')}
              </Link>
              <Link href="/case-studies" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.caseStudies')}
              </Link>
              <Link href="/products" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.products')}
              </Link>
              <Link href="/careers" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.careers')}
              </Link>
              <Link href="/insights" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.insights')}
              </Link>
              <Link href="/blog" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.blog')}
              </Link>
              <Link href="/contact" className="text-base font-bold text-dark dark:text-light border-b border-light/10 dark:border-white/5 pb-2">
                {t('nav.contact')}
              </Link>
            </div>

            {/* Language Switcher Mobile */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-dark/40 dark:text-light/40 uppercase">Select Language</span>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      language === lang.code 
                        ? 'bg-primary text-white' 
                        : 'bg-light-hover dark:bg-white/5 text-dark dark:text-light border border-light/10 dark:border-white/5'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-auto flex flex-col gap-3">

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-xl bg-primary hover:bg-secondary text-white text-sm font-bold transition-colors shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
