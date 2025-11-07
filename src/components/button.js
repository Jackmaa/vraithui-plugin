export default function buttonComponent() {
  return {
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',
      fontWeight: '600',
      borderRadius: 'var(--radius-btn)',
      padding: '.625rem 1rem',
      lineHeight: '1',
      borderWidth: '1px',
      borderColor: 'transparent',
      backgroundColor: 'rgb(var(--fg) / 0.06)',
      color: 'rgb(var(--fg))',
      transitionProperty: 'transform, opacity, box-shadow, background-color, border-color, color',
      transitionDuration: '150ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 1px 2px rgb(0 0 0 / 0.06)',
      '&:hover': { opacity: '0.95' },
      '&:active': { transform: 'translateY(1px)' },
      '&:focus-visible': {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        boxShadow: '0 0 0 3px rgb(var(--p) / 0.35)'
      },
      '&[disabled], &.btn-disabled': { opacity: '0.5', pointerEvents: 'none' }
    },
    '.btn-primary': { backgroundColor: 'rgb(var(--p) / 1)', color: 'rgb(var(--pc) / 1)', borderColor: 'rgb(var(--p) / 1)' },
    '.btn-ghost': { backgroundColor: 'transparent', borderColor: 'rgb(var(--p) / 0.25)', color: 'rgb(var(--p) / 1)' },
    '.btn-outline': { backgroundColor: 'transparent', color: 'rgb(var(--fg) / 1)', borderColor: 'rgb(var(--fg) / 0.25)' },
    '.btn-secondary': { backgroundColor: 'rgb(var(--s) / 1)', color: 'rgb(var(--sc) / 1)', borderColor: 'rgb(var(--s) / 1)' },
    '.btn-block': { display: 'flex', width: '100%' },
    '.btn-sm': { padding: '.5rem .75rem', fontSize: '.875rem' },
    '.btn-lg': { padding: '.875rem 1.25rem', fontSize: '1rem' }
  }
}
