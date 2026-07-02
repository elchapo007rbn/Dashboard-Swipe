# Scripts Page Specification

## Overview
- **Target file:** `src/app/scripts/page.tsx`
- **Interaction model:** click-driven list

## DOM Structure
- `<main>`
  - Header Section: Title "Scripts", Subtitle "Write high-performing scripts backed by proven storytelling frameworks"
  - Toolbar: 
    - Search input ("Search scripts", width ~400px)
    - Action buttons on the right: "Export" (cloud-download icon), "New Script" (plus-circle icon)
  - Data Table / List:
    - Table Header: "Name", "Created" (with sort arrow)
    - Table Rows: 
      - Script title (e.g., "Breakup Clarity and Future Love", "Soulmate")
      - Date (e.g., "Jun 28, 2026")

## Computed Styles
- Layout wrapper matches Projects page (flex column, padding, gray background).
- Toolbar uses flexbox with space-between.
- Table uses standard borders, white background, rounded corners. Table rows have subtle hover states and bottom borders.
