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
  pillars?: {
    title: string;
    description: string;
  }[];
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
    pillars: [
      {
        title: 'EHR Interoperability & HL7 FHIR',
        description: 'We engineer custom API integrations and data brokers using HL7 FHIR standards, enabling seamless, secure electronic health record transfers between legacy clinical portals, hospital labs, and diagnostic databases.'
      },
      {
        title: 'Regulatory Compliance & HIPAA Guardrails',
        description: 'Our cloud landing zones are architected with automated HIPAA, GDPR, and HITECH compliance guardrails. We implement KMS-driven data encryption at rest and transit, comprehensive access audits, and secure tokenization.'
      },
      {
        title: 'Real-Time Patient Monitoring AI',
        description: 'We deploy edge-computing predictive monitoring solutions that analyze patient telemetry data streams directly from smart clinical devices, helping medical staff predict critical events and reduce reaction times.'
      }
    ],
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
    pillars: [
      {
        title: 'Sub-10ms Fraud Prevention',
        description: 'We deploy distributed stream-processing event pipelines using Apache Kafka and PyTorch models that inspect credit transactions under 10ms, blocking anomalies with 99.85% precision.'
      },
      {
        title: 'Secure Multi-Party Ledger Settlement',
        description: 'Our ledger development practices leverage secure cryptographic frameworks and smart contracts to build tamper-proof, transparent ledger settlement protocols for cross-border banking operations.'
      },
      {
        title: 'SOC 2 & PCI-DSS Audit Readiness',
        description: 'We implement automated configuration drift checks, centralized logging, and access control scopes, enabling financial clients to pass SOC 2 Type II and PCI-DSS compliance audits with zero friction.'
      }
    ],
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
    pillars: [
      {
        title: 'Headless E-Commerce Orchestration',
        description: 'We build flexible headless storefronts using Next.js, Node.js, and Redis caching. This decoupled architecture results in 0.6-second page load times and scales seamlessly during peak holiday traffic.'
      },
      {
        title: 'Predictive Supply Chain Restocking',
        description: 'Our analytics engines analyze live inventory telemetry and historical purchase patterns to forecast demand fluctuations, dynamically generating auto-restock triggers for suppliers.'
      },
      {
        title: 'Omnichannel User Identity Sync',
        description: 'We establish unified single sign-on (SSO) systems that track and synchronize user cart state, purchase history, and loyalty records across mobile apps, online web shops, and physical kiosks.'
      }
    ],
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
    pillars: [
      {
        title: 'MQTT Edge Telemetry Ingestion',
        description: 'We construct high-frequency telemetry ingestion pipelines using MQTT protocols that gather machinery vibration, acoustics, and temperature metrics from shopfloor sensors to a centralized portal.'
      },
      {
        title: 'Predictive Equipment Maintenance',
        description: 'Our custom ML models analyze OT telemetry live to identify wear signatures, allowing assembly line engineers to schedule repairs proactively and reduce unscheduled outages by up to 42%.'
      },
      {
        title: 'Multi-Tier Supplier Visibility',
        description: 'We design supply chain tracking portals that aggregate inventory data feeds across suppliers, logistics fleets, and warehouses, giving procurement teams absolute transparency.'
      }
    ],
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
    pillars: [
      {
        title: 'Adaptive LMS Core Engines',
        description: 'We engineer cloud-native Learning Management Systems (LMS) that auto-tailor student learning paths based on interactive study habits, improving overall exam scores and course comprehension.'
      },
      {
        title: 'Serverless Virtual Classrooms',
        description: 'Our video streaming architectures run on serverless cloud containers, scaling dynamically to support hundreds of thousands of concurrent students during remote lectures and exam periods.'
      },
      {
        title: 'Biometric Anti-Cheating Proctoring',
        description: 'We integrate secure biometric face verification and identity controls to establish the integrity of online exams, protecting academic credibility.'
      }
    ],
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
    pillars: [
      {
        title: 'WCAG 2.1 AA Accessibility',
        description: 'We build accessible administrative citizen portals compliant with WCAG 2.1 AA rules, ensuring all citizens—regardless of physical abilities—can easily request records, pay taxes, and settle fees.'
      },
      {
        title: 'Context-Aware ZTNA Protection',
        description: 'We help government agencies transition away from legacy VPNs to modern, context-aware Zero-Trust Network Access (ZTNA) solutions, preventing lateral network intrusion.'
      },
      {
        title: 'Encrypted Civic Databases',
        description: 'Our database engineers build encrypted citizen registry databases featuring multi-factor authentication, cryptographic access logs, and complete audit tracking.'
      }
    ],
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
    pillars: [
      {
        title: 'Enterprise RAG & Guardrails',
        description: 'We construct secure vector search indexing pipelines with strict role-based access control, preventing LLM models from leaking restricted database tables to unauthorized users.'
      },
      {
        title: 'GPU Cluster Orchestration',
        description: 'Our DevOps engineers build serverless model hosting architectures using Kubernetes, autoscaling GPU nodes dynamically to process peak cognitive query volume.'
      },
      {
        title: 'Compliance & Alignment',
        description: 'We run comprehensive alignment verification checks to verify model outputs remain safe, deterministic, and fully compliant with local compliance declarations.'
      }
    ],
    featuredInsight: {
      title: 'GangaTara Research — Deploying Secure RAG in BFSI',
      text: 'Learn how to construct semantic indexing systems that enforce role-based access control, ensuring LLMs do not leak restricted database entries during chat.',
      image: '/srv_ai_1.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Real-Time RAG & AI Agent Workflow Demo',
      description: 'Explore the live engineering walkthrough of our cognitive AI pipelines, showcasing document chunking, embeddings generation, and conversational answer rendering.',
      videoUrl: '/hero-video.mp4',
      poster: '/srv_ai_1.png',
      caption: 'Walkthrough of GangaTara AI Studio and semantic search routing',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/srv_ai_2.png', title: 'Semantic Search Integration in Enterprise ERP Systems', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'MLOPS PIPELINES',
      title: 'GPU Cluster Orchestration & Deployment',
      text: 'We build automated pipelines that handle data ingestion, automated label alignment, model validation, and deployment to secure REST API gateways, reducing AI cycle times.',
      image: '/srv_ai_2.png',
      link: '/services/devops',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/srv_ai_1.png', title: 'PyTorch & HuggingFace pipelines', link: '/technologies' },
            { image: '/srv_ai_2.png', title: 'Vector Database Integrations', link: '/technologies' },
          ],
        },
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/srv_ai_1.png', title: 'GangaTara AI Studio', link: '/products' },
          ],
        },
      ],
    },
  },

  'software-development': {
    id: 'software-development',
    hero: {
      breadcrumb: 'SERVICES / SOFTWARE DEVELOPMENT',
      eyebrow: 'CORE. SCALABLE. ENTERPRISE.',
      title: 'Bespoke Enterprise Software Engineering',
      subtitle: 'We build high-throughput transaction backends, robust microservices systems, and complex enterprise integration hubs that power global companies.',
      bgImage: '/slide_datacenter.png',
    },
    intro: {
      eyebrow: 'CORE SYSTEM MODERNIZATION',
      paragraph: 'Modern corporate operations require resilient, testable, and highly optimized software cores. GangaTara Technologies engineers robust custom software solutions using clean code standards, automated testing frameworks, and scalable cloud-native structures.',
    },
    pillars: [
      {
        title: 'Domain-Driven Design',
        description: 'We structure microservices boundaries using Domain-Driven Design (DDD) principles, preventing codebase bloat and ensuring modular, testable components.'
      },
      {
        title: 'CI/CD & Automated Testing',
        description: 'Our engineering practices enforce 90%+ unit test coverage, automated load testing, and continuous integration pipelines to prevent regression bugs in production.'
      },
      {
        title: 'Event-Driven Backends',
        description: 'We deploy high-performance backends using Go, Rust, and Java, leveraging event-driven messaging queues (Apache Kafka, RabbitMQ) to handle millions of transactions.'
      }
    ],
    featuredInsight: {
      title: 'GangaTara Research — Microservices Orchestration 2026',
      text: 'Discover why top enterprise brands are migrating to containerized Go microservices to handle rapid horizontal scalability while keeping infrastructure costs minimized.',
      image: '/srv_soft_1.png',
      link: '/insights',
      align: 'right',
    },
    videoShowcase: {
      title: 'High-Throughput Microservices Event Loop Demo',
      description: 'Watch the live telemetry dashboard of our distributed microservices framework. Learn how the event router forwards transaction batches under sub-millisecond latencies.',
      videoUrl: '/hero-video.mp4',
      poster: '/srv_soft_1.png',
      caption: 'Distributed ledger logging and backend load balancer telemetry dashboard',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/srv_soft_2.png', title: 'Managing Configuration Drift in Multi-Tenant Databases', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'PERFORMANCE TUNING',
      title: 'High-Performance Backend Optimization',
      text: 'Deploy optimized codebases that leverage multi-threaded CPU architectures. GangaTara’s engineering practices target resource footprint reduction and database query latency cuts.',
      image: '/srv_soft_2.png',
      link: '/services/cloud-solutions',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/srv_soft_1.png', title: 'Go & Rust Systems Core', link: '/technologies' },
          ],
        },
      ],
    },
  },

  'web-development': {
    id: 'web-development',
    hero: {
      breadcrumb: 'SERVICES / WEB DEVELOPMENT',
      eyebrow: 'RESPONSIVE. ACCESSIBLE. SECURE.',
      title: 'Next-Gen Web Platforms & Applications',
      subtitle: 'We engineer lightning-fast headless frontends, secure public web portals, and scalable content distribution systems.',
      bgImage: '/slide_team.png',
    },
    intro: {
      eyebrow: 'WEB PLATFORM ARCHITECTURE',
      paragraph: 'Your web application is the digital face of your business. GangaTara Technologies crafts responsive, accessible, and fast web portals using modern frameworks (Next.js, React), headless content backends, and globally distributed CDN caching.',
    },
    pillars: [
      {
        title: 'Headless Architectures',
        description: 'We decouple front-end presentation from database storage using API-first CMS structures, leading to faster paint speeds and improved developer workflows.'
      },
      {
        title: 'Accessibility & WCAG Compliance',
        description: 'Our frontend developers build accessible layouts meeting WCAG 2.1 AA guidelines, ensuring clean keyboard navigation, aria-roles, and screen-reader compatibility.'
      },
      {
        title: 'Dynamic Performance Tuning',
        description: 'We optimize assets, implement server-side rendering (SSR), and configure edge-caching configurations to achieve sub-second load times.'
      }
    ],
    featuredInsight: {
      title: 'GangaTara Research — Frontend Core Web Vitals 2026',
      text: 'An analytical study exploring the impact of code-splitting and dynamic route prefetching on enterprise e-commerce conversion rates.',
      image: '/srv_web_1.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Real-Time Server-Side Rendering Performance Demo',
      description: 'Watch a direct rendering speed test showcasing our Next.js edge-caching solution. Experience load metrics and layout stability under 10k concurrent hits.',
      videoUrl: '/hero-video.mp4',
      poster: '/srv_web_1.png',
      caption: 'Core Web Vitals dashboard rendering and CDN cache hit stats',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/service_web_dev.png', title: 'Designing Accessible Web Components for Global Public Services', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'SCALABLE DESIGNS',
      title: 'State Management & Scalable Web Architectures',
      text: 'We construct clean, maintainable component libraries and unified design tokens, ensuring visual consistency and fast code releases across product lines.',
      image: '/service_web_dev.png',
      link: '/services/ui-ux-design',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/srv_web_1.png', title: 'Next.js & React Frameworks', link: '/technologies' },
          ],
        },
      ],
    },
  },

  'application-development': {
    id: 'application-development',
    hero: {
      breadcrumb: 'SERVICES / APP DEVELOPMENT',
      eyebrow: 'CROSS-PLATFORM. FLUID. NATIVE.',
      title: 'Premium Cross-Platform Mobile Applications',
      subtitle: 'We design and build fluid, high-performance mobile apps for iOS and Android using modern native and cross-platform frameworks.',
      bgImage: '/career_banner.png',
    },
    intro: {
      eyebrow: 'MOBILE PLATFORM ENGINEERING',
      paragraph: 'Mobile platforms require excellent offline functionality, fluid animations, and strict security sandboxing. GangaTara Technologies engineers premium mobile applications that look outstanding and scale smoothly across device sizes.',
    },
    pillars: [
      {
        title: 'Cross-Platform Frameworks',
        description: 'We leverage Flutter and React Native to build single-codebase apps that perform identically to native Swift and Kotlin applications, reducing time-to-market.'
      },
      {
        title: 'Offline-First Synchronization',
        description: 'We build offline-first database sync routines using SQLite and WatermelonDB, synchronizing user state seamlessly when connectivity returns.'
      },
      {
        title: 'Secure Sandboxing & Biometrics',
        description: 'Our mobile applications integrate biometric authentication (FaceID, fingerprint) and hardware-level encryption keys to protect sensitive user details.'
      }
    ],
    featuredInsight: {
      title: 'GangaTara Research — Cross-Platform Performance Metrics',
      text: 'A quantitative analysis comparing bridge rendering times in React Native with Flutter’s canvas rendering engine under graphic-heavy workloads.',
      image: '/service_app_dev.png',
      link: '/insights',
      align: 'right',
    },
    videoShowcase: {
      title: 'Fluid Animations and Biometric Login App Demo',
      description: 'Experience a walkthrough of our premium cross-platform mobile shell. Watch transition speeds, biometric check-in sequences, and offline mode sync updates.',
      videoUrl: '/hero-video.mp4',
      poster: '/service_app_dev.png',
      caption: 'iOS & Android mobile platform UX walkthrough',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/blog_devops.png', title: 'Implementing Cryptographic Local Storage in Mobile Databases', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'MOBILE SECURITY',
      title: 'Offline Syncing and Mobile Cryptography',
      text: 'Protect user credentials and database states using device keychain integration. GangaTara builds high-security apps conforming to financial regulations.',
      image: '/blog_devops.png',
      link: '/services/cyber-security',
    },
    solutions: {
      tabs: [
        {
          label: 'Technology',
          cards: [
            { image: '/service_app_dev.png', title: 'Flutter & React Native frameworks', link: '/technologies' },
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
      bgImage: '/ind_healthcare.png',
    },
    intro: {
      eyebrow: 'ZERO-TRUST CYBER SECURITY',
      paragraph: 'With rising ransomware threats and lateral network intrusions, traditional VPN systems are no longer sufficient. GangaTara Technologies constructs secure Zero-Trust Network Access (ZTNA) solutions, integrates biometric identity providers, and runs automated compliance checks.',
    },
    pillars: [
      {
        title: 'Zero-Trust Architecture',
        description: 'We help corporate clients decommission legacy perimeter defenses in favor of micro-segmentation, securing systems from internal threat lateral motion.'
      },
      {
        title: 'Automated DevSecOps Scanning',
        description: 'We embed static and dynamic security scanners directly into the CI/CD pipeline, catching secrets exposure and SQL injection exploits before deployment.'
      },
      {
        title: 'Continuous Compliance Drifts',
        description: 'Our cloud security posture monitoring scans active deployments for configuration drift, immediately alerting teams to open ports or public S3 buckets.'
      }
    ],
    featuredInsight: {
      title: 'GangaTara Research — Threat Landscapes 2026',
      text: 'An analytical review of cloud security posture management. Learn how real-time configuration drift detection blocks 98% of unauthorized server access attempts.',
      image: '/event_security.png',
      link: '/insights',
      align: 'left',
    },
    videoShowcase: {
      title: 'Simulated Intrusion and Real-Time ZTNA Block Demo',
      description: 'Watch Sarthi assistant showcase a simulated threat actor lateral access attempt blocked automatically by our context-aware ZTNA secure gateway.',
      videoUrl: '/hero-video.mp4',
      poster: '/event_security.png',
      caption: 'Zero-Trust network telemetry logs and anomaly blocker controls',
    },
    inFocus: {
      tabs: [
        {
          label: 'Thought Leadership',
          cards: [
            { image: '/blog_ai.png', title: 'Securing Decentralized Engineering Teams from Phishing', link: '/insights' },
          ],
        },
      ],
    },
    secondFeatured: {
      eyebrow: 'CODE AUDITS',
      title: 'Static Application Security Testing (SAST) Integration',
      text: 'We embed automatic dependency security audits and static analyzer checks directly into your CI/CD pipelines, flagging potential SQL injection and XSS exploits before release.',
      image: '/blog_ai.png',
      link: '/services/devops',
    },
    solutions: {
      tabs: [
        {
          label: 'Products & Platforms',
          cards: [
            { image: '/event_security.png', title: 'Sentry ZTNA Gateway', link: '/products' },
          ],
        },
      ],
    },
  },
};

