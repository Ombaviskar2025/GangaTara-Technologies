'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Sun, Moon, Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage, Language } from '@/context/LanguageContext';
import { servicesData, industriesData } from '@/data/companyData';

// ─── Nav Menu Structure ─────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: 'What We Do',
    key: 'whatwedo',
    columns: [
      {
        heading: 'Core Services',
        links: [
          { label: 'Web Development', href: '/services/web-development' },
          { label: 'App Development', href: '/services/application-development' },
          { label: 'Cloud & DevOps', href: '/services/cloud-solutions' },
          { label: 'AI & Machine Learning', href: '/services/ai-ml-solutions' },
          { label: 'Cybersecurity', href: '/services/cybersecurity' },
          { label: 'IT Consulting', href: '/services/it-consulting' },
        ],
      },
      {
        heading: 'Digital Solutions',
        links: [
          { label: 'Digital Marketing', href: '/services/digital-marketing' },
          { label: 'ERP & SAP', href: '/services/erp-sap' },
          { label: 'Data Engineering', href: '/services/data-engineering' },
          { label: 'Blockchain', href: '/services/blockchain' },
          { label: 'IoT Solutions', href: '/services/iot-solutions' },
          { label: 'UI/UX Design', href: '/services/ui-ux-design' },
        ],
      },
      {
        heading: 'Industries',
        links: [
          { label: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
          { label: 'Banking & Finance', href: '/industries/banking-finance' },
          { label: 'Retail & E-commerce', href: '/industries/retail' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Education & EdTech', href: '/industries/education' },
          { label: 'Government & Public', href: '/industries/government' },
        ],
      },
    ],
    footerLink: { label: 'View All Services →', href: '/services' },
  },
  {
    label: 'Who We Are',
    key: 'whoweare',
    columns: [
      {
        heading: 'Company',
        links: [
          { label: 'About GangaTara', href: '/about' },
          { label: 'Our Leadership', href: '/about#leadership' },
          { label: 'Culture & Values', href: '/about#culture' },
          { label: 'Awards & Recognition', href: '/about#awards' },
        ],
      },
      {
        heading: 'Global Presence',
        links: [
          { label: 'APAC Headquarters – India', href: '/contact' },
          { label: 'EMEA Office – Germany', href: '/contact' },
          { label: 'Partner Network', href: '/about#partners' },
          { label: 'Certifications', href: '/about#certifications' },
        ],
      },
    ],
    footerLink: { label: 'Our Full Story →', href: '/about' },
  },
  {
    label: 'Insights',
    key: 'insights',
    columns: [
      {
        heading: 'Knowledge Hub',
        links: [
          { label: 'Blog & Articles', href: '/blog' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Insights & Reports', href: '/insights' },
          { label: 'Technology Trends', href: '/technologies' },
          { label: 'Products Portfolio', href: '/products' },
        ],
      },
    ],
    footerLink: { label: 'Explore Knowledge Hub →', href: '/insights' },
  },
  {
    label: 'Careers',
    key: 'careers',
    href: '/careers',
  },
  {
    label: 'Industries',
    key: 'industries',
    href: '/industries',
  },
];

// ─── Navbar Component ────────────────────────────────────────────────────────

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'FR', label: 'Français' },
    { code: 'JA', label: '日本語' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // ESC key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setActiveMegaMenu(null);
        setIsLangOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMenuEnter = (key: string) => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setActiveMegaMenu(key);
  };

  const handleMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setActiveMegaMenu(null), 120);
  };

  const isActivePath = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      {/* ── Search Overlay ── */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0B1120]/97 z-[60] flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-2xl">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Search GangaTara</p>
              <div className="relative border-b-2 border-white/20 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search services, insights, industries…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/25 text-2xl py-4 pr-12 focus:outline-none"
                  autoFocus
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 w-6 h-6" />
              </div>
              <p className="text-white/30 text-[11px] mt-3">Press ESC to close.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top Utility Bar ── */}
      <div className="bg-[#050A14] text-white/60 text-[10px] py-1.5 px-6 hidden sm:flex justify-between items-center z-40 relative border-b border-white/5">
        <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-primary" />
              Enquiry: +91 9009494056
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-primary" />
              info@gangatara.com
            </span>
          </div>
          <span className="text-white/30 hidden md:block font-medium tracking-wider uppercase text-[9px]">
            Enterprise IT Solutions · Global Delivery
          </span>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        role="banner"
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1120]/98 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/30'
            : 'bg-[#0B1120] border-b border-white/6'
        }`}
        style={{ top: isScrolled ? '0px' : typeof window !== 'undefined' && window.innerWidth >= 640 ? '32px' : '0px' }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-[64px] flex items-center justify-between gap-8">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="GangaTara Technologies – Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <span className="text-white font-black text-sm tracking-tight">GT</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-poppins font-bold text-[15px] tracking-wide leading-tight group-hover:text-primary/90 transition-colors">
                GangaTara
              </span>
              <span className="text-white/40 text-[8px] uppercase tracking-[0.18em] font-medium">
                Technologies
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden xl:flex items-center h-full"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => (
              item.href ? (
                // Simple link (no dropdown)
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative h-[64px] flex items-center px-4 text-[13px] font-medium tracking-wide transition-colors group
                    ${isActivePath(item.href) ? 'text-white' : 'text-white/65 hover:text-white'}
                  `}
                >
                  {item.label}
                  {/* Active / Hover underline */}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-t-full transition-transform origin-left duration-200
                    ${isActivePath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `} />
                </Link>
              ) : (
                // Dropdown trigger
                <div
                  key={item.key}
                  onMouseEnter={() => handleMenuEnter(item.key)}
                  onMouseLeave={handleMenuLeave}
                  className="relative h-[64px] flex items-center"
                >
                  <button
                    className={`h-full flex items-center gap-1 px-4 text-[13px] font-medium tracking-wide transition-colors group cursor-pointer relative
                      ${activeMegaMenu === item.key ? 'text-white' : 'text-white/65 hover:text-white'}
                    `}
                    aria-expanded={activeMegaMenu === item.key}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === item.key ? 'rotate-180 text-primary' : ''}`} />
                    {/* Hover / active underline */}
                    <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-t-full transition-transform origin-left duration-200
                      ${activeMegaMenu === item.key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `} />
                  </button>

                  {/* ── Mega Menu Panel ── */}
                  <AnimatePresence>
                    {activeMegaMenu === item.key && item.columns && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        onMouseEnter={() => handleMenuEnter(item.key)}
                        onMouseLeave={handleMenuLeave}
                        className="absolute top-[64px] left-0 bg-[#0D1526] border border-white/8 rounded-b-2xl shadow-2xl shadow-black/50 z-50 min-w-[220px]"
                        style={{ width: item.columns.length === 3 ? '780px' : item.columns.length === 2 ? '520px' : '260px' }}
                        role="menu"
                      >
                        <div className={`p-7 grid gap-8 ${item.columns.length === 3 ? 'grid-cols-3' : item.columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {item.columns.map((col, ci) => (
                            <div key={ci}>
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                                {col.heading}
                              </p>
                              <ul className="flex flex-col gap-1">
                                {col.links.map((link, li) => (
                                  <li key={li}>
                                    <Link
                                      href={link.href}
                                      role="menuitem"
                                      className={`block py-1.5 text-[13px] font-medium transition-all group/link
                                        ${isActivePath(link.href) ? 'text-primary' : 'text-white/60 hover:text-white'}
                                      `}
                                    >
                                      <span className="flex items-center gap-2">
                                        <span className="w-0 group-hover/link:w-2.5 h-[1.5px] bg-primary rounded-full transition-all duration-200 shrink-0" />
                                        {link.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Footer CTA row */}
                        {item.footerLink && (
                          <div className="border-t border-white/6 px-7 py-3.5 flex items-center justify-between">
                            <p className="text-white/30 text-[11px]">GangaTara Technologies · Enterprise IT Partner</p>
                            <Link
                              href={item.footerLink.href}
                              className="text-primary text-[12px] font-semibold hover:text-secondary flex items-center gap-1 transition-colors"
                            >
                              {item.footerLink.label}
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            ))}
          </nav>

          {/* ── Right Controls ── */}
          <div className="hidden xl:flex items-center gap-1 shrink-0">

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
              aria-label="Search site"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Language / Region */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer text-[12px] font-medium"
                aria-label="Select language or region"
                aria-expanded={isLangOpen}
              >
                <Globe className="w-[17px] h-[17px]" />
                <span className="hidden 2xl:inline-block">Global ({language})</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-[#0D1526] border border-white/8 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors cursor-pointer
                          ${language === lang.code ? 'text-primary bg-primary/8' : 'text-white/60 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-[17px] h-[17px]" /> : <Moon className="w-[17px] h-[17px]" />}
            </button>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* Contact Us – plain text style link (TCS convention) */}
            <Link
              href="/contact"
              className="text-[13px] font-medium text-white/70 hover:text-white px-2 py-1 transition-colors tracking-wide"
            >
              Contact Us
            </Link>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-primary hover:bg-secondary text-white text-[12px] font-bold rounded-lg transition-colors shadow-md shadow-primary/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 right-0 w-[320px] h-full bg-[#0B1120] border-l border-white/8 z-50 xl:hidden flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-black text-xs">GT</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white font-poppins font-bold text-sm">GangaTara</span>
                    <span className="text-white/40 text-[8px] uppercase tracking-widest">Technologies</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer nav links */}
              <div className="flex-1 px-4 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.key}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-colors
                          ${isActivePath(item.href) ? 'text-primary bg-primary/8' : 'text-white/70 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        {item.label}
                        <ArrowRight className="w-4 h-4 opacity-40" />
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-colors cursor-pointer
                            ${mobileExpanded === item.key ? 'text-white bg-white/8' : 'text-white/70 hover:text-white hover:bg-white/5'}
                          `}
                          aria-expanded={mobileExpanded === item.key}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.key ? 'rotate-180 text-primary' : 'opacity-40'}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.key && item.columns && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 mb-2 flex flex-col gap-4 px-2 py-3 border-l border-white/8">
                                {item.columns.map((col, ci) => (
                                  <div key={ci}>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2">
                                      {col.heading}
                                    </p>
                                    {col.links.map((link, li) => (
                                      <Link
                                        key={li}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-1.5 px-2 text-[13px] text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/4"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer footer CTAs */}
              <div className="border-t border-white/8 px-6 py-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white/40 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +91 9009494056
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  info@gangatara.com
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 w-full py-3 rounded-xl bg-primary hover:bg-secondary text-white text-[13px] font-bold text-center transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
