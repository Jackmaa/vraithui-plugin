export default function inputComponent() {
  return {
    '.input': {
      appearance: 'none',
      width: '100%',
      borderRadius: 'var(--rounded)',
      borderWidth: '1px',
      borderColor: 'rgb(0 0 0 / 0.12)',
      backgroundColor: 'rgb(255 255 255 / 1)',
      color: 'rgb(15 23 42 / 1)',
      padding: '.625rem .875rem',
      lineHeight: '1.25',
      '&::placeholder': { color: 'rgb(100 116 139 / 1)' },
      '&:focus': {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        boxShadow: '0 0 0 3px rgb(var(--p) / 0.35)',
        borderColor: 'rgb(var(--p) / 1)'
      },
      '&[disabled]': { opacity: '0.5', pointerEvents: 'none' }
    },
    '[data-theme="dark"] .input': {
      backgroundColor: 'rgb(31 41 55 / 1)',
      color: 'rgb(229 231 235 / 1)',
      borderColor: 'rgb(255 255 255 / 0.08)'
    }
  }
}
