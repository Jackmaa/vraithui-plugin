export default function cardComponent() {
  return {
    '.card': {
      borderRadius: 'var(--radius-card)',
      borderWidth: '1px',
      borderColor: 'rgb(0 0 0 / .08)',
      backgroundColor: 'rgb(var(--bg) / 1)',
      color: 'rgb(var(--fg) / 1)',
      padding: '1rem',
      boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)'
    },
    '.card-body': { display: 'grid', gap: '.5rem' },
    '.card-title': { fontWeight: '700', fontSize: '1.125rem' },
    '.card-actions': { marginTop: '.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', justifyContent: 'flex-end' }
  }
}
