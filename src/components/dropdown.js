// src/components/dropdown.js
export default function dropdownComponent() {
  return {
    /* ========== DROPDOWN CONTAINER ========== */
    ".dropdown": {
      position: "relative",
      display: "inline-block",
    },

    /* Dropdown trigger button */
    ".dropdown-toggle": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".5rem",
      cursor: "pointer",
    },

    /* Dropdown menu */
    ".dropdown-menu": {
      position: "absolute",
      top: "calc(100% + .5rem)",
      left: "0",
      zIndex: "50",
      display: "none",
      minWidth: "12rem",
      padding: ".5rem",
      backgroundColor: "rgb(var(--bg) / 1)",
      borderRadius: "var(--radius-card)",
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.08)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      animation: "vraithui-dropdown-in 150ms ease",
    },

    /* Open state */
    '.dropdown[data-open="true"] .dropdown-menu': {
      display: "block",
    },

    /* Position variants */
    ".dropdown-right .dropdown-menu": {
      left: "auto",
      right: "0",
    },

    ".dropdown-top .dropdown-menu": {
      top: "auto",
      bottom: "calc(100% + .5rem)",
    },

    ".dropdown-center .dropdown-menu": {
      left: "50%",
      transform: "translateX(-50%)",
    },

    /* ========== DROPDOWN ITEMS ========== */
    ".dropdown-item": {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      width: "100%",
      padding: ".625rem .75rem",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.9)",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: ".375rem",
      textAlign: "left",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background-color 0.15s ease, color 0.15s ease",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.06)",
        color: "rgb(var(--fg) / 1)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        backgroundColor: "rgb(var(--fg) / 0.06)",
      },
    },

    /* Active item */
    ".dropdown-item-active": {
      backgroundColor: "rgb(var(--p) / 0.12)",
      color: "rgb(var(--p) / 1)",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.15)",
        color: "rgb(var(--p) / 1)",
      },
    },

    /* Disabled item */
    ".dropdown-item-disabled": {
      opacity: "0.5",
      pointerEvents: "none",
      cursor: "not-allowed",
    },

    /* Destructive item */
    ".dropdown-item-destructive": {
      color: "rgb(var(--er, 239 68 68) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--er, 239 68 68) / 0.12)",
        color: "rgb(var(--er, 239 68 68) / 1)",
      },
    },

    /* ========== DROPDOWN HEADER ========== */
    ".dropdown-header": {
      padding: ".5rem .75rem",
      fontSize: ".75rem",
      fontWeight: "600",
      color: "rgb(var(--fg) / 0.6)",
      textTransform: "uppercase",
      letterSpacing: ".025em",
    },

    /* ========== DROPDOWN DIVIDER ========== */
    ".dropdown-divider": {
      height: "1px",
      margin: ".5rem 0",
      backgroundColor: "rgb(0 0 0 / 0.08)",
    },

    /* ========== DROPDOWN ICON ========== */
    ".dropdown-icon": {
      width: "1.25rem",
      height: "1.25rem",
      flexShrink: "0",
      opacity: "0.7",
    },

    /* ========== DROPDOWN SHORTCUT ========== */
    ".dropdown-shortcut": {
      marginLeft: "auto",
      fontSize: ".75rem",
      color: "rgb(var(--fg) / 0.5)",
      fontFamily: "monospace",
    },

    /* ========== DROPDOWN BADGE ========== */
    ".dropdown-badge": {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "1.25rem",
      height: "1.25rem",
      padding: "0 .375rem",
      fontSize: ".625rem",
      fontWeight: "600",
      borderRadius: "9999px",
      backgroundColor: "rgb(var(--p) / 0.15)",
      color: "rgb(var(--p) / 1)",
    },

    /* ========== NESTED DROPDOWN ========== */
    ".dropdown-submenu": {
      position: "relative",
    },

    ".dropdown-submenu-toggle": {
      position: "relative",
      paddingRight: "2rem",
    },

    ".dropdown-submenu-toggle::after": {
      content: '""',
      position: "absolute",
      right: ".75rem",
      top: "50%",
      transform: "translateY(-50%) rotate(-90deg)",
      width: "0",
      height: "0",
      borderLeft: ".25rem solid transparent",
      borderRight: ".25rem solid transparent",
      borderTop: ".25rem solid currentColor",
    },

    ".dropdown-submenu .dropdown-menu": {
      top: "0",
      left: "calc(100% + .25rem)",
      display: "none",
    },

    ".dropdown-submenu:hover > .dropdown-menu": {
      display: "block",
    },

    /* ========== ANIMATIONS ========== */
    "@keyframes vraithui-dropdown-in": {
      from: {
        opacity: "0",
        transform: "translateY(-4px)",
      },
      to: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },

    /* Dark mode adjustments */
    '[data-theme="dark"] .dropdown-menu': {
      backgroundColor: "rgb(var(--bg) / 1)",
      borderColor: "rgb(255 255 255 / 0.08)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    },

    /* ========== SIZES ========== */
    ".dropdown-sm .dropdown-menu": {
      minWidth: "10rem",
      padding: ".375rem",
    },

    ".dropdown-sm .dropdown-item": {
      padding: ".5rem .625rem",
      fontSize: ".8125rem",
    },

    ".dropdown-lg .dropdown-menu": {
      minWidth: "16rem",
      padding: ".625rem",
    },

    ".dropdown-lg .dropdown-item": {
      padding: ".75rem 1rem",
      fontSize: ".9375rem",
    },

    /* ========== WITH SEARCH ========== */
    ".dropdown-search": {
      padding: ".5rem",
      marginBottom: ".25rem",
    },

    ".dropdown-search-input": {
      width: "100%",
      padding: ".5rem .75rem",
      fontSize: ".875rem",
      borderRadius: ".375rem",
      border: "1px solid rgb(0 0 0 / 0.12)",
      backgroundColor: "rgb(var(--bg) / 1)",
      color: "rgb(var(--fg) / 1)",
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 2px rgb(var(--p) / 0.35)",
        borderColor: "rgb(var(--p) / 1)",
      },
    },

    /* ========== SCROLLABLE ========== */
    ".dropdown-scrollable .dropdown-menu": {
      maxHeight: "20rem",
      overflowY: "auto",
    },

    /* Custom scrollbar */
    ".dropdown-scrollable .dropdown-menu::-webkit-scrollbar": {
      width: ".375rem",
    },

    ".dropdown-scrollable .dropdown-menu::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },

    ".dropdown-scrollable .dropdown-menu::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(var(--fg) / 0.2)",
      borderRadius: "9999px",
    },

    ".dropdown-scrollable .dropdown-menu::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgb(var(--fg) / 0.3)",
    },
  };
}
