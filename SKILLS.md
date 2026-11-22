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
- Framer Motion (`motion/react` when supported by the installed version).
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

- Cormorant Garamond.
- DM Sans.
- Great Vibes.

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
2. Bride photograph.
3. Groom photograph.

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
- Wax seal.
- Animated envelope flap.
- Invitation card reveal.
- Card movement.
- Transition into the main website.

Use Framer Motion.

Include a skip option.

Ensure that opening the invitation works on touch devices.

### Falling leaves and petals

Implement lightweight falling decorations using CSS and SVG.

Requirements:

- Different shapes.
- Random positions.
- Different sizes.
- Different speeds.
- Natural rotation.
- Slight horizontal movement.
- Variable opacity.
- Limited particle count.

Decorations must not interfere with content or interactions.

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
- Respect the configured timezone.
- Default to Asia/Kolkata.
- Update every second.
- Clean up intervals.
- Handle invalid dates.
- Handle expired dates.

Use an appropriate date utility when needed.

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

Display configured venue details.

Include:

- Venue name.
- Address.
- City.
- Event date and time.
- Get Directions action.

Open the supplied Google Maps URL.

Never invent venue information or generate misleading map destinations.

---

## 10. WhatsApp RSVP

Implement a reusable WhatsApp RSVP component.

Requirements:

- Optional guest name.
- Optional guest count.
- Configured WhatsApp number.
- Customizable invitation message.
- Input validation.
- URL encoding.

Open the generated WhatsApp URL safely.

Do not claim that an RSVP has been stored in a database.

A WhatsApp handoff is not a backend submission.

---

## 11. Background Music

Implement optional background music.

Requirements:

- No autoplay with sound.
- Explicit play/pause interaction.
- Configurable audio source.
- Elegant music control.
- Accessible labels.
- Graceful handling of missing audio.

Do not include copyrighted music as default content.

---

## 12. React Architecture

Use modular React components.

Recommended structure:

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

Adapt the structure to the existing application when necessary.

Keep:

- Components reusable.
- Business logic separate.
- Wedding information centralized.
- TypeScript types explicit.
- Configuration easy to understand.

Avoid unnecessary abstractions.

---

## 13. Centralized Configuration

Store all wedding information in a central configuration file.

Recommended location:

`src/config/wedding.ts`

Configuration should support:

- Bride information.
- Groom information.
- Couple information.
- Photographs.
- Invitation message.
- Wedding date.
- Timezone.
- Venue.
- Wedding events.
- Family details.
- WhatsApp number.
- Background music.
- Optional sections.

Do not hardcode wedding information in individual components.

Use proper TypeScript types.

Optional values must be handled gracefully.

Changing the configuration should be sufficient to customize the invitation without modifying the component implementation.

---

## 14. Responsive Design

Mobile-first development is mandatory.

Test:

- 360px.
- 390px.
- 430px.
- Tablet.
- Desktop.
- Large desktop.

Requirements:

- No horizontal overflow.
- No overlapping content.
- Proper typography.
- Comfortable spacing.
- Touch-friendly controls.
- Proper image positioning.
- Smooth mobile animations.

The website must look intentionally designed for mobile devices.

---

## 15. Accessibility

Implement:

- Semantic HTML.
- Keyboard navigation.
- Accessible buttons.
- Proper image alt text.
- Visible focus states.
- Reduced-motion support.
- Appropriate contrast.
- Accessible form labels.

Do not sacrifice accessibility for animation.

---

## 16. SEO and Sharing

For the React + Vite application, configure:

- HTML document title.
- Meta description.
- Favicon.
- Theme color.
- Open Graph defaults.
- Social sharing image.

Understand that dynamic per-couple Open Graph previews require an appropriate server-side or prerendering solution. Do not claim that client-side React updates alone guarantee dynamic social previews.

---

## 17. Development Workflow

Always follow this process:

### Step 1: Inspect

- Inspect the repository.
- Inspect package.json.
- Understand the installed dependencies.
- Inspect existing assets.
- Inspect current styling.
- Identify reusable components.

### Step 2: Plan

- Establish the design system.
- Identify required sections.
- Establish the configuration schema.
- Plan component boundaries.

### Step 3: Implement

Build the invitation in a logical sequence.

Start with the design foundation, then the envelope, hero, content sections, animations and interactions.

### Step 4: Integrate

Connect all sections through the centralized wedding configuration.

Ensure optional sections behave correctly.

### Step 5: Test

Verify:

- Responsive layouts.
- Envelope opening.
- Skip animation.
- Countdown.
- Event rendering.
- Maps navigation.
- WhatsApp RSVP.
- Music controls.
- Missing images.
- Missing audio.
- Reduced-motion behavior.
- Browser console errors.

### Step 6: Document

Create or update README documentation.

Explain:

- Installation.
- Development.
- Build.
- Configuration.
- Photograph replacement.
- Event management.
- WhatsApp configuration.
- Music configuration.
- Deployment.

---

## 18. Strict Rules

1. Use React + Vite.
2. Use TypeScript.
3. Never use Next.js.
4. Use no more than three unique couple photographs.
5. Never make the design photograph-dependent.
6. Never use random stock couple photographs.
7. Follow the configured color palette.
8. Avoid excessive decoration.
9. Avoid animation overload.
10. Never autoplay background music with sound.
11. Centralize all wedding information.
12. Never invent personal wedding details.
13. Make all buttons functional.
14. Keep the website mobile-first.
15. Handle missing optional data gracefully.
16. Keep components modular and maintainable.
17. Respect accessibility and performance.
18. Test before declaring completion.

---

## 19. Final Quality Standard

The completed website should feel like a luxury digital wedding invitation.

It should combine:

- Premium editorial design.
- Cinematic motion.
- Natural falling petals and leaves.
- Elegant typography.
- Minimal photography.
- Beautiful Indian wedding event presentation.
- Functional countdown.
- WhatsApp RSVP.
- Mobile-first layouts.

The final experience should be:

**Minimum photographs. Maximum elegance. Beautiful motion. Premium experience. Reusable React architecture.**
