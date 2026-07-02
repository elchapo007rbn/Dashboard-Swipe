# Ideas Page Specification

## Overview
- **Target file:** `src/app/ideas/page.tsx`
- **Interaction model:** click-driven

## DOM Structure
- `<main>`
  - Header Section: Title "Ideas", Subtitle "Review ideas that were generated from videos you analyzed"
  - Toolbar: Search input ("Search ideas"), Sort by button, Export button
  - Grid: (Empty state or list of ideas similar to projects)

## Computed Styles
- Same layout wrapper as Projects page (flex column, gap 24px, padding 40px)
- Toolbar matches the Projects toolbar.
