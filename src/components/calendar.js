// src/components/calendar.js
export default function calendarComponent() {
  return {
    /* ========== CALENDAR ========== */
    ".calendar": {
      width: "100%",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      padding: "1rem",
    },

    ".calendar-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },

    ".calendar-nav": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },

    ".calendar-nav-btn": {
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

    ".calendar-title": {
      fontSize: "1rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
    },

    ".calendar-weekdays": {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
      marginBottom: "0.5rem",
    },

    ".calendar-weekday": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: "rgb(var(--fg) / 0.6)",
      padding: "0.5rem",
    },

    ".calendar-days": {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "0.25rem",
    },

    ".calendar-day": {
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

    ".calendar-day-other-month": {
      color: "rgb(var(--fg) / 0.3)",
    },

    ".calendar-day-today": {
      border: "1px solid rgb(var(--p) / 1)",
    },

    ".calendar-day-selected": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      "&:hover": {
        backgroundColor: "rgb(var(--p) / 0.9)",
      },
    },

    ".calendar-day-disabled": {
      opacity: "0.3",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
}

