import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { ProjectModal } from '../components/modals/ProjectModal';
import { DeploymentStatusPanel } from '../components/projects/DeploymentStatusPanel';
import { projectsData } from '../data/projects';
import type { ProjectItem, ProjectCategory } from '../types';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Projects: React.FC = () => {
  useDocumentTitle(
    'Engineering Projects & Work | Vision Cloud',
    'Explore our authentic software implementations, commercial web platforms, mobile applications, and infrastructure initiatives.'
  );

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Web Applications',
    'Mobile Solutions',
    'Cloud & Infrastructure'
  ];

  const serverProject = projectsData.find((p) => p.id === 'vision-cloud-server');
  const gridProjects = projectsData.filter((p) => p.id !== 'vision-cloud-server');

  const visibleGridProjects = activeCategory === 'All'
    ? gridProjects
    : gridProjects.filter((p) => p.category === activeCategory);

  const showServerProject = activeCategory === 'All' || activeCategory === 'Cloud & Infrastructure';

  return (
    <div className="page-projects">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Projects & Work' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>SELECTED WORK & INITIATIVES</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Engineering Systems Engineered for{' '}
                <span className="heading-accent heading-accent--terracotta">Real-World Demand</span>.
              </h1>
              <p className="text-lead">
                A verified showcase of our commercial web platforms, messaging software in active development, and dedicated infrastructure deployment initiatives. We describe only verified functionality, genuine technology stacks, and honest development states.
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

      {/* Projects Grid Section */}
      <section className="section-pad bg-cream">
        <Container>
          {/* Web & Mobile Projects Grid */}
          {visibleGridProjects.length > 0 && (
            <div className="grid-2" style={{ gap: '3rem' }}>
              {visibleGridProjects.map((project) => (
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
                    {/* Project Visual Link */}
                    <div style={{ height: '280px', position: 'relative', overflow: 'hidden' }}>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__image-link"
                          aria-label={`Visit ${project.title} live website at ${project.liveUrl}`}
                        >
                          <img
                            src={project.imageSrc}
                            alt={project.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <span className="project-card__overlay-pill">
                            <span>Visit Live Website</span>
                            <ExternalLink size={12} />
                          </span>
                        </a>
                      ) : (
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="project-card__image-link"
                          role="button"
                          tabIndex={0}
                          aria-label={`View architecture details for ${project.title}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedProject(project);
                            }
                          }}
                        >
                          <img
                            src={project.imageSrc}
                            alt={project.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <span className="project-card__overlay-pill">
                            <span>View Specifications</span>
                            <ArrowUpRight size={12} />
                          </span>
                        </div>
                      )}

                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2, pointerEvents: 'none' }}>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.25rem 0.65rem',
                            backgroundColor: 'rgba(30, 24, 21, 0.92)',
                            color: 'var(--color-warm-ivory)',
                            borderRadius: 'var(--radius-xs)',
                            border: '1px solid rgba(243, 238, 232, 0.18)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            backdropFilter: 'blur(4px)'
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta-soft)' }} />
                          <span>{project.category}</span>
                        </span>
                      </div>

                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2, pointerEvents: 'none' }}>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.25rem 0.6rem',
                            backgroundColor: project.status === 'Completed' ? 'rgba(30, 24, 21, 0.9)' : 'rgba(185, 120, 98, 0.92)',
                            color: 'var(--color-warm-ivory)',
                            borderRadius: 'var(--radius-xs)',
                            border: '1px solid var(--border-inverse-subtle)'
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
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
                            Core Architecture Trait
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

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn--terracotta btn--sm"
                              style={{ flex: 1, minWidth: '150px', justifyContent: 'center' }}
                            >
                              <span>Visit Live Site</span>
                              <ExternalLink size={13} />
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="btn btn--outline btn--sm"
                            style={{ flex: 1, minWidth: '150px', justifyContent: 'center' }}
                          >
                            <span>Blueprint & Specs</span>
                            <ArrowUpRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Dedicated Server & Deployment Project Section (Two-Column Layout) */}
          {showServerProject && serverProject && (
            <Reveal delayMs={100}>
              <div className="server-project-section" id="vision-cloud-server-section">
                <div className="server-project-grid">
                  {/* Left Column: Project Information */}
                  <div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      <Badge variant="inverse">{serverProject.category}</Badge>
                      <Badge variant="terracotta">{serverProject.status}</Badge>
                    </div>

                    <h2 className="heading-lg" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1rem' }}>
                      {serverProject.title}
                    </h2>

                    <p style={{ fontSize: '1.025rem', lineHeight: '1.65', color: '#D2C8BE', marginBottom: '1.5rem' }}>
                      {serverProject.shortDescription}
                    </p>

                    <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(243, 238, 232, 0.12)', maxHeight: '220px' }}>
                      <img
                        src={serverProject.imageSrc}
                        alt="Vision Cloud Server Infrastructure Hardware"
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta-soft)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.65rem' }}>
                        Verified Infrastructure Scope Completed:
                      </span>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#D2C8BE' }}>
                          <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>Dedicated Ubuntu Linux host setup with systemd process supervision</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#D2C8BE' }}>
                          <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>Nginx edge reverse proxy with automated Let's Encrypt TLS certificate renewal</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#D2C8BE' }}>
                          <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>Containerized service orchestration via Docker Compose with network isolation</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#D2C8BE' }}>
                          <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>Automated deployment shell scripts paired with HTTP probe verification</span>
                        </li>
                      </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                      {serverProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.725rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'rgba(243, 238, 232, 0.08)',
                            color: 'var(--color-warm-ivory)',
                            border: '1px solid rgba(243, 238, 232, 0.12)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(serverProject)}
                      className="btn btn--outline-inverse btn--sm"
                    >
                      <span>View Full Infrastructure Blueprint</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  {/* Right Column: Animated Deployment Status Panel */}
                  <div style={{ width: '100%' }}>
                    <DeploymentStatusPanel />
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Truthful Presentation Standards */}
      <section className="section-pad--compact bg-ivory">
        <Container>
          <Reveal>
            <div style={{ border: '1px solid var(--border-default)', padding: '1.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-subtle-beige)' }}>
              <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-terracotta-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Standards of Truthful Presentation
              </h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Vision Cloud refuses to display fabricated client logos, invented revenue growth figures, or unsubstantiated case studies. Every project displayed in our portfolio represents authentic commercial client deployments and actively developed engineering initiatives, transparently reporting implemented scope, verified technologies, and actual delivery stages.
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
