// src/components/stats.js
export default function statsComponent() {
  return {
    /* ========== STATS CARD ========== */
    ".stats": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1rem",
    },

    ".stat": {
      display: "flex",
      flexDirection: "column",
      padding: "1.5rem",
      borderRadius: "var(--radius-card)",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgb(var(--fg) / 0.1)",
      },
    },

    ".stat-title": {
      fontSize: ".75rem",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "rgb(var(--fg) / 0.6)",
      marginBottom: ".5rem",
    },

    ".stat-value": {
      fontSize: "2rem",
      fontWeight: "700",
      color: "rgb(var(--fg))",
      lineHeight: "1",
      marginBottom: ".5rem",
    },

    ".stat-desc": {
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.7)",
      display: "flex",
      alignItems: "center",
      gap: ".25rem",
    },

    ".stat-trend": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".25rem",
      fontSize: ".75rem",
      fontWeight: "600",
    },

    ".stat-trend-up": {
      color: "rgb(var(--su) / 1)",
    },

    ".stat-trend-down": {
      color: "rgb(var(--er) / 1)",
    },

    ".stat-icon": {
      width: "3rem",
      height: "3rem",
      borderRadius: "var(--rounded)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },

    ".stat-icon-primary": {
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
    },

    ".stat-icon-success": {
      backgroundColor: "rgb(var(--su) / 0.1)",
      color: "rgb(var(--su) / 1)",
    },

    ".stat-icon-warning": {
      backgroundColor: "rgb(var(--wa) / 0.1)",
      color: "rgb(var(--wa) / 1)",
    },

    ".stat-icon-error": {
      backgroundColor: "rgb(var(--er) / 0.1)",
      color: "rgb(var(--er) / 1)",
    },
  };
}

