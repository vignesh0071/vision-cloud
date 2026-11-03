import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import { faqData } from '../data/faq';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const FAQ: React.FC = () => {
  useDocumentTitle(
    'Frequently Asked Questions | Vision Cloud',
    'Find answers to common questions about Vision Cloud’s software development process, tech selection, milestone pricing, timelines, security, and maintenance.'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-scope-services': true,
    'faq-process-kickoff': true
  });

  const categories = [
    'All',
    'General',
    'Engineering',
    'Scope & Pricing',
    'Timeline',
    'Security & Maintenance'
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="page-faq">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>ANSWERS & TRANSPARENCY</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Frequently Asked Questions.
              </h1>
              <p className="text-lead">
                Transparent answers regarding our engineering methodology, technology stack selection, milestone pricing structures, project delivery timelines, and ongoing system maintenance.
              </p>
            </div>
          </Reveal>

          {/* Search Box */}
          <Reveal delayMs={100}>
            <div style={{ marginTop: '2.5rem', maxWidth: '600px', position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword (e.g. pricing, react, security, timeline)..."
                className="form-input"
                style={{ paddingLeft: '2.8rem' }}
                aria-label="Search frequently asked questions"
              />
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-graphite)'
                }}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Category Tabs */}
          <Reveal delayMs={150}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.825rem',
                    fontFamily: 'var(--font-mono)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--color-terracotta)' : 'var(--border-default)',
                    backgroundColor: selectedCategory === cat ? 'var(--color-mocha)' : 'var(--bg-surface)',
                    color: selectedCategory === cat ? 'var(--color-warm-ivory)' : 'var(--color-mocha)',
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

      {/* Accordion Questions */}
      <section className="section-pad bg-cream">
        <Container size="narrow">
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
              <HelpCircle size={36} className="text-terracotta" style={{ margin: '0 auto 1rem' }} />
              <h3 className="heading-sm">No matching questions found</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                Try searching for a different keyword or switch the category filter to "All".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn btn--outline btn--sm"
                style={{ marginTop: '1.25rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredFaqs.map((faq) => {
                const isOpen = !!openItems[faq.id];

                return (
                  <div
                    key={faq.id}
                    className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span style={{ paddingRight: '1rem' }}>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform var(--transition-fast)',
                          color: 'var(--color-terracotta)',
                          flexShrink: 0
                        }}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="faq-accordion-body"
                        role="region"
                      >
                        <p>{faq.answer}</p>
                        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--color-graphite-light)' }}>
                            CATEGORY: {faq.category.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need more clarification box */}
          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--color-subtle-beige)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} className="text-terracotta" />
              <h3 className="heading-sm">Have a unique technical question?</h3>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
              If your question isn’t answered above, reach out directly. An engineering lead will review your project constraints and provide answers without generic sales runaround.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Button to="/contact" variant="primary" size="sm" icon={<ArrowRight size={13} />}>
                Submit an Inquiry
              </Button>
              <a
                href="https://wa.me/919345688752?text=Hello%20Vision%20Cloud%20team%2C%20I%20have%20a%20technical%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
