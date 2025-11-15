export default function modalComponent() {
  return {
    ".modal": {
      position: "fixed",
      inset: "0",
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "50",
    },
    '.modal[data-open="true"]': { display: "flex" },
    ".modal::before": {
      content: '""',
      position: "absolute",
      inset: "0",
      backgroundColor: "rgb(0 0 0 / 0.5)",
      backdropFilter: "blur(2px)",
    },
    ".modal-box": {
      position: "relative",
      borderRadius: "var(--radius-card)",
      backgroundColor: "rgb(var(--bg) / 1)",
      color: "rgb(var(--fg) / 1)",
      width: "min(42rem, 92vw)",
      margin: "1rem",
      padding: "1rem",
      boxShadow: "0 10px 25px rgb(0 0 0 / 0.25)",
    },
    ".modal-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: ".5rem",
      marginBottom: ".75rem",
    },
    ".modal-title": { fontWeight: "700", fontSize: "1.125rem" },
    ".modal-actions": {
      display: "flex",
      gap: ".5rem",
      justifyContent: "flex-end",
      marginTop: "1rem",
    },
    ".modal-close": { position: "absolute", top: ".5rem", right: ".5rem" },
  };
}
