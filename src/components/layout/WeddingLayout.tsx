import React, { useState } from 'react';
import { WeddingConfig } from '../../types/wedding';
import { InvitationEnvelope } from '../invitation/InvitationEnvelope';
import { HeroSection } from '../invitation/HeroSection';
import { InvitationMessage } from '../invitation/InvitationMessage';
import { CoupleSection } from '../invitation/CoupleSection';
import { Countdown } from '../invitation/Countdown';
import { WeddingEvents } from '../invitation/WeddingEvents';
import { VenueSection } from '../invitation/VenueSection';
import { FamilySection } from '../invitation/FamilySection';
import { RSVPSection } from '../invitation/RSVPSection';
import { ClosingSection } from '../invitation/ClosingSection';
import { FallingPetals } from '../animations/FallingPetals';
import { MusicToggle } from '../ui/MusicToggle';
import { BackToTop } from '../ui/BackToTop';

interface WeddingLayoutProps {
  config: WeddingConfig;
}

export const WeddingLayout: React.FC<WeddingLayoutProps> = ({ config }) => {
  const [envelopeOpened, setEnvelopeOpened] = useState(!config.sections.envelope);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  // Determine initial side from URL query param
  const getInitialSide = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('groom') === '1' ? 'groom' : 'bride';
    }
    return 'bride';
  };
  const [viewSide, setViewSide] = useState<'bride' | 'groom'>(getInitialSide());

  const handleOpenStart = (musicAllowed: boolean) => {
    if (musicAllowed) setAutoPlayMusic(true);
  };

  const handleOpenComplete = (musicAllowed: boolean) => {
    setEnvelopeOpened(true);
    if (musicAllowed) setAutoPlayMusic(true);
  };

  const toggleSide = () => setViewSide(prev => (prev === 'bride' ? 'groom' : 'bride'));

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-champagne selection:text-primary">
      <FallingPetals />
      {config.music.enabled && (
        <MusicToggle config={config.music} autoPlayTriggered={autoPlayMusic} />
      )}
      <div className="fixed top-5 left-5 z-40">
        <button
          onClick={toggleSide}
          className="px-3 py-2 rounded-full bg-bg-primary/80 border border-champagne/60 text-text-secondary hover:bg-bg-primary/95 hover:text-primary transition"
        >
          {viewSide === 'bride' ? 'View Groom' : 'View Bride'}
        </button>
      </div>
      {config.sections.envelope && !envelopeOpened && (
        <InvitationEnvelope
          config={config}
          onOpenStart={handleOpenStart}
          onOpenComplete={handleOpenComplete}
        />
      )}
      <main className="relative z-10">
        {config.sections.hero && <HeroSection config={config} />}
        {config.sections.message && <InvitationMessage config={config} />}
        {config.sections.couple && <CoupleSection config={config} viewSide={viewSide} />}
        {config.sections.countdown && <Countdown config={config} />}
        {config.sections.events && <WeddingEvents config={config} />}
        {config.sections.venue && <VenueSection config={config} />}
        {config.sections.family && <FamilySection config={config} />}
        {config.sections.rsvp && <RSVPSection config={config} />}
        {config.sections.closing && <ClosingSection config={config} />}
      </main>
      <BackToTop />
    </div>
  );
};
