// src/components/sheet.js
export default function sheetComponent() {
  return {
    /* ========== BOTTOM SHEET / SHEET ========== */
    ".sheet": {
      position: "fixed",
      inset: "0",
      zIndex: "50",
      display: "none",
      alignItems: "flex-end",
      justifyContent: "center",
    },

    '.sheet[data-open="true"]': {
      display: "flex",
    },

    ".sheet-overlay": {
      position: "absolute",
      inset: "0",
      backgroundColor: "rgb(0 0 0 / 0.5)",
      backdropFilter: "blur(2px)",
    },

    ".sheet-content": {
      position: "relative",
      zIndex: "1",
      width: "100%",
      maxHeight: "90vh",
      backgroundColor: "rgb(var(--bg))",
      borderTopLeftRadius: "var(--radius-card)",
      borderTopRightRadius: "var(--radius-card)",
      boxShadow: "0 -4px 20px rgb(0 0 0 / 0.15)",
      transform: "translateY(100%)",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      overflowY: "auto",
    },

    '.sheet[data-open="true"] .sheet-content': {
      transform: "translateY(0)",
    },

    ".sheet-header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      borderBottom: "1px solid rgb(var(--border))",
      position: "sticky",
      top: "0",
      backgroundColor: "rgb(var(--bg))",
      zIndex: "1",
    },

    ".sheet-handle": {
      width: "3rem",
      height: "0.25rem",
      backgroundColor: "rgb(var(--fg) / 0.2)",
      borderRadius: "9999px",
      margin: "0.5rem auto 0",
    },

    ".sheet-title": {
      fontSize: "1.125rem",
      fontWeight: "700",
      color: "rgb(var(--fg))",
    },

    ".sheet-body": {
      padding: "1rem",
    },

    ".sheet-footer": {
      display: "flex",
      gap: "0.5rem",
      justifyContent: "flex-end",
      padding: "1rem",
      borderTop: "1px solid rgb(var(--border))",
      position: "sticky",
      bottom: "0",
      backgroundColor: "rgb(var(--bg))",
    },

    /* Side sheet variant */
    ".sheet-side": {
      alignItems: "center",
      justifyContent: "flex-end",
    },

    ".sheet-side .sheet-content": {
      maxHeight: "100vh",
      maxWidth: "28rem",
      height: "100%",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderBottomLeftRadius: "0",
      transform: "translateX(100%)",
    },

    '.sheet-side[data-open="true"] .sheet-content': {
      transform: "translateX(0)",
    },

    ".sheet-side-left": {
      justifyContent: "flex-start",
    },

    ".sheet-side-left .sheet-content": {
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
      transform: "translateX(-100%)",
    },

    '.sheet-side-left[data-open="true"] .sheet-content': {
      transform: "translateX(0)",
    },
  };
}
