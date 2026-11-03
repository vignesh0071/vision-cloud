import React from 'react';
import { Home } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFound: React.FC = () => {
  useDocumentTitle('404 Page Not Found | Vision Cloud');

  return (
    <div className="page-notfound" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--header-height)' }}>
      <Container size="narrow">
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <Badge variant="terracotta" style={{ marginBottom: '1.25rem' }}>404 · RESOURCE UNRESOLVED</Badge>
          <h1 className="heading-xl" style={{ marginBottom: '1rem', color: 'var(--color-mocha)' }}>
            The requested page does not exist.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-graphite)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            The architectural route you are attempting to access has either been relocated, removed, or never existed in the Vision Cloud registry.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary" icon={<Home size={15} />} iconPosition="left">
              Return to Homepage
            </Button>
            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
