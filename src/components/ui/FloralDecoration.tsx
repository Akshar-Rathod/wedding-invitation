import React from 'react';

interface FloralDecorationProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-crest';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FloralDecoration: React.FC<FloralDecorationProps> = ({
  position = 'top-left',
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
  };

  if (position === 'center-crest') {
    return (
      <div className={`flex justify-center items-center pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg 
          className="w-16 h-10 sm:w-20 sm:h-12 text-olive-deep/60" 
          viewBox="0 0 100 60" 
          fill="none" 
          stroke="currentColor"
        >
          {/* Subtle crest arch */}
          <path d="M10 50 C30 20 70 20 90 50" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M25 40 C35 25 65 25 75 40" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Botanical leaves along curve */}
          <path d="M30 32 C26 26 20 28 23 35 Z" fill="#6E765C" fillOpacity="0.75" strokeWidth="0.8" />
          <path d="M42 24 C40 18 34 20 37 27 Z" fill="#6E765C" fillOpacity="0.75" strokeWidth="0.8" />
          <path d="M58 24 C60 18 66 20 63 27 Z" fill="#6E765C" fillOpacity="0.75" strokeWidth="0.8" />
          <path d="M70 32 C74 26 80 28 77 35 Z" fill="#6E765C" fillOpacity="0.75" strokeWidth="0.8" />
          {/* Central top bloom */}
          <circle cx="50" cy="20" r="3" fill="#A6844E" strokeWidth="0.8" />
          <path d="M50 15 L50 20" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // Corner orientation transforms
  const rotationMap = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  };

  return (
    <div 
      className={`pointer-events-none select-none text-olive-deep/35 ${sizeMap[size]} ${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
        {/* Corner frame ornament */}
        <path d="M4 35 L4 4 L35 4" strokeWidth="1.2" strokeLinecap="round" stroke="#A6844E" />
        <path d="M10 25 L10 10 L25 10" strokeWidth="0.8" stroke="#59604B" strokeOpacity="0.5" />
        {/* Curving vine */}
        <path d="M12 12 C25 25 35 45 42 70" strokeWidth="1" strokeLinecap="round" />
        <path d="M22 22 C32 15 45 18 55 22" strokeWidth="0.8" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M22 25 C16 32 18 40 26 36 C28 32 25 27 22 25 Z" fill="#6E765C" fillOpacity="0.7" strokeWidth="0.8" />
        <path d="M30 40 C26 50 32 56 38 48 C37 44 33 41 30 40 Z" fill="#6E765C" fillOpacity="0.7" strokeWidth="0.8" />
        <path d="M32 18 C40 12 48 16 44 24 C38 23 34 20 32 18 Z" fill="#6E765C" fillOpacity="0.7" strokeWidth="0.8" />
        {/* Little bud */}
        <circle cx="55" cy="22" r="2.5" fill="#A6844E" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

