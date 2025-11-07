// src/components/backdrop.js
export default function backdropComponent() {
  return {
    /* ========== BACKDROP ========== */
    ".backdrop": {
      position: "fixed",
      inset: "0",
      zIndex: "40",
      backgroundColor: "rgb(var(--fg) / 0.5)",
      backdropFilter: "blur(4px)",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.2s ease",
    },

    ".backdrop[data-open='true']": {
      opacity: "1",
      visibility: "visible",
    },

    ".backdrop-blur": {
      backdropFilter: "blur(8px)",
    },

    ".backdrop-dark": {
      backgroundColor: "rgb(var(--fg) / 0.8)",
    },

    ".backdrop-light": {
      backgroundColor: "rgb(var(--bg) / 0.8)",
    },
  };
}

