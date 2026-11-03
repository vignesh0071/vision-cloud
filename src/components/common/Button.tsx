import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'terracotta' | 'outline' | 'outline-inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  to?: string;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  block = false,
  to,
  href,
  external = false,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const variantClass = `btn--${variant}`;
  const sizeClass = size === 'sm' ? 'btn--sm' : size === 'lg' ? 'btn--lg' : '';
  const blockClass = block ? 'btn--block' : '';
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${blockClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon-wrap" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon-wrap" aria-hidden="true">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};
