# Build Architecture: Complete Care Hospital Website

**Document ID:** 02 of 11  
**Version:** v2.0  
**Status:** Approved — Ready for Build  
**Client:** Complete Care Hospital (Amr / TechOptyx)  

## 1. Architectural Overview

The Complete Care Hospital website has transitioned to a modern, robust, and scalable architecture utilizing **Next.js 15 (App Router)** and **React 19**. The architecture follows a component-driven, Server-First paradigm.

**Guiding Principles:**
1.  **Component-Driven Development:** UI is broken down into isolated, reusable React components (e.g., `<Button />`, `<ServiceCard />`, `<SectionHeading />`).
2.  **Server-First rendering:** Leverage Next.js React Server Components (RSC) by default to minimize client-side JavaScript, optimize SEO, and improve time-to-interactive. Use Client Components (`"use client"`) strictly for interactivity (e.g., animations, form state).
3.  **Utility-First Styling:** Use Tailwind CSS 4 for all styling, ensuring consistency through design tokens defined in `tailwind.config.ts`.
4.  **Type Safety:** Strict TypeScript implementation across all components, APIs, and data structures.
5.  **Progressive Enhancement & Animations:** Utilize Framer Motion (`motion/react`) for premium, hardware-accelerated animations that don't block the main thread.

## 2. Technology Stack

*   **Core Framework:** Next.js 15 (App Router)
*   **UI Library:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4
*   **Animation:** Framer Motion (`motion/react`)
*   **Icons:** Lucide React (line-style, 2px stroke)
*   **Typography:** `next/font/google` (Outfit for headings, Inter for body)
*   **Image Optimization:** Next.js `<Image>` Component
*   **Form Handling:** React Server Actions + Zod (Validation) + Resend (Email Delivery) / Formspree (fallback)
*   **Hosting / Deployment:** Vercel (Primary) or Netlify
*   **Package Manager:** pnpm

## 3. File & Folder Structure

The project utilizes the Next.js `/app` directory convention:

```text
complete-care-hospital/
├── app/
│   ├── layout.tsx                # Root layout (header, footer, fonts, metadata)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/page.tsx  # Dynamic service detail routing
│   ├── doctors/page.tsx
│   ├── appointment/page.tsx
│   ├── patients/page.tsx
│   ├── locations/page.tsx
│   ├── contact/page.tsx
│   ├── legal/page.tsx
│   ├── thank-you/page.tsx
│   ├── not-found.tsx             # 404 page
│   ├── globals.css               # Tailwind directives + custom CSS
│   ├── sitemap.ts                # Programmatic sitemap generation
│   └── robots.ts                 # Programmatic robots.txt generation
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── EmergencyBanner.tsx
│   │   └── MobileNav.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── DoctorCard.tsx
│   │   ├── Accordion.tsx
│   │   ├── Badge.tsx
│   │   ├── Testimonial.tsx
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── QuickAccess.tsx
│   │   ├── TopServices.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── CTABanner.tsx
│   │   └── ContactInfo.tsx
│   └── forms/
│       ├── AppointmentForm.tsx
│       ├── ContactForm.tsx
│       └── FormField.tsx
├── lib/
│   ├── actions.ts                # Server Actions for form handling
│   ├── data.ts                   # Static data (services, doctors)
│   ├── validations.ts            # Zod schemas
│   └── utils.ts                  # Utility functions (cn, etc.)
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── doctors/
│   │   ├── services/
│   │   └── accreditation-badges/
│   ├── pdfs/
│   │   ├── medical-records-request.pdf
│   │   ├── advance-directive.pdf
│   │   └── financial-assistance-application.pdf
│   └── favicon/
│       ├── favicon.ico
│       └── ...
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 4. Naming Conventions

*   **React Components:** `PascalCase.tsx` (e.g., `ServiceCard.tsx`, `Hero.tsx`)
*   **Next.js Routes:** `kebab-case` directories (e.g., `/app/thank-you`, `/app/patient-resources`)
*   **Utility Functions & Hooks:** `camelCase.ts` (e.g., `useScroll.ts`, `formatDate.ts`)
*   **Type Definitions:** `PascalCase` interfaces/types (e.g., `interface DoctorProfile { ... }`)
*   **Constant Data:** UPPER_SNAKE_CASE for global constants, camelCase for static data arrays (e.g., `servicesData`)

## 5. React Component Architecture

*   **Layout Pattern (`layout.tsx`):** The Root Layout wraps all pages, initializing the `html` and `body` tags, configuring `next/font`, setting up global metadata, and injecting the global `<Header>` and `<Footer>`. Nested layouts can be used for specific sections if needed.
*   **Page Pattern (`page.tsx`):** Each route acts as a Server Component, responsible for defining metadata (`generateMetadata`), fetching necessary data, and composing the layout using section components.
*   **Component Composition:** Pages are built by composing Section components (e.g., `<Hero />`, `<TopServices />`), which in turn compose UI components (e.g., `<Button />`, `<Card />`).

## 6. Tailwind CSS Architecture

*   **`tailwind.config.ts`:** Serves as the central repository for the Design System tokens (colors, typography, spacing, border radius, shadows). 
*   **`globals.css`:** Contains Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`) and minimal global resets or custom keyframes that cannot be expressed via utility classes.
*   **`cn()` Utility:** Used to conditionally merge Tailwind classes safely without style conflicts (via `clsx` and `tailwind-merge`), located in `lib/utils.ts`.

## 7. State & Logic Architecture

*   **Server Components (RSC):** Default for all components. Used for rendering static content, passing props, and data fetching on the server.
*   **Client Components:** Designated with `"use client"` directive at the top of the file. Used only when necessary for:
    *   Interactivity (useState, useEffect, event listeners).
    *   Framer Motion animations.
    *   Browser API usage (window, document).
*   **Server Actions:** Asynchronous functions executed on the server, used for mutating data (e.g., submitting contact or appointment forms) without the need for manual API route creation.

## 8. Component Inventory

*   **Layout:** Header, Footer, EmergencyBanner, MobileNav
*   **UI Primitives:** Button, Card, Badge, Input, Select, Textarea, Label
*   **Domain-Specific:** ServiceCard, DoctorCard, Testimonial, SectionHeading
*   **Interactive:** Accordion, Modal/Dialog, Tabs, Slider/Carousel
*   **Forms:** AppointmentForm, ContactForm

## 9. Page Template Taxonomy

*   **T1: Home:** Hero (slider/video), Quick Actions, Top Services, Why Choose Us, Doctor Highlights, CTA.
*   **T2: Listing / Grid:** For Services and Doctors pages. Features filters, grid layout of cards.
*   **T3: Detail / Article:** For Service Detail pages. Features a hero banner, rich text body content, related doctors, and a persistent sidebar CTA.
*   **T4: Form Focused:** For Appointment and Contact pages. Prominent forms with validation, adjacent contact information or maps.
*   **T5: Content / Document:** For Legal pages, Patient Resources. Typography-optimized reading layout, often with side navigation.
*   **T6: Utility:** 404 Not Found, 500 Error, Thank You page.

## 10. Asset Pipeline

*   **Images:** Rendered via `next/image` (`<Image src="..." />`). This provides automatic WebP/AVIF conversion, responsive sizing (via `sizes` prop), lazy loading, and prevents Cumulative Layout Shift (CLS).
*   **Icons:** Lucide React icons imported individually (e.g., `import { Heart } from 'lucide-react'`) to enable tree-shaking.
*   **Fonts:** `next/font/google` statically analyzes and hosts Outfit and Inter at build time, eliminating external network requests and layout shift.

## 11. Form Handling

Forms are built using Client Components for interactive validation feedback, powered by React Hook Form (optional but recommended for complex forms) and Zod for schema validation. Form submission utilizes Next.js Server Actions (`lib/actions.ts`) to securely process the data and send emails via Resend (or Formspree as a fallback).

## 12. Animation Architecture

Framer Motion is used for micro-interactions and scroll reveals.
*   Use `whileInView` with `viewport: { once: true, margin: "-100px" }` for scroll-triggered fades.
*   Define animation variants globally in a configuration file or locally in the component.
*   Animations must not hinder performance; avoid animating expensive properties (stick to opacity and transform).

## 13. SEO & Metadata

Implemented via Next.js Metadata API.
*   Static routes define `export const metadata: Metadata = { ... }`.
*   Dynamic routes (e.g., service details) utilize `export async function generateMetadata({ params }): Promise<Metadata> { ... }`.
*   Sitemap and `robots.txt` are generated dynamically via `sitemap.ts` and `robots.ts` in the app directory.

## 14. ADRs (Architecture Decision Records)

*   **ADR 1: Adoption of Next.js 15 App Router.** Selected over plain HTML/React SPA for superior SEO (critical for local healthcare search), performance (Server Components), and simplified routing.
*   **ADR 2: Tailwind CSS 4.** Selected for rapid UI development, strict adherence to the design system without massive CSS files, and easy maintenance.
*   **ADR 3: Framer Motion.** Chosen over vanilla CSS transitions for complex, orchestrated, and physics-based animations that deliver a premium brand experience.

## 15. Compliance

*   Code architecture guarantees secure form handling strictly over HTTPS.
*   Adherence to Nigeria Data Protection Act (NDPA) 2023 by not storing form submissions in a database locally, but directly transmitting via secure email services (Resend).
*   Strict accessibility (a11y) standards via semantic HTML within JSX and ARIA attributes where needed.
