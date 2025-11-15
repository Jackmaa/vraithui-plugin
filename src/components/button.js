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

    /* Semantic variants */
    '.btn-success': { backgroundColor: 'rgb(var(--su) / 1)', color: '#fff', borderColor: 'rgb(var(--su) / 1)' },
    '.btn-error': { backgroundColor: 'rgb(var(--er) / 1)', color: '#fff', borderColor: 'rgb(var(--er) / 1)' },
    '.btn-warning': { backgroundColor: 'rgb(var(--wa) / 1)', color: '#000', borderColor: 'rgb(var(--wa) / 1)' },
    '.btn-info': { backgroundColor: 'rgb(var(--in) / 1)', color: '#fff', borderColor: 'rgb(var(--in) / 1)' },

    /* Layout variants */
    '.btn-block': { display: 'flex', width: '100%' },
    '.btn-icon': {
      width: '2.5rem',
      height: '2.5rem',
      padding: '0',
      justifyContent: 'center',
      flexShrink: '0'
    },

    /* Size variants */
    '.btn-sm': { padding: '.5rem .75rem', fontSize: '.875rem' },
    '.btn-lg': { padding: '.875rem 1.25rem', fontSize: '1rem' },
    '.btn-icon.btn-sm': { width: '2rem', height: '2rem' },
    '.btn-icon.btn-lg': { width: '3rem', height: '3rem' },

    /* Loading state */
    '.btn-loading': {
      position: 'relative',
      pointerEvents: 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        backgroundColor: 'inherit',
        borderRadius: 'inherit'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '1rem',
        height: '1rem',
        marginLeft: '-0.5rem',
        marginTop: '-0.5rem',
        border: '2px solid currentColor',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'vraithui-spin 0.6s linear infinite'
      }
    },

    /* Button group */
    '.btn-group': {
      display: 'inline-flex',
      borderRadius: 'var(--radius-btn)',
      boxShadow: '0 1px 2px rgb(0 0 0 / 0.06)',
      '& .btn': {
        borderRadius: '0',
        marginLeft: '-1px',
        '&:first-child': {
          borderTopLeftRadius: 'var(--radius-btn)',
          borderBottomLeftRadius: 'var(--radius-btn)',
          marginLeft: '0'
        },
        '&:last-child': {
          borderTopRightRadius: 'var(--radius-btn)',
          borderBottomRightRadius: 'var(--radius-btn)'
        },
        '&:hover': {
          zIndex: '1'
        }
      }
    },
    '.btn-group-vertical': {
      display: 'inline-flex',
      flexDirection: 'column',
      '& .btn': {
        borderRadius: '0',
        marginTop: '-1px',
        '&:first-child': {
          borderTopLeftRadius: 'var(--radius-btn)',
          borderTopRightRadius: 'var(--radius-btn)',
          marginTop: '0'
        },
        '&:last-child': {
          borderBottomLeftRadius: 'var(--radius-btn)',
          borderBottomRightRadius: 'var(--radius-btn)'
        }
      }
    },

    /* Spin animation */
    '@keyframes vraithui-spin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    }
  }
}
