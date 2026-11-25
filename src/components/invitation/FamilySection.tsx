import React from 'react';
import { WeddingConfig } from '../../types/wedding';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';

interface FamilySectionProps {
  config: WeddingConfig;
  viewSide?: 'bride' | 'groom';
}

export const FamilySection: React.FC<FamilySectionProps> = ({ config, viewSide = 'bride' }) => {
  const { family } = config;

  if (!family || !family.enabled) {
    return null;
  }

  const { message } = family;

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-bg-secondary overflow-hidden paper-texture">
      <div className="max-w-5xl mx-auto text-center rounded-sm bg-bg-primary stationery-border-lg shadow-soft-card px-6 py-10 sm:px-12 sm:py-14">
        
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
            <p className="font-serif italic text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              "{message}"
            </p>
          </ScrollReveal>
        )}

        {/* ================= BRIDE SIDE: RAJPURA FAMILY & MOSAAD PAKSH ================= */}
        {viewSide === 'bride' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-6 text-left sm:text-center">
            
            {/* Card 1: Rajpura Parivar (Ghar Vala) */}
            <ScrollReveal delay={0.3} yOffset={20}>
              <div className="bg-bg-secondary/70 p-6 sm:p-8 rounded-sm stationery-border text-center flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    With Compliments & Blessings From
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-olive-deep font-normal mt-2">
                    Mrs. Jayshreeben & Mr. Daksheshbhai Rajpura
                  </h3>

                  <div className="mt-3 pt-3 border-t border-champagne/40">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Grandparents (દાદા - દાદી)
                    </span>
                    <p className="font-serif italic text-xs sm:text-sm text-text-secondary mt-1">
                      Blessed by Shree Shivlal Jeramdas Rajpura & Smt. Ramilaben Shivlal
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-champagne/30">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Uncle & Aunt (કાકા - કાકી)
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-text-secondary mt-1">
                      Mr. Jigneshbhai Shivlal Rajpura & Mrs. Bhaviniben Jigneshbhai
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-champagne/30">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Brothers & Sisters (સ્નેહાધીન)
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-olive-deep font-medium mt-1">
                      Krunal Daksheshbhai Rajpura <span className="text-[11px] font-sans text-text-secondary font-normal">(Brother)</span>
                    </p>
                    <p className="font-serif text-xs sm:text-sm text-olive-deep font-medium mt-0.5">
                      Vidita Jigneshbhai • Vrushti Jigneshbhai
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-champagne/40">
                  <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary">Firm: </span>
                  <span className="font-serif text-sm sm:text-base text-olive-deep font-medium">Ashirvad Jewellers</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Mosaad Paksh (Munjpara Parivar) */}
            <ScrollReveal delay={0.35} yOffset={20}>
              <div className="bg-bg-secondary/70 p-6 sm:p-8 rounded-sm stationery-border text-center flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    Mosaad Paksh • Maternal Family
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-olive-deep font-normal mt-2">
                    Munjpara Parivar
                  </h3>

                  <div className="mt-3 pt-3 border-t border-champagne/40">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Akhand Smruti (Maternal Grandparents)
                    </span>
                    <p className="font-serif italic text-xs sm:text-sm text-text-secondary mt-1">
                      Late Shree Chunilal Pranlal Munjpara & Late Smt. Kusumben Chunilal Munjpara
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-champagne/30">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Maternal Uncles & Aunts (Mama - Mami)
                    </span>
                    <div className="font-serif text-xs sm:text-sm text-text-secondary mt-1.5 space-y-1">
                      <p>Shree Bharatbhai Chunilal Munjpara & Smt. Nipaben Bharatbhai</p>
                      <p>Shree Manishbhai Chunilal Munjpara & Late Smt. Payalben Manishbhai</p>
                      <p>Shree Nikunjbhai Chunilal Munjpara</p>
                      <p>Shree Sanjaybhai Chunilal Munjpara</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-champagne/40">
                  <span className="font-script text-xl text-champagne-dark">
                    Rudu Mameru Shobhavshe
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        )}

        {/* ================= GROOM SIDE: GOSWAMI FAMILY & MOSAAD PAKSH ================= */}
        {viewSide === 'groom' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 text-left sm:text-center">
            
            {/* Groom Card 1: Main Family (Parents & Core Family) */}
            <ScrollReveal delay={0.25} yOffset={20}>
              <div className="bg-bg-secondary/70 p-5 sm:p-6 rounded-sm stationery-border text-center flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    Warmly Invited By
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl text-olive-deep font-normal mt-2 leading-snug">
                    Mrs. Ritaben &<br />Mr. Rameshbharthi Balabharthi Goswami
                  </h3>
                  <p className="font-sans text-[11px] tracking-wider text-text-secondary mt-0.5">
                    Bordi (Currently Bhavnagar)
                  </p>

                  <div className="mt-3 pt-3 border-t border-champagne/40">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Grandparents' Blessings
                    </span>
                    <p className="font-serif italic text-xs text-text-secondary mt-1">
                      With respectful blessings from Late Shree Balabharthi Bhupatbharthi Goswami & Elders
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-champagne/30 text-xs font-serif text-text-secondary space-y-2">
                    <div>
                      <span className="font-sans text-[10px] tracking-wider uppercase text-champagne-dark block">
                        Sister & Brother-in-law
                      </span>
                      <p>Mrs. Hinaliben & Mr. Vivekparigiri Goswami (Navagam Badeli)</p>
                    </div>

                    <div className="pt-2 border-t border-champagne/20">
                      <span className="font-sans text-[10px] tracking-wider uppercase text-champagne-dark block">
                        Paternal Aunt & Uncle
                      </span>
                      <p>Mrs. Gitaben & Mr. Niteshgiri Goswami (Sidsar)</p>
                      <p className="italic text-[11px] text-olive-deep mt-0.5">Nephews: Tulsi • Chandan • Naman</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-champagne/40 text-[11px] font-sans text-text-secondary">
                  <p className="font-serif font-medium text-olive-deep">Residence (Shubh Sthal):</p>
                  <p>Plot No. 5/A, Navjivan Society, Vitthalwadi, Bhavnagar</p>
                  <p className="font-sans font-medium text-champagne-dark mt-0.5">Mo. 99244 69165</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Groom Card 2: Revered Elders & Family */}
            <ScrollReveal delay={0.3} yOffset={20}>
              <div className="bg-bg-secondary/70 p-5 sm:p-6 rounded-sm stationery-border text-center flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    Revered Elders & Family
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl text-olive-deep font-normal mt-2">
                    Goswami Parivar
                  </h3>

                  <div className="mt-3 pt-2.5 border-t border-champagne/40">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Akhand Smruti (Late Elders)
                    </span>
                    <p className="font-serif italic text-[11px] text-text-secondary mt-1 leading-relaxed">
                      Late Shree Batukbharthi • Late Shree Balabharthi<br />
                      Late Shree Panchambharthi • Late Shree Shantibharthi<br />
                      Late Shree Gunvantbharthi • Late Shree Himatbharthi
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-champagne/30">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Family Elders & Members
                    </span>
                    <p className="font-serif text-[11px] text-text-secondary mt-1 leading-relaxed">
                      Shree Shankarbharthi • Shree Hasubharthi • Shree Jaysukhbharthi<br />
                      Shree Jigneshbharthi • Shree Shaileshbharthi • Shree Maheshbharthi<br />
                      Shree Chandubharthi • Shree Atulbharthi • Shree Vijaybharthi<br />
                      Shree Darshanbharthi • Shree Bhautikbharthi • Shree Tusharbharthi • Shree Harshbharthi
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-champagne/40">
                  <span className="font-sans text-[10px] tracking-wider uppercase text-champagne-dark block">
                    With Best Compliments
                  </span>
                  <p className="font-serif text-xs text-olive-deep mt-1 font-medium leading-relaxed">
                    Shree Rajbharthi • Prathambharthi • Vaibhavbharthi • Ravibharthi • Jaybharthi • Kishivbharthi • Dhruvinbharthi
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Groom Card 3: Maternal Family (Mosaad Paksh) */}
            <ScrollReveal delay={0.35} yOffset={20}>
              <div className="bg-bg-secondary/70 p-5 sm:p-6 rounded-sm stationery-border text-center flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="font-sans text-[11px] tracking-widest uppercase text-champagne-dark font-semibold block">
                    Maternal Family • Mosaad Paksh
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl text-olive-deep font-normal mt-2">
                    Goswami Family
                  </h3>
                  <p className="font-sans text-[10px] tracking-wider uppercase text-text-secondary mt-0.5">
                    Bhavnagar & Rupavati
                  </p>

                  <div className="mt-3 pt-3 border-t border-champagne/40">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Bhavnagar Mosaad Family
                    </span>
                    <div className="font-serif text-xs text-text-secondary mt-1 space-y-0.5">
                      <p>Shree Chaturgiri Dolatgiri Goswami</p>
                      <p>Shree Shaileshgiri Chaturgiri Goswami</p>
                      <p>Shree Niteshgiri Chaturgiri Goswami</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-champagne/30">
                    <span className="font-sans text-[10px] tracking-wider uppercase text-text-secondary block">
                      Rupavati Mosaad Family
                    </span>
                    <div className="font-serif text-xs text-text-secondary mt-1 space-y-0.5">
                      <p>Shree Maheshgiri Vajegiri Goswami</p>
                      <p>Shree Bharatgiri Vajegiri Goswami</p>
                      <p>Shree Ashokgiri Vajegiri Goswami</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-champagne/40">
                  <span className="font-script text-lg text-champagne-dark">
                    Rudu Mosaad Shobhavshe
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        )}

        <div className="mt-10">
          <FloralDecoration position="center-crest" />
        </div>

      </div>
    </section>
  );
};
