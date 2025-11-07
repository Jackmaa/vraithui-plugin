// src/components/table.js
export default function tableComponent() {
  return {
    /* Table container (for responsive scroll) */
    ".table-container": {
      width: "100%",
      overflowX: "auto",
    },

    /* Table base */
    ".table": {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 1)",
    },

    /* Table head */
    ".table thead": {
      backgroundColor: "rgb(var(--fg) / 0.03)",
      borderBottom: "1px solid rgb(0 0 0 / 0.1)",
    },

    ".table th": {
      padding: ".75rem 1rem",
      textAlign: "left",
      fontWeight: "600",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.8)",
      whiteSpace: "nowrap",
    },

    /* Table body */
    ".table td": {
      padding: ".75rem 1rem",
      borderBottom: "1px solid rgb(0 0 0 / 0.06)",
    },

    ".table tbody tr": {
      transition: "background-color 0.15s ease",
    },

    /* Hover effect */
    ".table-hover tbody tr:hover": {
      backgroundColor: "rgb(var(--fg) / 0.03)",
    },

    /* Striped rows */
    ".table-striped tbody tr:nth-child(even)": {
      backgroundColor: "rgb(var(--fg) / 0.02)",
    },

    /* Bordered variant */
    ".table-bordered": {
      border: "1px solid rgb(0 0 0 / 0.1)",
    },

    ".table-bordered th": {
      border: "1px solid rgb(0 0 0 / 0.06)",
    },
    ".table-bordered td": {
      border: "1px solid rgb(0 0 0 / 0.06)",
    },

    /* Compact variant */
    ".table-compact th": {
      padding: ".5rem .75rem",
    },
    ".table-compact td": {
      padding: ".5rem .75rem",
    },

    /* Large variant */
    ".table-lg th": {
      padding: "1rem 1.25rem",
    },
    ".table-lg td": {
      padding: "1rem 1.25rem",
    },

    /* Sortable columns */
    ".table-sortable th": {
      cursor: "pointer",
      userSelect: "none",
      position: "relative",
      paddingRight: "2rem",
    },

    ".table-sortable th:hover": {
      backgroundColor: "rgb(var(--fg) / 0.05)",
    },

    ".table-sort-icon": {
      position: "absolute",
      right: ".75rem",
      top: "50%",
      transform: "translateY(-50%)",
      width: "1rem",
      height: "1rem",
      opacity: "0.3",
      transition: "opacity 0.2s ease, transform 0.2s ease",
    },

    '.table-sortable th[data-sort="asc"] .table-sort-icon': {
      opacity: "1",
      transform: "translateY(-50%) rotate(180deg)",
    },

    '.table-sortable th[data-sort="desc"] .table-sort-icon': {
      opacity: "1",
      transform: "translateY(-50%)",
    },

    /* Actions column */
    ".table-actions": {
      display: "flex",
      gap: ".5rem",
      alignItems: "center",
    },

    /* Status badges in table */
    ".table-status": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".375rem",
      padding: ".25rem .625rem",
      fontSize: ".75rem",
      fontWeight: "500",
      borderRadius: "9999px",
    },

    ".table-status-active": {
      backgroundColor: "rgb(var(--su, 34 197 94) / 0.15)",
      color: "rgb(var(--su, 34 197 94) / 1)",
    },

    ".table-status-inactive": {
      backgroundColor: "rgb(var(--fg) / 0.1)",
      color: "rgb(var(--fg) / 0.7)",
    },

    ".table-status-pending": {
      backgroundColor: "rgb(var(--wa, 245 158 11) / 0.15)",
      color: "rgb(var(--wa, 245 158 11) / 1)",
    },

    ".table-status-error": {
      backgroundColor: "rgb(var(--er, 239 68 68) / 0.15)",
      color: "rgb(var(--er, 239 68 68) / 1)",
    },

    /* Empty state */
    ".table-empty": {
      padding: "3rem 1rem",
      textAlign: "center",
      color: "rgb(var(--fg) / 0.5)",
    },

    /* Loading state */
    ".table-loading": {
      position: "relative",
      opacity: "0.6",
      pointerEvents: "none",
    },

    ".table-loading::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "2rem",
      height: "2rem",
      border: "3px solid rgb(var(--fg) / 0.1)",
      borderTopColor: "rgb(var(--p) / 1)",
      borderRadius: "50%",
      animation: "vraithui-spinner 0.6s linear infinite",
    },

    /* Responsive: card layout on mobile */
    "@media (max-width: 640px)": {
      ".table-responsive thead": {
        display: "none",
      },

      ".table-responsive tbody": {
        display: "block",
      },
      ".table-responsive tr": {
        display: "block",
      },
      ".table-responsive td": {
        display: "block",
      },

      ".table-responsive tr": {
        marginBottom: "1rem",
        border: "1px solid rgb(0 0 0 / 0.1)",
        borderRadius: "var(--radius-card)",
        padding: ".75rem",
      },

      ".table-responsive td": {
        paddingLeft: "50%",
        position: "relative",
        border: "none",
      },

      ".table-responsive td::before": {
        content: "attr(data-label)",
        position: "absolute",
        left: ".75rem",
        fontWeight: "600",
        color: "rgb(var(--fg) / 0.7)",
      },
    },

    /* Pagination */
    ".table-pagination": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      marginTop: "1rem",
      padding: ".75rem 0",
    },

    ".table-pagination-info": {
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.7)",
    },

    ".table-pagination-controls": {
      display: "flex",
      gap: ".5rem",
    },

    ".table-pagination-btn": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "2rem",
      height: "2rem",
      padding: "0 .5rem",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.7)",
      backgroundColor: "transparent",
      border: "1px solid rgb(0 0 0 / 0.1)",
      borderRadius: ".375rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover:not(:disabled)": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
        color: "rgb(var(--fg) / 1)",
      },
      "&:disabled": {
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },

    ".table-pagination-btn-active": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      borderColor: "rgb(var(--p) / 1)",
    },

    ".table-pagination-btn-active:hover": {
      backgroundColor: "rgb(var(--p) / 0.9)",
    },
  };
}
