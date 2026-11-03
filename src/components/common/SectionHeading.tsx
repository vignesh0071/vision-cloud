import React from 'react';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'default' | 'terracotta' | 'inverse';
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  inverse?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant,
  title,
  titleHighlight,
  description,
  centered = false,
  inverse = false,
  className = ''
}) => {
  const chosenBadgeVariant = badgeVariant || (inverse ? 'inverse' : 'default');

  return (
    <div className={`section-header ${centered ? 'section-header--centered' : ''} ${className}`.trim()}>
      {badgeText && (
        <div className="section-header__badge">
          <Badge variant={chosenBadgeVariant}>{badgeText}</Badge>
        </div>
      )}
      <h2 className="heading-xl section-header__title">
        {title}{' '}
        {titleHighlight && (
          <span className={`heading-accent ${inverse ? 'heading-accent--champagne' : 'heading-accent--terracotta'}`}>
            {titleHighlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`section-header__desc ${inverse ? 'text-inverse-muted' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
