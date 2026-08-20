---
Document: 6 of 13
Title: Design System & Visual Guidelines
Client: Complete Care Hospital
Version: v2.0
Status: Approved — Ready for Build
---

# Design System & Visual Guidelines

This document outlines the foundational visual language, design tokens, typography, motion semantics, and component specifications for the Complete Care Hospital website. This system is designed for a **Premium & Immersive** user experience, implemented via Next.js, Tailwind CSS, and Framer Motion.

## 1. Design Philosophy

1. **Trust & Professionalism:** Visuals must reinforce medical authority and patient safety.
2. **Clarity & Accessibility:** High legibility, distinct calls-to-action (CTAs), and intuitive navigation.
3. **Compassion & Warmth:** Softened edges, approachable colors, and reassuring imagery.
4. **Performance & Responsiveness:** Fast loading, fluid layouts, and mobile-first focus.
5. **Premium & Immersive:** The design should feel alive with subtle motion, rich depth, and polished interactions to inspire confidence and comfort.

## 2. Color System (Upgraded)

The color palette has been upgraded for a more premium, trustworthy, and modern feel.

### Primary Colors
*   **Primary (Deep Navy):** `#0A2540` — Premium, trustworthy, authoritative. Used for headings, primary buttons, and dark background sections.
*   **Primary Light:** `#1A3A5C` — Hover states and softer dark elements.

### Secondary/Accent Colors
*   **Secondary/Accent (Vibrant Teal):** `#00C2A8` — Modern, healing, vibrant. Used for primary CTAs, active states, and emphasis.
*   **Secondary Dark:** `#009B87` — Hover states for teal elements.
*   **Emergency (Warm Red):** `#E63946` — Urgent but not harsh. Used exclusively for emergency contacts, alerts, and critical errors.

### Neutral Colors
*   **Background (Off-White):** `#FAFBFC` — Main application background. Softer than pure white to reduce eye strain.
*   **Surface:** `#F0F4F8` — Subtle alternations for sections (e.g., repeating service stripes).
*   **Card Background:** `#FFFFFF` — Pure white for elevated elements to create contrast.

### Typography Colors
*   **Text Primary:** `#0A2540` — High contrast body and heading text.
*   **Text Secondary:** `#4A5568` — Subtitles, metadata, secondary body text.
*   **Text Muted:** `#718096` — Disabled text, placeholders, very subtle hints.

### Functional Colors
*   **Border:** `#E2E8F0` — Subtle dividers and standard borders.
*   **Success:** `#10B981` — Success states (form submission, availability).
*   **Warning:** `#F59E0B` — Non-critical alerts.

### Tailwind Color Mapping (`tailwind.config.ts`)

```typescript
// tailwind.config.ts (Excerpt)
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0A2540',
        light: '#1A3A5C',
      },
      secondary: {
        DEFAULT: '#00C2A8',
        dark: '#009B87',
      },
      accent: {
        emergency: '#E63946',
      },
      background: {
        DEFAULT: '#FAFBFC',
        surface: '#F0F4F8',
        card: '#FFFFFF',
      },
      text: {
        primary: '#0A2540',
        secondary: '#4A5568',
        muted: '#718096',
      },
      border: {
        DEFAULT: '#E2E8F0',
      },
      status: {
        success: '#10B981',
        warning: '#F59E0B',
      }
    }
  }
}
```

## 3. Typography (Upgraded)

The typography stack uses modern, highly legible fonts loaded optimally via `next/font/google`.

### Font Families
*   **Headings:** **Outfit** (Weights: 600, 700) — Modern geometric sans-serif, provides a premium, clean look for titles.
*   **Body:** **Inter** (Weights: 400, 500, 600) — Highly legible, neutral sans-serif designed for UI and readability.
*   **Fallback:** `system-ui, -apple-system, sans-serif`

### Next.js Implementation

```typescript
// app/layout.tsx (Excerpt)
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

// apply via className={`${inter.variable} ${outfit.variable} font-sans`}
```

### Type Scale (Fluid Typography)
We utilize fluid typography (via `clamp()`) or Tailwind's responsive prefixes for scaling across devices.

*   **Display (H1 Hero):** `text-5xl md:text-6xl lg:text-7xl font-outfit font-bold tracking-tight`
*   **Heading 2 (Section Title):** `text-3xl md:text-4xl lg:text-5xl font-outfit font-semibold`
*   **Heading 3 (Card Title):** `text-xl md:text-2xl font-outfit font-semibold`
*   **Heading 4 (Minor Title):** `text-lg md:text-xl font-outfit font-semibold`
*   **Body Large (Lead Intro):** `text-lg md:text-xl font-inter font-normal text-text-secondary leading-relaxed`
*   **Body Base (Standard):** `text-base font-inter font-normal text-text-primary leading-relaxed`
*   **Body Small (Metadata, Legal):** `text-sm font-inter font-normal text-text-muted`

## 4. Spacing System

Based on Tailwind CSS's default 4px base scale.

*   `0.5` - 2px (Subtle tweaks)
*   `1` - 4px (Tight element spacing)
*   `2` - 8px (Small gaps)
*   `4` - 16px (Standard padding/gap)
*   `6` - 24px (Medium padding)
*   `8` - 32px (Section internal spacing)
*   `12` - 48px (Large spacing)
*   `16` - 64px (Standard section padding mobile)
*   `24` - 96px (Standard section padding desktop)

## 5. Iconography

*   **Library:** **Lucide React** (`lucide-react`)
*   **Style:** Line-style icons, clean and modern.
*   **Specs:** `strokeWidth={2}` (2px stroke), standard size `size={24}` (24px).
*   **Colors:** Match the icon's context (e.g., `text-secondary` for feature bullets, `text-primary` for UI actions).

## 6. Border Radius (Rounding)

Softer edges convey warmth and approachability.

*   **Buttons:** `rounded-lg` (8px)
*   **Inputs/Dropdowns:** `rounded-md` (6px) or `rounded-lg` (8px)
*   **Cards/Containers:** `rounded-xl` (12px)
*   **Large Sections/Hero Imagery:** `rounded-2xl` (16px) or `rounded-3xl` (24px)
*   **Avatars:** `rounded-full` (9999px)

## 7. Elevation & Shadows (Upgraded Premium Layers)

Upgraded to multi-layered premium shadows for a rich sense of depth, combined with glassmorphism where appropriate.

```typescript
// tailwind.config.ts (Excerpt)
theme: {
  extend: {
    boxShadow: {
      'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
      'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.1)',
      'elevated': '0 8px 24px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.12)',
    }
  }
}
```

### Glassmorphism Tokens
For floating navigation, sticky headers, and overlaid badges:
*   Background: `bg-white/80` or `bg-primary/90`
*   Blur: `backdrop-blur-md` or `backdrop-blur-lg`
*   Border: `border border-white/20` (for dark backgrounds) or `border-border/50` (for light).

## 8. Component Specifications

All components use utility classes and React props.

### Buttons
*   **Primary:** `bg-primary text-white hover:bg-primary-light transition-colors rounded-lg px-6 py-3 font-medium`
*   **Secondary (Accent):** `bg-secondary text-white hover:bg-secondary-dark transition-colors rounded-lg px-6 py-3 font-medium shadow-sm`
*   **Emergency:** `bg-accent-emergency text-white hover:opacity-90 transition-opacity rounded-lg px-6 py-3 font-bold uppercase tracking-wide`
*   **Outline:** `border-2 border-primary text-primary hover:bg-primary/5 transition-colors rounded-lg px-6 py-3 font-medium`
*   **Ghost:** `text-text-secondary hover:text-primary hover:bg-surface transition-colors rounded-lg px-4 py-2`

### Cards
*   **Standard Service Card:** `bg-background-card rounded-xl shadow-card hover:shadow-card-hover border border-border p-6 transition-shadow duration-300`
*   **Doctor Profile Card:** `bg-background-card rounded-xl shadow-card overflow-hidden group` (with image scaling on hover).

### Form Elements (Inputs, Selects, Textareas)
*   **Base Style:** `w-full border border-border rounded-lg px-4 py-3 bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all`
*   **Labels:** `block text-sm font-medium text-text-primary mb-2`
*   **Error State:** `border-accent-emergency focus:ring-accent-emergency/50` + `text-sm text-accent-emergency mt-1`

## 9. Interactive States (Hover & Tap)

Micro-interactions are critical for an immersive experience, powered by Framer Motion.

*   **Buttons:** `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}`.
*   **Cards:** Smooth shadow transition (`shadow-card-hover`) and slight upward lift (`-translate-y-1` or `whileHover={{ y: -4 }}`).
*   **Links:** Subtle color change and optional underline reveal.
*   **Images:** Image scales up slightly within a hidden-overflow container (`group-hover:scale-105 transition-transform duration-500`).

## 10. Motion & Animation (Massively Expanded)

We use `motion/react` (Framer Motion) to drive immersive, physics-based animations, scroll reveals, and page transitions.

### Motion Principles
*   **Subtle & Purposeful:** Animations should guide the eye and provide feedback, never overwhelm or delay the user.
*   **Physics-Based:** Use spring animations rather than linear easings for a natural, premium feel.
*   **Staggered:** Groups of items (cards, lists) should reveal sequentially.

### Framer Motion Variants

#### Fade & Slide Reveals
```javascript
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for premium feel
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
```

#### Staggered Containers
```javascript
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between items
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};
```

#### Spring Physics
```javascript
export const springBounce = {
  type: "spring",
  stiffness: 300,
  damping: 20
};

export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { type: "spring", stiffness: 400, damping: 25 }
};
```

#### State Transitions
```javascript
export const accordionExpand = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  collapsed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }
};

export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.4, ease: "easeInOut" }
};
```

### Scroll Reveal Patterns (`whileInView`)
Most sections should reveal as the user scrolls down to them.

```tsx
<motion.section
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, margin: "-100px" }} // Triggers slightly before element enters center
  variants={fadeInUp}
>
  {/* Content */}
</motion.section>
```

### Reduced Motion Fallbacks
Respect user OS preferences for reduced motion by checking `useReducedMotion()` from Framer Motion.

```tsx
import { motion, useReducedMotion } from 'motion/react';

const Component = () => {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? { initial: { opacity: 0 }, animate: { opacity: 1 } } : fadeInUp;
  // ...
}
```

## 11. Imagery & Media

*   **Photography:** Authentic, warm, showing diverse Nigerian patients and professionals in clean, modern medical settings. Use Vercel's optimized `next/image` (`<Image />`).
*   **Aspect Ratios:**
    *   Hero: 16:9 or 21:9
    *   Doctor Profiles: 3:4 (Portrait) or 1:1
    *   Service Cards: 16:9
*   **Loading:** Use `priority={true}` for LCP (Largest Contentful Paint) hero images. Use `placeholder="blur"` for seamless loading experiences.
*   **Overlays:** Apply `bg-gradient-to-t from-primary/80 to-transparent` on imagery with overlaid text to ensure contrast and readability.

## 12. Grid & Layout System

*   **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
*   **Grid:** Standard Tailwind 12-column grid.
    *   Mobile: `grid-cols-1`
    *   Tablet: `grid-cols-2`
    *   Desktop: `grid-cols-3` or `grid-cols-4` (for dense cards) or custom ratios like `grid-cols-12` (col-span-4 / col-span-8 for content/sidebar).

## 13. Data Display

*   **Tables:** Used primarily in the Legal Hub or complex service matrices. Must have responsive scroll containers (`overflow-x-auto`). Style with clean borders (`divide-y divide-border`), padded cells, and slightly distinct header rows (`bg-surface`).
*   **Badges:** Used for status, tags, or accreditations. `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-surface text-text-secondary`.

## 14. Responsive Breakpoints

Standard Tailwind breakpoints align with common device widths:
*   `sm`: `640px` (Large phones / small tablets)
*   `md`: `768px` (Tablets)
*   `lg`: `1024px` (Small laptops / landscape tablets)
*   `xl`: `1280px` (Desktops)
*   `2xl`: `1536px` (Large monitors)

## 15. Design Token Reference (`tailwind.config.ts` Outline)

The primary source of truth for the design system tokens is the Tailwind configuration file.

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540',
          light: '#1A3A5C',
        },
        secondary: {
          DEFAULT: '#00C2A8',
          dark: '#009B87',
        },
        accent: {
          emergency: '#E63946',
        },
        background: {
          DEFAULT: '#FAFBFC',
          surface: '#F0F4F8',
          card: '#FFFFFF',
        },
        text: {
          primary: '#0A2540',
          secondary: '#4A5568',
          muted: '#718096',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.1)',
        'elevated': '0 8px 24px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
};

export default config;
```
