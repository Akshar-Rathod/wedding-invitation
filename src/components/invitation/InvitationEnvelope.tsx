import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingConfig } from '../../types/wedding';
import { FloralDecoration } from '../ui/FloralDecoration';
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
  const [playMusicOnOpen, setPlayMusicOnOpen] = useState(true);

  const handleOpen = () => {
    if (stage !== 'closed') return;

    // Immediately trigger music on user click to satisfy mobile browser autoplay requirements
    if (playMusicOnOpen) {
      onOpenStart?.(true);
    }

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
      onOpenComplete(playMusicOnOpen);
    }, 2800);
  };

  const handleSkip = () => {
    if (playMusicOnOpen) {
      onOpenStart?.(true);
    }
    setStage('done');
    onOpenComplete(playMusicOnOpen);
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
        <div className="absolute inset-0 bg-radial-gradient from-champagne/20 via-transparent to-bg-secondary/40 pointer-events-none" />

        {/* Graceful flying birds */}
        <FlyingBirds count={5} />

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
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[240px] sm:h-[280px] perspective-1000 my-auto">
          {/* Main Envelope Body */}
          <div className="relative w-full h-full bg-[#E8E1D3] rounded-sm shadow-envelope border border-[#D9C6A5]/80 overflow-visible flex items-center justify-center">
            
            {/* Interior lining pattern (visible when flap opens) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E2D8C6] to-[#EAE3D6] opacity-90 rounded-sm overflow-hidden">
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
              <div className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-text-secondary">
                {config.invitation.pretitle}
              </div>

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
                backgroundColor: '#EDE6D8',
                borderRight: '1px solid rgba(217,198,165,0.4)',
              }}
            />
            <div 
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(100% 0%, 50% 55%, 100% 100%)',
                backgroundColor: '#EDE6D8',
                borderLeft: '1px solid rgba(217,198,165,0.4)',
              }}
            />

            {/* Bottom Envelope Fold */}
            <div 
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
                backgroundColor: '#F3EDE1',
                borderTop: '1px solid rgba(217,198,165,0.5)',
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
              className="absolute inset-0 bg-[#E5DCcb] shadow-sm border-b border-champagne"
            />

            {/* Wax Seal Centered over the flap point */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={
                stage === 'unsealing'
                  ? { scale: [1, 1.25, 1.15], rotate: [0, -8, 8, 0] }
                  : stage === 'flap-open' || stage === 'card-rising'
                  ? { scale: 0, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.6 }}
              className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer"
              onClick={handleOpen}
            >
              {/* Luxury Wax Seal Button */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#727B62] via-[#59604B] to-[#3F4435] shadow-seal flex items-center justify-center border-2 border-[#8F987D]/50 hover:scale-105 active:scale-95 transition-transform">
                {/* Organic scalloped wax edge */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#D9C6A5]/40" />
                
                {/* Monogram Seal Inset */}
                <span className="font-serif italic font-semibold text-lg sm:text-xl text-[#F8F5EF] tracking-wider drop-shadow-sm select-none">
                  {config.couple.monogram}
                </span>

                {/* Subtle shine mark */}
                <div className="absolute top-2 left-3 w-3 h-2 rounded-full bg-white/20 rotate-[-30deg]" />
              </div>
            </motion.div>
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
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-olive-darker shadow-md hover:shadow-lg active:scale-98 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-deep/40 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-champagne" />
              <span>Open Invitation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sound preference checkbox on open */}
            {config.music.enabled && (
              <label className="flex items-center gap-2 cursor-pointer mt-1 text-xs text-text-secondary hover:text-text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={playMusicOnOpen}
                  onChange={(e) => setPlayMusicOnOpen(e.target.checked)}
                  className="rounded text-olive-deep focus:ring-olive-deep/30 accent-olive-deep"
                />
                <span>Play ambient music upon opening</span>
              </label>
            )}

            {/* Skip animation link */}
            <button
              onClick={handleSkip}
              type="button"
              className="text-xs font-sans tracking-wider text-text-secondary/80 hover:text-olive-deep underline underline-offset-4 mt-2 transition-colors"
            >
              Skip Introduction
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

