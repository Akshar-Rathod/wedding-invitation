import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { useCountdown } from '../../hooks/useCountdown';
import { formatTimeNumber } from '../../utils/date';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Heart } from 'lucide-react';

interface CountdownProps {
  config: WeddingConfig;
}

export const Countdown: React.FC<CountdownProps> = ({ config }) => {
  const { wedding, couple } = config;
  const time = useCountdown(wedding.date);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-bg-secondary/60 border-y border-champagne/40 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        <ScrollReveal delay={0.1}>
          <span className="font-script text-2xl sm:text-3xl text-champagne-dark block">
            Counting Down The Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-olive-deep font-normal mt-1">
            Until We Say "I Do"
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        {/* Live Countdown Display or Expired State */}
        <ScrollReveal delay={0.3}>
          {time.isExpired ? (
            <div className="p-8 sm:p-10 rounded-sm bg-bg-primary/95 stationery-border max-w-md mx-auto shadow-soft-card">
              <Heart className="w-8 h-8 text-olive-deep mx-auto mb-3 fill-champagne/40" />
              <h3 className="font-serif text-2xl sm:text-3xl text-olive-deep">
                The Celebration Has Begun!
              </h3>
              <p className="font-sans text-sm text-text-secondary mt-2">
                Thank you for showering {couple.displayName} with your eternal blessings and love.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-4 gap-1.5 sm:gap-6 max-w-xl mx-auto"
              role="timer"
              aria-live="polite"
              aria-label="Countdown to wedding"
            >
              {/* Days */}
              <div className="flex flex-col items-center p-2.5 sm:p-6 bg-bg-primary rounded-sm stationery-border shadow-soft-card min-w-0">
                <span className="font-serif text-xl min-[380px]:text-2xl sm:text-5xl text-olive-deep font-medium tabular-nums leading-none">
                  {formatTimeNumber(time.days)}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-text-secondary mt-1 sm:mt-2">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center p-2.5 sm:p-6 bg-bg-primary rounded-sm stationery-border shadow-soft-card min-w-0">
                <span className="font-serif text-xl min-[380px]:text-2xl sm:text-5xl text-olive-deep font-medium tabular-nums leading-none">
                  {formatTimeNumber(time.hours)}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-text-secondary mt-1 sm:mt-2">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center p-2.5 sm:p-6 bg-bg-primary rounded-sm stationery-border shadow-soft-card min-w-0">
                <span className="font-serif text-xl min-[380px]:text-2xl sm:text-5xl text-olive-deep font-medium tabular-nums leading-none">
                  {formatTimeNumber(time.minutes)}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-text-secondary mt-1 sm:mt-2">
                  Mins
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center p-2.5 sm:p-6 bg-bg-primary rounded-sm stationery-border shadow-soft-card min-w-0">
                <span className="font-serif text-xl min-[380px]:text-2xl sm:text-5xl text-olive-deep font-medium tabular-nums leading-none">
                  {formatTimeNumber(time.seconds)}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-text-secondary mt-1 sm:mt-2">
                  Secs
                </span>
              </div>

            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
};

