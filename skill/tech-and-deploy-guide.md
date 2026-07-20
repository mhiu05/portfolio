# Tech Stack & Deployment Guide

Current as of mid-2026. This file exists so `SKILL.md` doesn't have to carry framework-specific detail — read it before committing to a stack, and double-check specific limits directly with each platform before finalizing, since free-tier terms shift over time.

## Framework decision

| | **Astro** | **Next.js** | **Plain HTML/CSS/JS** |
|---|---|---|---|
| Best for | Content-first sites: portfolios, blogs, docs | Sites that are genuinely an application (auth, real-time data, dashboards) | Maximum control, zero build tooling, learning fundamentals |
| JS shipped | Near-zero by default; "islands" hydrate only the interactive pieces you opt into | Full React runtime | Whatever you write, nothing more |
| Performance / SEO ceiling | Very high out of the box — this is its whole design point | High, but needs more deliberate tuning | Very high if you keep it lean |
| Learning curve | Low if you know basic HTML/CSS; framework-agnostic (can embed a React/Vue/Svelte component only where needed) | Steeper — App Router, server components, rendering-strategy choices | Lowest — no framework mental model at all |
| Choose it when | This is a portfolio, blog, or marketing-style site (the default case) | The portfolio itself needs to demonstrate live React/full-stack work, e.g. an authenticated live playground | You want a dependency-free, fully custom build, or the site is small enough that a framework is overhead |

**Default recommendation for a portfolio: Astro.** It's what nearly every current comparison converges on for this exact use case — static-first, fast, SEO-friendly, and it still lets you drop a single interactive component (a filter, a small demo, a contact form) into an otherwise static page without paying for a full framework runtime everywhere else.

**Reach for Next.js instead if:** the site needs real server-side logic (a contact form with server-side validation and email sending, an authenticated area, live data), or demonstrating Next.js/React specifically is itself part of the goal — e.g. applying to full-stack roles where the portfolio doubles as a work sample.

**Plain HTML/CSS/JS is a legitimate third option**, not a lesser one. For a 3–5 project portfolio with a contact form, a framework is often solving a problem that doesn't exist yet. It's also the fastest possible load time, by construction.

## Hosting & deployment

All of the options below deploy from a GitHub repo in a few minutes and are genuinely free for a personal portfolio's traffic level.

| Platform | Free tier | Best for | Notes |
|---|---|---|---|
| **GitHub Pages** | Free, unlimited for public repos | Simple static sites (Astro build output, plain HTML) | Simplest possible setup — one repo setting. No server-side functions, but a portfolio rarely needs any. |
| **Cloudflare Pages** | Unlimited bandwidth, 500 builds/month | Static or Astro sites, especially with headroom for traffic spikes (e.g. a link goes around) | Best raw value — 300+ edge locations, no bandwidth anxiety. Slightly more setup than GitHub Pages. |
| **Vercel** | ~100GB bandwidth/month, generous build minutes | Next.js sites | Built by the Next.js team — the integration is the deepest and smoothest if you're on Next.js. Free tier is hobby/personal use only. |
| **Netlify** | 100GB bandwidth/month | JAMstack sites wanting built-in forms/identity without extra services | Still solid, but has lost ground to Cloudflare Pages on raw free-tier limits; mainly worth it for the built-in form handling. |

**Default recommendation:** GitHub Pages or Cloudflare Pages for an Astro/static build; Vercel if the site is Next.js.

## Custom domain

Connect a custom domain regardless of host — all four platforms above support it on the free tier. A `yourname.dev` / `yourname.com` / `yourname.me` domain (from any registrar — Namecheap, Cloudflare Registrar, Porkbun) is a small signal that reads as meaningfully more professional than a `username.github.io` subdomain, and typically costs very little per year.

## Deployment checklist

- [ ] Repo pushed to GitHub with a clean commit history (a portfolio repo is itself something a technical reviewer might glance at).
- [ ] Production build tested locally before pushing (`npm run build` + serve the output) — don't let the host's build be the first time it's actually built.
- [ ] Custom domain connected and HTTPS active (all major hosts auto-provision this).
- [ ] `robots.txt` and a sitemap present so search engines can index it.
- [ ] Open Graph / Twitter Card meta tags set, so a shared link previews with a title, description, and image instead of a bare URL.
