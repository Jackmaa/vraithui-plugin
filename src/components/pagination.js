// src/components/pagination.js
export default function paginationComponent() {
  return {
    /* ========== PAGINATION ========== */
    ".pagination": {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      listStyle: "none",
      padding: "0",
      margin: "0",
    },

    ".pagination-item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "2.5rem",
      height: "2.5rem",
      borderRadius: "var(--rounded)",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.7)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
        color: "rgb(var(--fg))",
      },
      "&:active": {
        transform: "scale(0.95)",
      },
    },

    ".pagination-item-active": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.9)",
        color: "rgb(var(--pc) / 1)",
      },
    },

    ".pagination-item-disabled": {
      opacity: "0.4",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
        color: "rgb(var(--fg) / 0.7)",
      },
    },

    ".pagination-link": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      textDecoration: "none",
      color: "inherit",
    },

    ".pagination-ellipsis": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "2.5rem",
      height: "2.5rem",
      color: "rgb(var(--fg) / 0.5)",
    },
  };
}

