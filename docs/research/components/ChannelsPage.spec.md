# Channels Page Specification

## Overview
- **Target file:** `src/app/channels/page.tsx`
- **Interaction model:** 2-column layout (Main content + Watchlist sidebar)

## DOM Structure
- `<main>`
  - Header: Title "Channels", Subtitle "Pick which channels to include in your videos feed"
  - Content Wrapper (flex row with gap):
    - Left Column (flex-1):
      - Tabs: "Suggested" (active, white bg, shadow), "Describe", "Search", "Add URL" (gray bg).
      - Content area below tabs (empty state or suggestions).
    - Right Column (w-[350px]):
      - "Your Watchlist" Card (white bg, rounded-xl, border).
      - Scrollable list of profiles.
      - Profile Item: 
        - Avatar with small platform icon overlay (Instagram/TikTok).
        - Details column: Handle (bold) and stats (e.g., "1M followers • 263M views").
      - Card Footer: "Remove all" and "Export" buttons (with icons).

## Computed Styles
- Layout wrapper matches Projects page (flex column, padding).
- Watchlist card uses a fixed height with internal overflow-y-auto for the list.
- Avatars are circular, ~40px.
