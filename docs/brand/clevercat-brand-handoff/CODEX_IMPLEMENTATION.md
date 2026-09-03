# Implement Clever Cat Company's mechanical-lion branding

## Deliverable and permission

Implement the approved visual direction in the real, existing Astro website. This is an implementation task, not a request for another brand board, standalone mockup, or replacement framework. Complete a tested local implementation, capture browser previews, and commit only the related changes locally. Do not push, merge, deploy, or change repository settings during this stage.

Work only in:
`M:\Business\CleverCatCorp\clevercatcompany.com`

Expected existing origin:
`EazyPhe/clevercatcompany.com`

Do not touch `djphelix.com`, Squarespace, DNS, email hosting, or the parent project's other repositories.

## Preflight

1. Read applicable `AGENTS.md` files, repository documentation, and, when available, the verified parent brief `M:\Business\CleverCatCorp\WebsiteBuildBrief.md`. This task replaces the old visual direction only, not safety or factual-content rules.
2. Verify the repository root with `git rev-parse --show-toplevel`; record current branch, HEAD, remotes, and `git status --short` before any edit. Treat the newly extracted handoff directory as expected new input. Do not discard, stash, overwrite, or include unrelated user changes.
3. Inspect local versus remote branch state. A fetch is permitted to inspect current origin state; do not reset, pull-merge, rebase, or overwrite changes automatically. Explain genuine blocking divergence instead of silently resolving it.
4. Create a dedicated local branch such as `branding/mechanical-lion` from the verified appropriate project state. Do not overwrite a branch that already exists.
5. Read `package.json`, the lockfile, `astro.config.mjs`, `src/data/site.ts`, current styles/layouts/pages, and `.github/workflows/ci.yml` and `deploy-pages.yml`. Keep the existing Astro/TypeScript/static architecture; do not upgrade dependencies or replace build tooling as a side effect.
6. Inspect the actual images in this handoff. Do not infer the approved artwork from filenames alone. If a required asset is absent, name the missing path and stop that part rather than substituting unrelated artwork.

## Reference hierarchy

- The owner's source artwork is authoritative for the lion itself:
  - `source-art/lion-mark-original.png`: flat white/silver-and-blue profile, supplied as King Mastermind 1.
  - `source-art/lion-hero-original.png`: clean machined silver profile, supplied as King Mastermind 5.
- `reference/brand-system.png`: latest overall brand system.
- `reference/homepage-direction.png`: desktop hero composition and mechanical/blue styling.
- This written brief overrides reference-image artifacts, fake data, inconsistent spellings, earlier font labels, extra navigation items, and demonstration dates.
- The current site remains the source for real content, navigation destinations, capabilities, and process copy.

Do not generate another moodboard instead of implementation. Extend the shown system to existing lower sections and interior routes without inventing new sections or business claims.

## Locked brand choices

Public name: **Clever Cat Company**. Do not use Clever Cat Corporation, Phenomenal Group, or unrelated names from older concepts.

Primary headline: **Clever solutions. Real results.**

Signature tagline: **Engineered to Lead**.

Primary visual idea: a mechanical lion representing creative intelligence, engineering, technical craft, and leadership. Use clean machined metal, not rusted/post-apocalyptic styling.

Palette:
- Obsidian `#050608`
- Graphite `#15191D`
- Gunmetal `#343A40`
- Machined steel `#9CA5AE`
- Precision white `#F3F6F8`
- Electric blue `#0077FF`
- Technical blue `#103C67`

Use the CSS file in `implementation/` as token input, not as a replacement for the current stylesheet. Darker functional button blue and brighter link/focus blue are allowed where needed for readable contrast. Keep the lion's original silver/blue coloring; do not place a blue wash over it.

Typography: Space Grotesk headings and Inter body/UI, with Barlow Condensed only for limited technical labels if worthwhile. Load the actual families through a properly licensed, minimal website font integration; do not merely declare absent fonts and claim a match. No font binaries are provided in this package. If adding font dependencies, document the reason and update the lockfile deliberately; do not perform unrelated upgrades.

Use readable live text for the company name and tagline beside the flat lion. This is an interim website lockup, not a claimed custom vector wordmark. Do not slice metallic text out of the raster boards or call a raster embedded inside SVG an editable vector logo.

## Asset integration

Copy only production assets that are used into a stable path such as `public/images/brand/` (or follow an equivalent established repository convention). Keep source art, brand boards, and this handoff under `docs/`, not in the published asset tree.

Responsive hero assets:
- `web-assets/lion-hero-480.webp`
- `web-assets/lion-hero-768.webp`
- `web-assets/lion-hero-1254.webp`

Header/footer mark assets:
- `web-assets/lion-mark-192.webp`
- `web-assets/lion-mark-384.webp`

Icon candidates:
- `web-assets/favicon-32.png`
- `web-assets/favicon-64.png`
- `web-assets/favicon.ico`
- `web-assets/apple-touch-icon.png`

Use `srcset`, sensible `sizes`, explicit image dimensions, and correct aspect ratios. Prioritize the above-the-fold hero; lazy-load only genuinely offscreen assets. These images retain a black background: integrate them into a black/dark artwork region with unobtrusive edge blending, without erasing dark metal or tinting the lion. Do not stretch, distort, or crop off the face/mane.

Review favicon candidates at 16/32/64 px. If too detailed, report the limitation; do not silently invent a different brand mark. Update actual favicon references in the shared layout so an unused old `favicon.svg` does not remain active.

## Implementation scope

Update the shared identity across all existing routes: home, capabilities, work, about, contact, and privacy. Preserve existing URL paths, canonical URLs, sitemap behavior, metadata meaning, links, and contact functionality.

Start with these existing components, after inspecting their current contents:
- `src/components/BrandMark.astro`
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/PageHero.astro`
- `src/components/Footer.astro`
- `src/components/ContactCta.astro`
- `src/components/ProcessRail.astro`
- `src/components/WorkGrid.astro`

Inspect existing global styles, layouts, pages, and data and edit them where required. Do not assume updating a single image changes the theme site-wide.

### Header and navigation

Replace the old abstract mark with the flat lion and live Clever Cat Company text. Preserve existing navigation destinations and working mobile navigation; do not add fictitious Services, Insights, or other routes. Keep a clear contact CTA and the existing active-page behavior. The header logo links to home and has an accessible name.

### Homepage hero

Preserve the headline and the existing supporting copy:
"We turn ideas into practical digital, design, engineering, and creative outcomes."

Primary action: "Start a conversation", to the existing contact route.
Secondary action: "Explore capabilities", to the existing capabilities route.

Use the clean silver lion prominently on the right at desktop sizes, with readable copy on the left. The discipline line shown in the reference may read "Digital • Design • Engineering • Creative". Add the signature "Engineered to Lead" as live text.

Use only restrained blue technical linework and metal-inspired details. Remove the prior purple identity. Do not reproduce decorative 82% gauges, random binary strings, fake system status, placeholder dashboard controls, or continuous spinning gears from the concept.

At mobile sizes, reflow the content without hiding the main CTA, obscuring copy, clipping the artwork, shrinking text excessively, or causing horizontal overflow.

### Capabilities, studio, work, and process

Keep all four established capability groups and their factual descriptions. Apply consistent technical line icons, hierarchy, spacing, and blue-accented interactions rather than unrelated illustrations. Preserve any existing functioning destinations.

Restyle the studio/about area in the same system. Preserve the existing four process stages: Listen, Shape, Make, Refine. A connected technical rail is appropriate; on narrow screens use a readable vertical arrangement.

Keep work entries clearly identified as unconfirmed placeholders. Do not fabricate clients, finished projects, portfolio screenshots, performance metrics, testimonials, awards, certifications, prices, staff, or corporate relationships. Do not add the owner's unrelated projects or DJ Phelix as public case studies without explicit approval. Existing abstract work imagery can remain while the surrounding UI is rebranded; do not claim it is completed client work.

### Footer, contact, and metadata

Use the lion, consistent company name, and tagline throughout. Keep privacy access and the existing contact safeguards. Do not copy fake details or sample social icons from the boards. Do not create an apparent form backend where none exists. Existing placeholder notices may be restyled, but must not be removed merely to imply an unverified inbox is operational.

Refresh brand-specific metadata/image references where real assets exist. Do not invent a social-preview asset or claim one has been added without creating and verifying it. No changes to DNS, `public/CNAME`, domain/site/base settings, GitHub Pages configuration, workflow triggers, repository visibility, or remote URLs are needed for this visual implementation.

## Accessibility, fidelity, and QA

- Preserve semantic headings, skip links, keyboard interaction, visible focus, correct mobile menu ARIA/state, touch targets, readable contrast, and reduced-motion behavior.
- Keep UI text/buttons/navigation in real HTML/Astro components. A screenshot stretched over the page is not implementation.
- Maintain a compact dependency footprint; no React migration, animation framework, remote image hotlinks, analytics, or new service accounts.
- Check the hero image treatment, palette, typography, spacing, headline/CTA copy, icon consistency, header/footer, and complete lower-page flow against the references. Document intentional deviations: real site copy and routes take priority; raster mark is provisional; fake metrics and sample contact data are excluded.
- Run `npm ci`, `npm run check`, and `npm run build`. Record results and fix regressions. If the existing lockfile cannot be installed, diagnose rather than masking failure with an uncontrolled upgrade.
- Use `npm run dev` or `npm run preview` for browser review. Test all existing routes, every local link/asset, menu open/close and keyboard behavior, contact links, and browser console errors.
- Test desktop at the homepage reference size (1672 × 941 where practical), plus 1440 × 900, 768 × 1024, and 390 × 844. Check 320 px for horizontal overflow and text clipping.
- Capture actual desktop and mobile screenshots, including full-homepage views, under `docs/review/mechanical-lion/`. Visually open both reference images and the final browser screenshots; do not claim visual verification from a build alone.
- Report any contact placeholder as a launch issue rather than silently changing the fact. It does not block completing the local visual implementation.

## Completion report

Provide the branch, starting and ending commit IDs, changed files, asset locations, commands/tests and actual results, screenshot paths, local preview address, unresolved owner inputs, intentional design deviations, and final Git status. Stage only exact task-related paths and commit locally after checks. State explicitly that no push, merge, deployment, DNS change, or DJ Phelix modification occurred.

Stop for owner review. Do not execute `PUBLISH_AFTER_REVIEW.md` unless separately instructed after review.
