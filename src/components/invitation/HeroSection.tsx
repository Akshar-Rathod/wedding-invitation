import React from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { FramedPhotograph } from '../ui/FramedPhotograph';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SacredInvocation } from '../ui/SacredInvocation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface HeroSectionProps {
  config: WeddingConfig;
  viewSide?: 'bride' | 'groom';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, viewSide = 'bride' }) => {
  const { couple, bride, groom, wedding, invitation } = config;
  const prefersReducedMotion = useReducedMotion();

  const firstName1 = viewSide === 'groom' ? 'Parasbharthi' : bride.name.split(' ')[0];
  const firstName2 = viewSide === 'groom' ? 'Priyanka' : groom.name.split(' ')[0];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between pt-16 pb-10 px-4 sm:px-6 overflow-hidden paper-texture">
      {/* Corner Botanical Sprigs */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-35 sm:opacity-50">
        <FloralDecoration position="top-left" size="md" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none opacity-35 sm:opacity-50">
        <FloralDecoration position="top-right" size="md" />
      </div>

      {/* Gentle center sunlight vignette */}
      <div className="absolute inset-0 radial-vignette-hero pointer-events-none" />

      {/* Top Pretitle / Auspicious Invocations */}
      <ScrollReveal delay={0.1} yOffset={15} className="w-full text-center max-w-2xl mx-auto pt-2">
        <SacredInvocation viewSide={viewSide} />
        {viewSide === 'groom' && (
          <p className="font-devanagari text-[11px] sm:text-xs text-olive-deep/90 mt-2 tracking-wider">
            ॥ जय श्री हिंगळाज माँ ॥ • ॥ जय श्री कामाख्या माँ ॥ • ॥ जय श्री सत्याय माँ ॥ • ॥ जय श्री भुरखीयादादा ॥
          </p>
        )}
      </ScrollReveal>

      {/* Main Couple Names & Typography */}
      <div className="w-full max-w-3xl mx-auto text-center my-auto py-6 sm:py-8 flex flex-col items-center">
        <ScrollReveal delay={0.2} yOffset={25}>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-primary tracking-tight leading-[1.15]">
            <span className="block text-olive-deep">{firstName1}</span>
            <span className="font-script text-3xl sm:text-5xl md:text-6xl text-champagne-dark my-1 sm:my-2 block select-none">
              &
            </span>
            <span className="block text-olive-deep">{firstName2}</span>
          </h1>
        </ScrollReveal>

        {/* Decorative floral separator */}
        <ScrollReveal delay={0.3} yOffset={15} className="w-full">
          <DecorativeDivider variant="floral" />
        </ScrollReveal>

        {/* Optional Couple Photograph in Editorial Frame */}
        {couple.image && (
          <ScrollReveal delay={0.35} yOffset={20} className="w-full my-4">
            <FramedPhotograph
              src={couple.image}
              alt={couple.displayName}
              aspectRatio="classic"
              objectPosition={couple.imagePosition || 'center 30%'}
              monogram={couple.monogram}
              subtitle="Together in Love"
              backTitle="A Sacred Union"
              backQuote={
                viewSide === 'groom'
                  ? 'Two souls, one sacred path to forever.'
                  : 'Two souls, one sacred path to forever.'
              }
              backMessage={
                viewSide === 'groom'
                  ? 'With the divine blessings of Lord Shiva, Shree Kamakhya Mataji, Lord Ganesha, and our beloved families, we embark on this sacred journey of love, joy, and lifelong companionship.'
                  : 'With the divine blessings of Shree Ambaji Mataji, Lord Ganesha, and our beloved families, we embark on this sacred journey of love, joy, and lifelong companionship.'
              }
              backAuthor={viewSide === 'groom' ? 'Parasbharthi & Priyanka' : 'Priyanka & Paras'}
            />
          </ScrollReveal>
        )}

        {/* Wedding Date & City Banner */}
        <ScrollReveal delay={0.4} yOffset={15} className="mt-4 sm:mt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-6 py-2.5 rounded-full bg-bg-primary border border-champagne/80 shadow-soft-card text-text-primary text-xs sm:text-sm font-serif italic tracking-wide">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-olive-deep" />
              {invitation.dateDisplay}
            </span>
            <span className="hidden sm:inline text-champagne/60">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-olive-deep" />
              {wedding.city}
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Gentle Scroll Indicator */}
      <ScrollReveal delay={0.5} yOffset={10} className="pb-2">
        <a
          href="#invitation-message"
          aria-label="Scroll to invitation details"
          className="group flex flex-col items-center gap-1 text-text-secondary hover:text-olive-deep transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep rounded"
        >
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase font-light opacity-75 group-hover:opacity-100">
            View Details
          </span>
          <ChevronDown
            className={`w-4 h-4 text-champagne-dark group-hover:translate-y-0.5 transition-transform duration-300 ${
              prefersReducedMotion ? '' : 'motion-safe-bounce'
            }`}
          />
        </a>
      </ScrollReveal>
    </section>
  );
};
