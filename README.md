# Clever Cat Company

Source for the public project portfolio at https://clevercatcompany.com.

The site uses Astro and TypeScript to generate static pages for GitHub Pages. The portfolio brings ManeSlice, Connected Show Control, and Project Command Center into one company identity. Each entry distinguishes demonstrated work, its current maturity, and the next step.

## Develop and verify

Use Node.js 22, matching the GitHub workflows.

~~~powershell
npm ci
npm run dev
~~~

Before a release:

~~~powershell
npm run check
npm run build
npm run preview
~~~

Check the home, work, project, contact, and 404 pages at desktop, tablet, and mobile sizes. Exercise category filters and the native mobile menu; verify internal links and the email destination. Build output lives in dist/.

## Edit the portfolio

- src/data/site.ts contains the public mission, contact address, disciplines, process, and typed project records.
- src/pages/work/[slug].astro generates a page for each project record.
- src/components/WorkGrid.astro renders the portfolio and progressively enhanced category filters.
- src/components/ProjectVisual.astro supplies clearly labeled workflow illustrations. These are not product screenshots.
- src/styles/global.css contains the established graphite/purple design, responsive styles, focus states, and reduced-motion behavior.
- public/ contains local artwork, the favicon, robots.txt, and CNAME.

The contact link uses an existing public professional email address. There is no contact form, visitor account, analytics integration, or newsletter service. The privacy page describes the actual static-site and email behavior.

See [content follow-ups](docs/CONTENT_NEEDED.md) before expanding project claims or publishing new evidence. Keep private source repositories, device details, internal inventories, and operational records out of public content.

## Deploy

The custom domain is configured as https://clevercatcompany.com in astro.config.mjs and public/CNAME. This site uses the domain root, not a repository-path base.

.github/workflows/deploy-pages.yml checks and builds the site, then deploys the resulting dist artifact to GitHub Pages when main changes. It also supports a manual workflow dispatch. GitHub Pages must use GitHub Actions as its publishing source.

The CI workflow independently checks pull requests. Review the exact changes and obtain the appropriate publishing authorization before merging to main. Keep custom-domain and email DNS records unchanged unless a DNS change is separately required.

## Routes

- Home, Work, Capabilities, About, Contact, Privacy
- ManeSlice, Connected Show Control, and Project Command Center project pages
- A custom 404 page with links back to the portfolio
