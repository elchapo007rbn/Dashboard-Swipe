# Video Detail Page Specification

## Overview
- **Target file:** `src/app/video/[id]/page.tsx`
- **Interaction model:** click-driven / scroll-driven

## DOM Structure
- `<main>`
  - Header: Video Title (Full Caption), Prev/Next buttons
  - Content Layout (2 columns):
    - Left Column (Video Player & Actions):
      - Video Player Box (height: ~600px)
      - Author info & stats pills
      - Primary Button: "Create script" (blue) with "C" shortcut badge
      - List of Actions: "Shortlisted idea (S)", "Add to project (A)", "Hook format saved (H)", "Export for LLM (E)", "Open in new tab (O)", "Remove from library (R)"
    - Right Column (Analysis):
      - "Summary" section with paragraph text
      - Tab Navigation: "Transcript", "Idea Analysis", "Hook", "Storytelling Format", "Visual Layout"
      - Active Tab Content ("Transcript"): Card with word count badge, copy icon, and italicized transcript text.
      - "Caption" Card: Copy icon, plain text caption with hashtags.

## Computed Styles
- Layout: flex row or grid (2 columns)
- Left column width: ~350px
- Right column width: flex-1

### Action List Items
- display: flex
- justifyContent: space-between
- padding: 12px 16px
- alignItems: center
- borderBottom (or gap between items)
- Shortcut badges: small square, gray background.

### Tab Navigation
- display: flex
- gap: 16px
- Active tab: blue background (e.g. `rgba(59, 130, 246, 0.1)`) with blue border/text.
- Inactive tabs: transparent background, gray text.
