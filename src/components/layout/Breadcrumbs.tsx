import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumbs" className={`breadcrumbs ${className}`.trim()}>
      <Link to="/">Home</Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={13} aria-hidden="true" style={{ opacity: 0.5 }} />
            {isLast || !item.path ? (
              <span className="breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
