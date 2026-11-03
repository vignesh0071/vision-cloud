import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'terracotta' | 'inverse';
  showDot?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  showDot = true,
  children,
  className = '',
  style
}) => {
  const variantClass = variant === 'terracotta' 
    ? 'badge--terracotta' 
    : variant === 'inverse' 
    ? 'badge--inverse' 
    : '';

  return (
    <div className={`badge ${variantClass} ${className}`.trim()} style={style}>
      {showDot && <span className="badge__dot" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
};
