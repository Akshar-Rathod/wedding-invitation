---
name: wedding-invitation-builder
description: Build, customize, and improve premium cinematic wedding invitation websites using React, Vite, TypeScript, and Tailwind CSS. Specializes in envelope-opening experiences, falling leaves and petals, minimal couple photography, elegant editorial design, Indian wedding events, countdowns, WhatsApp RSVP, and reusable wedding templates.
---

# Wedding Invitation Builder

## 1. Purpose

This skill provides reusable instructions for creating premium, cinematic, interactive wedding invitation websites.

The goal is to transform a traditional wedding invitation into an elegant digital experience.

The websites must be:

- Visually sophisticated.
- Mobile-first.
- Reusable.
- Easy to customize.
- Lightweight.
- Accessible.
- Production-ready.

The design philosophy is:

**Minimum photographs, maximum elegance.**

---

## 2. Mandatory Technology Stack

Use:

- React.js.
- Vite.
- TypeScript.
- Tailwind CSS.
- Framer Motion (`framer-motion` or `motion/react` when supported by the installed version).
- Lucide React.
- date-fns when useful.

### Technology restrictions

- Always use React + Vite for this workflow.
- Never use Next.js.
- Never use Next.js App Router.
- Never use React Server Components.
- Never introduce a backend unless explicitly requested.
- Avoid unnecessary dependencies.
- Inspect existing dependencies before installing anything.
- Preserve existing project configuration where possible.

For a single-page invitation, do not introduce React Router unnecessarily.

---

## 3. Design Philosophy

Default visual direction:

**Botanical Romantic + Minimal Editorial + Luxury Wedding Stationery.**

The website should feel timeless, elegant, warm, romantic and sophisticated.

Avoid generic wedding templates.

### Default color palette

| Color                | Hex     |
| -------------------- | ------- |
| Primary background   | #F8F5EF |
| Secondary background | #EFE8DC |
| Champagne            | #D9C6A5 |
| Muted sage           | #A7AD96 |
| Deep olive           | #59604B |
| Primary text         | #39352F |
| Secondary text       | #81796D |
| White                | #FFFFFF |

Do not introduce unrelated colors unless the user explicitly requests a different theme.

### Typography

Recommended:

- Cormorant Garamond: Main headings and couple names.
- DM Sans: Body text and event information.
- Great Vibes: Limited decorative script accents.

Use no more than three font families.

Use serif typography for names and important headings.

Use sans-serif typography for descriptions and event information.

Use script fonts only for small decorative accents.

### Visual elements

Prefer:

- Botanical illustrations.
- Floral line art.
- Delicate leaves.
- Fine ornamental borders.
- Paper textures.
- Soft gradients.
- Elegant separators.
- Spacious layouts.
- Refined shadows.

Avoid:

- Excessive gold.
- Neon colors.
- Excessive glassmorphism.
- Generic dashboard components.
- Overly rounded UI.
- Unnecessary decoration.

---

## 4. Photography Guidelines

Photography is optional and must never be the foundation of the entire design.

### Maximum photograph limit

Use no more than three unique couple photographs.

Recommended:

1. Shared couple photograph.
2. Optional bride photograph.
3. Optional groom photograph.

Reuse these photographs in different sections when necessary.

### Supported photography

The template must work with:

- Traditional Indian wedding photography.
- Outdoor photographs.
- Studio portraits.
- Modern pre-wedding photographs.
- Bright photographs.
- Dark photographs.
- Portrait images.
- Landscape images.

### Image handling

- Preserve important image areas.
- Avoid aggressive cropping.
- Support configurable object-position.
- Support portrait and landscape formats.
- Use neutral frames.
- Use subtle borders and shadows.
- Avoid excessive image filters.
- Do not force circular crops.

### Missing images

When photographs are unavailable:

- Use typography-led layouts.
- Use botanical decorations.
- Use SVG illustrations.
- Use elegant neutral backgrounds.

Never use random stock photographs of couples as replacement content.

The website must look complete even with zero photographs.

---

## 5. Required Website Sections

Create configurable sections:

1. Invitation envelope.
2. Hero.
3. Invitation message.
4. Couple introduction.
5. Wedding countdown.
6. Wedding celebrations.
7. Venue and directions.
8. Family invitation.
9. RSVP.
10. Closing section.

All sections should follow the same visual identity.

Optional sections must be configurable and hidden when disabled or when their required information is unavailable.

---

## 6. Signature Animation System

### Envelope opening

Implement:

- Closed envelope.
- Wax seal with monogram.
- Animated envelope flap.
- Invitation card reveal.
- Card movement out of envelope.
- Transition into the main website.

Use Framer Motion.

Include a skip option.

Ensure that opening the invitation works seamlessly on touch and mobile devices.

### Falling leaves and petals

Implement lightweight falling decorations using CSS and SVG.

Requirements:

- Different shapes (petals, leaf pairs, buds).
- Random positions.
- Different sizes.
- Different speeds.
- Natural rotation.
- Slight horizontal movement.
- Variable opacity.
- Limited particle count.

Decorations must not interfere with content or interactions (`pointer-events: none`).

### Scroll animations

Use:

- Fade in.
- Fade up.
- Staggered reveal.
- Text reveal.
- Image reveal.
- Gentle parallax.

Use Framer Motion's viewport features where appropriate.

### Performance requirements

- Prefer transform and opacity animations.
- Avoid unnecessary React state updates.
- Avoid excessive animation loops.
- Clean up effects properly.
- Respect prefers-reduced-motion.
- Reduce effects on lower-performance devices.

---

## 7. Wedding Countdown

Implement a reusable countdown component.

Display:

- Days.
- Hours.
- Minutes.
- Seconds.

Requirements:

- Read the configured wedding date.
- Respect the configured timezone (default Asia/Kolkata).
- Update every second.
- Clean up intervals.
- Handle invalid dates.
- Handle expired dates (Display "The Celebration Has Begun").

Never hardcode the countdown date inside the component.

---

## 8. Wedding Events

Support configurable events:

- Haldi.
- Mehendi.
- Sangeet.
- Wedding Ceremony.
- Reception.

Each event can include:

- Title.
- Date.
- Day.
- Start time.
- End time.
- Venue.
- Address.
- Description.
- Dress code.
- Maps URL.

Events must be data-driven.

Allow users to:

- Add events.
- Remove events.
- Reorder events.
- Disable events.

Use an editorial invitation layout rather than generic dashboard cards.

---

## 9. Venue and Navigation

Display configured venue details:

- Venue name.
- Address.
- City.
- Event date and time.
- Get Directions action opening Google Maps URL.

Never invent venue information or generate misleading map destinations.

---

## 10. WhatsApp RSVP

Implement a reusable WhatsApp RSVP component:

- Optional guest name.
- Optional guest count.
- Configured WhatsApp number.
- Customizable invitation message.
- Input validation.
- URL encoding.

Open the generated WhatsApp URL safely using `window.open(..., '_blank', 'noopener,noreferrer')`.

Do not claim that an RSVP has been stored in a database.

---

## 11. Background Music

Implement optional background music:

- No autoplay with sound.
- Explicit play/pause interaction.
- Configurable audio source.
- Elegant music control.
- Accessible labels.
- Graceful handling of missing audio.

Do not include copyrighted music as default content.

---

## 12. React Architecture

Use modular React components:

```text
src/
├── components/
│   ├── invitation/
│   ├── animations/
│   ├── ui/
│   └── layout/
│
├── config/
│   └── wedding.ts
│
├── hooks/
│   ├── useCountdown.ts
│   └── useReducedMotion.ts
│
├── types/
│   └── wedding.ts
│
├── utils/
│   ├── date.ts
│   └── whatsapp.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 13. Centralized Configuration

Store all wedding information in a central configuration file: `src/config/wedding.ts`.

All user-customizable values (names, dates, venue, events, phone numbers, images, audio) live here.

Changing the configuration should be sufficient to customize the invitation without modifying the component implementation.

---

## 14. Responsive Design

Mobile-first development is mandatory.

Test 360px, 390px, 430px, tablet, and desktop screens.

Ensure:
- No horizontal overflow.
- Touch-friendly tap targets.
- Natural readability.
- Elegant aesthetic regardless of device size.

---

## 15. Final Quality Standard

**Minimum photographs. Maximum elegance. Beautiful motion. Premium experience. Reusable React architecture.**

