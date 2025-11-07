// src/components/chip.js
export default function chipComponent() {
  return {
    /* Chip base */
    ".chip": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".375rem",
      padding: ".375rem .75rem",
      fontSize: ".875rem",
      fontWeight: "500",
      lineHeight: "1",
      borderRadius: "9999px",
      backgroundColor: "rgb(var(--fg) / 0.08)",
      color: "rgb(var(--fg) / 1)",
      border: "1px solid transparent",
      transition: "all 0.2s ease",
    },

    /* Clickable chip */
    ".chip-clickable": {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.12)",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    },

    /* Chip with close button */
    ".chip-close": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1rem",
      height: "1rem",
      marginLeft: ".125rem",
      marginRight: "-.25rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.15)",
      },
    },

    /* Color variants */
    ".chip-primary": {
      backgroundColor: "rgb(var(--p) / 0.15)",
      color: "rgb(var(--p) / 1)",
      borderColor: "rgb(var(--p) / 0.3)",
    },

    ".chip-primary.chip-clickable:hover": {
      backgroundColor: "rgb(var(--p) / 0.25)",
    },

    ".chip-secondary": {
      backgroundColor: "rgb(var(--s) / 0.15)",
      color: "rgb(var(--s) / 1)",
      borderColor: "rgb(var(--s) / 0.3)",
    },

    ".chip-secondary.chip-clickable:hover": {
      backgroundColor: "rgb(var(--s) / 0.25)",
    },

    ".chip-success": {
      backgroundColor: "rgb(var(--su, 34 197 94) / 0.15)",
      color: "rgb(var(--su, 34 197 94) / 1)",
      borderColor: "rgb(var(--su, 34 197 94) / 0.3)",
    },

    ".chip-warning": {
      backgroundColor: "rgb(var(--wa, 245 158 11) / 0.15)",
      color: "rgb(var(--wa, 245 158 11) / 1)",
      borderColor: "rgb(var(--wa, 245 158 11) / 0.3)",
    },

    ".chip-error": {
      backgroundColor: "rgb(var(--er, 239 68 68) / 0.15)",
      color: "rgb(var(--er, 239 68 68) / 1)",
      borderColor: "rgb(var(--er, 239 68 68) / 0.3)",
    },

    /* Outlined variant */
    ".chip-outlined": {
      backgroundColor: "transparent",
      borderWidth: "1px",
      borderColor: "rgb(var(--fg) / 0.3)",
    },

    ".chip-outlined.chip-primary": {
      borderColor: "rgb(var(--p) / 0.5)",
      backgroundColor: "transparent",
    },

    ".chip-outlined.chip-clickable:hover": {
      backgroundColor: "rgb(var(--fg) / 0.05)",
    },

    /* Sizes */
    ".chip-sm": {
      padding: ".25rem .5rem",
      fontSize: ".75rem",
    },

    ".chip-sm .chip-close": {
      width: ".75rem",
      height: ".75rem",
    },

    ".chip-lg": {
      padding: ".5rem 1rem",
      fontSize: "1rem",
    },

    ".chip-lg .chip-close": {
      width: "1.25rem",
      height: "1.25rem",
    },

    /* With avatar */
    ".chip-avatar": {
      paddingLeft: ".25rem",
    },

    ".chip-avatar-img": {
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
      objectFit: "cover",
      marginLeft: "-.25rem",
    },

    ".chip-sm .chip-avatar-img": {
      width: "1.25rem",
      height: "1.25rem",
    },

    ".chip-lg .chip-avatar-img": {
      width: "2rem",
      height: "2rem",
    },

    /* With icon */
    ".chip-icon": {
      width: "1rem",
      height: "1rem",
      marginLeft: "-.125rem",
    },

    /* Selected state */
    '.chip[data-selected="true"]': {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      borderColor: "rgb(var(--p) / 1)",
    },

    /* Chip group */
    ".chip-group": {
      display: "flex",
      flexWrap: "wrap",
      gap: ".5rem",
      alignItems: "center",
    },

    /* Disabled state */
    ".chip-disabled": {
      opacity: "0.5",
      pointerEvents: "none",
    },
  };
}
