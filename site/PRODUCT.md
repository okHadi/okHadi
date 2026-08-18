# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 with static output. The site uses semantic HTML, local Markdown content, optimized images, and no client-side framework runtime.

## Users

People who want to evaluate Hadi Khan's work, experience, and technical range. This includes employers, founders, engineers, and potential collaborators.

## Product Purpose

The portfolio gives a fast, credible view of Hadi's career and the products he has built. The home page must make his current work and strongest products easy to understand. A separate resume page must provide the complete work history and a direct download of the current DevOps resume PDF.

## Positioning

Hadi works across product, software engineering, cloud infrastructure, and startup leadership. The portfolio must show this range through shipped work and verified results instead of broad claims.

## Operating Context

Most visitors will scan the site before they read it in detail. They need a compact experience summary first, followed by visual product work. Visitors who need full career detail can open the internal resume page without leaving the site.

## Capabilities and Constraints

- The home page contains a short introduction, a compact experience table, and the product portfolio.
- Each experience row links to its exact role on the internal resume page.
- The resume page includes the complete work history and a Download PDF action.
- The PDF action downloads the current DevOps resume from `/resume.pdf`.
- The home page shows Parhlai first, then Tashreeh.org, Dhoondlai, Finasaan, Rate My Ustaad, Shaatir Billi, and smaller projects.
- Tashreeh.org and Dhoondlai are marked as work in progress.
- Parhlai uses a static capture because its production `SAMEORIGIN` policy blocks cross-site iframe use. A lightweight overlay reproduces the real exam-word cycle without loading the live site.
- Projects with strong media receive a large visual treatment. Projects without suitable media receive a smaller text-led treatment.
- There is no About page or About section.
- There is no Playground page.
- Existing factual project and career content must not be invented or inflated.

## Brand Commitments

- Use a minimal design with enough depth to support substantial work.
- Keep one short introduction paragraph. Do not turn it into an About section.
- Use direct language. Do not use eyebrow text, filler copy, or descriptions of obvious interface elements.
- Preserve personality. The site must not look like a generic portfolio template or an AI-generated landing page.
- The reference sites are `amanhsn.com`, `opentui.com`, and `zaynikhlaq.com`. They are direction references only and must not be copied.

## Evidence on Hand

- Detailed career evidence in `content/jobs/`.
- Project records in `content/projects/` and `content/featured/`.
- Current DevOps resume at `static/resume.pdf` and `public/resume.pdf`.
- Current public-page captures for Parhlai and Finasaan.
- An exported Tashreeh.org public-library design from the product's `design.pen` file.
- Existing project images for Dhoondlai, Rate My Ustaad, and Shaatir Billi.

## Product Principles

- Lead with the work.
- Make scanning fast and deeper reading optional.
- Use verified outcomes and concrete technical detail.
- Let project media carry visual weight.
- Keep navigation and actions plain and predictable.
