import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { Button } from '../common/Button';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-legal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={20} className="text-terracotta" />
            <h2 id="modal-legal-title" className="heading-md">
              {isPrivacy ? 'Privacy & Data Protection Protocol' : 'Terms of Engineering Engagement'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '44px',
              height: '44px',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-default)',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem', fontSize: '0.925rem', lineHeight: '1.65' }}>
          {isPrivacy ? (
            <>
              <p style={{ marginBottom: '1rem' }}>
                Vision Cloud operates under strict non-disclosure and privacy protocols. We respect the confidentiality of proprietary project inquiries, data structures, and architectural challenges submitted to our desk.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                1. Data Collection & Purpose
              </h4>
              <p style={{ marginBottom: '1rem' }}>
                Contact and project inquiry details submitted through our website are used exclusively to evaluate technical feasibility, estimate milestones, and coordinate direct engineering communications. We never monetize, sell, or distribute client contact details to third parties.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                2. Non-Disclosure Commitment
              </h4>
              <p style={{ marginBottom: '1rem' }}>
                Every prospective client has the option to execute a mutual Non-Disclosure Agreement (NDA) prior to sharing proprietary algorithms, internal business metrics, or database schemas.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                3. Zero Third-Party Tracking
              </h4>
              <p>
                Our web applications do not deploy ad-tech tracking networks or intrusive cross-domain profiling scripts.
              </p>
            </>
          ) : (
            <>
              <p style={{ marginBottom: '1rem' }}>
                These terms govern the exploratory and contracted engineering engagements between Vision Cloud and client organizations.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                1. Milestone-Based Scope
              </h4>
              <p style={{ marginBottom: '1rem' }}>
                Engagements proceed under clearly demarcated milestone schedules. Acceptance criteria, testing requirements, and deployment protocols are formally agreed upon prior to sprint execution.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                2. Intellectual Property Rights
              </h4>
              <p style={{ marginBottom: '1rem' }}>
                Upon milestone sign-off and complete payment, full ownership of the bespoke code repository, custom database schemas, design tokens, and documentation transfers to the client.
              </p>
              <h4 style={{ fontWeight: 600, color: 'var(--color-mocha)', marginTop: '1.25rem', marginBottom: '0.4rem' }}>
                3. Prototype Disclaimers
              </h4>
              <p>
                Concepts or prototypes designated as "Concept Architecture" or "Experimental" in our portfolio illustrate internal research benchmarks rather than commercial endorsements.
              </p>
            </>
          )}
        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'right' }}>
          <Button variant="primary" size="sm" onClick={onClose}>
            Acknowledge & Close
          </Button>
        </div>
      </div>
    </div>
  );
};
