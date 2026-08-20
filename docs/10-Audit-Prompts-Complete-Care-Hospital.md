# Complete Care Hospital – Audit Prompts

**Document Number:** 10 of 13
**Version:** v2.0
**Status:** Approved — Ready for Build

## 1. Purpose of This Document
This document contains a structured set of prompts designed for an AI assistant (or human auditor) to run automated quality assurance checks on the Complete Care Hospital codebase. Following the transition to the **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion** stack, these audit prompts verify structural integrity, accessibility, SEO metadata generation, performance optimization, and proper component architecture across the application.

## 2. How to Use These Prompts
To perform an audit, provide the assistant with access to the relevant directories (specifically `/app`, `/components`, `/lib`, and `tailwind.config.ts`) or provide the code context for the specific area being tested. Copy the prompt block exactly as written and paste it into the assistant. Ensure that the assistant analyzes the requested files comprehensively before providing its pass/fail report.

---

## Category A: Structural & Cross-Page Consistency

### A.1 Component Rendering Audit
> **Prompt:** "Audit all page layouts in the `/app` directory, focusing on `layout.tsx` and route groups. Verify that the global layout correctly renders the `Header`, `EmergencyBanner`, and `Footer` components. Confirm that these single-source React components render all required content (e.g., all 13 navigation links, emergency phone number +234 806 539 5623, physical address, and hours) accurately and consistently across the entire site."

### A.2 Internal Link Audit
> **Prompt:** "Scan all components in the `/components` and `/app` directories for internal links. Verify that all internal routing uses the Next.js `<Link>` component from `next/link`. Ensure there are zero `.html` extensions in the `href` attributes (e.g., links should point to `/services/cardiology`, not `services-cardiology.html`). Flag any hardcoded or absolute URLs that should be relative."

### A.3 Naming Convention Audit
> **Prompt:** "Review the `/components`, `/app`, and `/lib` directories. Ensure adherence to React and TypeScript naming conventions: components and types/interfaces must use PascalCase (e.g., `ServiceCard.tsx`, `DoctorProfile`), while utility functions, custom hooks, and server actions must use camelCase (e.g., `submitContactForm`, `useViewport`). Flag any deviations."

---

## Category B: Functional Content & Component Architecture

### B.1 Core Route Verification
> **Prompt:** "Verify that all 13 required pages have corresponding Next.js routes within the `/app` directory (Home, About, Services, dynamic `[slug]` for Service Detail, Doctors, Appointment, Patient Resources, Locations, Contact, Legal Hub, 404 `not-found.tsx`, Thank You, and programmatic `sitemap.ts`/`robots.ts`). Flag any missing routes."

### B.2 Page Component Structure
> **Prompt:** "Examine the `page.tsx` files for the core routes (Home, About, Services). Verify that the React component structure logically matches the design requirements, utilizing semantic HTML tags within JSX (e.g., `<main>`, `<section>`, `<article>`, `<aside>`) instead of nested meaningless `<div>` tags."

### B.3 React Component Inventory
> **Prompt:** "Audit the `/components` directory against the design system requirements. Ensure the existence and proper TypeScript typing of core UI components (`Button`, `Card`, `ServiceCard`, `DoctorCard`, `Accordion`, `Badge`, `Testimonial`, `SectionHeading`). Verify that these components correctly utilize Tailwind classes for styling."

---

## Category C: Forms & Data Submission

### C.1 React Forms & Zod Validation
> **Prompt:** "Audit `AppointmentForm.tsx` and `ContactForm.tsx`. Verify that they are implemented as React client components (if using client state) and that input validation is strictly enforced using Zod schemas located in `/lib/validations.ts`. Ensure error messages correctly map to UI states."

### C.2 Server Actions Wiring
> **Prompt:** "Review the form submission process in `/components/forms/`. Confirm that forms are wired to Next.js Server Actions defined in `/lib/actions.ts` rather than traditional API endpoint fetching. Ensure loading states (`useFormStatus` or similar) are handled properly during submission."

### C.3 React Honeypot Audit
> **Prompt:** "Examine the form components to ensure a hidden honeypot field is implemented for basic spam prevention. Verify that the field is visually hidden using Tailwind (`sr-only` or `hidden`) but remains accessible to bots, and that the Server Action rejects the submission if this field is populated."

### C.4 Prefill via SearchParams
> **Prompt:** "Audit the Appointment route and form. Verify that it correctly reads URL parameters via Next.js `searchParams` (in Server Components) or `useSearchParams` (in Client Components) to prefill the 'Service' or 'Doctor' dropdowns when linked from a specific service or doctor page."

---

## Category D: Responsive Design

### D.1 Viewport Meta & Tailwind Breakpoints
> **Prompt:** "Examine the layout and component files. Verify that the standard viewport meta tag is generated correctly. Audit the usage of Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to ensure a mobile-first approach, particularly on complex layouts like the Doctors grid and Services list."

### D.2 Mobile Navigation
> **Prompt:** "Audit the `MobileNav.tsx` or Header component. Ensure the hamburger menu functions correctly on small screens (using React state to toggle visibility) and that it properly traps focus and prevents body scrolling when open."

---

## Category E: Accessibility (a11y)

### E.1 ARIA and Semantic JSX
> **Prompt:** "Scan all JSX in the `/components` and `/app` directories. Verify correct usage of ARIA attributes (e.g., `aria-expanded`, `aria-hidden`, `aria-label`). Ensure interactive elements use `<button>` or `<a>` and not `<div>` with `onClick` handlers."

### E.2 Color Contrast & Tailwind Utilities
> **Prompt:** "Review `tailwind.config.ts` and component class names. Verify that text colors against background colors (e.g., `text-primary` on `bg-surface`, `text-white` on `bg-primary`) meet WCAG AA contrast ratios (4.5:1 for normal text)."

### E.3 Keyboard Navigation
> **Prompt:** "Check interactive React components (modals, accordions, dropdowns, forms). Ensure they can be fully navigated using the Tab key, and that the visual focus state is explicitly defined using Tailwind's `focus-visible:` utilities."

### E.4 Alt Text via Next Image
> **Prompt:** "Audit all usages of the Next.js `<Image>` component. Verify that every image includes a descriptive `alt` attribute. Flag any images missing alt text or using generic terms like 'image' or 'picture'."

### E.5 Form Accessibility
> **Prompt:** "Verify that all form inputs have correctly associated `<label>` elements using the `htmlFor` attribute in JSX matching the input's `id`. Ensure `aria-invalid` and `aria-describedby` are used to associate Zod validation error messages with their respective fields."

### E.6 Route Transition Accessibility
> **Prompt:** "Audit the application for client-side route transitions. Verify that screen readers are notified of route changes (e.g., focus management or aria-live announcements) since Next.js client-side navigation does not inherently trigger a full page reload."

---

## Category F: Performance

### F.1 Next.js Image Component Usage
> **Prompt:** "Scan the codebase for `<img>` tags. Verify that they have been replaced with the Next.js `<Image>` component where appropriate to ensure automatic WebP conversion, sizing, and optimization. Ensure `priority` is used correctly on LCP (Largest Contentful Paint) images like the Hero section."

### F.2 Client Boundary Optimization
> **Prompt:** "Review the use of the `'use client'` directive across the `/app` and `/components` directories. Verify that it is only used at the leaves of the component tree where interactivity, hooks, or browser APIs are required, keeping the majority of components as Server Components to minimize the client JavaScript bundle."

### F.3 Dynamic Imports & Lazy Loading
> **Prompt:** "Check for heavy components, below-the-fold sections, or modals. Verify if `next/dynamic` or React `Suspense` is used to lazy-load these components, reducing the initial load time."

### F.4 Framer Motion Performance
> **Prompt:** "Audit the use of Framer Motion (`motion/react`). Ensure animations use hardware-accelerated CSS properties (like `transform` and `opacity`) and do not trigger layout recalculations. Verify that `whileInView` is used responsibly with appropriate view margins to maintain 60fps scrolling performance."

---

## Category G: SEO & Metadata

### G.1 Next.js Metadata API
> **Prompt:** "Audit the `layout.tsx` and `page.tsx` files across all routes. Verify that the Next.js Metadata API (e.g., `export const metadata: Metadata = {...}` or `generateMetadata`) is used correctly to provide unique, optimized `<title>` and `<meta name="description">` tags for every page."

### G.2 JSON-LD Structured Data
> **Prompt:** "Review the Home page, Local/Contact page, and Doctor pages. Verify that JSON-LD structured data (Schema.org) for 'Hospital', 'MedicalOrganization', and 'Physician' is correctly injected using Next.js mechanisms (e.g., inserting a `<script type="application/ld+json">` tag) and validates against the project's factual data."

### G.3 Programmatic Sitemap & Robots
> **Prompt:** "Audit `app/sitemap.ts` and `app/robots.ts`. Ensure they are correctly implemented to dynamically generate `sitemap.xml` and `robots.txt` based on the application's routes, and that no standard pages are accidentally disallowed in robots.txt."

---

## Category H: Legal & Compliance

### H.1 NDPA & Privacy Accuracy
> **Prompt:** "Audit the Legal Hub (`/legal/page.tsx`). Ensure all references strictly refer to the Nigeria Data Protection Act (NDPA) 2023 / NDPC and do NOT mention HIPAA. Verify that standard boilerplate is accurate for the Nigerian healthcare context."

### H.2 Cookie Consent Implementation
> **Prompt:** "Check for the existence and functionality of a Cookie Consent banner component. Verify that it defaults to non-essential cookies being blocked until the user explicitly accepts, and that the state is stored correctly (e.g., in localStorage or cookies)."

---

## Category I: Brand & Content Accuracy

### I.1 Brand Facts Check
> **Prompt:** "Scan the entire codebase. Ensure the client name is strictly 'Complete Care Hospital'. Verify the phone number is '+234 806 539 5623', email is 'enquires.complete_care@gmail.com', and currency is '₦' (Naira) across all instances."

### I.2 Doctor & Service Parity
> **Prompt:** "Cross-reference `/lib/data.ts` (or the equivalent data source) against the project facts. Verify all 12 services and exactly 9 named doctors (Dr. Emily Carter, Dr. James Okafor, etc.) are present, correctly spelled, and matched with their respective specialties."

---

## Category J: Final Polish & Master Audit

### J.1 Master Full Site Audit
> **Prompt:** "Perform a comprehensive master audit of the entire Next.js Complete Care Hospital project. 
> 1. Run `pnpm build` (or equivalent) logic to ensure no TypeScript or ESLint errors occur.
> 2. Verify Server Actions compile and forms are wired.
> 3. Check that Tailwind CSS 4 is applying styles correctly with the premium design tokens (Primary `#0A2540`, Secondary `#00C2A8`, Inter/Outfit fonts).
> 4. Ensure Framer Motion route transitions and scroll reveals function smoothly.
> 5. Confirm Next.js Image components and Metadata API are fully implemented.
> Produce a final pass/fail report listing any critical blockers before deployment to Vercel/Netlify."
