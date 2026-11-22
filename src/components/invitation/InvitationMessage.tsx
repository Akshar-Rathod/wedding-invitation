import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';

interface InvitationMessageProps {
  config: WeddingConfig;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ config }) => {
  const { invitation, couple } = config;

  return (
    <section 
      id="invitation-message"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-secondary/40 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ScrollReveal delay={0.1}>
          <FloralDecoration position="center-crest" className="mb-4" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <span className="font-script text-2xl sm:text-3xl text-champagne-dark block mb-2">
            In The Spirit of Love & Blessings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-olive-deep font-normal tracking-wide">
            {invitation.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="stationery-border p-8 sm:p-12 bg-bg-primary/95 rounded-sm shadow-soft-card max-w-xl mx-auto">
            <p className="font-serif italic text-base sm:text-xl md:text-2xl text-text-primary leading-relaxed sm:leading-loose">
              "{invitation.message}"
            </p>

            <div className="mt-6 pt-6 border-t border-champagne/40 flex flex-col items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-text-secondary">
                {invitation.dateDisplay}
              </span>
              <span className="font-sans text-xs text-text-secondary/80 mt-1">
                {invitation.timeDisplay}
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <DecorativeDivider variant="simple" />
        </ScrollReveal>
      </div>
    </section>
  );
};

