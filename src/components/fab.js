// src/components/fab.js
export default function fabComponent() {
  return {
    /* ========== FLOATING ACTION BUTTON ========== */
    ".fab": {
      position: "fixed",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "3.5rem",
      height: "3.5rem",
      padding: "0",
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "rgb(var(--pc))",
      backgroundColor: "rgb(var(--p))",
      border: "none",
      borderRadius: "9999px",
      boxShadow: "0 4px 12px rgb(var(--p) / 0.4), 0 2px 4px rgb(0 0 0 / 0.1)",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: "40",

      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0 8px 20px rgb(var(--p) / 0.5), 0 4px 8px rgb(0 0 0 / 0.15)",
      },

      "&:active": {
        transform: "scale(0.95)",
      },

      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
    },

    /* Position variants */
    ".fab-bottom-right": {
      bottom: "1.5rem",
      right: "1.5rem",
    },

    ".fab-bottom-left": {
      bottom: "1.5rem",
      left: "1.5rem",
    },

    ".fab-top-right": {
      top: "1.5rem",
      right: "1.5rem",
    },

    ".fab-top-left": {
      top: "1.5rem",
      left: "1.5rem",
    },

    /* Size variants */
    ".fab-sm": {
      width: "2.75rem",
      height: "2.75rem",
      fontSize: "1.125rem",
    },

    ".fab-lg": {
      width: "4.5rem",
      height: "4.5rem",
      fontSize: "2rem",
    },

    /* Extended FAB with label */
    ".fab-extended": {
      width: "auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      gap: "0.5rem",
      borderRadius: "1.5rem",
    },

    /* Color variants */
    ".fab-secondary": {
      backgroundColor: "rgb(var(--s))",
      color: "rgb(var(--sc))",
      boxShadow: "0 4px 12px rgb(var(--s) / 0.4), 0 2px 4px rgb(0 0 0 / 0.1)",

      "&:hover": {
        boxShadow: "0 8px 20px rgb(var(--s) / 0.5), 0 4px 8px rgb(0 0 0 / 0.15)",
      },
    },

    ".fab-accent": {
      backgroundColor: "rgb(var(--accent))",
      color: "rgb(var(--pc))",
      boxShadow: "0 4px 12px rgb(var(--accent) / 0.4), 0 2px 4px rgb(0 0 0 / 0.1)",

      "&:hover": {
        boxShadow: "0 8px 20px rgb(var(--accent) / 0.5), 0 4px 8px rgb(0 0 0 / 0.15)",
      },
    },
  };
}
