import React from 'react';
import { ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { TeamCard } from '../components/team/TeamCard';
import { teamData } from '../data/team';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Team: React.FC = () => {
  useDocumentTitle(
    'Leadership Team | Vision Cloud',
    'Meet the people shaping Vision Cloud’s approach to software engineering, system architecture, digital experiences, and mobile platforms.'
  );

  return (
    <div className="page-team">
      {/* Introduction Hero */}
      <section
        className="section-pad--compact bg-ivory"
        style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}
      >
        <Container>
          <Breadcrumbs items={[{ label: 'Leadership Team' }]} />
          <Reveal>
            <div style={{ maxWidth: '860px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>
                TECHNICAL LEADERSHIP
              </Badge>
              <h1
                className="heading-display"
                style={{
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase'
                }}
              >
                THE PEOPLE BEHIND THE ENGINEERING.
              </h1>
              <p className="text-lead" style={{ maxWidth: '780px' }}>
                Meet the people shaping Vision Cloud's approach to software engineering, system
                architecture, digital experiences, and mobile platforms.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Leadership Profile Grid (Responsive 4-column) */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="team-grid grid-4" style={{ gap: '2rem' }}>
            {teamData.map((member, index) => (
              <Reveal key={member.id} delayMs={index * 80}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Ownership Section */}
      <section className="section-pad bg-ivory editorial-grid-bg">
        <Container>
          <Reveal>
            <div
              style={{
                backgroundColor: 'var(--color-subtle-beige)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.25rem, 4vw, 3rem)'
              }}
            >
              <div style={{ maxWidth: '840px' }}>
                <Badge variant="default" style={{ marginBottom: '1rem' }}>
                  OUR LEADERSHIP PHILOSOPHY
                </Badge>
                <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                  Practicing Architects, Direct Accountability.
                </h2>
                <p style={{ fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  At Vision Cloud, engineering leaders do not sit behind layers of account executives. Our leadership architects remain actively hands-on—directly defining system blueprints, conducting code and design reviews, and verifying architectural decisions at every stage of delivery.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '1.25rem',
                    marginTop: '2rem'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                      <Terminal size={20} />
                    </div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-mocha)' }}>
                      Hands-On Code Stewardship
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', margin: 0, lineHeight: '1.5' }}>
                      Leaders maintain active contributions to core frameworks, lint standards, and architectural blueprints.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                      <ShieldCheck size={20} />
                    </div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-mocha)' }}>
                      Zero Speculation Architecture
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', margin: 0, lineHeight: '1.5' }}>
                      Decisions are anchored in type safety, verified performance benchmarks, and measurable business constraints.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
                      <Layers size={20} />
                    </div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-mocha)' }}>
                      End-to-End Alignment
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', margin: 0, lineHeight: '1.5' }}>
                      Close coordination between server engineering, frontend architecture, and mobile platform teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="section-pad--compact bg-cinema">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
              <Badge variant="inverse" style={{ marginBottom: '1rem' }}>
                DIRECT TECHNICAL ENGAGEMENT
              </Badge>
              <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.25rem' }}>
                Collaborate directly with our engineering architects.
              </h2>
              <p
                style={{
                  color: 'var(--text-inverse-muted)',
                  fontSize: '1.05rem',
                  lineHeight: '1.65',
                  marginBottom: '2rem'
                }}
              >
                Whether you need architectural direction for an upcoming product or an independent assessment of your existing software, connect directly with our technical leadership.
              </p>
              <Button to="/contact" variant="terracotta" size="lg" icon={<ArrowRight size={16} />}>
                Start a Technical Consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
