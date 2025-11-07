// src/components/emptyState.js
export default function emptyStateComponent() {
  return {
    /* ========== EMPTY STATE ========== */
    ".empty-state": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 2rem",
      textAlign: "center",
    },

    ".empty-state-icon": {
      fontSize: "4rem",
      marginBottom: "1rem",
      color: "rgb(var(--fg) / 0.3)",
    },

    ".empty-state-title": {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
      marginBottom: "0.5rem",
    },

    ".empty-state-description": {
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.7)",
      marginBottom: "1.5rem",
      maxWidth: "24rem",
    },

    ".empty-state-action": {
      marginTop: "1rem",
    },

    ".empty-state-sm": {
      padding: "2rem 1rem",
      "& .empty-state-icon": {
        fontSize: "2.5rem",
      },
      "& .empty-state-title": {
        fontSize: "1rem",
      },
    },

    ".empty-state-lg": {
      padding: "4rem 2rem",
      "& .empty-state-icon": {
        fontSize: "5rem",
      },
      "& .empty-state-title": {
        fontSize: "1.5rem",
      },
    },
  };
}

