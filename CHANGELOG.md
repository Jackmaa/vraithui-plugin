# Changelog

All notable changes to VraithUI will be documented in this file.

## [0.2.0] - 2024-11-15

### 🎉 Major Features

#### Runtime JavaScript Helpers
- **NEW:** Complete runtime helper library (`vraithui/runtime`)
- Auto-initialization for all interactive components
- Event-driven architecture with custom events
- Support for modals, dropdowns, drawers, command palette, tabs, accordion
- Built-in toast notification system with auto-dismiss
- Theme switcher with localStorage persistence

#### TypeScript Support
- **NEW:** Full TypeScript definitions included
- Type-safe API for all runtime helpers
- Typed theme names and component options
- Custom event types for better DX
- Autocomplete support in VS Code and other IDEs

### ✨ New Components

- **FAB (Floating Action Button)** - Material Design inspired floating button
  - Position variants: `fab-bottom-right`, `fab-bottom-left`, `fab-top-right`, `fab-top-left`
  - Size variants: `fab-sm`, `fab-lg`
  - Extended variant with labels: `fab-extended`
  - Color variants: `fab-secondary`, `fab-accent`

- **Kbd (Keyboard Shortcuts)** - Display keyboard shortcuts beautifully
  - Size variants: `kbd-sm`, `kbd-lg`
  - Monospace font with subtle shadow
  - Perfect for documentation and command palettes

- **Sheet (Bottom/Side Sheet)** - Mobile-first slide-in panels
  - Bottom sheet (default) and side sheet variants
  - Handles for mobile gestures
  - Header, body, and footer sections
  - Backdrop with blur effect

### 🔥 Component Improvements

#### Buttons
- **NEW:** Semantic color variants: `btn-success`, `btn-error`, `btn-warning`, `btn-info`
- **NEW:** Icon button variant: `btn-icon` with size support
- **NEW:** Loading state: `btn-loading` with spinner animation
- **NEW:** Button groups: `btn-group` and `btn-group-vertical`
- Improved hover and active states
- Better disabled state styling

#### Cards
- **NEW:** `card-subtitle` for secondary text
- **NEW:** `card-image-top` for hero images
- **NEW:** `card-compact` variant for tighter padding
- **NEW:** `card-bordered` with emphasized borders
- **NEW:** `card-hover` with lift effect
- **NEW:** `card-glass` with glassmorphism effect
- **NEW:** `card-flat` without shadow
- Smooth transitions on all variants

#### Forms & Inputs
- **NEW:** Validation states: `input-error`, `input-success`, `input-warning`
- **NEW:** Input groups: `input-group` with buttons and text addons
- **NEW:** Float labels: `input-float` for Material Design style
- **NEW:** Form helpers: `form-group`, `form-label`, `form-help`, `form-error`
- **NEW:** Required indicator: `form-label-required`
- **NEW:** Size variants: `input-sm`, `input-lg`
- Improved focus states across all themes
- Better color inheritance from theme variables

### 🎨 Architecture Improvements

#### Code Organization
- **FIXED:** Moved inline utilities from `plugin.js` to `semanticUtilities.js`
- **FIXED:** Removed duplicate `::before` definition in modal component
- **FIXED:** Consolidated semantic color utilities
- Cleaner, more maintainable code structure
- Better separation of concerns

#### Semantic Utilities
- Added `bg-primary`, `text-primary`, `border-primary`
- Added `bg-secondary`, `text-secondary`, `border-secondary`
- All semantic utilities now in dedicated file
- Consistent naming across all utilities

### 📦 Package Improvements

- **NEW:** Dual exports: main plugin + runtime helpers
- **NEW:** TypeScript definitions for both exports
- **NEW:** Showcase scripts: `npm run showcase:build` and `showcase:watch`
- Updated package.json with proper ESM exports
- Better documentation and examples

### 🎨 Showcase Website

- **NEW:** Beautiful landing page with hero section
- **NEW:** Interactive theme switcher
- **NEW:** Component gallery with live examples
- **NEW:** Installation guide with code snippets
- **NEW:** Feature highlights section
- Modern, responsive design showcasing all themes
- Built with VraithUI itself (dogfooding)

### 📚 Documentation

- **UPDATED:** Comprehensive README with all 51 components
- **NEW:** Usage examples for all new components
- **NEW:** Runtime API documentation
- **NEW:** TypeScript usage guide
- **NEW:** Event system documentation
- **NEW:** Custom theme creation guide
- Improved code examples with syntax highlighting

### 🐛 Bug Fixes

- Fixed duplicate modal backdrop definition
- Fixed inconsistent utility organization
- Fixed theme variable inheritance in dark mode
- Improved input color contrast in all themes

### ⚡ Performance

- Zero-runtime CSS (only styling, no JS required)
- Tree-shakeable components
- Minimal bundle size impact
- Optimized CSS output with Tailwind

---

## [0.1.0] - 2024-10-XX

### Initial Release

- 48 base components
- 16 stunning themes
- Semantic color system with CSS variables
- Responsive, mobile-first design
- Compatible with Tailwind CSS v3+

---

## Contributing

Found a bug? Want to contribute? Check out our [GitHub repository](https://github.com/yourname/vraithui)!
