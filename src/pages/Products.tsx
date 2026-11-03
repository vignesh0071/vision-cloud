import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Compass
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { productsData } from '../data/products';
import type { ProductStatus } from '../types';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Products: React.FC = () => {
  useDocumentTitle(
    'Products & Internal Tooling | Vision Cloud',
    'Explore Vision Cloud’s internal developer tooling, telemetry aggregators, and workflow orchestration engines, clearly labeled by development status.'
  );

  const [selectedFilter, setSelectedFilter] = useState<'All' | ProductStatus>('All');

  const filteredProducts = selectedFilter === 'All'
    ? productsData
    : productsData.filter((p) => p.status === selectedFilter);

  const getStatusBadge = (status: ProductStatus) => {
    switch (status) {
      case 'Available':
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(46, 204, 113, 0.15)', color: '#27AE60', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#27AE60' }} />
            Available
          </span>
        );
      case 'In Development':
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(185, 120, 98, 0.15)', color: 'var(--color-terracotta-dark)', fontWeight: 600 }}>
            <Clock size={12} />
            In Active Development
          </span>
        );
      case 'Experimental Concept':
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-xs)', backgroundColor: 'rgba(89, 96, 103, 0.15)', color: 'var(--color-graphite)', fontWeight: 600 }}>
            <Compass size={12} />
            Experimental Concept
          </span>
        );
    }
  };

  return (
    <div className="page-products">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Products' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>SYSTEMS & TOOLS</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Internal Software Tooling & Product Blueprints.
              </h1>
              <p className="text-lead">
                Alongside custom client engineering, Vision Cloud architects reusable software systems, developer toolkits, and telemetry utilities. Each product below is transparently identified by its current production readiness.
              </p>
            </div>
          </Reveal>

          {/* Status Filter Tabs */}
          <Reveal delayMs={150}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {(['All', 'Available', 'In Development', 'Experimental Concept'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: selectedFilter === cat ? 'var(--color-terracotta)' : 'var(--border-default)',
                    backgroundColor: selectedFilter === cat ? 'var(--color-mocha)' : 'var(--bg-surface)',
                    color: selectedFilter === cat ? 'var(--color-warm-ivory)' : 'var(--color-mocha)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Product List */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {filteredProducts.map((prod) => (
              <Reveal key={prod.id}>
                <div
                  className="editorial-card"
                  style={{
                    height: '100%',
                    justifyContent: 'space-between',
                    padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                        {prod.category}
                      </span>
                      {getStatusBadge(prod.status)}
                    </div>

                    <h2 className="heading-md" style={{ marginBottom: '0.75rem', color: 'var(--color-mocha)' }}>
                      {prod.name}
                    </h2>

                    <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                      {prod.description}
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-graphite-dark)', marginBottom: '0.75rem' }}>
                        Architectural Features
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {prod.highlights.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <CheckCircle2 size={15} className="text-terracotta" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-graphite)', display: 'block', marginBottom: '0.4rem' }}>
                        Core Technology Stack:
                      </span>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {prod.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: '0.725rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.2rem 0.5rem',
                              borderRadius: 'var(--radius-xs)',
                              backgroundColor: 'var(--color-subtle-beige)',
                              color: 'var(--color-mocha)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      to={`/contact?inquiry=${encodeURIComponent(prod.name)}`}
                      variant="outline"
                      size="sm"
                      block={true}
                      icon={<ArrowRight size={14} />}
                    >
                      {prod.linkText || 'Inquire About Product Integration'}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy on Software Products */}
      <section className="section-pad bg-ivory">
        <Container>
          <Reveal>
            <div
              style={{
                backgroundColor: 'var(--color-subtle-beige)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2rem, 5vw, 3rem)'
              }}
            >
              <div style={{ maxWidth: '800px' }}>
                <span className="badge badge--terracotta" style={{ marginBottom: '0.75rem' }}>HONEST ENGINEERING DISCLOSURE</span>
                <h3 className="heading-md" style={{ marginBottom: '1rem' }}>
                  Our Approach to Product Development
                </h3>
                <p style={{ fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Unlike marketing-driven firms that rebrand ordinary libraries as commercial suites, Vision Cloud maintains clear demarcations between tools ready for commercial deployment, systems currently undergoing internal hardening, and early experimental concept architectures.
                </p>
                <p style={{ fontSize: '0.975rem', lineHeight: '1.7' }}>
                  If you are interested in deploying or co-developing any of our internal engines within your enterprise infrastructure, our engineering desk can arrange a technical walkthrough.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
