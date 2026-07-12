import { NextRequest, NextResponse } from 'next/server';

/* ─────────────────────────────────────────────────────────────
   Sarthi — GangaTara Technologies AI Digital Assistant
   Smart knowledge-based response engine
   ───────────────────────────────────────────────────────────── */

interface KnowledgeEntry {
  keywords: string[];
  response: string;
  priority?: number;
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // ── Identity ──
  {
    keywords: ['who are you', 'your name', 'what are you', 'introduce yourself', 'sarthi'],
    response: `Hi! I'm **Sarthi**, the official digital assistant for GangaTara Technologies. I'm here to help you learn about our services, industries, case studies, career opportunities, or anything else about the company. How can I help you today?`,
    priority: 10,
  },

  // ── Company Overview ──
  {
    keywords: ['about', 'company', 'gangatara', 'who is gangatara', 'tell me about', 'overview', 'what does gangatara do'],
    response: `**GangaTara Technologies** is a global leader in enterprise digital transformation, founded in 2006 with 20+ years of experience. Headquartered in Indore, India, we empower global brands with AI, cloud computing, cybersecurity, and bespoke software solutions. With 1000+ engineers globally, 500+ satisfied clients, and projects delivered across 50+ countries, we're ISO 27001:2022 Certified, GDPR Compliant, and SOC 2 Type II compliant. Learn more on our [About page](/about).`,
    priority: 5,
  },

  // ── Services (General) ──
  {
    keywords: ['services', 'what do you do', 'what you offer', 'offerings', 'solutions'],
    response: `We offer a comprehensive suite of enterprise technology services:\n\n• **Cloud Solutions** — Multi-cloud strategy, migration & optimization → [Learn more](/services/cloud-solutions)\n• **AI & Machine Learning** — Predictive models, GenAI agents, NLP → [Learn more](/services/ai-machine-learning)\n• **Software Development** — Full-stack custom engineering → [Learn more](/services/software-development)\n• **Web Development** — Next.js, React, high-performance web apps → [Learn more](/services/web-development)\n• **Application Development** — Mobile & cross-platform apps → [Learn more](/services/application-development)\n• **Cyber Security** — Zero-trust architecture, pentesting, compliance → [Learn more](/services/cyber-security)\n\nWant details on any specific service?`,
    priority: 8,
  },

  // ── Individual Services ──
  {
    keywords: ['cloud', 'aws', 'azure', 'gcp', 'cloud solutions', 'migration'],
    response: `Our **Cloud Solutions** team architects scalable, secure multi-cloud environments across AWS, Azure, and GCP. We handle cloud migration, serverless architecture, FinOps cost optimization, and hybrid cloud integration. [Explore Cloud Solutions →](/services/cloud-solutions)`,
  },
  {
    keywords: ['ai', 'machine learning', 'artificial intelligence', 'ml', 'genai', 'generative ai', 'deep learning', 'nlp'],
    response: `Our **AI & Machine Learning** practice builds predictive models, deploys GenAI agents, and implements NLP pipelines for enterprise use cases. We work with TensorFlow, PyTorch, and leading AI frameworks. [Explore AI & ML →](/services/ai-machine-learning)`,
  },
  {
    keywords: ['software development', 'custom software', 'full stack', 'engineering'],
    response: `We deliver **Custom Software Development** — from microservices architecture to full-stack enterprise platforms. Our engineers work with React, Node.js, Java, Python, .NET, and more. [Explore Software Dev →](/services/software-development)`,
  },
  {
    keywords: ['web development', 'website', 'next.js', 'react', 'frontend'],
    response: `Our **Web Development** team builds high-performance, SEO-optimized web applications using Next.js, React, Angular, and Vue. We focus on blazing-fast load times and premium UX. [Explore Web Dev →](/services/web-development)`,
  },
  {
    keywords: ['app development', 'mobile', 'application', 'flutter', 'react native', 'ios', 'android'],
    response: `Our **Application Development** team builds native and cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin. We handle everything from design to App Store deployment. [Explore App Dev →](/services/application-development)`,
  },
  {
    keywords: ['cyber', 'security', 'cybersecurity', 'penetration', 'pentest', 'zero trust', 'compliance'],
    response: `Our **Cyber Security** practice implements zero-trust architecture, penetration testing, SIEM/SOC monitoring, and compliance frameworks (HIPAA, PCI-DSS, GDPR). We protect enterprises from evolving threats. [Explore Cyber Security →](/services/cyber-security)`,
  },

  // ── Industries (General) ──
  {
    keywords: ['industries', 'sectors', 'verticals', 'who do you serve', 'which industries'],
    response: `We serve enterprises across **10 major industries**:\n\n• Healthcare → [/industries/healthcare](/industries/healthcare)\n• Finance & Banking → [/industries/finance](/industries/finance)\n• Retail & E-commerce → [/industries/retail](/industries/retail)\n• Education & EdTech → [/industries/education](/industries/education)\n• Manufacturing → [/industries/manufacturing](/industries/manufacturing)\n• Logistics & Supply Chain → [/industries/logistics](/industries/logistics)\n• Automobile & Smart Mobility → [/industries/automobile](/industries/automobile)\n• Real Estate & PropTech → [/industries/real-estate](/industries/real-estate)\n• Government & Public Sector → [/industries/government](/industries/government)\n• Travel & Hospitality → [/industries/travel](/industries/travel)\n\nNeed details on any specific industry?`,
    priority: 8,
  },

  // ── Individual Industries ──
  {
    keywords: ['healthcare', 'health', 'medical', 'hospital', 'telehealth', 'hipaa'],
    response: `We build **HIPAA-compliant** digital health platforms — from telehealth systems to EHR integrations and patient intake automation. Our work with MediHealth Group delivered 4.2x faster patient access. [Explore Healthcare →](/industries/healthcare)`,
  },
  {
    keywords: ['finance', 'banking', 'fintech', 'bank', 'fraud detection', 'payments'],
    response: `We engineer real-time **fraud detection**, core banking modernization, and compliance automation for financial institutions. Our AI system for Apex Global Bank achieves 99.85% detection accuracy. [Explore Finance →](/industries/finance)`,
  },
  {
    keywords: ['retail', 'ecommerce', 'e-commerce', 'shopping', 'store'],
    response: `We build **headless commerce** platforms, dynamic pricing engines, and inventory optimization systems for retail and e-commerce brands. Our work with Veloce Apparel cut checkout churn by 35%. [Explore Retail →](/industries/retail)`,
  },
  {
    keywords: ['education', 'edtech', 'learning', 'lms', 'university'],
    response: `We build adaptive **EdTech platforms** — LMS systems, virtual classrooms, and AI-powered tutoring engines for schools and universities. [Explore Education →](/industries/education)`,
  },
  {
    keywords: ['manufacturing', 'factory', 'iiot', 'industrial'],
    response: `We deploy **Industrial IoT** solutions — shopfloor telemetry, predictive maintenance AI, and supply chain visibility for manufacturing enterprises. [Explore Manufacturing →](/industries/manufacturing)`,
  },

  // ── Case Studies ──
  {
    keywords: ['case study', 'case studies', 'portfolio', 'work', 'projects', 'results', 'clients'],
    response: `Here are some of our highlighted case studies:\n\n🏥 **MediHealth Group Inc.** — 4.2x faster patient ingestion during a 400% demand surge → [Read case study](/case-studies/telehealth-platform-transformation)\n\n🏦 **Apex Global Bank** — 99.85% fraud detection accuracy in under 10ms → [Read case study](/case-studies/realtime-banking-fraud-prevention)\n\n🛍️ **Veloce Apparel** — 0.6s page loads and -35% checkout churn with headless commerce → [Read case study](/case-studies/headless-retail-scale-out)\n\nSee all our work at [/case-studies](/case-studies).`,
    priority: 7,
  },

  // ── Careers ──
  {
    keywords: ['career', 'careers', 'job', 'jobs', 'hiring', 'work at', 'openings', 'vacancy', 'apply', 'join', 'recruitment'],
    response: `We're **hiring 200+ engineers globally in 2026!** 🚀 Our team of 500+ engineers, architects, and designers enjoys competitive compensation, remote & hybrid roles, a €2,000 annual learning budget, and an ISO-certified workplace. Check open positions and apply at [/careers](/careers).`,
    priority: 8,
  },

  // ── Contact ──
  {
    keywords: ['contact', 'reach', 'phone', 'email', 'call', 'talk', 'sales', 'consultation', 'demo', 'meeting', 'book'],
    response: `You can reach us anytime:\n\n📞 **Phone/WhatsApp**: [+91 9111903111](https://wa.me/919111903111)\n📧 **Email**: info@gangatara.com\n💬 **Book a consultation**: Visit our [Contact page](/contact)\n\nWe'd love to discuss how we can help your business!`,
    priority: 8,
  },

  // ── Events ──
  {
    keywords: ['event', 'events', 'webinar', 'webinars', 'conference', 'workshop'],
    response: `Here are our upcoming events:\n\n📅 **"Building Secure GenAI Pipelines"** — July 24, 2026, Virtual (Zoom)\n📅 **"Cloud Cost Optimization Masterclass"** — August 12, 2026, Virtual (Google Meet)\n📅 **"Zero-Trust Security Architecture"** — September 5, 2026, Munich + Virtual\n\nCheck our [Blog/Insights page](/blog) for registration details.`,
  },

  // ── News ──
  {
    keywords: ['news', 'blog', 'insights', 'latest', 'updates', 'announcement', 'press'],
    response: `Here's what's new at GangaTara:\n\n🏆 **Google Cloud Partner of the Year 2025** — recognized for multi-cloud migrations across APAC & EMEA\n🤖 **GangaTara AI Studio launched** — deploy GenAI in days\n📢 **Hiring 200+ engineers globally in 2026**\n☁️ **CloudOps Suite now on AWS Marketplace**\n\nRead more on our [Blog page](/blog).`,
  },

  // ── Technologies ──
  {
    keywords: ['technology', 'technologies', 'tech stack', 'tools', 'frameworks', 'stack'],
    response: `We work with a world-class technology stack:\n\n**Frontend**: React, Angular, Vue, Next.js\n**Backend**: Node.js, Java, Spring Boot, Python, .NET, PHP\n**Mobile**: Flutter, React Native\n**Cloud**: AWS, Azure, Google Cloud, Docker, Kubernetes\n**Data**: MongoDB, PostgreSQL, MySQL, Redis\n**Emerging**: GraphQL, TensorFlow, Rust, Solidity\n\nExplore at [/technologies](/technologies).`,
  },

  // ── Products ──
  {
    keywords: ['product', 'products', 'ai studio', 'cloudops', 'databridge', 'sentry', 'platform'],
    response: `We build proprietary enterprise platforms:\n\n• **GangaTara AI Studio** — Deploy GenAI models in days\n• **CloudOps Suite** — Multi-cloud management (now on AWS Marketplace)\n• **DataBridge** — Enterprise data integration platform\n• **Sentry ZTNA** — Zero-trust network access\n• **GT LMS** — Learning management system\n\nExplore at [/products](/products).`,
  },

  // ── Certifications ──
  {
    keywords: ['certification', 'certified', 'iso', 'gdpr', 'soc', 'compliance', 'accreditation'],
    response: `GangaTara Technologies holds the following certifications:\n\n✅ **ISO 27001:2022 Certified** — Information security management\n✅ **GDPR Compliant** — European data protection\n✅ **SOC 2 Type II** — Security, availability & confidentiality\n\nWe also hold **AWS Advanced Consulting Partner**, **Microsoft Gold Partner**, and **Google Cloud Partner of the Year 2025** status.`,
  },

  // ── Location ──
  {
    keywords: ['location', 'where', 'address', 'office', 'headquarters', 'hq', 'based'],
    response: `Our headquarters is in **Indore, Madhya Pradesh, India**. We serve clients across 50+ countries globally. You can reach us at +91 9111903111 or visit our [Contact page](/contact) for more details.`,
  },

  // ── Pricing ──
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'quote', 'estimate', 'budget', 'rate'],
    response: `Pricing depends on the scope, complexity, and timeline of your project. For a personalized quote, I'd recommend reaching out to our team directly:\n\n📞 **Call/WhatsApp**: [+91 9111903111](https://wa.me/919111903111)\n📧 **Email**: info@gangatara.com\n📋 **Request a quote**: [Contact page](/contact)\n\nWe'll get back to you within 24 hours!`,
  },

  // ── Social ──
  {
    keywords: ['social', 'linkedin', 'twitter', 'facebook', 'youtube', 'instagram', 'follow'],
    response: `Follow us on social media:\n\n🔗 [LinkedIn](https://linkedin.com/company/gangatara-technologies)\n🐦 [Twitter/X](https://twitter.com/gangataratech)\n📘 [Facebook](https://facebook.com/gangataratechnologies)\n📺 [YouTube](https://youtube.com/@gangataratechnologies)\n📸 [Instagram](https://instagram.com/gangataratechnologies)\n💬 [WhatsApp](https://wa.me/919111903111)`,
  },

  // ── Greetings ──
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'howdy'],
    response: `Hey there! 👋 I'm Sarthi, GangaTara's digital assistant. I can help you with info about our services, industries, case studies, careers, or anything else. What would you like to know?`,
    priority: 3,
  },

  // ── Thanks ──
  {
    keywords: ['thank', 'thanks', 'thank you', 'appreciate', 'helpful'],
    response: `You're welcome! 😊 If you have any more questions, feel free to ask. You can also reach our team directly at info@gangatara.com or [+91 9111903111](https://wa.me/919111903111). Have a great day!`,
    priority: 3,
  },

  // ── Bye ──
  {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'take care'],
    response: `Goodbye! 👋 It was great chatting with you. Don't hesitate to come back anytime — I'm always here. You can also reach us at info@gangatara.com. Take care!`,
    priority: 3,
  },

  // ── Hindi / Hinglish ──
  {
    keywords: ['namaste', 'kya', 'kaise', 'kya karte', 'batao', 'bataiye'],
    response: `Namaste! 🙏 Main Sarthi hoon — GangaTara Technologies ka digital assistant. Aap humari services, industries, careers ya kisi bhi cheez ke baare mein pooch sakte hain. Kaise madad kar sakta hoon aapki?`,
    priority: 4,
  },
];

// Fallback response
const FALLBACK = `I appreciate your question! That's outside the information I have right now. For detailed or specific inquiries, I'd recommend reaching out directly:\n\n📧 **Email**: info@gangatara.com\n📞 **Phone/WhatsApp**: [+91 9111903111](https://wa.me/919111903111)\n📋 **Contact page**: [/contact](/contact)\n\nIs there anything else about our services, industries, or careers I can help with?`;

function findBestMatch(message: string): string {
  const normalized = message.toLowerCase().trim();

  // Score each entry
  const scored = KNOWLEDGE_BASE.map((entry) => {
    let matchCount = 0;
    let exactMatch = false;

    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        matchCount++;
        // Boost score for longer keyword matches (more specific)
        if (keyword.length > 6) matchCount += 0.5;
        // Exact phrase match gets extra boost
        if (normalized === keyword.toLowerCase()) {
          exactMatch = true;
        }
      }
    }

    const priority = entry.priority || 5;
    const score = matchCount * 10 + (exactMatch ? 50 : 0) + priority;

    return { entry, score, matchCount };
  });

  // Filter to entries with at least one keyword match
  const matches = scored.filter((s) => s.matchCount > 0);

  if (matches.length === 0) return FALLBACK;

  // Sort by score descending
  matches.sort((a, b) => b.score - a.score);

  return matches[0].entry.response;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const reply = findBestMatch(message);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
