# Wireframes Document
## Complete Care Hospital — Official Website

| Field | Detail |
|---|---|
| Document Type | Low-Fidelity Wireframe Specification |
| Document Version | v2.0 |
| Status | Approved — Ready for Build |
| Project Name | Complete Care Hospital Website |
| Document Order in Suite | 3 of 11 |
| Depends On | Document 1 — PRD, Document 2 — Build Architecture |
| Feeds Into | Document 4 — Prompt Sequence, Document 6 — Design System |
| Last Updated | August 2026 |

---

## Table of Contents

1. Purpose & Method
2. Wireframe Fidelity & Notation Key
3. Global Wireframe Elements (Header, Emergency Banner, Footer)
4. Grid & Spacing Reference
5. Template T1 — Hero + Cards + Content Blocks (Home)
6. Template T2 — Content-Grid (Services, Doctors)
7. Template T3 — Long-Form Detail (About, Service Detail)
8. Template T4 — Form-Centric (Appointment, Contact)
9. Template T5 — Accordion Hub (Patient Resources, Legal Hub)
10. Template T6 — Utility/Minimal (Locations, 404, Thank You)
11. Responsive Behavior Matrix (All Templates)
12. Interaction & State Annotations
13. Motion & Animation Wireframe Annotations
14. Wireframe-to-Page Mapping Table
15. Open Wireframe Questions for Client Review

---

## 1. Purpose & Method

This document defines the **structural, low-fidelity layout** of every page on the Complete Care Hospital website, expressed as annotated ASCII/text wireframes rather than final visual design. Wireframes here communicate **placement, hierarchy, and grouping** — not color, typography, or imagery, which are the domain of the Design System (Document 6).

Per the Build Architecture document (Document 2, Section 9), the 13 pages reduce to **6 underlying templates**. This document wireframes each template once, at three breakpoints (mobile, tablet, desktop), and then maps every page to its template so no page-specific wireframe work is duplicated unnecessarily.

**Method:** Each wireframe is presented as a bordered ASCII block diagram representing content regions, followed by a numbered annotation list explaining each region's content, behavior, and motion properties. This format is chosen for direct portability into the Prompt Sequence document, where each numbered region becomes a discrete prompt instruction for Next.js and Tailwind component generation.

---

## 2. Wireframe Fidelity & Notation Key

| Symbol | Meaning |
|---|---|
| `[ ]` | A distinct content block/region |
| `[[ ]]` | A clickable button or CTA |
| `{ }` | A form input field |
| `< >` | A navigational link |
| `///` | Placeholder image region |
| `...` | Repeating/list content (cards, accordion rows) |
| `▼` | Collapsed/expandable region (accordion) |
| `#` | Numbered annotation reference, matched to notes below each diagram |

---

## 3. Global Wireframe Elements (Header, Emergency Banner, Footer)

These three regions appear identically on **all 13 pages** and are wireframed once here rather than repeated in every template section below.

### 3.1 Emergency Banner (top-most strip, all pages)
```
┌──────────────────────────────────────────────────────────┐
│ #1  [ Emergency guidance strip — full width, red bg ]     │
└──────────────────────────────────────────────────────────┘
```
**#1** — Single-line statement directing users to the hospital's emergency contact process (content finalized per PRD Section 12 — no "911" default). Persistent, non-dismissible, always the first element in the DOM. Implemented as `<EmergencyBanner />`.

### 3.2 Site Header (desktop)
```
┌──────────────────────────────────────────────────────────┐
│ #2 [LOGO]   #3 <Home><About><Services><Doctors>            │
│             <Patients><Locations><Contact>   #4 [[Book]]   │
│                                          #5 (555) phone     │
└──────────────────────────────────────────────────────────┘
```
**#2** — Logo, links to `/`. **#3** — Primary nav, 7 links. **#4** — "Book Appointment" CTA button, visually distinct (secondary/accent color per Design System). **#5** — Primary phone number, click-to-call on mobile. Implemented as `<Header />`.

### 3.3 Site Header (mobile, <768px)
```
┌──────────────────────────────────┐
│ #2 [LOGO]              #6 [≡]     │
└──────────────────────────────────┘
        (tap #6 to reveal ▼)
┌──────────────────────────────────┐
│ #3 <Home>                         │
│    <About>                        │
│    <Services>                     │
│    <Doctors>                      │
│    <Patients>                     │
│    <Locations>                    │
│    <Contact>                      │
│    #4 [[Book Appointment]]        │
│    #5 (555) phone — tap to call   │
└──────────────────────────────────┘
```
**#6** — Hamburger toggle, controlled by `<MobileNav />`. Uses Framer Motion `AnimatePresence` for smooth slide-in menu animation.

### 3.4 Site Footer (all breakpoints, stacks on mobile)
```
┌──────────────────────────────────────────────────────────┐
│ #7 Complete Care Hospital                                  │
│    Phase 1, Opposite ABC Bakery, Police Barack Gate,       │
│    Gwagwalada, Abuja                                        │
│    +234 806 539 5623 | enquires.complete_care@gmail.com    │
│                                                              │
│ #8 <Quick Links...>      #9 <Legal Links...>                │
│                                                              │
│ #10 [social icons...]                                       │
│ #11 © 2026 Complete Care Hospital. All Rights Reserved.     │
└──────────────────────────────────────────────────────────┘
```
**#7** — Hospital identity block. **#8** — Quick nav links (mirrors header nav + Legal Hub link). **#9** — Legal Hub anchor links (Privacy, Terms, Cookie, Accessibility, Nondiscrimination). **#10** — Facebook, Instagram, YouTube icons (Lucide React icons). **#11** — Copyright line. Implemented as `<Footer />`.

---

## 4. Grid & Spacing Reference

| Breakpoint | Container Max-Width | Columns | Gutter |
|---|---|---|---|
| Mobile (<768px) | 100% (16px side padding) | 1 | 16px |
| Tablet (768–1199px) | 720px | 2 (where grids apply) | 24px |
| Desktop (1200px+) | 1140px | 3 (where grids apply) | 32px |

All section vertical spacing leverages Tailwind CSS spacing utilities (e.g., `py-16`, `py-24`, `gap-8`) enforcing a strict 4px base unit grid, resulting in highly consistent 40px–96px section padding globally.

---

## 5. Template T1 — Hero + Cards + Content Blocks (Home)

### 5.1 Desktop Wireframe
```
[Emergency Banner — 3.1]
[Site Header — 3.2]
┌──────────────────────────────────────────────────────────┐
│ #12 ///////////////// HERO BACKGROUND /////////////////   │
│     #13 Headline                                           │
│     #14 Sub-headline                                       │
│     #15 [[Book Appointment]]   #16 [[View Services]]        │
└──────────────────────────────────────────────────────────┘
┌───────────────┬───────────────┬───────────────┐
│ #17 Card 1     │ #17 Card 2     │ #17 Card 3     │
│ Find a Doctor  │ Book Appt.     │ Patient Res.   │
└───────────────┴───────────────┴───────────────┘
┌──────────────────────────────────────────────────────────┐
│ #18 "Top Services" section heading                         │
├───────────────┬───────────────┬───────────────┤
│ #19 Service 1  │ #19 Service 2  │ #19 Service 3  │
│ icon+title+txt │ icon+title+txt │ icon+title+txt │
│ <Learn More>   │ <Learn More>   │ <Learn More>   │
└───────────────┴───────────────┴───────────────┘
┌──────────────────────────────────────────────────────────┐
│ #20 "Why Choose Us" — 4 bullet points w/ icons, 2x2 grid   │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #21 Testimonial block (quote + name + role, centered)      │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #22 Closing CTA banner — full width, accent bg              │
│     "Ready to feel better?"   [[Book Now]]                  │
└──────────────────────────────────────────────────────────┘
[Site Footer — 3.4]
```

### 5.2 Mobile Wireframe (all sections stack full-width, single column)
```
[Emergency Banner]
[Site Header — mobile]
┌────────────────────────┐
│ #12 /// HERO ///        │
│ #13 Headline            │
│ #14 Sub-headline        │
│ #15 [[Book Appt.]]      │
│ #16 [[View Services]]   │
└────────────────────────┘
┌────────────────────────┐
│ #17 Card 1               │
├────────────────────────┤
│ #17 Card 2               │
├────────────────────────┤
│ #17 Card 3               │
└────────────────────────┘
┌────────────────────────┐
│ #18 heading              │
├────────────────────────┤
│ #19 Service 1             │
├────────────────────────┤
│ #19 Service 2             │
├────────────────────────┤
│ #19 Service 3             │
└────────────────────────┘
[#20 stacked 1-col] [#21] [#22]
[Site Footer — stacked]
```

### 5.3 Annotations
- **#12** — Full-bleed hero image; Next.js `<Image>` component used for optimization; dark scrim overlay for text legibility. Parallax effect on scroll via Framer Motion.
- **#13/#14** — Headline (H1) and sub-headline; staggered text reveal on initial load via motion.
- **#15/#16** — Primary CTA (filled `<Button>`) and secondary CTA (outline `<Button>`) — CTAs spring-animate in on load.
- **#17** — Three equal-width `<Card>` components; Lucide icon + label + Next.js `<Link>`; stack full-width on mobile. Staggered fade-in on scroll, hover scale+lift.
- **#18/#19** — Section heading + 3 `<ServiceCard>` previews; each links to `/services/[slug]`.
- **#20** — Iconography-led bullet list; 2×2 grid desktop, single column mobile. whileInView fade-up reveals.
- **#21** — Single `<Testimonial>` block at launch.
- **#22** — High-contrast `<CTABanner>` section before footer.

---

## 6. Template T2 — Content-Grid (Services, Doctors)

### 6.1 Desktop Wireframe
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│ #23 Page Banner — Title + subtitle, centered                │
└──────────────────────────────────────────────────────────┘
┌───────────────┬───────────────┬───────────────┐
│ #24 Item Card  │ #24 Item Card  │ #24 Item Card  │
├───────────────┼───────────────┼───────────────┤
│ #24 Item Card  │ #24 Item Card  │ #24 Item Card  │
├───────────────┼───────────────┼───────────────┤
│ #24 Item Card  │ #24 Item Card  │ #24 Item Card  │
│  ... (3x4 grid for Services = 12 items;             │
│       3x3 grid for Doctors = 9 items minimum)        │
└───────────────┴───────────────┴───────────────┘
┌──────────────────────────────────────────────────────────┐
│ #25 Closing CTA (contextual — "Not sure?" / "Accepting     │
│      new patients")                                         │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 6.2 Mobile Wireframe
```
[Emergency Banner][Site Header — mobile]
┌────────────────────────┐
│ #23 Page Banner          │
└────────────────────────┘
┌────────────────────────┐
│ #24 Item Card 1           │
├────────────────────────┤
│ #24 Item Card 2           │
├────────────────────────┤
│  ... single column,       │
│      full list             │
└────────────────────────┘
┌────────────────────────┐
│ #25 Closing CTA           │
└────────────────────────┘
[Site Footer — stacked]
```

### 6.3 Annotations
- **#23** — Page banner: H1 title + one-line subtitle; consistent pattern via a shared `<SectionHeading>` component.
- **#24 (Services variant)** — `<ServiceCard>`: icon (top), service title (H3), one-line description, `<Link>` to `/services/[slug]`. Staggered `fadeInUp` animation.
- **#24 (Doctors variant)** — `<DoctorCard>`: photo (Next.js `<Image>`), name + credentials, specialty, `<Button>` linking to `/appointment?doctor={slug}` (consumed by `<AppointmentForm />` via Next.js `searchParams`). Card hover spring effect applied.
- Grid collapses from 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile) using Tailwind `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- **#25** — Content differs per page: Services page CTA drives to `/contact`; Doctors page CTA drives to `/appointment`.

---

## 7. Template T3 — Long-Form Detail (About, Service Detail)

### 7.1 Desktop Wireframe
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│ #26 Page Banner (Title + subtitle)                          │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #27 Section Block 1 (e.g., Mission/Overview) — text, 1-2   │
│     paragraphs, full-width or 70% column with side margin   │
└──────────────────────────────────────────────────────────┘
┌───────────────┬───────────────┬───────────────┬─────┐
│ #28 Profile/   │ #28 Profile/   │ #28 Profile/   │ ... │
│  Detail Card   │  Detail Card   │  Detail Card   │     │
└───────────────┴───────────────┴───────────────┴─────┘
┌──────────────────────────────────────────────────────────┐
│ #29 Section Block 2 (e.g., History timeline / Conditions   │
│      Treated bullet list) — timeline (About) or list        │
│      (Service Detail)                                        │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #30 Section Block 3 (e.g., Accreditations badges /          │
│      Treatments & Procedures list)                            │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #31 Closing CTA (e.g., "Meet our team" / "Book Now")        │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 7.2 Mobile Wireframe
All blocks (#27–#31) stack full-width in the same vertical order; #28 profile cards collapse to single column. All blocks use `whileInView` fade-up reveals.

### 7.3 Annotations & Page-Specific Mapping

| Region | About Us Content | Service Detail Content |
|---|---|---|
| #27 | Mission, Vision, Values | Overview (2–3 paragraphs) |
| #28 | Leadership team `<DoctorCard>`s (4–6) | *(not used — see #29 substitution note below)* |
| #29 | History/timeline (1985 → present) | Conditions We Treat (bullet list, 10–12 items) |
| #30 | Accreditations & Awards (badge Next.js Images) | Treatments & Procedures (bullet list) + "Our Team" link to `/doctors` |
| #31 | CTA → `/doctors` | CTA → `/appointment` |

**Note:** Service Detail does not use the #28 profile-card row; instead it inserts a "Related Services" link block and a "Our {Specialty} Team" callout linking to `/doctors`.

---

## 8. Template T4 — Form-Centric (Appointment, Contact)

### 8.1 Desktop Wireframe
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│ #32 Page Banner (Title + instructional subtitle)             │
└──────────────────────────────────────────────────────────┘
┌────────────────────────────────┬───────────────────────┐
│ #33 FORM (left, ~65% width)      │ #34 Sidebar (right,    │
│                                   │  ~35% width)            │
│ {Full Name}                      │  Direct contact info:  │
│ {Phone}      {Email}             │  #35 Phone             │
│                                   │  #35 Email             │
│ #36 -- fieldset: Appt. Details -- │  #35 Alt. contact hrs  │
│ {Preferred Date} {Preferred Time} │                        │
│ {Service Needed ▾}                │  (Appointment page     │
│ {Preferred Doctor ▾}              │   only, per FR-6.5)    │
│ {Notes/Message}                   │                        │
│                                   │  #37 Emergency          │
│ #38 [[Submit]]  [[Reset]]          │      disclaimer box    │
└────────────────────────────────┴───────────────────────┘
[Site Footer]
```

### 8.2 Mobile Wireframe
```
[Emergency Banner][Site Header — mobile]
┌────────────────────────┐
│ #32 Page Banner           │
├────────────────────────┤
│ #33 FORM (full width)     │
│  {fields stacked          │
│   vertically, one         │
│   per row}                │
│  #38 [[Submit]]           │
│      [[Reset]]            │
├────────────────────────┤
│ #34 Sidebar content        │
│  (moves BELOW form on     │
│   mobile, not hidden)      │
├────────────────────────┤
│ #37 Emergency disclaimer   │
└────────────────────────┘
[Site Footer — stacked]
```

### 8.3 Annotations
- **#32** — Banner text differs: Appointment = "Fill out the form below..."; Contact = "We're here to answer your questions"
- **#33** — Primary form column; `<AppointmentForm />` or `<ContactForm />` integrating Next.js Server Actions and Zod validations.
- **#34/#35** — Sidebar always visible (moves below form on mobile). `<ContactInfo />` component.
- **#36** — Fieldset grouping applies to Appointment page only.
- **#37** — Red-bordered disclaimer `<Badge>` or box component: "For emergencies..." (FR-6.4 / FR-9.3).
- **#38** — Submit (`<Button type="submit">` with pending state) + Reset (`<Button variant="ghost">`).

---

## 9. Template T5 — Accordion Hub (Patient Resources, Legal Hub)

### 9.1 Desktop & Mobile Wireframe (identical structure; accordion is inherently single-column at all breakpoints)
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│ #39 Page Banner (Title + subtitle)                           │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #40 Jump Menu (Legal Hub only) — anchor links row/wrap      │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #41 ▼ Accordion Row 1 — [icon] Title            [+/-]      │
│      (collapsed by default except first row, which may     │
│       be expanded on load per UX decision in Design System)│
├──────────────────────────────────────────────────────────┤
│ #41 ▼ Accordion Row 2 — Title                    [+/-]      │
├──────────────────────────────────────────────────────────┤
│      ... (7 rows Patient Resources / 6 rows Legal Hub) ...  │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #42 Downloadable PDFs list (Patient Resources only)          │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ #43 Closing CTA ("Have questions? Contact Us")               │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 9.2 Annotations
- **#40** — Jump menu present only on `/legal` (6 anchors). `/patients` omits this region.
- **#41** — `<Accordion>` component powered by Framer Motion's `AnimatePresence` for smooth height animations and chevron rotation. Header bar is a full-width tap target.
- **#42** — PDF list with Lucide file-type icon + file name + native download `<a href>` linking to public PDF assets.
- **#43** — Standard closing `<CTABanner>` pattern.

---

## 10. Template T6 — Utility/Minimal (Locations, 404, Thank You)

### 10.1 Locations Desktop Wireframe
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│ #44 Page Banner                                              │
└──────────────────────────────────────────────────────────┘
┌────────────────────────────────┬───────────────────────┐
│ #45 Main Campus text block        │ #46 /// MAP EMBED ///  │
│  Address (plain text — always     │                         │
│  visible regardless of #46         │                         │
│  load success, per Build           │                         │
│  Architecture Section 21)          │                         │
│  Phone / Hours / Parking / Transit  │                        │
└────────────────────────────────┴───────────────────────┘
┌───────────────┬───────────────┬───────────────┐
│ #47 Additional  │ #47 Additional  │ (repeat if 3+  │
│  Clinic Card    │  Clinic Card    │  clinics exist  │
└───────────────┴───────────────┴───────────────┘
┌──────────────────────────────────────────────────────────┐
│ #48 Closing CTA ("Need directions? Call us")                 │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 10.2 404 Wireframe (all breakpoints — simple, centered, single column)
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│                                                              │
│           #49 "Oops! Page not found." (H1, centered)        │
│           #50 Explanatory text                               │
│           #51 [[Return to Home]] [[View Services]]           │
│                [[Contact Us]]                                 │
│           #52 "Or call us at +234 806 539 5623"               │
│                                                              │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 10.3 Thank You Wireframe (all breakpoints — centered, single column)
```
[Emergency Banner][Site Header]
┌──────────────────────────────────────────────────────────┐
│           #53 "Thank You!" (H1, centered)                    │
│           #54 Confirmation text                               │
│           #55 "What happens next" — numbered list (1-2-3)     │
│           #56 [[Return to Home]] [[View Services]]             │
│           #57 "Explore Patient Resources" prompt line          │
└──────────────────────────────────────────────────────────┘
[Site Footer]
```

### 10.4 Annotations
- **#45/#46** — Two-column desktop, stacks to single column on mobile. Handled via Tailwind grid.
- **#47** — Conditionally rendered `<Card>` region for future clinics.
- **#49–#57** — Minimal, centered, low-cognitive-load layouts. Utilizes Next.js `not-found.tsx` for 404.

---

## 11. Responsive Behavior Matrix (All Templates)

| Template | Desktop Columns | Tablet Columns | Mobile Columns | Special Behavior / Motion |
|---|---|---|---|---|
| T1 (Home) | 3 | 2 | 1 | Hero text overlays scale down; CTAs stack vertically; Staggered reveals adjust timing based on grid. |
| T2 (Grid) | 3 | 2 | 1 | Cards render in full source-order list, maintaining staggered `fadeInUp` motion. |
| T3 (Detail)| Mixed | 2 (profile row) | 1 | Profile cards stack; sections use `whileInView` fade reveals on scroll. |
| T4 (Form) | 2 | 1 | 1 | Sidebar moves below form via flex/grid order. |
| T5 (Accordion)| 1 | 1 | 1 | Inherently single-column. |
| T6 (Utility)| 2 (Locations) | 1 | 1 | Map stacks below address text. |

---

## 12. Interaction & State Annotations

| Interaction | Applicable Templates | Behavior & Motion |
|---|---|---|
| Hamburger menu toggle | All (`<Header />`) | Click/tap opens/closes `<MobileNav />`; Framer Motion `AnimatePresence` for smooth slide-in menu animation. |
| Accordion expand/collapse | T5 (`<Accordion />`) | Smooth height animation via `AnimatePresence`, Lucide chevron rotation (0deg to 180deg). |
| Form validation error state | T4 (`<AppointmentForm />`) | Inline red text below invalid field; field border color changes (red-500); focus management via React Hook Form / Zod. |
| "Book with Dr. X" prefill | T2 (Doctors) → T4 | `searchParams` read on load; corresponding `<select>` option pre-selected; visual "Booking with Dr. X" badge appears above form. |
| Hover states (desktop only) | All buttons/cards | Card hover spring effect (scale 1.02, subtle lift via Framer Motion) or Tailwind color shifts for standard buttons. |
| Scroll reveal | All sections | `whileInView` fade-up reveals for sections as they enter the viewport (`margin: "-100px"`). |
| Page transition | All route changes | Opacity + Y fade with 0.4s duration when navigating between Next.js App Router routes. |

---

## 13. Motion & Animation Wireframe Annotations

**Hero:** Scroll-triggered parallax, staggered text reveal (H1, Subhead), CTAs spring-animate in.
**Cards (`<Card>`, `<ServiceCard>`, `<DoctorCard>`):** Staggered fade-in on scroll (`staggerChildren: 0.1`), hover scale+lift via Framer Motion (`cardHover: { scale: 1.02, y: -4 }`).
**Accordion (`<Accordion>`):** Smooth height animation (`height: "auto"` to `height: 0`) via `AnimatePresence`, chevron rotation.
**Page Transitions:** Fade+slide via Next.js template.tsx or layout animations.
**Sections:** `whileInView` fade-up reveals using `{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }`.

---

## 14. Wireframe-to-Page Mapping Table

| Page | Template | Wireframe Section |
|---|---|---|
| Home (`/`) | T1 | Section 5 |
| About Us (`/about`) | T3 | Section 7 |
| Services (`/services`) | T2 | Section 6 |
| Service Detail (`/services/[slug]`) | T3 (variant) | Section 7.3 |
| Our Doctors (`/doctors`) | T2 | Section 6 |
| Book Appointment (`/appointment`) | T4 | Section 8 |
| Patient Resources (`/patients`) | T5 | Section 9 |
| Locations (`/locations`) | T6 | Section 10.1 |
| Contact Us (`/contact`) | T4 | Section 8 |
| Legal Hub (`/legal`) | T5 | Section 9 |
| 404 (`not-found.tsx`) | T6 | Section 10.2 |
| Thank You (`/thank-you`) | T6 | Section 10.3 |

---

## 15. Open Wireframe Questions for Client Review

1. **Locations page:** Confirm whether Complete Care Hospital operates additional outpatient clinics beyond the main Gwagwalada campus, to determine whether region #47 (Section 10.1) is included or removed.
2. **Accordion default state:** Should the first Patient Resources / Legal Hub row be expanded by default on page load, or should all rows start collapsed?
3. **Sticky header:** Should the site header remain fixed/sticky on scroll, or scroll away with content? (Flagged for Design System confirmation).
4. **Testimonial volume:** Is a single testimonial (#21, Home) sufficient at launch, or should the data file supply 2–3 for a Framer Motion rotating carousel treatment?
5. **"Book with Dr. X" confirmation:** Confirm the exact wording for the pre-fill confirmation note on the Appointment page.

---

*End of Document 3 of 11 — Complete Care Hospital Website Documentation Suite. Next document: Prompt Sequence File.*
