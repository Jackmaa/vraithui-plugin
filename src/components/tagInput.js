// src/components/tagInput.js
export default function tagInputComponent() {
  return {
    /* ========== TAG INPUT ========== */
    ".tag-input": {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      padding: "0.5rem",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
      backgroundColor: "rgb(var(--bg))",
      minHeight: "2.5rem",
      "&:focus-within": {
        borderColor: "rgb(var(--p) / 1)",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
    },

    ".tag-input-tag": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      backgroundColor: "rgb(var(--p) / 0.1)",
      color: "rgb(var(--p) / 1)",
      borderRadius: "var(--rounded)",
    },

    ".tag-input-tag-remove": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.2s ease",
      color: "rgb(var(--p) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.2)",
      },
    },

    ".tag-input-input": {
      flex: "1",
      minWidth: "8rem",
      border: "none",
      outline: "none",
      fontSize: "0.875rem",
      backgroundColor: "transparent",
      color: "rgb(var(--fg))",
      "&::placeholder": {
        color: "rgb(var(--fg) / 0.5)",
      },
    },
  };
}

