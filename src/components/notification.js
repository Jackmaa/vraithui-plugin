// src/components/notification.js
export default function notificationComponent() {
  return {
    /* ========== NOTIFICATION SYSTEM ========== */
    ".notification-container": {
      position: "fixed",
      zIndex: "100",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      padding: "1rem",
      pointerEvents: "none",
    },

    ".notification-container-top": {
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },

    ".notification-container-top-left": {
      top: "0",
      left: "0",
    },

    ".notification-container-top-right": {
      top: "0",
      right: "0",
    },

    ".notification-container-bottom": {
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
    },

    ".notification-container-bottom-left": {
      bottom: "0",
      left: "0",
    },

    ".notification-container-bottom-right": {
      bottom: "0",
      right: "0",
    },

    ".notification": {
      position: "relative",
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      minWidth: "20rem",
      maxWidth: "28rem",
      padding: "1rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      boxShadow: "0 4px 12px rgb(var(--fg) / 0.15)",
      pointerEvents: "auto",
      opacity: "0",
      transform: "translateY(-20px)",
      transition: "all 0.3s ease",
    },

    ".notification[data-visible='true']": {
      opacity: "1",
      transform: "translateY(0)",
    },

    ".notification-icon": {
      fontSize: "1.25rem",
      flexShrink: "0",
    },

    ".notification-icon-success": {
      color: "rgb(var(--su) / 1)",
    },

    ".notification-icon-error": {
      color: "rgb(var(--er) / 1)",
    },

    ".notification-icon-warning": {
      color: "rgb(var(--wa) / 1)",
    },

    ".notification-icon-info": {
      color: "rgb(var(--in) / 1)",
    },

    ".notification-content": {
      flex: "1",
      minWidth: "0",
    },

    ".notification-title": {
      fontSize: "0.875rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
      marginBottom: "0.25rem",
    },

    ".notification-message": {
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.7)",
      lineHeight: "1.5",
    },

    ".notification-close": {
      flexShrink: "0",
      padding: "0.25rem",
      cursor: "pointer",
      color: "rgb(var(--fg) / 0.5)",
      borderRadius: "var(--rounded)",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.1)",
        color: "rgb(var(--fg))",
      },
    },

    ".notification-progress": {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "rgb(var(--p) / 0.2)",
      borderRadius: "0 0 var(--radius-card) var(--radius-card)",
      overflow: "hidden",
    },

    ".notification-progress-bar": {
      height: "100%",
      backgroundColor: "rgb(var(--p) / 1)",
      transition: "width linear",
    },
  };
}

