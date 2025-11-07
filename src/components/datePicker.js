// src/components/datePicker.js
export default function datePickerComponent() {
  return {
    /* ========== DATE PICKER ========== */
    ".date-picker": {
      position: "relative",
      display: "inline-block",
      width: "100%",
    },

    ".date-picker-input": {
      width: "100%",
      cursor: "pointer",
    },

    ".date-picker-calendar": {
      position: "absolute",
      top: "100%",
      left: "0",
      marginTop: "0.5rem",
      zIndex: "50",
      width: "20rem",
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

    ".date-picker-calendar[data-open='true']": {
      opacity: "1",
      visibility: "visible",
      transform: "translateY(0)",
    },

    ".date-picker-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },

    ".date-picker-nav": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },

    ".date-picker-nav-btn": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2rem",
      height: "2rem",
      borderRadius: "var(--rounded)",
      backgroundColor: "transparent",
      border: "none",
      color: "rgb(var(--fg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.1)",
      },
    },

    ".date-picker-month": {
      fontSize: "1rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
    },

    ".date-picker-weekdays": {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
      marginBottom: "0.5rem",
    },

    ".date-picker-weekday": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: "rgb(var(--fg) / 0.6)",
      padding: "0.5rem",
    },

    ".date-picker-days": {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
    },

    ".date-picker-day": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "var(--rounded)",
      fontSize: "0.875rem",
      color: "rgb(var(--fg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.1)",
      },
    },

    ".date-picker-day-other-month": {
      color: "rgb(var(--fg) / 0.3)",
    },

    ".date-picker-day-today": {
      border: "1px solid rgb(var(--p) / 1)",
    },

    ".date-picker-day-selected": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.9)",
      },
    },

    ".date-picker-day-disabled": {
      opacity: "0.3",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
}

