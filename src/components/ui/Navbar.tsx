'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Globe, Sun, Moon, Menu, X, ChevronDown, ChevronRight, Phone, Mail, ArrowRight,
  Cloud, Cpu, Code2, Globe2, Smartphone, Shield, GitBranch, Palette, BarChart3,
  Workflow, Radio, TrendingUp, Megaphone, HeartPulse, DollarSign, ShoppingBag,
  GraduationCap, Factory, Truck, Car, Building, Landmark, Plane, Users, Award,
  BookOpen, Briefcase, Calendar, MapPin, ExternalLink, Sparkles, Mic2, Handshake,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage, Language } from '@/context/LanguageContext';
import { blogsData, jobsData, awardsData, servicesData, industriesData } from '@/data/companyData';

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
};

// ─── Nav Structure ────────────────────────────────────────────────────────────

const NAV_ITEMS: {
  label: string;
  key: string;
  href?: string;
  isNested?: boolean;
  intro?: { headline?: string; body?: string; link?: string };
  columns?: { heading: string; links: { label: string; href: string; icon: React.ReactNode }[] }[];
  liveStrip?: { type: 'blogs' | 'jobs' | 'awards'; heading: string };
  footerLink?: { label: string; href: string };
}[] = [
  {
    label: 'What We Do',
    key: 'whatwedo',
    isNested: true,
  },
  {
    label: 'Who We Are',
    key: 'whoweare',
    intro: {
      headline: 'Built on Trust, Driven by Innovation',
    },
    columns: [
      {
        heading: 'Company',
        links: [
          { label: 'About GangaTara', href: '/about', icon: <Users className="w-3.5 h-3.5" /> },
          { label: 'Leadership Team', href: '/about#leadership', icon: <Award className="w-3.5 h-3.5" /> },
          { label: 'Awards & Recognition', href: '/about#awards', icon: <Award className="w-3.5 h-3.5" /> },
        ],
      },
      {
        heading: 'Global Presence',
        links: [
          { label: 'Indore Madhya-Pradesh', href: '/contact', icon: <MapPin className="w-3.5 h-3.5" /> },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    key: 'insights',
    intro: {
      headline: 'Knowledge Drives Transformation',
    },
    columns: [
      {
        heading: 'Knowledge Hub',
        links: [
          { label: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: 'Case Studies', href: '/case-studies', icon: <BarChart3 className="w-3.5 h-3.5" /> },
          { label: 'Technology Stack', href: '/technologies', icon: <Code2 className="w-3.5 h-3.5" /> },
          { label: 'Products Portfolio', href: '/products', icon: <Sparkles className="w-3.5 h-3.5" /> },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    key: 'careers',
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
    liveStrip: {
      type: 'jobs' as const,
      heading: 'Featured Openings',
    },
    footerLink: { label: 'View All Jobs', href: '/careers' },
  },
  {
    label: 'Industries',
    key: 'industries',
    isNested: true,
  },
];

// ─── Nested Nav Data ─────────────────────────────────────────────────────────

const NESTED_NAV_DATA: Record<string, {
  left: {
    headline: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  categories: {
    label: string;
    key: string;
    columns: {
      heading: string;
      links: { label: string; href: string; icon?: React.ReactNode }[];
    }[];
  }[];
}> = {
  whatwedo: {
    left: {
      headline: "Enterprise IT, Delivered Right",
      body: "We combine deep industry insights with advanced software engineering to design, deploy, and scale robust digital infrastructures.",
      ctaLabel: "See how we deliver →",
      ctaHref: "/services"
    },
    categories: [
      {
        label: "Core Services",
        key: "core-services",
        columns: [
          {
            heading: "Core Infrastructure",
            links: [
              { label: 'AI & Machine Learning', href: '/services/ai-machine-learning', icon: <Cpu className="w-3.5 h-3.5" /> },
              { label: 'Software Development', href: '/services/software-development', icon: <Code2 className="w-3.5 h-3.5" /> },
            ]
          },
          {
            heading: "Web & Mobile Stacks",
            links: [
              { label: 'Web Development', href: '/services/web-development', icon: <Globe2 className="w-3.5 h-3.5" /> },
              { label: 'App Development', href: '/services/application-development', icon: <Smartphone className="w-3.5 h-3.5" /> },
              { label: 'Cybersecurity', href: '/services/cyber-security', icon: <Shield className="w-3.5 h-3.5" /> },
            ]
          }
        ]
      },
      {
        label: "Digital Solutions",
        key: "digital-solutions",
        columns: [
          {
            heading: "Modern Automation",
            links: [
              { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: <Palette className="w-3.5 h-3.5" /> },
            ]
          },
          {
            heading: "Emerging Platforms",
            links: [
              { label: 'Digital Marketing', href: '/services/digital-marketing', icon: <Megaphone className="w-3.5 h-3.5" /> },
            ]
          }
        ]
      },
      {
        label: "By Industry",
        key: "by-industry",
        columns: [
          {
            heading: "Financial & Health",
            links: [
              { label: 'Healthcare & Life Sciences', href: '/industries/healthcare', icon: <HeartPulse className="w-3.5 h-3.5" /> },
              { label: 'Banking & Finance', href: '/industries/finance', icon: <DollarSign className="w-3.5 h-3.5" /> },
              { label: 'Retail & E-commerce', href: '/industries/retail', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
            ]
          },
          {
            heading: "Public & Scale",
            links: [
              { label: 'Manufacturing', href: '/industries/manufacturing', icon: <Factory className="w-3.5 h-3.5" /> },
              { label: 'Government & Public', href: '/industries/government', icon: <Landmark className="w-3.5 h-3.5" /> },
              { label: 'Education & EdTech', href: '/industries/education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
            ]
          }
        ]
      },

    ]
  },
  industries: {
    left: {
      headline: "Sector-Specific Engineering",
      body: "We align digital systems with the operational realities and regulatory compliance of every major industry vertical.",
      ctaLabel: "See how we deliver →",
      ctaHref: "/industries"
    },
    categories: [
      {
        label: "Key Industries",
        key: "key-industries",
        columns: [
          {
            heading: "Private Sector Practice",
            links: [
              { label: 'Healthcare & Life Sciences', href: '/industries/healthcare', icon: <HeartPulse className="w-3.5 h-3.5" /> },
              { label: 'Banking & Finance', href: '/industries/finance', icon: <DollarSign className="w-3.5 h-3.5" /> },
              { label: 'Retail & E-commerce', href: '/industries/retail', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
              { label: 'Manufacturing', href: '/industries/manufacturing', icon: <Factory className="w-3.5 h-3.5" /> },
            ]
          },
          {
            heading: "Public & Services Practice",
            links: [
              { label: 'Education & EdTech', href: '/industries/education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
              { label: 'Government & Public', href: '/industries/government', icon: <Landmark className="w-3.5 h-3.5" /> },
            ]
          }
        ]
      },
      {
        label: "Case Studies",
        key: "case-studies",
        columns: [
          {
            heading: "Active Scopes",
            links: [
              { label: 'MediHealth Group', href: '/case-studies', icon: <Briefcase className="w-3.5 h-3.5" /> },
              { label: 'Apex Global Finance', href: '/case-studies', icon: <Briefcase className="w-3.5 h-3.5" /> },
              { label: 'ShopSmart E-Commerce', href: '/case-studies', icon: <Briefcase className="w-3.5 h-3.5" /> },
            ]
          },
          {
            heading: "Academic & Public",
            links: [
              { label: 'EduStream Platform', href: '/case-studies', icon: <Briefcase className="w-3.5 h-3.5" /> },
              { label: 'GovConnect Portal', href: '/case-studies', icon: <Briefcase className="w-3.5 h-3.5" /> },
            ]
          }
        ]
      },

    ]
  }
};

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
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 mb-3">{heading}</p>
      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="flex items-start gap-2.5 group/strip">
            <span className="w-1 h-1 mt-1.5 rounded-full bg-primary shrink-0" />
            <div>
              <p className="text-[12px] text-white/70 group-hover/strip:text-white transition-colors leading-tight font-medium line-clamp-1">
                {item.label}
              </p>
              <p className="text-[10.5px] text-white/55 mt-0.5">{item.sub}</p>
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
  if (item.isNested || !item.columns) return null;
  const colCount = item.columns.length;
  const panelWidth = colCount === 3 ? 860 : colCount === 2 ? 580 : 360;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-[64px] left-0 bg-[#1A1A1A] border border-white/8 rounded-b-2xl shadow-2xl shadow-gray-950/60 z-50 overflow-hidden"
          style={{ width: panelWidth }}
          role="menu"
        >
          {/* Intro CTA Block */}
          {item.intro && (item.intro.headline || item.intro.body) && (
            <div className="px-7 pt-6 pb-5 border-b border-white/6 flex items-start justify-between gap-6">
              <div className="flex-1">
                {item.intro.headline && (
                  <p className="text-[13px] font-bold text-white mb-1">{item.intro.headline}</p>
                )}
                {item.intro.body && (
                  <p className="text-[12px] text-white/50 leading-relaxed">{item.intro.body}</p>
                )}
              </div>
              {item.intro.link && (
                <Link
                  href={item.intro.link}
                  className="shrink-0 mt-0.5 text-white text-[11px] font-bold hover:underline underline-offset-[5px] flex items-center gap-1 transition-all"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          )}

          {/* Link Columns */}
          <div
            className={`p-7 grid gap-8 ${colCount === 3 ? 'grid-cols-3' : colCount === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}
          >
            {item.columns.map((col, ci) => (
              <div key={ci}>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-4">{col.heading}</p>
                <ul className="flex flex-col gap-0.5">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={`flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-[13px] font-medium transition-all group/link -mx-2 hover:underline decoration-white underline-offset-[5px]
                          ${isActivePath(link.href) ? 'text-white underline' : 'text-white/85 hover:text-white'}
                        `}
                      >
                        <span className={`shrink-0 transition-colors ${isActivePath(link.href) ? 'text-white' : 'text-white/30 group-hover/link:text-white'}`}>
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
              <p className="text-white/50 text-[11px] font-medium">GangaTara Technologies · Enterprise IT Partner</p>
              <Link
                href={item.footerLink.href}
                className="text-primary text-[12px] font-semibold hover:text-secondary flex items-center gap-1 transition-colors"
              >
                {item.footerLink.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Nested Mega Menu Panel ───────────────────────────────────────────────────

interface NestedMegaMenuPanelProps {
  menuKey: 'whatwedo' | 'industries';
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActivePath: (href: string) => boolean;
}

const NestedMegaMenuPanel: React.FC<NestedMegaMenuPanelProps> = ({ menuKey, isActive, onMouseEnter, onMouseLeave, isActivePath }) => {
  const data = NESTED_NAV_DATA[menuKey];
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  if (!data) return null;

  const activeCategory = data.categories[activeCatIdx] || data.categories[0];

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-[64px] left-0 bg-[#1A1A1A] border border-white/8 rounded-b-2xl shadow-2xl shadow-gray-950/60 z-50 overflow-hidden flex"
          style={{ width: 960 }}
          role="menu"
        >
          {/* Left Panel - fixed 25% width */}
          <div className="w-1/4 p-6 border-r border-white/6 bg-white/[0.01] flex flex-col justify-between">
            <div>
              <h4 className="text-white font-poppins font-bold text-[14px] leading-tight mb-3">
                {data.left.headline}
              </h4>
              <p className="text-white/50 text-[11px] leading-relaxed">
                {data.left.body}
              </p>
            </div>
            <Link
              href={data.left.ctaHref}
              className="text-white text-[11px] font-bold hover:underline underline-offset-[5px] flex items-center gap-1 transition-all mt-4"
            >
              {data.left.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Middle Panel - Category Selectors 20% width */}
          <div className="w-1/5 p-4 border-r border-white/6 bg-[#111111]/20 flex flex-col gap-0.5">
            {data.categories.map((cat, idx) => (
              <button
                key={cat.key}
                onMouseEnter={() => setActiveCatIdx(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-[12px] font-semibold transition-all cursor-pointer border-0 outline-none
                  ${activeCatIdx === idx ? 'text-white bg-[#333] dark:bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}
                `}
              >
                {cat.label}
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeCatIdx === idx ? 'translate-x-0.5 text-white' : 'opacity-30 text-white/30'}`} />
              </button>
            ))}
          </div>

          {/* Right Panel - Links Display 55% width */}
          <div className="flex-1 p-6 grid grid-cols-2 gap-8 bg-white/[0.005]">
            {activeCategory.columns.map((col, ci) => (
              <div key={ci}>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={`flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-[13px] font-medium transition-all group/link -mx-2 hover:underline decoration-white underline-offset-[5px]
                          ${isActivePath(link.href) ? 'text-white underline' : 'text-white/85 hover:text-white'}
                        `}
                      >
                        {link.icon && (
                          <span className={`shrink-0 transition-colors ${isActivePath(link.href) ? 'text-white' : 'text-white/30 group-hover/link:text-white'}`}>
                            {link.icon}
                          </span>
                        )}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const searchableItems = React.useMemo(() => {
    const items: { title: string; category: string; href: string }[] = [
      { title: 'Home', category: 'Page', href: '/' },
      { title: 'About Us', category: 'Page', href: '/about' },
      { title: 'Careers', category: 'Page', href: '/careers' },
      { title: 'Contact Us', category: 'Page', href: '/contact' },
      { title: 'Technologies', category: 'Page', href: '/technologies' },
      { title: 'Products', category: 'Page', href: '/products' },
      { title: 'Privacy Policy', category: 'Page', href: '/privacy-policy' },
      { title: 'Terms & Conditions', category: 'Page', href: '/terms-conditions' },
      { title: 'Cookie Policy', category: 'Page', href: '/cookie-policy' },
    ];

    servicesData.forEach(srv => {
      const removedIds = ['cloud-solutions', 'devops', 'data-analytics', 'blockchain', 'iot-solutions'];
      if (!removedIds.includes(srv.id)) {
        items.push({
          title: srv.title,
          category: 'Service',
          href: `/services/${srv.id}`
        });
      }
    });

    industriesData.forEach(ind => {
      items.push({
        title: ind.title,
        category: 'Industry',
        href: `/industries/${ind.id}`
      });
    });

    blogsData.forEach(blog => {
      items.push({
        title: blog.title,
        category: 'Insight',
        href: `/blog/${blog.slug}`
      });
    });

    return items;
  }, []);

  const filteredResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return searchableItems.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [searchQuery, searchableItems]);

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
    megaMenuTimeout.current = setTimeout(() => setActiveMegaMenu(null), 300);
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
            className="fixed inset-0 bg-[#111111]/97 z-[60] flex items-center justify-center p-6"
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
              
              {filteredResults.length > 0 && (
                <div className="mt-6 max-h-[350px] overflow-y-auto flex flex-col gap-2 no-scrollbar animate-fadeIn">
                  {filteredResults.map((result, idx) => (
                    <Link
                      key={idx}
                      href={result.href}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex flex-col">
                        <span className="text-[13px] text-white font-medium group-hover:text-primary transition-colors">
                          {result.title}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-white/30 mt-0.5">
                          {result.category}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery.trim() && filteredResults.length === 0 && (
                <p className="text-white/40 text-xs mt-6 text-center py-4">No results found for "{searchQuery}"</p>
              )}

              <p className="text-white/25 text-[11px] mt-3">Press ESC to close.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* ── Main Header ── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/98 backdrop-blur-md border-b border-white/8 shadow-lg shadow-gray-950/30'
            : 'bg-[#111111] border-b border-white/6'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-[64px] flex items-center justify-between gap-6 relative">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="GangaTara Technologies – Home"
          >
            <img
              src="/logo-new.png"
              alt="GangaTara Technologies"
              className="h-12 w-auto object-contain"
              loading="eager"
            />
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
                  className={`${item.isNested ? '' : 'relative'} h-[64px] flex items-center`}
                >
                  <button
                    className={`h-full flex items-center gap-1 px-4 text-[13px] font-medium tracking-wide transition-colors group cursor-pointer relative
                      ${activeMegaMenu === item.key ? 'text-white' : 'text-white/60 hover:text-white'}
                    `}
                    aria-expanded={activeMegaMenu === item.key}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === item.key ? 'rotate-180 text-white' : ''}`} />
                    <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-t-full transition-transform origin-left duration-200
                      ${activeMegaMenu === item.key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `} />
                  </button>

                  {item.isNested ? (
                    <NestedMegaMenuPanel
                      menuKey={item.key as 'whatwedo' | 'industries'}
                      isActive={activeMegaMenu === item.key}
                      onMouseEnter={() => handleMenuEnter(item.key)}
                      onMouseLeave={handleMenuLeave}
                      isActivePath={isActivePath}
                    />
                  ) : (
                    <MegaMenuPanel
                      item={item}
                      isActive={activeMegaMenu === item.key}
                      onMouseEnter={() => handleMenuEnter(item.key)}
                      onMouseLeave={handleMenuLeave}
                      isActivePath={isActivePath}
                    />
                  )}
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
                    className="absolute right-0 top-full mt-2 w-40 bg-[#1A1A1A] border border-white/8 rounded-xl shadow-xl z-50 overflow-hidden"
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



            <div className="w-px h-5 bg-white/10 mx-1" />

            <Link
              href="/contact"
              className="text-[13px] font-medium text-white/60 hover:text-white px-2 py-1 transition-colors tracking-wide cursor-pointer bg-transparent border-0 outline-none"
            >
              Contact Us
            </Link>


          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Search">
              <Search className="w-5 h-5" />
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
              className="fixed inset-0 bg-gray-900/70 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 right-0 w-[320px] h-full bg-[#111111] border-l border-white/8 z-50 xl:hidden flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/logo-new.png"
                    alt="GangaTara Technologies"
                    className="h-10 w-auto object-contain"
                    loading="eager"
                  />
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
                          {mobileExpanded === item.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {item.isNested ? (
                                <div className="ml-4 mt-1 mb-2 flex flex-col gap-4 px-2 py-2 border-l border-white/8">
                                  {NESTED_NAV_DATA[item.key as 'whatwedo' | 'industries']?.categories.map((cat, ci) => (
                                    <div key={ci} className="flex flex-col gap-1.5">
                                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                                        {cat.label}
                                      </p>
                                      {cat.columns.map((col, cj) => (
                                        <div key={cj} className="flex flex-col gap-1">
                                          {col.links.map((link, li) => (
                                            <Link
                                              key={li}
                                              href={link.href}
                                              onClick={() => setIsMobileMenuOpen(false)}
                                              className="flex items-center gap-2 py-1.5 px-2 text-[13px] text-white/60 hover:text-white transition-all rounded-lg"
                                            >
                                              {link.icon && <span className="text-white/30">{link.icon}</span>}
                                              {link.label}
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <>
                                  {/* Intro */}
                                  {item.intro && (item.intro.headline || item.intro.body) && (
                                    <div className="mx-4 mb-2 p-3 rounded-lg bg-white/3 border border-white/6">
                                      {item.intro.headline && (
                                        <p className="text-[11px] font-bold text-white mb-0.5">{item.intro.headline}</p>
                                      )}
                                      {item.intro.body && (
                                        <p className="text-[10px] text-white/40 leading-relaxed">{item.intro.body}</p>
                                      )}
                                    </div>
                                  )}
                                  {item.columns && (
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
                                  )}
                                </>
                              )}
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
                  +91 9111903111
                </div>
                <div className="flex items-center gap-2 text-white/35 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  info@gangatara.com
                </div>
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-2 w-full py-3 rounded-xl bg-primary hover:bg-secondary text-white text-[13px] font-bold text-center transition-colors cursor-pointer border-0 outline-none"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
