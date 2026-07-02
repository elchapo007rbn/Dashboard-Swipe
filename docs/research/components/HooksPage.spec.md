# Hooks Page Specification

## Overview
- **Target file:** `src/app/hooks/page.tsx`
- **Interaction model:** list view with sections

## DOM Structure
- `<main>`
  - Header: Title "Hooks", Subtitle "Manage your vault of viral hooks"
  - Toolbar:
    - Search input ("Search by hook or channel")
    - "Create from video" button (with icon)
    - Right-aligned controls: "Showing format" (toggle switch), "Sort by" (arrow icon), "Export" (cloud icon)
  - List Sections: e.g. "YOUR FAVORITE HOOKS - 6", "HOOKS FROM YOUR ANALYZED VIDEOS - 6" (uppercase, gray text, small)
  - List Items (Cards):
    - Layout: flex row, white bg, rounded borders.
    - Left side: small square thumbnail image.
    - Middle: Hook text (often containing bracketed placeholders `[like this]`), "Inspired by @username" subtext, and sometimes a "Copy hook" button.
    - Right side (flex gap): Category badge (purple bg, e.g. "Scenario Hypothetical"), Multiplier badge (green bg, e.g. "688.4x"), Views badge (blue bg, e.g. "259K"), Heart icon button (red if favorite, gray outline if not).

## Computed Styles
- Layout wrapper matches Projects page (flex column, padding).
- List items have padding, border, and center-align items vertically.
