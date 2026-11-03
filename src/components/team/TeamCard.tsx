import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { TeamMember } from '../../types';
import { ProfileAvatar } from './ProfileAvatar';

export interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, className = '' }) => {
  return (
    <article
      className={`team-card editorial-card ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(1.15rem, 2.5vw, 1.85rem)',
        position: 'relative',
        transition: 'all var(--transition-base)'
      }}
    >
      <div>
        {/* Top Header: Monogram Avatar + Reference ID */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            gap: '1rem'
          }}
        >
          <ProfileAvatar
            initials={member.initials}
            name={member.name}
            photoUrl={member.photoUrl}
            size="md"
          />

          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                color: 'var(--color-terracotta)',
                letterSpacing: '0.08em',
                fontWeight: 600,
                display: 'inline-block',
                backgroundColor: 'var(--color-terracotta-subtle)',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-terracotta)'
              }}
            >
              {member.referenceId}
            </span>
          </div>
        </div>

        {/* Member Name */}
        <h3
          className="heading-sm"
          style={{
            fontSize: '1.25rem',
            color: 'var(--color-mocha)',
            marginBottom: '0.4rem',
            fontWeight: 700,
            lineHeight: 1.25
          }}
        >
          {member.name}
        </h3>

        {/* Member Role */}
        <p
          style={{
            fontSize: '0.925rem',
            color: 'var(--color-graphite-dark)',
            lineHeight: 1.45,
            marginBottom: '1.25rem',
            fontWeight: 600
          }}
        >
          {member.role}
        </p>

        {/* Engineering Focus Area */}
        <div
          style={{
            backgroundColor: 'var(--color-subtle-beige)',
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem'
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
              marginBottom: '0.25rem'
            }}
          >
            ENGINEERING FOCUS
          </span>
          <span
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-mocha)',
              lineHeight: 1.4,
              fontWeight: 500,
              display: 'block'
            }}
          >
            {member.focus}
          </span>
        </div>
      </div>

      {/* Explore Profile Action */}
      <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <Link
          to={`/team/${member.slug}`}
          className="team-card__link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--color-mocha)',
            textDecoration: 'none',
            padding: '0.65rem 0',
            minHeight: '44px',
            transition: 'color var(--transition-fast)'
          }}
        >
          <span>Explore Profile</span>
          <ArrowUpRight
            size={16}
            style={{
              color: 'var(--color-terracotta)',
              transition: 'transform var(--transition-fast)'
            }}
          />
        </Link>
      </div>
    </article>
  );
};
