import type { ContactFormData } from '../types';

/**
 * Official Centralized Vision Cloud Contact Configuration
 */
export const WHATSAPP_NUMBER = '919087240937';
export const WHATSAPP_DISPLAY = '+91 90872 40937';
export const CONTACT_EMAIL = 'ind.visioncloud@gmail.com';

export const PHONE_DISPLAY = '+91 90872 40937';
export const PHONE_TEL = '+919087240937';
export const DIRECT_WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * 1. General WhatsApp Enquiry Message & URL
 */
export function buildGeneralWhatsAppMessage(): string {
  return (
`Hello Vision Cloud Team,
I would like to know more about your software engineering services.
Please contact me to discuss my requirements and the available solutions.
Thank you.`
  );
}

export function getGeneralWhatsAppUrl(): string {
  return `${DIRECT_WHATSAPP_BASE}?text=${encodeURIComponent(buildGeneralWhatsAppMessage())}`;
}

/**
 * 2. Project WhatsApp Enquiry Message & URL
 */
export function buildProjectWhatsAppMessage(data: ContactFormData): string {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const service = data.service.trim();
  const summary = data.summary.trim();

  return (
`Hello Vision Cloud Team,
I would like to discuss a new software development project.
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}
Project Requirements:
${summary}
Please review my enquiry and contact me to discuss the next steps.
Thank you.`
  );
}

export function getProjectWhatsAppUrl(data: ContactFormData): string {
  return `${DIRECT_WHATSAPP_BASE}?text=${encodeURIComponent(buildProjectWhatsAppMessage(data))}`;
}

/**
 * 3. Product WhatsApp Enquiry Message & URL
 */
export function buildProductWhatsAppMessage(
  productName: string,
  customerName?: string,
  customerEmail?: string
): string {
  const name = customerName?.trim() || '[Your Name]';
  const email = customerEmail?.trim() || '[Your Email]';

  return (
`Hello Vision Cloud Team,
I am interested in learning more about your product.
Product: ${productName}
Name: ${name}
Email: ${email}
Please share the available product information and arrange a technical discussion.
Thank you.`
  );
}

export function getProductWhatsAppUrl(
  productName: string,
  customerName?: string,
  customerEmail?: string
): string {
  return `${DIRECT_WHATSAPP_BASE}?text=${encodeURIComponent(
    buildProductWhatsAppMessage(productName, customerName, customerEmail)
  )}`;
}

/**
 * 4. General Email Enquiry (mailto:)
 */
export function buildGeneralEmailBody(): string {
  return (
`Hello Vision Cloud Team,
I am interested in learning more about your software engineering services.
I would appreciate further information and an opportunity to discuss my requirements.
Please contact me at your convenience.
Thank you.

Name: 
Company: 
Phone: 
Email: `
  );
}

export function getGeneralEmailUrl(): string {
  const subject = 'General Enquiry | Vision Cloud';
  const body = buildGeneralEmailBody();
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * 5. Project Email Enquiry (mailto:)
 */
export function buildProjectEmailBody(
  data: ContactFormData,
  additionalRequirements?: string
): string {
  const name = data.name.trim();
  const company = data.company.trim() || 'Not specified';
  const email = data.email.trim();
  const phone = data.phone.trim();
  const service = data.service.trim();
  const summary = data.summary.trim();
  const additional = additionalRequirements?.trim() || 'None provided at this time.';

  return (
`Hello Vision Cloud Team,
I would like to discuss a potential software engineering project.

CUSTOMER DETAILS
Full Name: ${name}
Company: ${company}
Email Address: ${email}
Contact Number: ${phone}

PROJECT DETAILS
Service Required: ${service}

Project Summary:
${summary}

Additional Requirements:
${additional}

Please review my enquiry and contact me to discuss the scope, technical approach and next steps.

Best Regards,
${name}`
  );
}

export function getProjectEmailUrl(
  data: ContactFormData,
  additionalRequirements?: string
): string {
  const subject = 'New Project Enquiry | Vision Cloud';
  const body = buildProjectEmailBody(data, additionalRequirements);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * 6. Product Email Enquiry (mailto:)
 */
export function getProductEmailUrl(productName: string): string {
  const subject = `Product Enquiry: ${productName} | Vision Cloud`;
  const body = (
`Hello Vision Cloud Team,

I am interested in learning more about your product: ${productName}.

Please share the available product specifications, integration details, and arrange a technical discussion.

Thank you.`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Safe external URL open helper
 */
export function openExternalUrl(url: string): void {
  if (url.startsWith('mailto:') || url.startsWith('tel:')) {
    window.location.href = url;
    return;
  }
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch (err) {
    console.warn('[Vision Cloud] Failed to open external URL:', err);
    window.location.href = url;
  }
}
