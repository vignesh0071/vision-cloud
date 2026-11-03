import type { InnovationTheme } from '../types';

export const innovationThemes: InnovationTheme[] = [
  {
    id: 'local-first-crdt',
    tag: 'DISTRIBUTED DATA',
    title: 'Local-First Software & CRDT State Resolution',
    description: 'Investigating client-side data persistence models where user operations occur instantly against embedded SQLite/IndexedDB stores without waiting for network round-trips.',
    focusAreas: [
      'Two-way conflict-free replicated data types (CRDTs)',
      'Sub-5ms UI mutation latency in multi-user settings',
      'Encrypted peer-to-peer synchronization protocols',
      'Automated schema migration on embedded mobile devices'
    ],
    technicalRationale: 'Network latency is a persistent barrier to fluid UX. Local-first architectures invert client-server dependency by treating local storage as the primary source of truth, replicating to cloud backups asynchronously.',
    statusBadge: 'Active Exploration',
    icon: 'Share2'
  },
  {
    id: 'edge-slm-inference',
    tag: 'APPLIED AI',
    title: 'Edge-Hosted Small Language Models (SLMs)',
    description: 'Benchmarking lightweight 1B to 3B parameter neural models running directly on customer-controlled private servers and edge runtimes rather than centralized proprietary APIs.',
    focusAreas: [
      'Quantized inference via ONNX Runtime and WebAssembly',
      'Deterministic structured JSON extraction pipelines',
      'Air-gapped enterprise deployment configurations',
      'Evaluating latency vs. precision trade-offs across task types'
    ],
    technicalRationale: 'Not every enterprise task requires massive multi-billion parameter models. Compact, quantized SLMs eliminate recurring per-token fees and preserve strict internal data sovereignty.',
    statusBadge: 'Prototype Phase',
    icon: 'Cpu'
  },
  {
    id: 'wasm-high-throughput',
    tag: 'SYSTEMS PERFORMANCE',
    title: 'WebAssembly High-Throughput Ingestion Pipelines',
    description: 'Compiling Rust and Go computational engines to WebAssembly (Wasm) modules running in the browser worker thread to process large binary telemetry and complex charting calculations.',
    focusAreas: [
      'Zero-copy memory sharing between WebAssembly and Canvas 2D',
      'SIMD vector instructions for array parsing in browser memory',
      'Client-side CSV/Parquet file parsing exceeding 50MB/sec',
      'Minimizing GC pauses during high-frequency data streams'
    ],
    technicalRationale: 'JavaScript garbage collection can introduce stutter during intense data rendering. WebAssembly grants predictable linear memory execution inside standard secure browser sandboxes.',
    statusBadge: 'Experimental Benchmark',
    icon: 'Layers'
  },
  {
    id: 'architectural-rigor',
    tag: 'ENGINEERING DISCIPLINE',
    title: 'Formal Architectural Decision Records (ADR) Framework',
    description: 'Codifying internal software blueprints, automated linters, and type-system boundaries to ensure long-term codebase integrity across multi-year software lifecycles.',
    focusAreas: [
      'Strict schema verification at every external boundary',
      'Automated semantic dependency auditing pipelines',
      'Standardized micro-interaction design tokens',
      'Exhaustive documentation-first engineering workflows'
    ],
    technicalRationale: 'A company’s greatest technical liability is undocumented tribal knowledge. Formal decision records keep software maintainable even through team scaling and infrastructure changes.',
    statusBadge: 'Internal Standard',
    icon: 'BookOpen'
  }
];
