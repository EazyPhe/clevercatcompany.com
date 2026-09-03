# Clever Cat Company — Website Branding Handoff

Prepared 3 September 2026. This package supplies artwork, visual references, design tokens, and implementation instructions. It does not contain a completed Astro patch, and extracting it does not update the website.

## Your next action

Extract the `clevercat-brand-handoff` folder into:

`M:\Business\CleverCatCorp\clevercatcompany.com\docs\brand\`

The implementation brief should then be located at:

`M:\Business\CleverCatCorp\clevercatcompany.com\docs\brand\clevercat-brand-handoff\CODEX_IMPLEMENTATION.md`

Open the existing `clevercatcompany.com` repository in your local Codex workspace. Paste the following:

```text
Read docs/brand/clevercat-brand-handoff/CODEX_IMPLEMENTATION.md and implement it now in this existing repository. Inspect both reference images and the supplied source artwork first. Apply the mechanical-lion branding to the real Astro website, not another mockup or a screenshot-only page. Preserve all routes, existing functionality, domain configuration, and unconfirmed-contact safeguards. Test it, show desktop and mobile browser previews, and commit the changes locally on a dedicated branch. Do not push, merge, or publish yet.
```

Review the actual local website. Only after approval, use `PUBLISH_AFTER_REVIEW.md` for the separate production step. Never launch deployment merely because an asset package has been added.

## What is included

| Folder or file | Purpose |
| --- | --- |
| `source-art/` | The two user-supplied original lion PNGs: flat mark and clean silver hero. |
| `reference/brand-system.png` | Latest branding board; visual reference, not publishable UI. |
| `reference/homepage-direction.png` | Earlier homepage composition reference. |
| `web-assets/` | WebP artwork at responsive sizes plus provisional PNG/ICO browser icons. |
| `implementation/brand-tokens.css` | Proposed CSS variables, to integrate into existing styles. |
| `CODEX_IMPLEMENTATION.md` | Full scope, file guidance, safeguards, and acceptance tests. |
| `PUBLISH_AFTER_REVIEW.md` | Separate, owner-approved release procedure. |
| `VERIFIED_REPOSITORY_NOTES.md` | Repository facts checked for this handoff and source locations. |
| `asset-manifest.json` | Image dimensions, byte sizes, and SHA-256 checksums. |

## Asset limitations

The PNG and WebP artwork are raster images, not editable vector logos. Original artwork retains its black background. The browser icons are reductions of the supplied flat lion and require review at actual size; they are not a newly simplified vector emblem. No font binaries are included. Font names in the boards are styling references, not proof that image-generated lettering matches those font files exactly.

The boards include demonstration content. Do not publish invented names, telephone numbers, social accounts, dates, decorative percentages, or contact details from them. The existing repository explicitly marks its email address as a placeholder. A visual rebrand does not confirm that inbox.
