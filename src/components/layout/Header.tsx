import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/services';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';
  // On home hero, use cinema dark mode header if not scrolled
  const isCinemaMode = isHome && !isScrolled;

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Team', path: '/team' },
    { title: 'Products', path: '/products' },
    { title: 'Projects', path: '/projects' },
    { title: 'Process', path: '/process' },
    { title: 'Innovation Lab', path: '/innovation-lab' },
    { title: 'FAQ', path: '/faq' }
  ];

  return (
    <>
      <header
        className={`site-header ${isCinemaMode ? 'site-header--cinema' : ''} ${
          isScrolled ? 'site-header--scrolled' : ''
        }`}
      >
        <div className="container site-header__container">
          {/* Brand Logo & Name */}
          <Link to="/" className="site-brand" aria-label="Vision Cloud Home">
            <span className="site-brand__logo" aria-hidden="true">
              <img
                src={isCinemaMode ? '/images/logo-dark.png' : '/images/logo-light.png'}
                alt="Vision Cloud Logo"
                className="site-brand__logo-img"
                width="62"
                height="32"
              />
            </span>
            <span className="site-brand__name">
              VISION <span>CLOUD</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop" aria-label="Primary Navigation">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'is-active' : ''}`}
            >
              About
            </Link>

            <Link
              to="/team"
              className={`nav-link ${location.pathname.startsWith('/team') ? 'is-active' : ''}`}
            >
              Team
            </Link>

            {/* Services with Dropdown */}
            <div className="nav-item--dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-link nav-dropdown-toggle ${
                  location.pathname.startsWith('/services') ? 'is-active' : ''
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown size={14} className="dropdown-chevron" />
              </button>

              <div
                className={`nav-dropdown-menu ${servicesDropdownOpen ? 'is-open' : ''}`}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div style={{ padding: '0.4rem 0.6rem 0.6rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.4rem' }}>
                  <Link
                    to="/services"
                    style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-terracotta)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <span>ALL ENGINEERING DISCIPLINES</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
                {servicesData.slice(0, 5).map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services#${srv.id}`}
                    className="dropdown-link"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="dropdown-link__title">{srv.title}</div>
                    <div className="dropdown-link__desc">{srv.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/products"
              className={`nav-link ${location.pathname === '/products' ? 'is-active' : ''}`}
            >
              Products
            </Link>

            <Link
              to="/projects"
              className={`nav-link ${location.pathname === '/projects' ? 'is-active' : ''}`}
            >
              Projects
            </Link>

            <Link
              to="/process"
              className={`nav-link ${location.pathname === '/process' ? 'is-active' : ''}`}
            >
              Process
            </Link>

            <Link
              to="/innovation-lab"
              className={`nav-link ${location.pathname === '/innovation-lab' ? 'is-active' : ''}`}
            >
              Innovation Lab
            </Link>

            <Link
              to="/faq"
              className={`nav-link ${location.pathname === '/faq' ? 'is-active' : ''}`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`btn btn--sm ${isCinemaMode ? 'btn--terracotta' : 'btn--primary'}`}
            >
              <span>Start a Project</span>
              <ArrowRight size={14} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-drawer__panel"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-drawer__header">
            <Link
              to="/"
              className="site-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="site-brand__logo" aria-hidden="true">
                <img
                  src="/images/logo-light.png"
                  alt="Vision Cloud Logo"
                  className="site-brand__logo-img"
                  width="54"
                  height="28"
                />
              </span>
              <span className="site-brand__name">
                VISION <span>CLOUD</span>
              </span>
            </Link>

            <button
              type="button"
              className="mobile-drawer__close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-drawer__nav" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${location.pathname === link.path ? 'is-active' : ''}`}
              >
                <span>{link.title}</span>
                <ArrowRight size={16} />
              </Link>
            ))}

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${location.pathname === '/services' ? 'is-active' : ''}`}
            >
              <span>Services Overview</span>
              <ArrowRight size={16} />
            </Link>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn--primary btn--block"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/919345688752?text=Hello%20Vision%20Cloud%20team%2C%20I%20would%20like%20to%20discuss%20a%20software%20engineering%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn--outline btn--block"
              >
                <span>WhatsApp Engineering</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
