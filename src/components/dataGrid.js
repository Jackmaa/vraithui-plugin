// src/components/dataGrid.js
export default function dataGridComponent() {
  return {
    /* ========== DATA GRID ========== */
    ".data-grid": {
      width: "100%",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
    },

    ".data-grid-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      borderBottom: "1px solid rgb(var(--border))",
      backgroundColor: "rgb(var(--bg))",
    },

    ".data-grid-title": {
      fontSize: "1rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
    },

    ".data-grid-actions": {
      display: "flex",
      gap: "0.5rem",
    },

    ".data-grid-filters": {
      padding: "0.75rem 1rem",
      borderBottom: "1px solid rgb(var(--border))",
      backgroundColor: "rgb(var(--panel))",
      display: "flex",
      gap: "0.75rem",
      flexWrap: "wrap",
    },

    ".data-grid-table": {
      width: "100%",
      borderCollapse: "collapse",
    },

    ".data-grid-thead": {
      backgroundColor: "rgb(var(--panel))",
    },

    ".data-grid-th": {
      padding: "0.75rem 1rem",
      textAlign: "left",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "rgb(var(--fg) / 0.7)",
      borderBottom: "1px solid rgb(var(--border))",
      cursor: "pointer",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
      },
    },

    ".data-grid-th-sortable": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },

    ".data-grid-td": {
      padding: "0.75rem 1rem",
      fontSize: "0.875rem",
      color: "rgb(var(--fg))",
      borderBottom: "1px solid rgb(var(--border))",
    },

    ".data-grid-tr": {
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.02)",
      },
    },

    ".data-grid-tr-selected": {
      backgroundColor: "rgb(var(--p) / 0.05)",
    },

    ".data-grid-footer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.75rem 1rem",
      borderTop: "1px solid rgb(var(--border))",
      backgroundColor: "rgb(var(--bg))",
    },

    ".data-grid-pagination": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };
}

