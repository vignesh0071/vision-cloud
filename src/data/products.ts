import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'vision-telemetry-engine',
    name: 'Vision Telemetry Engine',
    category: 'Cloud Infrastructure & Observability',
    description: 'A lightweight distributed tracing and client performance telemetry utility engineered for data-intensive web apps without third-party tracking overhead or ad-tech bloat.',
    status: 'Available',
    highlights: [
      'Sub-millisecond client metric capture with zero frame rate impact',
      'No third-party tracking cookies or marketing beacons',
      'Self-hostable collector with PostgreSQL & ClickHouse storage adapters',
      'Configurable latency anomaly alerts and error stack de-minification'
    ],
    techStack: ['TypeScript', 'Node.js', 'ClickHouse', 'Docker', 'Web Workers'],
    previewVisual: 'telemetry',
    linkText: 'Explore Telemetry Specs'
  },
  {
    id: 'vision-core-ui',
    name: 'Vision Core UI System',
    category: 'Developer Tooling & UI Architecture',
    description: 'An architectural headless design system and accessible component framework built for data-dense software interfaces, high contrast accessibility, and rapid enterprise dashboard delivery.',
    status: 'In Development',
    highlights: [
      'Token-driven semantic theming (Mocha, Graphite, Warm Ivory)',
      '100% WAI-ARIA compliant interactive components with keyboard trap management',
      'Virtualised high-performance table engine handling 100k+ rows at 60fps',
      'Zero runtime CSS dependencies'
    ],
    techStack: ['React 19', 'TypeScript', 'CSS Custom Properties', 'Storybook'],
    previewVisual: 'core-ui',
    linkText: 'View Component Roadmap'
  },
  {
    id: 'vision-flow-orchestrator',
    name: 'Vision Flow Orchestrator',
    category: 'Enterprise Automation Engine',
    description: 'An event-driven pipeline orchestrator for business document processing, asynchronous validation tasks, and multi-step notification pipelines.',
    status: 'In Development',
    highlights: [
      'Visual directed acyclic graph (DAG) workflow builder',
      'Configurable webhook receivers with automated retry and backoff',
      'Cryptographically verified immutable execution state logs',
      'Built-in sandbox for automated transformation tests'
    ],
    techStack: ['Go', 'PostgreSQL', 'Redis Streams', 'React', 'WebSockets'],
    previewVisual: 'flow',
    linkText: 'Inquire About Early Access'
  },
  {
    id: 'vision-local-crdt',
    name: 'Vision LocalSync Engine',
    category: 'Distributed Systems & Mobile',
    description: 'An experimental local-first data synchronization library utilizing Conflict-free Replicated Data Types (CRDTs) to provide zero-latency collaborative editing across mobile and web.',
    status: 'Experimental Concept',
    highlights: [
      'Bidirectional state resolution without centralized lock managers',
      'Peer-to-peer WebRTC synchronization fallback',
      'Minimal bundle footprint under 24KB gzipped',
      'Encrypted client storage with SQLite integration'
    ],
    techStack: ['TypeScript', 'CRDTs', 'SQLite', 'WebRTC', 'IndexedDB'],
    previewVisual: 'sync',
    linkText: 'View Research Exploration'
  }
];
