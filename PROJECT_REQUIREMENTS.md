# Project Requirements

Last updated: 22 September 2026

## Product goal

Build a fast, accessible portfolio that demonstrates Passapol Phukhang's fit for digital innovation, business analysis, applied AI, and technology-for-impact roles. The product is a public professional portfolio, not a complete archive of every activity or certificate.

## MVP requirements

### Content

- Present the positioning and current Dublin location above the fold.
- Show three contextualised, verified impact metrics.
- Include reverse-chronological experience for UN Thailand, UN Viet Nam, KBTG, and AOT.
- Publish three case studies using the shared structure in `CONTENT_STRATEGY.md`.
- Include current education, selected credentials, the 300+ participant speaking item, and relevant media references.
- Provide working email, LinkedIn, and CV actions.
- Use approved public assets only and record alt text for every meaningful image.

### Required factual corrections

- Change UN Thailand from "February 2026-present" to **February-June 2026**.
- Change AOT from "June 2024-August 2025" to **June-August 2024**.
- Present the MSc in Digital Innovation at UCD as **August 2026-present**.
- Use **Dublin, Ireland** as the current location.
- Retain "estimated" for the 60% humanitarian data-processing result.
- Retain the 20-student sample size with the 50% TARA engagement result.
- Attribute collaborative work accurately, including "co-developed" or "co-architected" where appropriate.

### Interaction

- Navigation works with pointer, keyboard, and touch.
- In-page links move focus to the destination and do not hide headings behind the header.
- The mobile menu exposes correct open/closed state to assistive technology.
- External links, email, LinkedIn, CV, and project references have clear labels.
- Case-study pages provide previous/next or a return-to-work path.
- Contact uses direct links; no form or backend is required.

### Responsive behaviour

- Support widths from 320px upward.
- Use a single-column mobile layout without clipped copy or horizontal scrolling.
- Project imagery keeps essential content visible at all breakpoints.
- Navigation remains usable at 200% zoom.

## Quality requirements

### Accessibility

- Meet WCAG 2.2 AA.
- Semantic landmarks and logical heading order.
- Visible keyboard focus and a skip link.
- Minimum 44 by 44px interactive targets.
- Text alternatives for meaningful images.
- No essential information in images, colour, hover, or animation alone.
- Respect reduced-motion preferences.

### Performance

- Target Core Web Vitals: LCP at or below 2.5s, CLS at or below 0.1, and INP at or below 200ms at the 75th percentile.
- Serve correctly sized modern images and lazy-load below-the-fold media.
- Avoid autoplay video and unnecessary third-party scripts.
- Target Lighthouse scores of 90+ for performance, accessibility, best practices, and SEO on the production site.

### Search and sharing

- Unique title and description for the homepage and each case study.
- Canonical URLs, sitemap, robots file, favicons, and social-sharing image.
- Person structured data with only public, verified details.
- Descriptive URL slugs and link text.
- Resume PDF is indexable only if its contact details are intended to be public.

### Privacy and security

- Do not publish private phone numbers, private addresses, internal documents, confidential UN/KBTG material, or screenshots containing personal data.
- Use view-only links for public Drive, Canva, and Figma assets; never expose editor URLs.
- Open external links safely and keep dependencies current.
- No analytics or cookie banner in the MVP. Add privacy-respecting analytics only when a measurement decision has been made.

## Technical constraints

- Implement as a static, host-agnostic site unless a clear content-editing need emerges.
- Keep client-side JavaScript optional for reading core content.
- Reuse one case-study template rather than creating unique layouts per project.
- Avoid a content-management system, database, authentication, contact backend, and animation library in the MVP.
- Store content and design tokens in the repository so claims and styles can be reviewed in version control.

## Content and asset checklist

Before build completion, obtain or approve:

- Final headshot and hero image.
- Three case-study cover images.
- Redacted, publication-safe screenshots for UN and KBTG work.
- Current downloadable CV.
- View-only letters of recommendation.
- Permission to display organisation logos and named stakeholder validation.
- Final public email address.
- Social-sharing image and favicon.

## Acceptance criteria

The MVP is complete when:

- All routes and in-page links in `SITE_MAP.md` work without broken destinations.
- The factual corrections above appear consistently across the site and CV link.
- Each featured case study identifies the challenge, role, approach, outcome, and evidence.
- A keyboard-only user can reach and operate every control in a logical order.
- Automated checks show no critical accessibility errors, and manual focus/zoom/reduced-motion checks pass.
- Production Lighthouse targets are met on representative mobile and desktop runs.
- Metadata and social previews render correctly.
- There are no private, confidential, placeholder, or editor-only assets in the deployed output.

## Out of scope

- Blog, newsletter, search, accounts, comments, multilingual content, CMS, contact form, chatbot, and private analytics dashboard.
- Full certification archive; link to an approved external collection instead.
- Detailed disclosure of confidential organisational systems or data.

