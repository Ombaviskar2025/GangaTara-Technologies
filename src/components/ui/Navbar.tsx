'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Globe, Sun, Moon, Menu, X, ChevronDown, Phone, Mail, ArrowRight,
  Cloud, Cpu, Code2, Globe2, Smartphone, Shield, GitBranch, Palette, BarChart3,
  Workflow, Radio, TrendingUp, Megaphone, HeartPulse, DollarSign, ShoppingBag,
  GraduationCap, Factory, Truck, Car, Building, Landmark, Plane, Users, Award,
  BookOpen, Briefcase, Calendar, MapPin, ExternalLink, Sparkles,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage, Language } from '@/context/LanguageContext';
import { blogsData, jobsData, awardsData } from '@/data/companyData';
import { useContactModal } from '@/context/ContactModalContext';

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Cloud Solutions': <Cloud className="w-3.5 h-3.5" />,
  'AI & Machine Learning': <Cpu className="w-3.5 h-3.5" />,
  'Software Development': <Code2 className="w-3.5 h-3.5" />,
  'Web Development': <Globe2 className="w-3.5 h-3.5" />,
  'App Development': <Smartphone className="w-3.5 h-3.5" />,
  'Cybersecurity': <Shield className="w-3.5 h-3.5" />,
  'DevOps & GitOps': <GitBranch className="w-3.5 h-3.5" />,
  'UI/UX Design': <Palette className="w-3.5 h-3.5" />,
  'Data Analytics & BI': <BarChart3 className="w-3.5 h-3.5" />,
  'Blockchain & Web3': <Workflow className="w-3.5 h-3.5" />,
  'Internet of Things': <Radio className="w-3.5 h-3.5" />,
  'Digital Transformation': <TrendingUp className="w-3.5 h-3.5" />,
  'Digital Marketing': <Megaphone className="w-3.5 h-3.5" />,
};

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  'Healthcare': <HeartPulse className="w-3.5 h-3.5" />,
  'Finance & Banking': <DollarSign className="w-3.5 h-3.5" />,
  'Retail & E-commerce': <ShoppingBag className="w-3.5 h-3.5" />,
  'Education & EdTech': <GraduationCap className="w-3.5 h-3.5" />,
  'Manufacturing': <Factory className="w-3.5 h-3.5" />,
  'Logistics & Supply Chain': <Truck className="w-3.5 h-3.5" />,
  'Automobile & Mobility': <Car className="w-3.5 h-3.5" />,
  'Real Estate & PropTech': <Building className="w-3.5 h-3.5" />,
  'Government & Public': <Landmark className="w-3.5 h-3.5" />,
  'Travel & Hospitality': <Plane className="w-3.5 h-3.5" />,
};

// ─── Nav Structure ────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: 'What We Do',
    key: 'whatwedo',
    intro: {
      headline: 'Perpetually Adaptive Enterprise',
      body: 'GangaTara delivers cloud-native, AI-enhanced services that evolve alongside your business — from first line of code to global scale.',
      link: '/services',
    },
    columns: [
      {
        heading: 'Core Services',
        links: [
          { label: 'Cloud Solutions', href: '/services/cloud-solutions', icon: <Cloud className="w-3.5 h-3.5" /> },
          { label: 'AI & Machine Learning', href: '/services/ai-machine-learning', icon: <Cpu className="w-3.5 h-3.5" /> },
          { label: 'Software Development', href: '/services/software-development', icon: <Code2 className="w-3.5 h-3.5" /> },
          { label: 'Web Development', href: '/services/web-development', icon: <Globe2 className="w-3.5 h-3.5" /> },
          { label: 'App Development', href: '/services/application-development', icon: <Smartphone className="w-3.5 h-3.5" /> },
          { label: 'Cybersecurity', href: '/services/cyber-security', icon: <Shield className="w-3.5 h-3.5" /> },
        ],
      },
      {
        heading: 'Digital Solutions',
        links: [
          { label: 'DevOps & GitOps', href: '/services/devops', icon: <GitBranch className="w-3.5 h-3.5" /> },
          { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: <Palette className="w-3.5 h-3.5" /> },
          { label: 'Data Analytics & BI', href: '/services/data-analytics', icon: <BarChart3 className="w-3.5 h-3.5" /> },
          { label: 'Blockchain & Web3', href: '/services/blockchain', icon: <Workflow className="w-3.5 h-3.5" /> },
          { label: 'IoT Solutions', href: '/services/iot-solutions', icon: <Radio className="w-3.5 h-3.5" /> },
          { label: 'Digital Marketing', href: '/services/digital-marketing', icon: <Megaphone className="w-3.5 h-3.5" /> },
        ],
      },
      {
        heading: 'By Industry',
        links: [
          { label: 'Healthcare', href: '/industries/healthcare', icon: <HeartPulse className="w-3.5 h-3.5" /> },
          { label: 'Finance & Banking', href: '/industries/finance', icon: <DollarSign className="w-3.5 h-3.5" /> },
          { label: 'Retail & E-commerce', href: '/industries/retail', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
          { label: 'Manufacturing', href: '/industries/manufacturing', icon: <Factory className="w-3.5 h-3.5" /> },
          { label: 'Government & Public', href: '/industries/government', icon: <Landmark className="w-3.5 h-3.5" /> },
          { label: 'Education & EdTech', href: '/industries/education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
        ],
      },
    ],
    footerLink: { label: 'View All Services', href: '/services' },
  },
  {
    label: 'Who We Are',
    key: 'whoweare',
    intro: {
      headline: 'Built on Trust, Driven by Innovation',
      body: 'More than a decade of engineering excellence across APAC and EMEA — delivering measurable outcomes for global enterprises.',
      link: '/about',
    },
    columns: [
      {
        heading: 'Company',
        links: [
          { label: 'About GangaTara', href: '/about', icon: <Users className="w-3.5 h-3.5" /> },
          { label: 'Leadership Team', href: '/about#leadership', icon: <Award className="w-3.5 h-3.5" /> },
          { label: 'Culture & Values', href: '/about#culture', icon: <Sparkles className="w-3.5 h-3.5" /> },
          { label: 'Awards & Recognition', href: '/about#awards', icon: <Award className="w-3.5 h-3.5" /> },
        ],
      },
      {
        heading: 'Global Presence',
        links: [
          { label: 'APAC HQ — Pune, India', href: '/contact', icon: <MapPin className="w-3.5 h-3.5" /> },
          { label: 'EMEA Office — Munich, Germany', href: '/contact', icon: <MapPin className="w-3.5 h-3.5" /> },
          { label: 'Partner Network', href: '/about#partners', icon: <Globe2 className="w-3.5 h-3.5" /> },
          { label: 'Certifications', href: '/about#certifications', icon: <Shield className="w-3.5 h-3.5" /> },
        ],
      },
    ],
    // Live strip: recent awards
    liveStrip: {
      type: 'awards' as const,
      heading: 'Recent Recognitions',
    },
    footerLink: { label: 'Our Full Story', href: '/about' },
  },
  {
    label: 'Insights',
    key: 'insights',
    intro: {
      headline: 'Knowledge Drives Transformation',
      body: 'Our engineers publish research on cloud architectures, AI pipelines, cybersecurity, and enterprise modernization.',
      link: '/insights',
    },
    columns: [
      {
        heading: 'Knowledge Hub',
        links: [
          { label: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-3.5 h-3.5" /> },
          { label: 'Insights & Reports', href: '/insights', icon: <TrendingUp className="w-3.5 h-3.5" /> },
          { label: 'Technology Stack', href: '/technologies', icon: <Code2 className="w-3.5 h-3.5" /> },
          { label: 'Products Portfolio', href: '/products', icon: <Sparkles className="w-3.5 h-3.5" /> },
        ],
      },
    ],
    // Live strip: latest blog posts
    liveStrip: {
      type: 'blogs' as const,
      heading: 'Latest Articles',
    },
    footerLink: { label: 'Explore All Insights', href: '/insights' },
  },
  {
    label: 'Careers',
    key: 'careers',
    intro: {
      headline: 'Seize the Future. Build with Purpose.',
      body: 'Join 500+ engineers across Pune, Munich, and Singapore. Hybrid, remote, and on-site roles available globally.',
      link: '/careers',
    },
    columns: [
      {
        heading: 'Work at GangaTara',
        links: [
          { label: 'Open Positions', href: '/careers', icon: <Briefcase className="w-3.5 h-3.5" /> },
          { label: 'Life at GangaTara', href: '/careers#culture', icon: <Sparkles className="w-3.5 h-3.5" /> },
          { label: 'Benefits & Perks', href: '/careers#benefits', icon: <Award className="w-3.5 h-3.5" /> },
          { label: 'Internships', href: '/careers#internships', icon: <GraduationCap className="w-3.5 h-3.5" /> },
        ],
      },
    ],
    // Live strip: open jobs
    liveStrip: {
      type: 'jobs' as const,
      heading: 'Featured Openings',
    },
    footerLink: { label: 'View All Jobs', href: '/careers' },
  },
  {
    label: 'Industries',
    key: 'industries',
    href: '/industries',
  },
];

// ─── Mega Menu Live Strip ─────────────────────────────────────────────────────

const MegaMenuLiveStrip: React.FC<{ type: 'blogs' | 'jobs' | 'awards'; heading: string }> = ({ type, heading }) => {
  const items =
    type === 'blogs'
      ? blogsData.slice(0, 3).map((b) => ({ label: b.title, sub: b.date + ' · ' + b.readTime, href: `/blog/${b.slug}` }))
      : type === 'jobs'
      ? jobsData.slice(0, 3).map((j) => ({ label: j.title, sub: j.location + ' · ' + j.type, href: '/careers' }))
      : awardsData.slice(0, 3).map((a) => ({ label: a.title, sub: a.issuer + ' · ' + a.year, href: '/about' }));

  return (
    <div className="border-t border-white/6 px-7 py-5">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 mb-3">{heading}</p>
      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="flex items-start gap-2.5 group/strip">
            <span className="w-1 h-1 mt-1.5 rounded-full bg-primary shrink-0" />
            <div>
              <p className="text-[12px] text-white/70 group-hover/strip:text-white transition-colors leading-tight font-medium line-clamp-1">
                {item.label}
              </p>
              <p className="text-[10px] text-white/30 mt-0.5">{item.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ─── Mega Menu Panel ──────────────────────────────────────────────────────────

interface MegaMenuPanelProps {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActivePath: (href: string) => boolean;
}

const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({ item, isActive, onMouseEnter, onMouseLeave, isActivePath }) => {
  if (!item.columns) return null;
  const colCount = item.columns.length;
  const panelWidth = colCount === 3 ? 860 : colCount === 2 ? 580 : 360;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-[64px] left-0 bg-[#0D1526] border border-white/8 rounded-b-2xl shadow-2xl shadow-black/60 z-50 overflow-hidden"
          style={{ width: panelWidth }}
          role="menu"
        >
          {/* Intro CTA Block */}
          {item.intro && (
            <div className="px-7 pt-6 pb-5 border-b border-white/6 flex items-start justify-between gap-6">
              <div className="flex-1">
                <p className="text-[13px] font-bold text-white mb-1">{item.intro.headline}</p>
                <p className="text-[12px] text-white/50 leading-relaxed">{item.intro.body}</p>
              </div>
              <Link
                href={item.intro.link}
                className="shrink-0 mt-0.5 text-primary text-[11px] font-semibold hover:text-secondary flex items-center gap-1 transition-colors"
              >
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}

          {/* Link Columns */}
          <div
            className={`p-7 grid gap-8 ${colCount === 3 ? 'grid-cols-3' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}
          >
            {item.columns.map((col, ci) => (
              <div key={ci}>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-primary mb-4">{col.heading}</p>
                <ul className="flex flex-col gap-0.5">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={`flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-[12.5px] font-medium transition-all group/link -mx-2
                          ${isActivePath(link.href) ? 'text-primary bg-primary/6' : 'text-white/60 hover:text-white hover:bg-white/4'}
                        `}
                      >
                        <span className={`shrink-0 transition-colors ${isActivePath(link.href) ? 'text-primary' : 'text-white/30 group-hover/link:text-primary'}`}>
                          {link.icon}
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Live data strip */}
          {(item as any).liveStrip && (
            <MegaMenuLiveStrip type={(item as any).liveStrip.type} heading={(item as any).liveStrip.heading} />
          )}

          {/* Footer row */}
          {item.footerLink && (
            <div className="border-t border-white/6 px-7 py-3.5 flex items-center justify-between bg-white/[0.02]">
              <p className="text-white/25 text-[10px] font-medium">GangaTara Technologies · Enterprise IT Partner</p>
              <Link
                href={item.footerLink.href}
                className="text-primary text-[12px] font-semibold hover:text-secondary flex items-center gap-1 transition-colors"
              >
                {item.footerLink.label} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Navbar Component ─────────────────────────────────────────────────────────

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { openModal } = useContactModal();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [topBarHeight, setTopBarHeight] = useState(32);

  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'FR', label: 'Français' },
    { code: 'JA', label: '日本語' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
    megaMenuTimeout.current = setTimeout(() => setActiveMegaMenu(null), 130);
  };

  const isActivePath = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const headerTop = isScrolled ? 0 : topBarHeight;

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
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Search GangaTara</p>
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
              <p className="text-white/25 text-[11px] mt-3">Press ESC to close.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top Utility Bar ── */}
      <div className="bg-[#050A14] text-white/55 text-[10px] py-1.5 px-6 hidden sm:flex justify-between items-center z-40 relative border-b border-white/5 h-8">
        <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Phone className="w-3 h-3 text-primary" />
              Enquiry: +91 9009494056
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Mail className="w-3 h-3 text-primary" />
              info@gangatara.com
            </span>
          </div>
          <span className="text-white/25 hidden md:block font-medium tracking-widest uppercase text-[9px]">
            Enterprise IT · Global Delivery · ISO 27001 Certified
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
        style={{ top: isScrolled ? 0 : 32 }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-[64px] flex items-center justify-between gap-6">

          {/* Logo */}
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
              <span className="text-white/35 text-[8px] uppercase tracking-[0.18em] font-medium">Technologies</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center h-full flex-1" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative h-[64px] flex items-center px-4 text-[13px] font-medium tracking-wide transition-colors group
                    ${isActivePath(item.href) ? 'text-white' : 'text-white/60 hover:text-white'}
                  `}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-t-full transition-transform origin-left duration-200
                    ${isActivePath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `} />
                </Link>
              ) : (
                <div
                  key={item.key}
                  onMouseEnter={() => handleMenuEnter(item.key)}
                  onMouseLeave={handleMenuLeave}
                  className="relative h-[64px] flex items-center"
                >
                  <button
                    className={`h-full flex items-center gap-1 px-4 text-[13px] font-medium tracking-wide transition-colors group cursor-pointer relative
                      ${activeMegaMenu === item.key ? 'text-white' : 'text-white/60 hover:text-white'}
                    `}
                    aria-expanded={activeMegaMenu === item.key}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === item.key ? 'rotate-180 text-primary' : ''}`} />
                    <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-t-full transition-transform origin-left duration-200
                      ${activeMegaMenu === item.key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `} />
                  </button>

                  <MegaMenuPanel
                    item={item}
                    isActive={activeMegaMenu === item.key}
                    onMouseEnter={() => handleMenuEnter(item.key)}
                    onMouseLeave={handleMenuLeave}
                    isActivePath={isActivePath}
                  />
                </div>
              )
            )}
          </nav>

          {/* Right Controls — Desktop */}
          <div className="hidden xl:flex items-center gap-1 shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
                aria-expanded={isLangOpen}
                aria-label="Select language"
              >
                <Globe className="w-[17px] h-[17px]" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 3 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-[#0D1526] border border-white/8 rounded-xl shadow-xl z-50 overflow-hidden"
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

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-[17px] h-[17px]" /> : <Moon className="w-[17px] h-[17px]" />}
            </button>

            <div className="w-px h-5 bg-white/10 mx-1" />

            <button
              onClick={openModal}
              className="text-[13px] font-medium text-white/60 hover:text-white px-2 py-1 transition-colors tracking-wide cursor-pointer bg-transparent border-0 outline-none"
            >
              Contact Us
            </button>

            <button
              onClick={openModal}
              className="ml-2 px-5 py-2 bg-primary hover:bg-secondary text-white text-[12px] font-bold rounded-lg transition-colors shadow-md shadow-primary/20 cursor-pointer border-0 outline-none"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Toggle theme">
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 right-0 w-[320px] h-full bg-[#0B1120] border-l border-white/8 z-50 xl:hidden flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-black text-xs">GT</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white font-poppins font-bold text-sm">GangaTara</span>
                    <span className="text-white/35 text-[8px] uppercase tracking-widest">Technologies</span>
                  </div>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/50 hover:text-white cursor-pointer" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer links */}
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
                              {/* Intro */}
                              {item.intro && (
                                <div className="mx-4 mb-2 p-3 rounded-lg bg-white/3 border border-white/6">
                                  <p className="text-[11px] font-bold text-white mb-0.5">{item.intro.headline}</p>
                                  <p className="text-[10px] text-white/40 leading-relaxed">{item.intro.body}</p>
                                </div>
                              )}
                              <div className="ml-4 mt-1 mb-2 flex flex-col gap-3 px-2 py-2 border-l border-white/8">
                                {item.columns.map((col, ci) => (
                                  <div key={ci}>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2">{col.heading}</p>
                                    {col.links.map((link, li) => (
                                      <Link
                                        key={li}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-2 py-1.5 px-2 text-[13px] text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/4"
                                      >
                                        <span className="text-white/30">{link.icon}</span>
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

              {/* Drawer footer */}
              <div className="border-t border-white/8 px-6 py-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white/35 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +91 9009494056
                </div>
                <div className="flex items-center gap-2 text-white/35 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  info@gangatara.com
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="mt-2 w-full py-3 rounded-xl bg-primary hover:bg-secondary text-white text-[13px] font-bold text-center transition-colors cursor-pointer border-0 outline-none"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
