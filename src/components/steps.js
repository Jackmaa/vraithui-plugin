// src/components/steps.js
export default function stepsComponent() {
  return {
    /* ========== STEPS / STEPPER ========== */
    ".steps": {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      width: "100%",
      position: "relative",
    },

    ".step": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "1",
      position: "relative",
    },

    ".step-connector": {
      position: "absolute",
      top: "1.25rem",
      left: "50%",
      right: "-50%",
      height: "2px",
      backgroundColor: "rgb(var(--fg) / 0.2)",
      zIndex: "0",
    },

    ".step:last-child .step-connector": {
      display: "none",
    },

    ".step-icon": {
      position: "relative",
      zIndex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      color: "rgb(var(--fg) / 0.6)",
      fontSize: ".875rem",
      fontWeight: "600",
      border: "2px solid rgb(var(--bg))",
      transition: "all 0.3s ease",
    },

    ".step-active .step-icon": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      borderColor: "rgb(var(--p) / 1)",
    },

    ".step-completed .step-icon": {
      backgroundColor: "rgb(var(--su) / 1)",
      color: "white",
      borderColor: "rgb(var(--su) / 1)",
    },

    ".step-completed .step-connector": {
      backgroundColor: "rgb(var(--su) / 1)",
    },

    ".step-title": {
      marginTop: ".5rem",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.9)",
      textAlign: "center",
    },

    ".step-description": {
      marginTop: ".25rem",
      fontSize: ".75rem",
      color: "rgb(var(--fg) / 0.6)",
      textAlign: "center",
    },

    ".step-active .step-title": {
      color: "rgb(var(--p) / 1)",
      fontWeight: "600",
    },

    ".steps-vertical": {
      flexDirection: "column",
      alignItems: "flex-start",
    },

    ".steps-vertical .step": {
      flexDirection: "row",
      width: "100%",
      alignItems: "flex-start",
    },

    ".steps-vertical .step-connector": {
      position: "absolute",
      top: "2.5rem",
      left: "1.25rem",
      right: "auto",
      bottom: "-1rem",
      width: "2px",
      height: "auto",
    },

    ".steps-vertical .step-content": {
      marginLeft: "1rem",
      flex: "1",
    },
  };
}

