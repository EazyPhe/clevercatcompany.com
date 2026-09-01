# Fidelity ledger

The accepted concept set is stored in `docs/review/concepts/` and was generated as an original design reference for this implementation:

- `hero-desktop.png` — desktop header, hero hierarchy, purple CTA, sculpture focal point, and next-section reveal.
- `capabilities-about.png` — open editorial capabilities list, quiet rail motif, and Who we are band.
- `work-process.png` — honest work-in-progress treatment, material study imagery, and four-step engagement rail.
- `contact-footer.png` — closing CTA, email fallback, and quiet footer.
- `mobile-home.png` — compact header, stacked hero, touch targets, and vertical capability rhythm.

## Rendered review evidence

The production build was served locally on port `4321` and reviewed through the `npx`-backed Playwright CLI. The installed shell wrapper could not run because its Bash launcher has no `/bin/bash` on this host, so the equivalent supported `npx --package @playwright/cli playwright-cli` command was used instead. The in-app Browser tool was not available.

- `desktop-home-1536-final.png` — 1536 × 1024 home viewport, matching the accepted desktop hero concept dimensions.
- `desktop-home-1536.png` — pre-fix diagnostic capture retained to show the detected three-line hero mismatch and its correction.
- `desktop-home-1440.png` — 1440 × 1000 requested desktop review viewport.
- `tablet-home-768.png` — 768 × 1024 tablet review viewport.
- `mobile-home-375.png` — 375 × 812 mobile first viewport.
- `mobile-capabilities-375.png` — 375 × 812 mobile scrolled capability list.

## Comparison ledger

| Comparison point | Concept evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Hero copy and hierarchy | `hero-desktop.png` uses a two-line `Clever solutions. / Real results.` hierarchy. | `desktop-home-1536-final.png` matches the two-line hierarchy and includes only the locked headline, supporting copy, CTA, and secondary action. | Pass. An initial three-line render was fixed by widening the desktop hero column before the final capture. |
| Header and navigation | `hero-desktop.png` shows a quiet mark, wordmark, and four concise navigation links. | Desktop capture shows the original cat mark plus Work, Capabilities, About, and Contact; `tablet-home-768.png` shows the compact menu. | Pass. |
| Palette and media treatment | All concepts use near-black/graphite surfaces, white type, and a controlled electric-purple accent. The hero artwork has no color wash. | Final desktop and mobile captures use the locked tokens; the original local sculpture is rendered without a tint/overlay, with only a halo behind it. | Pass. |
| Capability container model | `capabilities-about.png` uses an open numbered editorial list rather than rounded feature cards. | Home and mobile capability captures use ruled rows, indices, and open spacing. | Pass. |
| Work and process rhythm | `work-process.png` uses honest case-study spaces, dark material imagery, and a simple four-step rail. | The rendered work section keeps neutral case-study labels and local material studies; the process rail uses Listen, Shape, Make, Refine. | Pass. |
| Closing CTA and footer | `contact-footer.png` uses a direct conversation CTA, email fallback, and quiet footer navigation. | The final site uses the same action hierarchy, an explicit editable email placeholder, and footer navigation without invented social profiles. | Pass. |
| Responsive behavior | `mobile-home.png` establishes a compact header, stacked type/action layout, and vertical capability rhythm. | `mobile-home-375.png` and `mobile-capabilities-375.png` show readable type, usable actions, no clipping, and a measured `scrollWidth` of 375 at a 375px viewport. | Pass. |

## Above-the-fold copy diff

**Pass.** The rendered desktop home first viewport contains exactly the copy in `DESIGN_SYSTEM.md`’s first-viewport lock: brand name; Work, Capabilities, About, Contact; `Clever solutions. Real results.`; the approved supporting line; `Start a conversation`; and `Explore capabilities`. No visible eyebrow, badge, proof claim, client logo, statistic, rating, award, testimonial, or extra hero label was added.

## Interaction and browser checks

- Desktop primary `Start a conversation` CTA navigated to `/contact`.
- The native mobile `<details>` menu opened by keyboard/mouse-supported control and its Work link navigated to `/work`.
- Browser loads confirmed `/capabilities`, `/about`, `/work`, `/contact`, and `/privacy` with the expected page titles.
- The Contact route exposes only a `mailto:` fallback and states that no form endpoint is connected.
- Browser console: 0 errors, 0 warnings.
- Static-output link check: 6 HTML pages, 127 local route/asset references checked, 0 failures.

No material visual mismatch remains after the hero-line-break correction. The implementation was faithfully reviewed against the accepted concept set and is ready for owner review, subject to the content and privacy inputs documented in `../CONTENT_NEEDED.md`.
