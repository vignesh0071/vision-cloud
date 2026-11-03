import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Action Banner */}
        <div className="footer-top-banner">
          <div>
            <span className="badge badge--inverse" style={{ marginBottom: '0.75rem' }}>
              <span className="badge__dot" />
              <span>PRODUCTION-GRADE ARCHITECTURE</span>
            </span>
            <h3 className="heading-lg" style={{ color: 'var(--color-warm-ivory)' }}>
              "Engineering digital experiences that move business forward."
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--terracotta">
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://wa.me/919345688752?text=Hello%20Vision%20Cloud%20team%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-inverse"
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          {/* Brand & Studio Model */}
          <div>
            <div className="site-brand" style={{ marginBottom: '1.25rem' }}>
              <span className="site-brand__logo" aria-hidden="true" style={{ background: 'rgba(243, 238, 232, 0.12)' }}>
                <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
                  <path d="M6 7 L16 26 L26 7 L20 7 L16 16 L12 7 Z" fill="#F3EEE8" />
                  <circle cx="16" cy="23" r="2.2" fill="var(--color-terracotta)" />
                </svg>
              </span>
              <span className="site-brand__name" style={{ color: 'var(--color-warm-ivory)' }}>
                VISION <span style={{ color: 'var(--color-terracotta)' }}>CLOUD</span>
              </span>
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Vision Cloud designs and builds reliable software, intelligent digital products, and scalable technology solutions for businesses ready to grow.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta-soft)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2ECC71', display: 'inline-block' }} />
              <span>Independent Engineering Studio · Distributed Remote Practice</span>
            </div>
          </div>

          {/* Column 1: Engineering Services */}
          <div>
            <h4>Engineering</h4>
            <ul className="footer-links-list">
              <li><Link to="/services#custom-software">Custom Software</Link></li>
              <li><Link to="/services#web-development">Web Applications</Link></li>
              <li><Link to="/services#mobile-app-development">Mobile Engineering</Link></li>
              <li><Link to="/services#cloud-solutions">Cloud & DevOps</Link></li>
              <li><Link to="/services#ui-ux-engineering">UI/UX Design Systems</Link></li>
              <li><Link to="/services#ai-intelligent-systems">AI & Automation</Link></li>
              <li><Link to="/services#enterprise-systems">Enterprise Systems</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions & Team */}
          <div>
            <h4>Solutions & Team</h4>
            <ul className="footer-links-list">
              <li><Link to="/team">Leadership & Architects</Link></li>
              <li><Link to="/products">Product Portfolio</Link></li>
              <li><Link to="/projects">Case Studies & Architecture</Link></li>
              <li><Link to="/process">8-Stage Engineering Cadence</Link></li>
              <li><Link to="/innovation-lab">Innovation Lab R&D</Link></li>
              <li><Link to="/faq">Engineering FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Communication & Inquiries */}
          <div>
            <h4>Connect</h4>
            <ul className="footer-links-list">
              <li><Link to="/contact">Project Inquiry Form</Link></li>
              <li>
                <a
                  href="https://wa.me/919345688752?text=Hello%20Vision%20Cloud%20team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>WhatsApp Desk</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:inquiries@visioncloud.tech"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>inquiries@visioncloud.tech</span>
                </a>
              </li>
              {onOpenLegal && (
                <>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenLegal('privacy')}
                      style={{ color: '#B5ADA5', fontSize: '0.9rem', textAlign: 'left', padding: 0 }}
                    >
                      Privacy Protocol
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenLegal('terms')}
                      style={{ color: '#B5ADA5', fontSize: '0.9rem', textAlign: 'left', padding: 0 }}
                    >
                      Engagement Terms
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Vision Cloud. All rights reserved. Type-safe, production-grade software engineering.
          </div>
          <button
            type="button"
            onClick={handleScrollToTop}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B5ADA5', cursor: 'pointer' }}
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
