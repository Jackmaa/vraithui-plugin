export default function badgeComponent() {
  return {
    '.badge': {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: '600',
      lineHeight: '1',
      borderRadius: '9999px',
      padding: '.35rem .55rem',
      backgroundColor: 'rgb(var(--fg) / 0.06)',
      color: 'rgb(var(--fg) / 1)'
    },
    '.badge-primary': { backgroundColor: 'rgb(var(--p) / 0.15)', color: 'rgb(var(--p) / 1)' },
    '.badge-secondary': { backgroundColor: 'rgb(var(--s) / 0.15)', color: 'rgb(var(--s) / 1)' }
  }
}
