# Clever Cat Company

The source for the official static website at `https://clevercatcompany.com`.

The site is an Astro + TypeScript build with a deliberately honest first-version content model: editable facts live in one module, project spaces are not presented as completed client work, and the contact experience uses a visible email fallback instead of a fake submission flow.

## Local setup

Use Node.js 20 or later.

```powershell
npm install
npm run dev
```

The development server prints its local URL. Use `npm run preview` after a production build to review the generated site locally.

## Quality checks

```powershell
npm run check
npm run build
npm run preview
```

`npm run check` validates Astro and TypeScript. `npm run build` produces the static `dist/` output, including the generated sitemap.

## Content editing

Edit `src/data/site.ts` for the company description, navigation labels, contact details, capability copy, process steps, project slots, and their image metadata. The public email is intentionally a build placeholder; replace it with a monitored inbox before launch.

See [docs/CONTENT_NEEDED.md](docs/CONTENT_NEEDED.md) for the prioritized owner checklist. The current generated cat sculpture and material studies are original local assets in `public/images/`; obtain final owner approval before production publishing.

## Structure

- `src/pages/` — Home, About, Capabilities, Work, Contact, and Privacy routes.
- `src/components/` — shared navigation, footer, content sections, and accessible controls.
- `src/data/site.ts` — centralized editable public content.
- `src/styles/global.css` — design tokens, responsive layout, focus states, and reduced-motion behavior.
- `public/` — local assets, favicon, `robots.txt`, and the custom-domain `CNAME` file.
- `.github/workflows/deploy-pages.yml` — prepared GitHub Pages Actions workflow.
- `docs/review/` — accepted Image Gen concepts, visual-review screenshots, and fidelity notes.

## GitHub Pages preparation and custom domain

The project is configured for the apex custom domain in `astro.config.mjs`, has no repository subpath base, and includes `public/CNAME` containing `clevercatcompany.com`. The workflow is prepared but this repository does not enable Pages, make DNS changes, or publish anything.

When the owner is ready to deploy, the manual sequence is:

1. Replace every confirmed-content placeholder, especially the public email, privacy text, social links, and project slots.
2. Run `npm install`, `npm run check`, and `npm run build`; review the generated site and the committed diff.
3. Commit and push the owner-approved changes to the desired `main` branch through the normal review process.
4. In GitHub, enable **Pages** for this repository and select **GitHub Actions** as the publishing source. Do not change repository visibility unless separately intended.
5. In the repository’s Pages settings, add and verify `clevercatcompany.com` as the custom domain. Keep the existing `CNAME` file in the deployment output.
6. Only after the Pages deployment is live and GitHub shows the required domain guidance, update the Squarespace **web-hosting** DNS records to GitHub Pages’ current recommended apex-domain records. Preserve all email, verification, SPF, DKIM, DMARC, and unrelated DNS records.
7. Wait for DNS propagation, confirm the custom domain resolves to the new site, and enable HTTPS in GitHub Pages once it becomes available.
8. Add analytics or a form provider only after selecting the service, completing an updated privacy notice, and storing any configuration securely outside source control.

No automated deployment action is performed by this repository setup alone.
