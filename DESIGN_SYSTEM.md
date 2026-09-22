# Passapol Portfolio — Design System

**Last updated:** 22 September 2026
**Status:** Approved for implementation
**Applies to:** All pages, components, responsive states, and future portfolio additions

---

# 1. Design Direction

Evolve the visual identity of the existing portfolio rather than replacing it.

The portfolio should combine:

* institutional navy;
* warm cream accents;
* generous white space;
* authentic photography;
* bold but readable typography;
* simple rounded calls to action;
* evidence-led storytelling;
* restrained interaction and motion.

The final result should feel credible enough for organisations such as the United Nations, government, consulting, technology, and public-sector employers while still feeling personal, optimistic, international, and contemporary.

The website should communicate:

> **Digital innovation at the intersection of business, people, and technology.**

The design must not feel like:

* a generic developer portfolio;
* a startup landing-page template;
* a futuristic AI website;
* a heavily animated agency portfolio;
* a corporate intranet;
* a Canva template reproduced directly in code.

The design should feel deliberate, calm, human, evidence-based, and professionally distinctive.

---

# 2. Design Principles

## 2.1 Evidence first

Outcomes, projects, work samples, responsibilities, and measurable results should carry more visual weight than decorative elements.

Metrics should be easy to find and understand.

Do not create visual decoration that competes with project evidence.

---

## 2.2 Human-centred

Use real people, real environments, genuine project artefacts, and readable explanations.

Prefer authentic workplace, speaking, collaboration, education, event, and product imagery over abstract graphics.

---

## 2.3 Calm confidence

Use limited colour, strong hierarchy, generous spacing, and restrained motion.

Avoid excessive gradients, glassmorphism, glowing effects, animated backgrounds, floating particles, or decorative technology imagery.

---

## 2.4 Accessible by default

Every component must function with:

* keyboard navigation;
* touch;
* screen readers;
* browser zoom;
* reduced-motion preferences;
* high text magnification;
* responsive layouts.

Accessibility is an implementation requirement, not a later enhancement.

---

## 2.5 Progressive enhancement

Core information must remain available if:

* JavaScript loads slowly;
* animations are disabled;
* images fail;
* reduced-motion mode is enabled.

Motion and enhancement must never be required to understand the content.

---

# 3. Colour System

## 3.1 Core tokens

```css
:root {
  --navy-900: #023272;
  --blue-700: #004AAD;
  --blue-400: #5084DD;

  --cream-200: #F1E7B2;

  --surface-100: #F2F1EB;
  --surface-50: #FAFAF8;

  --slate-700: #304254;
  --slate-500: #64748B;

  --white: #FFFFFF;
  --black: #000000;

  --border-light: #D9DDE3;
}
```

`--surface-50` and `--border-light` are implementation-support tokens and may be adjusted slightly if required for accessible separation.

Do not introduce additional brand colours without updating this document.

---

# 4. Approved Colour Usage

Primary combinations:

* White on navy.
* Cream on navy.
* White on blue-700.
* Black on white.
* Black on surface-100.
* Slate-700 on white.
* Blue-700 on white.

Known contrast ratios:

* White on navy: approximately 12.34:1.
* Cream on navy: approximately 9.88:1.
* White on blue-700: approximately 8.13:1.
* Black on surface-100: approximately 18.56:1.

Do not use white text on `--blue-400` for normal-sized body text.

Its contrast is approximately 3.69:1.

`--blue-400` should primarily be used for:

* decorative fills;
* illustrations;
* graph accents;
* borders;
* large non-text visual elements.

Do not communicate meaning using colour alone.

---

# 5. Page Surface Rules

Use three principal section treatments.

### Light

```css
background: var(--white);
color: var(--black);
```

### Soft

```css
background: var(--surface-100);
color: var(--black);
```

### Navy

```css
background: var(--navy-900);
color: var(--white);
```

Alternate sections intentionally.

Do not repeatedly alternate colours merely to create visual variety.

Navy backgrounds should primarily identify:

* hero areas;
* important project introductions;
* major calls to action;
* selected high-impact sections.

Most long-form reading areas should use white or soft surfaces.

---

# 6. Typography

## 6.1 Typeface

Primary:

```css
font-family: Roboto, Arial, sans-serif;
```

Use Roboto throughout the interface unless a future design review explicitly approves another family.

Do not introduce separate display fonts.

---

## 6.2 Font weights

Use only:

* 400 — regular;
* 500 — medium;
* 700 — bold.

Avoid unnecessary weight variation.

---

## 6.3 Responsive type scale

```css
--text-display: clamp(3rem, 8vw, 7.5rem);
--text-h1: clamp(2.5rem, 6vw, 5rem);
--text-h2: clamp(2rem, 4vw, 3.5rem);
--text-h3: clamp(1.25rem, 2vw, 1.75rem);
--text-large: clamp(1.125rem, 1.5vw, 1.375rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

---

## 6.4 Line heights

Recommended:

```css
display: 0.95–1.05;
h1: 1.0–1.1;
h2: 1.05–1.15;
h3: 1.15–1.3;
body-large: 1.5–1.6;
body: 1.55–1.7;
small: 1.4–1.5;
```

Do not set paragraph line-height below 1.5.

---

## 6.5 Text width

Long-form body copy:

```css
max-width: 70ch;
```

Introductory copy may be narrower where this improves hierarchy.

Do not allow long paragraphs to stretch across the entire 1200px container.

---

## 6.6 Capitalisation

Use sentence case for:

* navigation;
* buttons;
* headings;
* labels;
* body copy.

Uppercase is reserved for short metadata or eyebrow labels.

Examples:

```text
Selected work
Digital transformation
United Nations
2025–2026
```

Avoid full uppercase headings.

---

# 7. Layout System

## 7.1 Maximum width

```css
--container-max: 1200px;
```

Main content should normally be centred.

---

## 7.2 Horizontal padding

Mobile:

```css
24px
```

Tablet:

```css
32px
```

Desktop:

```css
48px
```

Extra-wide screens should retain the 1200px maximum content width rather than stretching content indefinitely.

---

# 8. Responsive Breakpoints

Use these conceptual breakpoints:

```text
Mobile:       0–639px
Small tablet: 640–767px
Tablet:       768–1023px
Desktop:      1024–1279px
Wide:         1280px+
```

If Tailwind is used, its standard breakpoints may be used where they approximately match these ranges.

Do not create excessive custom breakpoints.

Design responsively around content rather than individual devices.

---

# 9. Grid

Desktop:

```text
12 columns
```

Tablet:

```text
6 columns
```

Mobile:

```text
1 column
```

Components do not need to expose the grid visually.

Use the grid for alignment, not for artificially complex layouts.

---

# 10. Spacing System

Base unit:

```text
4px
```

Approved spacing values:

```text
4
8
12
16
24
32
48
64
96
128
```

Use spacing consistently.

Avoid arbitrary values such as:

```text
37px
53px
71px
```

unless technically necessary.

---

# 11. Section Spacing

Minimum vertical section padding:

### Mobile

```text
64px
```

### Tablet

```text
80px
```

### Desktop

```text
96px
```

Major hero or narrative sections may use:

```text
128px
```

on large screens where appropriate.

Avoid oversized empty sections merely for visual drama.

---

# 12. Border Radius

Use a limited radius system.

```css
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 9999px;
```

Usage:

* buttons → pill;
* image containers → medium or large;
* standard cards → medium;
* large feature cards → large.

Do not mix many radius styles on one page.

---

# 13. Borders

Use subtle borders for separation.

Default:

```css
1px solid var(--border-light);
```

Borders should not dominate the interface.

On dark backgrounds, use low-opacity white borders where needed.

---

# 14. Shadows

Shadows should be subtle and uncommon.

Default card shadow:

```css
box-shadow:
  0 8px 24px rgba(0, 0, 0, 0.06);
```

Do not use:

* strong drop shadows;
* coloured glows;
* neon shadows;
* layered floating-card effects.

Prefer borders and spacing before shadows.

---

# 15. Header

The header contains:

**Left**

Passapol Phukhang or an approved abbreviated name mark.

**Right**

```text
Work
Experience
About
Education
Contact
CV
```

The exact navigation labels may change as information architecture evolves, but the header should contain no more than six primary actions.

---

## 15.1 Desktop header

Use a horizontal layout.

The CV action may use a pill-style button.

Navigation links should remain visually quieter than the main CTA.

---

## 15.2 Mobile header

Replace the navigation links with a labelled menu button.

The button must expose:

* accessible name;
* open state;
* close state;
* visible keyboard focus.

When open:

* prevent accidental background interaction;
* keep links large enough for touch;
* return keyboard focus appropriately after closing.

Avoid overly elaborate menu animation.

---

## 15.3 Sticky behaviour

The header may become sticky if it does not excessively reduce usable viewport space.

Recommended maximum desktop height:

```text
80px
```

Recommended mobile height:

```text
64–72px
```

---

# 16. Footer

The footer should be simple and functional.

Recommended content:

* Passapol Phukhang;
* short positioning statement;
* email;
* LinkedIn;
* GitHub;
* CV;
* copyright year.

Optional:

```text
Built with Next.js and deployed on Vercel.
```

Do not turn the footer into a second navigation-heavy section.

---

# 17. Buttons

Minimum target size:

```text
44 × 44px
```

Buttons should use clear action labels.

Prefer:

```text
View case study
Download CV
View project
Contact me
Visit project
```

Avoid:

```text
Click here
Learn more
Go
Explore
```

when a more descriptive label is available.

---

## 17.1 Primary button

```css
background: var(--blue-700);
color: var(--white);
border-radius: var(--radius-pill);
```

---

## 17.2 Secondary light button

```css
background: transparent;
border: 1px solid var(--blue-700);
color: var(--blue-700);
```

---

## 17.3 Secondary dark button

On navy:

```css
background: transparent;
border: 1px solid var(--cream-200);
color: var(--cream-200);
```

White may be used instead where appropriate.

---

# 18. Interactive States

Every interactive component must implement:

```text
default
hover
focus-visible
active
disabled
```

Hover must not be the only signal of interactivity.

Keyboard focus should be clearly visible.

Recommended focus style:

```css
outline: 3px solid currentColor;
outline-offset: 3px;
```

or an equivalent accessible treatment.

Do not remove browser focus indicators unless replaced with a clearly visible alternative.

---

# 19. Links

Text links should remain recognisable as links.

For links embedded in paragraphs:

* underline by default or on clear interaction;
* provide a visible focus state;
* avoid relying exclusively on colour.

External links should be clear from wording or context.

Do not automatically open every external link in a new tab.

---

# 20. Hero

The homepage hero should establish four things quickly:

1. identity;
2. professional positioning;
3. value proposition;
4. next action.

Recommended hierarchy:

```text
Short label / location or discipline

Passapol Phukhang

Primary positioning statement

One concise supporting paragraph

Primary CTA
Secondary CTA
```

A portrait or authentic image may accompany the content.

Avoid placing more than two primary actions above the fold.

---

# 21. Impact Metrics / Proof Cards

Metric cards should contain:

1. large metric;
2. concise descriptor;
3. relevant qualifier;
4. source context where appropriate;
5. link to evidence or case study where available.

Example:

```text
60%

Estimated reduction in humanitarian
data-processing time

AI automation initiative
United Nations Viet Nam
```

Always preserve qualifiers.

Do not turn:

```text
estimated 60%
```

into:

```text
60%
```

without qualification if the evidence is estimated.

Likewise, maintain pilot sample sizes where they materially affect interpretation.

---

# 22. Case-Study Cards

Each project card should include:

* project title;
* organisation or context;
* concise problem statement;
* Passapol's role;
* one major outcome;
* one authentic image;
* one clearly labelled action.

Example content structure:

```text
United Nations Viet Nam

Humanitarian Data Automation

Reducing repetitive humanitarian
information-processing work through
an AI-assisted workflow.

Role
Digital Transformation Officer

Impact
~60% estimated processing-time reduction

View case study →
```

Cards may be clickable in selected implementations, but avoid nested ambiguous click targets.

Prefer one explicit action.

---

# 23. Case-Study Page Structure

All major case studies should follow a consistent narrative.

Recommended order:

```text
Project title
Organisation / year / role

Short project summary

Hero image or artefact

Challenge

Context

My role

Discovery / research

Approach

Solution

Technology / methods

Collaboration / stakeholders

Outcome

Evidence

Reflection / learning

Related project
```

Not every project requires every section.

Do not fabricate content to fill a template.

---

# 24. Case-Study Reading Width

Narrative paragraphs:

```text
60–70ch
```

Images, diagrams, and project artefacts may expand beyond the prose column within the main 1200px container.

This should create editorial variation without reducing readability.

---

# 25. Timeline

Timeline order:

```text
Reverse chronological
```

Each entry should display:

* organisation;
* role;
* location;
* dates;
* concise description;
* selected achievement where useful.

Organisation names must remain text.

Logos are supporting visual marks, not replacements for names.

Avoid overly decorative vertical-line timelines on small screens.

Mobile timelines should become a simple stacked list.

---

# 26. Tags and Metadata

Skill, technology, sector, or project tags may be used sparingly.

Example:

```text
AI
RAG
Business analysis
Digital transformation
Public sector
```

Tags are informational, not decorative.

Avoid displaying dozens of technology badges.

---

# 27. Imagery

Priority order:

1. authentic workplace photography;
2. speaking or event photography;
3. collaboration photography;
4. product/interface imagery;
5. diagrams or project artefacts;
6. organisation logos;
7. decorative imagery.

Avoid generic stock imagery.

---

# 28. Image Ratios

Preferred project imagery:

```text
4:3
16:9
```

Portrait imagery may use:

```text
3:4
```

Use consistent crops within repeated component sets.

---

# 29. Image Treatment

Images may use:

```text
border-radius: var(--radius-md);
```

or:

```text
border-radius: var(--radius-lg);
```

depending on size.

Avoid excessive overlays.

Do not apply heavy filters that distort authentic photography.

Images on navy surfaces should maintain clear separation from the background.

---

# 30. Image Accessibility

Every meaningful image requires descriptive alternative text.

Alternative text should describe its purpose rather than merely list visible objects.

Decorative images and logos may use:

```html
alt=""
```

when they provide no additional information.

Do not include private, confidential, sensitive, or unreadable internal-system screenshots.

---

# 31. Icons

Use one consistent icon library if icons are necessary.

Preferred implementation options:

* Lucide;
* Heroicons.

Do not mix multiple icon families.

Icons should support labels rather than replace them for important actions.

Avoid decorative icons where text already communicates the idea clearly.

---

# 32. Motion

Motion must remain subtle.

Typical duration:

```text
120–200ms
```

Preferred easing:

```css
cubic-bezier(0.2, 0.8, 0.2, 1)
```

Appropriate animation:

* button state changes;
* menu opening;
* card hover changes;
* subtle section entrance;
* image reveal;
* accordion expansion.

Avoid:

* parallax-heavy scrolling;
* cursor-following effects;
* text scrambling;
* continuously moving backgrounds;
* letter-by-letter headings;
* large animated gradients;
* scroll-jacking;
* 3D tilt effects.

---

# 33. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* remove non-essential transforms;
* disable entrance animation;
* avoid smooth-scrolling effects;
* display content immediately.

Content must never depend on animation to become available.

---

# 34. Forms

If a contact form is implemented, every field must include a persistent visible label.

Do not use placeholders as the only label.

Required states:

```text
default
focus
error
success
disabled
submitting
```

Errors must be:

* written in text;
* associated with the corresponding field;
* understandable without colour.

If direct email contact is sufficient, avoid adding a contact form unnecessarily.

---

# 35. Empty, Loading, and Error States

Where dynamic behaviour exists, provide clear feedback.

Examples:

```text
Loading project…
Unable to load this content.
No projects match this filter.
Message sent successfully.
```

Do not use skeleton loaders for static content that can be server-rendered immediately.

---

# 36. Accessibility Baseline

Target:

```text
WCAG 2.2 AA
```

Requirements include:

* semantic HTML;
* correct landmark elements;
* one H1 per page;
* logical heading hierarchy;
* visible focus indicators;
* keyboard accessibility;
* descriptive links;
* accessible names;
* sufficient colour contrast;
* meaningful alternative text;
* reduced-motion support;
* minimum target sizes;
* no colour-only communication.

---

# 37. Skip Navigation

Every page should provide a keyboard-accessible skip link.

Example:

```text
Skip to main content
```

It may remain visually hidden until focused.

---

# 38. Zoom and Reflow

The website must support:

```text
200% browser zoom
```

without loss of functionality.

Content should reflow without horizontal page scrolling at:

```text
320 CSS pixels
```

except where horizontal content is intrinsically required.

---

# 39. Semantic Structure

Use HTML elements according to meaning.

Preferred:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Do not build the site primarily from anonymous `<div>` elements.

Buttons perform actions.

Links navigate.

Do not interchange them purely for styling convenience.

---

# 40. Flags and Country Labels

Flag emojis may be decorative.

They must not replace country names.

Correct:

```text
🇮🇪 Dublin, Ireland
```

Incorrect:

```text
🇮🇪 Dublin
```

when the country itself matters to the information.

---

# 41. Responsive Behaviour

Desktop layouts should not merely shrink proportionally.

Adapt layouts intentionally.

### Desktop

May use:

* multi-column grids;
* side-by-side imagery;
* editorial asymmetry;
* large headings.

### Tablet

Reduce column count and typography where necessary.

### Mobile

Prioritise:

1. project title;
2. explanation;
3. outcome;
4. image;
5. metadata.

Avoid side-scrolling card carousels for essential content.

---

# 42. Mobile-First Requirements

All components must be designed for narrow screens before enhancement at larger breakpoints.

At mobile widths:

* no text should overlap;
* no cards should require horizontal scrolling;
* no image should crop critical faces or interface details;
* metrics must remain understandable;
* controls must remain at least 44px;
* navigation must remain fully keyboard accessible.

---

# 43. Content Density

Prefer concise sections.

Do not place large blocks of uninterrupted text on landing pages.

Use:

* short paragraphs;
* supporting metadata;
* project evidence;
* clear headings;
* authentic visuals.

Long-form explanations belong primarily on case-study pages.

---

# 44. Logo Usage

Organisation logos may appear where useful for credibility.

Rules:

* preserve original aspect ratios;
* do not recolour official logos unnecessarily;
* do not make logos the primary identifier;
* include organisation names as text;
* keep logo sizing visually balanced.

Avoid creating a large “logo wall” without context.

---

# 45. Technical Content

Code snippets should only appear where they genuinely help explain a project.

This portfolio is not primarily a developer portfolio.

Do not over-emphasise code at the expense of:

* problem definition;
* stakeholder needs;
* decision-making;
* implementation;
* organisational impact.

---

# 46. Data Visualisation

Use data visualisation only where it makes evidence easier to understand.

Charts must:

* include text labels;
* remain readable without colour alone;
* use the existing palette;
* avoid unnecessary 3D effects.

Do not manufacture charts simply to make pages appear more technical.

---

# 47. Visual Hierarchy

Each section should answer:

```text
What is this?

Why should I care?

What is the evidence?

What should I do next?
```

Do not give headings, metrics, body copy, buttons, and metadata equal visual emphasis.

---

# 48. Performance

Visual decisions must support good performance.

Targets:

```text
LCP < 2.5 seconds
CLS < 0.1
INP < 200ms
```

where reasonably achievable in production.

Use:

* optimised responsive images;
* appropriate Next.js image handling;
* lazy loading below the fold;
* local or optimised font delivery;
* minimal client-side JavaScript.

Do not sacrifice performance for decorative motion.

---

# 49. SEO and Social Sharing

Every page should define:

* unique page title;
* meta description;
* canonical URL where appropriate;
* Open Graph title;
* Open Graph description;
* Open Graph image.

Project pages should have meaningful individual metadata.

---

# 50. Design Consistency Rules

The implementation must reuse existing:

* spacing tokens;
* colours;
* border radii;
* typography;
* card patterns;
* buttons;
* layout primitives.

Before introducing a new visual pattern, first determine whether an existing component can solve the requirement.

---

# 51. Component Reuse

Reusable components should be preferred for recurring patterns.

Likely reusable components include:

```text
Container
Section
SectionHeading
Button
TextLink
MetricCard
ProjectCard
ProjectHero
ExperienceEntry
Tag
ImageFrame
Callout
Header
Footer
```

Do not abstract one-off layouts prematurely.

Create abstractions where patterns genuinely repeat.

---

# 52. Implementation Rule for Codex

When this document does not define a visual decision:

1. preserve the existing visual language;
2. choose the simpler solution;
3. favour readability and accessibility;
4. reuse an existing component;
5. avoid adding new colour, animation, typeface, or decorative style;
6. document significant new design decisions before implementing them broadly.

Codex must not independently redesign the portfolio identity.

---

# 53. Anti-Patterns

Do not introduce the following without explicit approval:

* glassmorphism;
* neon effects;
* cyberpunk styling;
* heavy gradients;
* animated particles;
* 3D scenes;
* custom cursors;
* autoplay video;
* scroll-jacking;
* excessive parallax;
* large technology-logo clouds;
* meaningless skill percentage bars;
* circular progress indicators for subjective skills;
* stock photography;
* decorative dashboards;
* fake testimonials;
* fake metrics;
* fake client logos;
* invented project results.

---

# 54. Evidence Integrity

Portfolio presentation must preserve factual qualifiers.

Examples:

Correct:

```text
Estimated 60% reduction in processing time
```

Incorrect:

```text
Reduced processing time by 60%
```

unless independently measured and verified.

Correct:

```text
50% increase in engagement across a 20-student pilot
```

Incorrect:

```text
Increased student engagement by 50%
```

if the pilot context is removed in a way that overstates the evidence.

Design must strengthen evidence, not exaggerate it.

---

# 55. Overall Visual Test

Before approving any page, ask:

### Credibility

Would this page feel appropriate if viewed by:

* a UN hiring manager;
* a consulting recruiter;
* a public-sector digital leader;
* a technology hiring manager?

### Humanity

Does it show the person behind the projects?

### Evidence

Can the visitor quickly identify what Passapol actually achieved?

### Readability

Can someone scan the page in under 30 seconds and understand its purpose?

### Consistency

Does it clearly belong to the same visual system as the rest of the portfolio?

### Restraint

Has anything been added mainly because it looks impressive rather than because it improves communication?

If the answer to the final question is yes, simplify it.

---

# 56. Design Priority Order

When requirements conflict, use this priority:

1. factual accuracy;
2. accessibility;
3. readability;
4. content hierarchy;
5. responsive behaviour;
6. performance;
7. consistency;
8. visual polish;
9. animation;
10. decoration.

Higher-priority requirements always override lower-priority ones.

---

# 57. Definition of Done

A component or page is not complete until it has been reviewed at:

```text
320px
375px
768px
1024px
1440px
```

and checked for:

* visual hierarchy;
* overflow;
* keyboard navigation;
* visible focus;
* colour contrast;
* reduced motion;
* image cropping;
* heading hierarchy;
* touch-target size;
* readable line length;
* real content rather than placeholder text.

The implementation should also be checked with automated accessibility and performance tooling where practical.
