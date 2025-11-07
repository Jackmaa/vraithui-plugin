# VraithUI (starter)

A minimal Tailwind CSS plugin inspired by daisyUI: semantic design tokens, switchable themes, and a small set of ready-to-use components (`.btn`, `.card`, `.badge`, `.input`, `.modal`, `.navbar`).

## Features
- **Design tokens** via CSS variables (primary, secondary, etc.).
- **Themes**: switch with `data-theme="dark"` (extend with your own themes).
- **Components**: `.btn` (variants), `.card`, `.badge`, `.input`, **`.modal`**, **`.navbar`**.
- **Semantic utilities**: `bg-primary`, `text-primary`, `border-primary`.

## Install
```bash
npm i -D vraithui
npm i -D tailwindcss
```

## Usage (Tailwind v3)
```js
// tailwind.config.cjs
const vraithui = require('vraithui').default
module.exports = { content: ['./src/**/*.{html,js,ts,vue,jsx,tsx}'], plugins: [vraithui] }
```

## Usage (Tailwind v4)
```css
@import "tailwindcss";
@plugin "vraithui";
```

## Modal
```html
<div id="myModal" class="modal" data-open="false">
  <div class="modal-box">
    <button class="btn btn-ghost modal-close" data-close>✕</button>
    <h3 class="modal-title">Hello!</h3>
    <p>Content…</p>
    <div class="modal-actions">
      <button class="btn" data-close>Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```
Toggle with JS: `document.getElementById('myModal').setAttribute('data-open', 'true')`.

## Navbar
```html
<nav class="navbar navbar-sticky">
  <div class="navbar-start"><span class="navbar-brand">VraithUI</span></div>
  <div class="navbar-center hidden md:flex gap-3">
    <a class="btn btn-ghost">Docs</a>
    <a class="btn btn-ghost">Components</a>
  </div>
  <div class="navbar-end"><button class="btn btn-primary">Get started</button></div>
</nav>
```

## New components (v0.2.0)
- **Navbar**: `.navbar` with `.navbar-start|center|end`, sticky variant `.navbar-sticky`.
- **Modal**: `.modal` (toggle `data-open="true"`), `.modal-box`, `.modal-title`, `.modal-actions`.