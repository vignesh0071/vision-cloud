import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Cpu,
  Database,
  FileCode2,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { servicesData } from '../data/services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const serviceIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 size={28} />,
  Globe: <Globe size={28} />,
  Smartphone: <Smartphone size={28} />,
  Cloud: <Cloud size={28} />,
  Palette: <Palette size={28} />,
  Cpu: <Cpu size={28} />,
  Database: <Database size={28} />,
  FileCode2: <FileCode2 size={28} />
};

export const Services: React.FC = () => {
  useDocumentTitle(
    'Engineering Services | Vision Cloud',
    'Comprehensive software development services: Custom Software, Web Applications, Mobile Engineering, Cloud Solutions, UI/UX, AI, and Technical Consulting.'
  );

  const location = useLocation();

  // Scroll to hash element if specified
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const elem = document.getElementById(id);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="page-services">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Engineering Services' }]} />
          <Reveal>
            <div style={{ maxWidth: '840px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>ENGINEERING DISCIPLINES</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Purpose-Built Software Engineering for Scale and Speed.
              </h1>
              <p className="text-lead">
                We combine architectural rigor, modern toolchains, and human-centered design to engineer digital products that solve genuine operational challenges and deliver sustainable business value.
              </p>
            </div>
          </Reveal>

          {/* Quick Jump Links */}
          <Reveal delayMs={150}>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--color-mocha)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {s.number}. {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="section-pad bg-cream">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicesData.map((service) => {
              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    scrollMarginTop: 'calc(var(--header-height) + 24px)',
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-default)',
                    padding: 'clamp(1.25rem, 4vw, 3.5rem)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Reveal>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-terracotta)' }}>
                          {service.number}
                        </span>
                        <div style={{ color: 'var(--color-mocha)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-subtle-beige)' }}>
                          {serviceIcons[service.icon] || <Code2 size={28} />}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.25rem 0.6rem',
                              borderRadius: 'var(--radius-xs)',
                              backgroundColor: 'var(--color-subtle-beige)',
                              color: 'var(--color-graphite-dark)'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>
                      {service.title}
                    </h2>
                    <p className="text-lead" style={{ marginBottom: '1.5rem', color: 'var(--color-mocha-muted)' }}>
                      {service.tagline}
                    </p>
                    <p style={{ fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                      {service.description}
                    </p>

                    <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
                      {/* Business Problems Solved */}
                      <div style={{ backgroundColor: 'var(--color-subtle-beige)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-terracotta-dark)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                          <AlertCircle size={16} />
                          <span>Business Problems Solved</span>
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.problemsSolved.map((prob, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem' }}>
                              <span style={{ color: 'var(--color-terracotta)', fontWeight: 'bold' }}>•</span>
                              <span>{prob}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div style={{ backgroundColor: 'var(--color-soft-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-mocha)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                          <CheckCircle2 size={16} className="text-terracotta" />
                          <span>Key Deliverables</span>
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.deliverables.map((del, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem' }}>
                              <span style={{ color: 'var(--color-terracotta)', fontWeight: 'bold' }}>✓</span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.35rem' }}>
                        TECHNICAL APPROACH
                      </span>
                      <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-mocha)' }}>
                        {service.technicalApproach}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        icon={<ArrowRight size={14} />}
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad--compact bg-cinema">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
              <Badge variant="inverse" style={{ marginBottom: '1rem' }}>BESPOKE SCOPE ASSESSMENTS</Badge>
              <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.25rem' }}>
                Need a multi-discipline software solution?
              </h2>
              <p style={{ color: 'var(--text-inverse-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Many modern systems require cross-cutting capabilities—such as combining custom APIs, mobile applications, and AI pipelines. We tailor full-spectrum engineering scopes to your precise requirements.
              </p>
              <Button to="/contact" variant="terracotta" size="lg" icon={<ArrowRight size={16} />}>
                Discuss Your Technical Scope
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
