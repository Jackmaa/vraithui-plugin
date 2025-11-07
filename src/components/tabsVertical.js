// src/components/tabsVertical.js
export default function tabsVerticalComponent() {
  return {
    /* ========== TABS VERTICAL ========== */
    ".tabs-vertical": {
      display: "flex",
      gap: "1rem",
    },

    ".tabs-vertical-list": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      minWidth: "12rem",
      paddingRight: "1rem",
      borderRight: "1px solid rgb(var(--border))",
    },

    ".tabs-vertical-tab": {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.75rem 1rem",
      borderRadius: "var(--rounded)",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.7)",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textAlign: "left",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
        color: "rgb(var(--fg))",
      },
    },

    ".tabs-vertical-tab-active": {
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      fontWeight: "600",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.15)",
      },
    },

    ".tabs-vertical-tab-icon": {
      fontSize: "1.25rem",
    },

    ".tabs-vertical-panels": {
      flex: "1",
    },

    ".tabs-vertical-panel": {
      display: "none",
    },

    ".tabs-vertical-panel-active": {
      display: "block",
    },
  };
}

