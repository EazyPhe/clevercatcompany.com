# Mechanical-lion fidelity ledger

## Accepted references

- `../../brand/clevercat-brand-handoff/reference/brand-system.png` is the
  current overall visual system.
- `../../brand/clevercat-brand-handoff/reference/homepage-direction.png` is
  the earlier desktop-hero composition reference.
- `../../brand/clevercat-brand-handoff/source-art/lion-hero-original.png` and
  `lion-mark-original.png` are the authoritative lion artwork.
- The written handoff overrides sample contacts, social profiles, metrics,
  dates, wordmark raster text, and any other demonstration content in the
  boards.

## Rendered review evidence

All captures were made against the production build at `http://127.0.0.1:4321`
with the local Playwright CLI. The Browser plugin was unavailable in this
workspace, so the cached CLI was used without adding a project browser-test
dependency.

- `home-desktop-1672x941-viewport.png` — reference-size desktop hero.
- `home-desktop-1672x941-full.png` — full homepage after lazy work imagery
  loaded.
- `home-desktop-1440x900-viewport.png` — desktop hierarchy and header.
- `home-tablet-768x1024-viewport.png` — tablet reflow and mobile-menu switch.
- `home-mobile-390x844-viewport.png` and `home-mobile-390x844-full.png` —
  mobile hierarchy and full-page flow.
- `home-mobile-390x844-menu-open.png` — open, accessible mobile navigation.
- `home-mobile-320x844-viewport.png` — narrow-width text/overflow review.
- `capabilities-mobile-390x844-viewport.png` and
  `contact-mobile-390x844-viewport.png` — interior-route mobile review.
- `home-desktop-1672x941-work-section.png` — lazy-loaded work imagery and
  its intentionally unconfirmed content treatment.

## Comparison ledger

| Comparison point | Reference / requirement | Rendered result |
| --- | --- | --- |
| Hero composition | Live left copy/CTAs, large clean mechanical lion on the right, no colored wash over the artwork. | Pass. The responsive 480/768/1254 WebP `srcset` shows the untouched silver/blue lion in a black artwork region; technical grid lines sit outside the asset. |
| Headline and copy | Locked headline, supporting line, actions, discipline line, and signature; no board-only fake content. | Pass. Desktop is two lines at 1672 × 941 and 1440 × 900; mobile remains readable with both actions visible. |
| Identity and typography | Live Clever Cat Company lockup, Engineered to Lead, Space Grotesk headings, and Inter body/UI. | Pass. Local Fontsource variable packages load the real families; the mark is decorative beside accessible live text. |
| Palette / component system | Obsidian, graphite, steel, electric-blue technical detailing; no former purple UI system. | Pass. Header, panels, page heroes, process rail, CTA, and footer share the blue-on-dark system and visible focus support. |
| Responsive behavior | Desktop, tablet, mobile, and 320 px without clipped content or horizontal overflow. | Pass. Browser measurement at 320 px: `innerWidth=320`, `scrollWidth=320`, `clientWidth=320`. |
| Safeguards and routes | Preserve six routes, four capabilities, four process steps, future-work honesty, and contact/privacy warnings. | Pass. All six pages load with expected titles. The contact route exposes only the existing `mailto:` fallback and the placeholder warning remains visible. |

## Above-the-fold copy diff

Pass. The first viewport contains only the live brand name/tagline, established
navigation, approved contact CTA, permitted discipline line, locked headline,
locked supporting copy, and the two approved actions. No metric, binary string,
fake status, testimonial, client, social profile, or sample contact detail was
introduced.

## Intentional deviations and limits

- The reference board's metallic wordmark lettering is not used; the handoff
  requires accessible live text rather than raster text extracted from a board.
- Existing abstract work imagery remains, as the handoff permits. It contains
  historic violet visual detail, but the new website UI has no purple identity
  and the surrounding content still calls each slot unconfirmed.
- There is no editable vector logo or simplified favicon source. The supplied
  lion icon is retained rather than inventing a different emblem; it is visually
  dense at 16 px and should be revisited only when the owner supplies a proper
  simplified mark.
- The square lion hero is used as the real available social-preview image. No
  purpose-built social card is claimed.

## QA commands and results

- `npm install @fontsource-variable/inter @fontsource-variable/space-grotesk`
  completed; it reported an existing transitive `undici` Node-engine warning and
  audit findings, neither of which blocked the site check/build.
- `npm run check` — passed: 20 files, 0 errors, 0 warnings, 0 hints.
- `npm run build` — passed: six static routes plus sitemap.
- Static link and asset validation — passed: 163 local `href`/`src`
  references across six generated HTML pages, with zero missing targets.
- Browser validation — passed for desktop/header actions, keyboard skip-link
  activation, keyboard open/close of the native mobile menu, a mobile Work
  navigation click, all six route titles, and the contact `mailto:` fallback.
  The final home-page console had zero errors and zero warnings.

No push, merge, publication, DNS work, remote setting change, or DJ Phelix
modification occurred.
