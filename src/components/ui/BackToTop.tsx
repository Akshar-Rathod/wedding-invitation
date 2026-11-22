import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      title="Back to Top"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-bg-secondary/95 border border-champagne/80 text-olive-deep shadow-md hover:bg-bg-primary hover:border-olive-deep hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-deep/40"
    >
      <ArrowUp className="w-5 h-5 stroke-[1.5]" />
    </button>
  );
};

