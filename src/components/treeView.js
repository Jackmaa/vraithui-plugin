// src/components/treeView.js
export default function treeViewComponent() {
  return {
    /* ========== TREE VIEW ========== */
    ".tree-view": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },

    ".tree-item": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
      borderRadius: "var(--rounded)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
      },
    },

    ".tree-item-selected": {
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.15)",
      },
    },

    ".tree-item-toggle": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "0.25rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
      color: "rgb(var(--fg) / 0.6)",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.1)",
        color: "rgb(var(--fg))",
      },
    },

    ".tree-item-icon": {
      fontSize: "1rem",
      color: "rgb(var(--fg) / 0.6)",
    },

    ".tree-item-label": {
      flex: "1",
      fontSize: "0.875rem",
      color: "rgb(var(--fg))",
    },

    ".tree-item-children": {
      marginLeft: "1.5rem",
      marginTop: "0.25rem",
      display: "none",
    },

    ".tree-item-expanded .tree-item-children": {
      display: "block",
    },

    ".tree-item-expanded .tree-item-toggle": {
      transform: "rotate(90deg)",
    },
  };
}

