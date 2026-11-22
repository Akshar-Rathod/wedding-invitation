import React, { useState } from 'react';
import { WeddingConfig } from '../../types/wedding';
import { generateRsvpMessage, openWhatsAppRsvp } from '../../utils/whatsapp';
import { DecorativeDivider } from '../ui/DecorativeDivider';
import { FloralDecoration } from '../ui/FloralDecoration';
import { ScrollReveal } from '../animations/ScrollReveal';
import { MessageSquare, Check, Send, AlertCircle } from 'lucide-react';

interface RSVPSectionProps {
  config: WeddingConfig;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ config }) => {
  const { contact, couple, events } = config;

  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [attending, setAttending] = useState<'yes' | 'regret'>('yes');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(() => 
    events.filter(e => e.enabled !== false).map(e => e.title)
  );
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);

  const toggleEvent = (title: string) => {
    setSelectedEvents(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setError('Please enter your full name so we can address your RSVP.');
      return;
    }

    setError(null);

    const message = generateRsvpMessage(
      {
        guestName: guestName.trim(),
        guestCount,
        attending,
        eventsAttending: attending === 'yes' ? selectedEvents : undefined,
        dietaryOrNote: note,
      },
      couple.displayName,
      contact.messageTemplate
    );

    const opened = openWhatsAppRsvp(contact.whatsappNumber, message);

    if (!opened) {
      setError('Unable to open WhatsApp. Please verify your internet connection or browser pop-up settings.');
    }
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-bg-secondary/40 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={0.1}>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-text-secondary">
            Kindly Respond
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-deep mt-2 font-normal">
            Confirm Your Presence
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <DecorativeDivider variant="monogram" monogram={couple.monogram} />
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-8">
            Your presence means the world to us. Kindly confirm your attendance via WhatsApp by{' '}
            <span className="font-semibold text-text-primary">
              {contact.rsvpDeadline || 'the earliest convenience'}
            </span>.
          </p>
        </ScrollReveal>

        {/* RSVP Card & Interactive Form */}
        <ScrollReveal delay={0.3}>
          <div className="bg-bg-primary rounded-sm p-6 sm:p-10 stationery-border shadow-soft-card text-left relative overflow-hidden">
            
            {/* Subtle corner sprays */}
            <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
              <FloralDecoration position="top-right" size="sm" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Attendance Choice */}
              <div>
                <label className="block font-sans text-xs tracking-wider uppercase text-text-secondary mb-2 font-medium">
                  Will You Be Joining Us?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending('yes')}
                    className={`py-3 px-4 rounded-sm border text-xs sm:text-sm font-serif flex items-center justify-center gap-2 transition-all ${
                      attending === 'yes'
                        ? 'bg-olive-deep text-bg-primary border-olive-deep shadow-sm'
                        : 'bg-bg-secondary/40 border-champagne/70 text-text-primary hover:border-olive-deep/40'
                    }`}
                  >
                    <Check className={`w-4 h-4 ${attending === 'yes' ? 'opacity-100' : 'opacity-0'}`} />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending('regret')}
                    className={`py-3 px-4 rounded-sm border text-xs sm:text-sm font-serif flex items-center justify-center gap-2 transition-all ${
                      attending === 'regret'
                        ? 'bg-olive-deep text-bg-primary border-olive-deep shadow-sm'
                        : 'bg-bg-secondary/40 border-champagne/70 text-text-primary hover:border-olive-deep/40'
                    }`}
                  >
                    <Check className={`w-4 h-4 ${attending === 'regret' ? 'opacity-100' : 'opacity-0'}`} />
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Guest Name */}
              <div>
                <label htmlFor="guest-name" className="block font-sans text-xs tracking-wider uppercase text-text-secondary mb-1.5 font-medium">
                  Your Full Name <span className="text-olive-deep">*</span>
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. Dr. Rohan & Meera Kapoor"
                  className="w-full px-4 py-3 rounded-sm bg-bg-secondary/30 border border-champagne/80 text-text-primary text-sm focus:outline-none focus:ring-1 focus:ring-olive-deep focus:border-olive-deep transition-all placeholder:text-text-muted"
                />
              </div>

              {/* Number of Guests (Only if attending) */}
              {attending === 'yes' && (
                <div>
                  <label className="block font-sans text-xs tracking-wider uppercase text-text-secondary mb-1.5 font-medium">
                    Number of Guests Attending
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestCount(num)}
                        className={`flex-1 py-2 rounded-sm border text-sm font-serif transition-all ${
                          guestCount === num
                            ? 'bg-olive-deep text-bg-primary border-olive-deep font-semibold'
                            : 'bg-bg-secondary/30 border-champagne/60 text-text-primary hover:border-olive-deep/50'
                        }`}
                      >
                        {num === 5 ? '5+' : num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Attending Multi-selection (Only if attending) */}
              {attending === 'yes' && events.length > 0 && (
                <div>
                  <label className="block font-sans text-xs tracking-wider uppercase text-text-secondary mb-2 font-medium">
                    Events You'll Be Attending
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {events.filter(e => e.enabled !== false).map((evt) => {
                      const isChecked = selectedEvents.includes(evt.title);
                      return (
                        <button
                          key={evt.id}
                          type="button"
                          onClick={() => toggleEvent(evt.title)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-sm border text-left text-xs transition-all ${
                            isChecked
                              ? 'bg-olive-deep/10 border-olive-deep text-olive-deep font-medium'
                              : 'bg-bg-secondary/20 border-champagne/50 text-text-secondary hover:border-champagne'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                            isChecked ? 'bg-olive-deep border-olive-deep text-bg-primary' : 'border-champagne/80 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[2.5]" />}
                          </div>
                          <span className="truncate">{evt.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Wishes or Note */}
              <div>
                <label htmlFor="rsvp-note" className="block font-sans text-xs tracking-wider uppercase text-text-secondary mb-1.5 font-medium">
                  Warm Wishes / Dietary Preferences (Optional)
                </label>
                <textarea
                  id="rsvp-note"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Leave a message for the couple..."
                  className="w-full px-4 py-2.5 rounded-sm bg-bg-secondary/30 border border-champagne/80 text-text-primary text-sm focus:outline-none focus:ring-1 focus:ring-olive-deep focus:border-olive-deep transition-all placeholder:text-text-muted resize-none"
                />
              </div>

              {/* Error feedback */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit CTA via WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-olive-deep text-bg-primary font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-olive-darker shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-deep/40"
                >
                  <MessageSquare className="w-4 h-4 text-champagne" />
                  <span>Send RSVP via WhatsApp</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="font-sans text-[11px] text-text-secondary text-center mt-3">
                  Clicking will open WhatsApp with your prefilled RSVP details.
                </p>
              </div>

            </form>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
