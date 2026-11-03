import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { ProfileAvatar } from '../components/team/ProfileAvatar';
import { teamData } from '../data/team';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const TeamMember: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const member = teamData.find((m) => m.slug === slug);

  useDocumentTitle(
    member ? `${member.name} | Leadership Profile | Vision Cloud` : 'Team Member Not Found | Vision Cloud',
    member ? `${member.name} — ${member.role}. ${member.focus} at Vision Cloud.` : undefined
  );

  if (!member) {
    return (
      <div className="page-team-member" style={{ paddingTop: 'calc(var(--header-height) + 3rem)', minHeight: '70vh' }}>
        <Container size="narrow">
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>
              PROFILE UNRESOLVED
            </Badge>
            <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>
              Leadership Profile Not Found
            </h1>
            <p style={{ color: 'var(--color-graphite)', marginBottom: '2rem' }}>
              The leadership profile you requested does not exist or has been relocated.
            </p>
            <Button to="/team" variant="primary" icon={<ArrowLeft size={16} />} iconPosition="left">
              Return to Leadership Directory
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-team-member">
      {/* Header & Breadcrumbs */}
      <section
        className="section-pad--compact bg-ivory"
        style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}
      >
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Leadership Team', path: '/team' },
              { label: member.name }
            ]}
          />

          {/* Back to Team Link */}
          <div style={{ marginBottom: '1.75rem' }}>
            <Link
              to="/team"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-terracotta)',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Team Directory</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Main Profile Editorial Section */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="split-editorial" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
            {/* Left Column: Avatar & Quick Reference Card */}
            <Reveal>
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(2rem, 4vw, 2.75rem)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
                  <ProfileAvatar
                    initials={member.initials}
                    name={member.name}
                    photoUrl={member.photoUrl}
                    size="xl"
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-terracotta)',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      display: 'inline-block',
                      backgroundColor: 'var(--color-terracotta-subtle)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--border-terracotta)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    REFERENCE ID: {member.referenceId}
                  </span>

                  <h1 className="heading-md" style={{ color: 'var(--color-mocha)', marginBottom: '0.4rem' }}>
                    {member.name}
                  </h1>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-graphite-dark)',
                      lineHeight: 1.45
                    }}
                  >
                    {member.role}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-subtle-beige)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '1.75rem'
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-terracotta)',
                      fontWeight: 600,
                      marginBottom: '0.35rem'
                    }}
                  >
                    PRIMARY FOCUS AREA
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-mocha)', fontWeight: 600 }}>
                    {member.focus}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Button
                    to={`/contact?inquiry=${encodeURIComponent(`Consultation with ${member.name} (${member.role})`)}`}
                    variant="primary"
                    block={true}
                    icon={<ArrowRight size={14} />}
                  >
                    Consult with Engineering Desk
                  </Button>

                  <a
                    href={`https://wa.me/919345688752?text=${encodeURIComponent(
                      `Hello Vision Cloud, I would like to initiate an engineering consultation regarding ${member.focus} with ${member.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--block"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Direct Desk</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Role Overview & Responsibilities */}
            <div>
              <Reveal delayMs={100}>
                {/* Role Overview */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <Badge variant="default" style={{ marginBottom: '1rem' }}>
                    ROLE SCOPE & TECHNICAL MANDATE
                  </Badge>
                  <h2 className="heading-lg" style={{ marginBottom: '1rem', color: 'var(--color-mocha)' }}>
                    Architectural Mandate
                  </h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)' }}>
                    {member.roleOverview}
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3
                    style={{
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-terracotta)',
                      marginBottom: '1rem',
                      fontWeight: 600
                    }}
                  >
                    Core Responsibilities & Technical Governance
                  </h3>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem 1.75rem'
                    }}
                  >
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {member.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            color: 'var(--color-mocha)'
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            className="text-terracotta"
                            style={{ marginTop: '0.2rem', flexShrink: 0 }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Domain Disciplines */}
                <div>
                  <h3
                    style={{
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-terracotta)',
                      marginBottom: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    Domain Disciplines
                  </h3>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {member.disciplines.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--color-subtle-beige)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--color-mocha)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
