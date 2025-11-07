// src/components/popover.js
export default function popoverComponent() {
  return {
    /* ========== POPOVER ========== */
    ".popover": {
      position: "relative",
      display: "inline-block",
    },

    ".popover-trigger": {
      cursor: "pointer",
    },

    ".popover-content": {
      position: "absolute",
      zIndex: "50",
      minWidth: "12rem",
      padding: ".75rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
      boxShadow: "0 4px 12px rgb(var(--fg) / 0.15)",
      opacity: "0",
      visibility: "hidden",
      transform: "scale(0.95) translateY(-4px)",
      transition: "all 0.2s ease",
      pointerEvents: "none",
    },

    ".popover-content[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "scale(1) translateY(0)",
      pointerEvents: "auto",
    },

    ".popover-top .popover-content": {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%) translateY(8px)",
      marginBottom: ".5rem",
    },

    ".popover-top .popover-content[data-open='true']": {
      transform: "translateX(-50%) translateY(0)",
    },

    ".popover-bottom .popover-content": {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%) translateY(-8px)",
      marginTop: ".5rem",
    },

    ".popover-bottom .popover-content[data-open='true']": {
      transform: "translateX(-50%) translateY(0)",
    },

    ".popover-left .popover-content": {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%) translateX(8px)",
      marginRight: ".5rem",
    },

    ".popover-left .popover-content[data-open='true']": {
      transform: "translateY(-50%) translateX(0)",
    },

    ".popover-right .popover-content": {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%) translateX(-8px)",
      marginLeft: ".5rem",
    },

    ".popover-right .popover-content[data-open='true']": {
      transform: "translateY(-50%) translateX(0)",
    },

    ".popover-arrow": {
      position: "absolute",
      width: ".5rem",
      height: ".5rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      transform: "rotate(45deg)",
    },

    ".popover-top .popover-arrow": {
      bottom: "-.25rem",
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)",
      borderTop: "none",
      borderLeft: "none",
    },

    ".popover-bottom .popover-arrow": {
      top: "-.25rem",
      left: "50%",
      transform: "translateX(-50%) rotate(45deg)",
      borderBottom: "none",
      borderRight: "none",
    },

    ".popover-left .popover-arrow": {
      right: "-.25rem",
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)",
      borderLeft: "none",
      borderBottom: "none",
    },

    ".popover-right .popover-arrow": {
      left: "-.25rem",
      top: "50%",
      transform: "translateY(-50%) rotate(45deg)",
      borderRight: "none",
      borderTop: "none",
    },
  };
}

