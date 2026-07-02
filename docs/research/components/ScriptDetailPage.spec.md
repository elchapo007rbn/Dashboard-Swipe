# Script Detail Page Specification

## Overview
- **Target file:** `src/app/script/[id]/page.tsx`
- **Interaction model:** step-by-step form / progress tabs

## DOM Structure
- `<main>`
  - Header: Script Title (e.g., "COPY 71 - True Love Redefined...")
  - Progress / Tabs Bar (border, rounded, white bg):
    - Tabs: Topic (active, blue bg/text), Research, Hook, Script
    - Right side: "Continue" button (solid blue)
  - Content Box 1 (Source Video Info):
    - Thumbnail image (left side)
    - Right side text: Title (uppercase, gray) and paragraph (description)
  - Content Box 2 (Instructions):
    - Textarea/div containing the prompt or instructions ("Maintain the hook...")
  - Footer Note: "Topic can't be changed after script is created." (small, gray text)

## Computed Styles
- Layout wrapper matches other pages (flex column, padding).
- Progress bar is a flex container with `justify-content: space-between`.
- Content boxes use standard border, rounded-xl, padding 24px.
