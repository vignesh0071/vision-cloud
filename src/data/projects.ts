import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'eshaka-cabs',
    title: 'Eshaka Cabs',
    category: 'Business & Booking Systems',
    categories: ['Business & Booking Systems', 'Websites & Platforms'],
    shortDescription: 'A travel and cab booking website for Thoothukudi & Tuticorin, featuring one-way and round-trip booking, fleet selection, and direct booking confirmation.',
    fullDescription: 'Eshaka Cabs is a dedicated regional cab service website built for customers traveling across Thoothukudi, Tirunelveli, Madurai, Chennai, and broader Tamil Nadu. The platform presents the company fleet with clear vehicle categories (including Mahindra Xylo and Hyundai Xcent), offers interactive trip scheduling with pickup/drop locations and passenger counts, and enables streamlined booking inquiries via direct phone and WhatsApp integrations.',
    objectives: [
      'Deliver a responsive, mobile-optimized cab booking interface with fast load times across 3G/4G networks',
      'Enable customers to select one-way, round-trip, outstation, and airport pickup journeys with exact dates and passenger counts',
      'Streamline customer inquiries directly into dispatch channels via instant WhatsApp pre-filled messaging and click-to-call'
    ],
    engineeringApproach: 'Built with clean semantic HTML5, modern CSS, and JavaScript with Bootstrap responsive grid scaffolding. Designed with an inviting travel-yellow and crisp white visual identity that ensures legibility on mobile devices under direct sunlight.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WhatsApp Click-to-Chat', 'Mobile Responsive'],
    architectureHighlights: [
      'Clean, mobile-first responsive booking workflow for local and outstation travel',
      'Structured trip reservation form capturing pickup, destination, dates, and vehicle selection',
      'Direct WhatsApp business dispatch bridge eliminating drop-off friction',
      'Optimized asset delivery ensuring high performance on mobile networks'
    ],
    status: 'Completed',
    liveUrl: 'https://www.eshakacabs.in/',
    imageSrc: '/images/projects/eshaka-cabs.jpg',
    visualType: 'grid',
    isConcept: false
  },
  {
    id: 'spl-courier',
    title: 'SPL Courier',
    category: 'Websites & Platforms',
    categories: ['Websites & Platforms'],
    shortDescription: 'A commercial courier and logistics service website for SPL Worldwide Express in Thoothukudi, presenting domestic, international, and air cargo delivery services.',
    fullDescription: 'SPL Courier (SPL Worldwide Express) is a professional commercial logistics website engineered to represent the carrier\'s domestic and international shipping operations based in Thoothukudi. The platform provides clear visibility into available freight and express courier capabilities—including document shipping, parcel transit, and international air cargo—along with structured online service inquiry forms, contact coordination, and branch locations.',
    objectives: [
      'Present comprehensive domestic and international logistics services with clear category breakdowns',
      'Provide an accessible shipment inquiry and rate estimation request form for business and retail clients',
      'Establish a strong, credible digital presence for regional and overseas cargo transit operations'
    ],
    engineeringApproach: 'Developed as a responsive multi-page web platform utilizing modern layout standards, accessible form validation, and optimized imagery. Focused on fast load speeds, clear typography, and verified contact points without unverified claims or simulated tracking integrations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'Form Validation', 'SEO Architecture'],
    architectureHighlights: [
      'Structured service catalog spanning domestic courier, express documents, and international air cargo',
      'Interactive shipment inquiry interface with route and parcel detail capture',
      'Direct coordination channels connecting shippers to dispatch desks in Thoothukudi',
      'Responsive multi-device layout compliant with modern web accessibility guidelines'
    ],
    status: 'Completed',
    liveUrl: 'https://splexpress.in/',
    imageSrc: '/images/projects/spl-courier.jpg',
    visualType: 'network',
    isConcept: false
  },
  {
    id: 'vynex-messenger',
    title: 'Vynex Messenger',
    category: 'Messaging & Mobile Apps',
    categories: ['Messaging & Mobile Apps'],
    shortDescription: 'A private, customized messaging application currently in active development, engineered with Firebase Authentication, real-time message sync, and user profile management.',
    fullDescription: 'Vynex Messenger is an independent, private messaging application engineered for streamlined personal communication. Currently in active development, the initial implementation focuses on reliable mobile-number verification via Firebase Phone Authentication, Cloud Firestore real-time message synchronization, conversation thread storage, and user profile management. The application features a custom dark-mode interface built for smooth mobile interactions.',
    objectives: [
      'Implement secure, passwordless authentication using mobile-number SMS verification via Firebase Auth',
      'Provide low-latency real-time 1-on-1 text messaging using Cloud Firestore event listeners',
      'Store conversation history and deliver instantaneous synchronization across authenticated user devices'
    ],
    engineeringApproach: 'Architected with React Native and TypeScript, backed by Google Firebase serverless cloud services. State management leverages reactive listeners for instant message propagation, with offline local persistence for conversation caching.',
    technologies: ['React Native', 'TypeScript', 'Firebase Auth (Phone/OTP)', 'Cloud Firestore', 'Firebase Storage'],
    architectureHighlights: [
      'Mobile phone number verification workflow with one-time verification tokens',
      'Real-time Firestore conversation stream with sub-second message dispatch',
      'Custom dark-mode UI with polished typography and message status indicators',
      'Active development scope: Core messaging and profiles verified; media attachments in progress'
    ],
    status: 'In Development',
    imageSrc: '/images/projects/vynex-messenger.png',
    visualType: 'cube',
    isConcept: false
  },
  {
    id: 'vision-cloud-server',
    title: 'Vision Cloud Server',
    category: 'Servers & Infrastructure',
    categories: ['Servers & Infrastructure'],
    shortDescription: 'An ongoing infrastructure and deployment initiative establishing dedicated Linux hosting, reverse proxy routing, containerized runtimes, and deployment automation.',
    fullDescription: 'Vision Cloud Server is our internal engineering infrastructure and deployment initiative currently underway. Rather than claiming a finished commercial cloud platform, this initiative encompasses our hands-on infrastructure work: configuring dedicated Ubuntu Linux hosts, implementing edge reverse proxies with automated TLS certificate renewals, orchestrating microservices via Docker, and building reliable staging-to-production deployment scripts.',
    objectives: [
      'Harden dedicated Linux host environments with systemd supervision and automated security updates',
      'Establish reverse proxy routing with zero-downtime reload and automated Let\'s Encrypt SSL/TLS certificates',
      'Build standardized Docker container deployment pipelines with health verification checks'
    ],
    engineeringApproach: 'Configured on Ubuntu Server LTS with strict firewall isolation (UFW), container isolation via Docker Compose, and Nginx edge routing. Build processes are validated via automated bash verification scripts that verify port binding, process health, and SSL handshake prior to routing traffic.',
    technologies: ['Ubuntu Server LTS', 'Docker & Compose', 'Nginx Reverse Proxy', 'Bash Shell Scripts', 'Systemd', 'SSL/TLS (Let\'s Encrypt)'],
    architectureHighlights: [
      'Hardened Linux server configuration with dedicated service users and process isolation',
      'Automated container lifecycle management and reverse proxy routing',
      'Four-stage deployment pipeline: Source validation, compilation, container release, and health check',
      'Active development scope: Core host setup and reverse proxy live; deployment automation undergoing testing'
    ],
    status: 'Deployment in Progress',
    imageSrc: '/images/projects/vision-cloud-server.png',
    visualType: 'analytics',
    isConcept: false
  }
];
