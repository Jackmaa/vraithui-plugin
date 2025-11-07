// src/components/timePicker.js
export default function timePickerComponent() {
  return {
    /* ========== TIME PICKER ========== */
    ".time-picker": {
      position: "relative",
      display: "inline-block",
      width: "100%",
    },

    ".time-picker-input": {
      width: "100%",
      cursor: "pointer",
    },

    ".time-picker-popup": {
      position: "absolute",
      top: "100%",
      left: "0",
      marginTop: "0.5rem",
      zIndex: "50",
      width: "12rem",
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

    ".time-picker-popup[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "translateY(0)",
    },

    ".time-picker-display": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      marginBottom: "1rem",
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
    },

    ".time-picker-separator": {
      color: "rgb(var(--fg) / 0.5)",
    },

    ".time-picker-controls": {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
    },

    ".time-picker-column": {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      maxHeight: "8rem",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "0.25rem",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(var(--fg) / 0.2)",
        borderRadius: "9999px",
      },
    },

    ".time-picker-value": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      height: "2rem",
      borderRadius: "var(--rounded)",
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.7)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.1)",
        color: "rgb(var(--fg))",
      },
    },

    ".time-picker-value-selected": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.9)",
      },
    },

    ".time-picker-format": {
      display: "flex",
      gap: "0.5rem",
      marginTop: "1rem",
      paddingTop: "1rem",
      borderTop: "1px solid rgb(var(--border))",
    },
  };
}

