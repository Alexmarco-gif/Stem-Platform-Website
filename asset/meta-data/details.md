# Stem-Cogent website design and build specification

Audit date: 2026-07-23  
Purpose: a practical reference for recreating this website from scratch while preserving its brand, structure, feel, and functionality.

## 1. Brand foundation

### Brand and company

- Product name: **Stem-Cogent**
- Company: **Stem Systems Ltd**
- Category: decision intelligence and business intelligence
- Geographic focus: Nigeria first, then African financial services
- Primary audience: fintech and financial-services leadership, strategy, growth, product, risk, operations, research, and intelligence teams
- Primary conversion: join the private-access waitlist

### Core promise

Turn noisy regulatory, infrastructure, competitor, consumer, payment, and market signals into validated, explainable, decision-ready intelligence.

### Positioning pillars

1. **Early:** detect meaningful changes before they become obvious.
2. **Explainable:** show confidence, source lineage, and context.
3. **Locally grounded:** design around Nigerian and African market realities.
4. **Actionable:** end with a recommended next move.
5. **Calm and credible:** reduce noise rather than adding more dashboards.

### Voice and writing style

- Executive, measured, and confident
- Editorial rather than overly technical
- Short, declarative headlines
- Strategic vocabulary: signals, context, confidence, lineage, intelligence, timing, decisions
- Local authority without slang
- Uses contrasts to sharpen the message: “Not more data. More certainty.”
- Uses restrained emphasis with italic serif phrases

## 2. Visual direction

The design is an editorial enterprise-fintech landing site. It combines:

- Deep navy intelligence-dashboard surfaces
- Electric blue brand accents
- Cool, nearly white lavender backgrounds
- Large, high-contrast serif display headlines
- Compact sans-serif body copy and micro-labels
- Fine borders, restrained shadows, and data-grid motifs
- Mostly square editorial cards on marketing pages
- More rounded, softer UI cards for forms and data visualizations

The intended emotional result is analytical, premium, locally authoritative, and calm.

## 3. Color system

### Core brand tokens

| Token / role | Hex | Use |
|---|---|---|
| Primary blue | `#333CFF` | CTAs, links, active navigation, emphasis, selection, data accents |
| Deep navy | `#07112B` | Header, dark sections, primary brand backdrop |
| Deep ink | `#101A39` | Main text and borders on light backgrounds |
| Soft background | `#F5F6FF` | Cool page surfaces |
| Body background | `#F7F8FF` | Global page background |
| White | `#FFFFFF` | Cards, reversed text, button surfaces |

### Dark surface palette

| Color | Hex | Use |
|---|---|---|
| Near-black hero | `#050A1B` | Homepage hero |
| Footer navy-black | `#050B1C` | Footer |
| Dark section navy | `#07112B` | Dark content sections |
| Alternate navy | `#081330` | Platform intelligence section |
| Brief card surface | `#0D1733` | Homepage intelligence brief |
| Data output surface | `#0F172A` | Flow/output cards |
| Nested panel | `#111D3B` | Confidence-score panel |

### Light surface palette

| Color | Hex | Use |
|---|---|---|
| Lavender white | `#F3F5FF` | Platform/about hero and hover surface |
| Pale blue | `#F3F6FF` | Accountable-teams section |
| Body background | `#F7F8FF` | Default page |
| Cool gradient mid | `#EEF4FF` | Diagram backgrounds |
| Icon chip | `#EDF2FF` | Homepage card icons |
| Gradient light | `#F8FAFC` | Diagram background |
| Gradient white | `#FBFCFF` | Diagram background |

### Supporting accents

| Color | Hex | Use |
|---|---|---|
| Bright data blue | `#24A0FF` | Confidence score |
| Cyan | `#6BD1FF` | “High” confidence label |
| Periwinkle | `#7F8BFF` | Confidence values on dark panels |
| Button hover | `#2029DF` | Primary CTA hover |
| Line blue-gray | `#536184` | Data-card borders |
| Border blue-gray | `#6D7AAA` | Intelligence brief border |
| Favicon blue | `#3538F2` | SVG icon background; close to but not identical to primary blue |

Tailwind’s slate, blue, emerald, amber, rose, and red scales supply neutral copy and semantic states. Emerald is used for success; amber and rose indicate monitoring/high priority; red is used for form errors.

### Background treatments

**Blue grid**

- Base: primary blue
- Grid lines: white at 7% opacity
- Cell size: 48 × 48 px
- Motion: drifts one cell over 22 seconds

**Dark grid**

- Base: deep navy or near-black
- Grid lines: `rgb(112 137 255 / 0.11)`
- Cell size: 48 × 48 px
- Motion: reverse drift over 34 seconds

**Hero glow**

- Radial electric-blue glow at approximately 24% opacity behind the intelligence brief

**Diagram surfaces**

- White-to-pale-blue gradients
- Soft radial blue and slate highlights
- Optional 36 × 36 px technical grid

## 4. Typography

### Font families

| Role | Font | Fallback |
|---|---|---|
| UI, body, labels, navigation | Inter | Arial, sans-serif |
| Headlines and brand wordmark | Newsreader | Georgia, serif |

Both fonts are loaded through `next/font/google` and self-hosted by Next.js at build time.

### Newsreader weights

- 400
- 500
- 600
- 700

### Type hierarchy

| Element | Typical size | Treatment |
|---|---|---|
| Desktop hero H1 | 72 px (`text-7xl`) | Newsreader, 0.98 line height, −0.055em tracking |
| Tablet hero H1 | 60 px (`text-6xl`) | Same |
| Mobile hero H1 | 48 px (`text-5xl`) | Same |
| Large section H2 | 48–60 px | Newsreader, tight line height |
| Standard section H2 | 36–48 px | Newsreader |
| Editorial card H3 | 24 px | Newsreader |
| UI/data title | 15–24 px | Inter semibold or Newsreader depending on context |
| Body | 14–16 px | Inter, 24–28 px line height |
| Card body | 12–14 px | Inter, 20–24 px line height |
| Navigation | 12 px | Inter medium |
| Eyebrow label | 10–12 px | Bold uppercase, 0.24em tracking |
| Data microcopy | 9–10 px | Semibold/bold uppercase, 0.14–0.26em tracking |

### Typographic behavior

- Serif headlines provide editorial authority.
- Sans-serif body text keeps technical content clear.
- Italics highlight the emotional or strategic turn in a headline.
- Light text on dark surfaces generally uses 55–80% white opacity.
- Body copy on light surfaces generally uses deep ink at 60–65% opacity.
- Headlines use short line lengths, often 9–13 characters (`ch`) wide for dramatic wrapping.

## 5. Layout system

### Container

The shared `.site-shell` is:

- Maximum width: 1440 px
- Horizontally centered
- Mobile horizontal padding: 24 px
- Medium screens: 40 px
- Large screens: 56 px

### Breakpoints

The implementation uses Tailwind defaults:

| Breakpoint | Minimum width |
|---|---:|
| `sm` | 640 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

### Vertical rhythm

- Standard section: 80 px vertical padding on mobile
- Large-screen section: 96–112 px vertical padding
- Homepage hero: minimum height 690 px
- Header: 64 px high
- Footer: 40 px vertical padding
- Large content gaps: 40–64 px
- Card gaps: 16–20 px

### Grid patterns

- Hero: approximately 46% copy / 54% visual
- Platform hero: approximately 45% introduction / 55% capabilities
- Two-column explanation: 50% / 50%
- Waitlist: approximately 42.5% pitch / 57.5% form
- Card sections: one column on mobile, three columns from tablet/desktop
- Team section: one column on mobile, two columns from `sm`

### Shape language

- Editorial marketing cards: mostly square corners
- Form container: 32 px radius
- Diagram/output cards: 24–30 px radius
- Form fields: 16 px radius
- Logo image: 12 px radius
- Status chips and numbered nodes: circles or pills
- Borders are thin and low contrast, usually 10–20% opacity

### Shadows

- Marketing cards use subtle, wide shadows: approximately `0 12px 28px rgba(20,30,60,.05)`
- Hover cards lift by 4 px and deepen to roughly `0 22px 36px rgba(20,30,60,.10)`
- Form and diagram cards use larger soft shadows: approximately `0 24px 64px rgba(15,23,42,.08)`
- Dark intelligence cards use much deeper shadows, up to `0 28px 90px rgba(0,0,0,.42)`

## 6. Page structure

### Shared frame

1. Sticky, translucent deep-navy header
2. Page content with a short entrance animation
3. Deep navy-black footer
4. Vercel Analytics

### Header

- Left: square logo plus Newsreader “Stem-Cogent” wordmark
- Center on desktop: Home, Platform, About
- Right: electric-blue “Join waitlist” CTA
- Mobile: Menu/Close toggle and stacked navigation
- Active route: electric-blue bottom border
- Uses backdrop blur and a subtle lower border

### Homepage

1. **Dark hero**
   - Eyebrow: “The signal”
   - Large H1 about what changed while the reader looked elsewhere
   - Short positioning statement
   - Three proof labels: early, explainable, decision-ready
   - Simulated intelligence brief with a confidence score and source lineage
2. **Credibility strip**
   - Validated · Explainable · Regionally real · Decision-ready
3. **Decision moments**
   - Regulation change
   - Competitor move
   - Infrastructure event
4. **Signal-to-decision system**
   - Detect → Validate → Act
   - Inputs, animated intelligence engine, and decision outputs
5. **Outcome/value section**
   - Clearer brief
   - Interrogable confidence
   - Fewer blind spots and better timing
6. **Electric-blue conversion section**
   - Private access / launching soon
   - Founding-customer CTA

### Platform

1. Light editorial hero
2. Three capabilities: signal synthesis, explainable confidence, actionable response
3. Dark intelligence operating-system section with a table-like signal view
4. Three-part brief output: what changed, why it matters, what to do next

### About

1. Light hero focused on African finance
2. Dark belief section about local context
3. Two-founder portrait grid
4. Closing statement and waitlist CTA

### Waitlist

1. Full-width primary-blue grid background
2. Left: access pitch and benefits
3. Right: white rounded form card
4. Success state replaces the form after submission

### Redirect-only routes

- `/solutions` → `/platform`
- `/use-cases` → `/platform`
- `/insights` → `/platform`
- `/company-facts` → `/about`

### 404

- Pale radial/vertical background
- Brand logo
- “This signal went quiet.”
- Links back to Home and Platform

## 7. Components

### Active components

| Component | Responsibility |
|---|---|
| `BrandLogo` | Logo image and optional wordmark |
| `Header` | Sticky desktop/mobile navigation |
| `Footer` | Brand statement and core links |
| `HomeClient` | Homepage sections and intelligence brief |
| `RequestForm` | Validation, submission states, and waitlist form |
| `SiteMotion` | Site-wide GSAP reveal and counter animations |

### Present but currently unused

| Component | Intended responsibility |
|---|---|
| `FAQSection` | Two-column interactive FAQ plus `FAQPage` JSON-LD |
| `FlowCanvas` | Responsive signal-input-to-output diagram |
| `StoryHeroVisual` | Animated signal-lens visual |
| `CursorFollower` | Custom cursor treatment |
| `PageReveal` | Alternative GSAP page reveal system |
| `ScrollReveal` / `RevealItem` | Component-wrapped reveal animations |

When rebuilding, either integrate these intentionally or remove them to avoid maintaining two competing visual/animation systems.

## 8. Motion and interaction

### CSS motion

- Page entrance: fade from 0 to 1 and move upward 8 px over 0.45 seconds
- Background grid drift: linear, infinite
- Smooth scrolling
- Primary button hover: darker electric blue
- Cards: slight upward lift and stronger shadow
- Capability rows: slight left-padding shift
- Portraits: 1.03× zoom on hover

### GSAP motion

`SiteMotion` uses GSAP 3 and ScrollTrigger:

- Standard reveal: opacity + 28 px vertical movement, 0.72 s
- Text reveal: opacity + 18% vertical movement + clipping, 1 s
- Staggered groups: 0.58 s per child with 0.12 s stagger
- Intelligence brief: fades/slides from the right with a small 3D rotation
- Engine icon: continuously pulses and gains an electric-blue glow
- Numeric counter: animates from 0 to its target value
- All scroll triggers run once

### Reduced motion

- CSS honors `prefers-reduced-motion`
- `SiteMotion` exits before creating GSAP animations when reduced motion is requested

## 9. Waitlist form and backend behavior

### Fields

| Field | Required | Notes |
|---|---|---|
| First name | Yes | Autocomplete: `given-name` |
| Last name | Yes | Autocomplete: `family-name` |
| Email | Yes | Client-side email pattern validation |
| Company name | No | Autocomplete: `organization` |
| Role | Yes | Strategy, growth, CEO/founder, research, operations, or other |
| Needs/message | No | Four-row text area |

### States

- Idle
- Loading with spinner
- Error banner
- Success card

### Submission flow

1. Client validates required fields and email shape.
2. A Next.js Server Action receives `FormData`.
3. Resend sends an HTML notification email.
4. The notification recipient comes from `NOTIFICATION_EMAIL`, with a fallback address.
5. The form switches to success or error state.

### Required environment variables

- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL` (optional because the code has a fallback)

### Production-hardening requirements

- Repeat validation on the server; client validation alone can be bypassed.
- Escape user-supplied strings before interpolating them into HTML email.
- Add rate limiting and bot/spam protection.
- Set up a verified Resend sending domain instead of relying on `onboarding@resend.dev`.
- Record consent text and link to a privacy policy.
- Consider persisting signups to a database or CRM, not only email.
- Add idempotency/duplicate handling and submission telemetry.

## 10. Technology stack

### Runtime and framework

| Technology | Version / configuration | Purpose |
|---|---|---|
| Node.js | `20.x` | Runtime |
| Next.js | `16.2.1` | App Router, server rendering, metadata, routing, Server Actions, image/font optimization |
| React | `19.2.4` | UI |
| React DOM | `19.2.4` | Rendering |
| TypeScript | `^5`, strict mode | Type safety |

### Styling and motion

| Technology | Version | Purpose |
|---|---:|---|
| Tailwind CSS | `^4` | Utility styling and theme tokens |
| `@tailwindcss/postcss` | `^4` | Tailwind PostCSS integration |
| GSAP | `^3.14.2` | Scroll and entrance animation |
| Lucide React | `^1.7.0` | Form/status icons |

### Data, email, and analytics

| Technology | Version | Purpose |
|---|---:|---|
| Resend | `^6.12.0` | Waitlist notification email |
| Vercel Analytics | `^2.0.1` | Usage analytics |

### Native Next.js features used

- App Router
- Static and server-rendered pages
- `next/font/google`
- `next/image`
- `next/link`
- `usePathname`
- `redirect`
- Metadata API
- Server Actions
- Built-in not-found page

### Tooling

- ESLint 9
- `eslint-config-next` with Core Web Vitals and TypeScript rules
- Path alias: `@/*` → project root
- NPM lockfile
- Development server configured on port 3002

## 11. Asset inventory

| Asset | Dimensions | Role |
|---|---:|---|
| `public/v1.png` | 331 × 333 | Active header/footer logo |
| `public/v2.png` | 331 × 333 | Alternate logo variant |
| `public/v3.png` | 331 × 333 | Alternate logo variant |
| `public/v4.png` | 331 × 333 | Apple touch icon |
| `public/favicon.svg` | 64 × 64 viewBox | Browser favicon |
| `team/pf.jpg` | 768 × 1221 | Odion O. Alex portrait |
| `team/2_gift~3.jpg` | 1987 × 2855 | Gift Chinedu Nduka portrait |
| `public/og-image.png` | Intended 1200 × 630 | Referenced social card; currently missing |

The favicon is a rounded electric-blue square containing four uneven white rounded squares, evoking a modular data grid.

## 12. Accessibility baseline

Existing strengths:

- `<html lang="en">`
- Semantic headings and sections
- Labeled main and mobile navigation
- Labeled form controls
- Required-state attributes and autocomplete tokens
- Descriptive portrait alternative text
- Reduced-motion support
- Visible focus treatment on shared buttons and form controls
- Mobile menu exposes `aria-expanded`

Recommended improvements:

- Add a skip-to-content link.
- Add `aria-current="page"` to the active navigation link.
- Give the FAQ buttons `aria-expanded` and a controlled-panel relationship if the unused FAQ is enabled.
- Ensure all small, low-opacity text passes WCAG contrast.
- Add an accessible live region for form success/error announcements.
- Verify keyboard focus after opening/closing the mobile menu and after a successful form submission.

## 13. Rebuild blueprint

### Foundation

1. Create a Next.js App Router project with TypeScript and Node 20.
2. Install Tailwind 4, GSAP/ScrollTrigger, Lucide React, Resend, and Vercel Analytics.
3. Load Inter and Newsreader with `next/font`.
4. Define the four core tokens: primary blue, deep navy, deep ink, and soft background.
5. Implement the 1440 px site shell and shared header/footer.

### Design system

1. Build reusable eyebrow, display-heading, body-copy, primary-button, secondary-button, grid-background, and card styles.
2. Keep serif type for brand and editorial headlines; use Inter everywhere else.
3. Use thin borders and restrained shadows on light surfaces.
4. Use dark technical panels for proof and product demonstrations.
5. Preserve the contrast between square editorial cards and rounded application UI.

### Pages

1. Build Home, Platform, About, and Waitlist as final routes.
2. Decide whether the redirect-only routes should become real pages; otherwise remove them from navigation and sitemap.
3. Build page-specific metadata, canonicals, Open Graph values, and structured data.
4. Add the missing 1200 × 630 social image.
5. Generate sitemap dates from real content changes.

### Interaction

1. Add a single, shared motion system.
2. Keep reveals subtle and one-time.
3. Respect reduced-motion preferences at both CSS and JavaScript levels.
4. Keep functional interactions usable before animation loads.

### Conversion and data

1. Implement the waitlist form with client and server validation.
2. Add anti-spam, rate limiting, consent, privacy links, and a verified sender.
3. Save signups to a durable system before sending notification email.
4. Track successful submissions as an analytics conversion.

## 14. Details to fix before using this as a production reference

1. Create the missing `public/og-image.png`.
2. Make the brand spelling consistent everywhere.
3. Give every indexable page a unique full title, canonical URL, description, and social card.
4. Remove redirect-only URLs from the sitemap or turn them into real pages.
5. Decide whether to publish the FAQ and its schema.
6. Add privacy/terms content for the waitlist.
7. Harden the Server Action against unvalidated input, HTML injection, spam, and abuse.
8. Remove unused components or consolidate them into the active design system.
9. Update the default README, which still describes a generic Create Next App project and references Geist even though the site uses Inter and Newsreader.

