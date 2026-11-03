import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { ProjectModal } from '../components/modals/ProjectModal';
import { projectsData } from '../data/projects';
import type { ProjectItem, ProjectCategory } from '../types';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Projects: React.FC = () => {
  useDocumentTitle(
    'Engineering Projects & Work | Vision Cloud',
    'Explore our architectural software implementations, high-concurrency web platforms, and mobile logistics companions.'
  );

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Enterprise Web',
    'Cloud & Systems',
    'Security Architecture',
    'Mobile Solutions'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="page-projects">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Projects & Work' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>SELECTED WORK & CASE STUDIES</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Engineering Systems Engineered for{' '}
                <span className="heading-accent heading-accent--terracotta">Demanding Workloads</span>.
              </h1>
              <p className="text-lead">
                A curated portfolio of software architectures, high-concurrency web interfaces, telemetry pipelines, and mobile applications. Every reference architecture illustrates our commitment to type safety, modular boundaries, and measurable performance.
              </p>
            </div>
          </Reveal>

          {/* Category Filters */}
          <Reveal delayMs={150}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--color-terracotta)' : 'var(--border-default)',
                    backgroundColor: activeCategory === cat ? 'var(--color-mocha)' : 'var(--bg-surface)',
                    color: activeCategory === cat ? 'var(--color-warm-ivory)' : 'var(--color-mocha)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="grid-2" style={{ gap: '3rem' }}>
            {filteredProjects.map((project) => (
              <Reveal key={project.id}>
                <div
                  className="editorial-card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  {/* Large Project Visual */}
                  <div style={{ height: '280px', position: 'relative', overflow: 'hidden' }}>
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

                  {/* Project Content */}
                  <div style={{ padding: 'clamp(1.25rem, 3.5vw, 2.25rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h2 className="heading-md" style={{ marginBottom: '0.75rem', color: 'var(--color-mocha)' }}>
                        {project.title}
                      </h2>
                      <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                        {project.shortDescription}
                      </p>

                      <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-subtle-beige)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                          Key Architecture Trait
                        </span>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-mocha)', margin: 0, lineHeight: '1.5' }}>
                          {project.architectureHighlights[0]}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: '0.725rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.2rem 0.5rem',
                              borderRadius: 'var(--radius-xs)',
                              backgroundColor: 'var(--color-subtle-beige)',
                              color: 'var(--color-mocha)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="btn btn--outline btn--sm"
                        style={{ width: '100%' }}
                      >
                        <span>View Architecture Blueprint & Specs</span>
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

      {/* Concept Architecture Disclosure */}
      <section className="section-pad--compact bg-ivory">
        <Container>
          <Reveal>
            <div style={{ border: '1px solid var(--border-default)', padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-subtle-beige)' }}>
              <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-terracotta-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Standards of Truthful Presentation
              </h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Vision Cloud refuses to display fabricated client logos, invented revenue growth figures, or unsubstantiated case studies. Projects marked with [Concept Architecture] reflect production-tested internal reference implementations built by our engineering team to demonstrate architecture patterns for high concurrency, zero-trust security, and offline replication.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          window.location.href = `/contact?project=${encodeURIComponent(title)}`;
        }}
      />
    </div>
  );
};
