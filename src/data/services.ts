import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Engineering',
    tagline: 'Tailored backend engines, microservices, and specialized internal tools.',
    description: 'We architect and build robust, high-throughput software systems built strictly around your organization’s operational models, data workflows, and scalability targets.',
    problemsSolved: [
      'Eliminating operational bottlenecks caused by off-the-shelf software limitations',
      'Consolidating disconnected legacy systems into cohesive API-driven backends',
      'Scaling data-processing workloads with minimal server resource consumption'
    ],
    technicalApproach: 'Domain-Driven Design (DDD) coupled with type-safe distributed architectures, automated integration testing, and clean database isolation.',
    technologies: ['TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: [
      'Production-grade RESTful and GraphQL APIs',
      'Scalable relational data schemas with migration tooling',
      'Automated background queue and caching layers',
      'Technical architecture documentation and runbooks'
    ],
    icon: 'Code2',
    imageSrc: '/images/service-software.webp'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Application Development',
    tagline: 'High-speed, conversion-focused websites and complex cloud web apps.',
    description: 'We develop modern web applications engineered for sub-second page loads, accessible user interfaces, and seamless operation across desktop, tablet, and mobile browsers.',
    problemsSolved: [
      'Sub-optimal core web vitals harming search engine positioning and user retention',
      'Fragile frontend architectures that break during feature expansion',
      'Poor accessibility and clunky responsive rendering on mobile devices'
    ],
    technicalApproach: 'Component-driven frontend engineering utilizing modern React architecture, server-side streaming, CSS design token hierarchies, and aggressive bundle optimization.',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    deliverables: [
      'Fully responsive, WAI-ARIA compliant web interface',
      'Optimized asset pipelines and sub-second First Contentful Paint',
      'Search engine optimized meta structures and dynamic sitemaps',
      'Headless CMS or custom administrative dashboard integration'
    ],
    icon: 'Globe',
    imageSrc: '/images/service-web.webp'
  },
  {
    id: 'mobile-app-development',
    number: '03',
    title: 'Mobile Application Development',
    tagline: 'Fluid native and cross-platform mobile solutions for iOS and Android.',
    description: 'We build high-performance mobile apps focusing on immediate responsiveness, offline-first reliability, biometric security, and fluid touch interactions.',
    problemsSolved: [
      'High development and maintenance overhead of maintaining dual separate codebases',
      'Poor user experience in low-connectivity or offline operational environments',
      'Sluggish camera, Bluetooth, or local storage hardware bindings'
    ],
    technicalApproach: 'Cross-platform engineering with React Native / Expo combined with native bridge modules, SQLite offline data replication, and localized state caching.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'iOS SDK', 'Android SDK'],
    deliverables: [
      'Single codebase compiling to native iOS and Android packages',
      'Offline-capable synchronization engine with conflict handling',
      'Native push notifications and hardware sensor integrations',
      'App Store and Google Play deployment readiness'
    ],
    icon: 'Smartphone',
    imageSrc: '/images/service-mobile.webp'
  },
  {
    id: 'cloud-solutions',
    number: '04',
    title: 'Cloud Solutions & Infrastructure',
    tagline: 'Resilient containerized cloud architectures, CI/CD, and serverless hosting.',
    description: 'We design and implement modern cloud infrastructures configured for zero-downtime deployments, elastic auto-scaling, and proactive observability.',
    problemsSolved: [
      'Unpredictable hosting costs driven by unoptimized server instances',
      'Manual, error-prone software deployments with downtime risk',
      'Blind spots in production error monitoring and user performance analytics'
    ],
    technicalApproach: 'Infrastructure as Code (IaC) with immutable Docker container deployments, automated CI/CD pipelines, and distributed telemetry collection.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Cloudflare', 'GitHub Actions', 'Prometheus'],
    deliverables: [
      'Containerized environment recipes and multi-stage Dockerfiles',
      'Automated zero-downtime CI/CD build and verification pipelines',
      'Global CDN edge caching and SSL certificate management',
      'Real-time uptime and performance telemetry dashboards'
    ],
    icon: 'Cloud',
    imageSrc: '/images/service-saas.webp'
  },
  {
    id: 'ui-ux-engineering',
    number: '05',
    title: 'UI/UX & Digital Product Design',
    tagline: 'Design token systems, interactive prototypes, and ergonomic interfaces.',
    description: 'We shape digital experiences that combine visual distinction with rigorous ergonomic usability, turning complex multi-step workflows into effortless digital journeys.',
    problemsSolved: [
      'High user drop-off during onboarding and critical transaction flows',
      'Inconsistent visual patterns across product suites confusing users',
      'Engineering friction caused by vague or untokenized design assets'
    ],
    technicalApproach: 'Token-driven atomic design systems, interactive Figma component libraries, rapid user journey testing, and strict WCAG 2.1 AA accessibility audits.',
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'WCAG 2.1 AA', 'Tailwind', 'Motion'],
    deliverables: [
      'Clickable interactive design prototypes and user journeys',
      'Comprehensive design token repository (colors, type, spacing)',
      'Production-ready UI component documentation',
      'Accessible responsive layouts for all viewports'
    ],
    icon: 'Palette',
    imageSrc: '/images/vision-about-04.webp'
  },
  {
    id: 'ai-intelligent-systems',
    number: '06',
    title: 'AI and Intelligent Systems',
    tagline: 'Pragmatic Large Language Model integrations, vector search, and automation.',
    description: 'We integrate private LLMs, retrieval-augmented generation (RAG) pipelines, and intelligent classification systems directly into business workflows without external hype.',
    problemsSolved: [
      'Hours spent manually parsing unstructured business documents and emails',
      'Inaccurate or hallucinatory outputs from unanchored generic AI tools',
      'Data privacy concerns when transmitting sensitive internal records'
    ],
    technicalApproach: 'Strictly evaluated RAG pipelines using embedding vector databases, hybrid BM25 lexical search, prompt sanitization, and structured JSON output schemas.',
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI API', 'pgvector', 'FastAPI'],
    deliverables: [
      'Custom knowledge retrieval and query routing pipelines',
      'Document parsing and automated structured extraction services',
      'Evaluation benchmarks measuring accuracy and latency',
      'Strict security guardrails preventing data leakage'
    ],
    icon: 'Cpu',
    imageSrc: '/images/service-ai.webp'
  },
  {
    id: 'enterprise-systems',
    number: '07',
    title: 'Enterprise Business Systems',
    tagline: 'Centralized operational command centers, ERPs, and inventory workflows.',
    description: 'We build unified business operating systems that eliminate duplicate data entry, coordinate cross-departmental operations, and deliver real-time operational oversight.',
    problemsSolved: [
      'Data fragmentation across disparate spreadsheets and point solutions',
      'Lack of real-time inventory visibility leading to ordering errors',
      'Cumbersome manual audit logging and compliance verification'
    ],
    technicalApproach: 'Modular service architectures backed by ACID-compliant transactional stores, real-time WebSocket state distribution, and granular role-based access control (RBAC).',
    technologies: ['PostgreSQL', 'Node.js', 'React', 'WebSockets', 'Tailwind CSS', 'Redis'],
    deliverables: [
      'Single-pane operational control dashboard',
      'Role-based permissions with immutable audit trail logging',
      'Automated inventory replenishment and order status triggers',
      'Exportable financial, operational, and audit reports'
    ],
    icon: 'Database',
    imageSrc: '/images/service-erp.webp'
  },
  {
    id: 'technical-consulting',
    number: '08',
    title: 'Technical Consulting & Architecture Review',
    tagline: 'Independent architectural evaluations, codebase audits, and roadmap strategy.',
    description: 'We provide experienced engineering oversight to help leadership make sound technology investments, mitigate technical debt, and establish scalable architectures.',
    problemsSolved: [
      'Uncertainty when selecting long-term technology stacks for new ventures',
      'Accumulated technical debt causing regression bugs and release delays',
      'Security and scalability vulnerabilities in pre-launch software systems'
    ],
    technicalApproach: 'Methodical architectural audits inspecting system boundaries, concurrency bottlenecks, database indexing, and dependency security postures.',
    technologies: ['Architecture Reviews', 'Threat Modeling', 'Code Quality Linters', 'Performance Profilers'],
    deliverables: [
      'Comprehensive Technical Debt and Vulnerability Audit Report',
      'Recommended Architecture Blueprints and Technology Stack Matrix',
      'Step-by-step Refactoring Roadmap with risk-weighted priorities',
      'Executive debrief and engineering team alignment workshop'
    ],
    icon: 'FileCode2',
    imageSrc: '/images/vision-about-02.webp'
  }
];
