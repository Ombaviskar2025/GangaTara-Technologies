'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'ES' | 'DE' | 'FR' | 'JA';

type Translations = Record<string, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.industries': 'Industries',
    'nav.solutions': 'Solutions',
    'nav.technologies': 'Technologies',
    'nav.caseStudies': 'Case Studies',
    'nav.products': 'Products',
    'nav.careers': 'Careers',
    'nav.insights': 'Insights',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Client Portal',
    'nav.getStarted': 'Get Started',
    'nav.searchPlaceholder': 'Search solutions, services, insights...',
    
    // Common CTAs
    'cta.learnMore': 'Learn More',
    'cta.contactUs': 'Contact Us',
    'cta.applyNow': 'Apply Now',
    'cta.subscribe': 'Subscribe',
    
    // Hero
    'hero.badge': 'Next-Gen Enterprise IT Solutions',
    'hero.title1': 'Engineering the Future of',
    'hero.title2': 'Enterprise Technology',
    'hero.subtitle': 'We empower global brands with innovative AI, cloud computing, cybersecurity, and bespoke software solutions to drive digital excellence.',
    'hero.ctaPrimary': 'Explore Solutions',
    'hero.ctaSecondary': 'Book a Consultation',
    
    // Footer
    'footer.description': 'A global leader in enterprise digital transformation, engineering robust, secure, and intelligent technology solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.industries': 'Industries',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterPlaceholder': 'Enter your business email',
    'footer.rights': 'All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookies': 'Cookie Policy',
  },
  ES: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.industries': 'Industrias',
    'nav.solutions': 'Soluciones',
    'nav.technologies': 'Tecnologías',
    'nav.caseStudies': 'Casos de Estudio',
    'nav.products': 'Productos',
    'nav.careers': 'Carreras',
    'nav.insights': 'Perspectivas',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.login': 'Portal de Clientes',
    'nav.getStarted': 'Comenzar',
    'nav.searchPlaceholder': 'Buscar soluciones, servicios...',
    'cta.learnMore': 'Saber Más',
    'cta.contactUs': 'Contáctenos',
    'cta.applyNow': 'Postularse',
    'cta.subscribe': 'Suscribirse',
    'hero.badge': 'Soluciones de TI Empresariales de Próxima Generación',
    'hero.title1': 'Diseñando el Futuro de la',
    'hero.title2': 'Tecnología Empresarial',
    'hero.subtitle': 'Empoderamos a marcas globales con inteligencia artificial innovadora, computación en la nube, ciberseguridad y desarrollo de software a medida.',
    'hero.ctaPrimary': 'Explorar Soluciones',
    'hero.ctaSecondary': 'Reservar Consulta',
    'footer.description': 'Líder global en transformación digital empresarial, diseñando soluciones tecnológicas robustas, seguras e inteligentes.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.industries': 'Industrias',
    'footer.newsletter': 'Boletín Informativo',
    'footer.newsletterPlaceholder': 'Ingrese su correo electrónico',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.cookies': 'Política de Cookies',
  },
  DE: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.industries': 'Branchen',
    'nav.solutions': 'Lösungen',
    'nav.technologies': 'Technologien',
    'nav.caseStudies': 'Fallstudien',
    'nav.products': 'Produkte',
    'nav.careers': 'Karriere',
    'nav.insights': 'Einblicke',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.login': 'Kundenportal',
    'nav.getStarted': 'Jetzt starten',
    'nav.searchPlaceholder': 'Suche nach Lösungen, Diensten...',
    'cta.learnMore': 'Mehr erfahren',
    'cta.contactUs': 'Kontaktieren Sie uns',
    'cta.applyNow': 'Jetzt bewerben',
    'cta.subscribe': 'Abonnieren',
    'hero.badge': 'Enterprise IT-Lösungen der nächsten Generation',
    'hero.title1': 'Die Zukunft der Technologie',
    'hero.title2': 'aktiv gestalten',
    'hero.subtitle': 'Wir unterstützen globale Marken mit KI, Cloud Computing, Cybersicherheit und maßgeschneiderten Softwarelösungen für digitale Exzellenz.',
    'hero.ctaPrimary': 'Lösungen erkunden',
    'hero.ctaSecondary': 'Beratung vereinbaren',
    'footer.description': 'Ein weltweit führendes Unternehmen für die digitale Transformation von Unternehmen, das robuste, sichere und intelligente Lösungen entwickelt.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.services': 'Dienstleistungen',
    'footer.industries': 'Branchen',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterPlaceholder': 'Geschäfts-E-Mail eingeben',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.cookies': 'Cookie-Richtlinie',
  },
  FR: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.industries': 'Secteurs',
    'nav.solutions': 'Solutions',
    'nav.technologies': 'Technologies',
    'nav.caseStudies': 'Études de Cas',
    'nav.products': 'Produits',
    'nav.careers': 'Carrières',
    'nav.insights': 'Perspectives',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Portail Client',
    'nav.getStarted': 'Démarrer',
    'nav.searchPlaceholder': 'Rechercher solutions, services...',
    'cta.learnMore': 'En savoir plus',
    'cta.contactUs': 'Contactez-nous',
    'cta.applyNow': 'Postuler',
    'cta.subscribe': 'S\'abonner',
    'hero.badge': 'Solutions TI d\'entreprise de nouvelle génération',
    'hero.title1': 'Façonner l\'avenir de la',
    'hero.title2': 'Technologie d\'entreprise',
    'hero.subtitle': 'Nous propulsons les marques mondiales avec des solutions innovantes d\'IA, de cloud, de cybersécurité et de développement logiciel sur mesure.',
    'hero.ctaPrimary': 'Découvrir nos solutions',
    'hero.ctaSecondary': 'Prendre rendez-vous',
    'footer.description': 'Un leader mondial de la transformation digitale des entreprises, développant des solutions technologiques robustes, sécurisées et intelligentes.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.industries': 'Secteurs',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterPlaceholder': 'Entrez votre email professionnel',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.cookies': 'Politique relative aux cookies',
  },
  JA: {
    'nav.home': 'ホーム',
    'nav.about': '企業情報',
    'nav.services': 'サービス',
    'nav.industries': '業界分野',
    'nav.solutions': 'ソリューション',
    'nav.technologies': '技術スタック',
    'nav.caseStudies': '導入事例',
    'nav.products': '製品開発',
    'nav.careers': '採用情報',
    'nav.insights': 'インサイト',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'nav.login': 'クライアントポータル',
    'nav.getStarted': '今すぐ始める',
    'nav.searchPlaceholder': 'ソリューションやサービスを検索...',
    'cta.learnMore': '詳細を見る',
    'cta.contactUs': 'お問い合わせ',
    'cta.applyNow': '応募する',
    'cta.subscribe': '購読する',
    'hero.badge': '次世代のエンタープライズITソリューション',
    'hero.title1': 'エンタープライズ技術の',
    'hero.title2': '未来を切り拓く',
    'hero.subtitle': '革新的なAI、クラウドコンピューティング、サイバーセキュリティ、およびカスタムソフトウェア開発によって、グローバル企業のデジタル変革を支援します。',
    'hero.ctaPrimary': 'ソリューションを見る',
    'hero.ctaSecondary': '無料相談を予約する',
    'footer.description': '堅牢で安全、かつインテリジェントなテクノロジーソリューションを構築する、エンタープライズデジタル変革の世界的リーダー。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.industries': '業界分野',
    'footer.newsletter': 'ニュースレター',
    'footer.newsletterPlaceholder': 'ビジネスメールアドレスを入力',
    'footer.rights': '著作権所有。',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.cookies': 'クッキーポリシー',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'EN' || savedLang === 'ES' || savedLang === 'DE' || savedLang === 'FR' || savedLang === 'JA')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
