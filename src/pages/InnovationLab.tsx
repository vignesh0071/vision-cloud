import React from 'react';
import {
  Sparkles,
  Share2,
  Cpu,
  Layers,
  BookOpen,
  ArrowRight,
  FlaskConical
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { innovationThemes } from '../data/innovation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const themeIcons: Record<string, React.ReactNode> = {
  Share2: <Share2 size={24} />,
  Cpu: <Cpu size={24} />,
  Layers: <Layers size={24} />,
  BookOpen: <BookOpen size={24} />
};

export const InnovationLab: React.FC = () => {
  useDocumentTitle(
    'Innovation Lab | Vision Cloud Technical Explorations',
    'Investigating experimental software systems: Local-First CRDT data sync, edge-hosted Small Language Models (SLMs), and WebAssembly performance pipelines.'
  );

  return (
    <div className="page-innovation">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Innovation Lab' }]} />
          <Reveal>
            <div style={{ maxWidth: '840px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <FlaskConical size={20} className="text-terracotta" />
                <Badge variant="terracotta">INTERNAL R&D BENCHMARKS</Badge>
              </div>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Vision Cloud Innovation Lab: Testing Tomorrow's Software Foundations.
              </h1>
              <p className="text-lead">
                An internal engineering incubator where we stress-test emerging paradigms, validate latency limits, and build proof-of-concept prototypes before recommending them for mission-critical client deployments.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Lab Manifesto / Editorial Intro */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="split-editorial">
            <Reveal>
              <div>
                <Badge variant="default" style={{ marginBottom: '1rem' }}>LAB MANIFESTO</Badge>
                <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                  Pragmatic Engineering, Zero Hype.
                </h2>
                <p style={{ lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  The technology landscape is flooded with superficial buzzwords, vendor marketing, and unproven frameworks. The purpose of the Vision Cloud Innovation Lab is to cut through speculation by writing code, executing load benchmarks, and profiling resource consumption.
                </p>
                <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  We do not invent artificial academic credentials or claim imaginary research consortiums. We simply approach software with scientific rigor: hypothesize, implement minimal reproducible prototypes, measure telemetry, and share findings through Architectural Decision Records (ADRs).
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button to="/contact?inquiry=Innovation%20Lab" variant="primary" icon={<ArrowRight size={14} />}>
                    Discuss a Research Prototype
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img
                  src="/images/vision-tech-mocha.jpg"
                  alt="Vision Cloud Technical Innovation Lab"
                  loading="lazy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Research Pillars */}
      <section className="section-pad bg-ivory">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {innovationThemes.map((theme) => (
              <div
                key={theme.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)',
                  padding: 'clamp(1.25rem, 4vw, 3.5rem)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Reveal>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)' }}>
                        {themeIcons[theme.icon] || <Sparkles size={24} />}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', fontWeight: 600, letterSpacing: '0.06em' }}>
                        {theme.tag}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)' }}>
                      {theme.statusBadge}
                    </span>
                  </div>

                  <h2 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-mocha)' }}>
                    {theme.title}
                  </h2>
                  <p style={{ fontSize: '1.025rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                    {theme.description}
                  </p>

                  <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                    <div style={{ backgroundColor: 'var(--color-subtle-beige)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-mocha)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Active Experimental Focus Areas
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {theme.focusAreas.map((focus, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--color-terracotta)', fontWeight: 'bold' }}>•</span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-soft-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-mocha)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        Technical Rationale & Business Utility
                      </h4>
                      <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                        {theme.technicalRationale}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      to={`/contact?inquiry=${encodeURIComponent(`Lab Research: ${theme.title}`)}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight size={13} />}
                    >
                      Inquire About Technology Transfer
                    </Button>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
