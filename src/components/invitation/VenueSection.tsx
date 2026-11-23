import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Navigation, Calendar, Clock, ExternalLink } from 'lucide-react';

interface VenueSectionProps {
  config: WeddingConfig;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ config }) => {
  const { wedding, invitation, couple } = config;

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-secondary overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={0.1}>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">
            Destination & Location
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-deep mt-2 font-normal">
            The Wedding Venue
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        {/* Venue Card */}
        <ScrollReveal delay={0.3}>
          <div className="bg-bg-primary rounded-sm p-8 sm:p-12 stationery-border-lg shadow-soft-card max-w-2xl mx-auto relative overflow-hidden">
            
            {/* Top Floral Accent */}
            <FloralDecoration position="center-crest" className="mb-4" />

            <span className="font-script text-2xl sm:text-3xl text-champagne-dark block">
              {wedding.city}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-olive-deep font-normal mt-1">
              {wedding.venue}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-md mx-auto mt-3 leading-relaxed">
              {wedding.address}
            </p>

            <DecorativeDivider variant="simple" className="my-6" />

            {/* Date & Time Recap */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-serif italic text-text-primary">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-olive-deep" />
                <span>{invitation.dateDisplay}</span>
              </div>
              <div className="hidden sm:inline text-champagne">•</div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-olive-deep" />
                <span>{invitation.timeDisplay}</span>
              </div>
            </div>

            {/* Get Directions CTA */}
            {wedding.mapsUrl && (
              <div className="mt-8">
                <a
                  href={wedding.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-olive-darker shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-deep/40"
                >
                  <Navigation className="w-4 h-4 text-champagne" />
                  <span>Get Directions on Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
