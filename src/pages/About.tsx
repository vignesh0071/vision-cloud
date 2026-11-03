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
                Engineering Systems Built for Permanence and Purpose.
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
                  Why We Founded Vision Cloud
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
                  src="/images/vision-hero-mocha.jpg"
                  alt="Vision Cloud Architectural Identity"
                  loading="lazy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
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
                  padding: '2.5rem',
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
                  padding: '2.5rem',
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
                padding: 'clamp(2rem, 5vw, 3.5rem)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Code2 size={20} className="text-terracotta" />
                <Badge variant="terracotta">STUDIO ARCHITECTURE</Badge>
              </div>

              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                Our Operational Model: Independent & Distributed
              </h2>
              <p style={{ fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '800px' }}>
                Vision Cloud operates as an independent, remote-first software engineering studio. Rather than carrying the bloated administrative overhead of traditional consulting agencies, our team is comprised strictly of technical practitioners—senior software engineers, cloud architects, and product designers.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
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

      {/* Executive Engineering Leadership */}
      <section className="section-pad bg-cream">
        <Container>
          <Reveal>
            <SectionHeading
              badgeText="EXECUTIVE LEADERSHIP"
              title="The Practitioners Behind Our"
              titleHighlight="Systems."
              description="Vision Cloud is directed by hands-on engineering leaders dedicated to robust backend architectures, resilient system design, ergonomic interfaces, and performant mobile platforms."
              centered={true}
            />
          </Reveal>

          <div className="grid-2" style={{ marginTop: '2.5rem', gap: '2rem' }}>
            <Reveal delayMs={100}>
              <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <Badge variant="terracotta">CHIEF TECHNOLOGY OFFICER</Badge>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>VC-EXEC-01</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>Mr. Kesevean M</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                  Chief Technology Officer & Full-Stack Architect
                </span>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--color-graphite)', flex: 1 }}>
                  Plays a foundational executive and technical leadership role across Vision Cloud. As a seasoned full-stack developer and backend systems specialist, he architects and maintains our core server infrastructure, high-availability microservices, database clusters, and cloud-native deployment pipelines, ensuring rock-solid uptime and performance across all production environments.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {['Full-Stack Dev', 'Backend Servers', 'Server Maintenance', 'DB Clusters', 'High Availability'].map((skill) => (
                    <span key={skill} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)', fontFamily: 'var(--font-mono)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <Badge variant="terracotta">LEAD SOFTWARE ARCHITECT</Badge>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>VC-ARCH-02</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>Mr. Keerthi Kannan S</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                  Lead Software Architect & Innovation Strategist
                </span>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--color-graphite)', flex: 1 }}>
                  Drives the complete end-to-end software architecture for Vision Cloud solutions. He spearheads innovative technical ideation, defines resilient architectural patterns, and ensures complex business requirements are translated into clean, scalable, type-safe system boundaries built for long-term growth.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {['Complete Architecture', 'Innovative Ideation', 'System Design', 'Event-Driven Systems', 'Clean Boundaries'].map((skill) => (
                    <span key={skill} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)', fontFamily: 'var(--font-mono)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <Badge variant="terracotta">DESIGN DIRECTOR</Badge>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>VC-DSN-03</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>Mr. Vignesh V</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                  Design Director & Principal Frontend Architect
                </span>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--color-graphite)', flex: 1 }}>
                  Leads the complete digital product design and frontend engineering practice at Vision Cloud. Combining deep mastery of UI/UX ergonomics with modern web standards, he crafts intuitive user workflows, scalable design token systems, fluid micro-interactions, and accessible, pixel-perfect frontend experiences.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {['Complete UI/UX', 'Frontend Engineering', 'Ergonomic Workflows', 'Design Tokens', 'Pixel Precision'].map((skill) => (
                    <span key={skill} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)', fontFamily: 'var(--font-mono)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="editorial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <Badge variant="terracotta">MOBILE ENGINEERING LEAD</Badge>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>VC-MOB-04</span>
                </div>
                <h3 className="heading-md" style={{ marginBottom: '0.25rem' }}>Mr. Govindha Rajan K</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-terracotta)', fontWeight: 600, marginBottom: '1rem' }}>
                  Mobile Engineering Lead & Client Platforms Architect
                </span>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.65', color: 'var(--color-graphite)', flex: 1 }}>
                  Leads mobile engineering across iOS and Android ecosystems. He oversees native and cross-platform mobile architectures, offline data synchronization, hardware-accelerated touch animations, biometric security integrations, and low-latency client performance, delivering fluid, dependable mobile applications for modern enterprises.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {['Mobile Engineering', 'iOS & Android', 'Offline Synchronization', 'Biometric Security', 'Low Latency'].map((skill) => (
                    <span key={skill} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'var(--color-subtle-beige)', color: 'var(--color-mocha)', fontFamily: 'var(--font-mono)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-pad--compact bg-cinema">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <Badge variant="inverse" style={{ marginBottom: '1rem' }}>LET'S COLLABORATE</Badge>
              <h2 className="heading-xl" style={{ color: 'var(--color-warm-ivory)', marginBottom: '1.25rem' }}>
                Ready to build with engineering discipline?
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
