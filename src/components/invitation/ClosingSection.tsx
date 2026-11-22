import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ArrowUp, Heart } from 'lucide-react';

interface ClosingSectionProps {
  config: WeddingConfig;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ config }) => {
  const { couple, wedding, invitation } = config;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-24 sm:py-32 px-4 sm:px-6 bg-bg-primary overflow-hidden text-center paper-texture border-t border-champagne/40">
      
      {/* Decorative Botanical Corners */}
      <div className="absolute bottom-6 left-6 opacity-40 pointer-events-none hidden sm:block">
        <FloralDecoration position="bottom-left" size="lg" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-40 pointer-events-none hidden sm:block">
        <FloralDecoration position="bottom-right" size="lg" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        <ScrollReveal delay={0.1}>
          <FloralDecoration position="center-crest" className="mb-4" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <span className="font-script text-3xl sm:text-4xl text-champagne-dark block mb-2">
            With Love & Endless Gratitude
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-olive-deep font-normal tracking-wide">
            We Can't Wait to Celebrate With You
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-serif italic text-base sm:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
            {invitation.closingMessage || "Your presence and warm blessings will make our special day truly unforgettable."}
          </p>

          <div className="mt-6 font-serif text-2xl sm:text-3xl text-olive-deep font-medium">
            {couple.displayName}
          </div>

          <p className="font-sans text-xs tracking-widest uppercase text-text-secondary mt-1">
            {invitation.dateDisplay} • {wedding.city}
          </p>
        </ScrollReveal>

        {/* Back to top button */}
        <ScrollReveal delay={0.4} className="mt-12">
          <button
            onClick={scrollToTop}
            type="button"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-bg-secondary/80 border border-champagne/80 text-olive-deep text-xs font-sans tracking-widest uppercase hover:bg-bg-primary hover:border-olive-deep hover:shadow-sm transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </ScrollReveal>

        <div className="mt-14 pt-8 border-t border-champagne/30 text-text-secondary/70 text-[11px] font-sans tracking-wider">
          <p className="flex items-center justify-center gap-1.5">
            <span>Crafted with love for</span>
            <span className="text-olive-deep font-serif italic text-sm">{couple.displayName}</span>
            <Heart className="w-3 h-3 text-olive-deep fill-champagne/60 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};

