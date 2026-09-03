# Publish only after review

This file is a later-stage release procedure, not permission to publish during the branding implementation. Read and act on it only after the owner reviews the real local website and explicitly approves the implementation for publication.

## Verified deployment detail

On 3 September 2026, `EazyPhe/clevercatcompany.com` had a manual GitHub Pages workflow:

- File: `.github/workflows/deploy-pages.yml`
- Display name: `Deploy Clever Cat Company to GitHub Pages`
- Trigger: `workflow_dispatch` only
- Default repository branch: `main`

Therefore, pushing or merging the new code alone does not trigger this configured Pages workflow. Recheck the configuration before release because it may have changed.

## Release procedure for Codex or the operator

1. Confirm the exact owner-approved branding branch/commit and latest test results. Recheck for uncommitted or unrelated changes and remote divergence. Review any contact/placeholder warnings with the owner; never mark an inbox verified without evidence.
2. Record the currently deployed successful revision and workflow run so a known-good rollback target is available. Do not assume that current `main` is the currently deployed version.
3. After explicit owner authorization, push the reviewed branch to the existing origin without force-pushing. Integrate only the approved changes into `main` through the repository's permitted review/merge process. Do not bypass branch protection or silently resolve conflicts. If local repository guidance forbids publishing, ask for an explicit, task-scoped override rather than editing that guidance away.
4. Ensure relevant CI checks on the intended `main` commit pass, and confirm that the exact approved code is present remotely. Do not mix new unreviewed design edits into the release.
5. In the repository on GitHub, open **Actions**, select **Deploy Clever Cat Company to GitHub Pages**, choose **Run workflow**, choose branch **main**, and run it. An equivalent GitHub CLI command, when the owner has authorized it, is:

   `gh workflow run deploy-pages.yml --repo EazyPhe/clevercatcompany.com --ref main`

6. Identify and monitor the actual newly triggered run. Do not assume a returned dispatch response or an unrelated green run means deployment succeeded. Verify the run's commit and both build/deploy results.
7. Inspect `https://clevercatcompany.com/` in a fresh browser load. Check the new hero, header/footer, favicon, mobile menu, contact route, all six existing routes, asset loads, and HTTPS. A green workflow alone is not sufficient verification.
8. Report the deployed commit, workflow run, live verification results, and any remaining owner input. Leave Squarespace, DNS, domain configuration, repository visibility, and `djphelix.com` untouched.

## Owner-facing reminder

Downloading the handoff package, editing local code, creating a local commit, and pushing to GitHub are different steps. With the workflow inspected for this handoff, the public website changes only after a successful manual Pages deployment of the updated code.
