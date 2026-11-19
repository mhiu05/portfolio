# Editorial Engineering

## Concept

A warm editorial portfolio for an aspiring AI / LLM engineer. Large, direct typography makes the role immediately clear; a dark orchestration diagram explains the technical interests. The recruiter journey moves from identity to selected systems, then employment, learning, toolkit and contact. No numerical decorations imply research results.

The supplied palette, stack and hero layout are binding design decisions. Alternatives considered were a dense terminal-inspired page (too much visual noise for scanning) and a conventional identical-card grid (weak project hierarchy). The chosen editorial layout uses one featured story and supporting project panels. Impeccable's concept reference check was run, with the explicit brief taking precedence over alternative visual worlds. Implementation is code-first because the brief specifically requests authored SVG/CSS engineering visuals and autonomous implementation; no generated image comp was used.

## Palette

| Token | Value | Role |
|---|---|---|
| Background | `#F5F5EF` | Warm page ground |
| Surface | `#FFFEF9` | Project and program regions |
| Text | `#17201C` | Headings and primary copy |
| Secondary | `#606C63` | Accessible supporting copy; strengthened from the initial brief |
| Accent | `#D8F46C` | Orchestrator, underline and selective recovery visual |
| Dark | `#14221D` | Agent diagram and footer |
| Border | `#D6DCD3` | Editorial rules |

All colors live in `src/styles/tokens.css`, including supporting diagram palettes, dark-surface text and focus colors. Selection, focus, scrollbar and browser theme color are coordinated.

## Typography and spacing

Space Grotesk for headings, DM Sans for body, IBM Plex Mono only for technical captions and date/data labels. Latin fonts are self-hosted in the Vite bundle. Display type scales up to 96px, section headings to 44px, body 13–19px depending on context. Status labels are at least 11px and substantive disclosures 12px. Tiny text exists only inside illustrative artwork. Tracking does not go below -0.04em.

Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Desktop content width is 1248px with 48px minimum side gutters. Mobile uses 20px gutters. Regions are separated by thin rules and 57–104px of vertical space; related content stays tightly grouped.

## Components

- Header: wordmark, active anchor navigation, optional resume, contact action and disclosure-style mobile menu.
- Hero: two editorial headline lines and compact actions, paired with an authored orchestration diagram.
- About: education, Agent Engineering with tool calling, memory, retrieval and backend integration, and concise workflow.
- Projects: featured SafeVoice demo screenshot, followed by VDaAgent and Non-Invasive repository screenshots. Arrow previews appear on hover/focus without hiding actions.
- Work: a true employer timeline, separate from experiments. Dates, images and metadata degrade gracefully; the supplied entry is visibly a placeholder.
- Achievement: seven supplied certificates with uncropped previews, document-derived descriptions, dates and outcomes. Full-size images open from the certificate action. AI in Action is omitted until an image is available.
- Activities: a two-column image gallery between Achievement and Toolkit, stacking on mobile. Three supplied activity images have descriptions, organizations and dates supported by their contents or filenames; images open at full size.
- Toolkit: ruled category rows; tools with declared associations link to a project brief. Sample status sits near the heading.
- Studies: large project header, concept visual, content index, reusable prose/architecture/code/table blocks and next-project navigation.
- Footer: dark contact statement, only available social links and a back-to-top action.

## Motion

GSAP is registered once in `src/lib/motion.ts`. All animations are scoped to a React ref with context and media-query cleanup; StrictMode does not leave duplicate triggers. Intro uses a staggered timeline-like reveal. Scroll entries use subtle translation without hiding content before reaching the viewport. The timeline uses a scrubbed transform. The agent flow runs once for less than five seconds and pauses out of view. Hover transforms stay small. CSS and GSAP respond to reduced-motion changes. There is no scroll interception, preload barrier or perpetual particle effect. Content remains visible without animation initialization.

## Responsive behavior

At 1024px the navigation becomes a mobile disclosure menu. Desktop and tablet use a two-column supporting-project grid; About's workflow spans both columns on tablet. Below 640px the hero, details, cards and contact stack. The diagram loses its desktop rotation. The timeline moves to a left rail. Case-study navigation becomes an inline wrap instead of a sticky side index. Components use intrinsic widths and minmax columns; images are contained, not stretched or cropped.

## Accessibility and evidence

Semantic landmarks, one h1 per route, skip link, visible keyboard focus, non-trapping disclosure menu, Escape dismissal only while open, route/anchor focus, accurate icon labels, reduced motion and external-link security attributes. No fabricated metrics, credentials, job history or images. Empty links are absent. All project art is explicitly illustrative.

Design review used desktop/tablet/mobile screenshots and an independent visual reviewer, followed by an independent implementation review and the Impeccable detector. Fixes strengthened unverified labels, made disclosures readable, capped automatic motion, corrected optional image replacement and repaired hash-hosted metadata. Browser and component test evidence is recorded in `artifacts/QA.md`. Lighthouse and full assistive-technology audits remain unmeasured.
