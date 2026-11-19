# Minh Hieu — AI Engineer Portfolio

A complete static React portfolio with an editorial cream, dark green and lime identity. Features six homepage sections, a custom GSAP agent diagram, three project brief routes, responsive navigation and an entirely typed content layer. All three projects include repository screenshots and source-based descriptions. Unsupported personal claims are explicitly marked or absent.

## Stack and requirements

React 19, Vite 7, strict TypeScript 5.9, Tailwind CSS 4, GSAP + ScrollTrigger, React Router 7, Lucide, Vitest, Testing Library and Playwright. Node **22.12+** (Node 24 supported), npm, and a browser for E2E checks. Fonts are locally bundled through Fontsource; no runtime API or external font service is needed.

## Install and run

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`. On Windows PowerShell with script execution disabled, replace `npm` with `npm.cmd`.

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

`build` writes `dist/` and verifies that a configured local resume exists. `preview` serves the production output at `http://127.0.0.1:4173`.

## Structure

```text
src/content/        Personal facts, links, section copy and project briefs
src/types/          Typed editing contracts
src/components/     Shared UI, layout, project visuals, timeline and motion
src/sections/       Six homepage sections
src/pages/          Home, project study and not-found routes
src/hooks/          Navigation, metadata and motion preference hooks
src/styles/         Tokens and responsive styling
public/             Local assets, static-host redirects, resume folder
scripts/            Static metadata and hosting output
tests/              Component tests and browser journeys
artifacts/          QA screenshots and review record
```

Start with [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for editing in Vietnamese and [DESIGN.md](DESIGN.md) for visual decisions. No component changes are needed to add entries to existing content arrays. `.gitignore` excludes dependencies, builds, test output, local environment files and tool caches. Keep `package-lock.json`, `.env.example` files, source assets, QA screenshots and documentation in version control.

## Content and truthful placeholders

Profile: `src/content/profile.ts`. Socials: `social.ts`. Work: `experience.ts`. Programs: `certifications.ts`. Tools: `toolkit.ts`. Navigation: `navigation.ts`. General copy and SEO origin: `site.ts`. Each project is a single canonical object in `content/projects/`; `index.ts` controls order. All optional URLs and images accept `null`. No fabricated employment dates, credentials, GPA, benchmarks, source links or CV are included.

## Routing and static deployment

Default clean routes: `/`, `/projects/safevoice`, `/projects/vdaagent`, `/projects/non-invasive`. Unknown paths show a recovery page. Build output is fully static; it requires no Node server at runtime.

**Vercel:** framework Vite, build `npm run build`, output `dist`. `vercel.json` handles SPA routes.

**Cloudflare Pages:** build `npm run build`, output `dist`. `public/_redirects` provides the SPA fallback. No functions are needed.

**GitHub Pages:** use HashRouter to avoid server rewrite requirements, and set the repository base. In PowerShell:

```powershell
$env:VITE_ROUTER_MODE = 'hash'
$env:VITE_BASE_PATH = '/YOUR-REPOSITORY/'
npm.cmd run build
Remove-Item Env:VITE_ROUTER_MODE
Remove-Item Env:VITE_BASE_PATH
```

For Bash: `VITE_ROUTER_MODE=hash VITE_BASE_PATH=/YOUR-REPOSITORY/ npm run build`. Publish the contents of `dist` using your Pages workflow. The study URL is `/YOUR-REPOSITORY/#/projects/safevoice`. `404.html` is included, but hash mode is the supported GitHub Pages strategy. For a custom domain at its root use `/` as the base.

Set `site.url` in `src/content/site.ts` to the real origin (e.g. `https://your-domain.example`) before publishing. Leave it `null` locally. A build then generates `robots.txt`, `sitemap.xml`, a canonical URL and an absolute PNG Open Graph image URL. Hash mode intentionally advertises only the root in the sitemap and canonical metadata, since fragment routes are not independent search pages. Per-route titles/descriptions update in the browser; this SPA does not prerender project HTML for social crawlers.

No hosting deployment, push or domain registration is performed by this project setup.

## Tests and screenshots

```sh
npm test
npx playwright install chromium
npm run build
npm run test:e2e
```

E2E tests use installed Chrome on Windows and bundled Chromium elsewhere. Override via `PLAYWRIGHT_CHANNEL` when needed. Test servers start and stop automatically on ports **4173** and **4174**; these ports must be free. The second server tests hash routing at `/demo/`. Run `npm run build` again after changing source before running E2E against production.

Coverage includes homepage and ordered sections, five viewport widths (1440/1280/768/430/390), menu selection and Escape, anchor alignment, project routes and deep reload, back/forward, route focus, unknown paths, omitted optional fields, image failures/replacements, reduced motion and browser console errors. Screenshots are saved to `artifacts/screenshots/` at 1440/768/390 plus a desktop case study. Reports/traces are generated by Playwright. These checks do not establish Lighthouse scores or full WCAG conformance; those have not been claimed.

## Reference material

[Impeccable repository and README](https://github.com/pbakaus/impeccable) informed design hierarchy, typography, consistency and review. Its installed local workflow was used; no installation scripts were added to this project. [GSAP React integration](https://gsap.com/resources/React/), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) and [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) informed animation scope, cleanup and accessibility.
