import type { ProcessStage } from '../types';

export const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'Discovery & Needs Assessment',
    tagline: 'Understanding objectives, operational constraints, and target users.',
    description: 'We initiate every engagement by deeply analyzing your business logic, existing technical ecosystem, user needs, and regulatory requirements before writing a single line of code.',
    deliverables: [
      'Discovery findings summary & operational requirements matrix',
      'Technical constraint mapping and dependency audit',
      'High-level project scope and target outcomes definition'
    ],
    communicationProtocol: 'Structured discovery workshop followed by a comprehensive written brief reviewed by both technical leads.',
    icon: 'Compass',
    imageSrc: '/images/process-discover.webp'
  },
  {
    number: '02',
    title: 'Requirement Architecture & Strategy',
    tagline: 'Translating business goals into rigorous technical specifications.',
    description: 'We decompose complex workflows into granular, testable functional specifications, defining data models, interface boundaries, and milestone roadmaps with transparent timelines.',
    deliverables: [
      'Functional Requirements Document (FRD)',
      'Entity-Relationship Diagrams (ERD) and data flow models',
      'Milestone schedule with clear acceptance criteria'
    ],
    communicationProtocol: 'Collaborative milestone review session with asynchronous documentation sign-off.',
    icon: 'FileText',
    imageSrc: '/images/process-plan.webp'
  },
  {
    number: '03',
    title: 'System Blueprinting & Tech Stack Selection',
    tagline: 'Choosing the right tools and designing reliable architectures.',
    description: 'We establish the foundational architectural blueprints—selecting proven, modern technologies suited specifically to your performance, security, and hosting requirements.',
    deliverables: [
      'Architectural Decision Records (ADRs)',
      'API schema contracts and state management blueprints',
      'Security posture guidelines and cloud topology diagrams'
    ],
    communicationProtocol: 'Engineering architecture debrief detailing tradeoffs, latency targets, and scalability rationale.',
    icon: 'Cpu',
    imageSrc: '/images/process-design.webp'
  },
  {
    number: '04',
    title: 'UI/UX Design & Interactive Prototyping',
    tagline: 'Crafting intuitive, accessible, and brand-distinct digital interfaces.',
    description: 'We construct ergonomic interface layouts backed by a strict design token system. Clickable prototypes validate user navigation flows and touch interactions before code implementation.',
    deliverables: [
      'High-fidelity interactive prototype (Figma)',
      'Comprehensive design token repository (colors, type, spacing)',
      'Accessibility review against WCAG 2.1 AA standards'
    ],
    communicationProtocol: 'Design walkthrough demonstrations with structured stakeholder feedback cycles.',
    icon: 'PenTool',
    imageSrc: '/images/process-design.webp'
  },
  {
    number: '05',
    title: 'Iterative Engineering & Clean Code',
    tagline: 'Developing maintainable, type-safe software in structured sprints.',
    description: 'Our development cadence emphasizes clean code principles, static type safety, continuous integration (CI) tests, and modular components built for long-term maintainability.',
    deliverables: [
      'Type-safe source codebase with automated unit & integration tests',
      'Modular REST/GraphQL APIs and optimized database migrations',
      'Automated staging environment for continuous feature verification'
    ],
    communicationProtocol: 'Bi-weekly sprint demos, continuous deployment to staging, and transparent progress reports.',
    icon: 'Terminal',
    imageSrc: '/images/process-build.webp'
  },
  {
    number: '06',
    title: 'Rigorous Quality Assurance & Security',
    tagline: 'Testing functionality, responsiveness, performance, and security.',
    description: 'Every deliverable undergoes exhaustive verification across desktop, tablet, and mobile devices, including Core Web Vitals profiling, automated edge-case fuzzing, and vulnerability scanning.',
    deliverables: [
      'Cross-browser and multi-device QA matrix report',
      'Automated accessibility and Lighthouse performance scores',
      'Security dependency audit and input sanitization verification'
    ],
    communicationProtocol: 'Detailed QA sign-off ledger containing automated pass rates and performance metrics.',
    icon: 'CheckCircle2',
    imageSrc: '/images/process-test.webp'
  },
  {
    number: '07',
    title: 'Zero-Downtime Deployment & Handover',
    tagline: 'Seamless production release, edge caching, and documentation.',
    description: 'We execute zero-downtime production deployments backed by automated health checks, global CDN caching, SSL certification, and complete technical runbooks for your team.',
    deliverables: [
      'Production deployment on verified cloud infrastructure',
      'Global CDN edge routing, caching, and SSL configuration',
      'Architecture documentation, code repository transfer, and admin guides'
    ],
    communicationProtocol: 'Live deployment window oversight followed by an official operational handover briefing.',
    icon: 'Rocket',
    imageSrc: '/images/process-launch.webp'
  },
  {
    number: '08',
    title: 'Continuous Monitoring & Maintenance',
    tagline: 'Sustained reliability, proactive security patches, and scaling support.',
    description: 'Software requires vigilant stewardship. We offer structured maintenance packages covering uptime telemetry, dependency updates, automated backups, and iterative optimizations.',
    deliverables: [
      '24/7 uptime monitoring and error telemetry alerts',
      'Scheduled security patching and dependency upgrades',
      'Quarterly performance profiling and scaling recommendations'
    ],
    communicationProtocol: 'Monthly operational health digest and dedicated asynchronous engineering support channel.',
    icon: 'ShieldCheck',
    imageSrc: '/images/vision-about-03.webp'
  }
];
