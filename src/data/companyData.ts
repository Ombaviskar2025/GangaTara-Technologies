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
  requirements: string[];
  benefits: string[];
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
    id: 'j1',
    title: 'Senior React / Next.js Engineer',
    department: 'Frontend Engineering',
    location: 'Hybrid (Munich, Germany)',
    type: 'Full-Time',
    experience: '5+ Years',
    description: 'We are looking for a Senior React/Next.js frontend engineer to build premium, high-speed corporate portals. You will lead design system implementation and optimize client-side performance.',
    requirements: [
      'Expert proficiency in React.js, Next.js (App Router), and TypeScript.',
      'Strong eye for UI/UX detail and experience with Framer Motion or GSAP.',
      'Deep knowledge of web vitals performance optimization and server-side rendering patterns.',
      'Experience setting up responsive Tailwind CSS configurations.'
    ],
    benefits: [
      'Competitive salary + annual performance bonuses.',
      'Comprehensive family medical, dental, and vision insurance.',
      'Flexible hybrid schedule (2 days office, 3 days home).',
      '€2,000 annual learning and conference budget.'
    ]
  },
  {
    id: 'j2',
    title: 'Senior MLOps & Cloud Architect',
    department: 'AI & Data Infrastructure',
    location: 'Remote (Europe / Americas)',
    type: 'Full-Time',
    experience: '7+ Years',
    description: 'Help us design high-throughput AI pipelines. You will orchestrate GPU clusters, construct automated model deployment systems, and secure semantic data storage environments.',
    requirements: [
      'Extensive experience managing AWS or Google Cloud infrastructure.',
      'Proficiency with Kubernetes, Docker, and Terraform IaC.',
      'Experience setting up ML pipelines with PyTorch, MLflow, or Kubeflow.',
      'Deep understanding of vector databases and API security.'
    ],
    benefits: [
      'Competitive salary with stock options package.',
      'Work from anywhere in supported timezones.',
      'Home office stipend (€1,500 setup budget).',
      '28 days of paid annual leave.'
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
