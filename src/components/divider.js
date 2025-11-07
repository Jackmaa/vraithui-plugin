// src/components/divider.js
export default function dividerComponent() {
  return {
    /* ========== DIVIDER ========== */
    ".divider": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      width: "100%",
      margin: "1.5rem 0",
      "&::before, &::after": {
        content: '""',
        flex: "1",
        height: "1px",
        backgroundColor: "rgb(var(--border))",
      },
    },

    ".divider-vertical": {
      flexDirection: "column",
      width: "auto",
      height: "100%",
      margin: "0 1.5rem",
      "&::before, &::after": {
        width: "1px",
        height: "1rem",
        flex: "1",
      },
    },

    ".divider-text": {
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.6)",
      padding: "0 1rem",
      whiteSpace: "nowrap",
    },

    ".divider-solid": {
      "&::before, &::after": {
        backgroundColor: "rgb(var(--fg) / 0.2)",
      },
    },

    ".divider-dashed": {
      "&::before, &::after": {
        borderTop: "1px dashed rgb(var(--border))",
        backgroundColor: "transparent",
      },
    },
  };
}

