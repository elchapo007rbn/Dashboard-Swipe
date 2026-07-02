# Collection Detail Page Specification

## Overview
- **Target file:** `src/app/collection/[id]/page.tsx`
- **Interaction model:** Grid of video cards

## DOM Structure
- `<main>`
  - Header: Title (e.g., "3P Crash Zoom")
  - Toolbar:
    - Left: "Search videos" input
    - Right: "Sort by" (arrow icon), "Export" (cloud icon)
  - Grid: 5 columns on desktop (same as ProjectDetail video grid).
    - Video Card:
      - Thumbnail (aspect 9:16) with top-right platform icon (Instagram/TikTok).
      - Title text below thumbnail (truncated).
      - Footer line 1: Handle (`@sharecraftmedia`) and time ago (`9mo ago`) in small gray text.
      - Footer line 2 (Metrics Badges): 
        - Multiplier (green bg, e.g., "44.9x")
        - Views (blue bg, e.g., "103K")
        - Engagement/Other (orange bg, e.g., "4%")

## Computed Styles
- Layout wrapper matches Projects page (flex column, padding).
- Badges use standard Tailwind colors (e.g., `bg-green-100 text-green-700`).
