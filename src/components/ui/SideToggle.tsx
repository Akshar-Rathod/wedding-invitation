import React from 'react';

interface SideToggleProps {
  side: 'bride' | 'groom';
  onToggle: (side: 'bride' | 'groom') => void;
}

export const SideToggle: React.FC<SideToggleProps> = ({ side, onToggle }) => {
  return (
    <aside aria-label="Wedding party side" className="fixed top-3 left-1/2 -translate-x-1/2 z-40 print:hidden select-none">
      <div className="flex items-center p-1 rounded-full bg-bg-primary/95 backdrop-blur-md border border-champagne/80 shadow-soft-card ring-1 ring-olive-deep/10">
        <button
          type="button"
          onClick={() => onToggle('bride')}
          aria-pressed={side === 'bride'}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
            side === 'bride'
              ? 'bg-champagne-dark text-bg-primary shadow-sm font-medium scale-100'
              : 'text-text-secondary hover:text-olive-deep hover:bg-bg-secondary/50'
          }`}
        >
          <span>Bride Side (કન્યા પક્ષ)</span>
        </button>

        <button
          type="button"
          onClick={() => onToggle('groom')}
          aria-pressed={side === 'groom'}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
            side === 'groom'
              ? 'bg-champagne-dark text-bg-primary shadow-sm font-medium scale-100'
              : 'text-text-secondary hover:text-olive-deep hover:bg-bg-secondary/50'
          }`}
        >
          <span>Groom Side (વર પક્ષ)</span>
        </button>
      </div>
    </aside>
  );
};

