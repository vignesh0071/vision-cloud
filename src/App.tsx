import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Styles
import './styles/tokens.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

// Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LegalModal } from './components/modals/LegalModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { Process } from './pages/Process';
import { InnovationLab } from './pages/InnovationLab';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function AppContent() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="vision-cloud-application">
      {/* Skip to Main Content Link for Accessibility */}
      <a href="#main-content" className="sr-only-focusable">
        Skip to main content
      </a>

      {/* Global Scroll Restoration */}
      <ScrollToTop />

      {/* Responsive Global Navigation */}
      <Header />

      {/* Routed Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/process" element={<Process />} />
          <Route path="/innovation-lab" element={<InnovationLab />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Global Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Global Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
