# Stem-Cogent metadata and SEO inventory

Audit date: 2026-07-23  
Canonical site: `https://thestemgrid.com`  
Source: the Next.js application in this repository, its public crawl files, and the locally rendered homepage.

## 1. Site identity

| Field | Value |
|---|---|
| Product | Stem-Cogent |
| Company | Stem Systems Ltd |
| Default title | Stem Cogent \| Decision Intelligence for African Finance |
| Primary market | Nigeria and African financial services |
| Primary audience | Fintech and financial-services founders, CEOs, strategy, growth, product, risk, operations, research, and intelligence teams |
| Core category | Decision intelligence / business intelligence |
| Canonical origin | `https://thestemgrid.com` |
| HTML language | `en` |
| Open Graph locale | `en_NG` |
| Contact email in `llms.txt` | `stemsystem883@gmail.com` |

## 2. Global metadata

These values are declared in `app/layout.tsx` and inherited by normal pages unless a page overrides them.

### Default title

`Stem Cogent | Decision Intelligence for African Finance`

The layout also declares the template `%s | Stem Cogent`. Because the page metadata files are in the same route segment as this root layout, the locally rendered homepage title is its page title without the suffix:

`Stem | Decision Intelligence & Business Intelligence Nigeria`

### Global description

`Nigeria-first decision intelligence for fintech and financial-services leaders.`

### Global keywords

1. Business intelligence platform Nigeria
2. fintech data analytics
3. decision intelligence software Africa
4. Nigerian financial market trends
5. real-time payment data Nigeria
6. fintech infrastructure providers Lagos
7. data-driven business growth
8. automated financial reporting tools
9. scaling fintech startups in Nigeria
10. NDPR compliant data platforms
11. secure fintech API Nigeria
12. AI-powered business insights

Rendered keyword content:

`Business intelligence platform Nigeria,fintech data analytics,decision intelligence software Africa,Nigerian financial market trends,real-time payment data Nigeria,fintech infrastructure providers Lagos,data-driven business growth,automated financial reporting tools,scaling fintech startups in Nigeria,NDPR compliant data platforms,secure fintech API Nigeria,AI-powered business insights`

### Robots directives

```html
<meta name="robots" content="index, follow">
```

### Icons

| Relationship | URL |
|---|---|
| Icon | `/favicon.svg` |
| Shortcut icon | `/favicon.svg` |
| Apple touch icon | `/v4.png` |

### Open Graph

| Property | Value |
|---|---|
| `og:type` | `website` |
| `og:locale` | `en_NG` |
| `og:url` | `https://thestemgrid.com` |
| `og:site_name` | `Stem Cogent` |
| `og:title` | `Stem Cogent | Decision Intelligence for African Finance` |
| `og:description` | `Detect meaningful market changes early and act with more confidence. The Stem-Cogent provides high-intent business intelligence for Nigerian fintechs.` |
| `og:image` | `https://thestemgrid.com/og-image.png` |
| `og:image:width` | `1200` |
| `og:image:height` | `630` |
| `og:image:alt` | `Stem – Decision Intelligence Nigeria` |

### X/Twitter card

| Property | Value |
|---|---|
| `twitter:card` | `summary_large_image` |
| `twitter:title` | `Stem | Decision Intelligence Nigeria` |
| `twitter:description` | `Detect meaningful market changes early and act with more confidence with The Stem-Cogent.` |
| `twitter:image` | `https://thestemgrid.com/og-image.png` |

### Default document metadata added by Next.js

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="next-size-adjust" content="">
```

The rendered page also preloads the optimized Inter and Newsreader font files and the header logo image.

## 3. Page-level metadata and route behavior

| Route | Behavior | Title | Description | Canonical |
|---|---|---|---|---|
| `/` | Page | Stem \| Decision Intelligence & Business Intelligence Nigeria | Stem helps fintech and financial-services companies in Nigeria detect meaningful market changes early. The leading decision intelligence platform for Nigerian business growth and automated financial reporting. | `https://thestemgrid.com` |
| `/platform` | Page | Platform | Intelligence with operational context. | Not declared |
| `/about` | Page | About | Nigeria-first decision intelligence. | Not declared |
| `/waitlist` | Page | Join the waitlist | Request early access to Stem Cogent. | Not declared |
| `/solutions` | Temporary redirect via `redirect()` | Inherits global metadata if HTML is rendered | Inherits global metadata | Not declared |
| `/use-cases` | Temporary redirect to `/platform` | Inherits global metadata if HTML is rendered | Inherits global metadata | Not declared |
| `/insights` | Temporary redirect to `/platform` | Inherits global metadata if HTML is rendered | Inherits global metadata | Not declared |
| `/company-facts` | Temporary redirect to `/about` | Inherits global metadata if HTML is rendered | Inherits global metadata | Not declared |
| Unknown route | Custom 404 page | Framework/default handling | Framework/default handling | None |

`redirect()` in the Next.js App Router uses a temporary redirect by default. The source maps `/solutions`, `/use-cases`, and `/insights` to `/platform`; `/company-facts` maps to `/about`.

The global Open Graph and X/Twitter values are inherited unchanged by `/platform`, `/about`, and `/waitlist`. This means their social title, description, image, and `og:url` still describe the homepage.

### Title and description lengths

| Item | Characters |
|---|---:|
| Default title | 55 |
| Default description | 79 |
| Homepage title | 60 |
| Homepage description | 209 |
| Platform title / description | 8 / 38 |
| About title / description | 5 / 36 |
| Waitlist title / description | 17 / 36 |
| Open Graph title / description | 55 / 150 |
| X/Twitter title / description | 36 / 89 |

The 209-character homepage description is likely to be truncated in many search-result layouts. The other page descriptions are unusually short and do not communicate much route-specific value.

## 4. Structured data

The following `Organization` JSON-LD is injected into the `<head>` of every page:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thestemgrid.com/#organization",
  "name": "Stem Systems Ltd",
  "alternateName": "Stem-Cogent",
  "url": "https://thestemgrid.com",
  "logo": "https://thestemgrid.com/favicon.svg",
  "description": "Stem Systems Ltd is the entity building Stem-Cogent, a dedicated Decision Intelligence and Business Intelligence platform for the Nigerian Fintech and financial-services sector.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos State",
    "addressCountry": "NG"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Odion O. Alex"
    },
    {
      "@type": "Person",
      "name": "Gift Chinedu Nduka"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/alex-marco1820/",
    "https://www.linkedin.com/in/gift-nduka/"
  ]
}
```

### FAQ structured data present in source but not live

`components/FAQSection.tsx` builds a valid `FAQPage` schema with 16 questions and answers. The component is not imported or rendered by any current route, so neither the FAQ content nor its JSON-LD is present on the live pages.

The FAQ subjects are:

1. What Stem-Cogent is and how it helps fintechs
2. Business intelligence in Nigeria
3. Primary users
4. Identifying early African fintech market shifts
5. Real-time Nigerian payment trends
6. Decision intelligence versus standard business analytics
7. Standalone platform versus integrations
8. Available reports
9. Data accuracy in the Nigerian financial sector
10. ROI for startups
11. Protection of sensitive organizational data
12. Improving data accuracy for Nigerian institutions
13. Benefits of automated business intelligence
14. NDPR compliance
15. Scaling operations with decision intelligence
16. Standard reporting versus Stem decision intelligence

## 5. On-page heading inventory

### Homepage `/`

**H1**

- What changed while you were looking elsewhere.

**H2**

- Settlement pattern detected
- The decisions that cannot wait.
- From signal to decision.
- Know what matters. Defend the decision. Move in time.
- Make your next move the informed one.

**H3**

- Regulation change
- Competitor move
- Infrastructure event
- Detect
- Validate
- Act
- A clearer brief before the meeting.
- Confidence your leadership can interrogate.
- Fewer blind spots. Better timing.

Primary homepage terms and entities include Nigeria, fintech, financial services, decision intelligence, early signals, regulation, competitors, payment infrastructure, CBN, NIBSS, confidence scoring, source lineage, and market intelligence.

### Platform `/platform`

**H1**

- Intelligence with operational context.

**H2**

- Signal synthesis
- Explainable confidence
- Actionable response
- Not more data. More certainty.

**H3**

- What changed
- Why it matters
- What to do next

### About `/about`

**H1**

- Built for the signals that shape African finance.

**H2**

- The context changes the decision.
- Building the intelligence layer financial teams deserve.
- A calmer way to see what matters.

**H3**

- Odion O. Alex
- Gift Chinedu Nduka

### Waitlist `/waitlist`

**H1**

- Make your next move the informed one.

**Conditional H2 after a successful form submission**

- You're on the list!

### 404

**H1**

- This signal went quiet.

## 6. Images and alternative text

| Use | File | Dimensions | Alternative text |
|---|---|---:|---|
| Header/footer logo | `/public/v1.png` | 331 × 333 | `Stem logo` |
| Apple touch icon | `/public/v4.png` | 331 × 333 | Not applicable to an icon link |
| Site icon | `/public/favicon.svg` | 64 × 64 viewBox | Not applicable to an icon link |
| Odion O. Alex portrait | `/team/pf.jpg` | 768 × 1221 | `Odion O. Alex` |
| Gift Chinedu Nduka portrait | `/team/2_gift~3.jpg` | 1987 × 2855 | `Gift Chinedu Nduka` |
| Social sharing image | `/public/og-image.png` | Declared as 1200 × 630 | File is not present in `public` |

Other public logo variants:

| File | Dimensions | Bytes |
|---|---:|---:|
| `/public/v1.png` | 331 × 333 | 29,004 |
| `/public/v2.png` | 331 × 333 | 29,004 |
| `/public/v3.png` | 331 × 333 | 8,374 |
| `/public/v4.png` | 331 × 333 | 7,948 |

## 7. Internal navigation and links

### Header

- `/` — Home
- `/platform` — Platform
- `/about` — About
- `/waitlist` — Join waitlist

### Footer

- `/platform` — Platform
- `/about` — About
- `/waitlist` — Join waitlist

### Contextual calls to action

- Homepage → `/waitlist`
- Platform → `/waitlist`
- About → `/waitlist`
- 404 → `/` and `/platform`

No outbound links are shown in the visible navigation. LinkedIn URLs appear only in Organization JSON-LD, and the contact email appears only in `llms.txt`.

## 8. `robots.txt`

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

Sitemap: https://thestemgrid.com/sitemap.xml
```

All crawlers, including OAI-SearchBot and GPTBot, are explicitly allowed.

## 9. `sitemap.xml`

| URL | Last modified | Change frequency | Priority | Current behavior |
|---|---|---|---:|---|
| `https://thestemgrid.com/` | 2026-05-13 | weekly | 1.0 | Page |
| `https://thestemgrid.com/platform` | 2026-05-13 | monthly | 0.9 | Page |
| `https://thestemgrid.com/solutions` | 2026-05-13 | monthly | 0.9 | Redirects to `/platform` |
| `https://thestemgrid.com/use-cases` | 2026-05-13 | monthly | 0.85 | Redirects to `/platform` |
| `https://thestemgrid.com/insights` | 2026-05-13 | weekly | 0.8 | Redirects to `/platform` |
| `https://thestemgrid.com/about` | 2026-05-13 | monthly | 0.75 | Page |
| `https://thestemgrid.com/waitlist` | 2026-05-13 | monthly | 0.9 | Page |
| `https://thestemgrid.com/company-facts` | 2026-05-13 | monthly | 0.5 | Redirects to `/about` |

The sitemap uses a fixed timestamp of `2026-05-13T12:00:00+00:00` for every URL.

## 10. `llms.txt`

The site exposes `/llms.txt` with the following machine-readable positioning:

- Stem-Cogent is a product of Stem Systems Ltd.
- It is a Nigerian business-intelligence and decision-intelligence platform for fintech and financial-services companies.
- Core services: Nigerian business intelligence, the Stem-Cogent signal lens, fintech analytics, and decision intelligence.
- Founders: Odion O. Alex and Gift Chinedu Nduka.
- Key features: early market-shift identification, real-time monitoring, NDPR compliance, and limited-rollout waitlist access.
- Important routes: homepage, about, platform, solutions, use cases, waitlist, and sitemap.
- Contact: `stemsystem883@gmail.com`.
- LinkedIn:
  - `https://www.linkedin.com/in/alex-marco1820/`
  - `https://www.linkedin.com/in/gift-nduka/`

## 11. Rendered homepage head

This is the meaningful SEO portion of the locally rendered homepage head:

```html
<title>Stem | Decision Intelligence &amp; Business Intelligence Nigeria</title>
<meta name="description" content="Stem helps fintech and financial-services companies in Nigeria detect meaningful market changes early. The leading decision intelligence platform for Nigerian business growth and automated financial reporting.">
<meta name="keywords" content="Business intelligence platform Nigeria,fintech data analytics,decision intelligence software Africa,Nigerian financial market trends,real-time payment data Nigeria,fintech infrastructure providers Lagos,data-driven business growth,automated financial reporting tools,scaling fintech startups in Nigeria,NDPR compliant data platforms,secure fintech API Nigeria,AI-powered business insights">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://thestemgrid.com">
<meta property="og:title" content="Stem Cogent | Decision Intelligence for African Finance">
<meta property="og:description" content="Detect meaningful market changes early and act with more confidence. The Stem-Cogent provides high-intent business intelligence for Nigerian fintechs.">
<meta property="og:url" content="https://thestemgrid.com">
<meta property="og:site_name" content="Stem Cogent">
<meta property="og:locale" content="en_NG">
<meta property="og:image" content="https://thestemgrid.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Stem – Decision Intelligence Nigeria">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Stem | Decision Intelligence Nigeria">
<meta name="twitter:description" content="Detect meaningful market changes early and act with more confidence with The Stem-Cogent.">
<meta name="twitter:image" content="https://thestemgrid.com/og-image.png">
<link rel="shortcut icon" href="/favicon.svg">
<link rel="icon" href="/favicon.svg">
<link rel="apple-touch-icon" href="/v4.png">
```

## 12. SEO and metadata gaps found

1. `og-image.png` is referenced for Open Graph and X/Twitter but is absent from `public`. Social previews will not have the intended image until a 1200 × 630 asset is added.
2. `/platform`, `/about`, and `/waitlist` do not declare canonical URLs.
3. Those pages inherit the homepage `og:url`, social title, description, and image instead of having route-specific social metadata.
4. The short page titles `Platform`, `About`, and `Join the waitlist` do not consistently carry the brand name in rendered output.
5. The sitemap includes four redirect-only URLs. Search engines should normally receive only final, canonical, indexable URLs.
6. All sitemap modification dates are static and should be updated when content changes or generated from actual modification data.
7. `FAQPage` structured data exists in code but is not live because `FAQSection` is unused.
8. No `WebSite`, `WebPage`, `SoftwareApplication`, `Service`, or `BreadcrumbList` schema is declared.
9. Organization schema has no `contactPoint`, email, founding date, or image beyond the favicon.
10. No web-app manifest, theme color, author, creator, publisher, category, search-console verification, or language-alternate metadata is declared.
11. The contact email and founder LinkedIn links are not visible in the page UI.
12. Brand naming is inconsistent: `Stem`, `Stem-Cogent`, `Stem Cogent`, `Stem Systems Ltd`, and the footer's singular `Stem System Ltd.` are all used.
13. There are no privacy-policy or terms links near the waitlist form even though the form collects personal and business information.
14. The visible site makes claims about NDPR compliance, security, real-time data, and data accuracy in the unused FAQ/`llms.txt`; these claims should be substantiated and kept consistent with live content.
