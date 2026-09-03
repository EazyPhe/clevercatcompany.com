# Content needed before launch

The first site build intentionally avoids presenting unverified business facts. Please provide or confirm these items before publishing.

## Highest priority

1. **Public contact email:** Replace the current `hello@clevercatcompany.com` build placeholder in `src/data/site.ts` with the monitored public inbox.
2. **Final company positioning and service language:** Confirm which capability areas should remain, be renamed, or be removed.
3. **Final logo system:** The supplied mechanical-lion raster artwork is the approved interim website lockup, but it is not an editable vector logo or standalone wordmark. Provide a finalized vector/logo suite only if a future replacement is desired. The supplied favicon remains intentionally detailed at 16 px; no substitute mark has been invented.
4. **Privacy language:** Replace the privacy placeholder before collecting contact information, analytics, or any other personal data.

## Next priority

5. **Real project case studies:** Supply project names, approved descriptions, outcomes that can be substantiated, asset permissions, and any desired links. The current three work slots are deliberately neutral placeholders.
6. **Approved public contact details:** Optional public phone number, mailing/business address if one is intended for publication, and social-profile URLs.
7. **Relationship statement:** Confirm whether Clever Cat Company has any public relationship to any other brand. None is claimed in this build.

## Optional future additions

8. Approved photography or additional original art direction.
9. Confirmed legal/business details for a fuller privacy notice, terms, accessibility statement, or analytics policy.

Do not add any unknown fact directly to rendered copy. Update the centralized values in `src/data/site.ts` first, then run `npm run check` and `npm run build`.
