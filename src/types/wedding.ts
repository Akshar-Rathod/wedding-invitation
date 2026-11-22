export type EventIconType = 'sun' | 'sparkles' | 'music' | 'heart' | 'glass' | 'flower' | 'ring';

export interface BrideConfig {
  name: string;
  parents?: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
}

export interface GroomConfig {
  name: string;
  parents?: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
}

export interface CoupleConfig {
  displayName: string;
  monogram: string;
  tagline?: string;
  story?: string;
  image?: string;
  imagePosition?: string;
}

export interface InvitationConfig {
  pretitle?: string;
  subheading?: string;
  heading?: string;
  message: string;
  closingMessage?: string;
  dateDisplay: string;
  timeDisplay: string;
}

export interface WeddingDetailsConfig {
  date: string; // ISO 8601 string, e.g. "2027-02-14T18:00:00"
  timezone: string; // e.g. "Asia/Kolkata"
  venue: string;
  address: string;
  city: string;
  mapsUrl: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  tagline?: string;
  date: string;
  day: string;
  startTime: string;
  endTime?: string;
  venue: string;
  address: string;
  dressCode?: string;
  description: string;
  mapsUrl?: string;
  icon?: EventIconType;
  enabled?: boolean;
}

export interface FamilyConfig {
  enabled: boolean;
  message?: string;
  brideParents?: {
    title?: string;
    names: string;
    grandparents?: string;
  };
  groomParents?: {
    title?: string;
    names: string;
    grandparents?: string;
  };
}

export interface ContactConfig {
  whatsappNumber: string;
  rsvpDeadline?: string;
  messageTemplate?: string;
}

export interface MusicConfig {
  enabled: boolean;
  src: string;
  title?: string;
}

export interface SectionsConfig {
  envelope: boolean;
  hero: boolean;
  message: boolean;
  couple: boolean;
  countdown: boolean;
  events: boolean;
  venue: boolean;
  family: boolean;
  rsvp: boolean;
  closing: boolean;
}

export interface WeddingConfig {
  bride: BrideConfig;
  groom: GroomConfig;
  couple: CoupleConfig;
  invitation: InvitationConfig;
  wedding: WeddingDetailsConfig;
  events: WeddingEvent[];
  family: FamilyConfig;
  contact: ContactConfig;
  music: MusicConfig;
  sections: SectionsConfig;
}

