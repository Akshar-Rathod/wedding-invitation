# 🕊️ Cinematic Wedding Invitation Website

A luxury, interactive wedding invitation website inspired by high-end stationery and cinematic wedding invitation reels. Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed around the philosophy: **Minimum Photographs, Maximum Elegance**.

---

## ✨ Features & Experiences

1. **Section 01: Physical Envelope Opening Experience**
   - Full-screen luxury stationery envelope with a personalized wax seal monogram.
   - Smooth 3D flap opening, wax seal animation, and rising invitation card reveal.
   - Optional sound playback trigger upon opening and a "Skip Introduction" option.

2. **Section 02: Cinematic Hero**
   - Elegant serif typography (*Cormorant Garamond*), decorative ampersand, and date badges.
   - Subtle sunlight warmth, botanical sprigs, and gentle floating leaves.
   - Editorial frame for an optional couple photograph (or graceful typography-first hero).

3. **Section 03: Heartfelt Invitation Message**
   - Classical letterpress card with customizable blessings from families and elders.
   - Fine botanical line art and ornamental dividers.

4. **Section 04: The Couple Introduction**
   - Editorial introduction of the Bride and Groom with individual bios and parents' compliments.
   - Support for portrait/landscape framing with configurable `objectPosition`.
   - Never depends on photographs: automatically displays custom botanical monogram crests when images are omitted.

5. **Section 05: Live Wedding Countdown**
   - Real-time countdown (Days, Hours, Minutes, Seconds).
   - Configurable timezone support (Default: `Asia/Kolkata`).
   - Graceful post-wedding state showing *"The Celebration Has Begun!"*.

6. **Section 06: The Celebrations (Indian Wedding Itinerary)**
   - Fully data-driven itinerary: Haldi, Mehendi, Sangeet, Wedding Ceremony (Pheras), Reception.
   - Displays ceremony date, timings, dress code recommendations, venue, and Google Maps directions.
   - Events can be easily added, removed, reordered, or disabled.

7. **Section 07: Destination Venue & Directions**
   - Venue overview, full postal address, city, and date/time recap.
   - Direct *"Get Directions on Maps"* action linking to Google Maps navigation.

8. **Section 08: Family Blessings & Gratitude**
   - Honors parents and grandparents from both families.
   - Automatically hidden if no family information is supplied.

9. **Section 09: Instant WhatsApp RSVP**
   - Interactive guest response form (Attendance status, guest name, guest count, event selection, and optional wishes).
   - Generates a pre-filled, properly URL-encoded WhatsApp message opened directly in the guest's WhatsApp app.
   - No fake backend submissions or complex database setups required.

10. **Section 10: Closing Gratitude & Back-to-Top**
    - Warm closing sign-off from the newlyweds.
    - Smooth scroll back-to-top control.

11. **Signature Ambient Atmosphere**
    - Continuous, lightweight falling rose petals and sage leaves with natural 3D drift.
    - Floating audio player with animated sound wave bars.
    - Muted by default with zero unwanted audio autoplay.
    - Full respect for `prefers-reduced-motion`.

---

## 🎨 Design System & Palette

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Primary Background** | `#F8F5EF` | Warm ivory paper background |
| **Secondary Background** | `#EFE8DC` | Soft vintage parchment tone |
| **Champagne** | `#D9C6A5` | Warm metallic accents & dividers |
| **Muted Sage** | `#A7AD96` | Organic foliage & leaf illustrations |
| **Deep Olive** | `#59604B` | Primary headings & wax seal tone |
| **Text Primary** | `#39352F` | Deep charcoal for body text |
| **Text Secondary** | `#81796D` | Muted taupe for captions and metadata |
| **White** | `#FFFFFF` | Card highlights & crisp borders |

### Typography
- **Headings & Names:** *Cormorant Garamond* (Serif)
- **Body & Event Details:** *DM Sans* (Clean readable Sans-serif)
- **Script Accents:** *Great Vibes* (Romantic cursive flourishes)

---

## 🚀 Quick Start

### Prerequisites
- Node.js `18+` or `20+`
- npm `9+` or `10+`

### Installation
```bash
# Clone or navigate to the repository
cd "e:/Wedding Invitation Website"

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Personalization Guide (`src/config/wedding.ts`)

All wedding information is centralized inside `src/config/wedding.ts`. You do **not** need to touch React components to customize the wedding details!

```typescript
import { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  // 1. Bride Information
  bride: {
    name: "Aarya Sharma",
    parents: "Daughter of Sunita & Rajesh Sharma",
    bio: "An architect with a passion for classical literature...",
    image: "/images/couple/bride.svg", // Or .jpg/.png
    imagePosition: "center 30%",       // Adjust focus point
  },

  // 2. Groom Information
  groom: {
    name: "Kabir Malhotra",
    parents: "Son of Rekha & Vikram Malhotra",
    bio: "A filmmaker with a love for acoustic melodies...",
    image: "/images/couple/groom.svg",
    imagePosition: "center 25%",
  },

  // 3. Couple Information
  couple: {
    displayName: "Aarya & Kabir",
    monogram: "A & K",
    tagline: "The Celebration of Love",
    story: "Two gentle souls whose paths crossed...",
    image: "/images/couple/couple.svg",
  },

  // 4. Invitation Messages
  invitation: {
    pretitle: "Together With Their Families",
    heading: "You Are Cordially Invited",
    message: "With the divine blessings of the Almighty...",
    dateDisplay: "Sunday, February 14, 2027",
    timeDisplay: "6:00 PM onwards",
  },

  // 5. Wedding Ceremony & Venue
  wedding: {
    date: "2027-02-14T18:00:00", // ISO string for countdown
    timezone: "Asia/Kolkata",
    venue: "The Heritage Palace & Gardens",
    address: "Haridas Ji Ki Magri, Lake Pichola View, Udaipur, Rajasthan",
    city: "Udaipur, Rajasthan",
    mapsUrl: "https://maps.google.com/?q=Udaipur+Rajasthan",
  },

  // 6. Itinerary & Events
  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      tagline: "Turmeric, Sunshine & Marigold Blessings",
      date: "February 13, 2027",
      day: "Saturday",
      startTime: "10:30 AM",
      venue: "Courtyard of Courtyards",
      address: "Haridas Ji Ki Magri, Udaipur",
      dressCode: "Bright Yellows & Sunshine Tones",
      description: "An auspicious morning soaked in fragrant turmeric...",
      icon: "sun",
      enabled: true,
    },
    // ... Mehendi, Sangeet, Wedding, Reception
  ],

  // 7. Family Details (Optional)
  family: {
    enabled: true,
    message: "With profound gratitude to our ancestors and elders...",
    brideParents: {
      names: "Mrs. Sunita & Mr. Rajesh Sharma",
    },
    groomParents: {
      names: "Mrs. Rekha & Mr. Vikram Malhotra",
    },
  },

  // 8. WhatsApp RSVP Configuration
  contact: {
    whatsappNumber: "919876543210", // Country code + mobile number (digits only)
    rsvpDeadline: "January 20, 2027",
  },

  // 9. Background Music
  music: {
    enabled: true,
    src: "/audio/wedding-ambient.wav",
    title: "Gentle Flute & Sitar Ambient",
  },

  // 10. Enable or Disable Specific Sections
  sections: {
    envelope: true,
    hero: true,
    message: true,
    couple: true,
    countdown: true,
    events: true,
    venue: true,
    family: true,
    rsvp: true,
    closing: true,
  },
};
```

---

## 📸 Photography Guidelines

- **Limit:** Maximum 3 unique couple photographs (1 shared, 1 bride, 1 groom).
- **Format:** Supports JPG, PNG, WEBP, or SVG.
- **Location:** Place photos in `public/images/couple/`.
- **Zero-Photo Fallback:** If you remove or leave `image: undefined`, the website will render a custom letterpress stationery crest with the couple's monogram.
- **Cropping & Positioning:** Use `imagePosition` (e.g. `'center top'`, `'center 30%'`) to prevent heads or faces from being cropped.

---

## 📱 Mobile Responsiveness

The website was built mobile-first and tested across:
- **360px** (Small compact Android devices)
- **390px** (Standard iPhone screen)
- **430px** (iPhone Pro Max / Large smartphones)
- **768px** (iPads and tablets)
- **1200px+** (Laptops and high-res desktops)

Key features on mobile:
- Large 48px+ touch targets for wax seal and RSVP buttons.
- Zero horizontal overflow.
- Fluid typography and adaptive padding.

---

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Publish directory: dist
```

### Deploy to GitHub Pages
Add `base: '/repository-name/'` in `vite.config.ts`, run `npm run build`, and deploy the `dist/` directory.

---

## 📄 License
Created for couples and families worldwide. Feel free to personalize and customize!

