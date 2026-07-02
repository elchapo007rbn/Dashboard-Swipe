# Project Detail Page Specification

## Overview
- **Target file:** `src/app/project/[id]/page.tsx`
- **Interaction model:** click-driven / scroll-driven

## DOM Structure
- `<main>`
  - Header: Title (e.g. "Auraly Trend - Feitos"), More Options `...`
  - Toolbar: "Search project items" input, "Export" button
  - Grid: Video Cards (TikTok/Instagram style)
    - Video Card:
      - Thumbnail Image
      - Badges: "Analyzed" (green), Instagram icon
      - Text: Caption / Title
      - User: @username, Time ago
      - Stats: Views, Likes, Engagement (green/blue/orange pills)

## Computed Styles
- Layout: flex column, gap 24px, padding 40px

### Video Card
- display: flex
- flexDirection: column
- gap: 8px
- width: ~240px

### Badges & Stats
- "Analyzed" badge: backgroundColor `rgba(59, 130, 246, 0.15)` or green, color green, borderRadius 4px, padding 2px 6px.
- Stats pills: small fonts, colored backgrounds (green for growth, blue for views, orange for engagement).
