import { WeddingConfig } from '../types/wedding';

const VENUE_NAME = 'Patel Greens Farm';
const VENUE_ADDRESS =
  'Opposite BAPS Swaminarayan Temple, Vijapur–Visnagar Road, Vijapur, Gujarat, India';
const MAPS_URL =
  'https://maps.google.com/?q=Patel+Greens+Farm+Opposite+BAPS+Swaminarayan+Temple+Vijapur+Gujarat';

/**
 * Archived config — Nandini & Rushikumar (Vijapur)
 * Active site uses `./wedding.ts`. Swap imports here if you need this couple again.
 */
export const weddingConfigNandiniRushikumar: WeddingConfig = {
  bride: {
    name: 'Nandini Patel',
    parents:
      'Daughter of Hinaben & Shri Amitkumar Rameshbhai Patel • Vijapur',
    bio: 'With the blessings of Shri Umiya Mataji & family',
    image: '/images/couple/bride.svg',
    imagePosition: 'center 30%',
  },

  groom: {
    name: 'Rushikumar Patel',
    parents:
      'Son of Sitaben & Shri Navinkumar Trikamlal Patel • Vijapur',
    bio: 'With the blessings of elders & family',
    image: '/images/couple/groom.svg',
    imagePosition: 'center 25%',
  },

  couple: {
    displayName: 'Nandini & Rushikumar',
    monogram: 'N & R',
    tagline: 'Manglik Prasango • Vivah Sanskar Sankalp',
    story:
      'With the divine grace of Lord Ganesha, Shri Umiya Mataji, and our beloved elders, our families joyfully invite you to bless Nandini & Rushikumar as they begin their sacred journey together.',
    image: '/images/couple/couple.svg',
    imagePosition: 'center 35%',
  },

  invitation: {
    pretitle: '॥ श्री गणेशाय नमः ॥ • ॥ श्री उमीया माताय नमः ॥',
    heading: 'You Are Cordially Invited',
    subheading: 'Vivah Sanskar Sankalp',
    message:
      'With the divine blessings of Lord Ganesha, Shri Umiya Mataji, and our revered elders, we request the honour of your presence at the auspicious wedding celebrations of Nandini & Rushikumar. Your gracious presence and heartfelt blessings will make our celebration truly memorable.',
    closingMessage:
      'We look forward to celebrating this sacred union with you. With love and gratitude, we remain yours in devotion.',
    dateDisplay: 'Friday, December 12, 2026',
    timeDisplay: '5:15 PM — Hasta Melap (Samvat 2083, Kartak Vad-11)',
  },

  wedding: {
    date: '2026-12-12T17:15:00',
    timezone: 'Asia/Kolkata',
    venue: VENUE_NAME,
    address: VENUE_ADDRESS,
    city: 'Vijapur, Gujarat',
    mapsUrl: MAPS_URL,
  },

  events: [
    {
      id: 'ganesh-sthapana',
      title: 'Ganesh Sthapan',
      tagline: 'Manglik Prasango • Auspicious beginning',
      date: 'December 11, 2026',
      day: 'Thursday',
      startTime: '7:15 AM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description:
        'Invocation of Lord Ganesha for an obstacle-free celebration (Kartak Vad-10).',
      mapsUrl: MAPS_URL,
      icon: 'sun',
      enabled: true,
    },
    {
      id: 'grah-shanti',
      title: 'Grah Shanti',
      tagline: 'Planetary peace & harmony',
      date: 'December 11, 2026',
      day: 'Thursday',
      startTime: '9:15 AM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'Sacred ritual for planetary blessings and familial harmony.',
      mapsUrl: MAPS_URL,
      icon: 'sparkles',
      enabled: true,
    },
    {
      id: 'mandap-muhurat',
      title: 'Mandap Muhurat',
      tagline: 'Sanctifying the wedding mandap',
      date: 'December 11, 2026',
      day: 'Thursday',
      startTime: '9:30 AM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'Holy Vedic ritual to consecrate the sacred wedding canopy.',
      mapsUrl: MAPS_URL,
      icon: 'flower',
      enabled: true,
    },
    {
      id: 'mameru',
      title: 'Mameru',
      tagline: "Maternal family's loving gifts & blessings",
      date: 'December 11, 2026',
      day: 'Thursday',
      startTime: '3:30 PM',
      venue: 'Moti Pura (Bha) Residence',
      address: 'Moti Pura, Vijapur, Gujarat',
      description:
        'Traditional Mameru ceremony with blessings and gifts from the maternal family.',
      mapsUrl: 'https://maps.google.com/?q=Moti+Pura+Vijapur+Gujarat',
      icon: 'heart',
      enabled: true,
    },
    {
      id: 'manglik-bhojan',
      title: 'Swa-ruchi Bhojan',
      tagline: 'Celebratory dinner',
      date: 'December 11, 2026',
      day: 'Thursday',
      startTime: '7:00 PM onwards',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'An evening feast to conclude the Manglik Prasango celebrations.',
      mapsUrl: MAPS_URL,
      icon: 'glass',
      enabled: true,
    },
    {
      id: 'jaan-aagaman',
      title: 'Jaan Aagaman',
      tagline: 'Welcoming the wedding procession',
      date: 'December 12, 2026',
      day: 'Friday',
      startTime: '4:15 PM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'Arrival of the baraat and joyous welcome at the wedding venue.',
      mapsUrl: MAPS_URL,
      icon: 'music',
      enabled: true,
    },
    {
      id: 'hasta-melap',
      title: 'Hasta Melap',
      tagline: 'Sacred union of hands',
      date: 'December 12, 2026',
      day: 'Friday',
      startTime: '5:15 PM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      dressCode: 'Traditional wedding attire',
      description:
        'The main wedding ceremony — the divine joining of Nandini & Rushikumar in sacred matrimony.',
      mapsUrl: MAPS_URL,
      icon: 'ring',
      enabled: true,
    },
    {
      id: 'swruchi-bhojan',
      title: 'Swruchi Bhojan',
      tagline: 'Wedding feast',
      date: 'December 12, 2026',
      day: 'Friday',
      startTime: '6:30 PM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'Traditional Gujarati wedding dinner in honour of the newlyweds.',
      mapsUrl: MAPS_URL,
      icon: 'sparkles',
      enabled: true,
    },
    {
      id: 'kanya-vidai',
      title: 'Kanya Vidai',
      tagline: 'Farewell with love & blessings',
      date: 'December 12, 2026',
      day: 'Friday',
      startTime: '9:15 PM',
      venue: VENUE_NAME,
      address: VENUE_ADDRESS,
      description: 'Emotional farewell of the bride with elders’ blessings as she begins a new chapter.',
      mapsUrl: MAPS_URL,
      icon: 'heart',
      enabled: true,
    },
  ],

  family: {
    enabled: true,
    message:
      'In loving memory of Late Puriben & Late Joitaram Bajidas Patel. With the affection of Shri Babubhai Joitaram Patel & family, Shri Ramanbhai Joitaram Patel & family (Mit, Hem, Dhyan, Rutva, Rahi, Mudra), and Shri Natvarbhai Joitaram Patel & family.',
    brideParents: {
      title: 'Bride — With blessings from',
      names: 'Hinaben & Shri Amitkumar Rameshbhai Patel',
      grandparents: 'Vijapur',
    },
    groomParents: {
      title: 'Groom — Warmly invited by',
      names: 'Sitaben & Shri Navinkumar Trikamlal Patel',
      grandparents: 'Vijapur',
    },
  },

  contact: {
    whatsappNumber: '919876543210',
    rsvpDeadline: 'December 05, 2026',
    messageTemplate:
      'Namaste! We are delighted to confirm our presence for the wedding celebrations of Nandini & Rushikumar at Patel Greens Farm, Vijapur.',
  },

  music: {
    enabled: true,
    src: '/audio/wedding-ambient.mp3',
    title: 'Classical wedding ambience',
  },

  sections: {
    envelope: true,
    hero: true,
    message: true,
    couple: true,
    countdown: true,
    events: true,
    venue: true,
    family: true,
    rsvp: false,
    closing: true,
  },
};