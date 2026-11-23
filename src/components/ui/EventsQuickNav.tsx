import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, X } from 'lucide-react';
import { WeddingEvent } from '../../types/wedding';

interface EventsQuickNavProps {
  events: WeddingEvent[];
}

export const EventsQuickNav: React.FC<EventsQuickNavProps> = ({ events }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeEvents = events.filter((e) => e.enabled !== false);

  const scrollToEvent = (eventId: string) => {
    const target = document.getElementById(`event-${eventId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const node = panelRef.current;
      if (node && !node.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [open]);

  if (activeEvents.length === 0) {
    return null;
  }

  return (
    <div ref={panelRef} className="fixed safe-fixed-top safe-fixed-right z-40 print:hidden flex flex-col items-end gap-2 max-w-[min(100vw-2rem,20rem)]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="events-quick-nav-panel"
        className={`group flex items-center gap-2 sm:gap-2.5 min-h-[44px] px-3 sm:px-3.5 py-2 rounded-full backdrop-blur-md border shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/40 ${
          open
            ? 'bg-olive-deep text-bg-primary border-olive-deep shadow-md'
            : 'bg-bg-primary/95 border-champagne text-text-primary hover:border-champagne-dark'
        }`}
      >
        {open ? (
          <X className="w-4 h-4 shrink-0" aria-hidden />
        ) : (
          <CalendarDays className="w-4 h-4 text-olive-deep shrink-0 group-hover:text-champagne-dark" aria-hidden />
        )}
        <span className="font-sans text-[11px] tracking-wider uppercase font-medium">
          {open ? 'Close' : 'Events'}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="events-quick-nav-panel"
            role="navigation"
            aria-label="Jump to celebration events"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-2 w-full max-h-[min(70vh,calc(100dvh-7rem))] overflow-y-auto overscroll-contain py-1 pr-0.5"
          >
            {activeEvents.map((evt, index) => (
              <motion.button
                key={evt.id}
                type="button"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035, duration: 0.25 }}
                onClick={() => scrollToEvent(evt.id)}
                className="w-full text-left rounded-full bg-bg-primary/95 backdrop-blur-md border border-champagne/75 shadow-soft-card hover:border-olive-deep hover:shadow-md px-4 py-2.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep/40"
              >
                <span className="block font-serif text-sm sm:text-[15px] text-olive-deep leading-snug">
                  {evt.title}
                </span>
                <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0 font-sans text-[10px] sm:text-[11px] tracking-wide uppercase text-text-secondary">
                  <span>{evt.day}</span>
                  <span className="text-champagne-dark" aria-hidden>
                    •
                  </span>
                  <span>{evt.startTime}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};