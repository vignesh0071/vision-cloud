import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <Badge variant="terracotta">{project.category}</Badge>
              {project.isConcept && (
                <Badge variant="default">Concept Architecture</Badge>
              )}
            </div>
            <h2 id="modal-project-title" className="heading-lg">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)' }}
          >
            <X size={20} />
          </button>
        </div>

        {project.imageSrc && (
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', maxHeight: '300px' }}>
            <img
              src={project.imageSrc}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '0.4rem' }}>
            Executive Overview
          </h4>
          <p style={{ fontSize: '1.025rem', lineHeight: '1.65' }}>
            {project.fullDescription}
          </p>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
            Project Objectives
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.objectives.map((obj, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle2 size={16} className="text-terracotta" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
            Engineering Architecture Highlights
          </h4>
          <div style={{ backgroundColor: 'var(--color-subtle-beige)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-mocha)', fontFamily: 'var(--font-mono)', lineHeight: '1.5' }}>
                  → {hl}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>
            Technology Stack
          </h4>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--color-mocha)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="terracotta"
            size="sm"
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            icon={<ArrowRight size={14} />}
          >
            Inquire About Similar Architecture
          </Button>
        </div>
      </div>
    </div>
  );
};
