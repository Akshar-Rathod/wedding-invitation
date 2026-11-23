import React, { useState } from 'react';
import { weddingConfig } from './config/wedding';
import { WeddingLayout } from './components/layout/WeddingLayout';
import { Mail } from 'lucide-react';

export const App: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleReplayEnvelope = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setResetKey((prev) => prev + 1);
  };

  return (
    <>
      <WeddingLayout key={resetKey} config={weddingConfig} />

      {/* Discreet bottom-left control for hosts/couples to replay the envelope animation */}
      <div className="fixed safe-fixed-bottom safe-fixed-left z-40 print:hidden">
        <button
          onClick={handleReplayEnvelope}
          title="Replay Envelope Opening Animation"
          aria-label="Replay Invitation Envelope"
          className="group flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-full bg-bg-secondary/75 backdrop-blur-sm border border-champagne/50 text-text-secondary text-xs font-sans tracking-wider shadow-sm opacity-80 hover:opacity-100 hover:border-olive-deep hover:text-olive-deep hover:bg-bg-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/40"
        >
          <Mail className="w-3.5 h-3.5 text-olive-deep" />
          <span className="hidden sm:inline">Replay Envelope</span>
        </button>
      </div>
    </>
  );
};

export default App;
