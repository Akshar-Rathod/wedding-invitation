import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Navigation, Calendar, Clock, ExternalLink, Home } from 'lucide-react';

interface VenueSectionProps {
  config: WeddingConfig;
  viewSide?: 'bride' | 'groom';
}

export const VenueSection: React.FC<VenueSectionProps> = ({ config, viewSide = 'bride' }) => {
  const { wedding, invitation, couple } = config;

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-secondary overflow-hidden paper-texture">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={0.1}>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">
            Destination & Location
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-deep mt-2 font-normal">
            {viewSide === 'groom' ? 'The Wedding Venues' : 'The Wedding Venue'}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        {/* ================= GROOM SIDE: BOTH VENUES ================= */}
        {viewSide === 'groom' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            
            {/* Venue 1: Wedding Venue (B.M.C. Party Plot) */}
            <ScrollReveal delay={0.3}>
              <div className="bg-bg-primary rounded-sm p-6 sm:p-8 stationery-border shadow-soft-card h-full flex flex-col justify-between">
                <div>
                  <FloralDecoration position="center-crest" className="mb-3 scale-90" />
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    The Wedding Venue
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-olive-deep font-normal mt-2">
                    B.M.C. Party Plot
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                    Ring Road, Opposite Shriji Party Plot, Bhavnagar, Gujarat
                  </p>

                  <div className="mt-4 pt-4 border-t border-champagne/40 space-y-1.5 text-xs font-serif text-text-primary">
                    <p className="font-medium text-olive-deep">Mandap Muhurat • Raas-Garba • Haldi</p>
                    <p className="font-medium text-olive-deep">Hast Melap • Swaruchi Bhojan</p>
                    <p className="text-text-secondary italic">December 13 & 14, 2026</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-champagne/40">
                  <a
                    href="https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs tracking-wider uppercase hover:bg-olive-darker shadow-sm transition-all duration-300"
                  >
                    <Navigation className="w-3.5 h-3.5 text-champagne" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Venue 2: Residence / Sangeet Venue (Shubh Sthal) */}
            <ScrollReveal delay={0.35}>
              <div className="bg-bg-primary rounded-sm p-6 sm:p-8 stationery-border shadow-soft-card h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full border border-champagne/70 flex items-center justify-center mx-auto mb-3 bg-bg-secondary/50">
                    <Home className="w-5 h-5 text-olive-deep" />
                  </div>

                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    Groom Residence (Shubh Sthal)
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-olive-deep font-normal mt-2">
                    Shree Rameshbharthi Residence
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                    Plot No. 5/A, Navjivan Society, Vitthalwadi, Bhavnagar, Gujarat
                  </p>

                  <div className="mt-4 pt-4 border-t border-champagne/40 space-y-1.5 text-xs font-serif text-text-primary">
                    <p className="font-medium text-olive-deep">Geet Gunjan (Sangeet Celebration)</p>
                    <p className="text-text-secondary italic">Saturday, December 12, 2026 • 4:00 PM onwards</p>
                    <p className="font-sans font-medium text-champagne-dark mt-2">Mo. +91 99244 69165</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-champagne/40">
                  <a
                    href="https://maps.google.com/?q=Navjivan+Society+Vitthalwadi+Bhavnagar+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs tracking-wider uppercase hover:bg-olive-darker shadow-sm transition-all duration-300"
                  >
                    <Navigation className="w-3.5 h-3.5 text-champagne" />
                    <span>View Residence Location</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        ) : (
          /* ================= BRIDE SIDE: SINGLE WEDDING VENUE ================= */
          <ScrollReveal delay={0.3}>
            <div className="bg-bg-primary rounded-sm p-8 sm:p-12 stationery-border-lg shadow-soft-card max-w-2xl mx-auto relative overflow-hidden">
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

              {wedding.mapsUrl && (
                <div className="mt-8">
                  <a
                    href={wedding.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-olive-darker shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-deep/40"
                  >
                    <Navigation className="w-3.5 h-3.5 text-champagne" />
                    <span>Get Directions on Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
