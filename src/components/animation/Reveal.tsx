import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  threshold?: number;
  className?: string;
  direction?: 'up' | 'none';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delayMs = 0,
  threshold = 0.1,
  className = '',
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;
    if (!currentElem) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Immediate check if element is already near or inside the viewport
    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: Math.min(threshold, 0.05),
        rootMargin: '120px 0px 120px 0px'
      }
    );

    observer.observe(currentElem);

    // Failsafe timer: Ensure content is never left permanently hidden
    const failsafe = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => {
      clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [prefersReducedMotion, threshold]);

  const style: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0, 0, 0)'
          : direction === 'up'
          ? 'translate3d(0, 18px, 0)'
          : 'none',
        transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
        willChange: 'opacity, transform'
      };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
};
