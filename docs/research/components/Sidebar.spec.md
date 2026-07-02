# Sidebar Specification

## Overview
- **Target file:** `src/components/Sidebar.tsx`
- **Interaction model:** static / click-driven (navigation)

## DOM Structure
- `<aside>`
  - Header: Profile selector (PERFIL - MONGE)
  - Section "Research": Videos, Ideas, Hooks, Collections
  - Section "Create": Scripts, Projects, Exports
  - Section "Setup": Channels, Persona, Automations, Settings

## Computed Styles
- width: 250px
- backgroundColor: rgb(244, 244, 245)
- padding: 24px
- display: flex
- flexDirection: column
- gap: 16px

## States
- Active Item (`Projects`): backgroundColor: rgba(212, 212, 216, 0.5), borderRadius: 8px
- Hover Item: background changes slightly

## Assets
- Lucide Icons (Search, Video, Settings, etc.)
