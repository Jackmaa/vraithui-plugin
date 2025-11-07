// src/components/accordion.js
export default function accordionComponent() {
  return {
    /* Base accordion */
    ".accordion": {
      display: "grid",
      gap: ".5rem",
    },

    /* Accordion item */
    ".accordion-item": {
      borderRadius: "var(--radius-card)",
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.08)",
      backgroundColor: "rgb(var(--bg) / 1)",
      overflow: "hidden",
      transition: "all 0.2s ease",
    },

    /* Accordion header (clickable) */
    ".accordion-header": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: ".75rem",
      padding: "1rem",
      fontWeight: "600",
      fontSize: "1rem",
      color: "rgb(var(--fg) / 1)",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.03)",
      },
    },

    /* Icon container */
    ".accordion-icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      width: "1.25rem",
      height: "1.25rem",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    /* Accordion content */
    ".accordion-content": {
      maxHeight: "0",
      overflow: "hidden",
      transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    ".accordion-body": {
      padding: "0 1rem 1rem",
      color: "rgb(var(--fg) / 0.8)",
      lineHeight: "1.6",
    },

    /* Open state */
    '.accordion-item[data-open="true"] .accordion-icon': {
      transform: "rotate(180deg)",
    },

    '.accordion-item[data-open="true"] .accordion-content': {
      maxHeight: "500px", // Ajuster selon besoin
    },

    '.accordion-item[data-open="true"] .accordion-header': {
      backgroundColor: "rgb(var(--p) / 0.05)",
      color: "rgb(var(--p) / 1)",
    },

    /* Bordered variant */
    ".accordion-bordered .accordion-item": {
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.1)",
    },

    /* Flush variant (no borders, no gaps) */
    ".accordion-flush": {
      gap: "0",
    },

    ".accordion-flush .accordion-item": {
      borderRadius: "0",
      borderWidth: "0",
      borderBottomWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.08)",
    },

    ".accordion-flush .accordion-item:last-child": {
      borderBottomWidth: "0",
    },
  };
}
