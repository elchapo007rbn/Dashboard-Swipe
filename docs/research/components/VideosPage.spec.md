# Videos Page Specification

## Overview
- **Target file:** `src/app/videos/page.tsx`
- **Interaction model:** 2-column layout (Filters + Grid of videos)

## DOM Structure
- `<main>`
  - Header: Title "Videos", Subtitle "Analyze videos from your channels..."
  - Toolbar:
    - Left actions: "Customize channels", "Add video URL", "Bulk Analyze"
    - Right actions: "Showing X of Y", "Filters" (active button, blue bg), "Sort by", "Export"
  - Content Wrapper (flex row with gap):
    - Left Column (Filters Panel, w-[280px]):
      - White background, rounded border. Header "FILTERS".
      - Form groups with labels: Channels (select), Keywords (input), Outlier score (2 inputs min/max), Views, Engagement, Posted in last (input + select), Platform (select).
      - Status checkboxes (Analyzed, Unanalyzed).
      - "Save filter" button.
    - Right Column (flex-1):
      - Grid of Video Cards (4 columns on desktop).
      - Card matches the one from ProjectDetail (thumbnail, stats, etc.). Currently showing skeleton loading states.

## Computed Styles
- Layout wrapper matches Projects page (flex column, padding).
- Filters panel uses standard shadcn form inputs (border-gray-200, rounded).
