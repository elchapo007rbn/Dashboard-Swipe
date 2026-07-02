# Collections Page Specification

## Overview
- **Target file:** `src/app/collections/page.tsx`
- **Interaction model:** Grid of rich cards

## DOM Structure
- `<main>`
  - Header: Title "Collections", Subtitle "Browse curated collections of standout videos grouped by format, hook, and story structure"
  - Toolbar:
    - Search input ("Search collections")
    - Right side buttons: "Category" (tag icon), "Sort by" (up/down arrows)
  - Grid: 4 columns on desktop.
    - Card:
      - Top Half (Image/Gradient Box): Aspect ratio ~16:9, rounded top corners. Background is a rich gradient (green, blue, purple, red) with noise/texture.
      - Inside Image Box: 
        - Small pill badge top center (e.g. "VISUAL HOOKS", "FORMATS" - uppercase, small font, semi-transparent bg).
        - Large, heavy bold white text centered (e.g. "3P Crash Zoom", "About Me").
      - Bottom Half (White Box): rounded bottom corners, padding.
        - Subtitle (uppercase, light gray text): e.g. "VISUAL HOOKS · SUBJECT MOTION"
        - Title (bold, dark text): e.g. "3P Crash Zoom"
        - Count Badge (small, gray bg): e.g. "2 videos"

## Computed Styles
- Gradients: Can be simulated with Tailwind like `bg-gradient-to-br from-green-500 to-emerald-900` or similar.
- Text shadows on the large image text to make it pop.
