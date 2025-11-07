// src/components/colorPicker.js
export default function colorPickerComponent() {
  return {
    /* ========== COLOR PICKER ========== */
    ".color-picker": {
      position: "relative",
      display: "inline-block",
    },

    ".color-picker-trigger": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
      backgroundColor: "rgb(var(--bg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "rgb(var(--p) / 0.5)",
      },
    },

    ".color-picker-swatch": {
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "0.25rem",
      border: "1px solid rgb(var(--border))",
    },

    ".color-picker-popup": {
      position: "absolute",
      top: "100%",
      left: "0",
      marginTop: "0.5rem",
      zIndex: "50",
      width: "16rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      boxShadow: "0 4px 12px rgb(var(--fg) / 0.15)",
      padding: "1rem",
      opacity: "0",
      visibility: "hidden",
      transform: "translateY(-8px)",
      transition: "all 0.2s ease",
    },

    ".color-picker-popup[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "translateY(0)",
    },

    ".color-picker-palette": {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gap: "0.5rem",
      marginBottom: "1rem",
    },

    ".color-picker-swatch-item": {
      width: "100%",
      aspectRatio: "1",
      borderRadius: "0.25rem",
      border: "2px solid transparent",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.1)",
        borderColor: "rgb(var(--fg) / 0.3)",
      },
    },

    ".color-picker-swatch-item-selected": {
      borderColor: "rgb(var(--p) / 1)",
      boxShadow: "0 0 0 2px rgb(var(--bg))",
    },

    ".color-picker-inputs": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "0.5rem",
    },

    ".color-picker-input-group": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },

    ".color-picker-input-label": {
      fontSize: "0.75rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.7)",
      textTransform: "uppercase",
    },

    ".color-picker-input": {
      width: "100%",
      padding: "0.375rem",
      fontSize: "0.75rem",
      border: "1px solid rgb(var(--border))",
      borderRadius: "0.25rem",
      backgroundColor: "rgb(var(--bg))",
      color: "rgb(var(--fg))",
    },
  };
}

