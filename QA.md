# Phase 4 implementation QA

Checked locally against the optimized production build at `/co-founder/portfolio`.

## Build and source checks

| Check | Result |
| --- | --- |
| `npm run lint` | Pass; no warnings |
| `npm run typecheck` | Pass; strict TypeScript, including generated route types |
| `npm test` | Pass; unique project slugs, internal project references, dates, qualifiers, image metadata, evidence URLs, and CV file integrity |
| `npm run build` | Pass; homepage and all five project routes prerendered |
| `npm audit --omit=dev` | Zero production dependency vulnerabilities reported |
| `git diff --check` | Pass |

## Browser and accessibility

Chrome, Firefox, and WebKit production browser runs checked all 11 routes at 320, 375, 768, 1024, and 1440 CSS pixels. All passed route status, one H1 per page, metadata, overflow, target size, and broken-image checks. The production path appears on internal links and canonical/share URLs; local links, sitemap, `robots.txt`, social preview, and three legacy redirects passed.

Keyboard checks covered the skip link and focus, mobile dialog open/close, focus containment and return, route navigation, reduced motion, text reflow at 200% enlargement, 404 handling, and core content and navigation with JavaScript disabled. On Safari/WebKit for macOS, the keyboard test uses Option-Tab so links are included, matching the system browser's keyboard-navigation setting.

Chrome axe WCAG 2.0/2.1/2.2 A/AA and best-practice checks ran on all routes at 375px and 1440px. All passed without violations. The checks are automated and do not amount to formal accessibility certification.

## Local Lighthouse lab runs

| Run | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT | Transfer size |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Homepage, mobile preset | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms | 236 KiB |
| KBTG case study, desktop preset | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms | 247 KiB |

These local, single-run Lighthouse results are lab evidence. They do not represent real-user Core Web Vitals or a deployed `ludaxia.app` response.

## Final visual review

Inspected desktop and mobile captures for the homepage, work, case studies, About, Education, Experience, and Contact. Placeholder frames keep their intended aspect ratio and remain coherent on mobile. Image absence is expected and does not block the build; actual images must be reviewed for crop, permission, and alt text when supplied.

## Pending release checks

- Publish the approved CV and provide the public Git repository URL. GitHub is authenticated locally, but no repository remote was supplied and no push was made.
- Configure the existing `ludaxia.app` host or reverse proxy to serve this app at `/co-founder/portfolio`, including the Next.js assets. DNS alone cannot provide a path prefix. The host's root `robots.txt` must allow the chosen path.
- Re-run Lighthouse, social-card, canonical, and route checks against the deployed URL, then check real field performance when traffic is available.
- Supply or approve the images listed in `IMAGE_REQUESTS.md`. No authentic portrait or project images were present during implementation.
- The documented LinkedIn URL was preserved, but LinkedIn returned HTTP 999 to this automated link check. This appears to block the request; it does not establish that the profile URL is broken.
