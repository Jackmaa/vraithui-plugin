// src/components/sidebarNav.js
export default function sidebarNavComponent() {
  return {
    /* ========== SIDEBAR NAVIGATION ========== */
    ".sidebar-nav": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      padding: "1rem",
    },

    ".sidebar-nav-section": {
      marginBottom: "1rem",
      "&:last-child": {
        marginBottom: "0",
      },
    },

    ".sidebar-nav-section-label": {
      padding: "0.5rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "rgb(var(--fg) / 0.5)",
    },

    ".sidebar-nav-item": {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.625rem 0.75rem",
      borderRadius: "var(--rounded)",
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.7)",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
        color: "rgb(var(--fg))",
      },
    },

    ".sidebar-nav-item-active": {
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.15)",
      },
    },

    ".sidebar-nav-item-icon": {
      fontSize: "1.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.5rem",
    },

    ".sidebar-nav-item-badge": {
      marginLeft: "auto",
      padding: "0.125rem 0.5rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      borderRadius: "9999px",
    },

    ".sidebar-nav-group": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      marginLeft: "1.5rem",
      marginTop: "0.25rem",
    },
  };
}

