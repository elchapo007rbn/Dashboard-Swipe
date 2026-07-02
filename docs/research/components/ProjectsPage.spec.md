# Projects Page Specification

## Overview
- **Target file:** `src/app/projects/page.tsx`
- **Interaction model:** click-driven

## DOM Structure
- `<main>`
  - Header Section: Title "Projects", Subtitle
  - Toolbar: Search input, Sort by, Create Project button
  - Grid: Project Cards (Auraly Trend - Feitos, Lua e Signos, Tarot)

## Computed Styles
- backgroundColor: rgb(250, 250, 250)
- padding: 40px
- paddingLeft: 60px
- gap: 24px
- display: flex
- flexDirection: column

### Card
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgba(212, 212, 216, 0.5)
- borderRadius: 12px
- padding: 24px
- width: ~300px
- boxShadow: 0 1px 3px rgba(0,0,0,0.05)
