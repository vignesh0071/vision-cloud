import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  MessageSquare,
  ShieldCheck,
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

export const SERVICE_OPTIONS = [
  'Custom Software Engineering',
  'Web Application Development',
  'Website Design and Development',
  'Mobile Application Development',
  'E-commerce Development',
  'UI/UX Design',
  'Cloud Solutions and Deployment',
  'Technical Consultation',
  'Other'
] as const;

export const BUSINESS_WHATSAPP_NUMBER = '919345688752';
export const DIRECT_WHATSAPP_URL = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`;

export function buildWhatsAppMessage(data: ContactFormData): string {
  const name = data.name.trim();
  const company = data.company.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const service = data.service.trim();
  const summary = data.summary.trim();

  const companyLine = company ? `Company: ${company}\n` : '';

  return (
`Hello Vision Cloud Team,

I would like to enquire about your services.

Name: ${name}
${companyLine}Email: ${email}
Phone: ${phone}
Service Required: ${service}

Project Summary:
${summary}

Please contact me to discuss the requirements and next steps.

Thank you,
${name}`
  );
}

function resolveInitialService(queryValue: string | null): string {
  if (!queryValue) return SERVICE_OPTIONS[0];
  const normalized = queryValue.toLowerCase();

  const exact = SERVICE_OPTIONS.find(
    (opt) => opt.toLowerCase() === normalized
  );
  if (exact) return exact;

  if (normalized.includes('web') && normalized.includes('design')) return 'Website Design and Development';
  if (normalized.includes('web') || normalized.includes('portal')) return 'Web Application Development';
  if (normalized.includes('mobile') || normalized.includes('ios') || normalized.includes('android')) return 'Mobile Application Development';
  if (normalized.includes('commerce') || normalized.includes('shop') || normalized.includes('store')) return 'E-commerce Development';
  if (normalized.includes('ui') || normalized.includes('ux') || normalized.includes('design')) return 'UI/UX Design';
  if (normalized.includes('cloud') || normalized.includes('devops') || normalized.includes('infrastructure')) return 'Cloud Solutions and Deployment';
  if (normalized.includes('consult') || normalized.includes('audit') || normalized.includes('assessment')) return 'Technical Consultation';
  if (normalized.includes('software') || normalized.includes('backend') || normalized.includes('api')) return 'Custom Software Engineering';

  return 'Other';
}

export const Contact: React.FC = () => {
  useDocumentTitle(
    'Contact Vision Cloud | Project Enquiry & WhatsApp Desk',
    'Submit your software engineering requirements, enquire about custom systems, or connect directly with our engineering desk on WhatsApp.'
  );

  const location = useLocation();

  // Read URL query parameters (e.g. ?service=Web%20Development or ?project=Nexus or ?inquiry=...)
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('service') || searchParams.get('project') || searchParams.get('inquiry');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: resolveInitialService(initialQuery),
    summary: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [submittedWaUrl, setSubmittedWaUrl] = useState('');

  // Update service dropdown if URL query parameters change
  useEffect(() => {
    const q = searchParams.get('service') || searchParams.get('project') || searchParams.get('inquiry');
    if (q) {
      setFormData((prev) => ({ ...prev, service: resolveInitialService(q) }));
    }
  }, [location.search]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    // 1. Full Name (required)
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errs.name = 'Please enter your full name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Full name must be at least 2 characters.';
    }

    // 2. Email Address (required)
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    // 3. Mobile Number (required)
    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone) {
      errs.phone = 'Please enter your mobile number.';
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      errs.phone = 'Please enter a valid mobile number with country code (e.g. +91 98765 43210).';
    }

    // 4. Service Required (required)
    if (!formData.service || !SERVICE_OPTIONS.includes(formData.service as any)) {
      errs.service = 'Please select a service from the list.';
    }

    // 5. Project Summary (required)
    const trimmedSummary = formData.summary.trim();
    if (!trimmedSummary) {
      errs.summary = 'Please provide a brief summary of your project requirements.';
    } else if (trimmedSummary.length < 15) {
      errs.summary = 'Project summary must be at least 15 characters to help our team understand your scope.';
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      const firstErrorKey = Object.keys(errs)[0];
      const targetElement = document.getElementById(`enquiry-${firstErrorKey}`);
      if (targetElement) {
        targetElement.focus();
      }
      return false;
    }

    return true;
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
    const message = buildWhatsAppMessage(formData);
    const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
    try {
      if (apiUrl) {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
    } catch (err) {
      console.warn('[Vision Cloud] Backend enquiry logging warning:', err);
    }

    // Attempt to open WhatsApp directly in a new window/tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('[Vision Cloud] Browser prevented auto-opening WhatsApp popup:', err);
    }

    setSubmittedWaUrl(waUrl);
    setSubmittedMessage(message);
    setStatus('success');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: SERVICE_OPTIONS[0],
      summary: ''
    });
    setErrors({});
    setStatus('idle');
    setSubmittedMessage('');
    setSubmittedWaUrl('');
  };

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

      {/* Main Grid: Channels + Enquiry Form */}
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
                  {/* Real-Time WhatsApp Chat Card (Completely independent from form state) */}
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
                        Connect directly with our engineering team to discuss your requirements.
                      </p>
                      <a
                        href={DIRECT_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--terracotta btn--sm"
                      >
                        <MessageSquare size={14} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email Desk */}
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

            {/* Right Column: Project Enquiry Form */}
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
                  <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }} role="status">
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(39, 174, 96, 0.12)',
                        color: '#27AE60',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.25rem'
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>

                    <span className="badge badge--terracotta" style={{ marginBottom: '0.5rem' }}>
                      ENQUIRY READY FOR WHATSAPP
                    </span>

                    <h3 className="heading-md" style={{ marginBottom: '0.75rem', color: 'var(--color-mocha)' }}>
                      Enquiry Formatted for WhatsApp
                    </h3>

                    <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem', color: 'var(--color-graphite-dark)' }}>
                      Your enquiry has been prepared with your details. WhatsApp should open in a new tab.
                      <strong style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-mocha)' }}>
                        Please press "Send" in WhatsApp to deliver your enquiry directly to our team.
                      </strong>
                    </p>

                    <div style={{ textAlign: 'left', marginBottom: '1.75rem' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-terracotta)',
                          fontWeight: 600,
                          marginBottom: '0.4rem',
                          letterSpacing: '0.05em'
                        }}
                      >
                        MESSAGE PREVIEW:
                      </span>
                      <pre
                        style={{
                          backgroundColor: 'var(--color-subtle-beige)',
                          border: '1px solid var(--border-default)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '1.25rem',
                          fontSize: '0.825rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-mocha)',
                          whiteSpace: 'pre-wrap',
                          lineHeight: '1.6',
                          maxHeight: '260px',
                          overflowY: 'auto'
                        }}
                      >
                        {submittedMessage}
                      </pre>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '360px', margin: '0 auto' }}>
                      <a
                        href={submittedWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--block"
                      >
                        <MessageSquare size={16} />
                        <span>Continue in WhatsApp (+91 93456 88752)</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn btn--outline btn--sm"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>

                    <p style={{ marginTop: '1.25rem', fontSize: '0.775rem', color: 'var(--color-graphite)', margin: '1.25rem 0 0' }}>
                      If WhatsApp did not launch automatically, click "Continue in WhatsApp" above.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span className="badge badge--terracotta" style={{ marginBottom: '0.5rem' }}>
                        PROJECT ENQUIRY
                      </span>
                      <h3 className="heading-md" style={{ color: 'var(--color-mocha)', marginBottom: '0.25rem' }}>
                        Project Scope & Requirements
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-graphite)', margin: 0 }}>
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
                        <span>Unable to process your enquiry. Please check your entries and try again.</span>
                      </div>
                    )}

                    {/* Field 1: Full Name & Field 2: Business / Company Name */}
                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                      {/* 1. Full Name (Required) */}
                      <div className="form-group">
                        <label htmlFor="enquiry-name" className="form-label">
                          Full Name <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="enquiry-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Connor"
                          className={`form-input ${errors.name ? 'input-error' : ''}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'err-name' : undefined}
                          required
                          autoComplete="name"
                        />
                        {errors.name && (
                          <span id="err-name" className="form-field-error">{errors.name}</span>
                        )}
                      </div>

                      {/* 2. Business or Company Name (Optional) */}
                      <div className="form-group">
                        <label htmlFor="enquiry-company" className="form-label">
                          Business or Company Name{' '}
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-graphite)', fontWeight: 400 }}>
                            (Optional)
                          </span>
                        </label>
                        <input
                          type="text"
                          id="enquiry-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Technologies"
                          className="form-input"
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    {/* Field 3: Email Address & Field 4: Mobile Number */}
                    <div className="grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                      {/* 3. Email Address (Required) */}
                      <div className="form-group">
                        <label htmlFor="enquiry-email" className="form-label">
                          Email Address <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="enquiry-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`form-input ${errors.email ? 'input-error' : ''}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                          required
                          autoComplete="email"
                        />
                        {errors.email && (
                          <span id="err-email" className="form-field-error">{errors.email}</span>
                        )}
                      </div>

                      {/* 4. Mobile Number (Required) */}
                      <div className="form-group">
                        <label htmlFor="enquiry-phone" className="form-label">
                          Mobile Number <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          id="enquiry-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 93456 88752"
                          className={`form-input ${errors.phone ? 'input-error' : ''}`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'err-phone' : undefined}
                          required
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <span id="err-phone" className="form-field-error">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Field 5: Service Required (Required Dropdown) */}
                    <div className="form-group">
                      <label htmlFor="enquiry-service" className="form-label">
                        Service Required <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                      </label>
                      <select
                        id="enquiry-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-select ${errors.service ? 'input-error' : ''}`}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'err-service' : undefined}
                        required
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <span id="err-service" className="form-field-error">{errors.service}</span>
                      )}
                    </div>

                    {/* Field 6: Project Summary (Required Textarea) */}
                    <div className="form-group">
                      <label htmlFor="enquiry-summary" className="form-label">
                        Project Summary <span style={{ color: 'var(--color-terracotta)' }}>*</span>
                      </label>
                      <textarea
                        id="enquiry-summary"
                        name="summary"
                        rows={5}
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="Please describe your key objectives, requirements, target timeline, or architectural challenges..."
                        className={`form-textarea ${errors.summary ? 'input-error' : ''}`}
                        aria-invalid={!!errors.summary}
                        aria-describedby={errors.summary ? 'err-summary' : undefined}
                        required
                      />
                      {errors.summary && (
                        <span id="err-summary" className="form-field-error">{errors.summary}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      block={true}
                      disabled={status === 'submitting'}
                      icon={status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : <MessageSquare size={16} />}
                    >
                      {status === 'submitting' ? 'Preparing WhatsApp Message...' : 'Send Enquiry via WhatsApp'}
                    </Button>

                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-graphite)', textAlign: 'center', lineHeight: '1.45' }}>
                      Submitting prepares your enquiry and opens WhatsApp with your message formatted. Press <strong>Send</strong> in WhatsApp to deliver your project requirements directly to our engineering desk.
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
