import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Reveal } from '../components/animation/Reveal';
import type { ContactFormData } from '../types';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Contact: React.FC = () => {
  useDocumentTitle(
    'Contact Vision Cloud | Start a Project Consultation',
    'Submit your software engineering requirements, system architecture goals, or contact our engineering lead directly on WhatsApp.'
  );

  const location = useLocation();

  // Read URL query parameters (e.g. ?service=Web%20Development or ?project=Nexus)
  const searchParams = new URLSearchParams(location.search);
  const initialService = searchParams.get('service') || searchParams.get('project') || searchParams.get('inquiry') || 'Custom Software Engineering';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: initialService,
    estimatedBudget: 'Undetermined / Needs Assessment',
    description: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Update projectType if query changes
  useEffect(() => {
    const s = searchParams.get('service') || searchParams.get('project') || searchParams.get('inquiry');
    if (s) {
      setFormData((prev) => ({ ...prev, projectType: s }));
    }
  }, [location.search]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.description.trim()) {
      errs.description = 'Please describe your project scope, timeline, or technical challenges.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide at least 15 characters to help our technical leads understand your scope.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

    try {
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error(`Inquiry transmission failed (status ${response.status})`);
        }

        setStatus('success');
        setFeedbackMessage('Thank you. Your inquiry has been transmitted directly to the Vision Cloud engineering desk. We will review your technical specifications within 24–48 business hours.');
      } else {
        // Transparent frontend prototype handling without pretending an email was sent over non-existent backend
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.info('[Vision Cloud] Validated Inquiry Payload:', formData);
        setStatus('success');
        setFeedbackMessage(
          'Inquiry validated successfully! Note: A live backend endpoint (VITE_CONTACT_API_URL) is not currently configured in this environment, so this form operates as a frontend prototype. For immediate real-time response, please connect directly with our engineering lead via WhatsApp below.'
        );
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage(
        err.message || 'Unable to submit your inquiry at this moment. Please check your network and try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Custom Software Engineering',
      estimatedBudget: 'Undetermined / Needs Assessment',
      description: ''
    });
    setErrors({});
    setStatus('idle');
  };

  // Prefilled WhatsApp URL
  const whatsAppMessage = encodeURIComponent(
    `Hello Vision Cloud engineering lead, my name is ${formData.name || '[Your Name]'}. I am inquiring about: ${formData.projectType}. ${formData.description ? `Project summary: ${formData.description}` : ''}`
  );
  const whatsAppUrl = `https://wa.me/919345688752?text=${whatsAppMessage}`;

  const projectTypeOptions = [
    'Custom Software Engineering',
    'Web Application Development',
    'Mobile Application Development',
    'Cloud Solutions & Infrastructure',
    'UI/UX & Digital Product Design',
    'AI and Intelligent Systems',
    'Enterprise Business Systems',
    'Technical Consulting & Architecture Review',
    'Product Integration / Tooling Inquiry'
  ];

  const budgetOptions = [
    'Undetermined / Needs Technical Assessment',
    'Discovery Phase / Technical Blueprint ($2,500 - $5,000)',
    'Sprint Tier 1 ($5,000 - $15,000)',
    'Sprint Tier 2 ($15,000 - $35,000)',
    'Enterprise Architecture ($35,000+)'
  ];

  return (
    <div className="page-contact">
      {/* Hero Header */}
      <section className="section-pad--compact bg-ivory" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Container>
          <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />
          <Reveal>
            <div style={{ maxWidth: '820px' }}>
              <Badge variant="terracotta" style={{ marginBottom: '1rem' }}>TECHNICAL COLLABORATION</Badge>
              <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
                Start an Engineering{' '}
                <span className="heading-accent heading-accent--terracotta">Conversation</span>.
              </h1>
              <p className="text-lead">
                Every inquiry is reviewed directly by an experienced software engineering lead. We evaluate technical feasibility, provide honest architectural guidance, and scope realistic milestone roadmaps.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="section-pad bg-cream">
        <Container>
          <div className="split-editorial" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
            {/* Left Column: Direct Communication Channels */}
            <Reveal>
              <div>
                <h2 className="heading-md" style={{ marginBottom: '1.25rem', color: 'var(--color-mocha)' }}>
                  Direct Technical Channels
                </h2>
                <p style={{ lineHeight: '1.65', marginBottom: '2rem' }}>
                  We believe in transparent engineering partnerships without sales middlemen. You can submit your requirements via the form or connect directly with our engineering team.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  {/* WhatsApp */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                    <div style={{ color: '#27AE60', padding: '0.5rem', backgroundColor: 'rgba(39, 174, 96, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                      <MessageSquare size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                        REAL-TIME CHAT
                      </span>
                      <h4 style={{ fontSize: '1rem', marginTop: '0.2rem', marginBottom: '0.25rem' }}>
                        WhatsApp Technical Desk
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                        Direct line for rapid discovery discussions, scope queries, and milestone check-ins.
                      </p>
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--terracotta btn--sm"
                      >
                        <MessageSquare size={14} />
                        <span>Chat on WhatsApp (+91 93456 88752)</span>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                    <div style={{ color: 'var(--color-mocha)', padding: '0.5rem', backgroundColor: 'var(--color-subtle-beige)', borderRadius: 'var(--radius-sm)' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                        DOCUMENTATION & RFPS
                      </span>
                      <h4 style={{ fontSize: '1rem', marginTop: '0.2rem', marginBottom: '0.25rem' }}>
                        Email Desk
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Send detailed briefs, system requirements, or request a mutual Non-Disclosure Agreement.
                      </p>
                      <a
                        href="mailto:inquiries@visioncloud.tech"
                        style={{ fontSize: '0.9rem', color: 'var(--color-mocha)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}
                      >
                        inquiries@visioncloud.tech
                      </a>
                    </div>
                  </div>

                  {/* Confidentiality Commitment */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', backgroundColor: 'var(--color-subtle-beige)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ color: 'var(--color-terracotta)', padding: '0.5rem' }}>
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-mocha)' }}>
                        Confidentiality & Mutual NDA
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite-dark)', margin: 0, lineHeight: '1.55' }}>
                        Your intellectual property and technical ideas are safe with us. Standard mutual NDAs are executed prior to reviewing proprietary system code or confidential operational metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-graphite)' }}>
                  <Clock size={14} className="text-terracotta" />
                  <span>Average discovery response time: Within 24 business hours</span>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Project Inquiry Form */}
            <Reveal delayMs={150}>
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: 'clamp(1.25rem, 4vw, 2.75rem)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }} role="status">
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(39, 174, 96, 0.1)', color: '#27AE60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Inquiry Processed</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem', color: 'var(--color-graphite-dark)' }}>
                      {feedbackMessage}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '320px', margin: '0 auto' }}>
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--terracotta btn--block"
                      >
                        <MessageSquare size={16} />
                        <span>Send via WhatsApp (+91 93456 88752)</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn btn--outline btn--sm"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span className="badge badge--terracotta" style={{ marginBottom: '0.5rem' }}>
                        TECHNICAL INQUIRY
                      </span>
                      <h3 className="heading-md" style={{ color: 'var(--color-mocha)' }}>
                        Project Scope Form
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                        Fields marked with <span style={{ color: 'var(--color-terracotta)' }}>*</span> are required.
                      </p>
                    </div>

                    {status === 'error' && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'rgba(192, 57, 43, 0.1)',
                          border: '1px solid rgba(192, 57, 43, 0.3)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#C0392B',
                          fontSize: '0.85rem',
                          marginBottom: '1.5rem'
                        }}
                        role="alert"
                      >
                        <AlertCircle size={16} />
                        <span>{feedbackMessage}</span>
                      </div>
                    )}

                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                      {/* Name */}
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">
                          Full Name <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          className={`form-input ${errors.name ? 'input-error' : ''}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'err-name' : undefined}
                          required
                        />
                        {errors.name && (
                          <span id="err-name" className="form-field-error">{errors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          Work Email <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className={`form-input ${errors.email ? 'input-error' : ''}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                          required
                        />
                        {errors.email && (
                          <span id="err-email" className="form-field-error">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                      {/* Company (Optional) */}
                      <div className="form-group">
                        <label htmlFor="contact-company" className="form-label">
                          Company / Organization <span style={{ fontSize: '0.75rem', color: 'var(--color-graphite)' }}>(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                          className="form-input"
                        />
                      </div>

                      {/* Project Type */}
                      <div className="form-group">
                        <label htmlFor="contact-type" className="form-label">
                          Primary Engineering Need <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <select
                          id="contact-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="form-select"
                        >
                          {projectTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget (Optional) */}
                    <div className="form-group">
                      <label htmlFor="contact-budget" className="form-label">
                        Estimated Budget Bracket <span style={{ fontSize: '0.75rem', color: 'var(--color-graphite)' }}>(Optional)</span>
                      </label>
                      <select
                        id="contact-budget"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Description */}
                    <div className="form-group">
                      <label htmlFor="contact-desc" className="form-label">
                        Project Description & Scope <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                      </label>
                      <textarea
                        id="contact-desc"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please describe your key objectives, users, integrations, timeline targets, or architectural challenges..."
                        className={`form-textarea ${errors.description ? 'input-error' : ''}`}
                        aria-invalid={!!errors.description}
                        aria-describedby={errors.description ? 'err-desc' : undefined}
                        required
                      />
                      {errors.description && (
                        <span id="err-desc" className="form-field-error">{errors.description}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      block={true}
                      disabled={status === 'submitting'}
                      icon={status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    >
                      {status === 'submitting' ? 'Verifying Inquiry...' : 'Submit Project Inquiry'}
                    </Button>

                    <p style={{ marginTop: '1rem', fontSize: '0.775rem', color: 'var(--color-graphite)', textAlign: 'center', lineHeight: '1.4' }}>
                      Transparent frontend submission. Prepares clean payload for your backend or triggers WhatsApp direct chat.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
};
