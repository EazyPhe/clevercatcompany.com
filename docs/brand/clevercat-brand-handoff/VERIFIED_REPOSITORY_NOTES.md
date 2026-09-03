# Verified repository context

Checked through the connected GitHub tool and live website on 3 September 2026. These are observations from that check, not guarantees of future state. The user's Windows working tree was not inspected or modified in this handoff session.

| Item | Observation | Source |
| --- | --- | --- |
| Repository | `EazyPhe/clevercatcompany.com`, default branch `main`, public | GitHub repository metadata |
| Framework | Astro `^5.16.4` and TypeScript; no React dependency listed | `package.json` |
| Scripts | `dev: astro dev`, `check: astro check`, `build: astro build`, `preview: astro preview` | `package.json` |
| Deployment | `workflow_dispatch` only; Node 22; `npm ci`; build; upload `dist`; deploy to Pages | `.github/workflows/deploy-pages.yml` |
| Repository safeguards | Static site, no secrets, do not invent facts, preserve accessibility; local review/commits, no publishing | `AGENTS.md` |
| Contact | `hello@clevercatcompany.com`, explicitly `emailIsPlaceholder: true` | `src/data/site.ts` |
| Work | Three explicitly unconfirmed case-study slots | `src/data/site.ts` |
| Content | Headline remains Clever solutions. Real results.; capabilities/process routes already exist | Live homepage and repository |

## Source locations

Repository: `https://github.com/EazyPhe/clevercatcompany.com`

Package manifest: `https://github.com/EazyPhe/clevercatcompany.com/blob/main/package.json`

Deployment: `https://github.com/EazyPhe/clevercatcompany.com/blob/main/.github/workflows/deploy-pages.yml`

Guidance: `https://github.com/EazyPhe/clevercatcompany.com/blob/main/AGENTS.md`

Site data: `https://github.com/EazyPhe/clevercatcompany.com/blob/main/src/data/site.ts`

Live website: `https://clevercatcompany.com/`

GitHub manual deployment instructions: `https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow`

Astro deployment documentation: `https://docs.astro.build/en/guides/deploy/github/`

Codex local IDE documentation: `https://developers.openai.com/codex/ide/`

The local path `M:\Business\CleverCatCorp\clevercatcompany.com` comes from the established Company Build project. Codex must verify it before editing.
