// src/components/rangeInput.js
export default function rangeInputComponent() {
  return {
    /* ========== RANGE INPUT ========== */
    ".range-input": {
      position: "relative",
      width: "100%",
    },

    ".range-input-track": {
      position: "relative",
      width: "100%",
      height: "0.5rem",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      borderRadius: "9999px",
    },

    ".range-input-fill": {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      backgroundColor: "rgb(var(--p) / 1)",
      borderRadius: "9999px",
      transition: "width 0.2s ease",
    },

    ".range-input-handle": {
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "1.25rem",
      height: "1.25rem",
      backgroundColor: "rgb(var(--p) / 1)",
      border: "2px solid rgb(var(--bg))",
      borderRadius: "50%",
      cursor: "grab",
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "translate(-50%, -50%) scale(1.2)",
      },
      "&:active": {
        cursor: "grabbing",
        transform: "translate(-50%, -50%) scale(1.1)",
      },
    },

    ".range-input-double .range-input-handle": {
      "&:first-of-type": {
        zIndex: "2",
      },
      "&:last-of-type": {
        zIndex: "1",
      },
    },

    ".range-input-labels": {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "0.5rem",
      fontSize: "0.75rem",
      color: "rgb(var(--fg) / 0.7)",
    },

    ".range-input-value": {
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "0.5rem",
      padding: "0.25rem 0.5rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      backgroundColor: "rgb(var(--fg))",
      color: "rgb(var(--bg))",
      borderRadius: "var(--rounded)",
      whiteSpace: "nowrap",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.2s ease",
    },

    ".range-input-handle:hover .range-input-value": {
      opacity: "1",
      visibility: "visible",
    },
  };
}

