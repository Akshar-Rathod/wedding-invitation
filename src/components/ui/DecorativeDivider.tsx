import React from 'react';

interface DecorativeDividerProps {
  variant?: 'simple' | 'floral' | 'monogram' | 'subtle';
  monogram?: string;
  className?: string;
}

export const DecorativeDivider: React.FC<DecorativeDividerProps> = ({
  variant = 'floral',
  monogram,
  className = '',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-champagne/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-olive-deep/40 rotate-45" />
        <div className="h-[1px] w-12 sm:w-20 bg-champagne/60" />
      </div>
    );
  }

  if (variant === 'monogram' && monogram) {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 sm:gap-4 ${className}`}>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-champagne" />
        <div className="w-2 h-2 rotate-45 border border-olive-deep/40 bg-bg-secondary" />
        <span className="font-serif italic text-base sm:text-lg tracking-widest text-olive-deep px-1">
          {monogram}
        </span>
        <div className="w-2 h-2 rotate-45 border border-olive-deep/40 bg-bg-secondary" />
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-champagne" />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={`flex items-center justify-center my-4 ${className}`}>
        <div className="h-[1px] w-16 bg-champagne/40" />
      </div>
    );
  }

  // Default 'floral' variant
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 gap-3 sm:gap-4 select-none ${className}`}>
      <div className="h-[1px] w-10 sm:w-24 bg-gradient-to-r from-transparent via-champagne to-sage-muted/70" />
      
      {/* Botanical floral line art SVG */}
      <svg 
        className="w-12 h-6 text-olive-deep/70 sm:w-16 sm:h-7" 
        viewBox="0 0 80 32" 
        fill="none" 
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Left leaf branch */}
        <path d="M40 16 C30 16 22 13 10 7" strokeWidth="1" strokeLinecap="round" />
        <path d="M26 14 C23 10 17 11 19 15 C21 17 26 15 26 14 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="0.8" />
        <path d="M16 10 C13 7 8 9 10 12 C12 14 16 11 16 10 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="0.8" />
        
        {/* Center floral rosette */}
        <circle cx="40" cy="16" r="3.5" fill="#A6844E" strokeWidth="1" />
        <circle cx="40" cy="16" r="1.5" fill="currentColor" />
        <circle cx="34" cy="16" r="1.5" fill="currentColor" fillOpacity="0.4" />
        <circle cx="46" cy="16" r="1.5" fill="currentColor" fillOpacity="0.4" />
        
        {/* Right leaf branch */}
        <path d="M40 16 C50 16 58 13 70 7" strokeWidth="1" strokeLinecap="round" />
        <path d="M54 14 C57 10 63 11 61 15 C59 17 54 15 54 14 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="0.8" />
        <path d="M64 10 C67 7 72 9 70 12 C68 14 64 11 64 10 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="0.8" />
      </svg>

      <div className="h-[1px] w-10 sm:w-24 bg-gradient-to-l from-transparent via-champagne to-sage-muted/70" />
    </div>
  );
};

