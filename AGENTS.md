# CV and Website Content Rules

## Source of truth

- Keep detailed career evidence in `site/content/jobs/`.
- Treat the website job pages as the canonical source for role history, technical scope, implementation details, and exact metric definitions.
- Treat `CV/ENG.tex` and `CV/PM.tex` as one-page application views. They must contain only the strongest, most relevant points.
- Keep `CV/ENG.md` aligned with the DevOps CV content.

## Sync workflow

1. Update the matching website job page first when adding or correcting a fact.
2. Select concise CV bullets from the updated website content.
3. Use rounded figures in the CV when precision does not improve the claim, such as `8k+` users or `500k+ PKR` booked revenue.
4. Keep exact values, dates, source windows, and technical details on the website when they are useful for reference.
5. Do not invent metrics, convert booked revenue into ARR, or include weak metrics only to fill space.
6. Keep titles and dates consistent across the website and all active CVs.

## CV quality rules

- Keep each active CV to one page unless the user asks for a longer version.
- Use standard ATS section names, plain text, readable bullets, and searchable technology names.
- Lead bullets with a strong action and show scale, technical method, or business impact where verified.
- Prefer high-impact outcomes over raw telemetry dumps, snapshot timestamps, and low-signal activity counts.
- Keep the detailed implementation history on the website instead of forcing every detail into the CV.

## Build and verification

- Rebuild `CV/PM.pdf` after product CV changes and `CV/ENG.pdf` after DevOps CV changes.
- Keep website resume copies synchronized in `site/static/` and `site/public/` when those artifacts are generated.
- Render each final PDF to PNG and inspect it for clipping, overlap, unreadable text, and accidental page overflow.
- Confirm that the final PDF is text-based and that the Downloads copy matches the repository build.
