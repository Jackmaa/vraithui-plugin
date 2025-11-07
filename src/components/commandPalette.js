// src/components/commandPalette.js
export default function commandPaletteComponent() {
  return {
    /* ========== COMMAND PALETTE ========== */
    ".command-palette": {
      position: "fixed",
      inset: "0",
      zIndex: "100",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "10vh",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.2s ease",
    },

    ".command-palette[data-open='true']": {
      opacity: "1",
      visibility: "visible",
    },

    ".command-palette-overlay": {
      position: "absolute",
      inset: "0",
      backgroundColor: "rgb(var(--fg) / 0.5)",
      backdropFilter: "blur(4px)",
    },

    ".command-palette-content": {
      position: "relative",
      zIndex: "1",
      width: "100%",
      maxWidth: "42rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--radius-card)",
      boxShadow: "0 10px 30px rgb(var(--fg) / 0.2)",
      overflow: "hidden",
      transform: "scale(0.95) translateY(-20px)",
      transition: "transform 0.2s ease",
    },

    ".command-palette[data-open='true'] .command-palette-content": {
      transform: "scale(1) translateY(0)",
    },

    ".command-palette-input-wrapper": {
      display: "flex",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid rgb(var(--border))",
    },

    ".command-palette-input": {
      flex: "1",
      border: "none",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "transparent",
      color: "rgb(var(--fg))",
      "&::placeholder": {
        color: "rgb(var(--fg) / 0.5)",
      },
    },

    ".command-palette-results": {
      maxHeight: "20rem",
      overflowY: "auto",
      padding: "0.5rem",
    },

    ".command-palette-group": {
      marginBottom: "0.5rem",
    },

    ".command-palette-group-label": {
      padding: "0.5rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "rgb(var(--fg) / 0.5)",
    },

    ".command-palette-item": {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.625rem 0.75rem",
      borderRadius: "var(--rounded)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover, &[data-selected='true']": {
        backgroundColor: "rgb(var(--p) / 0.1)",
      },
    },

    ".command-palette-item-icon": {
      fontSize: "1.25rem",
      color: "rgb(var(--fg) / 0.6)",
    },

    ".command-palette-item-content": {
      flex: "1",
    },

    ".command-palette-item-title": {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "rgb(var(--fg))",
    },

    ".command-palette-item-description": {
      fontSize: "0.75rem",
      color: "rgb(var(--fg) / 0.6)",
      marginTop: "0.125rem",
    },

    ".command-palette-item-shortcut": {
      fontSize: "0.75rem",
      color: "rgb(var(--fg) / 0.5)",
      padding: "0.25rem 0.5rem",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      borderRadius: "0.25rem",
    },
  };
}

