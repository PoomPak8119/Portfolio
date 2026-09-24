# Passapol Phukhang — portfolio

A public portfolio for digital innovation, business analysis, and AI transformation. Content comes from the approved planning documents and the Phase 4 brief; missing imagery is represented by stable, intentional frames.

## Stack

Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, and locally served Roboto. Pages are prerendered at build time. There is no database, CMS, authentication, analytics, or contact backend. Client components are limited to navigation/CV controls and image failure handling when actual images are configured.

## Local development

Use Node.js 22.13 or newer and npm (the only package manager used here).

```sh
npm ci
npm run dev
```

Open the URL printed by Next.js. Local development defaults to the root path. To test the production subpath, copy `.env.example` to `.env.local`, set `SITE_URL` to the full HTTPS portfolio URL, and restart.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | Next.js and TypeScript ESLint rules |
| `npm run typecheck` | Generate route types and run strict TypeScript checking |
| `npm test` | Content references, dates, qualifiers, and asset integrity |
| `npm run build` | Production build and static page generation |
| `npm run start` | Serve the production build |
| `npm run test:browser` | Browser, responsive, keyboard, and axe checks against a running production server |

## Project structure

- `app/`: home, work index, six generated project pages, experience, about, education, credentials, contact, 404, SEO routes.
- `components/`: repeated layout, project, experience, navigation, and image patterns.
- `content/`: typed factual content, skills, metrics, image records, contact links.
- `lib/`: metadata and subpath-aware public asset URLs.
- `public/images/`: approved local image assets, when available.
- `public/documents/`: the approved public CV and reviewed credential documents, when available.
- `scripts/`: small content and browser regression checks.
- `DESIGN_SYSTEM.md`: authoritative approved design; `DESIGN.md` points to it.
- `IMAGE_REQUESTS.md`: image specifications and privacy guidance.
- `CONTENT_NOTES.md`: unpublished factual gaps and publishing decisions.
- `QA.md`: recorded checks and remaining release limitations.

## Edit content

Edit `content/profile.ts`, `content/projects.ts`, `content/experience.ts`, `content/education.ts`, and `content/credentials.ts`. Keep metric qualifiers and collaborative attribution. Update project `sections` and `workflow` only when the detail is supported. Omit unsupported sections rather than filling a template. The four featured projects include the approved UN–Government strategic alignment study. Legacy `/case-studies/...` URLs redirect to the corresponding `/work/...` pages.

Project slugs are public URLs: keep them stable, or add an explicit redirect in `next.config.ts`. Run `npm test`, lint, type checking, and a production build after changes.

The public email and LinkedIn come from `PORTFOLIO_BRIEF.md`. Add GitHub to `profile.socialLinks` only after its public URL is supplied. The approved external CV is configured in `profile.cv`. A local replacement can be placed at `public/documents/passapol-phukhang-cv.pdf` and configured as `/documents/passapol-phukhang-cv.pdf`; never point the controls at a missing PDF. If `/resume.pdf` was publicly used, add a redirect after the PDF is available.

## Replace images

1. Use the specifications in `IMAGE_REQUESTS.md`; verify publication permission and remove sensitive details and location metadata where needed.
2. Put the file in `public/images/profile/` or `public/images/projects/`. Prefer an appropriately compressed WebP/JPEG; generally aim below 300 KB per photograph where quality permits.
3. Set its content record's `src` to `/images/.../filename.jpg`. Paths exclude `public` and exclude the deployment subpath.
4. Confirm `alt` against the actual image. Suggested alt text is provisional, not a claim about an unseen asset. Keep `aspectRatio` stable; the image uses `object-fit: contain` to preserve faces and interface details.
5. Review at 320px and desktop. Next.js optimises real images with responsive sizes; below-fold images load lazily. Only the homepage portrait uses preload.

Null images render on the server without image requests. Configured images have an error fallback. Filename and internal image notes never appear in the page. The text-only social preview and favicon use approved colours and do not fabricate project imagery.

## Add credentials and recommendations

The public educational certificate collection is configured in `content/credentials.ts`. Put approved certificate PDFs in `public/documents/certificates/` and recommendation letters in `public/documents/recommendations/`, then add their public paths to the matching data array. Do not add a record until its file exists.

Certificate preview images live in `public/images/credentials/`. Export the complete first PDF page as a PNG, keep it uncropped, and add its image metadata to the matching record in `content/credentials.ts`. Recommendation letters remain link-only unless publication of a visual preview is explicitly approved.

Before publishing a document, review it for private phone numbers, addresses, personal email addresses, employee IDs, internal references, signatures, confidential wording, and private organisational information. Do not alter an official document in the repository; obtain an approved public or redacted copy from the owner. Use descriptive filenames and link labels that identify the destination and file type.

## Deployment to Vercel

1. Push this repository and import it into Vercel using the Next.js preset.
2. Use `npm ci`, build command `npm run build`, and the default Next.js output settings. No `vercel.json` is required.
3. The committed `.env.production` configures the confirmed `https://ludaxia.app/co-founder/portfolio`. This is public configuration, not a secret. Override `SITE_URL` with the **full public HTTPS URL** if hosting changes and rebuild. Next.js `basePath`, asset URLs, canonicals, Open Graph images, robots, and sitemap derive from this one setting.
4. Assign the domain or configure the existing site's reverse proxy/rewrite so requests for the portfolio prefix (including `_next`, image optimisation, icon, social preview, and sitemap) reach this deployment with the prefix intact. A path under an existing domain cannot be assigned using DNS alone.
5. For subpath hosting, the owner of the root domain must allow the portfolio in the root `/robots.txt` and reference the subpath sitemap. Crawlers only consult robots at the domain root.
6. Confirm real-domain metadata, contact links, approved CV, image rights, and production performance before making the launch public.

Local development without `SITE_URL` omits absolute metadata, disallows indexing, and returns an empty sitemap. Production loads `.env.production`. Set `SITE_URL` to an explicitly empty value for a non-indexable root-path preview, or use the host's access protection.

Deployment uses static pages with the standard Next.js image service and redirects. It is not configured as `output: export`, which would remove those native features. A Node-compatible host is also supported with `npm run build` and `npm run start`.

## Browser and accessibility checks

Start the production server first. The Chrome check uses installed Google Chrome; other engines can be installed when needed:

```sh
QA_URL=http://127.0.0.1:3000/co-founder/portfolio npm run test:browser
npx playwright install firefox webkit
QA_URL=http://127.0.0.1:3000/co-founder/portfolio QA_BROWSER=firefox npm run test:browser
QA_URL=http://127.0.0.1:3000/co-founder/portfolio QA_BROWSER=webkit npm run test:browser
```

Set `QA_URL` to the local URL including the base path when testing subpath deployment. Screenshots and reports go to ignored `output/playwright/`. The suite covers all 13 pages at 320, 375, 768, 1024, and 1440 pixels; Chrome also runs axe at 375 and 1440. Keyboard tests check skip navigation, visible focus, modal containment, Escape, focus return, and navigation. Additional checks cover reduced motion, 200% text enlargement, no JavaScript, 404s, legacy redirects, and social preview output.

Accessibility is based on semantic HTML, one H1, logical headings, 44px minimum targets, a skip link, visible focus, high-contrast tokens, native dialog interaction, no hover-only content, and reduced-motion support. Automated checks supplement visual and keyboard review; they are not a claim of formal WCAG certification.

## GitHub handoff

The user will provide the repository URL later. No remote is invented and nothing is pushed until that destination is known. After receiving an empty repository URL:

```sh
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

If it already contains commits, fetch and inspect its history before integrating; do not force-push over existing work.

## Implementation references

The setup follows the official [Next.js App Router installation guide](https://nextjs.org/docs/app/getting-started/installation) and [Tailwind Next.js integration guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
