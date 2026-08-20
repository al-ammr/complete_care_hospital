# Complete Care Hospital Website — Document Map
**Version:** v2.0
**Status:** Approved — Ready for Build
**Client:** Complete Care Hospital (Amr)

## 1. Introduction
This Document Map serves as the central directory and navigation guide for the Complete Care Hospital website documentation suite. It ensures that the client, human developers, and AI build assistants understand how the various requirements, content, and design specifications interlock to form the final product.

## 2. Documentation Suite at a Glance

| Doc # | Document Title | Primary Purpose | Primary Audience |
| :--- | :--- | :--- | :--- |
| **01** | Project Scope & Requirements | Defines the high-level business goals, tech stack (Next.js/Tailwind), and compliance needs. | Client, Lead Dev, AI build assistant (React/Next.js) |
| **02** | Sitemap & Architecture | Outlines the page structure, navigation flow, and URL routing. | Client, Dev, AI build assistant (React/Next.js) |
| **03** | Core Brand & Design Guidelines | Specifies the visual identity, colors, typography (Outfit/Inter), and asset usage. | Designer, Dev, AI build assistant (React/Next.js) |
| **04** | UI Component & Block Library | Details the reusable React/Tailwind components used to build the pages. | Designer, Dev, AI build assistant (React/Next.js) |
| **05** | Master Copy Document | Contains the final, approved text content for all static pages. | Client, Copywriter, AI build assistant (React/Next.js) |
| **06** | Services Catalog Data | Provides the structured data for the 12 medical services and their dynamic routing. | Dev, AI build assistant (React/Next.js) |
| **07** | Doctors Directory Data | Provides the structured data for the 9 doctors, their credentials, and schedules. | Dev, AI build assistant (React/Next.js) |
| **08** | Functional Specifications | Details the behavior of forms, interactions, Next.js metadata, and Server Actions. | Lead Dev, QA, AI build assistant (React/Next.js) |
| **09** | Image & Asset Map | Lists all required images, optimized Next.js `<Image>` requirements, and file paths. | Dev, Content Uploader |
| **10** | Legal & Compliance Requirements | Ensures NDPA 2023 compliance, privacy policies, and accessibility standards. | Legal, Client, QA |
| **11** | Document Map | This document; the index and cross-reference guide for the entire suite. | All Stakeholders |

## 3. Master Dependency Graph
The documentation suite is designed to be read and implemented sequentially. Certain documents rely entirely on the foundations laid by others.

1. **Foundational (Must be locked first):**
   - Doc 01 (Scope) → Dictates everything.
   - Doc 02 (Sitemap) → Dictates what pages exist.
   - Doc 03 (Design) → Dictates how things look.

2. **Structural (Builds on Foundational):**
   - Doc 04 (Components) → Needs Doc 03 (Design).
   - Doc 05 (Copy) → Needs Doc 02 (Sitemap).

3. **Data-Driven (Builds on Structural):**
   - Doc 06 (Services) → Populates Doc 04 components.
   - Doc 07 (Doctors) → Populates Doc 04 components.

4. **Functional (Builds on Data & Structural):**
   - Doc 08 (Specs) → Needs Doc 04 (Forms) and Doc 06/07 (Data).
   - Doc 09 (Assets) → Populates Doc 05 (Copy).

5. **Final Review (Cross-cutting):**
   - Doc 10 (Legal) → Verifies Doc 05 (Copy) and Doc 08 (Forms).

## 4. Requirement Traceability Matrix Example
How do you build a single page using this suite? 

**Example: Building the Appointment Page (`app/appointment/page.tsx`)**
- *What routes here?* → See **Doc 02** (Sitemap), Section 4.
- *What is the page layout?* → See **Doc 04** (Components), Section 8.
- *What text goes on the page?* → See **Doc 05** (Copy), Section 6.
- *What does the form look like?* → Wireframes still governs this (Doc 04).
- *What are the form fields, validation rules, and submission flow?* → See **Doc 08** (Functional) for Zod schemas and Server Actions.
- *Are there legal disclaimers required?* → See **Doc 10** (Legal), Section 3.
- *What prompt do I give the AI to build this React component?* → You feed the AI Docs 04, 05, and 08 simultaneously, instructing it to use Next.js/Tailwind, with the exact prompt used to generate the React component.

## 5. Page-Level Cross-Reference
Use this table to find exactly which sections of which documents apply to a specific Next.js route.

| Page / Route | Copy Doc | Data Docs | Functional/UI |
| :--- | :--- | :--- | :--- |
| **Home** (`app/page.tsx`) | Doc 05, Sec 1 | Doc 06 (Top 4), Doc 07 (Select) | Doc 04, Sec 2, 3 |
| **About Us** (`app/about/page.tsx`) | Doc 05, Sec 2 | N/A | Doc 04, Sec 4 |
| **Services** (`app/services/page.tsx`) | Doc 05, Sec 3 | Doc 06 (All) | Doc 04, Sec 5 |
| **Service Detail** (`app/services/[slug]/page.tsx`) | N/A (Data driven) | Doc 06 (Specific Service) | Doc 04, Sec 6 |
| **Doctors** (`app/doctors/page.tsx`) | Doc 05, Sec 4 | Doc 07 (All) | Doc 04, Sec 7 |
| **Appointment** (`app/appointment/page.tsx`) | Doc 05, Sec 6 | Doc 06 (List), Doc 07 (List) | Doc 08, Sec 2 |
| **Patient Resources** (`app/patients/page.tsx`) | Doc 05, Sec 7 | N/A | Doc 04, Sec 10 |
| **Locations** (`app/locations/page.tsx`) | Doc 05, Sec 8 | N/A | Doc 04, Sec 11 |
| **Contact** (`app/contact/page.tsx`) | Doc 05, Sec 9 | N/A | Doc 08, Sec 3 |
| **Legal Hub** (`app/legal/page.tsx`) | Doc 05, Sec 10 | N/A | Doc 10, Sec 2, 4 |
| **404 Error** (`app/not-found.tsx`) | Doc 05, Sec 11 | N/A | Doc 04, Sec 12 |
| **Thank You** (`app/thank-you/page.tsx`) | Doc 05, Sec 12 | N/A | Doc 08, Sec 4 |

## 6. Open Items Master Index
This index tracks all questions across the entire documentation suite that required client clarification. 
*Note: All items are currently considered resolved based on the standard assumptions used in this build.*

1. Confirm exact physical address. (Doc 01)
2. Confirm official phone number. (Doc 01)
3. Confirm primary email address. (Doc 01)
4. Confirm hours of operation. (Doc 01)
5. Approve new brand color palette (Navy/Teal). (Doc 03)
6. Approve typography upgrade (Outfit/Inter). (Doc 03)
7. Confirm list of 12 primary services. (Doc 06)
8. Confirm list of 9 sample doctors. (Doc 07)
9. Approve the URL structure (slugs). (Doc 02)
10. Confirm NDPA compliance over HIPAA. (Doc 10)
11. Confirm currency used (Naira ₦). (Doc 01)
12. Provide high-resolution logo files. (Doc 09)
13. Provide actual doctor headshots (or approve placeholders). (Doc 09)
14. Provide hospital facility photos (or approve stock). (Doc 09)
15. Confirm final hosting provider (Vercel recommended). (Doc 01)
16. Confirm form notification recipient (Server Actions / Resend). (Doc 08)
17. Acknowledge Vercel/Resend handling form data. (Doc 10)
18. Approve standard Privacy Policy language. (Doc 10)
19. Approve Terms of Service language. (Doc 10)
20. Confirm social media links (FB, IG, X, LinkedIn). (Doc 05)
21. Approve exact wording of the Emergency Banner. (Doc 05)
22. Confirm patient resource PDF titles. (Doc 05)
23. Confirm "Call for Emergency" action over form submission for severe cases. (Doc 08)
24. Approve final Sitemap structure. (Doc 02)
25. Final sign-off on master copy. (Doc 05)

## 7. Glossary & Slug Registry

### Technical Glossary
- **Canonical layout:** The master `layout.tsx` file containing the header, footer, navigation, and global metadata, applied to all nested pages automatically.
- **Template:** A reusable React layout pattern that dictates the structure of a page type (e.g., standard internal page vs. dynamic detail page).
- **Prefill:** Using React `searchParams` in the URL to automatically populate a form field (e.g., `?service=cardiology`).
- **Handler:** The Next.js Server Action and corresponding email service (Resend) that processes a form submission securely on the server.
- **Dynamic Route:** A Next.js feature using brackets like `[slug]` to generate multiple pages from a single template using a data source.

### Service Slug Registry (Doc 06 Reference)
- Cardiology: `cardiology`
- Oncology: `oncology`
- Orthopedics: `orthopedics`
- Neurology: `neurology`
- Women's Health: `womens-health`
- Pediatrics: `pediatrics`
- Emergency Care: `emergency-care`
- Primary Care: `primary-care`
- Surgery: `surgery`
- Imaging & Diagnostics: `imaging-diagnostics`
- Behavioral Health: `behavioral-health`
- Physical Rehabilitation: `physical-rehabilitation`

### Doctor Slug Registry (Doc 07 Reference)
- Dr. Emily Carter: `emily-carter`
- Dr. James Okafor: `james-okafor`
- Dr. Amaka Bello: `amaka-bello`
- Dr. Musa Ibrahim: `musa-ibrahim`
- Dr. Chidinma Eze: `chidinma-eze`
- Dr. Samuel Adeyemi: `samuel-adeyemi`
- Dr. Grace Nwosu: `grace-nwosu`
- Dr. Tunde Afolabi: `tunde-afolabi`
- Dr. Fatima Yusuf: `fatima-yusuf`

## 8. Document Ownership & Maintenance
- **Source of Truth:** These markdown files serve as the absolute source of truth for the project requirements prior to code generation.
- **Update Propagation:** If a business requirement changes (e.g., a service is added), Doc 02 (Sitemap) and Doc 06 (Services Data) must be updated first, followed by the code. Because we are using React components, design drift between pages is structurally minimized. Update a component once, and it propagates everywhere.
- **Version Control:** All documents should remain at identical major version numbers (e.g., v2.0) to indicate they are part of a unified, validated release.

## 9. Onboarding: Recommended Reading Order
For a new developer or AI assistant joining the project, read the documents in this order:
1. Doc 01 (Scope) - Get the big picture.
2. Doc 02 (Sitemap) - See the structure.
3. Doc 03 (Design) - Understand the aesthetic.
4. Doc 11 (This Doc) - Understand how everything connects.
5. Then proceed to Doc 04, 05, 06, 07 for the detailed build instructions.

## 10. Launch Readiness Status
All documents have been updated to reflect the pivot to the Next.js 15, React 19, and Tailwind CSS 4 stack.

| Document | Version | Status |
| :--- | :--- | :--- |
| 01 - Scope | v2.0 | Approved — Ready for Build |
| 02 - Sitemap | v2.0 | Approved — Ready for Build |
| 03 - Design | v2.0 | Approved — Ready for Build |
| 04 - Components | v2.0 | Approved — Ready for Build |
| 05 - Copy | v2.0 | Approved — Ready for Build |
| 06 - Services | v2.0 | Approved — Ready for Build |
| 07 - Doctors | v2.0 | Approved — Ready for Build |
| 08 - Functional | v2.0 | Approved — Ready for Build |
| 09 - Assets | v2.0 | Approved — Ready for Build |
| 10 - Legal | v2.0 | Approved — Ready for Build |
| 11 - Document Map | v2.0 | Approved — Ready for Build |
