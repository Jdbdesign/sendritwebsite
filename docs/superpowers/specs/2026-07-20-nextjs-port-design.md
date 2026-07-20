# Sendrit marketing site → Next.js port

## Context

This folder contains two static design-tool exports produced by the Claude Design tool:

- `Sendrit Signal.dc.html` — the marketing landing page (nav, hero, animated dashboard mockup, trust strip, feature grids, stats band, "how it works" steps, an autoplaying process accordion, a solutions grid, a deliverability deep-dive with an animated percentage, an autoplaying testimonial carousel, an integrations grid, final CTA, footer)
- `Sendrit Pricing.dc.html` — the pricing page (nav, hero, a 12-plan pricing grid, an accordion FAQ, footer)

Both are self-contained (inline styles, no external CSS framework), dark-purple SaaS aesthetic, Manrope font. They depend on a custom runtime (`support.js`, `image-slot.js`, the `<x-dc>` wrapper, and an embedded `<script type="text/x-dc">` class extending `DCLogic`) that only exists to power the design tool's live-editing canvas — it is not meant to ship in a real app.

The embedded `DCLogic` component (inside each `.dc.html` file) documents the exact interactive behavior the design implements:
- Scroll-triggered reveal animations (`data-reveal`, `data-stagger`) via `IntersectionObserver`, staggered 85ms per child, respecting `prefers-reduced-motion`
- Count-up number animations (`data-count`, `data-suffix`, `data-comma`) — cubic ease-out, 1500ms, triggered at 60% visibility
- A large animated percentage counter (`#deliv-counter`) — cubic ease-out to 98.5%, 1700ms, triggered at 40% visibility
- Pointer-driven 3D tilt on the dashboard mockup (`data-tilt`) — rotateX/Y up to 5deg based on cursor position
- Mouse-following radial-gradient "spotlight" on feature-grid cards (`data-spotlight`)
- Nav scroll-spy highlighting `#features` / `#deliverability` links
- An autoplaying process accordion (4.2s interval, pauses on hover, click to jump to a step)
- An autoplaying testimonial carousel (4.8s interval, pauses on hover, prev/next buttons, `translateX` by 402px per step)
- An accordion FAQ on the pricing page (click to expand/collapse, one open at a time)

Neither page currently references anything under `uploads/` or `screenshots/` (confirmed via grep for `<img`, `background-image`, `uploads/`) — the only image assets actually used are the 6 SVG icons under `icons/` (Mailchimp, Slack, Zapier, WordPress, Shopify, Webhook), shown in the integrations grid.

## Goal

Turn this into a real Next.js project: two routes (`/` and `/pricing`) that visually and behaviorally match the existing designs, built with idiomatic Next.js/React instead of the design-tool's custom template runtime.

## Approach

**Stack:** Next.js (App Router), TypeScript, React. No CSS framework — CSS Modules per component plus one `globals.css` for resets, color tokens (CSS custom properties matching the existing hex values), and the six `@keyframes` used in the source (`fadeUp`, `glowIn`, `barGrow`, `softPulse`, `floaty`, `floaty2`). `next/font/google` loads Manrope (weights 400–800) in place of the Google Fonts CDN `<link>` tags — visually identical, no CLS.

**Routing:** `app/page.tsx` (landing) and `app/pricing/page.tsx` (pricing), sharing a root `app/layout.tsx` (Manrope font, base metadata, `globals.css` import).

**Components:** One file per section, mirroring the source's own section comments:
- Landing: `Nav`, `Hero`, `DashboardMockup`, `TrustStrip`, `FeatureGridColorful`, `FeaturesSection`, `BuiltForGrowth`, `StatsBand`, `HowItWorks`, `ProcessAccordion`, `Solutions`, `DeliverabilityDeepDive`, `Testimonials`, `Integrations`, `FinalCTA`, `Footer`
- Pricing: `Nav` (shared), `PricingHero`, `PricingGrid`, `FAQ`, `Footer` (shared, `variant` prop for the slightly different copy/links between pages)

Per-element styling stays as inline `style={{...}}` objects, translated close to 1:1 from the source's inline `style="..."` strings — this is the lowest-risk path for porting ~1,150 lines of hand-tuned gradient/shadow/spacing values without transcription drift. CSS Modules are used only where inline styles can't express the behavior: `:hover`/`:focus` states (replacing the source's `style-hover` attribute hack with real CSS pseudo-classes).

**Interactivity:** The source's single `DCLogic` class is decomposed into small reusable hooks, one per behavior:
- `useRevealOnScroll(ref, { stagger? })` — IntersectionObserver-driven fade/translateY-in; used directly on `data-reveal`-equivalent wrapper elements and on stagger-group containers
- `useCountUp(target, { suffix, decimals, comma, threshold })` — cubic ease-out count animation, used by stat numbers and the big deliverability percentage (different thresholds/durations per source)
- `useTilt(ref)` — pointer-position-driven rotateX/Y, used by the dashboard mockup
- `useSpotlight(containerRef)` — per-card mouse-following radial-gradient background, used by the feature grid
- `useAutoplay(callback, intervalMs, { pauseOnHover })` — generic pause-on-hover interval, reused by both the process accordion and the testimonial carousel
- `useScrollSpy(sectionIds)` — nav active-link highlighting

All hooks respect `prefers-reduced-motion` where the source does (reveal and count-up animations skip straight to their end state).

**Content:** Plan tiers, testimonials, FAQs, process steps, feature copy, and stats are extracted verbatim into typed data files under `lib/data/`.

**Assets:** The 6 integration SVGs move to `public/icons/`. `uploads/`, `screenshots/`, `.thumbnail`, `.image-slots.state.json`, `support.js`, `image-slot.js`, and the two original `.dc.html` files are left in place, untouched, and not referenced by the new app — they're Claude Design tool artifacts, not used by the rendered output.

**Out of scope:** No backend, no CMS, no analytics, no deployment config — a static two-route marketing site only, matching what the two source files actually contain.

**Tooling:** npm as package manager; scaffolded via `create-next-app` with TypeScript and ESLint enabled, Tailwind declined (styling approach above supersedes it).

## Testing

No automated test suite for this port — it's a visual/behavioral match to a fixed source. Verification is manual: run `next dev`, compare both routes against the `.dc.html` originals (open directly in a browser) section by section, and confirm the interactive behaviors (reveal, count-up, tilt, spotlight, accordion autoplay, carousel autoplay, FAQ toggle) match.
