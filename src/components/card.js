export default function cardComponent() {
  return {
    '.card': {
      borderRadius: 'var(--radius-card)',
      borderWidth: '1px',
      borderColor: 'rgb(0 0 0 / .08)',
      backgroundColor: 'rgb(var(--bg) / 1)',
      color: 'rgb(var(--fg) / 1)',
      padding: '1rem',
      boxShadow: '0 1px 3px rgb(0 0 0 / 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    '.card-body': { display: 'grid', gap: '.5rem' },
    '.card-title': { fontWeight: '700', fontSize: '1.125rem', marginBottom: '.25rem' },
    '.card-subtitle': { fontSize: '.875rem', color: 'rgb(var(--fg) / 0.6)', marginTop: '-.25rem' },
    '.card-actions': { marginTop: '.75rem', display: 'flex', gap: '.5rem', alignItems: 'center', justifyContent: 'flex-end' },

    /* Card with image */
    '.card-image-top': {
      width: '100%',
      height: 'auto',
      borderTopLeftRadius: 'var(--radius-card)',
      borderTopRightRadius: 'var(--radius-card)',
      marginTop: '-1rem',
      marginLeft: '-1rem',
      marginRight: '-1rem',
      marginBottom: '1rem',
      maxWidth: 'calc(100% + 2rem)'
    },

    /* Variants */
    '.card-compact': {
      padding: '.75rem'
    },

    '.card-bordered': {
      borderWidth: '2px',
      borderColor: 'rgb(var(--fg) / 0.15)'
    },

    '.card-hover': {
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgb(0 0 0 / 0.15)',
        borderColor: 'rgb(var(--p) / 0.3)'
      }
    },

    '.card-glass': {
      backgroundColor: 'rgb(255 255 255 / 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgb(255 255 255 / 0.2)'
    },

    '.card-flat': {
      boxShadow: 'none',
      borderColor: 'rgb(var(--fg) / 0.08)'
    }
  }
}
