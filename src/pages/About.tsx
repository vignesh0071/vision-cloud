import React from 'react';
import {
  ShieldCheck,
  Zap,
  Target,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Code2
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const About: React.FC = () => {
  useDocumentTitle(
    'About Vision Cloud | Architectural Engineering Mindset',
    'Learn about Vision Cloud’s engineering philosophy, operational discipline, and mission to build durable, scalable technology solutions.'
  );

  return (
    <div className="page-about">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'About Vision Cloud' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>ABOUT VISION CLOUD</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Engineering Systems Built for{' '}
                <span className="heading-accent heading-accent--terracotta">Permanence</span> and Purpose.
              </h1>
              <p className="text-lead">
                Vision Cloud is an independent digital engineering studio. We partner with ambitious organizations to design, construct, and scale production-grade software solutions with clarity, precision, and craftsmanship.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Narrative Section with Visual */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="split-editorial">
            <Reveal>
              <div>
                <Badge variant="default" style={{ marginBottom: '1rem' }}>ORIGIN & IDENTITY</Badge>
                <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                  Why We Founded{' '}
                  <span className="heading-accent heading-accent--terracotta">Vision Cloud</span>
                </h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                  Modern software development has too often devolved into disposable code, rushed prototypes, and fragile dependencies that collapse under production pressure. Many companies find themselves trapped with slow web applications, undocumented systems, and ballooning cloud expenses.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                  Vision Cloud was established to operate on a different ethos: an architectural discipline that balances velocity with durability. We build digital products like master architects build enduring structures—starting with rigorous foundations, using verified materials, and testing every load-bearing seam.
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  We operate as a focused, distributed team of experienced software engineers, designers, and cloud architects. We avoid bureaucracy and prioritize direct engineering collaboration.
                </p>
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
                  src="/images/about/vision-cloud-qa-workspace.webp"
                  alt="Vision Cloud Dedicated QA Engineering & Testing Studio"
                  loading="lazy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-pad bg-ivory">
        <Container>
          <Reveal>
            <div className="grid-2">
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-default)'
                }}
              >
                <div style={{ color: 'var(--color-terracotta)', marginBottom: '1rem' }}>
                  <Compass size={28} />
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Our Vision</h3>
                <p style={{ lineHeight: '1.7', fontSize: '1rem' }}>
                  To be the trusted engineering partner for businesses that refuse to compromise on quality—creating dependable digital ecosystems, intelligent software platforms, and ergonomic user experiences that remain fast, secure, and valuable for years to come.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-default)'
                }}
              >
                <div style={{ color: 'var(--color-terracotta)', marginBottom: '1rem' }}>
                  <Target size={28} />
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Our Mission</h3>
                <p style={{ lineHeight: '1.7', fontSize: '1rem' }}>
                  To deliver exceptional technical clarity and measurable business impact through clean code, type-safe architectures, disciplined sprint milestones, and open, honest communication with every stakeholder.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Core Engineering Values */}
      <section className="section-pad bg-cream">
        <Container>
          <Reveal>
            <SectionHeading
              badgeText="OUR CODE OF CRAFT"
              title="Principles That Guide Every"
              titleHighlight="Line of Code."
              description="These foundational principles govern our technical decision-making and project execution."
              centered={true}
            />
          </Reveal>

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            <Reveal delayMs={100}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <ShieldCheck size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Architectural Rigor</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  We design modular, decoupled systems with clear boundaries. We document every architecture decision record (ADR) so the codebase remains legible and maintainable as your team grows.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Transparent Delivery</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  No black-box development or unexpected budget escalations. We work in transparent, two-week milestone sprints with continuous staging deployments so you always know project status.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <Zap size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Sub-Second Performance</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  Speed is a non-negotiable feature. We optimize Core Web Vitals, server response times, and database indexes so user experiences remain fluid regardless of network conditions.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <Layers size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Accessibility & Usability</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  Great technology must be accessible to all users. Every user interface is engineered to comply with WCAG 2.1 AA standards, supporting keyboard-first navigation and clear semantic markers.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={500}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <Cpu size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Pragmatic Innovation</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  We evaluate emerging technologies (AI, vector search, CRDTs) through rigorous internal lab prototypes before introducing them into client applications, avoiding unvalidated hype.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="editorial-card" style={{ height: '100%' }}>
                <div style={{ color: 'var(--color-mocha)', marginBottom: '1rem' }}>
                  <Terminal size={26} />
                </div>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>100% Client IP Ownership</h3>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                  You retain full ownership of all custom software, design tokens, and documentation. We deliver complete repository access and comprehensive operational runbooks.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Operational Model */}
      <section className="section-pad bg-ivory">
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Code2 size={20} className="text-terracotta" />
                <Badge variant="terracotta">STUDIO ARCHITECTURE</Badge>
              </div>

              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                Our Operational Model:{' '}
                <span className="heading-accent heading-accent--terracotta">Independent & Distributed</span>
              </h2>
              <p style={{ fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Vision Cloud operates as an independent, remote-first software engineering studio. Rather than carrying the bloated administrative overhead of traditional consulting agencies, our team is comprised strictly of technical practitioners—senior software engineers, cloud architects, and product designers.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>DISCIPLINE</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '0.25rem' }}>Direct Engineering Access</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>You collaborate directly with the engineers writing your code, eliminating game-of-telephone miscommunications.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>RELIABILITY</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '0.25rem' }}>Predictable Milestones</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>Work broken into verifiable two-week sprints with clear acceptance criteria and live staging previews.</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>INTEGRITY</span>
                  <h4 style={{ fontSize: '1rem', marginTop: '0.25rem' }}>Mutual NDA & Security</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', marginTop: '0.35rem' }}>Confidentiality assured from the first discovery call. All proprietary IP transferred upon completion.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>



      {/* CTA Section */}
      <section className="section-pad--compact bg-cinema">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <Badge variant="inverse" style={{ marginBottom: '1rem' }}>LET'S COLLABORATE</Badge>
              <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.25rem' }}>
                Ready to build with{' '}
                <span className="heading-accent heading-accent--champagne">engineering discipline</span>?
              </h2>
              <p style={{ color: 'var(--text-inverse-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Discuss your system requirements, technical challenges, or new product goals directly with our lead architects.
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
