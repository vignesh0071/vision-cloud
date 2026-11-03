export type ProductStatus = 'Available' | 'In Development' | 'Experimental Concept';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problemsSolved: string[];
  technicalApproach: string;
  technologies: string[];
  deliverables: string[];
  icon: string;
  imageSrc?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  status: ProductStatus;
  highlights: string[];
  techStack: string[];
  previewVisual?: string;
  linkText?: string;
}

export type ProjectCategory = 
  | 'All' 
  | 'Web Applications' 
  | 'Mobile Solutions' 
  | 'Cloud & Infrastructure';

export type ProjectStatusType = 'Completed' | 'In Development' | 'Deployment in Progress';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  engineeringApproach: string;
  technologies: string[];
  architectureHighlights: string[];
  status: ProjectStatusType;
  liveUrl?: string;
  imageSrc: string;
  visualType?: 'grid' | 'analytics' | 'cube' | 'network' | 'server';
  isConcept?: boolean;
}

export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  communicationProtocol: string;
  icon: string;
  imageSrc?: string;
}

export interface InnovationTheme {
  id: string;
  tag: string;
  title: string;
  description: string;
  focusAreas: string[];
  technicalRationale: string;
  statusBadge: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Engineering' | 'Scope & Pricing' | 'Timeline' | 'Security & Maintenance';
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  focus: string;
  referenceId: string;
  initials: string;
  photoUrl?: string;
  roleOverview: string;
  responsibilities: string[];
  disciplines: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  summary: string;
}
