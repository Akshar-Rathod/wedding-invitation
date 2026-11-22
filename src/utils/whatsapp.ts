/**
 * WhatsApp RSVP utility
 */

export interface RsvpPayload {
  guestName: string;
  guestCount: number;
  attending: 'yes' | 'regret';
  eventsAttending?: string[];
  dietaryOrNote?: string;
}

export function generateRsvpMessage(
  payload: RsvpPayload, 
  coupleNames: string,
  customIntro?: string
): string {
  const intro = customIntro || `Namaste!`;
  
  if (payload.attending === 'regret') {
    return `${intro}\n\nThis is ${payload.guestName}. With heartfelt wishes, we regret that we won't be able to join in person for the wedding celebrations of ${coupleNames}, but our prayers and warmest blessings are always with you both! ✨`;
  }

  const guestCountText = payload.guestCount === 1 
    ? '1 guest' 
    : `${payload.guestCount} guests`;

  let message = `${intro}\n\n*Wedding RSVP for ${coupleNames}*\n\n` +
    `• *Guest Name:* ${payload.guestName}\n` +
    `• *Attending:* Yes, with joy! (${guestCountText})\n`;

  if (payload.eventsAttending && payload.eventsAttending.length > 0) {
    message += `• *Events:* ${payload.eventsAttending.join(', ')}\n`;
  }

  if (payload.dietaryOrNote && payload.dietaryOrNote.trim()) {
    message += `• *Wishes / Note:* ${payload.dietaryOrNote.trim()}\n`;
  }

  message += `\nLooking forward to celebrating this beautiful union! 🌿✨`;

  return message;
}

export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  // Strip non-digits except a leading +
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function openWhatsAppRsvp(phoneNumber: string, message: string): boolean {
  if (!phoneNumber) return false;
  const url = buildWhatsAppLink(phoneNumber, message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
    return true;
  }
  return false;
}

