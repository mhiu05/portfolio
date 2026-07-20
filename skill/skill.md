---
name: portfolio-website
description: 'Build or improve a professional personal portfolio website for a developer, engineer, researcher, or student. Covers audience framing, content inventory, information architecture, project case-study writing (the highest-leverage part), visual design direction, tech-stack selection (Astro vs Next.js vs static HTML), accessibility, performance, SEO, and deployment. Use whenever the user wants to create, redesign, restructure, review, or polish a personal portfolio, personal website, "about me" page, CV/resume site, or academic homepage — including "trang web cá nhân", "portfolio cá nhân", "website portfolio", or "CV online". Also trigger for narrower asks that are really part of this job: writing one project description, choosing portfolio sections, picking a personal-site tech stack, or reviewing an existing portfolio draft — even without the word "portfolio".'
---

# Professional Portfolio Website

## Philosophy

A portfolio has exactly one job: make the right person remember this person and want to reach out. It is not a resume rehash, and it is not proof that someone can code — everyone applying can code. It is proof that this specific person thinks clearly, ships real things, and is worth a reply.

Two consequences follow:

1. **Depth over breadth.** Three to five projects explained well beat ten explained shallowly. A wall of "todo app / weather app / calculator" reads as a bootcamp checklist, not a portfolio.
2. **Verifiable over asserted.** Claims ("built a scalable RAG pipeline") are cheap. Working links — a repo with a real README, a live demo, a walkthrough video — are what let a hiring manager trust the claim without needing a call first.

A recruiter skims for seconds; a technical interviewer reads for minutes. Design for both: lead every section with a plain-language summary, then let depth be optional to expand into.

## Workflow

### 0. Frame the goal (quick — don't over-interview)

Get a one-line answer to: **who is this for, and what's the one action they should take?** ("AI/ML recruiters → email for an internship," "freelance clients → book a call," "grad admissions → read the research.") If this hasn't been stated, infer the most likely audience from what's already known about the person's background and state that assumption in one line rather than blocking on a question. Everything downstream — which projects lead, what tone, what the call-to-action is — depends on this.

### 1. Content inventory before any design or code

Gather these before touching layout:

- **3–5 flagship projects**, each with: the problem, this person's specific role/contribution, the stack, the hardest technical decision made and why, a measurable outcome, and working links.
- **Skills**, grouped by category (e.g. Languages / ML & Data / Backend & Infra / Tools) rather than a flat logo wall — grouping is itself information.
- **Experience & education** as a compact timeline, not prose paragraphs.
- **One human "About."** A specific detail beats a generic claim. "Passionate developer who loves solving problems" is the single most common tell of a templated portfolio — replace it with something only this person could say: a concrete interest, a specific way they work, what they're focused on right now.
- **Contact surface**: working email, GitHub, LinkedIn, and a downloadable CV. If any of these would be broken or a placeholder, fix that before launch — a dead link undermines everything above it.

### 2. Information architecture

Default to a single scrollable page (or a home page plus one detail page per project) — nearly every current source on individual portfolios converges here, because it removes friction between "arrives" and "understands." Recommended section order:

1. **Hero** — name, one-line identity ("Backend developer building ML systems," not a job title alone), current focus or open-to-work status, one primary call-to-action.
2. **Selected work** — the centerpiece. 3–5 deep case studies, not a 12-tile grid. See §3.
3. **Skills / stack** — grouped, scannable, no unexplained acronym soup.
4. **Experience & education** — compact timeline; GPA, honors, and competition results belong here, briefly.
5. **Writing / research** *(include if it exists)* — technical articles, competition write-ups, or papers. For research- or ML-leaning roles this section punches above its size: fewer than a third of applicants have anything like it, so an existing habit of writing technical explanations (derivations, architecture breakdowns, post-mortems) is a real differentiator, not decoration.
6. **Contact** — one clear way to reach out, repeated in the footer.

Cut anything that doesn't serve one of these — a stray "Hobbies" section or an empty testimonials block reads as filler.

### 3. Writing project case studies — the highest-leverage step

This is where portfolios are won or lost; spend more time here than on visual polish. Read `references/project-case-study-template.md` for the full template and two worked examples before writing any project copy. Compressed version:

- **Problem** — one or two sentences, plain language, no jargon a non-specialist can't follow.
- **Approach & the hardest decision** — not just what was used, but what was chosen over what, and why. "Used FastAPI" is a fact; "chose async FastAPI over Flask because the pipeline needed to handle concurrent requests without blocking" is a decision — and decisions are what demonstrate judgment.
- **Result, quantified** — a number beats an adjective. "Reduced inference latency from 800ms to 140ms," not "made it faster."
- **Proof** — a repo link with a real README, a live demo, or a short video walkthrough if the project isn't easy to click into live.

Avoid generic, purposeless projects (a fifth MNIST classifier with no twist) — a project scoped to a specific, named use case reads as far stronger than a broad, generic one, even at smaller scale.

### 4. Tech stack

Read `references/tech-and-deploy-guide.md` before deciding — it has the current framework and hosting comparison. Quick defaults:

- **Astro** — best default for most portfolios. Ships close to zero JS, fastest load times, strongest SEO out of the box, and still allows dropping a React/Vue/Svelte component in as an "island" for the one interactive widget that's actually needed.
- **Next.js** — choose instead if the site itself should double as a live demo of React/full-stack ability, or the portfolio needs genuine server-side logic (an authenticated area, a real backend feature).
- **Plain HTML/CSS/JS** — maximum control, zero dependency risk, and a deliberate demonstration of fundamentals; entirely reasonable for a portfolio, which is content-first by nature.

Don't reach for a heavier stack than the content needs — three case studies and a contact form don't need a database or an auth system.

### 5. Visual design

**View `/mnt/skills/public/frontend-design/SKILL.md` and follow it for the actual visual identity** (palette, type pairing, layout, the one signature element) — don't improvise this from scratch here. Portfolio-specific notes on top of that skill:

- Ground the design in this person's actual technical domain rather than a generic "startup SaaS" look — a computer-vision or signal-processing background, for instance, has its own visual vocabulary (waveforms, grids, real data shapes) that a generic gradient-and-rounded-card template doesn't reach for.
- Dark mode is common and expected for developer portfolios but is a choice, not a default — decide it deliberately per that skill's guidance, don't apply it reflexively.
- Watch for the three generic-AI-design tells that skill calls out (cream background with terracotta accent; near-black with one acid accent; hairline-rule broadsheet) — a portfolio is exactly the kind of brief where it's tempting to default to one of these.

### 6. Non-negotiable quality bar

Don't call a portfolio done until all of these hold:

- [ ] Fully responsive on mobile — most first visits to a personal site are mobile, not desktop.
- [ ] Loads in well under 3 seconds; run a Lighthouse pass and aim for 90+ on performance.
- [ ] Accessible: real alt text, sufficient color contrast, visible keyboard focus, semantic HTML landmarks.
- [ ] SEO basics: a descriptive title/meta description per page, Open Graph tags so shared links preview correctly, a sitemap.
- [ ] Custom domain connected — a name on a `.dev`/`.me`/`.com` reads as meaningfully more professional than a subdomain.
- [ ] Every call-to-action actually works: the email link opens mail, the CV actually downloads, every "live demo" is actually live right now.
- [ ] No placeholder text, no lorem ipsum, no broken image paths.
- [ ] Respects reduced-motion preferences if there's any animation.

### 7. Deployment

Read `references/tech-and-deploy-guide.md` for the current platform comparison and steps. Quick defaults: GitHub Pages or Cloudflare Pages for a static Astro/HTML site (both genuinely free with no bandwidth surprises); Vercel if the site is Next.js.

### 8. Keep it alive

A portfolio is a living document, not a one-time deliverable. Revisit it whenever a new project ships or an old one goes stale — remove a project before it becomes the oldest, least-impressive thing on the page, not after.

## Common pitfalls

- Generic "passionate developer who loves solving problems" bios that could belong to anyone.
- Ten shallow projects instead of three to five deep ones.
- Beginner-tutorial projects (todo/weather/calculator) with no specific angle or user in mind.
- Desktop-only thinking on a mobile-majority medium.
- Heavy hero animations or particle effects that slow the whole site down and read as templated rather than impressive.
- A "live demo" link that's actually down — worse than no link at all, since it's now a broken promise instead of an absent feature.
- No single clear call-to-action — three competing buttons is the same as zero.

## When the target role is AI/ML, research, or backend/infra-heavy

Lean into end-to-end thinking rather than model accuracy alone: problem → data → system/model design → deployment → measured outcome. Specifically:

- Show the **system**, not just the model: an architecture diagram (data flow, services, where the model sits) usually communicates more in five seconds than a paragraph does.
- Name the **trade-off**, not just the tool: why this architecture over an alternative, what was sacrificed for what (e.g. latency vs. accuracy, a lighter model for real-time inference vs. a heavier one offline).
- Show a **deployment mindset**: containerization, an API layer, monitoring, or a CI/CD pipeline signal production thinking, not just notebook thinking.
- Prefer projects with **real, specific scope** (a named use case, a real constraint) over broad, generic ones — a small, rigorously-built system beats a sprawling toy one.
- If technical writing already exists (derivations, theory notes, post-mortems, competition write-ups) — surface it. It's rarer than code samples and reads as genuine depth rather than tutorial-following.

## Reference files

- `references/project-case-study-template.md` — the full case-study writing template, a before/after rewrite of a generic project blurb, and two worked examples (a computer-vision/signal-processing system, a RAG/LLM system). Read before writing any project copy.
- `references/tech-and-deploy-guide.md` — the detailed Astro vs. Next.js vs. static-HTML decision guide and a current free-hosting comparison (Vercel / Cloudflare Pages / GitHub Pages / Netlify). Read before committing to a stack or deploying.