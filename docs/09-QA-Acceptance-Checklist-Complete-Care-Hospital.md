# Document 09: QA / Acceptance Checklist

**Project:** Complete Care Hospital Website
**Client:** Complete Care Hospital (Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja, Nigeria)
**Version:** v2.0
**Status:** Approved — Ready for Build

---

## 1. How to Use This Checklist

This checklist is designed to validate the website before final handover to Complete Care Hospital. It serves as the formal acceptance criteria.
- **Developers:** Use this during development to ensure all requirements are met. Run the Next.js dev server (`npm run dev`) for local testing, and use Vercel preview deployments for shareable QA environments.
- **QA Testers:** Execute these checks systematically across the Vercel preview URLs.
- **Client (Amr / TechOptyx):** Review these items during the User Acceptance Testing (UAT) phase.

Check off items only when they pass consistently across required browsers and devices.

---

## 2. Pre-Requisites for QA

- [ ] Vercel preview deployment URL is active and accessible.
- [ ] Test data (dummy form submissions) is prepared.
- [ ] Accessibility testing tools (e.g., WAVE, Axe, VoiceOver, NVDA) are installed.
- [ ] Lighthouse (Chrome DevTools) is available for performance auditing.

---

## 3. Cross-Browser & Device Test Matrix

Test the site on the following combinations to ensure robust compatibility.

**Desktop (Windows & macOS):**
- [ ] Google Chrome (Latest)
- [ ] Mozilla Firefox (Latest)
- [ ] Safari (Latest - macOS only)
- [ ] Microsoft Edge (Latest)

**Mobile & Tablet (Real devices or accurate emulation):**
- [ ] iOS Safari (iPhone 12 or newer)
- [ ] iOS Safari (iPad / iPad Pro)
- [ ] Android Chrome (Samsung Galaxy S21 or equivalent)
- [ ] Android Firefox

**Specific Next.js Behaviors:**
- [ ] **JavaScript Hydration:** Next.js SSR and client hydration must complete successfully without console errors.
- [ ] **Route Transitions:** Navigation between pages must be smooth, SPA-style, without full page reloads.

---

## 4. Global Elements (Header, Footer, Navigation)

- [ ] Header/Footer render correctly from `layout.tsx` on all routes.
- [ ] Logo links correctly to the home page (`/`).
- [ ] Main navigation links are accurate and highlight the active route.
- [ ] Emergency CTA button (e.g., "Emergency: +234 806 539 5623") is prominently visible and triggers tel: protocol.
- [ ] **MobileNav Component:** Opens and closes smoothly with Framer Motion animations.
- [ ] Mobile navigation menu traps focus correctly when open and allows access to all pages.
- [ ] Footer contains correct hospital address, phone, email, and copyright year.
- [ ] Footer links to Legal Hub (`/legal`) and other primary pages work correctly.

---

## 5. Per-Page Content & Animation Verification

Verify that all 13 pages render correctly and meet content requirements. Update references from `.html` to Next.js routes.

**General Animation QA:**
- [ ] Scroll reveal animations trigger correctly when elements enter the viewport.
- [ ] Card hover animations (e.g., Doctor and Service cards) feel smooth and maintain 60fps.
- [ ] Page transitions work seamlessly on route changes.

**Page Routing Checks:**
- [ ] **Home (`/` or `app/page.tsx`):** Hero section, Top Services, and Quick Access render correctly.
- [ ] **About Us (`/about`):** Mission, vision, and hospital history content is accurate.
- [ ] **Services (`/services`):** All 12 services (Cardiology, Oncology, Orthopedics, Neurology, Women's Health, Pediatrics, Emergency Care, Primary Care, Surgery, Imaging & Diagnostics, Behavioral Health, Physical Rehabilitation) are listed.
- [ ] **Service Detail (`/services/[slug]`):** Dynamic routing works for individual services, displaying correct details.
- [ ] **Doctors (`/doctors`):** All 9 sample doctors are displayed with correct specialties and photos.
- [ ] **Appointment (`/appointment`):** Form renders correctly and is easily accessible.
- [ ] **Patient Resources (`/patients`):** Patient guide, FAQs, and PDF links (Medical Records, Advance Directive, Financial Assistance) function properly.
- [ ] **Locations (`/locations`):** Google Maps embed, address, and facility details are correct.
- [ ] **Contact (`/contact`):** Contact form, phone number, and email address are correct.
- [ ] **Legal Hub (`/legal`):** Privacy Policy, Terms of Service, and NDPA 2023 compliance text are present.
- [ ] **404 Not Found (`/not-found`):** Custom error page renders gracefully with a link back home.
- [ ] **Thank You (`/thank-you`):** Confirmation page post-form submission renders correctly.
- [ ] **Sitemap/Robots (`sitemap.xml`, `robots.txt`):** Programmatically generated files return valid content.

---

## 6. Form Functionality & Validation

Forms must be rigorously tested using the new React Server Actions setup (or Formspree fallback).

- [ ] **Server Action Submission:** Forms successfully submit data to the server.
- [ ] **Zod Validation:** Inline validation errors appear correctly for empty or invalid fields (e.g., invalid email).
- [ ] **Form State Management:** Loading, success, and error states transition correctly.
- [ ] **useFormStatus Hook:** Form displays a pending state (e.g., disabling submit button, showing spinner) during submission.
- [ ] Email notifications (via Resend or Formspree) are received at enquires.complete_care@gmail.com upon successful submission.
- [ ] Successful submission redirects to the `/thank-you` page or shows a clear success message.

---

## 7. Responsive & Visual Design

- [ ] **Tailwind Implementation:** UI matches the premium design tokens (Primary: `#0A2540`, Accent: `#00C2A8`, etc.).
- [ ] Elements scale properly across mobile, tablet, and desktop breakpoints.
- [ ] No horizontal scrolling on mobile devices (except for specific intentional carousels/sliders).
- [ ] Typography (Outfit for headings, Inter for body) loads correctly and falls back gracefully.
- [ ] **Framer Motion:** Animations respect the user's `prefers-reduced-motion` OS setting (disabling or simplifying animations if enabled).

---

## 8. Accessibility (a11y)

- [ ] All interactive elements (buttons, links, inputs) are keyboard navigable (Tab/Shift+Tab).
- [ ] Focus states are clearly visible for keyboard users.
- [ ] Images have descriptive `alt` text (implemented via Next.js `<Image>`).
- [ ] Color contrast ratios meet WCAG AA standards.
- [ ] **Screen Readers:** Route changes announce correctly to screen readers (handled automatically by Next.js App Router).
- [ ] **Framer Motion `AnimatePresence`:** Exit animations do not break keyboard focus management or trap users.

---

## 9. Performance Optimization

- [ ] **Lighthouse Performance Score:** ≥ 90 on mobile (upgraded from 85 due to Next.js optimizations).
- [ ] **Image Optimization:** Next.js `<Image>` component is used for all images, ensuring lazy loading and WebP/AVIF formats.
- [ ] **Font Loading:** `next/font/google` is implemented correctly, resulting in zero Cumulative Layout Shift (CLS).
- [ ] **Animation Performance:** Framer Motion animations are hardware-accelerated where possible and maintain a consistent 60fps.

---

## 10. SEO & Technical Implementation

- [ ] **Next.js Metadata API:** `generateMetadata` or static `metadata` exports are implemented on all pages with correct title tags and meta descriptions.
- [ ] Open Graph (OG) tags are properly configured for social sharing.
- [ ] Canonical URLs are set correctly.
- [ ] `robots.txt` allows indexing (unless in a protected staging environment).
- [ ] XML Sitemap dynamically includes all relevant routes (`/app/sitemap.ts`).

---

## 11. Security & Compliance

- [ ] Forms do not expose sensitive server-side logic to the client.
- [ ] Input data is sanitized on the server (via Zod/Server Actions) to prevent XSS.
- [ ] The Legal Hub clearly states NDPA 2023 compliance.
- [ ] Note: HIPAA compliance is specifically *not* required for this project.

---

## 12. Final Sanity Checks

- [ ] Currency is correctly displayed as Naira (₦) anywhere pricing or fees might be mentioned.
- [ ] The address explicitly states "Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja, Nigeria".
- [ ] Phone number is strictly "+234 806 539 5623".
- [ ] Email address is strictly "enquires.complete_care@gmail.com".

---

## 13. Client Handover Readiness

- [ ] Vercel (or Netlify) production deployment is configured with the custom domain.
- [ ] All environment variables (e.g., email API keys, DB connections if any) are securely stored in the deployment platform.
- [ ] Final source code pushed to the main Git repository branch.

---

## 14. Sign-Off

**QA Lead / Developer:** ________________________ Date: ____________
**Client (Amr / TechOptyx):** ________________________ Date: ____________
