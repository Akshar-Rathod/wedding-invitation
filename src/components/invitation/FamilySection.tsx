import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';

interface FamilySectionProps {
  config: WeddingConfig;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ config }) => {
  const { family } = config;

  if (!family || !family.enabled) {
    return null;
  }

  const { brideParents, groomParents, message } = family;

  if (!brideParents && !groomParents) {
    return null;
  }

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-bg-secondary overflow-hidden">
      <div className="max-w-3xl mx-auto text-center rounded-sm bg-bg-primary stationery-border-lg shadow-soft-card px-6 py-10 sm:px-12 sm:py-14">
        
        <ScrollReveal delay={0.1}>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">
            With Family Blessings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-olive-deep mt-2 font-normal">
            Honor & Gratitude
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DecorativeDivider variant="floral" />
        </ScrollReveal>

        {message && (
          <ScrollReveal delay={0.25}>
            <p className="font-serif italic text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mx-auto mb-10">
              "{message}"
            </p>
          </ScrollReveal>
        )}

        {/* Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-6">
          
          {/* Bride's Family */}
          {brideParents && (
            <ScrollReveal delay={0.3} yOffset={20}>
              <div className="bg-bg-secondary p-6 sm:p-8 rounded-sm stationery-border text-center">
                <span className="font-sans text-[10px] tracking-widest uppercase text-text-secondary block">
                  {brideParents.title || 'With Compliments From'}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl text-olive-deep font-normal mt-2">
                  {brideParents.names}
                </h3>

                {brideParents.grandparents && (
                  <p className="font-serif italic text-xs text-text-secondary mt-3 pt-3 border-t border-champagne/40">
                    {brideParents.grandparents}
                  </p>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Groom's Family */}
          {groomParents && (
            <ScrollReveal delay={0.35} yOffset={20}>
              <div className="bg-bg-secondary p-6 sm:p-8 rounded-sm stationery-border text-center">
                <span className="font-sans text-[10px] tracking-widest uppercase text-text-secondary block">
                  {groomParents.title || 'Warmly Invited By'}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-olive-deep font-normal mt-2">
                  {groomParents.names}
                </h3>

                {groomParents.grandparents && (
                  <p className="font-serif italic text-xs text-text-secondary mt-3 pt-3 border-t border-champagne/40">
                    {groomParents.grandparents}
                  </p>
                )}
              </div>
            </ScrollReveal>
          )}

        </div>

        <div className="mt-10">
          <FloralDecoration position="center-crest" />
        </div>

      </div>
    </section>
  );
};

