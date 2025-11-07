// src/components/tabs.js
export default function tabsComponent() {
  return {
    /* Base */
    ".tabs": { display: "grid", gap: ".75rem" },

    ".tab-list": {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      gap: ".25rem",
      borderBottom: "1px solid rgb(0 0 0 / 0.08)",
      paddingBottom: ".25rem",
    },

    ".tab": {
      appearance: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".5rem",
      borderRadius: ".5rem .5rem 0 0",
      padding: ".5rem .75rem",
      fontWeight: "600",
      color: "rgb(var(--fg) / 0.8)",
      backgroundColor: "transparent",
      border: "1px solid transparent",
      borderBottom: "none",
      transition:
        "color 150ms ease, background-color 150ms ease, border-color 150ms ease",
      "&:hover": { color: "rgb(var(--fg) / 1)" },
      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
    },

    '.tab[aria-selected="true"]': {
      color: "rgb(var(--fg) / 1)",
      backgroundColor: "rgb(var(--fg) / 0.06)",
      borderColor: "rgb(0 0 0 / 0.08)",
      borderBottom: "1px solid rgb(255 255 255 / 0)",
    },

    ".tab-panels": { position: "relative" },
    ".tab-panel": { display: "block", padding: ".75rem 0" },
    ".tab-panel[hidden]": { display: "none" },

    /* ===== Variant: pills ===== */
    ".tabs.tabs-pills .tab-list": {
      borderBottom: "none",
      gap: ".375rem",
      paddingBottom: "0",
    },
    ".tabs.tabs-pills .tab": {
      borderRadius: "9999px",
      border: "1px solid transparent",
      padding: ".5rem .9rem",
    },
    '.tabs.tabs-pills .tab[aria-selected="true"]': {
      backgroundColor: "rgb(var(--p) / 0.12)",
      color: "rgb(var(--p) / 1)",
      borderColor: "rgb(var(--p) / 0.35)",
    },

    /* ===== Variant: underline ===== */
    ".tabs.tabs-underline .tab-list": {
      borderBottom: "1px solid rgb(0 0 0 / 0.08)",
      gap: ".25rem",
      paddingBottom: "0",
    },
    ".tabs.tabs-underline .tab": {
      borderRadius: "0",
      border: "none",
      borderBottom: "2px solid transparent",
      padding: ".5rem .75rem",
    },
    ".tabs.tabs-underline .tab:hover": {
      borderBottomColor: "rgb(var(--p) / 0.35)",
    },
    '.tabs.tabs-underline .tab[aria-selected="true"]': {
      backgroundColor: "transparent",
      color: "rgb(var(--p) / 1)",
      borderBottomColor: "rgb(var(--p) / 1)",
    },
  };
}
