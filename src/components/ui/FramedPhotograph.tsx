import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import { FloralDecoration } from './FloralDecoration';

interface FramedPhotographProps {
  src?: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape' | 'classic';
  objectPosition?: string;
  className?: string;
  monogram?: string;
  subtitle?: string;
  backTitle?: string;
  backQuote?: string;
  backMessage?: string;
  backAuthor?: string;
}

export const FramedPhotograph: React.FC<FramedPhotographProps> = ({
  src,
  alt,
  aspectRatio = 'portrait',
  objectPosition = 'center center',
  className = '',
  monogram = 'A & K',
  subtitle,
  backTitle,
  backQuote,
  backMessage,
  backAuthor,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    classic: 'aspect-[4/5]',
  }[aspectRatio];

  const hasValidImage = Boolean(src) && !imageError;

  const defaultQuote = backQuote || 'Two souls, one sacred journey.';
  const defaultMessage =
    backMessage ||
    'With the divine blessings of Shree Ambaji Mataji, Lord Ganesha, and our beloved elders, we embark on this sacred path of love, devotion, and togetherness.';
  const defaultTitle = backTitle || (subtitle ? `${subtitle}` : 'A Sacred Bond');

  return (
    <div
      className={`relative mx-auto max-w-sm sm:max-w-md w-full perspective-1000 select-none cursor-pointer group ${className}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${alt}. Click to flip photograph and read card.`}
    >
      <motion.div
        className="relative w-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* ================= FRONT SIDE (PHOTO) ================= */}
        <div className="relative w-full p-2.5 sm:p-3 bg-bg-secondary/70 rounded-sm shadow-soft-card border border-champagne/70 backface-hidden">
          {/* Outer editorial frame */}
          <div className="relative border border-olive-deep/20 p-2 sm:p-2.5 bg-bg-primary">
            {/* Corner decorative accents */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-olive-deep/60" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-olive-deep/60" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-olive-deep/60" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-olive-deep/60" />

            {/* Content area */}
            <div
              className={`relative overflow-hidden w-full ${aspectClass} bg-bg-secondary/40 flex items-center justify-center`}
            >
              {hasValidImage ? (
                <>
                  {!isLoaded && (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary animate-pulse"
                      aria-hidden
                    />
                  )}
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

              {/* Floating "Tap to flip" pill badge */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-primary/90 backdrop-blur-md border border-champagne/80 shadow-md text-[10px] font-sans tracking-wider uppercase text-olive-deep group-hover:scale-105 transition-transform">
                <RotateCw className="w-3 h-3 text-champagne-dark" />
                <span>Tap to flip</span>
              </div>
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

        {/* ================= BACK SIDE (MESSAGE CARD) ================= */}
        <div className="absolute inset-0 w-full h-full p-2.5 sm:p-3 bg-bg-secondary/70 rounded-sm shadow-soft-card border border-champagne/70 backface-hidden rotate-y-180 flex flex-col">
          <div className="relative border border-olive-deep/20 p-4 sm:p-6 bg-bg-primary w-full h-full flex flex-col justify-between items-center text-center paper-texture">
            {/* Corner decorative accents */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-olive-deep/60" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-olive-deep/60" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-olive-deep/60" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-olive-deep/60" />

            {/* Top decorative header */}
            <div className="pt-1 flex flex-col items-center">
              <FloralDecoration position="center-crest" className="scale-75 mb-1 opacity-80" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-champagne-dark font-medium block">
                {defaultTitle}
              </span>
              <div className="w-12 h-[1px] bg-champagne/60 mt-1" />
            </div>

            {/* Middle Message Content */}
            <div className="my-auto px-2 py-3 flex flex-col items-center justify-center">
              {defaultQuote && (
                <p className="font-serif italic text-base sm:text-lg text-olive-deep leading-snug mb-2 sm:mb-3">
                  "{defaultQuote}"
                </p>
              )}
              <p className="font-serif text-xs sm:text-sm text-text-primary/90 leading-relaxed max-w-xs mx-auto">
                {defaultMessage}
              </p>
              {backAuthor && (
                <span className="font-script text-2xl sm:text-3xl text-champagne-dark block mt-2 sm:mt-3">
                  — {backAuthor}
                </span>
              )}
            </div>

            {/* Bottom Bar: Monogram & Flip Back Badge */}
            <div className="w-full pt-2 border-t border-champagne/40 flex items-center justify-between px-2 text-text-secondary">
              <span className="font-serif italic text-xs tracking-wider">
                {monogram}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-sans tracking-wider uppercase text-olive-deep">
                <RotateCw className="w-2.5 h-2.5 text-champagne-dark" />
                <span>Tap to view photo</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
