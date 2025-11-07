// src/components/multiSelect.js
export default function multiSelectComponent() {
  return {
    /* ========== MULTI SELECT ========== */
    ".multi-select": {
      position: "relative",
      display: "inline-block",
      width: "100%",
    },

    ".multi-select-trigger": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5rem",
      padding: "0.625rem 0.875rem",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
      backgroundColor: "rgb(var(--bg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "rgb(var(--p) / 0.5)",
      },
      "&:focus": {
        borderColor: "rgb(var(--p) / 1)",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
    },

    ".multi-select-tags": {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.25rem",
      flex: "1",
    },

    ".multi-select-tag": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      padding: "0.125rem 0.375rem",
      fontSize: "0.75rem",
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      borderRadius: "0.25rem",
    },

    ".multi-select-tag-remove": {
      cursor: "pointer",
      "&:hover": {
        opacity: "0.7",
      },
    },

    ".multi-select-placeholder": {
      color: "rgb(var(--fg) / 0.5)",
      fontSize: "0.875rem",
    },

    ".multi-select-dropdown": {
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      marginTop: "0.5rem",
      zIndex: "50",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      boxShadow: "0 4px 12px rgb(var(--fg) / 0.15)",
      maxHeight: "16rem",
      overflowY: "auto",
      opacity: "0",
      visibility: "hidden",
      transform: "translateY(-8px)",
      transition: "all 0.2s ease",
    },

    ".multi-select-dropdown[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "translateY(0)",
    },

    ".multi-select-search": {
      padding: "0.75rem",
      borderBottom: "1px solid rgb(var(--border))",
    },

    ".multi-select-options": {
      padding: "0.25rem",
    },

    ".multi-select-option": {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.625rem 0.75rem",
      borderRadius: "var(--rounded)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
      },
    },

    ".multi-select-option-selected": {
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
    },

    ".multi-select-option-checkbox": {
      width: "1rem",
      height: "1rem",
      border: "2px solid rgb(var(--border))",
      borderRadius: "0.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".multi-select-option-selected .multi-select-option-checkbox": {
      backgroundColor: "rgb(var(--p) / 1)",
      borderColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
    },
  };
}

