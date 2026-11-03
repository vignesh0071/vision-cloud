import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface CinematicVideoBackgroundProps {
  videoSrc: string;
  mobileVideoSrc?: string;
  posterSrc: string;
  posterWebp?: string;
  overlayOpacity?: number;
  objectPosition?: string;
  isHero?: boolean;
  overlayTheme?: 'mocha' | 'dark' | 'subtle';
  className?: string;
  children?: React.ReactNode;
}

export const CinematicVideoBackground: React.FC<CinematicVideoBackgroundProps> = ({
  videoSrc,
  mobileVideoSrc,
  posterSrc,
  posterWebp,
  overlayOpacity = 0.72,
  objectPosition = 'center center',
  isHero = true,
  overlayTheme = 'mocha',
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [videoReady, setVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activeSrc, setActiveSrc] = useState(videoSrc);
  const prefersReducedMotion = useReducedMotion();

  // Select mobile video source if on smaller viewports
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    if (isMobile && mobileVideoSrc) {
      setActiveSrc(mobileVideoSrc);
    } else {
      setActiveSrc(videoSrc);
    }
  }, [videoSrc, mobileVideoSrc]);

  // Video playback and intersection observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || hasError) return;

    // Handle intersection observer to pause when off-screen
    let observer: IntersectionObserver | null = null;
    
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch((err) => {
                  // Autoplay policy or error, fallback to poster
                  console.debug('[CinematicVideoBackground] Playback caught:', err.name);
                });
              }
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.15 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    } else {
      // Fallback: play directly
      video.play().catch(() => {});
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [prefersReducedMotion, hasError, activeSrc]);

  const handleVideoCanPlay = () => {
    // Smoothly fade video into view
    setVideoReady(true);
  };

  const handleVideoError = () => {
    console.warn('[CinematicVideoBackground] Video source error, falling back to static poster.');
    setHasError(true);
    setVideoReady(false);
  };

  // Determine overlay gradient based on theme
  const overlayStyle: React.CSSProperties = {
    opacity: overlayOpacity,
    background:
      overlayTheme === 'mocha'
        ? 'linear-gradient(180deg, rgba(26, 20, 18, 0.4) 0%, rgba(34, 26, 22, 0.58) 60%, rgba(26, 20, 18, 0.9) 100%)'
        : overlayTheme === 'subtle'
        ? 'linear-gradient(180deg, rgba(26, 20, 18, 0.25) 0%, rgba(34, 26, 22, 0.45) 100%)'
        : 'linear-gradient(180deg, rgba(15, 12, 10, 0.55) 0%, rgba(26, 20, 18, 0.8) 100%)'
  };

  return (
    <div
      ref={containerRef}
      className={`cinematic-video-container ${className}`.trim()}
    >
      {/* LAYER 1: Solid background fallback color */}
      <div className="cinematic-video__layer-bg" aria-hidden="true" />

      {/* LAYER 2: High-resolution Poster Image (always rendered first, zero layout shift) */}
      <picture aria-hidden="true">
        {posterWebp && <source srcSet={posterWebp} type="image/webp" />}
        <img
          src={posterSrc}
          alt=""
          loading={isHero ? 'eager' : 'lazy'}
          fetchPriority={isHero ? 'high' : 'auto'}
          className={`cinematic-video__poster ${videoReady ? 'cinematic-video__poster--hidden' : ''}`}
          style={{ objectPosition }}
        />
      </picture>

      {/* LAYER 3: Hardware-accelerated Video Element (if reduced motion is false & no error) */}
      {!prefersReducedMotion && !hasError && (
        <video
          ref={videoRef}
          src={activeSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlayThrough={handleVideoCanPlay}
          onPlaying={() => setVideoReady(true)}
          onError={handleVideoError}
          className={`cinematic-video__element ${videoReady ? 'cinematic-video__element--ready' : ''}`}
          style={{ objectPosition }}
        />
      )}

      {/* LAYER 4: Dark Mocha Gradient Overlay & Vignette */}
      <div
        className="cinematic-video__overlay"
        style={overlayStyle}
        aria-hidden="true"
      />
      <div className="cinematic-video__vignette" aria-hidden="true" />

      {/* LAYER 5: Main Content (interactive buttons, links, typography) */}
      <div className="cinematic-video__content">
        {children}
      </div>
    </div>
  );
};
