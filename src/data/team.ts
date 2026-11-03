import type { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 'kesevean-m',
    slug: 'kesevean-m',
    name: 'Mr. Kesevean M',
    role: 'Chief Technology Officer & Full-Stack Architect',
    focus: 'Core Architecture & Server Engineering',
    referenceId: 'VC-EXEC-01',
    initials: 'KM',
    roleOverview:
      'Directs Vision Cloud’s core engineering standards, server architectures, and full-stack technical frameworks, ensuring production resilience and high-concurrency scalability across all deployed client systems.',
    responsibilities: [
      'Leading core architectural strategy and server-side engineering disciplines across all production projects.',
      'Defining database schemas, high-throughput REST and GraphQL API contracts, and microservice topologies.',
      'Establishing cloud deployment pipelines, containerization standards, and continuous integration workflows.',
      'Enforcing type-safe data boundaries between distributed server runtimes and web application clients.',
      'Overseeing system reliability, data consistency guarantees, and zero-downtime release protocols.'
    ],
    disciplines: [
      'Core Architecture',
      'Server Engineering',
      'Distributed Systems',
      'API Contract Design',
      'Database Topology'
    ]
  },
  {
    id: 'keerthi-kannan-s',
    slug: 'keerthi-kannan-s',
    name: 'Mr. Keerthi Kannan S',
    role: 'Lead Software Architect & Innovation Strategist',
    focus: 'Systems Architecture & Advanced Solutions',
    referenceId: 'VC-ARCH-02',
    initials: 'KS',
    roleOverview:
      'Architects complex enterprise system blueprints and directs research into advanced software solutions, aligning technical innovation with dependable system performance and long-term architectural longevity.',
    responsibilities: [
      'Authoring foundational Architectural Decision Records (ADRs) and structural blueprints for complex software systems.',
      'Evaluating and benchmarking emerging technical paradigms, specialized data structures, and algorithmic models.',
      'Analyzing architectural trade-offs, system concurrency boundaries, and data synchronization patterns.',
      'Guiding technical debt remediation strategies, code refactoring roadmaps, and modular boundary separations.',
      'Directing technical proof-of-concept prototypes within the Vision Cloud Innovation Lab.'
    ],
    disciplines: [
      'Systems Architecture',
      'Advanced Solutions',
      'Architectural Modeling',
      'Algorithmic Systems',
      'Technical R&D'
    ]
  },
  {
    id: 'vignesh-v',
    slug: 'vignesh-v',
    name: 'Mr. Vignesh V',
    role: 'Design Director & Principal Frontend Architect',
    focus: 'UI/UX Architecture & Frontend Engineering',
    referenceId: 'VC-DSN-03',
    initials: 'VV',
    roleOverview:
      'Leads digital product design architecture and modern frontend engineering, unifying visual brand aesthetics with high-performance, accessible, and responsive user interfaces.',
    responsibilities: [
      'Directing design token architecture, typography hierarchies, and component design systems across all web platforms.',
      'Architecting state management lifecycles, virtualized rendering pipelines, and Core Web Vitals optimizations.',
      'Enforcing strict WCAG 2.1 AA accessibility standards, semantic HTML structure, and keyboard-first navigation patterns.',
      'Bridging architectural design prototypes with production-grade type-safe React and TypeScript component libraries.',
      'Designing fluid user journeys, micro-interactions, and adaptive layouts optimized for all viewport dimensions.'
    ],
    disciplines: [
      'UI/UX Architecture',
      'Frontend Engineering',
      'Design Token Systems',
      'Web Accessibility (WCAG)',
      'Interaction Design'
    ]
  },
  {
    id: 'govindha-rajan-k',
    slug: 'govindha-rajan-k',
    name: 'Mr. Govindha Rajan K',
    role: 'Mobile Engineering Lead & Client Platforms Architect',
    focus: 'Mobile Client Applications & Device Platforms',
    referenceId: 'VC-MOB-04',
    initials: 'GK',
    roleOverview:
      'Heads mobile client platform development across iOS and Android ecosystems, architecting offline-first mobile applications, hardware sensor integrations, and fluid touch experiences.',
    responsibilities: [
      'Leading mobile application engineering and cross-platform native bridge architecture for iOS and Android.',
      'Designing offline-first data replication layers, local SQLite storage paradigms, and conflict reconciliation engines.',
      'Optimizing client application battery consumption, frame rates, and mobile hardware camera/biometric bindings.',
      'Managing native mobile build pipelines, operating system platform compatibility, and mobile security postures.',
      'Ensuring seamless state synchronization and network-resilient communication between mobile clients and cloud APIs.'
    ],
    disciplines: [
      'Mobile Engineering',
      'Client Platforms',
      'Offline Data Synchronization',
      'Native Device APIs',
      'Cross-Platform Architecture'
    ]
  }
];
