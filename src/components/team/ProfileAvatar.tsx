import React from 'react';

export interface ProfileAvatarProps {
  initials: string;
  name: string;
  photoUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  initials,
  name,
  photoUrl,
  size = 'lg',
  className = ''
}) => {
  const sizeMap = {
    sm: { width: 56, height: 56, fontSize: '1.1rem', badgeSize: 16 },
    md: { width: 88, height: 88, fontSize: '1.65rem', badgeSize: 20 },
    lg: { width: 140, height: 140, fontSize: '2.4rem', badgeSize: 24 },
    xl: { width: 180, height: 180, fontSize: '3rem', badgeSize: 28 }
  };

  const currentSize = sizeMap[size];

  if (photoUrl) {
    return (
      <div
        className={`profile-avatar ${className}`.trim()}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-default)',
          position: 'relative'
        }}
      >
        <img
          src={photoUrl}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  // Elegant architectural monogram treatment
  return (
    <div
      className={`profile-avatar profile-avatar--placeholder ${className}`.trim()}
      style={{
        width: currentSize.width,
        height: currentSize.height,
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FAF7F2 0%, #EFEAE2 100%)',
        border: '1px solid var(--border-default)',
        boxShadow: 'inset 0 1px 3px rgba(48, 39, 34, 0.05)',
        overflow: 'hidden'
      }}
      aria-label={`Profile placeholder for ${name}`}
    >
      {/* Subtle architectural geometric grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(48, 39, 34, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(48, 39, 34, 0.05) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: 'center center',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative corner accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 24px 24px 0',
          borderColor: 'transparent var(--color-terracotta) transparent transparent',
          opacity: 0.85
        }}
      />

      {/* Initials typography */}
      <span
        style={{
          position: 'relative',
          fontFamily: 'var(--font-serif)',
          fontSize: currentSize.fontSize,
          fontWeight: 500,
          fontStyle: 'italic',
          color: 'var(--color-mocha)',
          letterSpacing: '0.04em',
          userSelect: 'none'
        }}
      >
        {initials}
      </span>

      {/* Technical accent frame */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 6,
          left: 6,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--color-terracotta)',
          opacity: 0.75
        }}
      />
    </div>
  );
};
