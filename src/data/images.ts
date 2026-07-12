/**
 * central image registry file that maps every image used on the site to its location,
 * with a comment noting what it represents.
 */
export const IMAGES = {
  // Brand Assets
  brand: {
    logoSvg: '/GangaTAralogo.svg',          // Main brand SVG logo
    logoPng: '/logo-new.png',              // Main brand PNG logo fallback
  },
  
  // Common Page Banners & Avatars
  common: {
    careerBanner: '/img_common_career_banner.png',  // Career page recruitment header
    avatarSarah: '/img_common_avatar_sarah.png',    // Customer testimonial avatar
    avatarDavid: '/img_common_avatar_david.png',    // Customer testimonial avatar David
    avatarElena: '/img_common_avatar_elena.png',    // Customer testimonial avatar Elena
    newsroomCard: '/img_common_newsroom_card.png',  // Newsroom directory summary card
    insightsCard: '/img_common_insights_card.png',  // Insights directory summary card
    recognitionsCard: '/img_common_recognitions_card.png', // Recognitions directory summary card
    caseStudiesCard: '/img_common_casestudies_card.png', // Case Studies directory summary card
    blogFallback: '/img_common_blog_fallback.png',      // Blog fallback image if none is provided
    heroVideoPoster: '/img_common_hero_video_poster.png', // Main page hero video scroll poster
  },

  // Events / Webinars Section
  events: {
    ai: '/img_event_ai.png',                        // GenAI web conference thumbnail
    cloud: '/img_event_cloud.png',                  // FinOps masterclass web conference thumbnail
    security: '/img_event_security.png',            // Zero-Trust Munich event thumbnail
  },

  // Whats New Carousel Slides
  whatsNew: {
    googlePartner: '/img_whatsnew_google_partner.png', // Cloud partner of the year banner
    aiStudioLaunch: '/img_whatsnew_ai_studio.png',     // GangaTara AI Studio product announcement
    hiringEngineers: '/img_whatsnew_hiring.png',       // Global engineering hiring flyer
    cloudOpsMarketplace: '/img_whatsnew_cloudops.png',  // AWS Marketplace release announcement
  },

  // Case Studies
  caseStudies: {
    healthcare: '/img_case_healthcare.png',          // Healthcare client EHR deployment card
    finance: '/img_case_finance.png',                // BFSI secure ledger core deployment card
    retail: '/img_case_retail.png',                  // Headless e-commerce modernization card
  },

  // Blogs & Insights
  blogs: {
    aiArchitecture: '/img_blog_ai_architecture.png',  // AI RAG database design insight card
    gitopsKubernetes: '/img_blog_gitops_kubernetes.png', // ArgoCD GitOps cluster flow insight card
  },

  // Industry Vertical Landing Pages
  industries: {
    healthcare: {
      hero: '/img_ind_health_hero.png',             // Healthcare vertical index page banner bg
      insight: '/img_ind_health_insight.png',       // Diagnostics AI paper spotlight cover
      videoPoster: '/img_ind_health_video_poster.png', // Healthcare streaming demo video poster
      infocus: {
        card1: '/img_ind_health_infocus_1.png',      // Healthcare multi-cloud compliance slide
        card2: '/img_ind_health_infocus_2.png',      // Admissions pipeline RAG dashboard slide
        card3: '/img_ind_health_infocus_3.png',      // Case study: EHR migration slide
        card4: '/img_ind_health_infocus_4.png',      // Partner: MedTech diagnostics card
      },
      secondFeatured: '/img_ind_health_second.png',   // Healthcare diagnostics computer vision banner
      solutions: {
        card1: '/img_ind_health_solutions_1.png',    // Product: EHR interoperable bridge card
        card2: '/img_ind_health_solutions_2.png',    // Product: HIPAA cloud landing zone card
        card3: '/img_ind_health_solutions_3.png',    // Product: AI healthstudio studio card
        card4: '/img_ind_health_solutions_4.png',    // Product: Sentry ZTNA hospital card
      },
      recognition: '/img_ind_health_recognition.png', // Healthcare ISO-27001 certificate banner
    },
    finance: {
      hero: '/img_ind_finance_hero.png',             // BFSI vertical index page banner bg
      insight: '/img_ind_finance_insight.png',       // FinOps database scheduling spotlight cover
      videoPoster: '/img_ind_finance_video_poster.png', // Realtime fraud pipeline demo video poster
      infocus: {
        card1: '/img_ind_finance_infocus_1.png',     // Finance multi-tenant zero trust slide
        card2: '/img_ind_finance_infocus_2.png',     // Risk analysis model deployment slide
        card3: '/img_ind_finance_infocus_3.png',     // Case study: blockchain settlement slide
      },
      secondFeatured: '/img_ind_finance_second.png',   // BFSI cognitive auditing workflow banner
      solutions: {
        card1: '/img_ind_finance_solutions_1.png',   // Product: GangaTara core ledger engine card
        card2: '/img_ind_finance_solutions_2.png',   // Product: Compliance Vault for BFSI card
        card3: '/img_ind_finance_solutions_3.png',   // Product: Sentry ZTNA Core Gateway card
        card4: '/img_ind_finance_solutions_4.png',   // Product: DataBridge ETL for Finance card
      },
      recognition: '/img_ind_finance_recognition.png', // Finance AWS partner certificate banner
    },
    retail: {
      hero: '/img_ind_retail_hero.png',              // Retail vertical index page banner bg
      insight: '/img_ind_retail_insight.png',        // API headless e-commerce spotlight cover
      videoPoster: '/img_ind_retail_video_poster.png', // Headless checkout demo video poster
      infocus: {
        card1: '/img_ind_retail_infocus_1.png',      // Retail microservices scaling slide
        card2: '/img_ind_retail_infocus_2.png',      // Vector catalog filter database slide
        card3: '/img_ind_retail_infocus_3.png',      // Case study: e-commerce headless slide
      },
      secondFeatured: '/img_ind_retail_second.png',    // Retail pricing analytics ML banner
      solutions: {
        card1: '/img_ind_retail_solutions_1.png',     // Product: headless retail accelerator card
        card2: '/img_ind_retail_solutions_2.png',     // Product: inventory analytics dashboard card
        card3: '/img_ind_retail_solutions_3.png',     // Product: DataBridge retail ETL card
      },
    },
    manufacturing: {
      hero: '/img_ind_mfg_hero.png',                 // Manufacturing vertical index page banner bg
      insight: '/img_ind_mfg_insight.png',           // OT network SDP firewall spotlight cover
      videoPoster: '/img_ind_mfg_video_poster.png',   // Industrial sensor MQTT demo video poster
      infocus: {
        card1: '/img_ind_mfg_infocus_1.png',         // Edge-computing telemetry inspector slide
      },
      secondFeatured: '/img_ind_mfg_second.png',       // Manufacturing predictive maintenance banner
      solutions: {
        card1: '/img_ind_mfg_solutions_1.png',       // Product: edge gateway sensor collector card
        card2: '/img_ind_mfg_solutions_2.png',       // Product: supply chain tracer portal card
      },
    },
    education: {
      hero: '/img_ind_edu_hero.png',                 // EdTech vertical index page banner bg
      insight: '/img_ind_edu_insight.png',           // Student dynamic study paths spotlight cover
      videoPoster: '/img_ind_edu_video_poster.png',   // Adaptive LMS user portal demo video poster
      infocus: {
        card1: '/img_ind_edu_infocus_1.png',         // EdTech serverless streaming metrics slide
        card2: '/img_ind_edu_infocus_2.png',         // Case study: LMS scale-up dashboard slide
      },
      secondFeatured: '/img_ind_edu_second.png',       // Edtech proctoring facial recognition banner
      solutions: {
        card1: '/img_ind_edu_solutions_1.png',       // Product: GangaTara enterprise LMS card
      },
    },
    government: {
      hero: '/img_ind_gov_hero.png',                 // Government vertical index page banner bg
      insight: '/img_ind_gov_insight.png',           // Civic DB database encryption spotlight cover
      videoPoster: '/img_ind_gov_video_poster.png',   // Citizen record submission demo video poster
      infocus: {
        card1: '/img_ind_gov_infocus_1.png',         // Government WCAG compliance audit slide
      },
      secondFeatured: '/img_ind_gov_second.png',       // Government agency zero-trust portal banner
      solutions: {
        card1: '/img_ind_gov_solutions_1.png',       // Product: Sentry ZTNA gateway public card
      },
    },
  },

  // Dedicated Service Practice Landing Pages
  services: {
    'cloud-solutions': {
      hero: '/img_srv_cloud_hero.png',               // Cloud practice index page banner bg
      insight: '/img_srv_cloud_insight.png',         // Autoscaling container scheduler paper cover
      infocus: {
        card1: '/img_srv_cloud_infocus_1.png',       // Cloud practice GitOps IaC slide
        card2: '/img_srv_cloud_infocus_2.png',       // Case study: banking migration dashboard slide
      },
      secondFeatured: '/img_srv_cloud_second.png',     // Cloud practice Terraform scanning banner
      solutions: {
        card1: '/img_srv_cloud_solutions_1.png',     // Product: Kubernetes orchestration card
        card2: '/img_srv_cloud_solutions_2.png',     // Product: AWS landing zone blueprint card
        card3: '/img_srv_cloud_solutions_3.png',     // Product: CloudOps management suite card
      },
    },
    'ai-machine-learning': {
      hero: '/img_srv_ai_hero.png',                  // AI practice index page banner bg
      insight: '/img_srv_ai_insight.png',            // Secure semantic database index paper cover
      videoPoster: '/img_srv_ai_video_poster.png',   // Document chunking and embeddings demo video poster
      infocus: {
        card1: '/img_srv_ai_infocus_1.png',          // AI MLOps ingestion pipeline slide
      },
      secondFeatured: '/img_srv_ai_second.png',       // AI practice cluster auto-labeling banner
      solutions: {
        card1: '/img_srv_ai_solutions_1.png',        // Product: PyTorch MLOps framework pipeline card
        card2: '/img_srv_ai_solutions_2.png',        // Product: Vector database integration API card
        card3: '/img_srv_ai_solutions_3.png',        // Product: GangaTara AI Studio builder card
      },
    },
    'software-development': {
      hero: '/img_srv_soft_hero.png',                // Software Dev practice index page banner bg
      insight: '/img_srv_soft_insight.png',          // Go microservices container study paper cover
      videoPoster: '/img_srv_soft_video_poster.png', // Distributed transactions telemetry demo video poster
      infocus: {
        card1: '/img_srv_soft_infocus_1.png',        // Software dev multitenancy DB drift slide
      },
      secondFeatured: '/img_srv_soft_second.png',     // Software dev multi-thread CPU optimization banner
      solutions: {
        card1: '/img_srv_soft_solutions_1.png',      // Product: Go & Rust enterprise core code card
      },
    },
    'web-development': {
      hero: '/img_srv_web_hero.png',                 // Web Dev practice index page banner bg
      insight: '/img_srv_web_insight.png',           // E-commerce paint latency spotlight cover
      videoPoster: '/img_srv_web_video_poster.png',   // SSR dynamic caching compiler demo video poster
      infocus: {
        card1: '/img_srv_web_infocus_1.png',         // Web dev WCAG 2.1 keyboard focus slide
      },
      secondFeatured: '/img_srv_web_second.png',       // Web dev shared component visual sync banner
      solutions: {
        card1: '/img_srv_web_solutions_1.png',       // Product: Next.js edge framework builder card
      },
    },
    'application-development': {
      hero: '/img_srv_app_hero.png',                 // Mobile App practice index page banner bg
      insight: '/img_srv_app_insight.png',           // Flutter canvas engine comparison paper cover
      videoPoster: '/img_srv_app_video_poster.png',   // iOS Swift proctoring transition demo video poster
      infocus: {
        card1: '/img_srv_app_infocus_1.png',         // Mobile dev secure database local sync slide
      },
      secondFeatured: '/img_srv_app_second.png',       // Mobile dev device biometric keychain banner
      solutions: {
        card1: '/img_srv_app_solutions_1.png',       // Product: Flutter cross-platform mobile shell card
      },
    },
    'cyber-security': {
      hero: '/img_srv_sec_hero.png',                 // Cybersecurity practice index page banner bg
      insight: '/img_srv_sec_insight.png',           // CSPM configuration drift analysis paper cover
      videoPoster: '/img_srv_sec_video_poster.png',   // Simulated SQLi intrusion gateway demo video poster
      infocus: {
        card1: '/img_srv_sec_infocus_1.png',         // Cyber security static code pipeline audit slide
      },
      secondFeatured: '/img_srv_sec_second.png',       // Cyber security dependency analysis scanner banner
      solutions: {
        card1: '/img_srv_sec_solutions_1.png',       // Product: Sentry ZTNA security core gateway card
      },
    },
    'devops': {
      hero: '/img_srv_devops_hero.png',              // DevOps fallback card bg
    },
    'ui-ux-design': {
      hero: '/img_srv_uiux_hero.png',                // UI/UX fallback card bg
    },
    'data-analytics': {
      hero: '/img_srv_data_hero.png',                // Data Analytics fallback card bg
    },
    'blockchain': {
      hero: '/img_srv_blockchain_hero.png',          // Blockchain fallback card bg
    },
    'iot-solutions': {
      hero: '/img_srv_iot_hero.png',                 // IoT fallback card bg
    },
    'digital-transformation': {
      hero: '/img_srv_digtrans_hero.png',            // Digital Transformation fallback card bg
    },
    'digital-marketing': {
      hero: '/img_srv_marketing_hero.png',           // Digital Marketing fallback card bg
    },
  },
};
