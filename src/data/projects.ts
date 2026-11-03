import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'nexus-portal',
    title: 'Nexus Enterprise Command Portal',
    category: 'Enterprise Web',
    shortDescription: 'A unified operational dashboard managing real-time data feeds, role-based resource permissions, and automated compliance auditing.',
    fullDescription: 'Nexus was engineered as a reference architecture demonstrating high-concurrency enterprise web systems. The system solves the friction of managing cross-departmental access credentials, live status telemetries, and mission-critical action approvals through a single verified interface.',
    objectives: [
      'Provide instant, flicker-free state updates across high-frequency tabular datasets',
      'Enforce granular role-based access control (RBAC) at the edge boundary',
      'Maintain an immutable audit trail of all operational adjustments'
    ],
    engineeringApproach: 'Designed with optimistic UI mutations backed by automated rollback reconciliation. Built around a virtualized DOM table engine capable of rendering 100,000+ records at 60fps, paired with WebSockets for sub-100ms telemetry broadcasts.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'PostgreSQL', 'Docker'],
    architectureHighlights: [
      'Virtualised data grid maintaining constant 60fps scrolling with 100k+ rows',
      'Granular ABAC & RBAC security policies verified on edge proxies',
      'Optimistic state updates with cryptographic rollback checks',
      'Automated dark/light theme tokens conforming to WCAG 2.1 AA'
    ],
    isConcept: true,
    imageSrc: '/images/service-web.webp',
    visualType: 'grid'
  },
  {
    id: 'apex-telemetry',
    title: 'Apex Metric Streaming Engine',
    category: 'Cloud & Systems',
    shortDescription: 'High-frequency telemetry ingestion visualization interface rendering real-time system performance counters and incident signals.',
    fullDescription: 'Apex illustrates a high-performance streaming architecture built to ingest, aggregate, and visualize high-frequency time-series telemetry without browser main-thread blocking or memory leaks.',
    objectives: [
      'Ingest up to 50,000 telemetry datapoints per second from microservice clusters',
      'Render responsive multi-axis graphs smoothly without canvas stutter',
      'Dispatch threshold alerts without requiring polling'
    ],
    engineeringApproach: 'Constructed using a hybrid Canvas/SVG pipeline where high-density historical records are plotted on offscreen hardware-accelerated canvas contexts while interactive inspection overlays remain accessible SVG nodes.',
    technologies: ['TypeScript', 'Canvas API', 'Node.js', 'Redis Streams', 'Docker', 'Prometheus'],
    architectureHighlights: [
      'Hybrid Canvas/SVG rendering pipeline eliminating DOM thrashing',
      'Microsecond timestamp indexing for rapid historical time-range queries',
      'Configurable alert threshold dispatching with minimal CPU footprint',
      'Dockerized single-command local development environment'
    ],
    isConcept: true,
    imageSrc: '/images/service-software.webp',
    visualType: 'analytics'
  },
  {
    id: 'aegis-auth',
    title: 'Aegis Zero-Trust Identity Gateway',
    category: 'Security Architecture',
    shortDescription: 'Centralized authentication and token issuance gateway supporting WebAuthn hardware keys, TOTP, and delegated OAuth2 sessions.',
    fullDescription: 'A modular security blueprint illustrating modern zero-trust authentication workflows. Engineered with cryptographic verification, distributed IP rate limiting, and structured audit logs for rigorous compliance monitoring.',
    objectives: [
      'Replace vulnerable password-only authentication with hardware-backed passkeys',
      'Provide stateless, cryptographically signed token issuance',
      'Mitigate credential stuffing and brute-force attacks at the API perimeter'
    ],
    engineeringApproach: 'Implemented with FIDO2/WebAuthn standards for biometric and security key verification. Session validation utilizes short-lived Ed25519-signed JWTs backed by Redis token revocation lists for instant session invalidation.',
    technologies: ['TypeScript', 'Go Core', 'WebAuthn', 'Redis', 'PostgreSQL', 'OpenID Connect'],
    architectureHighlights: [
      'Hardware-backed WebAuthn biometric passkey authentication',
      'Ed25519 cryptographically signed ephemeral session tokens',
      'Distributed token bucket rate-limiting and threat intelligence filtering',
      'Comprehensive audit event stream formatted in CloudEvents schema'
    ],
    isConcept: true,
    imageSrc: '/images/vision-about-01.webp',
    visualType: 'cube'
  },
  {
    id: 'omniflow-mobile',
    title: 'OmniFlow Logistics Companion',
    category: 'Mobile Solutions',
    shortDescription: 'A lightweight mobile workflow assistant for inventory audits, barcode scanning, and bidirectional offline reconciliation.',
    fullDescription: 'OmniFlow serves as an architectural blueprint for industrial mobile applications where connectivity cannot be guaranteed. Field workers can conduct audits, track inventory transfers, and inspect assets completely offline.',
    objectives: [
      'Guarantee 100% operational capability in zero-connectivity environments',
      'Achieve sub-50ms barcode recognition using native mobile camera pipelines',
      'Resolve multi-device inventory count conflicts automatically upon reconnection'
    ],
    engineeringApproach: 'Built with React Native and an embedded SQLite local store. State synchronizations leverage conflict-free replicated data structures (CRDTs), ensuring parallel offline updates merge deterministically without data loss.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite Offline', 'GraphQL', 'iOS/Android'],
    architectureHighlights: [
      'Two-way conflict-free replicated data types (CRDT) for offline reconciliation',
      'Sub-50ms barcode recognition via native camera bindings',
      'Adaptive high-contrast interface designed for harsh outdoor glare conditions',
      'Minimal background battery consumption through optimized sensor polling'
    ],
    isConcept: true,
    imageSrc: '/images/service-mobile.webp',
    visualType: 'network'
  }
];
