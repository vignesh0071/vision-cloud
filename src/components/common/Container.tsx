import React from 'react';

export interface ContainerProps {
  size?: 'normal' | 'wide' | 'narrow';
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'normal',
  className = '',
  children
}) => {
  const sizeClass = size === 'wide' ? 'container--wide' : size === 'narrow' ? 'container--narrow' : '';
  return <div className={`container ${sizeClass} ${className}`.trim()}>{children}</div>;
};
