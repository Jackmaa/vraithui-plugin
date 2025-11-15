export default function inputComponent() {
  return {
    '.input': {
      appearance: 'none',
      width: '100%',
      borderRadius: 'var(--rounded)',
      borderWidth: '1px',
      borderColor: 'rgb(0 0 0 / 0.12)',
      backgroundColor: 'rgb(var(--bg) / 1)',
      color: 'rgb(var(--fg) / 1)',
      padding: '.625rem .875rem',
      lineHeight: '1.25',
      fontSize: '.875rem',
      transition: 'all 0.2s ease',
      '&::placeholder': { color: 'rgb(var(--fg) / 0.5)' },
      '&:focus': {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        boxShadow: '0 0 0 3px rgb(var(--p) / 0.35)',
        borderColor: 'rgb(var(--p) / 1)'
      },
      '&[disabled]': { opacity: '0.5', pointerEvents: 'none', cursor: 'not-allowed' }
    },

    /* Validation states */
    '.input-error': {
      borderColor: 'rgb(var(--er) / 1)',
      '&:focus': {
        boxShadow: '0 0 0 3px rgb(var(--er) / 0.25)',
        borderColor: 'rgb(var(--er) / 1)'
      }
    },

    '.input-success': {
      borderColor: 'rgb(var(--su) / 1)',
      '&:focus': {
        boxShadow: '0 0 0 3px rgb(var(--su) / 0.25)',
        borderColor: 'rgb(var(--su) / 1)'
      }
    },

    '.input-warning': {
      borderColor: 'rgb(var(--wa) / 1)',
      '&:focus': {
        boxShadow: '0 0 0 3px rgb(var(--wa) / 0.25)',
        borderColor: 'rgb(var(--wa) / 1)'
      }
    },

    /* Input group */
    '.input-group': {
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
      '& .input': {
        borderRadius: '0',
        marginLeft: '-1px',
        '&:first-child': {
          borderTopLeftRadius: 'var(--rounded)',
          borderBottomLeftRadius: 'var(--rounded)',
          marginLeft: '0'
        },
        '&:last-child': {
          borderTopRightRadius: 'var(--rounded)',
          borderBottomRightRadius: 'var(--rounded)'
        },
        '&:focus': {
          zIndex: '1'
        }
      },
      '& .btn': {
        borderRadius: '0',
        flexShrink: '0',
        '&:first-child': {
          borderTopLeftRadius: 'var(--radius-btn)',
          borderBottomLeftRadius: 'var(--radius-btn)'
        },
        '&:last-child': {
          borderTopRightRadius: 'var(--radius-btn)',
          borderBottomRightRadius: 'var(--radius-btn)'
        }
      }
    },

    '.input-group-text': {
      display: 'flex',
      alignItems: 'center',
      padding: '.625rem .875rem',
      fontSize: '.875rem',
      fontWeight: '500',
      color: 'rgb(var(--fg) / 0.7)',
      backgroundColor: 'rgb(var(--panel))',
      borderWidth: '1px',
      borderColor: 'rgb(0 0 0 / 0.12)',
      borderRadius: '0',
      whiteSpace: 'nowrap',
      '&:first-child': {
        borderTopLeftRadius: 'var(--rounded)',
        borderBottomLeftRadius: 'var(--rounded)'
      },
      '&:last-child': {
        borderTopRightRadius: 'var(--rounded)',
        borderBottomRightRadius: 'var(--rounded)'
      }
    },

    /* Form group */
    '.form-group': {
      display: 'grid',
      gap: '.375rem',
      marginBottom: '1rem'
    },

    '.form-label': {
      fontSize: '.875rem',
      fontWeight: '600',
      color: 'rgb(var(--fg) / 0.9)',
      marginBottom: '.25rem'
    },

    '.form-label-required::after': {
      content: '" *"',
      color: 'rgb(var(--er))'
    },

    '.form-help': {
      fontSize: '.75rem',
      color: 'rgb(var(--fg) / 0.6)',
      marginTop: '.25rem'
    },

    '.form-error': {
      fontSize: '.75rem',
      color: 'rgb(var(--er))',
      marginTop: '.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '.25rem'
    },

    /* Float label variant */
    '.input-float': {
      position: 'relative',
      '& .input': {
        paddingTop: '1.25rem',
        paddingBottom: '.375rem'
      },
      '& .form-label': {
        position: 'absolute',
        left: '.875rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '.875rem',
        color: 'rgb(var(--fg) / 0.5)',
        pointerEvents: 'none',
        transition: 'all 0.2s ease',
        backgroundColor: 'rgb(var(--bg))',
        padding: '0 .25rem',
        margin: '0'
      },
      '& .input:focus ~ .form-label, & .input:not(:placeholder-shown) ~ .form-label': {
        top: '0',
        fontSize: '.625rem',
        color: 'rgb(var(--p))'
      }
    },

    /* Size variants */
    '.input-sm': {
      padding: '.5rem .75rem',
      fontSize: '.8125rem'
    },

    '.input-lg': {
      padding: '.875rem 1rem',
      fontSize: '1rem'
    },

    '[data-theme="dark"] .input': {
      borderColor: 'rgb(255 255 255 / 0.1)'
    },

    '[data-theme="dark"] .input-group-text': {
      borderColor: 'rgb(255 255 255 / 0.1)'
    }
  }
}
