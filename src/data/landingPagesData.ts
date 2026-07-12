export interface CardItem {
  image: string;
  title: string;
  link: string;
  category?: string;
}

export interface LandingPageContent {
  id: string;
  hero: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    bgImage: string;
  };
  intro: {
    eyebrow: string;
    paragraph: string;
  };
  featuredInsight: {
    title: string;
    text: string;
    image: string;
    link: string;
    align: 'left' | 'right';
  };
  inFocus: {
    tabs: {
      label: string;
      cards: CardItem[];
    }[];
  };
  secondFeatured: {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
    link: string;
  };
  solutions: {
    tabs: {
      label: string;
      cards: CardItem[];
    }[];
  };
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  recognition?: {
    eyebrow: string;
    title: string;
    text: string;
    image: string;
    link: string;
  };
  videoShowcase?: {
    title: string;
    description: string;
    videoUrl: string;
    poster: string;
    caption: string;
  };
}

export const landingPagesData: Record<string, LandingPageContent> = {
  // ─── INDUSTRIES ─────────────────────────────────────────────────────────────
  healthcare: {
    id: 'healthcare',
    hero: {
      breadcrumb: 'INDUSTRIES / HEALTHCARE & LIFE SCIENCES',
      eyebrow: 'INTELLIGENT. COMPLIANT. PATIENT-CENTRIC.',
      title: 'Digital Health, Redefined and Secured',
      subtitle: 'We engineer HIPAA-compliant cloud systems, interoperable EHR platforms, and real-time medical analytics that empower clinicians and elevate patient care.',
      bgImage: '/ind_healthcare.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN HEALTHCARE & LIFE SCIENCES',
      paragraph: 'The healthcare sector faces unprecedented demands: from legacy system modernization and strict regulatory compliance (HIPAA/GDPR) to the integration of real-time clinical AI. GangaTara Technologies addresses these complex hurdles by deploying secure cloud-native architectures, automating patient record indexing, and building predictive patient monitoring pipelines that ensure operational continuity and protect patient confidentiality.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Healthcare Technology Trends 2026',
      text: 'Our latest whitepaper explores the deployment of federated learning in medical institutions. Learn how hospitals train diagnostic AI models on secure patient data pools without violating privacy boundaries or exposing raw health records.',
      image: '/ind_health_1.png',
      link: '/insights',
      align: 'right',
    },
    videoShowcase: {
      title: 'HIPAA-Compliant Telehealth & EHR Platform Scale-Out Demo',
      description: 'Explore the live engineering walkthrough of our serverless medical video routing and patient intake portal. Learn how the system auto-scales during 400% active user spikes without packet loss.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_health_1.png',
      caption: 'Walkthrough of MediHealth Group Telehealth scaling architecture',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_health_2.png', title: 'The Future of HIPAA-Compliant Multi-Cloud Deployments', link: '/insights' },
            { image: '/ind_health_1.png', title: 'Generative AI in Patient Admissions Management', link: '/insights' },
          ],
        },
        {
          label: 'Case Studies',
          cards: [
            { image: '/ind_health_2.png', title: 'MediHealth Group: EHR Modernization & Migration', link: '/case-studies/telehealth-platform-transformation' },
          ],
        },
        {
          label: 'Press Releases',
          cards: [
            { image: '/ind_health_1.png', title: 'GangaTara Partners with MedTech Alliance for Diagnostics AI', link: '/blog' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'AI IN HEALTHCARE',
      title: 'Accelerating Diagnostics with Cognitive Pipelines',
      text: 'By constructing secure, GPU-accelerated computer vision pipelines, GangaTara enables medical imaging companies to reduce analysis times from hours to seconds. Our zero-trust data access protocols ensure that patient scans are processed in secure sandboxes.',
      image: '/ind_health_2.png',
      link: '/services/ai-machine-learning',
    },
    solutions: {
      tabs: [
        {
          label: 'Industry Solutions',
          cards: [
            { image: '/ind_health_1.png', title: 'Interoperable EHR Data Bridges', link: '/services/web-development' },
            { image: '/ind_health_2.png', title: 'HIPAA Cloud Landing Zones', link: '/services/cloud-solutions' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/ind_health_1.png', title: 'GangaTara AI HealthStudio', link: '/products' },
            { image: '/ind_health_2.png', title: 'Sentry ZTNA for Hospitals', link: '/products' },
          ],
        },
      ],
    },
    clientQuote: {
      quote: 'GangaTara Technologies migrated our legacy EHR portal to a secure, highly scalable cloud environment. Their compliance-first engineering methodology gave us complete peace of mind.',
      author: 'Sarah Jenkins',
      role: 'Chief Technology Officer',
      company: 'MediHealth Group',
    },
    recognition: {
      eyebrow: 'COMPLIANCE & AUDITS',
      title: 'GangaTara Achieves ISO 27001 Recertification for Medical Data Systems',
      text: 'Our information security management system (ISMS) has been verified compliant under the latest ISO standards, ensuring maximum protection for client codebases.',
      image: '/ind_health_2.png',
      link: '/about',
    },
  },

  finance: {
    id: 'finance',
    hero: {
      breadcrumb: 'INDUSTRIES / BANKING & FINANCE',
      eyebrow: 'SECURE. HIGH-VELOCITY. SCALABLE.',
      title: 'Banking, Simplified and Secured',
      subtitle: 'We engineer high-throughput transactional backends, blockchain ledger systems, and real-time fraud mitigation pipelines for international financial institutions.',
      bgImage: '/ind_finance.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN BFSI',
      paragraph: 'Modern financial systems demand instantaneous settlement times, absolute ledger auditability, and watertight cybersecurity perimeters. GangaTara Technologies meets these rigorous enterprise demands by designing secure zero-trust network access (ZTNA), high-performance cloud architectures, and machine learning transaction monitoring that flag anomalies before they impact the bottom line.',
    },
    featuredInsight: {
      title: 'GangaTara Research — FinOps & Cloud Economics 2026',
      text: 'Our research report outlines strategic frameworks for cloud-native asset management. Learn how retail banks cut computing operational expenses by 35% through dynamic serverless scheduling and automated database scaling.',
      image: '/ind_finance_1.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Real-Time Transaction Fraud Detection Pipeline In Action',
      description: 'Watch Sarthi assistant showcase the sub-10ms event processing engine running on Apache Kafka and PyTorch models, tracking simulated fraud attempts live.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_finance_1.png',
      caption: 'Real-time telemetry and fraud prevention dashboard walkthrough',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_finance_2.png', title: 'Zero-Trust Architecture for Decentralized Banking', link: '/insights' },
            { image: '/ind_finance_1.png', title: 'Federated Learning for Real-Time Fraud Identification', link: '/insights' },
          ],
        },
        {
          label: 'Case Studies',
          cards: [
            { image: '/ind_finance_2.png', title: 'Apex Global Finance: Blockchain Core Settlement', link: '/case-studies/realtime-banking-fraud-prevention' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'AI & COGNITIVE SCALING',
      title: 'Cognitive Risk Auditing for Modern Banking',
      text: 'Deploy automated risk-modeling agents across your entire transactional ledger. GangaTara\'s AI engines process unstructured contract data, ledger entries, and market movements to generate real-time compliance forecasts.',
      image: '/ind_finance_2.png',
      link: '/services/ai-machine-learning',
    },
    solutions: {
      tabs: [
        {
          label: 'Industry Solutions',
          cards: [
            { image: '/ind_finance_1.png', title: 'GangaTara Core Ledger Engine', link: '/products' },
            { image: '/ind_finance_2.png', title: 'Compliance Vault for BFSI', link: '/services/cyber-security' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/ind_finance_1.png', title: 'Sentry ZTNA Core Gateway', link: '/products' },
            { image: '/ind_finance_2.png', title: 'DataBridge ETL for Finance', link: '/products' },
          ],
        },
      ],
    },
    recognition: {
      eyebrow: 'ACCREDITATIONS',
      title: 'GangaTara Recognized as AWS Advanced Consulting Partner',
      text: 'Acknowledging our delivery speed, depth of certified engineering talent, and expertise in migrating complex financial workloads to AWS.',
      image: '/ind_finance_2.png',
      link: '/about',
    },
  },

  retail: {
    id: 'retail',
    hero: {
      breadcrumb: 'INDUSTRIES / RETAIL & E-COMMERCE',
      eyebrow: 'OMNICHANNEL. FRICTIONLESS. REAL-TIME.',
      title: 'Frictionless Omnichannel Retail Solutions',
      subtitle: 'We engineer dynamic product search engines, microservices-based e-commerce backends, and real-time supply chain inventory forecasting pipelines.',
      bgImage: '/ind_retail.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN RETAIL & COMMERCE',
      paragraph: 'The digital retail sector demands absolute system availability during seasonal traffic peaks, personalized real-time catalog recommendations, and automated order fulfillment. GangaTara Technologies constructs headless commerce architectures, secure payment integrations, and AI-driven inventory models that ensure checkout remains fast and stock levels stay optimized.',
    },
    featuredInsight: {
      title: 'GangaTara Research — The Shift to Headless Commerce',
      text: 'Discover why top retail brands are transitioning from monolithic platforms to API-first, headless commerce systems to reduce page load times and improve conversion rates.',
      image: '/ind_retail_1.png',
      link: '/insights',
      align: 'right',
    },
    videoShowcase: {
      title: 'Next-Generation Headless Commerce Live Showcase',
      description: 'Watch a demo of our ultra-fast Next.js frontend combined with Redis caching, resulting in 0.6-second page loads and seamless transactional scaling.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_retail_1.png',
      caption: 'Headless e-commerce performance and checkout flow demo',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_retail_2.png', title: 'Scaling Omnichannel Platforms for Peak Seasonal Demand', link: '/insights' },
            { image: '/ind_retail_1.png', title: 'Vector Search Integration in Catalog Filtering', link: '/insights' },
          ],
        },
        {
          label: 'Case Studies',
          cards: [
            { image: '/ind_retail_2.png', title: 'Veloce Apparel: Monolith to Headless Microservices Migration', link: '/case-studies/headless-retail-scale-out' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'AI IN COMMERCE',
      title: 'Predictive Demand Planning & Dynamic Pricing',
      text: 'Deploy AI models that analyze real-time market data, purchase histories, and inventory levels. GangaTara\'s custom engines enable retailers to dynamically adjust prices and automate supplier restock triggers.',
      image: '/ind_retail_1.png',
      link: '/services/ai-machine-learning',
    },
    solutions: {
      tabs: [
        {
          label: 'Industry Solutions',
          cards: [
            { image: '/ind_retail_1.png', title: 'Headless E-Commerce Accelerators', link: '/services/web-development' },
            { image: '/ind_retail_2.png', title: 'Inventory Analytics Dashboards', link: '/services/software-development' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/ind_retail_1.png', title: 'DataBridge ETL Suite', link: '/products' },
          ],
        },
      ],
    },
  },

  manufacturing: {
    id: 'manufacturing',
    hero: {
      breadcrumb: 'INDUSTRIES / MANUFACTURING',
      eyebrow: 'AUTOMATED. PREDICTIVE. EFFICIENT.',
      title: 'Smart Factory & Industrial IoT Solutions',
      subtitle: 'We deploy secure edge-computing architectures, predictive maintenance pipelines, and centralized logistics tracking platforms for global manufacturers.',
      bgImage: '/ind_manufacturing.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN INDUSTRY 4.0',
      paragraph: 'Unscheduled factory downtime is incredibly costly. GangaTara Technologies deploys secure industrial IoT (IIoT) sensors, edge-gateway architectures, and anomaly detection algorithms that warn engineering teams of component wear before failures happen, optimizing overall equipment efficiency.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Industrial IIoT Security 2026',
      text: 'An in-depth study on securing legacy operational technology (OT) networks using software-defined perimeters and micro-segmentation to block external cyberthreats.',
      image: '/ind_mfg_1.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Industrial IoT Telemetry & Anomaly Detection Demonstration',
      description: 'A visual demo of our MQTT-based sensor fleet dashboard, showcasing real-time anomaly alerts and edge-computing predictive equipment maintenance logs.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_mfg_1.png',
      caption: 'Vibration and thermal telemetry analysis tool walkthrough',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_mfg_2.png', title: 'Edge Computing Architectures for Real-Time Assembly Line Inspection', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'PREDICTIVE AI',
      title: 'Zero-Downtime Factory Control Systems',
      text: 'By training localized machine learning models on vibration, acoustic, and thermal telemetry, GangaTara helps manufacturing clients identify operational deviations in real-time, sending instant maintenance tickets.',
      image: '/ind_mfg_2.png',
      link: '/services/ai-machine-learning',
    },
    solutions: {
      tabs: [
        {
          label: 'Industry Solutions',
          cards: [
            { image: '/ind_mfg_1.png', title: 'Edge-Gateway Sensor Collectors', link: '/services/software-development' },
            { image: '/ind_mfg_2.png', title: 'Supply Chain Track & Trace portals', link: '/services/web-development' },
          ],
        },
      ],
    },
  },

  education: {
    id: 'education',
    hero: {
      breadcrumb: 'INDUSTRIES / EDUCATION & EDTECH',
      eyebrow: 'ACCESSIBLE. ENGAGING. CLOUD-SCALE.',
      title: 'Next-Generation Academic Platforms',
      subtitle: 'We engineer cloud-native Learning Management Systems (LMS), student data platforms, and secure virtual classroom portals for schools and universities.',
      bgImage: '/ind_education.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN DIGITAL LEARNING',
      paragraph: 'Educational platforms must support hundreds of thousands of concurrent users, comply with student data privacy acts, and offer personalized learning tracks. GangaTara Technologies designs modular architectures and serverless systems that handle rapid user spikes during exams while keeping data private.',
    },
    featuredInsight: {
      title: 'GangaTara Research — AI-Curated Learning Paths',
      text: 'A research whitepaper detailing how machine learning analysis of study habits can dynamically adjust lecture paces and recommend homework modules for improved comprehension.',
      image: '/ind_edu_1.png',
      link: '/insights',
      align: 'right',
    },
    videoShowcase: {
      title: 'GangaTara LMS Platform Architecture Walkthrough',
      description: 'Take a virtual tour of our modern, accessible LMS. Watch how it handles student registration, dynamic content delivery, and interactive exam modules under heavy loads.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_edu_1.png',
      caption: 'LMS dashboard interface and proctoring tools demo',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_edu_2.png', title: 'Scalable Serverless Infrastructure for Massive Open Online Courses', link: '/insights' },
          ],
        },
        {
          label: 'Case Studies',
          cards: [
            { image: '/ind_edu_2.png', title: 'EduStream: LMS Scale-up for 500k Students', link: '/case-studies' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'TECHNOLOGY IMPACT',
      title: 'Biometric Exam Proctoring & Identity Verification',
      text: 'By integrating advanced biometric facial verification and multi-factor authentication, GangaTara ensures the integrity of virtual testing environments for universities.',
      image: '/ind_edu_2.png',
      link: '/services/cyber-security',
    },
    solutions: {
      tabs: [
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/ind_edu_1.png', title: 'GangaTara LMS', link: '/products' },
          ],
        },
      ],
    },
  },

  government: {
    id: 'government',
    hero: {
      breadcrumb: 'INDUSTRIES / GOVERNMENT & PUBLIC SECTOR',
      eyebrow: 'SECURE. CITIZEN-CENTRIC. COMPLIANT.',
      title: 'Digital Public Infrastructure & Government Portals',
      subtitle: 'We build secure, accessible, and high-performance citizen portals, administrative backends, and zero-trust cloud architectures for local governments.',
      bgImage: '/ind_government.png',
    },
    intro: {
      eyebrow: 'INNOVATION IN PUBLIC SERVICES',
      paragraph: 'Public sector portals require absolute security clearance, compliance with accessibility declarations, and resilient server architectures. GangaTara Technologies engineers WCAG 2.1 AA compliant portals, encrypted administrative databases, and load-balanced cloud infrastructure.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Securing Municipal Databases',
      text: 'Learn how modern municipal databases implement biometric authorization and hardware security keys to defend public systems from advanced persistent threat (APT) attacks.',
      image: '/ind_gov_1.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Secure Citizen Portal & Administrative Flow Demo',
      description: 'A detailed demo showcasing WCAG accessibility controls, encrypted document submittal, and citizen login workflows on a tablet device.',
      videoUrl: '/hero-video.mp4',
      poster: '/ind_gov_1.png',
      caption: 'Walkthrough of secure citizen platform tools and database safety grid',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/ind_gov_2.png', title: 'Implementing WCAG AA Accessibility Standards in Government Portals', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'ZERO-TRUST ARCHITECTURE',
      title: 'Zero-Trust Networks for Administrative Agencies',
      text: 'We help government agencies transition away from legacy VPNs to modern, context-aware Zero-Trust Network Access (ZTNA) solutions, preventing lateral network intrusion.',
      image: '/ind_gov_2.png',
      link: '/services/cyber-security',
    },
    solutions: {
      tabs: [
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/ind_gov_1.png', title: 'Sentry ZTNA Gateway', link: '/products' },
          ],
        },
      ],
    },
  },

  // ─── SERVICES ───────────────────────────────────────────────────────────────
  'cloud-solutions': {
    id: 'cloud-solutions',
    hero: {
      breadcrumb: 'SERVICES / CLOUD SOLUTIONS',
      eyebrow: 'SCALABLE. RESILIENT. FINOPS-OPTIMIZED.',
      title: 'Enterprise Cloud Solutions & Migrations',
      subtitle: 'We engineer multi-cloud migrations, secure serverless deployments, Kubernetes architectures, and FinOps practices that scale alongside your transaction volume.',
      bgImage: '/slide_cloud.png',
    },
    intro: {
      eyebrow: 'ENTERPRISE CLOUD TRANSFORMATION',
      paragraph: 'Moving mission-critical systems to the cloud requires precise zero-downtime execution, absolute data integrity, and strict cost controls. GangaTara Technologies designs resilient multi-cloud strategies, builds secure container infrastructure on AWS, GCP, and Azure, and integrates FinOps cost optimization frameworks.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Cloud Cost Optimization in 2026',
      text: 'A quantitative analysis of auto-scaling container configurations. Discover how enterprise organizations reduce unused database capacity by up to 40% using event-driven scheduling.',
      image: '/slide_datacenter.png',
      link: '/insights',
      align: 'right',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/slide_cloud.png', title: 'FinOps in Practice: Automating Infrastructure Cost Auditing', link: '/insights' },
          ],
        },
        {
          label: 'Case Studies',
          cards: [
            { image: '/slide_datacenter.png', title: 'Apex Global Finance: Core Settlement Cloud Migration', link: '/case-studies' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'GITOPS & IACOPS',
      title: 'Automated Infrastructure as Code (IaC) Pipelines',
      text: 'We construct secure Terraform and Pulumi pipelines that auto-scan modules for vulnerabilities before deployment. Our GitOps setups ensure that your running infrastructure matches repository state.',
      image: '/slide_team.png',
      link: '/services/devops',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/slide_cloud.png', title: 'Kubernetes Orchestration Standard', link: '/technologies' },
            { image: '/slide_datacenter.png', title: 'AWS Landing Zone Blueprints', link: '/technologies' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/slide_cloud.png', title: 'CloudOps Suite', link: '/products' },
          ],
        },
      ],
    },
  },

  'ai-machine-learning': {
    id: 'ai-machine-learning',
    hero: {
      breadcrumb: 'SERVICES / AI & MACHINE LEARNING',
      eyebrow: 'COGNITIVE. INTEGRATED. COMPLIANT.',
      title: 'Enterprise AI & Cognitive Workflows',
      subtitle: 'We design retrieval-augmented generation (RAG) pipelines, secure semantic databases, automated risk forecasting, and localized model hosting.',
      bgImage: '/slide_ai.png',
    },
    intro: {
      eyebrow: 'ADVANCED COGNITIVE ENGINEERING',
      paragraph: 'Integrating artificial intelligence into enterprise workflows requires strict data sovereignty controls, predictable response times, and robust evaluation metrics. GangaTara Technologies constructs secure RAG architectures, orchestrates model fine-tuning inside client cloud boundaries, and secures vector databases.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Deploying Secure RAG in BFSI',
      text: 'Learn how to construct semantic indexing systems that enforce role-based access control, ensuring LLMs do not leak restricted database entries during chat.',
      image: '/slide_datacenter.png',
      link: '/insights',
      align: 'left',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/slide_ai.png', title: 'Semantic Search Integration in Enterprise ERP Systems', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'MLOPS PIPELINES',
      title: 'GPU Cluster Orchestration & Deployment',
      text: 'We build automated pipelines that handle data ingestion, automated label alignment, model validation, and deployment to secure REST API gateways, reducing AI cycle times.',
      image: '/slide_cloud.png',
      link: '/services/devops',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/slide_ai.png', title: 'PyTorch & HuggingFace pipelines', link: '/technologies' },
            { image: '/slide_datacenter.png', title: 'Vector Database Integrations', link: '/technologies' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/slide_ai.png', title: 'GangaTara AI Studio', link: '/products' },
          ],
        },
      ],
    },
  },

  'cyber-security': {
    id: 'cyber-security',
    hero: {
      breadcrumb: 'SERVICES / CYBERSECURITY',
      eyebrow: 'DEFENSIVE. ZERO-TRUST. COMPLIANT.',
      title: 'Zero-Trust Cybersecurity & Threat Management',
      subtitle: 'We construct secure corporate perimeters, audit software repositories, deploy biometric IAM solutions, and automate security scanning.',
      bgImage: '/slide_datacenter.png',
    },
    intro: {
      eyebrow: 'ZERO-TRUST CYBER SECURITY',
      paragraph: 'With rising ransomware threats and lateral network intrusions, traditional VPN systems are no longer sufficient. GangaTara Technologies constructs secure Zero-Trust Network Access (ZTNA) solutions, integrates biometric identity providers, and runs automated compliance checks.',
    },
    featuredInsight: {
      title: 'GangaTara Research — Threat Landscapes 2026',
      text: 'An analytical review of cloud security posture management. Learn how real-time configuration drift detection blocks 98% of unauthorized server access attempts.',
      image: '/slide_cloud.png',
      link: '/insights',
      align: 'right',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/slide_datacenter.png', title: 'Securing Decentralized Engineering Teams from Phishing', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'CODE AUDITS',
      title: 'Static Application Security Testing (SAST) Integration',
      text: 'We embed automatic dependency security audits and static analyzer checks directly into your CI/CD pipelines, flagging potential SQL injection and XSS exploits before release.',
      image: '/slide_team.png',
      link: '/services/devops',
    },
    solutions: {
      tabs: [
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/slide_cloud.png', title: 'Sentry ZTNA Gateway', link: '/products' },
          ],
        },
      ],
    },
  },
};
