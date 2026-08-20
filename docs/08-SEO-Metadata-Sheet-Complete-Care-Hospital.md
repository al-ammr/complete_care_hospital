# SEO & Metadata Sheet
## Complete Care Hospital — Official Website

| Field | Detail |
|---|---|
| Document Type | SEO & Metadata Specification |
| Document Version | v2.0 |
| Status | Approved — Ready for Build |
| Project Name | Complete Care Hospital Website |
| Document Order in Suite | 8 of 11 |
| Depends On | Documents 1, 3, 5 (PRD, Wireframes, Content Deck) |
| Feeds Into | Document 4 execution (Next.js Metadata API), Document 9 (QA Checklist SEO items) |
| Last Updated | August 2026 |

---

## Table of Contents

1. SEO Strategy Overview
2. Target Keyword Map
3. Per-Page Metadata Implementation (Next.js)
4. Heading Hierarchy Rules (H1–H3)
5. URL Structure & Slug Conventions
6. Image Alt Text Guidelines
7. Structured Data (JSON-LD Schema)
8. Open Graph & Social Sharing Metadata
9. Internal Linking Strategy
10. Sitemap & Robots Configuration (Next.js Programmatic)
11. Local SEO Considerations
12. Technical SEO Checklist
13. Post-Launch SEO Monitoring Plan

---

## 1. SEO Strategy Overview

Complete Care Hospital's SEO priority is **local intent capture** — patients in Gwagwalada and the wider Abuja Federal Capital Territory searching for a specific specialty, symptom-adjacent term, or "hospital near me" query. This is not a national or international SEO play; every page's metadata, structured data, and keyword targeting should reinforce **locality + specialty + trust** as the core ranking signal triad.

Secondary priority: **conversion-page indexability** — ensuring the `/appointment` route and service pages rank well enough that a searcher can move from "search result" to "appointment request" in as few clicks as possible. 

**Next.js SEO Advantage:** The migration to Next.js 15 (App Router) provides a significant SEO upgrade over static HTML. Server-Side Rendering (SSR) and Static Site Generation (SSG) ensure search engines always crawl fully rendered content, while the Next.js Metadata API provides programmatic, type-safe control over titles, descriptions, canonical URLs, and Open Graph tags.

---

## 2. Target Keyword Map

| Page | Primary Keyword Target | Secondary Keywords |
|---|---|---|
| Home | "hospital in Gwagwalada" / "hospital Abuja" | "Complete Care Hospital", "healthcare Gwagwalada" |
| About | "Complete Care Hospital about" / "hospital history Gwagwalada" | "hospital mission Abuja" |
| Services | "hospital services Gwagwalada" | "medical specialties Abuja hospital" |
| Service Detail (Cardiology example) | "cardiologist Gwagwalada" / "heart doctor Abuja" | "cardiology hospital FCT" |
| Doctors | "doctors in Gwagwalada" / "physicians Abuja hospital" | "specialist doctors near me" |
| Appointment | "book hospital appointment Gwagwalada" | "schedule doctor visit Abuja" |
| Patient Resources | "hospital patient information Gwagwalada" | "HMO accepted hospital Abuja" |
| Locations | "hospital near Police Barack Gate Gwagwalada" | "hospital address Gwagwalada" |
| Contact | "Complete Care Hospital contact" | "hospital phone number Gwagwalada" |
| Legal Hub | (low SEO priority — compliance page, not acquisition-focused) | — |

**Note:** Keyword targeting must never compromise the natural, warm tone established in the Content Deck (Document 5, Section 1) — keywords are woven into existing sentence structures, never stuffed as unnatural fragments.

---

## 3. Per-Page Metadata Implementation (Next.js)

Metadata in Next.js is implemented using the Metadata API, which automatically injects the correct `<title>`, `<meta name="description">`, canonical links, and Open Graph tags.

### 3.1 Static Pages (e.g., Home, About, Services)
In `app/page.tsx` (Home) or `app/about/page.tsx` (About), metadata is exported statically:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Care Hospital — Quality Healthcare in Gwagwalada, Abuja',
  description: 'Compassionate, expert medical care in Gwagwalada, Abuja. Explore our services, meet our doctors, and book your appointment online today.',
  alternates: {
    canonical: '/',
  },
};
```

### 3.2 Dynamic Pages (e.g., Service Detail)
For dynamic routes like `app/services/[slug]/page.tsx`, metadata is generated dynamically using the `generateMetadata` function based on the route parameters:

```typescript
import { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = await getServiceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} Services — Complete Care Hospital`,
    description: `Expert ${service.name.toLowerCase()} care in Gwagwalada. Learn about our ${service.name.toLowerCase()} treatments, conditions we treat, and how to book a consultation.`,
    alternates: {
      canonical: `/services/${resolvedParams.slug}`,
    },
  };
}
```

### 3.3 Metadata Copy Reference (All 10 Primary Routes)

| Route | `title` (≤60 chars) | `description` (≤155 chars) |
|---|---|---|
| `/` (Home) | Complete Care Hospital — Quality Healthcare in Gwagwalada, Abuja | Compassionate, expert medical care in Gwagwalada, Abuja. Explore our services, meet our doctors, and book your appointment online today. |
| `/about` | About Us — Complete Care Hospital, Gwagwalada | Learn about Complete Care Hospital's mission, history, and dedicated leadership team serving Gwagwalada and the greater Abuja area. |
| `/services` | Our Medical Services — Complete Care Hospital | Explore our full range of medical specialties, from cardiology to pediatrics, all available at Complete Care Hospital in Gwagwalada. |
| `/services/[slug]` | {Specialty} Services — Complete Care Hospital | Expert {specialty} care in Gwagwalada. Learn about our {specialty} treatments, conditions we treat, and how to book a consultation. |
| `/doctors` | Our Doctors — Complete Care Hospital, Gwagwalada | Meet the experienced, board-certified physicians of Complete Care Hospital, dedicated to compassionate care across every specialty. |
| `/appointment` | Book an Appointment — Complete Care Hospital | Schedule your visit to Complete Care Hospital in Gwagwalada in minutes. Fast, simple, and no phone call required. |
| `/patients` | Patient Resources — Complete Care Hospital | Everything you need to know before your visit: insurance, what to bring, visiting hours, and patient rights at Complete Care Hospital. |
| `/locations` | Our Location — Complete Care Hospital, Gwagwalada | Visit Complete Care Hospital at Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja. Get directions and hours. |
| `/contact` | Contact Us — Complete Care Hospital | Get in touch with Complete Care Hospital. Call, email, or send us a message — we're here to answer your questions. |
| `/legal` | Legal & Privacy Information — Complete Care Hospital | Privacy policy, terms of use, and patient rights information for Complete Care Hospital, Gwagwalada. |

---

## 4. Heading Hierarchy Rules (H1–H3)

| Rule | Detail |
|---|---|
| One H1 per page | Matches the `title` intent but need not be identical text — e.g., Home `title` includes "Complete Care Hospital" but the H1 is the hero headline "Your Health, Our Complete Care" |
| H2 for major sections | Every main section block gets exactly one H2 |
| H3 for cards/subsections | Service card titles, doctor names, accordion trigger labels all use H3 — never skip from H1 to H3 without an intervening H2 |
| No heading used for styling alone | A large-looking piece of text that isn't structurally a heading must not be wrapped in an `<h#>` tag merely for visual size — use a styled `<p>` or `<span>` instead (Tailwind CSS makes this trivial: `<p className="text-3xl font-bold">`) |

### 4.1 Per-Page H1 Reference

| Route | H1 Text |
|---|---|
| `/` | Your Health, Our Complete Care |
| `/about` | About Complete Care Hospital |
| `/services` | Our Medical Services |
| `/services/[slug]` | {Specialty} *(e.g., Cardiology)* |
| `/doctors` | Our Doctors |
| `/appointment` | Book an Appointment |
| `/patients` | Patient Resources |
| `/locations` | Our Location |
| `/contact` | Contact Us |
| `/legal` | Legal & Compliance Information |

---

## 5. URL Structure & Slug Conventions

Next.js App Router enforces clean, folder-based routing:

| Rule | Example |
|---|---|
| Clean URLs (No extensions) | `/about`, `/services` (not `about.html`) |
| Dynamic route segments | `/services/cardiology`, `/services/orthopedics` |
| No unnecessary query strings for routing | `/services` (not `/services?page=1`) |
| Query strings permitted only for non-indexed functionality | `/appointment?doctor=dr-emily-carter` |

### 5.1 Canonical Tag Guidance

Because `/appointment` can be reached both directly and via prefill query strings (`/appointment?doctor=...`), Next.js handles this elegantly via the Metadata API. Setting `alternates: { canonical: '/appointment' }` in `app/appointment/page.tsx` ensures the clean URL is indexed, preventing duplicate content penalties for query-string variations.

Additionally, the root `layout.tsx` should define `metadataBase`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://completecarehospital.org'),
  // ...
};
```

---

## 6. Image Alt Text Guidelines

Next.js `<Image>` component strictly requires `alt` props.

| Image Type | Alt Text Pattern | Example |
|---|---|---|
| Hero image | Descriptive scene, not keyword-stuffed | `alt="Hospital reception area at Complete Care Hospital"` |
| Doctor headshot | Name + specialty | `alt="Dr. Emily Carter, Cardiologist at Complete Care Hospital"` |
| Service icon | Empty `alt=""` (decorative — text label already conveys meaning) | `alt=""` |
| Accreditation badge | Name of accreditation/body | `alt="Medical and Dental Council of Nigeria registration badge"` |

**Rule:** Alt text must never be used purely as a keyword-stuffing opportunity — it must accurately describe the image content first.

---

## 7. Structured Data (JSON-LD Schema)

JSON-LD schema is implemented in Next.js by injecting a `<script type="application/ld+json">` tag into the page component. 

### 7.1 Organization/Hospital Schema (app/page.tsx)

```tsx
export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: 'Complete Care Hospital',
    image: 'https://completecarehospital.org/images/hero/hospital-exterior.jpg',
    telephone: '+2348065395623',
    email: 'enquires.complete_care@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phase 1, Opposite ABC Bakery, Police Barack Gate',
      addressLocality: 'Gwagwalada',
      addressRegion: 'Abuja',
      addressCountry: 'NG'
    },
    medicalSpecialty: [
      'Cardiology', 'Oncology', 'Orthopedics', 'Neurology',
      'Gynecology', 'Pediatrics', 'EmergencyRoom', 'PrimaryCare',
      'Surgery', 'Radiography', 'Psychiatric', 'Rehabilitation'
    ],
    url: 'https://completecarehospital.org'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page Content */}
    </>
  );
}
```

### 7.2 BreadcrumbList Schema (Service Detail, Doctors)
Implemented similarly via `dangerouslySetInnerHTML` on the specific page layouts or components, dynamically generating the `itemListElement` array based on the route.

---

## 8. Open Graph & Social Sharing Metadata

Next.js App Router simplifies Open Graph configuration. This should be defined centrally in `app/layout.tsx` and overridden on specific pages as needed.

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  // ... other metadata
  openGraph: {
    title: 'Complete Care Hospital',
    description: 'Compassionate, expert medical care in Gwagwalada, Abuja.',
    url: 'https://completecarehospital.org',
    siteName: 'Complete Care Hospital',
    images: [
      {
        url: '/images/hero/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Care Hospital Exterior',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Care Hospital',
    description: 'Compassionate, expert medical care in Gwagwalada, Abuja.',
    images: ['/images/hero/og-default.jpg'],
  },
};
```
Alternatively, Next.js supports adding an `opengraph-image.tsx` or `opengraph-image.jpg` file directly in the `/app` directory or route segments for automatic generation.

---

## 9. Internal Linking Strategy

In Next.js, all internal links use the `<Link href="...">` component from `next/link` for instant client-side routing.

| Link Pattern | Purpose |
|---|---|
| Home → Services, Doctors, Appointment, Patients | Distributes homepage authority to primary conversion/informational routes |
| Services → `/services/[slug]` | Establishes topical depth per specialty |
| Service Detail → Doctors | Cross-links specialty content to physician credibility content |
| Doctors → `/appointment?doctor=[slug]` | Direct conversion path, reinforcing the Appointment route's internal link count |
| Footer → `/legal` | Ensures Legal Hub receives baseline crawl equity via consistent footer linking |
| Patients ↔ Contact | Bi-directional linking between informational and conversion-adjacent pages |

---

## 10. Sitemap & Robots Configuration (Next.js Programmatic)

Instead of static XML/TXT files, Next.js generates these programmatically.

### 10.1 `app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next';
import { services } from '@/lib/data'; // Ensure this points to your services array

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://completecarehospital.org';
  
  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/appointment`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/doctors`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/locations`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/legal`, priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  const dynamicServiceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...dynamicServiceRoutes];
}
```

### 10.2 `app/robots.ts`
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: 'https://completecarehospital.org/sitemap.xml',
  };
}
```

---

## 11. Local SEO Considerations

Beyond on-page metadata, the following off-page/local actions are recommended (outside this website build's direct scope):

1. **Google Business Profile** — claim/verify a Google Business Profile listing for Complete Care Hospital using the exact address, phone number, and hours published on the website.
2. **NAP consistency audit** — ensure the address format "Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja" is written identically across the website, Google Business Profile, and any directory listings.
3. **Local directory listings** — consider Nigerian healthcare directories and the NHIA facility registry as additional citation sources.

---

## 12. Technical SEO Checklist

- [ ] Next.js `metadataBase` configured in root layout
- [ ] Every route has unique `title` and `description` defined via Next.js Metadata API
- [ ] Every page has exactly one `<h1>`
- [ ] `app/sitemap.ts` generates correctly and includes all dynamic `/services/[slug]` routes
- [ ] `app/robots.ts` correctly excludes `/thank-you`
- [ ] Canonical tags properly set in Metadata API (`alternates: { canonical: '...' }`)
- [ ] All Next.js `<Image>` components have meaningful `alt` props
- [ ] JSON-LD Structured Data injected correctly without hydration errors
- [ ] Open Graph configured via `openGraph` object in layout metadata
- [ ] Lighthouse score meets ≥85 mobile target (Next.js SSR/Image optimizations applied)
- [ ] No broken `<Link>` components across the app
- [ ] Deployed to Vercel/Netlify with HTTPS automatically active

---

## 13. Post-Launch SEO Monitoring Plan

| Action | Frequency | Tool |
|---|---|---|
| Monitor indexing status of all primary routes | Weekly for first month, then monthly | Google Search Console |
| Track keyword ranking movement for Section 2 target terms | Monthly | Google Search Console + manual search checks |
| Review Core Web Vitals / page speed | Monthly | Google Search Console, PageSpeed Insights (Vercel Speed Insights optional) |
| Audit for broken links (site grows/changes over time) | Quarterly | Manual crawl or free broken-link checker tool |
| Refresh Patient Resources / Legal Hub content currency | Quarterly | Manual review |

---

*End of Document 8 of 11 — Complete Care Hospital Website Documentation Suite. Next document: QA / Acceptance Checklist.*
