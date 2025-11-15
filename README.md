# VraithUI

A beautiful, themeable Tailwind CSS plugin with **51 components**, **16 stunning themes**, and full **TypeScript** support.

![Version](https://img.shields.io/badge/version-0.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## ✨ Features

- 🎨 **51 Beautiful Components** - Buttons, forms, cards, modals, and more
- 🌈 **16 Stunning Themes** - Dark, light, cyberpunk, luxury, and many more
- 🔧 **Runtime Helpers** - JavaScript utilities for interactive components
- 📘 **TypeScript Support** - Full type definitions included
- ⚡ **Zero Runtime** - Pure CSS, no JavaScript required for styling
- ♿ **Accessible** - ARIA attributes and keyboard navigation
- 📱 **Responsive** - Mobile-first design
- 🎯 **Tailwind Native** - Works seamlessly with Tailwind CSS

## 🚀 Quick Start

### Installation

```bash
npm install -D vraithui tailwindcss
```

### Configuration

**Tailwind v3:**
```js
// tailwind.config.js
const vraithui = require('vraithui').default

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue,jsx,tsx}'],
  plugins: [vraithui]
}
```

**Tailwind v4:**
```css
@import "tailwindcss";
@plugin "vraithui";
```

### Optional: Runtime Helpers

For interactive components (modals, dropdowns, etc.), import the runtime helpers:

```js
import VraithUI from 'vraithui/runtime'

// Components will auto-initialize, or manually:
VraithUI.init()
```

## 📦 Components

### Buttons
- Base button with variants (primary, secondary, ghost, outline)
- Semantic variants (success, error, warning, info)
- Icon buttons
- Loading states
- Button groups (horizontal and vertical)
- Size variants (sm, lg)

### Forms & Inputs
- Text inputs with validation states (error, success, warning)
- Input groups (combine inputs with buttons/text)
- Float labels
- Form groups with labels and help text
- Size variants

### Cards
- Base card with title, subtitle, body, and actions
- Variants: hover, bordered, compact, glass, flat
- Image support

### Navigation
- Navbar with sticky variant
- Tabs (horizontal and vertical)
- Breadcrumbs
- Pagination
- Sidebar navigation
- Steps

### Overlays
- **Modal** - with backdrop and close handlers
- **Drawer** - slide-in panels from any side
- **Dropdown** - with nested support and positioning
- **Sheet** - bottom/side sheets for mobile
- **Command Palette** - searchable command menu
- Popover
- Tooltip

### Feedback
- **Alerts** - info, success, warning, error
- **Toast** - notification system with auto-dismiss
- Progress bars
- Skeleton loaders
- Badges
- Notifications

### Data Display
- Tables
- Data Grid
- Stats
- Timeline
- Tree View
- Calendar
- Empty State

### Form Components
- Rating
- Slider
- Range Input
- File Upload
- Date Picker
- Time Picker
- Color Picker
- Tag Input
- Multi-Select

### Utilities & Extras
- **FAB** (Floating Action Button) - with positioning
- **Kbd** - keyboard shortcut display
- Avatar
- Chip
- Divider
- Accordion
- Carousel
- Backdrop

## 🎨 Themes

VraithUI comes with 16 beautiful pre-built themes. Switch themes instantly by setting the `data-theme` attribute:

```html
<html data-theme="dark">
```

### Available Themes

**Light Themes:**
- `default` - Clean and modern
- `brand` - Orange and sky
- `pastel` - Soft and dreamy
- `neutral` - Monochrome elegance
- `mystic-jade` - Jade and violet

**Dark Themes:**
- `dark` - Indigo and teal
- `brand-dark` - Dark brand theme
- `luxury` - Gold and black
- `cyberpunk` - Neon fuchsia and cyan
- `velvet-charcoal` - Cream on charcoal
- `persian-plum` - Pink on deep red
- `bordeaux-silk` - Silver on bordeaux
- `regal-gold` - Gold on onyx
- `velvet-indigo` - Platinum on indigo
- `deep-jungle` - Olive on jungle green
- `crimson-peach` - Peach on crimson
- `imperial-blue` - Vintage rose on blue
- `oxford-maize` - Maize on oxford blue
- `rich-black` - Vivid yellow on black
- `lush-merlot` - Gold on merlot

### Using the Theme Switcher

With runtime helpers:

```js
import VraithUI from 'vraithui/runtime'

// Set a theme
VraithUI.theme.set('cyberpunk')

// Get current theme
const current = VraithUI.theme.get()

// Toggle between themes
VraithUI.theme.toggle(['dark', 'light'])
```

## 📘 Usage Examples

### Button

```html
<button class="btn btn-primary">
  Primary Button
</button>

<button class="btn btn-primary btn-loading">
  Loading...
</button>

<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-outline">Center</button>
  <button class="btn btn-outline">Right</button>
</div>
```

### Card

```html
<div class="card card-hover">
  <img src="image.jpg" class="card-image-top" alt="">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Subtitle text</p>
    <p>Card content goes here...</p>
    <div class="card-actions">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Forms

```html
<div class="form-group">
  <label class="form-label form-label-required">Email</label>
  <input type="email" class="input" placeholder="you@example.com">
  <span class="form-help">We'll never share your email</span>
</div>

<!-- With validation -->
<div class="form-group">
  <label class="form-label">Password</label>
  <input type="password" class="input input-error" placeholder="••••••••">
  <span class="form-error">Password must be at least 8 characters</span>
</div>

<!-- Input group -->
<div class="input-group">
  <span class="input-group-text">https://</span>
  <input type="text" class="input" placeholder="example.com">
  <button class="btn btn-primary">Go</button>
</div>
```

### Modal

```html
<div id="myModal" class="modal" data-open="false">
  <div class="modal-box">
    <button class="btn btn-ghost modal-close" data-close>✕</button>
    <h3 class="modal-title">Modal Title</h3>
    <p>Modal content goes here...</p>
    <div class="modal-actions">
      <button class="btn" data-close>Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>

<button onclick="VraithUI.modal.open('myModal')">Open Modal</button>
```

### Toast Notifications

```js
import VraithUI from 'vraithui/runtime'

// Show a toast
VraithUI.toast.success('Changes saved successfully!', {
  duration: 3000,
  position: 'top-right'
})

VraithUI.toast.error('Something went wrong!', {
  duration: 5000,
  dismissible: true
})
```

### FAB (Floating Action Button)

```html
<button class="fab fab-bottom-right fab-primary">
  <svg><!-- icon --></svg>
</button>

<!-- Extended FAB with label -->
<button class="fab fab-extended fab-bottom-right">
  <svg><!-- icon --></svg>
  <span>Create New</span>
</button>
```

### Kbd (Keyboard Shortcuts)

```html
<p>Press <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd> to open command palette</p>
```

## 🔧 Runtime API

### Modal

```js
VraithUI.modal.open('modalId')      // Open modal
VraithUI.modal.close('modalId')     // Close modal
VraithUI.modal.toggle('modalId')    // Toggle modal
```

### Dropdown

```js
VraithUI.dropdown.open('dropdownId')
VraithUI.dropdown.close('dropdownId')
VraithUI.dropdown.toggle('dropdownId')
VraithUI.dropdown.closeAll()
```

### Toast

```js
VraithUI.toast.show(message, options)
VraithUI.toast.info(message, options)
VraithUI.toast.success(message, options)
VraithUI.toast.warning(message, options)
VraithUI.toast.error(message, options)
VraithUI.toast.dismiss(toastElement)
```

### Theme

```js
VraithUI.theme.set(themeName)
VraithUI.theme.get()
VraithUI.theme.toggle([theme1, theme2])
```

### Events

All components dispatch custom events:

```js
document.addEventListener('modal:open', (e) => {
  console.log('Modal opened:', e.detail.modal)
})

document.addEventListener('theme:change', (e) => {
  console.log('Theme changed to:', e.detail.theme)
})
```

Available events:
- `modal:open`, `modal:close`
- `dropdown:open`, `dropdown:close`
- `drawer:open`, `drawer:close`
- `commandpalette:open`, `commandpalette:close`
- `toast:show`, `toast:dismiss`
- `tab:activate`
- `accordion:open`, `accordion:close`
- `theme:change`
- `vraithui:ready`

## 🎯 TypeScript

VraithUI includes full TypeScript definitions:

```typescript
import VraithUI, { ToastOptions, VraithUITheme } from 'vraithui/runtime'

const options: ToastOptions = {
  type: 'success',
  duration: 3000,
  position: 'top-right'
}

VraithUI.toast.show('Hello!', options)

// Typed theme names
const theme: VraithUITheme = 'cyberpunk'
VraithUI.theme.set(theme)
```

## 🎨 Customization

### Creating Custom Themes

Add your custom theme in your CSS:

```css
[data-theme="my-theme"] {
  --p: 123 45 67;           /* primary */
  --pc: 255 255 255;        /* primary-content */
  --s: 89 123 45;           /* secondary */
  --sc: 0 0 0;              /* secondary-content */
  --bg: 255 255 255;        /* background */
  --fg: 0 0 0;              /* foreground */
  --panel: 243 244 246;     /* panel background */
  --panel-2: 229 231 235;   /* panel secondary */
  --accent: 123 45 67;      /* accent */
  --border: 0 0 0 / 0.1;    /* border color */

  /* Semantic colors */
  --in: 59 130 246;         /* info */
  --su: 34 197 94;          /* success */
  --wa: 234 179 8;          /* warning */
  --er: 239 68 68;          /* error */

  /* Shape */
  --rounded: .75rem;
  --radius-btn: .75rem;
  --radius-card: .75rem;
}
```

### Extending Components

You can extend any component using Tailwind's `@apply`:

```css
@layer components {
  .btn-custom {
    @apply btn bg-gradient-to-r from-purple-500 to-pink-500;
  }
}
```

## 📚 Documentation

Full documentation with interactive examples: [View Showcase](./showcase/index.html)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

**Valentin (Vraith)**

---

Made with ❤️ and Tailwind CSS
