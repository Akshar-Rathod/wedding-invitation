import React, { useState } from 'react';
import { FloralDecoration } from './FloralDecoration';

interface FramedPhotographProps {
  src?: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape' | 'classic';
  objectPosition?: string;
  className?: string;
  monogram?: string;
  subtitle?: string;
}

export const FramedPhotograph: React.FC<FramedPhotographProps> = ({
  src,
  alt,
  aspectRatio = 'portrait',
  objectPosition = 'center center',
  className = '',
  monogram = 'A & K',
  subtitle,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    classic: 'aspect-[4/5]',
  }[aspectRatio];

  const hasValidImage = Boolean(src) && !imageError;

  return (
    <div className={`relative mx-auto max-w-sm sm:max-w-md w-full p-2.5 sm:p-3 bg-bg-secondary/70 rounded-sm shadow-soft-card border border-champagne/70 ${className}`}>
      {/* Outer editorial frame */}
      <div className="relative border border-olive-deep/20 p-2 sm:p-2.5 bg-bg-primary">
        {/* Corner decorative accents */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-olive-deep/60" />
        <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-olive-deep/60" />
        <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-olive-deep/60" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-olive-deep/60" />

        {/* Content area */}
        <div className={`relative overflow-hidden w-full ${aspectClass} bg-bg-secondary/40 flex items-center justify-center`}>
          {hasValidImage ? (
            <>
              <img
                src={src}
                alt={alt}
                onError={() => setImageError(true)}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                style={{ objectPosition }}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Subtle film grain & warm sunlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 via-transparent to-champagne/10 pointer-events-none" />
            </>
          ) : (
            /* Elegant typography + botanical fallback when no photo is uploaded */
            <div className="flex flex-col items-center justify-center p-6 text-center select-none w-full h-full bg-gradient-to-b from-bg-primary to-bg-secondary/50">
              <FloralDecoration position="center-crest" className="mb-2" />
              
              <div className="w-16 h-16 rounded-full border border-champagne/80 flex items-center justify-center my-3 bg-bg-primary/80 shadow-inner">
                <span className="font-serif italic text-2xl text-olive-deep tracking-wider">
                  {monogram}
                </span>
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-text-primary mt-1">
                {alt}
              </p>

              {subtitle && (
                <p className="font-sans text-xs tracking-widest uppercase text-text-secondary mt-1">
                  {subtitle}
                </p>
              )}

              <div className="mt-4 w-12 h-[1px] bg-champagne/60" />
            </div>
          )}
        </div>

        {/* Optional caption */}
        {subtitle && hasValidImage && (
          <div className="pt-2 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-text-secondary">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

