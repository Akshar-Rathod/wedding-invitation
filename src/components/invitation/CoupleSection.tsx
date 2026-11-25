import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FramedPhotograph } from '../ui/FramedPhotograph';
import { ScrollReveal } from '../animations/ScrollReveal';

interface CoupleSectionProps {
  config: WeddingConfig;
  viewSide?: 'bride' | 'groom'; // Determines which profile to show; defaults to bride
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ config, viewSide = 'bride' }) => {
  const { bride, groom, couple } = config;

  const renderBride = (
    <ScrollReveal delay={0.3} yOffset={25} className="flex flex-col items-center text-center">
      <div className="w-full max-w-xs sm:max-w-sm">
        <FramedPhotograph
          src={bride.image}
          alt={bride.name}
          aspectRatio="portrait"
          objectPosition={bride.imagePosition || 'center 20%'}
          monogram={bride.name[0] || 'B'}
          subtitle="The Bride"
          backTitle="From The Bride"
          backQuote="Grace in her heart, dreams in her eyes."
          backMessage="Cherishing sweet memories of home and entering this sacred chapter with gratitude, love, and the blessings of my beloved parents and family."
          backAuthor="Priyanka"
        />
      </div>
      <div className="mt-6 px-4">
        <span className="font-script text-3xl sm:text-4xl text-champagne-dark block">
          The Bride
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-olive-deep font-normal mt-0.5">{bride.name}</h3>
        {bride.parents && (
          <p className="font-serif italic text-sm sm:text-base text-text-primary/90 mt-1.5">{bride.parents}</p>
        )}
        {bride.bio && (
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mt-2.5 max-w-xs mx-auto">{bride.bio}</p>
        )}
      </div>
    </ScrollReveal>
  );

  const renderGroom = (
    <ScrollReveal delay={0.4} yOffset={25} className="flex flex-col items-center text-center">
      <div className="w-full max-w-xs sm:max-w-sm">
        <FramedPhotograph
          src={groom.image}
          alt={groom.name}
          aspectRatio="portrait"
          objectPosition={groom.imagePosition || 'center 20%'}
          monogram={groom.name[0] || 'G'}
          subtitle="The Groom"
          backTitle="From The Groom"
          backQuote="Walking hand in hand toward a bright tomorrow."
          backMessage="With the blessings of our elders and devotion in my heart, I step forward into this lifelong journey of love, honor, and togetherness."
          backAuthor={viewSide === 'groom' ? 'Parasbharthi' : 'Paras'}
        />
      </div>
      <div className="mt-6 px-4">
        <span className="font-script text-3xl sm:text-4xl text-champagne-dark block">
          The Groom
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-olive-deep font-normal mt-0.5">{groom.name}</h3>
        {groom.parents && (
          <p className="font-serif italic text-sm sm:text-base text-text-primary/90 mt-1.5">{groom.parents}</p>
        )}
        {groom.bio && (
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mt-2.5 max-w-xs mx-auto">{groom.bio}</p>
        )}
      </div>
    </ScrollReveal>
  );

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-primary overflow-hidden paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal delay={0.1}>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">Meet The Couple</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-olive-deep mt-2 font-normal">Two Hearts, One Journey</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DecorativeDivider variant="floral" />
          </ScrollReveal>

          {couple.story && (
            <ScrollReveal delay={0.25}>
              <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed italic">"{couple.story}"</p>
            </ScrollReveal>
          )}
        </div>

        {/* Editorial Couple Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 sm:gap-8 md:gap-6 items-start">
          {viewSide === 'bride' ? (
            <>
              {renderBride}
              <div className="hidden md:flex items-center justify-center pt-28 pointer-events-none" aria-hidden>
                <span className="font-script text-5xl text-champagne-dark select-none">&</span>
              </div>
              {renderGroom}
            </>
          ) : (
            <>
              {renderGroom}
              <div className="hidden md:flex items-center justify-center pt-28 pointer-events-none" aria-hidden>
                <span className="font-script text-5xl text-champagne-dark select-none">&</span>
              </div>
              {renderBride}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
