// src/components/drawer.js
export default function drawerComponent() {
  return {
    /* Container */
    ".drawer": {
      position: "fixed",
      inset: "0",
      zIndex: "50",
      display: "block",
      pointerEvents: "none" /* évite de capter les clics quand fermé */,
    },

    /* Overlay */
    ".drawer-overlay": {
      position: "absolute",
      inset: "0",
      backgroundColor: "rgb(0 0 0 / 0.45)",
      backdropFilter: "blur(2px)",
      opacity: "0",
      transition: "opacity 150ms ease",
      pointerEvents: "none",
    },

    /* Side panel (left by default) */
    ".drawer-side": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "min(20rem, 88vw)",
      backgroundColor: "rgb(var(--bg) / 1)",
      color: "rgb(var(--fg) / 1)",
      borderRight: "1px solid rgb(0 0 0 / 0.08)",
      boxShadow: "0 10px 25px rgb(0 0 0 / 0.25)",
      transform: "translateX(-100%)",
      transition: "transform 220ms cubic-bezier(0.4, 0, 0.2, 1)",
      pointerEvents: "auto",
      display: "flex",
      flexDirection: "column",
    },

    /* Right variant */
    ".drawer-right .drawer-side": {
      left: "auto",
      right: "0",
      borderRight: "none",
      borderLeft: "1px solid rgb(0 0 0 / 0.08)",
      transform: "translateX(100%)",
    },

    /* Sizes */
    ".drawer-sm .drawer-side": { width: "min(16rem, 92vw)" },
    ".drawer-md .drawer-side": { width: "min(20rem, 92vw)" },
    ".drawer-lg .drawer-side": { width: "min(24rem, 92vw)" },
    ".drawer-xl .drawer-side": { width: "min(28rem, 92vw)" },

    /* Open state */
    '.drawer[data-open="true"]': {
      pointerEvents: "auto",
    },
    '.drawer[data-open="true"] .drawer-overlay': {
      opacity: "1",
      pointerEvents: "auto",
    },
    '.drawer[data-open="true"] .drawer-side': {
      transform: "translateX(0)",
    },

    /* Header / Title / Actions helpers */
    ".drawer-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: ".5rem",
      padding: "0.75rem 0.75rem",
      borderBottom: "1px solid rgb(0 0 0 / 0.08)",
    },
    ".drawer-title": {
      fontWeight: "700",
      fontSize: "1.125rem",
    },
    ".drawer-content": {
      padding: "0.75rem",
      overflow: "auto",
      flex: "1 1 auto",
    },
    ".drawer-actions": {
      display: "flex",
      gap: ".5rem",
      justifyContent: "flex-end",
      padding: "0.75rem",
      borderTop: "1px solid rgb(0 0 0 / 0.08)",
    },
    ".drawer-close": {
      /* bouton utilitaire, style libre (ex: .btn .btn-ghost) */
    },
  };
}
