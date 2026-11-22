import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';
import { 
  Sun, 
  Sparkles, 
  Music, 
  Heart, 
  Flower2, 
  Clock, 
  MapPin, 
  Shirt, 
  Navigation 
} from 'lucide-react';

interface WeddingEventsProps {
  config: WeddingConfig;
}

export const WeddingEvents: React.FC<WeddingEventsProps> = ({ config }) => {
  const activeEvents = config.events.filter((e) => e.enabled !== false);

  if (activeEvents.length === 0) {
    return null;
  }

  const renderEventIcon = (type?: string) => {
    switch (type) {
      case 'sun':
        return <Sun className="w-5 h-5 text-champagne-dark" />;
      case 'music':
        return <Music className="w-5 h-5 text-champagne-dark" />;
      case 'flower':
        return <Flower2 className="w-5 h-5 text-champagne-dark" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-champagne-dark" />;
      case 'ring':
      case 'heart':
      default:
        return <Heart className="w-5 h-5 text-champagne-dark" />;
    }
  };

  return (
    <section id="events" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-primary overflow-hidden paper-texture">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
          <ScrollReveal delay={0.1}>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">
              Wedding Itinerary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-deep mt-2 font-normal">
              The Celebrations
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DecorativeDivider variant="floral" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
              We warmly invite you to partake in each of these joyful chapters as we celebrate our union.
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Event List */}
        <div className="space-y-12 sm:space-y-16">
          {activeEvents.map((evt, index) => {
            return (
              <ScrollReveal key={evt.id} delay={0.15 * (index % 3)} yOffset={30}>
                <div className="relative bg-bg-primary rounded-sm p-6 sm:p-10 stationery-border shadow-soft-card overflow-hidden">
                  
                  {/* Subtle Corner Florals */}
                  <div className="absolute top-2 left-2 opacity-35 pointer-events-none">
                    <FloralDecoration position="top-left" size="sm" />
                  </div>
                  <div className="absolute top-2 right-2 opacity-35 pointer-events-none">
                    <FloralDecoration position="top-right" size="sm" />
                  </div>

                  {/* Header Row: Date & Ceremony Title */}
                  <div className="text-center relative z-10">
                    <div className="inline-flex items-center justify-center gap-2 p-2 rounded-full bg-bg-secondary/80 border border-champagne/60 mb-3 shadow-inner">
                      {renderEventIcon(evt.icon)}
                    </div>

                    <div className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-text-secondary font-medium">
                      {evt.day} • {evt.date}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-olive-deep font-normal mt-1">
                      {evt.title}
                    </h3>

                    {evt.tagline && (
                      <p className="font-script text-xl sm:text-2xl text-champagne-dark mt-0.5">
                        {evt.tagline}
                      </p>
                    )}

                    <DecorativeDivider variant="simple" className="my-4" />
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-text-primary">
                    
                    {/* Timing & Dress Code */}
                    <div className="flex flex-col gap-3.5 bg-bg-secondary/40 p-4 sm:p-5 rounded-sm border border-champagne/40">
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-olive-deep mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block font-sans text-[10px] tracking-wider uppercase text-text-secondary">
                            Time
                          </span>
                          <span className="font-serif text-sm sm:text-base text-text-primary">
                            {evt.startTime} {evt.endTime ? `to ${evt.endTime}` : ''}
                          </span>
                        </div>
                      </div>

                      {evt.dressCode && (
                        <div className="flex items-start gap-3 border-t border-champagne/30 pt-3">
                          <Shirt className="w-4 h-4 text-olive-deep mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="block font-sans text-[10px] tracking-wider uppercase text-text-secondary">
                              Attire & Dress Code
                            </span>
                            <span className="font-sans text-xs sm:text-sm text-text-primary font-medium">
                              {evt.dressCode}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Venue & Directions */}
                    <div className="flex flex-col justify-between gap-3 bg-bg-secondary/40 p-4 sm:p-5 rounded-sm border border-champagne/40">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-olive-deep mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block font-sans text-[10px] tracking-wider uppercase text-text-secondary">
                            Location
                          </span>
                          <span className="font-serif text-sm sm:text-base text-text-primary font-medium block">
                            {evt.venue}
                          </span>
                          <span className="font-sans text-xs text-text-secondary mt-0.5 block leading-relaxed">
                            {evt.address}
                          </span>
                        </div>
                      </div>

                      {evt.mapsUrl && (
                        <div className="pt-2">
                          <a
                            href={evt.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase text-olive-deep hover:text-olive-darker font-medium underline underline-offset-4 transition-colors"
                          >
                            <Navigation className="w-3.5 h-3.5" />
                            <span>View on Map</span>
                          </a>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Description note */}
                  {evt.description && (
                    <div className="mt-5 text-center px-4">
                      <p className="font-serif italic text-xs sm:text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
                        "{evt.description}"
                      </p>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
