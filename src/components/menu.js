// src/components/menu.js
export default function menuComponent() {
  return {
    /* ========== MENU / CONTEXT MENU ========== */
    ".menu": {
      position: "relative",
      display: "inline-block",
    },

    ".menu-trigger": {
      cursor: "pointer",
    },

    ".menu-content": {
      position: "absolute",
      zIndex: "50",
      minWidth: "12rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
      boxShadow: "0 4px 12px rgb(var(--fg) / 0.15)",
      padding: "0.25rem",
      opacity: "0",
      visibility: "hidden",
      transform: "scale(0.95) translateY(-4px)",
      transition: "all 0.2s ease",
      pointerEvents: "none",
    },

    ".menu-content[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "scale(1) translateY(0)",
      pointerEvents: "auto",
    },

    ".menu-top .menu-content": {
      bottom: "100%",
      top: "auto",
      marginBottom: "0.5rem",
      transform: "scale(0.95) translateY(4px)",
    },

    ".menu-top .menu-content[data-open='true']": {
      transform: "scale(1) translateY(0)",
    },

    ".menu-right .menu-content": {
      left: "100%",
      right: "auto",
      top: "0",
      marginLeft: "0.5rem",
      transform: "scale(0.95) translateX(-4px)",
    },

    ".menu-right .menu-content[data-open='true']": {
      transform: "scale(1) translateX(0)",
    },

    ".menu-left .menu-content": {
      right: "100%",
      left: "auto",
      top: "0",
      marginRight: "0.5rem",
      transform: "scale(0.95) translateX(4px)",
    },

    ".menu-left .menu-content[data-open='true']": {
      transform: "scale(1) translateX(0)",
    },

    ".menu-item": {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.625rem 0.75rem",
      fontSize: "0.875rem",
      color: "rgb(var(--fg))",
      borderRadius: "var(--rounded)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
      },
    },

    ".menu-item-disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    ".menu-item-danger": {
      color: "rgb(var(--er) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--er) / 0.1)",
      },
    },

    ".menu-divider": {
      height: "1px",
      backgroundColor: "rgb(var(--border))",
      margin: "0.25rem 0",
    },

    ".menu-group": {
      padding: "0.25rem 0",
    },

    ".menu-group-label": {
      padding: "0.5rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "rgb(var(--fg) / 0.5)",
    },
  };
}

