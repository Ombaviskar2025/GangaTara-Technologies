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
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Accelerate your cloud adoption with scalable, secure public, private, and hybrid cloud architectures.',
    iconName: 'Cloud',
    description: 'We help enterprise organizations build scalable, resilient, and highly secure cloud environments. From initial migration assessments to cloud-native application engineering, our certified architects design infrastructure that reduces latency, ensures high availability, and optimizes resource spend across multi-cloud environments.',
    features: [
      'Multi-cloud Strategy (AWS, Azure, GCP)',
      'Enterprise Cloud Migration & Lift-and-Shift',
      'Serverless Architectures & Microservices',
      'FinOps Infrastructure Cost Optimization',
      'Hybrid Cloud Integration & Core Connectivity'
    ],
    benefits: [
      'Reduce operational infrastructure overhead by up to 35%',
      'Achieve 99.99% uptime with automated multi-region deployments',
      'Scale compute resources dynamically to meet volatile demand spikes',
      'Improve developer velocity via automated cloud provisioning environments'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes']
  },
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
    id: 'devops',
    title: 'DevOps & GitOps',
    shortDesc: 'Automate build-test-deploy pipelines and orchestrate container clusters at scale.',
    iconName: 'Layers',
    description: 'Achieve absolute delivery predictability. We automate the entire release cycle using Infrastructure-as-Code and declarative GitOps pipelines. By removing manual staging and deployments, we minimize production incident rates and enable developers to push features with confidence.',
    features: [
      'CI/CD Pipeline Design (GitHub Actions, GitLab, Jenkins)',
      'Infrastructure as Code (IaC) via Terraform & Pulumi',
      'Kubernetes Cluster Orchestration & Helm Packaging',
      'Automated Blue-Green & Canary Deployment Strategies',
      'Comprehensive Application & Server Monitoring Systems'
    ],
    benefits: [
      'Accelerate release frequency from monthly cycles to multiple daily deploys',
      'Reduce release-related rollbacks and configuration drifts to near zero',
      'Establish programmatic audit trails for every infrastructure adjustment',
      'Identify bottlenecks quickly via centralized telemetry dashboards'
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana']
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
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    shortDesc: 'Turn raw server and transaction records into real-time business intelligence dashboards.',
    iconName: 'BarChart3',
    description: 'Stop guessing and start using facts. We engineer unified data warehouses and extract analytical insights, delivering real-time dashboards that expose supply chain health, user retention indicators, operational bottlenecks, and financial forecasting.',
    features: [
      'Enterprise Data Warehousing (Snowflake, BigQuery, Redshift)',
      'ETL/ELT Data Pipelines (dbt, Apache Airflow, Fivetran)',
      'Real-Time Streaming Analytics (Apache Kafka, Spark)',
      'Executive BI Dashboards (Tableau, PowerBI, Looker)',
      'Data Governance, Lineage, & Cataloging Systems'
    ],
    benefits: [
      'Consolidate siloed departmental databases into one single source of truth',
      'Generate real-time business metrics reporting instantly',
      'Identify supply-chain cost savings by matching actual execution metrics',
      'Enforce granular data governance permissions policies'
    ],
    technologies: ['Snowflake', 'BigQuery', 'Apache Airflow', 'Kafka', 'Tableau', 'dbt']
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    shortDesc: 'Secure, decentralized ledgers for supply chain tracking, smart contracts, and identity.',
    iconName: 'Workflow',
    description: 'Deploy trustless technology where integrity matters most. We build private and consortium-based ledger architectures that streamline compliance audits, eliminate intermediary clearinghouses, automate supply chain tracking, and manage zero-knowledge identity tokens.',
    features: [
      'Consortium Blockchain Design (Hyperledger, Corda)',
      'Smart Contract Auditing & Verification Protocols',
      'Zero-Knowledge Proofs for Private Ledger Transactions',
      'Decentralized Identity (DID) Credentials Systems',
      'Tokenization Platforms for Enterprise Asset Management'
    ],
    benefits: [
      'Create tamper-proof operational logs that satisfy auditing regulators',
      'Lower transactional friction in cross-border settlements',
      'Trace material lineage across multi-tier supplier supply networks',
      'Implement decentralized authorization tokens'
    ],
    technologies: ['Ethereum', 'Solidity', 'Hyperledger Fabric', 'Rust', 'Hardhat', 'Web3.js']
  },
  {
    id: 'iot-solutions',
    title: 'Internet of Things (IoT)',
    shortDesc: 'Connect telemetry sensors, process edge-computing inputs, and control hardware remotely.',
    iconName: 'Radio',
    description: 'Bridge physical hardware with enterprise software. Our IoT developers write embedded edge-computing code, orchestrate device fleets, and implement message brokers that ingest millions of telemetry messages per second for factory floor and hardware operations.',
    features: [
      'Edge Computing Device Frameworks (C/C++, Rust)',
      'MQTT & CoAP Scalable Message Ingestion Systems',
      'Device Fleet Management & Over-the-Air (OTA) Updates',
      'Predictive Equipment Maintenance Systems',
      'Industrial IoT (IIoT) Integration with Legacy SCADA'
    ],
    benefits: [
      'Predict hardware breakdowns before outages disrupt production',
      'Monitor asset positions and environmental metrics globally',
      'Deploy localized machine-learning classification models on the edge',
      'Safeguard sensor fleets from cyber threats with hardware chips'
    ],
    technologies: ['C/C++', 'Rust', 'MQTT', 'Node-RED', 'AWS IoT', 'Raspberry Pi / Arduino']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDesc: 'Re-engineer outdated legacy workflows with modern cloud and automation strategies.',
    iconName: 'TrendingUp',
    description: 'Re-invent how your business executes. We consult with enterprise leadership teams to replace slow analog processes, legacy mainframe software, and paperwork bottlenecks with automated cloud solutions, modern workspaces, and collaborative API tools.',
    features: [
      'Corporate Legacy Workflow Analysis & Audits',
      'Agile Product Management Reorganization',
      'Enterprise App Modernization Roadmap Creation',
      'Employee Modern Digital Workspace Onboarding',
      'B2B Operations Integration APIs and Connectors'
    ],
    benefits: [
      'Accelerate corporate turnaround times for client onboarding requests',
      'Repurpose manual oversight work into strategic optimization',
      'Modernize legacy mainframe cost points with pay-as-you-go cloud services',
      'Attract top developer talent by introducing modern tools'
    ],
    technologies: ['Next.js', 'Jira / Confluence', 'MuleSoft', 'Microsoft Power Platform']
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    shortDesc: 'Fleet route optimization algorithms, real-time package geofencing, and automated invoicing.',
    iconName: 'Truck',
    description: 'Maximize fleet utilization and cargo tracking. Our systems analyze traffic and package data in real time, automate driver routing, trigger client geofenced alerts, and generate blockchain-verified customs manifests.',
    solutions: ['Route Optimization Algorithms', 'Real-Time Package Geofencing', 'Customs Manifest Blockchains', 'Warehouse Sorting Automation Software'],
    stats: [
      { label: 'Fuel Cost Savings', value: '14%' },
      { label: 'Delivery Accuracy', value: '99.6%' },
      { label: 'Loading Processing', value: '-30%' }
    ]
  },
  {
    id: 'automobile',
    title: 'Automobile & Smart Mobility',
    shortDesc: 'Connected car telemetry backends, OTA firmware platforms, and smart charging solutions.',
    iconName: 'Car',
    description: 'Design the future of smart transportation. We build backends that process telemetry data from connected cars, orchestrate over-the-air firmware upgrades, and integrate smart vehicle charging algorithms.',
    solutions: ['Connected Vehicle Telemetry Systems', 'Secure Over-the-Air Firmware Managers', 'Smart Battery Charging Algorithms', 'Ride-Sharing Fleet Allocators'],
    stats: [
      { label: 'Data Ingestion Rate', value: '2M/sec' },
      { label: 'Firmware Success Rate', value: '99.95%' },
      { label: 'Fleet Idle Time', value: '-25%' }
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate & PropTech',
    shortDesc: '3D virtual property tours, automated tenant leasing, and market price valuation models.',
    iconName: 'Building',
    description: 'Transform property management. We engineer tenant application systems, integrate WebGL-based 3D virtual building tours, and deploy predictive models that evaluate property prices based on local market metrics.',
    solutions: ['Tenant Lease Automation Portals', 'WebGL Property Walkthrough Engines', 'Real Estate Valuation Models', 'Property Maintenance Dispatchers'],
    stats: [
      { label: 'Lease Processing Time', value: '-70%' },
      { label: 'Virtual Tours Viewed', value: '1.2M+' },
      { label: 'Valuation Precision', value: '94.2%' }
    ]
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
    ]
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    shortDesc: 'Global booking aggregators, dynamic room pricing engines, and personalized itinerary guides.',
    iconName: 'Plane',
    description: 'Empower modern hospitality brands. We build global booking platforms that scale under holiday demand spikes, integrate room pricing algorithms, and design personalized itinerary builders.',
    solutions: ['Global Reservation Aggregators', 'Dynamic Pricing Engines', 'Itinerary Recommendation Systems', 'Digital Hotel Key Integrations'],
    stats: [
      { label: 'Booking Speed', value: '+300%' },
      { label: 'Dynamic Revenue Boost', value: '12%' },
      { label: 'Client Retention Rate', value: '+18%' }
    ]
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
    overview: 'MediHealth needed to scale its digital doctor visits during a period of 400% user growth. We re-engineered their booking systems and HIPAA data flow using a serverless microservices setup.',
    challenge: 'Their existing monolith database locked under concurrent booking requests, causing patient wait screens to freeze. In addition, their media servers struggled with high-latency WebRTC streams in remote regions.',
    solution: 'We decoupled the database using Amazon DynamoDB and AWS Lambda serverless routines. We routed WebRTC traffic through geographically distributed media relay servers and built an automated HIPAA logging pipeline with AWS CloudTrail.',
    results: [
      { label: 'Patient Ingestion', value: '4.2x faster' },
      { label: 'Video Call Latency', value: '-65%' },
      { label: 'HIPAA Compliance Audit', value: 'Passed 100%' }
    ],
    technologies: ['AWS', 'Next.js', 'PostgreSQL', 'WebRTC', 'Docker'],
    imagePath: 'case_healthcare'
  },
  {
    id: 'realtime-banking-fraud-prevention',
    title: 'AI-Powered Financial Fraud Detection System',
    client: 'Apex Global Bank',
    industry: 'Finance',
    overview: 'Apex Bank required a system that could evaluate credit card transactions under 10 milliseconds to identify fraud. We engineered an ML pipeline using Apache Kafka and custom PyTorch models.',
    challenge: 'Existing third-party validation systems flagged too many false positives, locking legitimate client cards and causing customer support backlogs. Processing delays also affected merchant checkout queues.',
    solution: 'We designed a streaming architecture using Apache Kafka and Apache Flink to ingest transaction details. The stream is evaluated by a customized deep-neural prediction model trained on ten years of transaction telemetry.',
    results: [
      { label: 'Fraud Detection Rate', value: '99.85%' },
      { label: 'False Positives', value: '-80%' },
      { label: 'Evaluation Latency', value: '6.4ms' }
    ],
    technologies: ['Python', 'PyTorch', 'Apache Kafka', 'Kubernetes', 'Redis'],
    imagePath: 'case_finance'
  },
  {
    id: 'headless-retail-scale-out',
    title: 'Migrating to Headless Commerce for Black Friday Scaling',
    client: 'Veloce Apparel',
    industry: 'Retail & E-commerce',
    overview: 'Veloce needed to survive massive inventory lookup surges during holiday sales. We rebuilt their legacy website into a decoupled Next.js storefront backed by a fast Redis caching cluster.',
    challenge: 'Their old e-commerce system crashed during previous flash sales, leading to lost revenue and customer complaints on social media.',
    solution: 'We split the storefront from the backend database. We built a Next.js server-side rendered storefront deployed on Vercel Edge networks and integrated it with a high-availability Redis cache to manage real-time inventory checks.',
    results: [
      { label: 'Page Load Speed', value: '0.6 seconds' },
      { label: 'Concurrent Users', value: '120,000' },
      { label: 'Checkout Churn Rate', value: '-35%' }
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Redis', 'GraphQL'],
    imagePath: 'case_retail'
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
    image: 'sarah_jenkins'
  },
  {
    id: 't2',
    name: 'David Vance',
    role: 'VP of Payments Systems',
    company: 'Apex Global Bank',
    quote: 'The AI fraud prevention system designed by their engineers reduced our evaluation latency to under 7 milliseconds while slashing false positive block triggers by 80%. An incredible engineering feat.',
    rating: 5,
    image: 'david_vance'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Director of Omnichannel Commerce',
    company: 'Veloce Apparel',
    quote: 'Our Black Friday site reliability went from a source of stress to a complete success. The Next.js frontend is stunningly fast, and our checkout conversions increased by 22% immediately.',
    rating: 5,
    image: 'elena_rostova'
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
  { id: 'aw1', title: 'ISO 27001 Certified', issuer: 'International Standards Organization', year: '2025' },
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
    image: 'blog_ai'
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
    image: 'blog_devops'
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
