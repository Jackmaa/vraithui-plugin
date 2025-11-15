# Contributing to VraithUI

Thank you for considering contributing to VraithUI! This document will guide you through the contribution process.

## 🚀 Getting Started

### Development Setup

1. **Fork and clone the repository**
```bash
git clone https://github.com/yourname/vraithui.git
cd vraithui
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the showcase in watch mode**
```bash
npm run showcase:watch
```

4. **Open `showcase/index.html` in your browser**

## 📁 Project Structure

```
vraithui/
├── src/
│   ├── components/      # Component definitions
│   ├── themes.js        # Theme definitions
│   ├── semanticUtilities.js  # Semantic color utilities
│   ├── utilities.js     # Extended utilities
│   ├── plugin.js        # Main plugin file
│   ├── runtime.js       # JavaScript helpers
│   └── runtime.d.ts     # TypeScript definitions
├── showcase/            # Demo website
├── index.d.ts          # Main TypeScript definitions
└── package.json
```

## 🎨 Adding a New Component

### 1. Create the component file

```bash
touch src/components/myComponent.js
```

### 2. Define the component

```javascript
// src/components/myComponent.js
export default function myComponent() {
  return {
    '.my-component': {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      padding: '1rem',
      borderRadius: 'var(--rounded)',
      backgroundColor: 'rgb(var(--bg))',
      color: 'rgb(var(--fg))',
    },

    '.my-component-variant': {
      backgroundColor: 'rgb(var(--p))',
      color: 'rgb(var(--pc))',
    }
  }
}
```

### 3. Register in plugin.js

```javascript
// src/plugin.js
import myComponent from "./components/myComponent.js";

// In the plugin function:
addComponents(myComponent());
```

### 4. Add TypeScript definitions (optional)

```typescript
// index.d.ts
export interface VraithUIComponents {
  // ... existing components
  'my-component': string;
  'my-component-variant': string;
}
```

### 5. Update documentation

Add usage examples to `README.md` and create a demo in `showcase/`.

## 🌈 Adding a New Theme

### 1. Add theme to themes.js

```javascript
// src/themes.js
export const themes = {
  // ... existing themes

  '[data-theme="my-theme"]': {
    "--p": "123 45 67",      // primary
    "--pc": "255 255 255",   // primary-content
    "--s": "89 123 45",      // secondary
    "--sc": "0 0 0",         // secondary-content
    "--bg": "255 255 255",   // background
    "--fg": "0 0 0",         // foreground
    "--panel": "243 244 246",
    "--panel-2": "229 231 235",
    "--accent": "123 45 67",
    "--border": "0 0 0 / 0.1",

    // Semantic colors
    "--in": "59 130 246",
    "--su": "34 197 94",
    "--wa": "234 179 8",
    "--er": "239 68 68",

    // Shape
    "--rounded": ".75rem",
    "--radius-btn": ".75rem",
    "--radius-card": ".75rem",
  }
}
```

### 2. Add to TypeScript definitions

```typescript
// index.d.ts
export type VraithUITheme =
  // ... existing themes
  | 'my-theme';
```

### 3. Update documentation

Add the theme to the README theme list and showcase.

## 🔧 Runtime Helpers

### Adding a new helper method

```javascript
// src/runtime.js
export const VraithUI = {
  // ... existing helpers

  myFeature: {
    doSomething: (param) => {
      // Implementation
      document.dispatchEvent(new CustomEvent('myfeature:action', {
        detail: { param }
      }));
    },
    init: () => {
      // Initialize event listeners
    }
  }
}

// Don't forget to call init in VraithUI.init()
```

### Adding TypeScript types for helpers

```typescript
// src/runtime.d.ts
export interface MyFeatureHelpers {
  doSomething: (param: string) => void;
  init: () => void;
}

export interface VraithUIInstance {
  // ... existing helpers
  myFeature: MyFeatureHelpers;
}
```

## ✅ Code Style Guidelines

### CSS/Component Style

- Use semantic variable names from the theme
- Prefer `rgb(var(--p))` over hardcoded colors
- Use `rem` units for sizing
- Add transitions for interactive elements
- Support dark mode via theme variables
- Follow existing naming conventions

### JavaScript Style

- Use ES6+ features (const, arrow functions, etc.)
- Dispatch custom events for state changes
- Add JSDoc comments for public APIs
- Handle edge cases gracefully
- Support both string IDs and HTML elements

### TypeScript

- Provide complete type definitions
- Use descriptive type names
- Export interfaces for public APIs
- Document complex types with comments

## 🧪 Testing

Before submitting a PR:

1. **Visual testing**: Test your component in multiple themes
2. **Responsive testing**: Check mobile, tablet, and desktop
3. **Browser testing**: Test in Chrome, Firefox, Safari
4. **Accessibility**: Ensure keyboard navigation works
5. **TypeScript**: Verify types are correct

## 📝 Pull Request Process

1. **Create a feature branch**
```bash
git checkout -b feature/my-new-feature
```

2. **Make your changes**
- Follow the code style guidelines
- Add/update documentation
- Test thoroughly

3. **Commit your changes**
```bash
git add .
git commit -m "Add my new feature

- Added X component
- Updated Y theme
- Fixed Z issue"
```

4. **Push to your fork**
```bash
git push origin feature/my-new-feature
```

5. **Open a Pull Request**
- Provide a clear title and description
- Reference any related issues
- Include screenshots for visual changes
- Update CHANGELOG.md

## 🐛 Bug Reports

When reporting bugs, please include:

- VraithUI version
- Tailwind CSS version
- Browser and OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 💡 Feature Requests

When requesting features:

- Explain the use case
- Provide examples or mockups
- Consider if it fits VraithUI's philosophy
- Check if it's already possible with existing features

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help create a welcoming environment

## 🎯 Component Design Principles

When creating components:

1. **Themeable**: Use CSS variables, never hardcode colors
2. **Composable**: Allow combining with Tailwind utilities
3. **Accessible**: Include proper ARIA attributes
4. **Responsive**: Mobile-first approach
5. **Consistent**: Follow existing naming patterns
6. **Minimal**: Only essential styles, let Tailwind handle the rest

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [daisyUI](https://daisyui.com/) - Inspiration for this project
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/) - Accessibility guidelines

## ❓ Questions?

Feel free to open an issue for questions or join our community discussions!

---

Thank you for contributing to VraithUI! 🎉
