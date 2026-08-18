---
name: "Hadi Khan Portfolio"
description: "A compact index of shipped products, technical work, and verified experience."
colors:
  ink: "#0b0b0a"
  paper: "#f1f1ec"
  muted: "#92928b"
  rule: "#292925"
  signal: "#ff5a1f"
  media-surface: "#141412"
  body-strong: "#b8b8b1"
typography:
  display:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(3rem, 5.2vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.05
  role:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  bodyLead:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.45
  bodyCompact:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.45
  metadata:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.45
  resumeBullet:
    fontFamily: "Calibre, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "'SF Mono', ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  media: "12px"
  action: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  section: "54px"
components:
  action-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "8px 16px"
    height: "42px"
  action-primary-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
  media-card:
    backgroundColor: "{colors.media-surface}"
    rounded: "{rounded.media}"
---

# Design System: Hadi Khan Portfolio

## Overview

**Creative North Star: "The Builder's Index"**

The portfolio is a maintained index of real work. Its visual language is direct, quiet, and evidence-led: compact identity, ruled records, strong product media, and no oversized marketing hero.

The dark field makes the work feel substantial without making the interface heavy. Warm type and one orange signal create clear hierarchy. Responsive layouts preserve the reading order and turn multi-column records into simple vertical entries.

**Key Characteristics:**

- Near-black canvas with warm off-white type.
- Flat rows and one-pixel rules instead of text cards.
- Orange used as a narrow path for state and direction.
- Calibre for reading; SF Mono only for dates and technical metadata.
- Large real product media for primary products; compact text treatment for smaller work.

## Colors

The palette is almost monochrome. Warm neutrals carry content, and one hot orange marks state and action.

### Primary

- **Path Orange:** Use the signal color for the header path, active navigation, important links, focus outlines, list markers, and hover emphasis.

### Neutral

- **Index Black:** Use the ink color for the page canvas and dark action text.
- **Warm Paper:** Use the paper color for headings, names, navigation, and high-priority links.
- **Ledger Gray:** Use the muted color for body copy and secondary facts.
- **Strong Body Gray:** Use the body-strong color for dense resume content that needs more contrast than ordinary secondary text.
- **Rule Charcoal:** Use the rule color for one-pixel dividers and row boundaries.
- **Media Black:** Use the media-surface color behind project images.

**The One Signal Rule.** Orange is the only interface accent. Do not add project brand colors outside project media.

## Typography

**Display Font:** Calibre (with system sans-serif fallback)
**Body Font:** Calibre (with system sans-serif fallback)
**Label/Mono Font:** SF Mono (with monospace fallback)

**Character:** Calibre gives the index an editorial but plain-spoken voice. SF Mono makes dates and technical facts easy to identify without turning the full page into a developer theme.

### Hierarchy

- **Display:** Medium, tightly tracked type for the person name and resume title.
- **Headline:** Medium, tightly tracked type for major visual projects.
- **Title:** Medium type for section and job headings.
- **Body:** Regular type with open line spacing for summaries, descriptions, and detailed work history.
- **Label:** Small monospaced type for dates, locations, categories, and technical metadata.

**The Two-Family Rule.** Use Calibre for all reading and navigation. Use SF Mono only when the content is metadata.

## Layout

The global page width is `min(calc(100% - 64px), 1320px)`. The resume uses a narrower 1040px maximum. At 640px and below, horizontal page margins reduce to 18px.

Desktop layouts use asymmetric grids: a narrow identity or project column and a wider evidence or media column. Project media alternates sides. At 900px, visual projects become one column. At 760px and below, resume sections become one column. At 700px and below, index rows stack their supporting text while dates stay easy to scan.

Vertical rhythm is spacious between sections and compact inside records. Dividers align across the full content width.

**The Index Before Cards Rule.** Use grids, rows, and rules for text content. Reserve contained surfaces for real media and true actions.

## Elevation & Depth

The interface has no box shadows. Depth comes from contrast, spacing, scale, and the change from flat text rows to large product images. Image hover uses a restrained scale change, not lift.

**The Flat-by-Default Rule.** Do not add shadow to navigation, rows, project copy, or the resume. A contained background is valid only for media or an action.

## Shapes

Most interface geometry is square and line-based. One-pixel horizontal rules define records. Project images use gently rounded 12px corners to separate real media from the index. Full pill geometry is reserved for the Download PDF action.

**The Earned Curve Rule.** A curve must identify media or a true action. Do not round text rows or page sections.

## Components

### Actions

- **Shape:** Full pill for the primary action; inline text for ordinary links.
- **Primary:** Warm paper background with dark text and compact padding.
- **Hover / Focus:** Orange background on hover; a two-pixel orange outline with four-pixel offset for keyboard focus.

### Navigation

- **Style:** Compact Calibre links on a 68px desktop header and 60px mobile header.
- **State:** Warm paper by default; orange for hover, keyboard focus, and the current page.
- **Signature:** A short orange segment sits over the otherwise charcoal bottom rule.

### Ledger Rows

- **Style:** Flat grid rows with one-pixel top or bottom rules.
- **Hierarchy:** Names use warm paper, details use gray, and dates use SF Mono.
- **State:** The name changes to orange while the rest of the row becomes warm paper.

### Project Media

- **Corner Style:** Gently rounded media corners.
- **Background:** Media Black.
- **Behavior:** Clip the image and apply only a very small hover scale. Do not add a shadow.
- **Parhlai motion:** Use the compressed 10 fps desktop capture for the rotating exam-word sequence. Pause it off-screen and show its poster for reduced motion.

### Page Continuity

- Use a site-controlled transition for same-origin page changes: the orange header path extends while the current page closes, then retracts as the destination opens.
- Resume anchors briefly mark the selected role and move its bullet list into place.
- All navigation motion must stop when reduced motion is requested.

### Resume Entries

- **Style:** A narrow identity column and a wider evidence column on desktop; one continuous reading column on mobile.
- **Detail:** Orange bullets guide dense evidence lists. Company names are plain links, and dates and locations use SF Mono.

## Do's and Don'ts

### Do:

- **Do** lead with real work, verified text, and real project media.
- **Do** keep text-only projects compact when suitable media does not exist.
- **Do** use orange for active, hover, focus, and directional cues.
- **Do** preserve a clear single-column reading order on small screens.

### Don't:

- **Don't** add an oversized hero, eyebrow text, filler copy, or ornamental metrics.
- **Don't** put text sections inside rounded cards.
- **Don't** use SF Mono for paragraphs, headings, or navigation.
- **Don't** add shadows, gradients, decorative blur, or extra accent colors.
- **Don't** use invented project images or unverified claims.
