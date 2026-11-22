import React from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { FramedPhotograph } from '../ui/FramedPhotograph';
import { ScrollReveal } from '../animations/ScrollReveal';

interface HeroSectionProps {
  config: WeddingConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const { couple, bride, groom, wedding, invitation } = config;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between pt-16 pb-10 px-4 sm:px-6 overflow-hidden paper-texture">
      {/* Corner Botanical Sprigs */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-50 hidden sm:block">
        <FloralDecoration position="top-left" size="md" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none opacity-50 hidden sm:block">
        <FloralDecoration position="top-right" size="md" />
      </div>

      {/* Gentle center sunlight vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-champagne/15 via-transparent to-transparent pointer-events-none" />

      {/* Top Pretitle / Family Blessing */}
      <ScrollReveal delay={0.1} yOffset={15} className="w-full text-center max-w-xl mx-auto pt-4">
        <span className="inline-block text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-text-secondary border-b border-champagne/60 pb-1">
          {invitation.pretitle}
        </span>
      </ScrollReveal>

      {/* Main Couple Names & Typography */}
      <div className="w-full max-w-3xl mx-auto text-center my-auto py-6 sm:py-8 flex flex-col items-center">
        <ScrollReveal delay={0.2} yOffset={25}>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-primary tracking-tight leading-[1.15]">
            <span className="block text-olive-deep">{bride.name.split(' ')[0]}</span>
            <span className="font-script text-3xl sm:text-5xl md:text-6xl text-champagne-dark my-1 sm:my-2 block select-none">
              &
            </span>
            <span className="block text-olive-deep">{groom.name.split(' ')[0]}</span>
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
            />
          </ScrollReveal>
        )}

        {/* Wedding Date & City Banner */}
        <ScrollReveal delay={0.4} yOffset={15} className="mt-4 sm:mt-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-6 py-2.5 rounded-full bg-bg-secondary/70 border border-champagne/80 shadow-sm text-text-primary text-xs sm:text-sm font-serif italic tracking-wide">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-olive-deep" />
              {invitation.dateDisplay}
            </span>
            <span className="hidden sm:inline text-champagne-dark">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-olive-deep" />
              {wedding.city}
            </span>
          </div>
        </ScrollReveal>

        {/* Heartfelt Invitation Tagline */}
        <ScrollReveal delay={0.45} yOffset={15} className="mt-4 max-w-md px-4">
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed tracking-wide">
            {couple.tagline || invitation.subheading}
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom Scroll Indicator */}
      <ScrollReveal delay={0.5} yOffset={10} className="w-full flex flex-col items-center justify-center pt-2">
        <a
          href="#invitation-message"
          aria-label="Scroll to invitation message"
          className="group flex flex-col items-center gap-1 text-text-secondary/70 hover:text-olive-deep transition-colors"
        >
          <span className="text-[10px] uppercase font-sans tracking-[0.25em]">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-olive-deep" />
        </a>
      </ScrollReveal>
    </section>
  );
};

