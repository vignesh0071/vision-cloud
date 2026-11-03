import React from 'react';
import {
  Compass,
  FileText,
  Cpu,
  PenTool,
  Terminal,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { processStages } from '../data/process';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const stageIcons: Record<string, React.ReactNode> = {
  Compass: <Compass size={24} />,
  FileText: <FileText size={24} />,
  Cpu: <Cpu size={24} />,
  PenTool: <PenTool size={24} />,
  Terminal: <Terminal size={24} />,
  CheckCircle2: <CheckCircle2 size={24} />,
  Rocket: <Rocket size={24} />,
  ShieldCheck: <ShieldCheck size={24} />
};

export const Process: React.FC = () => {
  useDocumentTitle(
    'Engineering Process & Methodology | Vision Cloud',
    'Explore our 8-stage engineering process: from discovery, requirements, and system planning to clean development, rigorous QA, and zero-downtime deployment.'
  );

  return (
    <div className="page-process">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Engineering Process' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>METHODOLOGY & LIFECYCLE</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                How We Move From Problem to{' '}
                <span className="heading-accent heading-accent--terracotta">Production</span>.
              </h1>
              <p className="text-lead">
                Great software is not built on haphazard sprints or ambiguous goals. Our 8-stage engineering lifecycle establishes transparency, eliminates surprise regressions, and ensures every milestone meets rigorous production standards.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 8-Stage Timeline */}
      <section className="section-pad bg-cream">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {processStages.map((stage) => {
              return (
                <div
                  key={stage.number}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.25rem, 4vw, 3.5rem)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Reveal>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-terracotta)' }}>
                          {stage.number}
                        </span>
                        <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)' }}>
                          {stageIcons[stage.icon] || <Compass size={24} />}
                        </div>
                      </div>

                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta-dark)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                        STAGE {stage.number} OF 08
                      </span>
                    </div>

                    <h2 className="heading-lg" style={{ marginBottom: '0.5rem', color: 'var(--color-mocha)' }}>
                      {stage.title}
                    </h2>
                    <p className="text-lead" style={{ marginBottom: '1.25rem', color: 'var(--color-mocha-muted)' }}>
                      {stage.tagline}
                    </p>
                    <p style={{ fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                      {stage.description}
                    </p>

                    <div className="grid-2" style={{ gap: '2rem' }}>
                      {/* Deliverables */}
                      <div style={{ backgroundColor: 'var(--color-subtle-beige)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--color-mocha)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                          Verified Deliverables
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {stage.deliverables.map((item, dIdx) => (
                            <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem' }}>
                              <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Communication & Feedback Protocol */}
                      <div style={{ backgroundColor: 'var(--color-soft-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', color: 'var(--color-mocha)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                          Communication & Feedback Cadence
                        </h4>
                        <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                          {stage.communicationProtocol}
                        </p>
                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta-dark)' }}>
                          <MessageSquare size={14} />
                          <span>Direct lead engineer availability via Slack / WhatsApp</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quality Guarantees */}
      <section className="section-pad bg-ivory">
        <Container>
          <Reveal>
            <div style={{ backgroundColor: 'var(--color-subtle-beige)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
              <div style={{ maxWidth: '820px' }}>
                <span className="badge badge--terracotta" style={{ marginBottom: '0.75rem' }}>MILESTONE CERTAINTY</span>
                <h3 className="heading-lg" style={{ marginBottom: '1rem' }}>
                  Our Commitment to{' '}
                  <span className="heading-accent heading-accent--terracotta">Predictable Delivery</span>
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  We do not believe in unpredictable estimates or opaque sprint velocity meters. Every project scope is broken down into itemized work units with defined acceptance criteria. You never pay for a milestone until its staging preview has been reviewed and verified.
                </p>
                <Button to="/contact" variant="primary" icon={<ArrowRight size={15} />}>
                  Request a Discovery Session for Your Project
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
