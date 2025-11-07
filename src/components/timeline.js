// src/components/timeline.js
export default function timelineComponent() {
  return {
    /* ========== TIMELINE ========== */
    ".timeline": {
      position: "relative",
      paddingLeft: "2rem",
      "&::before": {
        content: '""',
        position: "absolute",
        left: ".5rem",
        top: "0",
        bottom: "0",
        width: "2px",
        backgroundColor: "rgb(var(--fg) / 0.2)",
      },
    },

    ".timeline-item": {
      position: "relative",
      paddingBottom: "2rem",
      "&:last-child": {
        paddingBottom: "0",
      },
    },

    ".timeline-marker": {
      position: "absolute",
      left: "-1.75rem",
      top: ".25rem",
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--bg))",
      border: "2px solid rgb(var(--p) / 1)",
      zIndex: "1",
    },

    ".timeline-marker-filled": {
      backgroundColor: "rgb(var(--p) / 1)",
    },

    ".timeline-marker-success": {
      borderColor: "rgb(var(--su) / 1)",
      backgroundColor: "rgb(var(--su) / 1)",
    },

    ".timeline-marker-warning": {
      borderColor: "rgb(var(--wa) / 1)",
      backgroundColor: "rgb(var(--wa) / 1)",
    },

    ".timeline-marker-error": {
      borderColor: "rgb(var(--er) / 1)",
      backgroundColor: "rgb(var(--er) / 1)",
    },

    ".timeline-content": {
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      padding: "1rem",
    },

    ".timeline-title": {
      fontSize: "1rem",
      fontWeight: "600",
      color: "rgb(var(--fg))",
      marginBottom: ".5rem",
    },

    ".timeline-time": {
      fontSize: ".75rem",
      color: "rgb(var(--fg) / 0.6)",
      marginBottom: ".5rem",
    },

    ".timeline-description": {
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.7)",
      lineHeight: "1.5",
    },
  };
}

