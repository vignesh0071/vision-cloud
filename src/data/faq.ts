import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-scope-services',
    category: 'General',
    question: 'What types of technology solutions does Vision Cloud engineer?',
    answer: 'Vision Cloud specializes in custom software engineering, modern web applications, cross-platform mobile apps (iOS & Android), scalable cloud architectures, UI/UX design token systems, and pragmatic AI/automation workflows. We focus on building reliable, maintainable systems tailored to real business operational requirements.'
  },
  {
    id: 'faq-process-kickoff',
    category: 'Engineering',
    question: 'How does an engineering engagement begin?',
    answer: 'Every project starts with an initial technical discovery session where we review your operational goals, existing systems, constraints, and timeline expectations. We then produce a clear scope brief, proposed architecture blueprint, and phased milestone roadmap before writing code or signing contracts.'
  },
  {
    id: 'faq-tech-selection',
    category: 'Engineering',
    question: 'How do you determine which technologies to use for a project?',
    answer: 'Technology choices are governed by project requirements, performance benchmarks, and long-term maintenance costs rather than industry hype. For high-performance frontends, we frequently deploy React, Next.js, and TypeScript. For backend services and APIs, we utilize TypeScript, Go, Python, and ACID-compliant relational databases such as PostgreSQL.'
  },
  {
    id: 'faq-custom-vs-saas',
    category: 'General',
    question: 'When should a business invest in custom software versus buying off-the-shelf SaaS?',
    answer: 'Off-the-shelf solutions work well for standardized tasks (e.g. standard email marketing or basic accounting). However, when a business has proprietary workflows, unique data structures, high per-seat license costs, or strategic operations that represent competitive advantages, custom software delivers substantial operational leverage and long-term cost savings.'
  },
  {
    id: 'faq-pricing-model',
    category: 'Scope & Pricing',
    question: 'How is project investment and pricing structured?',
    answer: 'Pricing is established on a milestone basis grounded in verified technical scope, architectural complexity, required third-party integrations, and testing criteria. Following the initial discovery review, we provide a transparent, itemized proposal detailing deliverables for each sprint. We do not engage in hidden markups or ambiguous hourly estimates.'
  },
  {
    id: 'faq-timelines',
    category: 'Timeline',
    question: 'What are typical project timelines?',
    answer: 'Project duration varies according to architectural scope. A high-performance marketing website or focused product portal typically spans 3 to 6 weeks. A comprehensive web application, custom internal ERP, or cross-platform mobile system generally requires 8 to 16 weeks, delivered in iterative two-week staging milestones for continuous review.'
  },
  {
    id: 'faq-client-involvement',
    category: 'General',
    question: 'What is required from our team during the engineering process?',
    answer: 'We value your time and keep our collaboration focused. We typically request one dedicated stakeholder point of contact for weekly or bi-weekly milestone check-ins, domain knowledge sharing during the initial discovery phase, and timely feedback on staging prototypes.'
  },
  {
    id: 'faq-maintenance-support',
    category: 'Security & Maintenance',
    question: 'Do you provide ongoing maintenance, monitoring, and updates?',
    answer: 'Yes. We offer structured monthly maintenance and observability packages that include 24/7 uptime monitoring, critical dependency upgrades, security patching, database optimization, and allocated engineering hours for ongoing iterative feature improvements.'
  },
  {
    id: 'faq-code-ownership',
    category: 'Scope & Pricing',
    question: 'Who owns the intellectual property and source code upon completion?',
    answer: 'You retain full 100% ownership of all custom software, design tokens, documentation, and source code produced during the engagement upon milestone completion. We provide full repository transfer and deployment runbooks so your internal team or future partners can maintain the system independently.'
  },
  {
    id: 'faq-security-compliance',
    category: 'Security & Maintenance',
    question: 'What security practices do you follow during development?',
    answer: 'We follow defense-in-depth principles: strict input validation, parameterized database queries to prevent SQL injections, automated dependency vulnerability audits (OWASP guidelines), cryptographic token verification, and granular role-based access controls (RBAC).'
  },
  {
    id: 'faq-deployment-hosting',
    category: 'Timeline',
    question: 'How and where will our application be deployed?',
    answer: 'We deploy applications to your preferred cloud provider (such as AWS, Google Cloud, Cloudflare, or dedicated VPS environments) using containerized Docker recipes and automated CI/CD pipelines. We configure SSL certificates, DNS routing, and edge caching to ensure zero-downtime releases.'
  },
  {
    id: 'faq-inquiry-consultation',
    category: 'General',
    question: 'How can we initiate a technical consultation with your team?',
    answer: 'You can submit your project goals using the inquiry form on our Contact page or message us directly via WhatsApp. An engineering lead will review your requirements and coordinate a technical discovery discussion within 24 to 48 business hours.'
  }
];
