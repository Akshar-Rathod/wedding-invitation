import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingConfig } from '../../types/wedding';
import { FloralDecoration } from '../ui/FloralDecoration';
import { SacredInvocation } from '../ui/SacredInvocation';
import { FlyingBirds } from '../animations/FlyingBirds';
import { Sparkles, ArrowRight } from 'lucide-react';

interface InvitationEnvelopeProps {
  config: WeddingConfig;
  onOpenComplete: (musicAllowed: boolean) => void;
  onOpenStart?: (musicAllowed: boolean) => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({
  config,
  onOpenComplete,
  onOpenStart,
}) => {
  // Opening steps: 'closed' -> 'unsealing' -> 'flap-open' -> 'card-rising' -> 'done'
  const [stage, setStage] = useState<'closed' | 'unsealing' | 'flap-open' | 'card-rising' | 'done'>('closed');
  const handleOpen = () => {
    if (stage !== 'closed') return;

    // Immediately trigger music on user click to satisfy mobile browser autoplay requirements
    onOpenStart?.(true);

    setStage('unsealing');

    // Sequence the luxurious physical unfolding
    setTimeout(() => {
      setStage('flap-open');
    }, 600);

    setTimeout(() => {
      setStage('card-rising');
    }, 1400);

    setTimeout(() => {
      setStage('done');
      onOpenComplete(true);
    }, 2800);
  };

  if (stage === 'done') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary px-4 py-8 overflow-hidden select-none paper-texture"
      >
        {/* Soft background glow & botanical atmosphere */}
        <div className="absolute inset-0 radial-vignette-envelope pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-secondary/35 pointer-events-none" />

        {/* Graceful flying birds */}
        <FlyingBirds count={4} />

        {/* Delicate floating background motifs */}
        <div className="absolute top-6 left-6 pointer-events-none opacity-40">
          <FloralDecoration position="top-left" size="lg" />
        </div>
        <div className="absolute top-6 right-6 pointer-events-none opacity-40">
          <FloralDecoration position="top-right" size="lg" />
        </div>
        <div className="absolute bottom-6 left-6 pointer-events-none opacity-40">
          <FloralDecoration position="bottom-left" size="lg" />
        </div>
        <div className="absolute bottom-6 right-6 pointer-events-none opacity-40">
          <FloralDecoration position="bottom-right" size="lg" />
        </div>

        {/* Envelope Container */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[240px] sm:h-[280px] perspective-envelope my-auto">
          {/* Main Envelope Body */}
          <div className="relative w-full h-full bg-gradient-to-br from-[#E2D6C2] via-[#DDD2BE] to-[#CFC3AB] rounded-sm shadow-envelope border border-[#A6844E]/80 overflow-visible flex items-center justify-center [transform-style:preserve-3d]">

            {/* Interior lining pattern (visible when flap opens) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4C8B2] to-[#E0D4C0] opacity-90 rounded-sm overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#59604B_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Rising Invitation Card Inside */}
            <motion.div
              initial={{ y: 0, scale: 0.95 }}
              animate={
                stage === 'card-rising'
                  ? { y: -160, scale: 1.02, zIndex: 30 }
                  : { y: 0, scale: 0.95, zIndex: 10 }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[92%] h-[92%] bg-bg-primary rounded-sm shadow-lg border border-champagne/90 p-5 flex flex-col items-center justify-center text-center stationery-border"
            >
              <SacredInvocation compact />

              <div className="font-serif text-2xl sm:text-3xl text-olive-deep mt-2 font-medium">
                {config.couple.displayName}
              </div>

              <div className="font-script text-xl text-champagne-dark my-1">
                Save Our Date
              </div>

              <div className="text-xs sm:text-sm font-serif italic text-text-primary tracking-wide">
                {config.invitation.dateDisplay}
              </div>
            </motion.div>

            {/* Left & Right Envelope Folds */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(0% 0%, 50% 55%, 0% 100%)',
                background: 'linear-gradient(118deg, #EDE4D0 0%, #D9CDB8 55%, #C4B8A2 100%)',
                borderRight: '1px solid rgba(166,132,78,0.55)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(100% 0%, 50% 55%, 100% 100%)',
                background: 'linear-gradient(242deg, #EDE4D0 0%, #D9CDB8 50%, #C4B8A2 100%)',
                borderLeft: '1px solid rgba(166,132,78,0.55)',
              }}
            />

            {/* Bottom Envelope Fold */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
                background: 'linear-gradient(0deg, #EDE4D0 0%, #E6DCC8 45%, #D4C8B0 100%)',
                borderTop: '1px solid rgba(166,132,78,0.65)',
              }}
            />

            {/* Top Flap (Animated opening upward) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={
                stage === 'flap-open' || stage === 'card-rising'
                  ? { rotateX: 180, zIndex: 5 }
                  : { rotateX: 0, zIndex: 25 }
              }
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformOrigin: 'top center',
                clipPath: 'polygon(0% 0%, 50% 55%, 100% 0%)',
              }}
              className="absolute inset-0 bg-gradient-to-b from-[#EDE4D0] via-[#D9CDB6] to-[#C8BCA6] shadow-md border-b border-champagne/70"
            />

            {/* Wax Seal Centered over the flap point */}
            <motion.button
              type="button"
              initial={{ scale: 1, opacity: 1 }}
              animate={
                stage === 'unsealing'
                  ? { scale: [1, 1.25, 1.15], rotate: [0, -8, 8, 0] }
                  : stage === 'flap-open' || stage === 'card-rising'
                  ? { scale: 0, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.6 }}
              disabled={stage !== 'closed'}
              aria-label="Open invitation wax seal"
              className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/50 rounded-full"
              onClick={handleOpen}
            >
              {/* Luxury Wax Seal Button */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#727B62] via-[#59604B] to-[#3F4435] shadow-seal flex items-center justify-center border-2 border-[#8F987D]/50 hover:scale-105 active:scale-95 transition-transform">
                {/* Organic scalloped wax edge */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#A6844E]/40" />

                {/* Monogram Seal Inset */}
                <span className="font-serif italic font-semibold text-lg sm:text-xl text-[#F8F5EF] tracking-wider drop-shadow-sm select-none">
                  {config.couple.monogram}
                </span>

                {/* Subtle shine mark */}
                <div className="absolute top-2 left-3 w-3 h-2 rounded-full bg-white/20 rotate-[-30deg]" />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Envelope Caption & Controls */}
        <div className="relative z-30 mt-8 sm:mt-10 flex flex-col items-center text-center max-w-sm px-4">
          <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-text-secondary">
            {config.invitation.heading}
          </p>

          <h1 className="font-serif text-2xl sm:text-3xl text-olive-deep mt-1 font-normal tracking-wide">
            {config.couple.displayName}
          </h1>

          <p className="font-serif italic text-sm text-text-secondary mt-1">
            {config.wedding.venue} • {config.wedding.city}
          </p>

          {/* Action Button: Open Invitation */}
          <div className="mt-6 flex flex-col items-center gap-3 w-full">
            <button
              onClick={handleOpen}
              disabled={stage !== 'closed'}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-olive-darker shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/40 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Sparkles className="w-4 h-4 text-champagne" />
              <span>Open Invitation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

