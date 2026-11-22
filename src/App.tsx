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
      <div className="fixed bottom-6 left-6 z-40 print:hidden">
        <button
          onClick={handleReplayEnvelope}
          title="Replay Envelope Opening Animation"
          aria-label="Replay Invitation Envelope"
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-bg-secondary/90 backdrop-blur-sm border border-champagne/70 text-olive-deep text-xs font-sans tracking-wider shadow-sm hover:border-olive-deep hover:bg-bg-primary transition-all duration-300"
        >
          <Mail className="w-3.5 h-3.5 text-olive-deep" />
          <span className="hidden sm:inline">Replay Envelope</span>
        </button>
      </div>
    </>
  );
};

export default App;
