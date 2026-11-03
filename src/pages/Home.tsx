import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  Database,
  FileCode2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CinematicVideoBackground } from '../components/media/CinematicVideoBackground';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/animation/Reveal';
import { ProjectModal } from '../components/modals/ProjectModal';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { processStages } from '../data/process';
import { innovationThemes } from '../data/innovation';
import type { ProjectItem } from '../types';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Globe: <Globe size={24} />,
  Smartphone: <Smartphone size={24} />,
  Cloud: <Cloud size={24} />,
  Palette: <Layers size={24} />,
  Cpu: <Cpu size={24} />,
  Database: <Database size={24} />,
  FileCode2: <FileCode2 size={24} />
};

export const Home: React.FC = () => {
  useDocumentTitle(
    'Vision Cloud | Engineering Digital Experiences That Move Business Forward',
    'Vision Cloud designs and builds reliable software, intelligent digital products, and scalable technology solutions for businesses ready to grow.'
  );

  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const handleScrollToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('section-intro');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-home">
      {/* SECTION A: CINEMATIC HERO */}
      <section className="hero-viewport" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CinematicVideoBackground
          videoSrc="/videos/hero-background.mp4.mp4"
          posterSrc="/images/hero-background-poster.jpg"
          posterWebp="/images/hero-background-poster.webp"
          overlayOpacity={0.52}
          overlayTheme="mocha"
          objectPosition="center center"
          isHero={true}
          className="hero-video-bg"
        >
          <div className="hero-section">
            <Container>
              <div className="hero-section__content">
                <Reveal delayMs={100}>
                  <div className="hero-section__eyebrow">
                    <Badge variant="inverse">INDEPENDENT DIGITAL ENGINEERING</Badge>
                  </div>
                </Reveal>

                <Reveal delayMs={200}>
                  <h1 className="heading-display hero-section__title">
                    Engineering Digital Experiences That Move Business Forward.
                  </h1>
                </Reveal>

                <Reveal delayMs={300}>
                  <p className="hero-section__description">
                    Vision Cloud designs and builds reliable software, intelligent digital products, and scalable technology solutions for businesses ready to grow.
                  </p>
                </Reveal>

                <Reveal delayMs={400}>
                  <div className="hero-section__cta-group">
                    <Button to="/contact" variant="terracotta" size="lg" icon={<ArrowRight size={16} />}>
                      Start a Project
                    </Button>
                    <Button to="/projects" variant="outline-inverse" size="lg">
                      Explore Our Work
                    </Button>
                  </div>
                </Reveal>

                <Reveal delayMs={500}>
                  <div className="hero-specs-bar">
                    <div className="hero-spec-item">
                      <span className="hero-spec-item__label">FOUNDATION</span>
                      <span className="hero-spec-item__value">Production-Grade Architecture</span>
                    </div>
                    <div className="hero-spec-item">
                      <span className="hero-spec-item__label">DISCIPLINE</span>
                      <span className="hero-spec-item__value">Type-Safe & Scalable Systems</span>
                    </div>
                    <div className="hero-spec-item">
                      <span className="hero-spec-item__label">DELIVERY</span>
                      <span className="hero-spec-item__value">Dependable Milestone Cadence</span>
                    </div>
                  </div>
                </Reveal>

                <div style={{ marginTop: '2rem' }}>
                  <a
                    href="#section-intro"
                    onClick={handleScrollToNext}
                    className="hero-scroll-cue"
                    aria-label="Scroll to introduction"
                  >
                    <span>DISCOVER VISION CLOUD</span>
                    <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </CinematicVideoBackground>
      </section>

      {/* SECTION B: INTRODUCTION (REFINED SPLIT EDITORIAL) */}
      <section id="section-intro" className="section-pad bg-ivory editorial-grid-bg">
        <Container>
          <div className="split-editorial">
            <div>
              <Reveal>
                <Badge variant="default" style={{ marginBottom: '1.25rem' }}>WHO WE ARE</Badge>
                <h2 className="heading-xl" style={{ marginBottom: '1.5rem', color: 'var(--color-mocha)' }}>
                  A modern software engineering studio with an architectural mindset.
                </h2>
                <p className="text-lead" style={{ marginBottom: '1.25rem' }}>
                  At Vision Cloud, software is not treated as disposable code. We treat every application, platform, and interface as durable digital architecture designed to withstand business evolution.
                </p>
                <p style={{ marginBottom: '1.75rem', lineHeight: '1.7' }}>
                  We partner directly with ambitious companies, startups, and operational leaders who need high-performance web systems, custom backends, and resilient mobile apps built with uncompromising craftsmanship, transparent communication, and verified business value.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button to="/about" variant="primary" icon={<ArrowRight size={14} />}>
                    About Our Practice
                  </Button>
                  <Button to="/process" variant="outline">
                    Our Engineering Process
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delayMs={200}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img
                  src="/images/vision-hero-mocha.jpg"
                  alt="Vision Cloud Modern Engineering Studio"
                  loading="lazy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(30, 24, 21, 0.88) 100%)',
                    color: 'var(--color-warm-ivory)'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-terracotta-soft)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>
                    ENGINEERING VALUES
                  </span>
                  <p style={{ color: 'var(--color-warm-ivory)', fontSize: '0.925rem', margin: 0 }}>
                    Clarity of architecture. Integrity of code. Measurable real-world outcomes.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION C: CAPABILITIES / SERVICES */}
      <section className="section-pad bg-cream">
        <Container>
          <Reveal>
            <SectionHeading
              badgeText="OUR CAPABILITIES"
              title="Full-Spectrum Engineering"
              titleHighlight="Discipline."
              description="From single-page web portals to high-concurrency enterprise microservices, our capabilities span modern technology architecture."
            />
          </Reveal>

          <div className="grid-4">
            {servicesData.map((service, index) => (
              <Reveal key={service.id} delayMs={index * 50}>
                <div className="editorial-card" style={{ height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                        {service.number}
                      </span>
                      <div style={{ color: 'var(--color-mocha)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-subtle-beige)' }}>
                        {iconMap[service.icon] || <Code2 size={22} />}
                      </div>
                    </div>

                    <h3 className="heading-sm" style={{ marginBottom: '0.65rem', color: 'var(--color-mocha)' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                      {service.tagline}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'var(--color-subtle-beige)',
                            color: 'var(--color-graphite-dark)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services#${service.id}`}
                      className="btn btn--ghost"
                      style={{ fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      <span>Explore Scope</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/services" variant="primary" icon={<ArrowRight size={15} />}>
              View All 8 Detailed Service Overviews
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION D: FEATURED PROJECTS */}
      <section className="section-pad bg-ivory">
        <Container>
          <Reveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1.5rem' }}>
              <div>
                <Badge variant="terracotta" style={{ marginBottom: '0.75rem' }}>WORK SHOWCASE</Badge>
                <h2 className="heading-xl">Architectural Case Studies & Systems.</h2>
              </div>
              <Button to="/projects" variant="outline" icon={<ArrowRight size={14} />}>
                View All Projects
              </Button>
            </div>
          </Reveal>

          <div className="grid-2">
            {projectsData.slice(0, 2).map((project, idx) => (
              <Reveal key={project.id} delayMs={idx * 100}>
                <div
                  className="editorial-card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <Badge variant="inverse">{project.category}</Badge>
                    </div>
                    {project.isConcept && (
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.6rem', backgroundColor: 'rgba(30, 24, 21, 0.85)', color: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-inverse-subtle)' }}>
                          Concept Architecture
                        </span>
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        {project.shortDescription}
                      </p>
                    </div>

                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: '0.725rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.25rem 0.55rem',
                              borderRadius: 'var(--radius-xs)',
                              backgroundColor: 'var(--color-subtle-beige)',
                              color: 'var(--color-graphite-dark)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(project)}
                        className="btn btn--outline btn--sm"
                        style={{ width: '100%' }}
                      >
                        <span>View Architecture Specifications</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION E: ENGINEERING PHILOSOPHY (CINEMATIC MOCHA SECTION) */}
      <section className="section-pad bg-cinema editorial-grid-bg-cinema">
        <Container>
          <div className="split-editorial">
            <Reveal>
              <div>
                <Badge variant="inverse" style={{ marginBottom: '1.25rem' }}>PHILOSOPHY & RIGOR</Badge>
                <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.5rem' }}>
                  We engineer for resilience, precision, and longevity.
                </h2>
                <p className="text-lead" style={{ color: 'var(--text-inverse-muted)', marginBottom: '1.5rem' }}>
                  Modern software is often built in haste, accumulating hidden technical debt that surfaces when scaling. Our approach balances rapid product delivery with foundational architectural integrity.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(185, 120, 98, 0.15)', color: 'var(--color-terracotta-soft)' }}>
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-warm-ivory)', fontSize: '1rem', marginBottom: '0.25rem' }}>Type Safety & Determinism</h4>
                      <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.9rem', margin: 0 }}>
                        Every system boundary, API payload, and database transaction is strictly verified to catch defects at compile-time rather than in production.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(185, 120, 98, 0.15)', color: 'var(--color-terracotta-soft)' }}>
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-warm-ivory)', fontSize: '1rem', marginBottom: '0.25rem' }}>Sub-Second Performance</h4>
                      <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.9rem', margin: 0 }}>
                        We optimize bundle sizes, database query plans, and edge-caching headers so your software feels instantaneous to users globally.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(185, 120, 98, 0.15)', color: 'var(--color-terracotta-soft)' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-warm-ivory)', fontSize: '1rem', marginBottom: '0.25rem' }}>Zero Vendor Lock-In</h4>
                      <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.9rem', margin: 0 }}>
                        We build on open web standards, modular architectures, and portable containerized runtimes that your team can run anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-inverse-default)',
                  boxShadow: 'var(--shadow-cinema)'
                }}
              >
                <img
                  src="/images/vision-tech-mocha.jpg"
                  alt="Vision Cloud Engineering Architecture Laboratory"
                  loading="lazy"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(26, 20, 18, 0.9) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-terracotta-soft)' }}>
                    ARCHITECTURAL STANDARD
                  </span>
                  <p style={{ color: 'var(--color-warm-ivory)', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                    Clean separation of concerns, exhaustive automated testing, and comprehensive documentation for every deliverable.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION F: PROCESS OVERVIEW */}
      <section className="section-pad bg-cream">
        <Container>
          <Reveal>
            <SectionHeading
              badgeText="OUR METHODOLOGY"
              title="How We Move From Concept"
              titleHighlight="To Production."
              description="A disciplined, transparent 8-stage cadence designed to eliminate ambiguity, mitigate technical risk, and ensure dependable milestone delivery."
            />
          </Reveal>

          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            {processStages.slice(0, 4).map((stage, i) => (
              <Reveal key={stage.number} delayMs={i * 60}>
                <div className="editorial-card" style={{ height: '100%', position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-terracotta)', display: 'block', marginBottom: '0.75rem' }}>
                    {stage.number}
                  </span>
                  <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>
                    {stage.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {stage.description}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: 'auto' }}>
                    {stage.deliverables.slice(0, 2).map((del, dIdx) => (
                      <li key={dIdx} style={{ fontSize: '0.775rem', color: 'var(--color-graphite-dark)', fontFamily: 'var(--font-mono)' }}>
                        ✓ {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/process" variant="primary" icon={<ArrowRight size={15} />}>
              Explore Complete 8-Stage Engineering Process
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION G: INNOVATION LAB HIGHLIGHT */}
      <section className="section-pad bg-ivory">
        <Container>
          <Reveal>
            <div style={{ backgroundColor: 'var(--color-subtle-beige)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.25rem, 4vw, 3.5rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Sparkles size={18} className="text-terracotta" />
                <Badge variant="terracotta">R&D AND TECHNICAL EXPLORATION</Badge>
              </div>

              <div className="split-editorial">
                <div>
                  <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                    Vision Cloud Innovation Lab: Testing Tomorrow's Architectures Today.
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    Before recommending new paradigms to clients, we stress-test them internally. Our lab investigates local-first data sync (CRDTs), edge-hosted small language models, and high-throughput WebAssembly modules.
                  </p>
                  <Button to="/innovation-lab" variant="primary" icon={<ArrowRight size={15} />}>
                    Enter the Innovation Lab
                  </Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {innovationThemes.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                          {item.tag}
                        </span>
                        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-graphite)' }}>
                          {item.statusBadge}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-mocha)' }}>
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION H: CONTACT CTA */}
      <section className="section-pad bg-cinema" style={{ position: 'relative', overflow: 'hidden' }}>
        <Container>
          <Reveal>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <Badge variant="inverse" style={{ marginBottom: '1.25rem' }}>READY TO COLLABORATE?</Badge>
              <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.25rem' }}>
                Let's engineer your next digital solution.
              </h2>
              <p className="text-lead" style={{ color: 'var(--text-inverse-muted)', marginBottom: '2.5rem' }}>
                Whether you are launching a new digital venture, re-architecting an existing platform, or exploring custom internal systems, we are ready to discuss your goals.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/contact" variant="terracotta" size="lg" icon={<ArrowRight size={16} />}>
                  Start a Project
                </Button>
                <a
                  href="https://wa.me/919345688752?text=Hello%20Vision%20Cloud%20team%2C%20I%20would%20like%20to%20discuss%20a%20software%20engineering%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-inverse btn--lg"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p style={{ marginTop: '2rem', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta-soft)' }}>
                Direct engineering lead review · Mutual NDA available upon request · No aggressive sales pitches
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onInquire={(projName) => {
          window.location.href = `/contact?project=${encodeURIComponent(projName)}`;
        }}
      />
    </div>
  );
};
