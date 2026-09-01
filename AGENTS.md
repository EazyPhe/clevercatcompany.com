# Clever Cat Company repository guidance

## Scope

- This repository is the only writable location for the Clever Cat Company website.
- Keep the site static, framework-light, and suitable for GitHub Pages at `https://clevercatcompany.com`.
- Do not add credentials, form-service tokens, analytics IDs, or private contact data.

## Build and verification

- Install dependencies with `npm install`.
- Run `npm run check` and `npm run build` before committing.
- Use `npm run dev` for local development and `npm run preview` for production-like review.
- Review the home page at desktop, tablet, and mobile widths; verify every internal link, the mobile menu, and the contact email fallback.

## Content and design

- Edit business facts, contact details, capability copy, project slots, and social links in `src/data/site.ts`.
- Treat `src/data/site.ts` values marked as placeholders as launch blockers, not confirmed public facts.
- Keep unknown facts out of public copy. Never invent clients, results, awards, pricing, availability, testimonials, or a relationship with DJ Phelix.
- Preserve semantic headings, keyboard focus states, contrast, alt text, and reduced-motion behavior.

## Git

- Inspect `git status` before and after work; stage exact paths only.
- Do not alter remotes, publish, push, force-push, or rewrite history from this repository.
- Keep generated local review evidence under `docs/review/` and document owner inputs in `docs/CONTENT_NEEDED.md`.
