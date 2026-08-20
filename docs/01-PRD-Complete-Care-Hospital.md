# Product Requirements Document (PRD)
## Complete Care Hospital — Official Website

| Field | Detail |
|---|---|
| Document Type | Product Requirements Document |
| Document Version | v2.0 |
| Status | Approved — Ready for Build |
| Project Name | Complete Care Hospital Website |
| Project Type | Next.js Web Application (React / TypeScript / Tailwind CSS 4) |
| Owner | Amr — TechOptyx |
| Client | Complete Care Hospital |
| Document Order in Suite | 1 of 11 (PRD → Build Architecture → Wireframes → Prompt Sequence → Content Deck → Design System → Data/Form Flow → SEO Sheet → QA Checklist → Audit Prompts → Document Map) |
| Last Updated | August 2026 |

---

## Table of Contents

1. Executive Summary
2. Business Context & Problem Statement
3. Goals & Objectives
4. Success Metrics (KPIs)
5. Scope Definition
6. Target Users & Personas
7. Site Architecture Overview
8. Functional Requirements (Page-by-Page)
9. Non-Functional Requirements
10. Technical Constraints & Stack
11. Content Requirements
12. Compliance & Legal Requirements
13. Third-Party Dependencies
14. Assumptions
15. Risks & Mitigations
16. Out-of-Scope / Explicitly Excluded
17. Milestones & Delivery Plan
18. Acceptance Criteria (Definition of Done)
19. Stakeholder Sign-Off

---

## 1. Executive Summary

Complete Care Hospital requires a professional, trustworthy, and conversion-focused public website that establishes its digital presence, communicates its medical services, introduces its physicians, and enables prospective and existing patients to request appointments — without the cost, complexity, or compliance burden of a fully dynamic, database-driven EHR platform.

This PRD defines a **modern web application** consisting of **10 primary pages plus 3 utility pages**, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, and Framer Motion. It is deployable on Vercel, with form submissions handled natively via Next.js Server Actions (or a third-party fallback like Formspree).

The website's core business function is to **convert visitors into appointment requests** while serving as a credible, informative front door for the hospital across services, physicians, patient resources, and locations. 

The hospital operates from **Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja**, and can be reached at **+234 806 539 5623** and **enquires.complete_care@gmail.com**. All content, terminology, and compliance references in this build must be localized to the Nigerian healthcare context (see Section 12) rather than defaulting to US-centric conventions (e.g., HIPAA, 911, US insurers) that appeared in early scratch drafts of this project.

---

## 2. Business Context & Problem Statement

### 2.1 Context
Complete Care Hospital currently has limited or no digital presence capable of:
- Presenting its services and specialties to prospective patients before they call or visit
- Introducing its physicians to build trust ahead of an in-person consultation
- Allowing patients to request appointments outside of phone-call hours
- Communicating practical information (location, hours, what to bring, insurance/NHIS acceptance) without requiring a phone call
- Meeting a baseline of professional credibility expected by patients researching healthcare providers online

### 2.2 Problem Statement
Patients and their families increasingly research healthcare providers online before making contact. Without a website, Complete Care Hospital:
- Loses potential patients to competitors with an online presence
- Places unnecessary phone-call burden on front-desk/reception staff for basic informational queries
- Cannot showcase its physicians, accreditations, or breadth of services to build pre-visit trust
- Has no low-friction channel for appointment requests outside working hours

### 2.3 Why a Next.js Architecture
A fully dynamic, database-backed system (patient portals, logins, EHR integration) would require significant ongoing backend infrastructure, formal data-protection compliance obligations, and longer development timelines. 

A Next.js framework application provides the performance and SEO benefits of static generation while enabling seamless interactive elements (forms, animations) and premium design, achieving the stated business goals (visibility, trust, appointment requests) at a fraction of the cost, time, and ongoing maintenance burden of a complex backend system.

---

## 3. Goals & Objectives

### 3.1 Primary Goal
Convert website visitors into appointment requests via a simple, frictionless React form.

### 3.2 Secondary Goals
- Establish immediate credibility and professionalism for Complete Care Hospital's online presence with an immersive premium design
- Provide a comprehensive, easy-to-navigate directory of medical services
- Introduce physicians with sufficient credentialing detail to build pre-visit trust
- Reduce reception/front-desk call volume for basic informational questions (hours, location, insurance, what to bring)
- Ensure the site is accessible, mobile-responsive, and fast-loading given variable mobile network conditions in the service area
- Establish a legally sound foundation (privacy, terms, nondiscrimination) appropriate to a Nigerian healthcare provider

### 3.3 Non-Goals (see Section 16 for full exclusions)
- No patient login, patient portal, or EHR integration
- No real-time doctor availability/scheduling calendar
- No online payment processing
- No multi-language i18n switcher (single-language launch; interpreter services are communicated as an in-person offering, not a site feature)

---

## 4. Success Metrics (KPIs)

| Metric | Target / Notes |
|---|---|
| Appointment form submissions | Track monthly volume post-launch as primary conversion metric |
| Lighthouse Scores | 90+ across Performance, Accessibility, Best Practices, and SEO |
| Animation Performance | Smooth 60fps Framer Motion animations on scroll and hover across devices |
| Page load time | Under 2.5s on 3G-equivalent mobile connection for all pages |
| Mobile usability | 100% of pages fully functional and legible at 375px viewport width |
| Broken links | Zero, verified via QA checklist before each deployment |
| Form delivery reliability | 100% of test submissions received at destination inbox |
| Accessibility baseline | No critical WCAG 2.1 AA violations on automated audit |
| SEO indexability | All 10 primary pages indexed by Google within 30 days of launch (via programmatic sitemap) |
| Reception call reduction | Qualitative — measured via hospital admin feedback 60–90 days post-launch |

---

## 5. Scope Definition

### 5.1 In Scope
- 10 primary Next.js pages + 3 utility pages (full list in Section 7)
- Fully responsive design (desktop, tablet, mobile) with Tailwind CSS 4
- Server Actions-powered appointment and contact forms (with Formspree fallback)
- Physician directory (Next.js components, static data, non-searchable)
- Service directory with one reusable dynamic service-detail route (`/services/[slug]`)
- Patient resources hub with React-based collapsible/accordion components
- Legal hub consolidating privacy, terms, cookie, accessibility, and nondiscrimination content
- SEO fundamentals: programmatic `sitemap.ts`, `robots.ts`, Next.js Metadata API integration
- Brand asset integration (logo, favicon — already finalized and provided)
- Premium animations via Framer Motion

### 5.2 Out of Scope
See Section 16.

---

## 6. Target Users & Personas

### 6.1 Persona A — "The Prospective Patient" (Primary)
- Searching online for a hospital/specialist near Gwagwalada/Abuja
- Wants to quickly understand: What services are offered? Are there qualified doctors? How do I book?
- Likely on a mobile device, possibly on a constrained data connection
- Primary conversion path: Home → Services or Doctors → Book Appointment

### 6.2 Persona B — "The Existing/Returning Patient"
- Needs practical information: visiting hours, what to bring, directions, billing/insurance questions
- Primary path: Home → Patient Resources or Locations → Contact

### 6.3 Persona C — "The Referring Physician / Partner Organization"
- Wants to verify credentials, specialties, and accreditation before referring patients
- Primary path: Home → About → Doctors → Services

### 6.4 Persona D — "The Family Member / Caregiver"
- Researching on behalf of a patient, often anxious, needs reassurance and clarity
- Values testimonials, clear language, visible contact options, and visiting/visitor policy information

---

## 7. Site Architecture Overview

### 7.1 Primary Pages (10)
1. Home — `/`
2. About Us — `/about`
3. Services — `/services`
4. Service Detail (dynamic route) — `/services/[slug]`
5. Our Doctors — `/doctors`
6. Book Appointment — `/appointment`
7. Patient Resources — `/patients`
8. Locations — `/locations`
9. Contact Us — `/contact`
10. Legal Hub — `/legal`

### 7.2 Utility Pages (3)
- 404 Error — `not-found.tsx`
- Thank You (post-submission) — `/thank-you`
- Sitemap & Robots — `sitemap.ts` and `robots.ts`

### 7.3 Global Elements (present on every page)
- Header: logo, full navigation, mobile hamburger menu, "Book Appointment" CTA button, primary phone number
- Footer: hospital name, address, phone, email, quick links, legal links, social media icons, copyright

---

## 8. Functional Requirements (Page-by-Page)

> Detailed content specifications for each page will be finalized in the **Content/Copy Deck** (Document 5) and **Wireframes** (Document 3). This section defines *functional* requirements only — what each page must do, not its final copy or layout.

### 8.1 Home (`/`)
- FR-1.1: Must display a hero section with headline, sub-headline, and two primary CTAs ("Book Appointment", "View Services")
- FR-1.2: Must display an emergency-guidance banner appropriate to the Nigerian context (see Section 12 — no hardcoded "911" or US ER wait-time framing)
- FR-1.3: Must display 3 quick-access cards linking to Doctors, Appointment, and Patient Resources
- FR-1.4: Must display top 3 featured services with links to Service Detail
- FR-1.5: Must display at least 1 patient testimonial (static text)
- FR-1.6: Must include a closing CTA banner driving to the appointment form

### 8.2 About Us (`/about`)
- FR-2.1: Must display mission, vision, and values
- FR-2.2: Must display hospital history/timeline
- FR-2.3: Must display leadership team profiles (photo, name, title, brief bio)
- FR-2.4: Must display accreditations/awards relevant to the Nigerian healthcare context
- FR-2.5: Must display at least 2 community outreach initiatives
- FR-2.6: Must include CTA linking to Doctors page

### 8.3 Services (`/services`)
- FR-3.1: Must display a grid of all offered specialties (minimum 9, target 12)
- FR-3.2: Each service card must include icon (Lucide React), title, one-line description, and "Learn More" link to Service Detail
- FR-3.3: Must include CTA directing undecided visitors to Contact

### 8.4 Service Detail — Template (`/services/[slug]`)
- FR-4.1: Must support Overview, Conditions Treated, Treatments/Procedures, Team, and Related Services sections
- FR-4.2: Must be structured as a dynamic Next.js route or reusable React component rendering data from a central `data.ts` file
- FR-4.3: Must include a Book Appointment CTA

### 8.5 Our Doctors (`/doctors`)
- FR-5.1: Must display a static grid of physician cards (minimum 6, target 9)
- FR-5.2: Each card must include Next/Image optimized photo, name, credentials, specialty, and a "Book with Dr. X" CTA
- FR-5.3: No search or filter functionality required (explicitly static list)
- FR-5.4: "Book with Dr. X" must pre-fill or annotate the appointment form via URL parameters (`?doctor=name`) or React state where technically feasible

### 8.6 Book Appointment (`/appointment`)
- FR-6.1: Must capture: full name, phone, email, preferred date, preferred time, service needed, preferred doctor, notes
- FR-6.2: Must submit via Next.js Server Actions + Zod validation (with Formspree as fallback if email sending is unconfigured)
- FR-6.3: Must redirect to `/thank-you` on successful submission
- FR-6.4: Must display a non-urgent-use disclaimer directing emergencies to call the hospital directly or attend in person
- FR-6.5: Must include client-side React form validation (required fields, valid email/phone format)

### 8.7 Patient Resources (`/patients`)
- FR-7.1: Must present content in collapsible/accordion React components covering: accepted insurance/NHIS, financial assistance, what to bring, visitor policy, patient rights, medical records requests, interpreter/language support
- FR-7.2: Must provide at least one downloadable PDF (e.g., medical records request form)
- FR-7.3: Accordion must be fully accessible and operable via React state

### 8.8 Locations (`/locations`)
- FR-8.1: Must display the main campus address (Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja), phone, and hours
- FR-8.2: Must embed a Google Maps iframe for the main campus
- FR-8.3: Must display parking/transit guidance appropriate to the local context
- FR-8.4: Must support additional clinic/branch listings if provided (currently none confirmed — see Assumptions)

### 8.9 Contact Us (`/contact`)
- FR-9.1: Must display phone (+234 806 539 5623), email (enquires.complete_care@gmail.com), and physical address
- FR-9.2: Must include a general inquiry form (name, email, phone, subject, message) using the same Server Action handler as Appointment
- FR-9.3: Must include an emergency disclaimer directing users away from the form for urgent needs
- FR-9.4: Must display social media icons (Lucide React icons)

### 8.10 Legal Hub (`/legal`)
- FR-10.1: Must consolidate Privacy Policy, Terms & Conditions, Cookie Policy, Accessibility Statement, and Nondiscrimination Notice into a single page with anchor-linked jump menu
- FR-10.2: Content must reflect Nigerian data-protection and healthcare regulatory context (see Section 12), not US HIPAA language
- FR-10.3: Must display a "last updated" date per section

### 8.11 404 (`not-found.tsx`)
- FR-11.1: Must provide friendly messaging and Next.js `<Link>` components back to Home, Services, and Contact

### 8.12 Thank You (`/thank-you`)
- FR-12.1: Must confirm submission receipt and set expectations for follow-up contact
- FR-12.2: Must provide navigation back to Home and Services

### 8.13 Sitemap & Robots
- FR-13.1: Programmatic `sitemap.ts` must generate URLs for all 10 primary pages with appropriate priority weighting
- FR-13.2: Programmatic `robots.ts` must allow full crawling and reference the sitemap

---

## 9. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Immersive Premium Design | Utilize Framer Motion for scroll reveals, page transitions, spring physics, and staggered animations to create a premium, trustworthy feel. |
| Performance | Page load under 2.5s on constrained mobile connections; utilize Next.js automatic Image and Font optimization |
| Responsiveness | Fully functional at desktop (1200px+), tablet (768–1199px), and mobile (<768px) breakpoints using Tailwind CSS |
| Accessibility | WCAG 2.1 AA baseline: alt text, keyboard navigation, sufficient color contrast |
| Browser Support | Latest 2 versions of Chrome, Safari, Firefox, Edge; mobile Safari and Chrome Android |
| Security | HTTPS enforced (auto-provisioned by Vercel); Server Actions secured against CSRF; Zod validation for payloads |
| SEO | Next.js Metadata API for semantic HTML, meta titles/descriptions per page, programmatic sitemap generation |
| Maintainability | Clean component-driven architecture in `/app` directory; easy to update data in centralized `/lib/data.ts` |
| Availability | Dependent on Vercel SLA (highly available edge network) |

---

## 10. Technical Constraints & Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Best-in-class performance, routing, and developer experience |
| Language | TypeScript | Type safety, fewer runtime errors, highly maintainable |
| Styling | Tailwind CSS 4 | Utility-first, highly scalable, enables rapid UI development |
| Animation | Framer Motion (motion/react) | Premium micro-interactions, scroll animations, spring physics |
| Icons | Lucide React | Clean, consistent line-style icons |
| Form Handling | Next.js Server Actions (Primary) / Formspree (Fallback) | Secure, seamless backend execution without a separate API server |
| Hosting | Vercel (recommended) or Netlify | Zero-config deployment for Next.js, Edge network |
| Maps | Google Maps iframe embed | No API key/billing required for basic embed |
| Fonts | `next/font/google` (Outfit & Inter) | Automatic self-hosting and zero layout shift, premium feel |
| Analytics | Google Analytics or Vercel Analytics | Free tier sufficient for launch-stage traffic |

---

## 11. Content Requirements

All final copy, physician bios, service descriptions, and legal text are defined in the **Content/Copy Deck (Document 5)** and must be finalized *before* Next.js component generation begins in the **Prompt Sequence (Document 4)**, per this project's established build order. No placeholder ("Lorem ipsum" or US-template) content may ship to production.

---

## 12. Compliance & Legal Requirements — Nigerian Context

This project must **not** default to US healthcare-website conventions. Specific corrections required from early scratch drafts:

- **No "Call 911"** — replace with the hospital's own emergency contact line and/or a general guidance statement appropriate to Nigerian emergency response norms, to be confirmed with the client.
- **No HIPAA references** — Nigerian data protection is governed by the **Nigeria Data Protection Act (NDPA) 2023** and overseen by the **Nigeria Data Protection Commission (NDPC)**. The Privacy Policy section of the Legal Hub must be drafted against NDPA principles, not HIPAA.
- **No US insurers (Aetna, Cigna, etc.)** — the Patient Resources insurance section must reference Nigeria's **National Health Insurance Authority (NHIA)** / NHIS-affiliated HMOs and any private HMOs the hospital actually accepts (to be confirmed with client).
- **Currency** — any pricing or financial assistance references must use **Naira (₦)**, not USD.
- **Address formatting** — use the hospital's actual address format (Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja) consistently across header, footer, Contact, and Locations pages.

*Note: exact regulatory citations should be verified with the client or legal counsel before publishing the Legal Hub — this PRD flags the correction needed but does not constitute legal advice.*

---

## 13. Third-Party Dependencies

| Dependency | Purpose | Cost |
|---|---|---|
| Vercel | Hosting, Edge Network, CI/CD | Free tier sufficient at launch |
| Resend or Formspree | Email sending from Server Actions or fallback form handling | Free tier |
| Google Fonts API | Typography (Outfit, Inter) | Free (via Next.js optimization) |
| Google Maps Embed | Location display | Free (embed, no API billing) |
| Vercel Analytics | Traffic analytics | Free (basic tier) |

---

## 14. Assumptions

- The hospital operates from a single main campus at the address provided; additional branch/clinic locations, if any, will be supplied before the Locations page is finalized.
- Physician names, credentials, and specialties will be supplied by the client before the Content/Copy Deck is finalized; placeholder structure only is defined in this PRD.
- Brand assets (logo, favicon) are finalized and already provided in the project's `/design` directory.
- The client will confirm accepted insurance/HMO providers before Patient Resources content is finalized.
- No multi-branch, multi-language, or patient-portal functionality is required for this phase.

---

## 15. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Missing physician/service content delays build | Medium | Content Deck finalized before Prompt Sequence execution begins |
| Form email integration complexity | Low–Medium | Use Formspree as an immediate fallback if Resend/SMTP setup is blocked |
| Legal Hub content legally insufficient for Nigerian context | Medium–High | Flag for client/legal review before publish; do not treat as final legal advice |
| Google Maps embed inaccuracy for a semi-rural/peri-urban address | Low | Manually verify pin placement against the stated address before launch |
| Mobile performance with heavy animations | Medium | Ensure Framer Motion viewport triggers are optimized; defer non-critical animations |

---

## 16. Out-of-Scope / Explicitly Excluded

- Patient portal, patient login, or account creation
- Electronic Health Record (EHR) integration
- Real-time doctor scheduling/availability calendar
- Online bill payment or e-commerce functionality
- Live chat (noted as an optional future add-on only, not committed in this phase)
- Multi-language interface switching
- Physician search/filter functionality
- Database-backed Content Management System (CMS) — all updates managed in `/lib/data.ts` or component files

---

## 17. Milestones & Delivery Plan

| Milestone | Deliverable |
|---|---|
| M1 | PRD finalized and approved (this document) |
| M2 | Build Architecture doc + Design System finalized |
| M3 | Content/Copy Deck finalized (all real copy, no placeholders) |
| M4 | Wireframes approved for all unique page templates |
| M5 | Data/Form Flow spec finalized (Server Actions logic + validation mapping) |
| M6 | Prompt Sequence executed — Next.js Application generated |
| M7 | SEO Metadata configured across all pages (`layout.tsx`, `page.tsx` exports) |
| M8 | QA / Acceptance Checklist passed; Audit Prompts run and cleared |
| M9 | Document Map finalized; project handed over and deployed to Vercel |

---

## 18. Acceptance Criteria (Definition of Done)

A page/component is considered "done" only when:
- [ ] All functional requirements in Section 8 for that route are implemented
- [ ] Content is final (sourced from Content/Copy Deck) — no placeholder text
- [ ] Page is responsive at desktop, tablet, and mobile breakpoints via Tailwind
- [ ] All internal Next.js `<Link>` routing resolves (no broken links)
- [ ] Forms (where applicable) submit successfully via Server Actions and redirect/notify properly
- [ ] Page passes the QA / Acceptance Checklist (Document 9) including Lighthouse scores
- [ ] Page passes relevant Audit Prompts (Document 10)
- [ ] Nigerian-context compliance corrections from Section 12 are applied (no residual US-template language)

The project as a whole is considered "done" when all pages meet the above, `sitemap.ts` and `robots.ts` are live, and the site is successfully deployed to Vercel with HTTPS active.

---

## 19. Stakeholder Sign-Off

| Role | Name | Signature/Approval | Date |
|---|---|---|---|
| Project Owner | Amr (TechOptyx) | | |
| Client Representative | Complete Care Hospital | | |

---

*End of Document 1 of 11 — Complete Care Hospital Website Documentation Suite. Next document: Build Architecture MD File.*
