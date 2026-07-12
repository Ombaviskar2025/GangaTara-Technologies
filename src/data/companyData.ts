import { IMAGES } from './images';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  caption?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  description: string;
  solutions: string[];
  stats: { label: string; value: string }[];
  image: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'mobile' | 'emerging';
  iconType: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  results: { label: string; value: string }[];
  technologies: string[];
  imagePath: string;
  challenge: string;
  solution: string;
  impactHeadline: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface BlogItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities?: string[];
  requirements: string[];
  benefits: string[];
  category: 'full-time' | 'internship';
  stipend?: string;
  duration?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortDesc: 'Automate complex operations, extract predictions, and deploy generative AI agents securely.',
    iconName: 'Cpu',
    description: 'Leverage the power of cognitive computing. Our AI and ML solutions allow enterprises to deploy custom Generative AI agents, implement deep-learning vision systems, automate repetitive decisions, and parse unstructured documents securely without compromising proprietary corporate knowledge.',
    features: [
      'Generative AI & LLM Integration (OpenAI, Anthropic, Gemini, Llama)',
      'Predictive Analytics & Forecasting Models',
      'Natural Language Processing (NLP) & Sentiment Systems',
      'Computer Vision & Object Detection Systems',
      'MLOps Pipelines for Model Training & Deployment'
    ],
    benefits: [
      'Automate up to 70% of routine data-entry and ticket-triaging workflows',
      'Extract hidden insights from petabytes of unstructured text and database logs',
      'Enhance decision making using predictive models with >95% historical accuracy',
      'Deliver personalized user recommendations in real-time at scale'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'HuggingFace', 'OpenAI API', 'LangChain']
  },
  {
    id: 'software-development',
    title: 'Software Development',
    shortDesc: 'Custom-built enterprise software systems tailored to solve complex back-office challenges.',
    iconName: 'Code',
    description: 'We engineer durable, resilient back-office software architectures that tie seamlessly into legacy systems. Our focus is on writing clean, type-safe, and self-documenting code bases designed for easy scaling, zero-downtime upgrades, and rigorous enterprise security protocols.',
    features: [
      'Bespoke Enterprise Resource Planning (ERP) Systems',
      'High-Throughput Transaction Processing Systems',
      'Legacy Code Refactoring & Microservice Re-architecting',
      'API Design, Gateway Integration, & API Management',
      'Robust Domain-Driven Custom Design Patterns'
    ],
    benefits: [
      'Eliminate dependencies on rigid, expensive third-party SaaS vendors',
      'Scale application throughput to millions of daily transactions smoothly',
      'Extend the lifetime of legacy investments via smart API wrapper layers',
      'Maintain full ownership of your intellectual property and codebase'
    ],
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Go', 'Python', '.NET', 'PostgreSQL']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    caption: 'Settle/Shift Online',
    shortDesc: 'High-speed, SEO-optimized, and premium web portals designed for maximum user engagement.',
    iconName: 'Globe',
    description: 'Create lightning-fast, visually breathtaking web portals that render instantly across all client form-factors. We build responsive Next.js and React applications backed by robust Content Delivery Networks, featuring state-of-the-art security, page loads under a second, and interactive UI states.',
    features: [
      'Server-Side Rendered (SSR) & Static Next.js Applications',
      'Enterprise Content Management Systems (CMS)',
      'Highly Secure B2B Client Portals & Dashboards',
      'SEO-Optimized Global Multi-Region Web Architectures',
      'Interactive and High-Performance Web Graphics'
    ],
    benefits: [
      'Increase organic search visibility with SEO scores targeting 95+',
      'Drive customer conversions via ultra-fast page load times',
      'Deliver immersive design aesthetics that reinforce brand premium',
      'Ensure full web accessibility compliance (WCAG 2.1 AA)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js']
  },
  {
    id: 'application-development',
    title: 'Application Development',
    caption: 'Pocket In Pocket',
    shortDesc: 'Cross-platform and native mobile apps with smooth interactive states and offline capabilities.',
    iconName: 'Smartphone',
    description: 'Connect with your clients on the go. We design cross-platform and native mobile apps that balance native operating system performance with high developer velocity. Our mobile engineering processes ensure offline-first support, strict biometric data encryption, and instant background syncs.',
    features: [
      'Cross-Platform Flutter & React Native Applications',
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Offline-First Data Architecture & Local Database Syncing',
      'Biometric Security & Mobile Identity Management',
      'Push Notification Orchestration & Real-time Alerts'
    ],
    benefits: [
      'Reach users across iOS and Android from a single optimized code-base',
      'Ensure application functionality even under unstable network conditions',
      'Provide user experiences with smooth 120Hz frame rates',
      'Safeguard client data using device-level secure hardware enclaves'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    shortDesc: 'Protect digital assets, enforce zero-trust security, and meet global compliance benchmarks.',
    iconName: 'ShieldAlert',
    description: 'Securing the enterprise in an age of rising digital threats. We audit, engineer, and monitor zero-trust networks, providing continuous threat assessment, automated penetration test routines, identity management, and immediate incident response frameworks to protect core IP.',
    features: [
      'Zero-Trust Network Access (ZTNA) Architectures',
      'Automated Vulnerability Appraisals & Pen-Testing',
      'IAM Integration (Okta, Active Directory, OAuth)',
      'Regulatory Compliance Auditing (GDPR, HIPAA, SOC 2, PCI)',
      'Managed Detection, Endpoint Protection, & Response'
    ],
    benefits: [
      'Mitigate risk of catastrophic data breaches and ransom exploits',
      'Attain compliance certification readiness in months, not years',
      'Secure internal endpoints and remote worker connections globally',
      'Instantly quarantine malicious activities before network propagation'
    ],
    technologies: ['Cloudflare', 'Okta', 'Vault', 'Wireshark', 'Kali Linux', 'SonarQube']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'User-centric product design matching premium aesthetics with intuitive task flows.',
    iconName: 'Palette',
    description: 'We believe premium technology deserves breathtaking visual design. Our design system engineers and research specialists deliver user-centric mockups, wireframes, and interactive click-prototypes designed to solve complex business interfaces with minimal user friction.',
    features: [
      'User Research, Persona Profiling & Journey Mapping',
      'Figma-Based Shared Design System Architectures',
      'High-Fidelity Interactive Click-Through Prototypes',
      'Usability & Cognitive Load Validation testing',
      'Micro-interaction & Animation Styling Specifications'
    ],
    benefits: [
      'Lower user onboarding time and client training support overhead',
      'Ensure brand identity across all platforms',
      'Boost platform engagement metrics and lower checkout churn rates',
      'Design layouts verified against rigorous human-interaction tests'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'Framer']
  },

  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    caption: 'Inside Virtual World Market',
    shortDesc: 'Drive high-conversion user acquisition campaigns, optimize search engine visibility, and scale brand reach.',
    iconName: 'Megaphone',
    description: 'We scale your digital presence globally. Our digital marketing practices leverage search engine optimization, advanced tracking telemetry, data-driven ad management, and strategic content planning to drive corporate visibility and client acquisition.',
    features: [
      'Search Engine Optimization (SEO) & Audits',
      'Data-Driven PPC & Social Media Campaigns',
      'Conversion Rate Optimization (CRO) Telemetry',
      'Brand Strategy & Multi-Channel Marketing',
      'Advanced Marketing Analytics & BI Dashboards'
    ],
    benefits: [
      'Boost organic business traffic by up to 150%',
      'Lower client acquisition costs through ad and budget optimizations',
      'Trace exact user pathways from initial ad impressions to conversions',
      'Establish a consistent, authoritative brand voice across digital networks'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'SEMrush', 'HubSpot', 'Meta Ads']
  }
];

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    shortDesc: 'Interoperable clinical databases, HIPAA-compliant patient portals, and diagnostic AI assistance.',
    iconName: 'HeartPulse',
    description: 'We design software that saves lives and reduces administrative overhead. Our healthcare engineering teams build interoperable FHIR systems, patient engagement portals, and clinical decision support engines that safeguard patient records while enabling real-time analytics.',
    solutions: ['HIPAA & HITECH Compliant Architectures', 'HL7 FHIR Interoperability Layers', 'AI Diagnostic Imaging Assistance', 'Virtual Care & Telehealth Portals'],
    stats: [
      { label: 'Patient Retention', value: '+40%' },
      { label: 'Ingestion Time', value: '-60%' },
      { label: 'Active Care Users', value: '4M+' }
    ],
    image: IMAGES.industries.healthcare.hero
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    shortDesc: 'High-throughput transactional ledger architectures, fraud detection AI, and open banking APIs.',
    iconName: 'DollarSign',
    description: 'Accelerate the transition from legacy core banking systems. We build high-throughput transaction ledgers, design AI-backed credit assessment engines, and ensure full compliance with PCI-DSS and PSD2 open banking regulatory demands.',
    solutions: ['High-Frequency Ledger Architectures', 'Real-Time Fraud Prevention AI', 'PSD2 Open Banking Integration', 'Automated Credit Score Appraisals'],
    stats: [
      { label: 'Transaction Latency', value: '<5ms' },
      { label: 'Fraud Detection Rate', value: '99.8%' },
      { label: 'Compliance Audit Time', value: '-75%' }
    ],
    image: IMAGES.industries.finance.hero
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    shortDesc: 'Omnichannel inventory tracking, personalized recommendations, and dynamic checkout layers.',
    iconName: 'ShoppingBag',
    description: 'Empower retail operations. We engineer headless commerce backends, real-time multi-location inventory trackers, and AI recommendation engines that deliver personalized shopping experiences across web, mobile, and in-store terminals.',
    solutions: ['Headless Commerce Architectures', 'Omnichannel Inventory Synchronizers', 'AI Dynamic Recommendations', 'Frictionless POS Integrations'],
    stats: [
      { label: 'Conversion Rates', value: '+22%' },
      { label: 'Inventory Updates', value: 'Real-time' },
      { label: 'System Load Capacity', value: '100k req/s' }
    ],
    image: IMAGES.industries.retail.hero
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    shortDesc: 'Scalable learning management engines, student analytics boards, and virtual classrooms.',
    iconName: 'GraduationCap',
    description: 'Digitize the classroom environment. We build secure Learning Management Systems (LMS), administrative database dashboards, and collaborative web platforms that enable remote teaching and track student performance indicators.',
    solutions: ['Custom Learning Management Systems', 'Student Telemetry & Analytics Boards', 'Interactive Virtual Classroom Plugins', 'Parent-Teacher Communication Hubs'],
    stats: [
      { label: 'User Engagement', value: '+35%' },
      { label: 'Platform Availability', value: '99.99%' },
      { label: 'Graduation Auditing', value: '-80%' }
    ],
    image: IMAGES.industries.education.hero
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortDesc: 'Industrial IoT shopfloor telemetry, predictive equipment maintenance, and supply chain visibility.',
    iconName: 'Factory',
    description: 'Bring digital intelligence to the physical factory floor. We deploy MQTT-based sensors to track production speeds, implement edge analytics to predict machinery breakdowns, and unify supplier inventory feeds.',
    solutions: ['Shopfloor Telemetry Ingestion', 'Edge Predictive Maintenance AI', 'Multi-Tier Supplier Traceability', 'SCADA Database Wrapper Interfaces'],
    stats: [
      { label: 'Unplanned Outages', value: '-42%' },
      { label: 'Equipment Lifetime', value: '+18%' },
      { label: 'Data Latency', value: '<20ms' }
    ],
    image: IMAGES.industries.manufacturing.hero
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    shortDesc: 'Secure, accessible citizen service portals, encrypted civic databases, and public records.',
    iconName: 'Landmark',
    description: 'Increase civic transparency and ease citizen access. We build accessible, secure government portals, implement citizen identity managers, and deploy encrypted databases that adhere to strict public safety standards.',
    solutions: ['ADA-Accessible Citizen Portals', 'Multi-Factor Civic Identity Managers', 'Encrypted Public Record Registries', 'Digital Tax & Fees Settlement Engines'],
    stats: [
      { label: 'Citizen Wait Times', value: '-55%' },
      { label: 'Data Breaches', value: '0' },
      { label: 'User Accessibility', value: '100%' }
    ],
    image: IMAGES.industries.government.hero
  }
];

export const technologiesData: TechItem[] = [
  { name: 'React', category: 'frontend', iconType: 'react' },
  { name: 'Angular', category: 'frontend', iconType: 'angular' },
  { name: 'Vue', category: 'frontend', iconType: 'vue' },
  { name: 'Node.js', category: 'backend', iconType: 'node' },
  { name: 'Java', category: 'backend', iconType: 'java' },
  { name: 'Spring Boot', category: 'backend', iconType: 'springboot' },
  { name: 'Python', category: 'backend', iconType: 'python' },
  { name: '.NET', category: 'backend', iconType: 'dotnet' },
  { name: 'PHP', category: 'backend', iconType: 'php' },
  { name: 'Flutter', category: 'mobile', iconType: 'flutter' },
  { name: 'React Native', category: 'mobile', iconType: 'reactnative' },
  { name: 'AWS', category: 'cloud', iconType: 'aws' },
  { name: 'Azure', category: 'cloud', iconType: 'azure' },
  { name: 'Google Cloud', category: 'cloud', iconType: 'gcp' },
  { name: 'Docker', category: 'cloud', iconType: 'docker' },
  { name: 'Kubernetes', category: 'cloud', iconType: 'kubernetes' },
  { name: 'MongoDB', category: 'database', iconType: 'mongodb' },
  { name: 'PostgreSQL', category: 'database', iconType: 'postgresql' },
  { name: 'MySQL', category: 'database', iconType: 'mysql' },
  { name: 'Redis', category: 'database', iconType: 'redis' },
  { name: 'GraphQL', category: 'emerging', iconType: 'graphql' },
  { name: 'TensorFlow', category: 'emerging', iconType: 'tensorflow' },
  { name: 'Rust', category: 'emerging', iconType: 'rust' },
  { name: 'Solidity', category: 'emerging', iconType: 'solidity' }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'telehealth-platform-transformation',
    title: 'Transforming Telehealth Delivery globally',
    client: 'MediHealth Group Inc.',
    industry: 'Healthcare',
    overview: "MediHealth's patient intake system was struggling under a massive 400% surge of families seeking digital care. We stepped in to rewrite their scheduling systems and compliance architecture, creating a warm, frictionless digital waiting room that lets patients consult doctors in minutes.",
    challenge: 'At the peak of a health crisis, families waiting to see a doctor online faced frozen screens and dropped video feeds as the backend database choked on database locks. Behind the scenes, the healthcare staff was overwhelmed, and remote patients had high latency, making vital appointments impossible.',
    solution: "Instead of just upgrading servers, we sat down with the MediHealth team to understand their workflow. We designed a resilient, decentralized database queue using Amazon DynamoDB and AWS Lambda that processed patient intake smoothly even during extreme spikes. We smoothed out WebRTC video flows with custom relay nodes to ensure patients in low-bandwidth regions could clearly see their doctor's face without interruptions.",
    results: [
      { label: 'Time to see doctor', value: '4.2x faster' },
      { label: 'Video Call Latency', value: '-65%' },
      { label: 'Compliance checklist', value: 'Passed 100%' }
    ],
    technologies: ['AWS', 'Next.js', 'PostgreSQL', 'WebRTC', 'Docker'],
    imagePath: IMAGES.caseStudies.healthcare,
    impactHeadline: '4.2x faster patient ingestion for MediHealth Group Inc.'
  },
  {
    id: 'realtime-banking-fraud-prevention',
    title: 'AI-Powered Financial Fraud Detection System',
    client: 'Apex Global Bank',
    industry: 'Finance',
    overview: 'Apex Global Bank wanted to protect customer transactions from fraud without blocking legitimate purchases. We worked alongside their safety team to implement an AI system that checks transactions in under 10 milliseconds, safeguarding accounts while keeping checkouts smooth.',
    challenge: 'Standard fraud detectors were locking accounts of legitimate travelers buying groceries abroad, leading to frustrating customer service calls and frozen credit cards. Apex Bank needed to distinguish true fraud from normal customer behavior instantly without making customers wait at the counter.',
    solution: 'We integrated a deep-neural predictive AI model trained on years of telemetry, helping the system learn true human spending habits. Using Apache Kafka and Apache Flink, we built a real-time event pipeline that analyzes transactions in under 7 milliseconds, allowing families to purchase securely and with confidence.',
    results: [
      { label: 'Fraud stopped instantly', value: '99.85%' },
      { label: 'Accidental locks', value: '-80%' },
      { label: 'Decision response time', value: '6.4ms' }
    ],
    technologies: ['Python', 'PyTorch', 'Apache Kafka', 'Kubernetes', 'Redis'],
    imagePath: IMAGES.caseStudies.finance,
    impactHeadline: '99.85% fraud detection accuracy for Apex Global Bank'
  },
  {
    id: 'headless-retail-scale-out',
    title: 'Migrating to Headless Commerce for Black Friday Scaling',
    client: 'Veloce Apparel',
    industry: 'Retail & E-commerce',
    overview: "Veloce's online store was crashing every holiday season, frustrating eager shoppers and hurting sales. We rebuilt their entire storefront with Next.js and Redis, turning their seasonal stress into a fast, seamless shopping experience that handles millions of visitors.",
    challenge: "Every holiday season, Veloce's database would crash under flash-sale spikes, leaving customers with empty carts, slow pages, and failed checkout forms. Social media was flooded with complaints, and the retail team felt helpless as their system failed during their most critical sales window.",
    solution: 'We decoupled the frontend website from the backend databases using a modern headless architecture. We created a static-generated, edge-cached Next.js site that loads in milliseconds, backed by a high-availability Redis cache to check inventory instantly without hitting the main database. Now, pages load instantly, and the checkout process is smooth and stress-free.',
    results: [
      { label: 'Instant page load', value: '0.6 seconds' },
      { label: 'Shoppers handled', value: '120,000' },
      { label: 'Abandoned shopping carts', value: '-35%' }
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Redis', 'GraphQL'],
    imagePath: IMAGES.caseStudies.retail,
    impactHeadline: '0.6-second page load speed and -35% checkout churn for Veloce Apparel'
  },
  {
    id: 'edustream-lms-scaleup',
    title: 'Scaling LMS Platforms for Remote Academics',
    client: 'EduStream Platform',
    industry: 'Education',
    overview: 'We engineered a highly available containerized learning platform to handle massive concurrent student loads during examinations without performance degradation.',
    challenge: 'EduStream was experiencing severe classroom disconnects and server crashes when thousands of students logged on concurrently for testing, resulting in lost assessments.',
    solution: 'We re-architected their server infrastructure into containerized microservices running on AWS, optimized database query caches with Redis, and deployed CDN endpoints for static assets.',
    results: [
      { label: 'Student capacity', value: '500k concurrent' },
      { label: 'Page load time', value: '-58%' },
      { label: 'Server uptime', value: '99.99%' }
    ],
    technologies: ['AWS', 'Docker', 'Redis', 'PostgreSQL', 'Next.js'],
    imagePath: '/ind_edu_1.png',
    impactHeadline: 'Scaled to 500k concurrent students for EduStream'
  },
  {
    id: 'govconnect-portal-modernization',
    title: 'Modernizing Public Portal Infrastructures',
    client: 'GovConnect Portal',
    industry: 'Government',
    overview: 'We rebuilt a state public administration portal to enhance security and streamline digital services for citizens with zero-trust protocols.',
    challenge: 'The outdated public portal suffered from frequent security vulnerabilities, long loading times, and lacked accessibility standards for disabled citizens.',
    solution: 'We redesigned the portal with Next.js, added zero-trust identity verification via JWT, and achieved strict compliance with W3C web accessibility guidelines.',
    results: [
      { label: 'Security breaches', value: 'Reduced to 0' },
      { label: 'Citizen satisfaction', value: '+42%' },
      { label: 'Accessibility rating', value: 'WCAG AA' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    imagePath: '/ind_gov_1.png',
    impactHeadline: 'Zero security breaches achieved for GovConnect Portal'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'MediHealth Group Inc.',
    quote: 'GangaTara Technologies delivered a HIPAA-compliant serverless infrastructure that scaled flawlessly through our largest patient surge in history. Their technical depth and execution speed are world-class.',
    rating: 5,
    image: IMAGES.common.avatarSarah
  },
  {
    id: 't2',
    name: 'David Vance',
    role: 'VP of Payments Systems',
    company: 'Apex Global Bank',
    quote: 'The AI fraud prevention system designed by their engineers reduced our evaluation latency to under 7 milliseconds while slashing false positive block triggers by 80%. An incredible engineering feat.',
    rating: 5,
    image: IMAGES.common.avatarDavid
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Director of Omnichannel Commerce',
    company: 'Veloce Apparel',
    quote: 'Our Black Friday site reliability went from a source of stress to a complete success. The Next.js frontend is stunningly fast, and our checkout conversions increased by 22% immediately.',
    rating: 5,
    image: IMAGES.common.avatarElena
  }
];

export const processData: ProcessItem[] = [
  { step: '01', title: 'Discovery', description: 'We audit your legacy systems, interview business stakeholders, and document security requirements.' },
  { step: '02', title: 'Planning', description: 'Our architects design the database, cloud infrastructure topology, and project milestone roadmaps.' },
  { step: '03', title: 'Design', description: 'We deliver interactive Figma click-prototypes, brand assets, and custom design systems for review.' },
  { step: '04', title: 'Development', description: 'Our engineers write modular, type-safe code using Scrum frameworks and daily automated build integrations.' },
  { step: '05', title: 'Testing', description: 'We perform automated unit testing, end-to-end security audits, and load test systems under peak load simulator scenarios.' },
  { step: '06', title: 'Deployment', description: 'We execute blue-green GitOps releases to orchestrate container clusters with zero system downtime.' },
  { step: '07', title: 'Support', description: 'Our team monitors your systems 24/7/365, performing regular security patching, dependency upgrades, and performance tuning.' }
];

export const awardsData: AwardItem[] = [

  { id: 'aw2', title: 'AWS Advanced Consulting Partner', issuer: 'Amazon Web Services', year: '2024' },
  { id: 'aw3', title: 'Microsoft Gold Partner', issuer: 'Microsoft Corporation', year: '2024' },
  { id: 'aw4', title: 'Google Cloud Partner of the Year', issuer: 'Google Cloud', year: '2025' }
];

export const blogsData: BlogItem[] = [
  {
    slug: 'future-of-generative-ai-in-enterprise-architecture',
    title: 'The Future of Generative AI in Enterprise Architectures',
    category: 'Artificial Intelligence',
    date: 'June 28, 2026',
    readTime: '6 min read',
    author: 'Dr. Aris Thorne',
    authorRole: 'Chief Scientist of AI Research',
    excerpt: 'Deploying LLMs at scale requires more than prompting. Learn how retrieval-augmented generation (RAG) and semantic caches secure company data.',
    content: `
# The Future of Generative AI in Enterprise Architectures

Large Language Models (LLMs) are transitioning from novel chatbot toys to core operational components within enterprise software systems. However, deploying a model like GPT-4 or Claude inside a corporate network presents significant engineering challenges. This article explores how to design a secure, cost-effective, and accurate artificial intelligence pipeline.

## 1. The Limitations of Base LLMs

Standard off-the-shelf models are frozen in time and lack visibility into your company's proprietary data. For instance, if you ask a public LLM: *"What were our Q2 logistics bottlenecks in Munich?"*, it cannot answer accurately. Attempting to solve this by retraining or fine-tuning models continuously is:
- **Costly**: GPU cluster allocation is expensive.
- **Slow**: Fine-tuning takes days or weeks.
- **Inflexible**: Outdated as soon as a new invoice is processed.

## 2. Retrieval-Augmented Generation (RAG)

To solve the data gap, modern enterprise systems use a **RAG** architecture. Instead of teaching the model new facts, we retrieve relevant files from a corporate database and attach them to the prompt as context.

\`\`\`
[User Query] -> [Vector Search Index] -> [Match Documents] -> [Prompt Compiler] -> [LLM Evaluation] -> [Result]
\`\`\`

By organizing company files into a high-performance **Vector Database** (like pgvector, Pinecone, or Milvus), we perform semantic searches to select the precise text snippets needed to answer a query.

## 3. Data Privacy and Governance

When engineering enterprise AI, keeping data safe is critical:
- **Tenant Isolation**: Ensure that user queries do not leak across department directories.
- **Zero Data Retention**: Form contract agreements with API providers to prevent them from training their public models on your queries.
- **Semantic Caches**: Use caching layers (like Redis) to store matches for common questions, avoiding API charges and accelerating query times.

Implementing these practices helps organizations integrate Generative AI tools safely and effectively.
    `,
    image: 'img_blog_ai_architecture'
  },
  {
    slug: 'mastering-gitops-kubernetes-releases',
    title: 'Mastering GitOps for Zero-Downtime Kubernetes Releases',
    category: 'DevOps & Infrastructure',
    date: 'May 14, 2026',
    readTime: '8 min read',
    author: 'Marcus Vance',
    authorRole: 'Principal Infrastructure Architect',
    excerpt: 'Manual deployments lead to human errors. Explore how declarative state sync tools like ArgoCD automate production cluster updates safely.',
    content: `
# Mastering GitOps for Zero-Downtime Kubernetes Releases

As container fleets scale to hundreds of microservices, manual container cluster management becomes a significant risk. Declaring infrastructure state in git and allowing automated synchronizers to enforce that state in production—known as **GitOps**—is the industry standard for stable software delivery.

## Why Legacy CD Pipelines Fail

In traditional push-based CI/CD pipelines, a build server (like Jenkins or GitHub Actions) runs command-line commands to push updates directly to production. This introduces several risks:
- **Secret Exposure**: Storing access credentials inside external builder environments.
- **Configuration Drift**: Manual changes made to clusters are not documented in source control.
- **No Simple Rollbacks**: Undoing a broken deployment requires rebuilding and redeploying code.

## The GitOps Pull-Based Solution

Under a GitOps model (using tools like ArgoCD or Flux), the cluster itself monitors a repository containing YAML configurations. When a developer pushes an update, the agent inside the cluster pulls the manifest and applies it automatically.

This approach offers key advantages:
- **Enhanced Security**: Credentials remain inside the secure cluster environment.
- **Drift Correction**: The synchronizer automatically overwrites manual cluster edits to match Git.
- **Instant Rollback**: Reverting a broken release is as simple as reverting the git commit.

Adopting GitOps principles enables enterprises to release updates faster and minimize deployment risks.
    `,
    image: 'img_blog_gitops_kubernetes'
  }
];

export const jobsData: JobItem[] = [
  {
    id: 'fsd-001',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '2–4 Years',
    category: 'full-time',
    description: 'We are seeking a skilled Full Stack Developer to design, develop, and maintain robust web applications. You will collaborate with cross-functional teams to deliver high-quality software solutions that power enterprise digital products for our global clients.',
    responsibilities: [
      'Design, develop, and maintain scalable full-stack web applications using React/Next.js and Node.js',
      'Write clean, reusable, and well-documented code following best practices',
      'Collaborate with UI/UX designers to implement pixel-perfect interfaces',
      'Integrate REST APIs and third-party services securely',
      'Participate in code reviews, sprint planning, and daily standups',
      'Troubleshoot and debug production issues with urgency and precision',
      'Optimize application performance and ensure cross-browser compatibility'
    ],
    requirements: [
      'Proficiency in React.js / Next.js and Node.js / Express.js',
      'Strong command of TypeScript, JavaScript (ES6+), HTML5, and CSS3',
      'Experience with relational (PostgreSQL/MySQL) and NoSQL (MongoDB) databases',
      'Familiarity with REST API design and integration patterns',
      'Knowledge of Git version control and CI/CD workflows',
      'Understanding of cloud platforms (AWS / GCP / Azure) is a plus',
      'Ability to work in an Agile/Scrum environment'
    ],
    benefits: [
      'Competitive salary with performance-linked bonuses',
      'Health & wellness insurance coverage',
      'Flexible hybrid work schedule',
      '₹15,000 annual learning & certification budget',
      'Team outings, hackathons, and innovation sprints'
    ]
  },
  {
    id: 'bda-002',
    title: 'Business Development Associate',
    department: 'Sales & Growth',
    location: 'Indore, MP (On-site)',
    type: 'Full-Time',
    experience: '1–3 Years',
    category: 'full-time',
    description: 'Join our Business Development team to identify new market opportunities, build client relationships, and drive revenue growth for GangaTara Technologies. You will be responsible for generating leads, pitching our IT services, and closing deals with enterprise prospects.',
    responsibilities: [
      'Identify and qualify new business opportunities through research, networking, and outreach',
      'Develop and maintain strong relationships with prospective and existing clients',
      'Prepare compelling proposals, presentations, and business pitches',
      'Collaborate with delivery teams to scope client requirements and create solutions',
      'Meet monthly and quarterly sales targets consistently',
      'Track sales pipeline metrics and report progress to management',
      'Represent GangaTara at industry events, conferences, and trade shows'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or a related field',
      '1–3 years of B2B sales or business development experience (IT industry preferred)',
      'Excellent verbal and written communication skills',
      'Proficiency in CRM tools (HubSpot, Salesforce, or similar)',
      'Ability to understand technical products and articulate value propositions',
      'Self-motivated with a results-driven mindset',
      'Strong negotiation and relationship management skills'
    ],
    benefits: [
      'Attractive fixed salary + commission structure',
      'Incentive trips and performance rewards',
      'Health insurance coverage',
      'Sales training and leadership development programs',
      'Fast-track promotion opportunities'
    ]
  },
  {
    id: 'sme-003',
    title: 'Social Media Executive',
    department: 'Marketing',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '1–2 Years',
    category: 'full-time',
    description: 'We are looking for a creative and data-driven Social Media Executive to manage and grow GangaTara\'s social presence across LinkedIn, Instagram, Twitter/X, and YouTube. You will create engaging content, run campaigns, and analyze performance to drive brand awareness.',
    responsibilities: [
      'Develop and execute social media content calendars across all major platforms',
      'Create engaging text, image, and short-form video content aligned with brand guidelines',
      'Monitor social media trends and apply them strategically to our content',
      'Manage community engagement — respond to comments, DMs, and mentions promptly',
      'Run paid social media ad campaigns and analyze ROI',
      'Collaborate with the design team to produce high-quality visual assets',
      'Track and report key social metrics (reach, engagement, followers, conversions)'
    ],
    requirements: [
      '1–2 years of hands-on social media management experience',
      'Proficiency in tools like Canva, Adobe Express, or similar design platforms',
      'Knowledge of LinkedIn Ads, Meta Ads Manager, and analytics dashboards',
      'Strong creative writing skills with attention to brand voice and tone',
      'Familiarity with hashtag research, SEO for social, and viral content strategies',
      'Video editing skills (CapCut, Premiere Pro, or similar) are a plus',
      'Understanding of the IT/technology industry is preferred'
    ],
    benefits: [
      'Competitive salary package',
      'Creative work environment with growth opportunities',
      'Health insurance',
      'Access to premium design and marketing tools',
      'Regular training on emerging social trends'
    ]
  },
  {
    id: 'dme-004',
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '2–3 Years',
    category: 'full-time',
    description: 'We are hiring a results-oriented Digital Marketing Executive to plan and execute SEO, PPC, email marketing, and content strategies. You will drive qualified traffic, generate leads, and improve GangaTara\'s online presence and conversion rates.',
    responsibilities: [
      'Plan and execute SEO strategies to improve organic search rankings and traffic',
      'Manage Google Ads, Meta Ads, and LinkedIn Ads campaigns end-to-end',
      'Develop email marketing campaigns using tools like Mailchimp or HubSpot',
      'Produce and optimize landing page content for conversion',
      'Perform keyword research, competitor analysis, and monthly performance reporting',
      'Collaborate with the content team for blog and case study production',
      'Monitor and optimize campaigns using Google Analytics 4 and Search Console'
    ],
    requirements: [
      '2–3 years of digital marketing experience in an agency or IT company',
      'Proficiency in Google Analytics 4, Google Ads, and Meta Business Suite',
      'Strong understanding of on-page and off-page SEO techniques',
      'Experience with email marketing platforms (Mailchimp, HubSpot, etc.)',
      'Data-driven mindset with experience in A/B testing and conversion optimization',
      'Google Ads or HubSpot certification is a plus',
      'Good copywriting and content creation skills'
    ],
    benefits: [
      'Performance-linked bonuses on campaign KPIs',
      'Health & dental insurance',
      'Annual learning and certification budget',
      'Flexible hybrid schedule',
      'Access to premium marketing analytics tools'
    ]
  },
  {
    id: 'sd-005',
    title: 'Software Developer',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '1–3 Years',
    category: 'full-time',
    description: 'We are looking for a passionate Software Developer to design and build scalable software systems for enterprise clients. You will work on diverse projects spanning web apps, APIs, and backend systems, collaborating with senior engineers to deliver clean, tested code.',
    responsibilities: [
      'Develop and maintain backend services and APIs using Java, Python, or Node.js',
      'Participate in technical design discussions and architecture decisions',
      'Write unit and integration tests to ensure code quality',
      'Debug and resolve software defects reported by QA or clients',
      'Document technical specifications and code changes clearly',
      'Collaborate with frontend developers for seamless API integration',
      'Contribute to continuous improvement of development processes and tooling'
    ],
    requirements: [
      'Proficiency in Java, Python, or Node.js for backend development',
      'Good understanding of OOP principles, design patterns, and clean code practices',
      'Experience with relational databases (MySQL/PostgreSQL) and basic SQL',
      'Familiarity with REST API development and integration',
      'Knowledge of Git and code versioning workflows',
      'Basic understanding of Docker or containerization is a plus',
      'Problem-solving attitude with strong debugging skills'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health insurance for self and family',
      'Mentorship from senior engineers',
      'Technical learning budget and certification support',
      'Collaborative and innovative work culture'
    ]
  },
  {
    id: 'aas-006',
    title: 'AI Automation Specialist',
    department: 'AI & Data',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '2–4 Years',
    category: 'full-time',
    description: 'As an AI Automation Specialist, you will design and implement intelligent automation workflows, AI agents, and LLM-powered pipelines for enterprise clients. You will work at the intersection of AI/ML and software engineering to automate complex business processes.',
    responsibilities: [
      'Design and build AI-powered automation workflows using LLM APIs (OpenAI, Gemini, Claude)',
      'Develop RAG pipelines and vector database integrations for enterprise knowledge systems',
      'Automate repetitive business processes using Python and workflow orchestration tools',
      'Integrate AI agents with existing enterprise software via APIs and webhooks',
      'Evaluate AI model performance and fine-tune prompts for accuracy',
      'Collaborate with clients to identify automation opportunities and ROI',
      'Monitor AI system performance and implement improvements iteratively'
    ],
    requirements: [
      'Strong proficiency in Python for scripting and AI development',
      'Hands-on experience with OpenAI, Anthropic, Google Gemini, or similar LLM APIs',
      'Knowledge of LangChain, LlamaIndex, or similar AI orchestration frameworks',
      'Understanding of vector databases (Pinecone, Weaviate, pgvector)',
      'Experience with workflow automation tools (n8n, Zapier, or Make)',
      'Familiarity with REST APIs, webhooks, and data parsing',
      'Strong problem-solving skills and curiosity about emerging AI capabilities'
    ],
    benefits: [
      'Cutting-edge AI projects and research opportunities',
      'Competitive salary with project-based bonuses',
      'Health insurance and wellness benefits',
      'Access to premium AI tools and API credits',
      'Conferences, workshops, and AI community involvement'
    ]
  },
  {
    id: 'cse-007',
    title: 'Customer Support Executive',
    department: 'Client Success',
    location: 'Indore, MP (On-site)',
    type: 'Full-Time',
    experience: '1–2 Years',
    category: 'full-time',
    description: 'We are seeking a dedicated Customer Support Executive to provide exceptional client support for our software products and services. You will act as the primary point of contact for client queries, ensuring timely resolution and high customer satisfaction.',
    responsibilities: [
      'Respond to client queries via email, chat, and phone promptly and professionally',
      'Diagnose and troubleshoot basic software and platform issues for clients',
      'Escalate complex technical issues to the engineering team with proper documentation',
      'Maintain accurate records of client interactions in the CRM system',
      'Conduct onboarding sessions for new clients on our software products',
      'Gather and relay client feedback to the product and development teams',
      'Ensure client satisfaction scores (CSAT) consistently meet or exceed targets'
    ],
    requirements: [
      'Excellent verbal and written communication skills in English and Hindi',
      '1–2 years of experience in customer support or client success (IT preferred)',
      'Proficiency in CRM tools like Freshdesk, Zendesk, or HubSpot',
      'Basic understanding of web and mobile applications',
      'Patient, empathetic, and solution-oriented attitude',
      'Ability to multitask and manage multiple client queries simultaneously',
      'Good documentation and record-keeping skills'
    ],
    benefits: [
      'Fixed salary with performance incentives',
      'Health insurance coverage',
      'Soft skills and communication training programs',
      'Career growth path to Client Success Manager',
      'Supportive team culture and regular recognition'
    ]
  },
  {
    id: 'qa-008',
    title: 'Quality Assurance (QA) Engineer',
    department: 'Quality Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '2–4 Years',
    category: 'full-time',
    description: 'As a QA Engineer at GangaTara, you will be responsible for ensuring the highest quality of our software deliverables. You will design test strategies, execute test cases, and collaborate with developers to identify and resolve defects before production releases.',
    responsibilities: [
      'Design, write, and execute comprehensive manual and automated test cases',
      'Identify, document, and track software bugs using bug tracking tools',
      'Perform functional, regression, integration, and performance testing',
      'Develop automated test scripts using Selenium, Playwright, or Cypress',
      'Review requirements and user stories to identify testability and edge cases',
      'Collaborate with developers in agile sprints to ensure release quality',
      'Generate detailed test reports and present findings to stakeholders'
    ],
    requirements: [
      '2–4 years of QA experience with both manual and automated testing',
      'Proficiency in test automation tools (Selenium, Playwright, Cypress, or similar)',
      'Experience with API testing using Postman or REST Assured',
      'Knowledge of testing methodologies — black box, white box, regression',
      'Familiarity with bug tracking tools (Jira, Bugzilla, or similar)',
      'Basic scripting knowledge in Python or JavaScript',
      'ISTQB certification is a plus'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health and dental insurance',
      'Learning budget for QA tools and certifications',
      'Exposure to diverse enterprise-grade software projects',
      'Collaborative engineering culture with weekly code reviews'
    ]
  },
  {
    id: 'ste-009',
    title: 'Software Testing Engineer',
    department: 'Quality Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '1–3 Years',
    category: 'full-time',
    description: 'We are hiring a detail-oriented Software Testing Engineer to validate software functionality, performance, and security across web and mobile applications. You will ensure deliverables meet client requirements and maintain high engineering standards at GangaTara.',
    responsibilities: [
      'Execute functional, UI, and regression test cases on web and mobile apps',
      'Perform exploratory testing to identify edge cases and unexpected behaviors',
      'Create and maintain detailed test plans and test case documentation',
      'Conduct API testing and validate data flows across system integrations',
      'Report and track defects with clear reproduction steps and severity classification',
      'Participate in sprint reviews and provide sign-off on feature readiness',
      'Support performance testing and load testing activities'
    ],
    requirements: [
      '1–3 years of software testing experience',
      'Hands-on experience with manual testing of web and mobile applications',
      'Proficiency with Postman for API testing',
      'Familiarity with agile development and sprint-based workflows',
      'Good understanding of HTML, CSS, and basic JavaScript for UI testing',
      'Experience with test management tools like TestRail or Zephyr',
      'Attention to detail and systematic problem-solving approach'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance benefits',
      'Mentorship from experienced QA leads',
      'Hands-on exposure to diverse technology stacks',
      'Regular knowledge-sharing sessions and workshops'
    ]
  },
  {
    id: 'pm-010',
    title: 'Project Manager',
    department: 'Project Management Office',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-Time',
    experience: '4–6 Years',
    category: 'full-time',
    description: 'We are looking for an experienced Project Manager to lead end-to-end delivery of enterprise IT projects. You will coordinate cross-functional teams, manage timelines and budgets, ensure client satisfaction, and drive successful software delivery using agile methodologies.',
    responsibilities: [
      'Lead full project lifecycle from initiation to delivery for multiple concurrent projects',
      'Coordinate with engineering, design, QA, and client teams to ensure on-time delivery',
      'Define project scope, milestones, risk registers, and resource plans',
      'Facilitate daily standups, sprint planning, retrospectives, and stakeholder meetings',
      'Manage project budgets and provide accurate financial reporting to leadership',
      'Identify and mitigate project risks proactively',
      'Ensure client communication is clear, professional, and consistent throughout'
    ],
    requirements: [
      '4–6 years of IT project management experience',
      'PMP, PRINCE2, or Certified Scrum Master (CSM) certification preferred',
      'Strong proficiency with project management tools (Jira, Asana, MS Project)',
      'Excellent stakeholder management and communication skills',
      'Experience managing budgets of ₹50L+ projects',
      'Strong understanding of software development lifecycle (SDLC)',
      'Ability to manage multiple projects simultaneously with attention to detail'
    ],
    benefits: [
      'Attractive salary with performance bonuses',
      'Health insurance for self and family',
      'Leadership development and PMP certification support',
      'Flexible hybrid schedule',
      'Fast-track growth to Senior PM / Delivery Head roles'
    ]
  }
];

export const internshipsData: JobItem[] = [
  {
    id: 'int-fsd-001',
    title: 'Full Stack Developer Intern',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹8,000–₹12,000/month',
    description: 'Join our engineering team as a Full Stack Developer Intern and gain hands-on experience building real-world web applications. You will be mentored by senior engineers and contribute directly to live projects using modern technologies like React, Node.js, and cloud platforms.',
    responsibilities: [
      'Assist in developing frontend components using React.js and Next.js',
      'Work on backend API development with Node.js and Express',
      'Participate in code reviews and agile sprint ceremonies',
      'Write unit tests and document code changes properly',
      'Debug and resolve issues under guidance of senior developers',
      'Learn and apply best practices in software engineering and clean code'
    ],
    requirements: [
      'Pursuing or completed B.E./B.Tech/MCA in Computer Science or related field',
      'Basic knowledge of HTML, CSS, JavaScript, and React.js',
      'Familiarity with Node.js or any backend technology',
      'Understanding of REST APIs and JSON data formats',
      'Knowledge of Git version control',
      'Willingness to learn and adapt quickly in a fast-paced environment'
    ],
    benefits: [
      'Monthly stipend of ₹8,000–₹12,000',
      'Mentorship from experienced senior engineers',
      'Internship completion certificate',
      'Opportunity for pre-placement offer (PPO) based on performance',
      'Access to premium learning resources and internal tech talks'
    ]
  },
  {
    id: 'int-aiml-002',
    title: 'AI & Machine Learning Intern',
    department: 'AI & Data',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹8,000–₹15,000/month',
    description: 'Work alongside our AI engineers to build machine learning models, AI automation pipelines, and intelligent data systems. This internship is ideal for students passionate about artificial intelligence, LLMs, and data science who want real production experience.',
    responsibilities: [
      'Assist in building and training ML models for client projects',
      'Develop and test LLM-powered automation workflows using Python',
      'Clean, process, and analyze datasets for model training',
      'Integrate AI APIs (OpenAI, Gemini) into prototype applications',
      'Document experiments, model performance, and findings',
      'Collaborate with the AI team in sprint ceremonies and planning'
    ],
    requirements: [
      'Pursuing B.E./B.Tech/M.Tech/MCA with focus on AI, ML, or Data Science',
      'Proficiency in Python for data manipulation and scripting',
      'Familiarity with ML libraries: NumPy, Pandas, Scikit-learn, TensorFlow or PyTorch',
      'Basic understanding of machine learning concepts and algorithms',
      'Exposure to LLM APIs or NLP is a plus',
      'Strong analytical and problem-solving skills'
    ],
    benefits: [
      'Stipend of ₹8,000–₹15,000/month',
      'Work on real AI/ML production projects',
      'Mentorship from certified AI engineers',
      'Certificate of completion and LinkedIn recommendation',
      'Pre-placement offer for top performers'
    ]
  },
  {
    id: 'int-py-003',
    title: 'Python Developer Intern',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹6,000–₹10,000/month',
    description: 'As a Python Developer Intern, you will build backend scripts, automation tools, and APIs using Python. You will gain practical experience working in a professional engineering environment with exposure to Django, Flask, or FastAPI frameworks.',
    responsibilities: [
      'Develop Python scripts for data processing and automation tasks',
      'Assist in building REST APIs using Django REST Framework or FastAPI',
      'Work with databases (PostgreSQL, MySQL) using Python ORM tools',
      'Write unit tests and ensure code quality',
      'Debug and fix bugs reported during QA testing',
      'Participate in code reviews and team standups'
    ],
    requirements: [
      'Pursuing or completed B.E./B.Tech/BCA/MCA in CS or related field',
      'Strong foundational knowledge of Python programming',
      'Basic understanding of Django, Flask, or FastAPI',
      'Familiarity with SQL databases and basic query writing',
      'Knowledge of Git and version control',
      'Good problem-solving skills and a learning mindset'
    ],
    benefits: [
      'Monthly stipend of ₹6,000–₹10,000',
      'Hands-on Python development experience on live projects',
      'Mentorship and regular code review sessions',
      'Internship completion certificate',
      'PPO opportunity for exceptional performers'
    ]
  },
  {
    id: 'int-da-004',
    title: 'Data Analyst Intern',
    department: 'AI & Data',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹6,000–₹10,000/month',
    description: 'Join GangaTara\'s data team as a Data Analyst Intern and help transform raw business data into actionable insights. You will work on data cleaning, visualization, and reporting to support strategic decision-making for our clients.',
    responsibilities: [
      'Collect, clean, and organize large datasets from various sources',
      'Build dashboards and visualizations using Power BI, Tableau, or Google Looker',
      'Perform statistical analysis and generate actionable business reports',
      'Assist in writing SQL queries for data extraction and transformation',
      'Collaborate with the AI team on data preprocessing for ML pipelines',
      'Present data findings clearly in team and client meetings'
    ],
    requirements: [
      'Pursuing or completed B.E./B.Tech/BCA/MBA/BBA with focus on Data or Analytics',
      'Proficiency in Python or R for data analysis',
      'Good understanding of SQL for database querying',
      'Experience with Excel or Google Sheets for data handling',
      'Familiarity with data visualization tools (Power BI, Tableau) is a plus',
      'Strong attention to detail and analytical thinking'
    ],
    benefits: [
      'Stipend of ₹6,000–₹10,000/month',
      'Practical experience with real client datasets',
      'Certificate of internship completion',
      'Mentorship from senior data analysts',
      'Access to BI tools and data platforms'
    ]
  },
  {
    id: 'int-uiux-005',
    title: 'UI/UX Design Intern',
    department: 'Design',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹5,000–₹8,000/month',
    description: 'We are looking for a creative UI/UX Design Intern to join our design team and help craft stunning, user-centered interfaces for enterprise web and mobile applications. You will work closely with senior designers and developers to deliver visually exceptional and intuitive digital experiences.',
    responsibilities: [
      'Create wireframes, user flows, and interactive prototypes using Figma',
      'Conduct user research and usability testing to inform design decisions',
      'Collaborate with developers for accurate design handoff via Figma Dev Mode',
      'Design icons, illustrations, and UI components following brand guidelines',
      'Iterate on designs based on feedback from senior designers and clients',
      'Maintain and contribute to the shared design system library'
    ],
    requirements: [
      'Pursuing or completed degree in Design, HCI, CS, or related field',
      'Proficiency in Figma for wireframing and prototyping',
      'Portfolio showcasing UI/UX projects (personal or academic)',
      'Understanding of design principles: typography, color, spacing, accessibility',
      'Basic knowledge of HTML and CSS is a plus',
      'Strong attention to visual detail and user empathy'
    ],
    benefits: [
      'Stipend of ₹5,000–₹8,000/month',
      'Build a professional portfolio on real client projects',
      'Figma Professional access and design tools',
      'Mentorship from senior UI/UX designers',
      'Certificate of completion and LinkedIn endorsement'
    ]
  },
  {
    id: 'int-gd-006',
    title: 'Graphic Design Intern',
    department: 'Design',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹5,000–₹8,000/month',
    description: 'As a Graphic Design Intern at GangaTara, you will create visually compelling marketing materials, social media graphics, presentations, and brand assets. This is a great opportunity to develop your design skills in a professional IT company environment.',
    responsibilities: [
      'Design social media graphics, banners, and marketing collateral',
      'Create pitch decks, case study documents, and company presentations',
      'Produce motion graphics and short animated content for digital platforms',
      'Maintain brand consistency across all visual outputs',
      'Collaborate with the marketing and social media teams',
      'Manage multiple design requests and meet deadlines efficiently'
    ],
    requirements: [
      'Pursuing or completed degree in Graphic Design, Fine Arts, or related field',
      'Proficiency in Adobe Photoshop, Illustrator, and/or Canva',
      'Portfolio showcasing creative graphic design work',
      'Good understanding of visual composition, typography, and color theory',
      'Knowledge of motion graphics (After Effects) is a plus',
      'Ability to take creative direction and iterate based on feedback'
    ],
    benefits: [
      'Stipend of ₹5,000–₹8,000/month',
      'Creative environment with real brand design opportunities',
      'Access to Adobe Creative Cloud and design tools',
      'Certificate of internship completion',
      'Portfolio-building projects across multiple domains'
    ]
  },
  {
    id: 'int-smm-007',
    title: 'Social Media Marketing Intern',
    department: 'Marketing',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹4,000–₹7,000/month',
    description: 'Join our marketing team as a Social Media Marketing Intern to help grow GangaTara\'s online brand presence. You will assist in content creation, scheduling, community management, and campaign performance analysis across platforms.',
    responsibilities: [
      'Assist in creating and scheduling content for LinkedIn, Instagram, Twitter/X, and YouTube',
      'Engage with the community by responding to comments and messages',
      'Research trending topics and hashtags relevant to the IT industry',
      'Support the execution of paid social media ad campaigns',
      'Monitor social analytics and compile weekly performance reports',
      'Collaborate with designers to create visually appealing posts'
    ],
    requirements: [
      'Pursuing or completed BBA/MBA/BCom or any degree with marketing focus',
      'Genuine passion for social media platforms and digital trends',
      'Good written communication skills in English',
      'Basic familiarity with Canva or similar design tools',
      'Understanding of social media metrics and analytics',
      'Creative mindset with enthusiasm for content creation'
    ],
    benefits: [
      'Stipend of ₹4,000–₹7,000/month',
      'Hands-on experience managing brand social accounts',
      'Learn from experienced digital marketers',
      'Certificate of completion',
      'Letter of recommendation for top performers'
    ]
  },
  {
    id: 'int-bd-008',
    title: 'Business Development Intern',
    department: 'Sales & Growth',
    location: 'Indore, MP (On-site)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹5,000–₹8,000/month',
    description: 'As a Business Development Intern, you will support the sales team in lead generation, market research, and client outreach. This is an excellent opportunity to understand B2B IT sales and develop professional business communication skills.',
    responsibilities: [
      'Research and identify potential clients and business opportunities',
      'Assist in lead generation through LinkedIn, email outreach, and directories',
      'Prepare market research reports on industry trends and competitor analysis',
      'Support in creating proposals, presentations, and sales collateral',
      'Update and maintain the CRM database with accurate prospect information',
      'Shadow senior BD executives during client calls and meetings'
    ],
    requirements: [
      'Pursuing or completed BBA/MBA/BCom in Marketing, Sales, or Management',
      'Strong verbal and written communication skills',
      'Proactive, self-motivated, and target-oriented attitude',
      'Basic knowledge of LinkedIn Sales Navigator or CRM tools is a plus',
      'Understanding of IT services and technology products is preferred',
      'Good research and analytical skills'
    ],
    benefits: [
      'Stipend of ₹5,000–₹8,000/month',
      'Real-world B2B sales experience',
      'Mentorship from senior business development managers',
      'Certificate of completion',
      'PPO opportunity based on performance'
    ]
  },
  {
    id: 'int-hr-009',
    title: 'HR Intern',
    department: 'Human Resources',
    location: 'Indore, MP (On-site)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹4,000–₹6,000/month',
    description: 'We are looking for an enthusiastic HR Intern to support our Human Resources team in recruitment, onboarding, employee engagement, and HR operations. You will gain practical experience in end-to-end HR processes at a growing technology company.',
    responsibilities: [
      'Assist in sourcing and screening candidates through job portals and LinkedIn',
      'Schedule and coordinate interviews between candidates and hiring managers',
      'Support new employee onboarding and documentation processes',
      'Maintain and update HR databases and employee records accurately',
      'Assist in organizing employee engagement events and internal programs',
      'Help draft job descriptions, offer letters, and HR communications'
    ],
    requirements: [
      'Pursuing or completed MBA/BBA/PGDM with HR specialization',
      'Good interpersonal and communication skills',
      'Proficiency in MS Office (Word, Excel, PowerPoint)',
      'Basic knowledge of HR processes — recruitment, onboarding, compliance',
      'Organizational skills and ability to maintain confidentiality',
      'Genuine interest in people management and organizational culture'
    ],
    benefits: [
      'Stipend of ₹4,000–₹6,000/month',
      'End-to-end HR operational experience',
      'Mentorship from senior HR professionals',
      'Certificate of internship completion',
      'Exposure to talent acquisition and HR tech tools'
    ]
  },
  {
    id: 'int-sd-010',
    title: 'Software Developer Intern',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid)',
    type: 'Internship',
    experience: 'Fresher / 0–1 Year',
    category: 'internship',
    duration: '3–6 Months',
    stipend: '₹6,000–₹10,000/month',
    description: 'The Software Developer Intern role is designed for students who want to transition from academic projects to professional software development. You will contribute to building real software systems under the guidance of experienced engineers, learning industry-standard practices.',
    responsibilities: [
      'Assist in developing and testing software modules and features',
      'Write clean, readable code following team standards and guidelines',
      'Fix bugs and resolve issues identified during testing',
      'Participate in daily standups and contribute to sprint planning',
      'Document code and create basic technical specifications',
      'Learn and apply agile software development methodologies'
    ],
    requirements: [
      'Pursuing B.E./B.Tech/MCA/BCA in Computer Science or related field',
      'Knowledge of at least one programming language: Java, Python, C++, or JavaScript',
      'Basic understanding of data structures and algorithms',
      'Familiarity with Git for version control',
      'Eagerness to learn and contribute to a professional team environment',
      'Good logical reasoning and analytical skills'
    ],
    benefits: [
      'Stipend of ₹6,000–₹10,000/month',
      'Professional software development mentorship',
      'Internship certificate and LinkedIn recommendation',
      'Exposure to full software development lifecycle',
      'Pre-placement offer opportunity for high performers'
    ]
  }
];

// ─── Webinars / Events ──────────────────────────────────────────────────────

export interface WebinarItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  registerLink: string;
  image: string;
}

export const webinarsData: WebinarItem[] = [
  {
    id: 'w1',
    title: 'Building Secure GenAI Pipelines for the Enterprise',
    date: 'July 24, 2026',
    location: 'Virtual — Zoom Webinar',
    description: 'Learn how GangaTara architects design retrieval-augmented generation (RAG) systems that keep corporate data private while unlocking the full power of large language models.',
    category: 'AI & Machine Learning',
    registerLink: '/contact',
    image: IMAGES.events.ai
  },
  {
    id: 'w2',
    title: 'Cloud Cost Optimization Masterclass — FinOps in Practice',
    date: 'August 12, 2026',
    location: 'Virtual — Google Meet',
    description: 'Our senior cloud architects share proven FinOps frameworks that help enterprise clients cut cloud spend by 30–40% without sacrificing performance or reliability.',
    category: 'Cloud & DevOps',
    registerLink: '/contact',
    image: IMAGES.events.cloud
  },
  {
    id: 'w3',
    title: 'Zero-Trust Security Architecture for Modern Enterprises',
    date: 'September 5, 2026',
    location: 'Munich, Germany + Virtual',
    description: 'A deep dive into implementing zero-trust network access, IAM strategies, and automated vulnerability scanning to protect your enterprise perimeter in 2026.',
    category: 'Cybersecurity',
    registerLink: '/contact',
    image: IMAGES.events.security
  }
];

// ─── What's New Carousel Slides ─────────────────────────────────────────────

export interface WhatsNewItem {
  id: string;
  headline: string;
  description: string;
  tag: string;
  date: string;
  link: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}

export const whatsNewData: WhatsNewItem[] = [
  {
    id: 'wn1',
    headline: 'GangaTara Achieves Google Cloud Partner of the Year 2025',
    description: 'Recognized for exceptional delivery of multi-cloud migrations and AI-driven analytics solutions for enterprise clients across APAC and EMEA.',
    tag: 'Recognition',
    date: 'June 2026',
    link: '/about',
    image: IMAGES.whatsNew.googlePartner,
    gradientFrom: '#0057FF',
    gradientTo: '#4A4B50'
  },
  {
    id: 'wn2',
    headline: 'Introducing GangaTara AI Studio — Deploy GenAI in Days',
    description: 'Our new AI Studio platform lets enterprise teams prototype, evaluate, and deploy production-grade LLM-powered workflows inside their own secure cloud environment.',
    tag: 'Product Launch',
    date: 'May 2026',
    link: '/products',
    image: IMAGES.whatsNew.aiStudioLaunch,
    gradientFrom: '#4A4B50',
    gradientTo: '#00B4FF'
  },
  {
    id: 'wn3',
    headline: 'GangaTara Is Hiring 200+ Engineers Globally in 2026',
    description: 'Expanding global delivery centers in Pune, Munich, and Singapore. Join us to build next-generation enterprise software products that serve millions.',
    tag: 'Careers',
    date: 'April 2026',
    link: '/careers',
    image: IMAGES.whatsNew.hiringEngineers,
    gradientFrom: '#0057FF',
    gradientTo: '#10B981'
  },
  {
    id: 'wn4',
    headline: 'CloudOps Suite Now Available on AWS Marketplace',
    description: 'Our infrastructure automation toolchain — FinOps monitors, security posture dashboards, and GitOps orchestrators — is now one-click deployable via AWS.',
    tag: 'News',
    date: 'March 2026',
    link: '/products',
    image: IMAGES.whatsNew.cloudOpsMarketplace,
    gradientFrom: '#00B4FF',
    gradientTo: '#4A4B50'
  }
];

// ─── Products Showcase ───────────────────────────────────────────────────────

export interface ProductItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  badge?: string;
  link: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'ai-studio',
    title: 'GangaTara AI Studio',
    shortDesc: 'No-code GenAI workflow builder with RAG pipelines, LLM orchestration, and enterprise SSO.',
    category: 'AI Platform',
    badge: 'New',
    link: '/products'
  },
  {
    id: 'cloudops-suite',
    title: 'CloudOps Suite',
    shortDesc: 'Unified FinOps, security posture, and GitOps dashboards for AWS, Azure, and GCP.',
    category: 'Cloud Management',
    link: '/products'
  },
  {
    id: 'databridge',
    title: 'DataBridge ETL',
    shortDesc: 'Real-time data pipeline orchestration connecting 200+ enterprise data sources.',
    category: 'Data Engineering',
    link: '/products'
  },
  {
    id: 'sentry-ztna',
    title: 'Sentry ZTNA',
    shortDesc: 'Zero-trust network access with biometric identity enforcement and threat analytics.',
    category: 'Security',
    badge: 'Beta',
    link: '/products'
  },
  {
    id: 'gt-lms',
    title: 'GangaTara LMS',
    shortDesc: 'Enterprise learning management system with AI-curated learning paths and skills tracking.',
    category: 'EdTech Platform',
    link: '/products'
  }
];
