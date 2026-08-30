# Yash Parashar — Portfolio Site

A multi-page portfolio positioning you as a Business Systems & Data Analyst moving into modern data engineering, with a blog for SQL/analytics writing.

## A note on the stack

You asked for MERN. This platform builds React apps on TanStack Start (React 19 + Vite) with Lovable Cloud for backend. It covers the same full-stack ground as MERN — server-side logic, database, auth — but with server-side rendering, which matters a lot for a portfolio: recruiters' link previews and Google both see real HTML instead of an empty div. Since you chose static-only, no backend gets enabled for now; it can be added later without a rewrite.

## Design direction

- Palette: Midnight Indigo — deep navy base (#0a0a1a), layered surfaces (#141432, #1e1e5a), electric indigo accent (#4f46e5). Dark-first.
- Typography: Space Grotesk headings, DM Sans body.
- Feel: analytical and precise — metric cards, subtle grid lines, restrained motion (fade/rise on scroll), no gradient-blob clichés.
- All colors as semantic tokens in `src/styles.css`; no hardcoded color classes.

## Pages

```text
/                 Home — hero, impact metrics, featured projects, skills snapshot, CTA
/projects         All projects (enterprise + independent AI tools)
/projects/:slug   Case study: context, challenge, approach, measurable outcomes
/experience       Role timeline, certifications, education
/about            Longer narrative + skill matrix by category
/blog             Post index
/blog/:slug       Post detail (MDX-style content in code)
/contact          Email, phone, LinkedIn, resume download
```

Shared header with active-state nav, mobile drawer, and a footer.

## Content sourced from your resume

- Hero metrics: 3+ years, 10,000+ daily users, 40% latency cut, 60% manual effort reduced, 20% uptime lift.
- Case studies: Credit Limit Management Framework, Warehouse Digital Transformation (ESG Award), Stock Take Automation, Fair Pay Analyzer (live AI tool, Claude API).
- Skills grouped: Business Analysis, Data & Analytics, Engineering & Automation, Enterprise Systems, Cloud & Modern Data.
- Certifications: MongoDB, PMI Agile, Advanced SQL, OCI Foundations Associate.
- Blog seeded with 2–3 starter posts drawn from your project experience (query/index tuning, decoupling business rules from code) that you can rewrite.

## Structure (the "well structured" part)

- Content lives in typed data modules (`src/content/projects.ts`, `experience.ts`, `skills.ts`, `posts.ts`) — pages render from data, so adding a project or post is a one-object edit, never a layout change.
- Reusable components: `SectionHeading`, `MetricCard`, `ProjectCard`, `TimelineItem`, `SkillGroup`, `Prose`, `PageShell`.
- shadcn/ui primitives for buttons, badges, cards, sheet (mobile nav).

## Optimisation (the "well optimised" part)

- Server-rendered HTML for every route — fast first paint, fully crawlable.
- Per-route `head()` with unique title, description, og:title, og:description, og:type, twitter:card.
- JSON-LD: `Person` schema on home, `BlogPosting` on post pages, `BreadcrumbList` on nested routes.
- Canonical URLs, `robots.txt`, and a generated `sitemap.xml` route.
- Images: generated hero/OG art, correct `width`/`height` to prevent layout shift, lazy loading below the fold, modern formats.
- Fonts via `<link>` preconnect + `display=swap`, only the weights used.
- Semantic HTML, single H1 per page, alt text everywhere, keyboard-navigable nav, visible focus rings, AA contrast.
- Motion respects `prefers-reduced-motion`.
- Route-level code splitting is automatic; no heavy chart or animation libraries pulled in for decoration.

## Things worth adding that you didn't mention

- Resume PDF download button in the header and on /contact, served as a hosted asset.
- Print-friendly stylesheet so /experience prints cleanly.
- 404 page styled to match rather than the default.
- Impact-first copywriting: every project leads with the measured outcome, not the tech list.
- Structured `Person` schema so Google can associate your name, role, and profiles.

## Build order

1. Design tokens, fonts, root layout with header/footer, and the home page.
2. Content data modules populated from the resume.
3. Projects index + case study route.
4. Experience, About, Contact.
5. Blog index + post route with starter posts.
6. SEO pass: per-route meta, JSON-LD, sitemap, robots, accessibility and Lighthouse check.

## Later, if you want it

Enabling Lovable Cloud would add a working contact form that stores messages, and an admin login to edit projects and write blog posts from the browser instead of in code.
