// src/components/kbd.js
export default function kbdComponent() {
  return {
    /* ========== KBD (Keyboard Key) ========== */
    ".kbd": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.125rem 0.375rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      fontFamily: "ui-monospace, monospace",
      lineHeight: "1",
      color: "rgb(var(--fg) / 0.9)",
      backgroundColor: "rgb(var(--fg) / 0.08)",
      border: "1px solid rgb(var(--fg) / 0.2)",
      borderRadius: "0.25rem",
      boxShadow: "0 1px 2px rgb(0 0 0 / 0.05), inset 0 -1px 0 rgb(0 0 0 / 0.1)",
      textTransform: "uppercase",
      letterSpacing: "0.025em",
      minWidth: "1.5rem",
    },

    ".kbd-sm": {
      padding: "0.0625rem 0.25rem",
      fontSize: "0.625rem",
      minWidth: "1.25rem",
    },

    ".kbd-lg": {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      minWidth: "2rem",
    },
  };
}
