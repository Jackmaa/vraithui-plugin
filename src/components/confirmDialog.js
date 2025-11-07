// src/components/confirmDialog.js
export default function confirmDialogComponent() {
  return {
    /* ========== CONFIRM DIALOG ========== */
    ".confirm-dialog": {
      position: "fixed",
      inset: "0",
      zIndex: "100",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.2s ease",
    },

    ".confirm-dialog[data-open='true']": {
      opacity: "1",
      visibility: "visible",
    },

    ".confirm-dialog-overlay": {
      position: "absolute",
      inset: "0",
      backgroundColor: "rgb(var(--fg) / 0.5)",
      backdropFilter: "blur(4px)",
    },

    ".confirm-dialog-content": {
      position: "relative",
      zIndex: "1",
      width: "100%",
      maxWidth: "28rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      boxShadow: "0 10px 30px rgb(var(--fg) / 0.2)",
      padding: "1.5rem",
      transform: "scale(0.95)",
      transition: "transform 0.2s ease",
    },

    ".confirm-dialog[data-open='true'] .confirm-dialog-content": {
      transform: "scale(1)",
    },

    ".confirm-dialog-icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      marginBottom: "1rem",
      fontSize: "1.5rem",
    },

    ".confirm-dialog-icon-danger": {
      backgroundColor: "rgb(var(--er) / 0.1)",
      color: "rgb(var(--er) / 1)",
    },

    ".confirm-dialog-icon-warning": {
      backgroundColor: "rgb(var(--wa) / 0.1)",
      color: "rgb(var(--wa) / 1)",
    },

    ".confirm-dialog-icon-info": {
      backgroundColor: "rgb(var(--in) / 0.1)",
      color: "rgb(var(--in) / 1)",
    },

    ".confirm-dialog-title": {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
      marginBottom: "0.5rem",
    },

    ".confirm-dialog-message": {
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.7)",
      marginBottom: "1.5rem",
      lineHeight: "1.5",
    },

    ".confirm-dialog-actions": {
      display: "flex",
      gap: "0.75rem",
      justifyContent: "flex-end",
    },
  };
}

