import React, { useState } from 'react';
import { WeddingConfig } from '../../types/wedding';
import { getWeddingConfig } from '../../config/wedding';
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
import { EventsQuickNav } from '../ui/EventsQuickNav';

interface WeddingLayoutProps {
  config?: WeddingConfig;
}

export const WeddingLayout: React.FC<WeddingLayoutProps> = () => {
  // Determine initial side from URL query param (?side=groom or ?groom=1)
  const getInitialSide = (): 'bride' | 'groom' => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const side = params.get('side');
      if (side === 'groom' || side === 'bride') return side;
      if (params.get('groom') === '1') return 'groom';
    }
    return 'bride';
  };

  const [viewSide, setViewSide] = useState<'bride' | 'groom'>(getInitialSide);

  const handleToggleSide = (newSide: 'bride' | 'groom') => {
    setViewSide(newSide);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('side', newSide);
      url.searchParams.delete('groom');
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Dynamically retrieve the active configuration for the chosen side
  const activeConfig = getWeddingConfig(viewSide);

  const [envelopeOpened, setEnvelopeOpened] = useState(!activeConfig.sections.envelope);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleOpenStart = (musicAllowed: boolean) => {
    if (musicAllowed) setAutoPlayMusic(true);
  };

  const handleOpenComplete = (musicAllowed: boolean) => {
    setEnvelopeOpened(true);
    if (musicAllowed) setAutoPlayMusic(true);
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-champagne selection:text-primary">
      <FallingPetals />

      {activeConfig.music.enabled && (
        <MusicToggle config={activeConfig.music} autoPlayTriggered={autoPlayMusic} />
      )}

      {envelopeOpened && activeConfig.sections.events && (
        <EventsQuickNav events={activeConfig.events} />
      )}

      {activeConfig.sections.envelope && !envelopeOpened && (
        <InvitationEnvelope
          config={activeConfig}
          viewSide={viewSide}
          onToggleSide={handleToggleSide}
          onOpenStart={handleOpenStart}
          onOpenComplete={handleOpenComplete}
        />
      )}

      <main className="relative z-10">
        {activeConfig.sections.hero && (
          <HeroSection config={activeConfig} viewSide={viewSide} />
        )}
        {activeConfig.sections.message && (
          <InvitationMessage config={activeConfig} />
        )}
        {activeConfig.sections.couple && (
          <CoupleSection config={activeConfig} viewSide={viewSide} />
        )}
        {activeConfig.sections.countdown && (
          <Countdown config={activeConfig} />
        )}
        {activeConfig.sections.events && (
          <WeddingEvents config={activeConfig} />
        )}
        {activeConfig.sections.venue && (
          <VenueSection config={activeConfig} />
        )}
        {activeConfig.sections.family && (
          <FamilySection config={activeConfig} viewSide={viewSide} />
        )}
        {activeConfig.sections.rsvp && (
          <RSVPSection config={activeConfig} />
        )}
        {activeConfig.sections.closing && (
          <ClosingSection config={activeConfig} />
        )}
      </main>

      <BackToTop />
    </div>
  );
};
