// src/components/breadcrumb.js
export default function breadcrumbComponent() {
  return {
    /* Breadcrumb container */
    ".breadcrumb": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: ".5rem",
      fontSize: ".875rem",
    },

    /* Breadcrumb item */
    ".breadcrumb-item": {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      color: "rgb(var(--fg) / 0.6)",
      transition: "color 0.2s ease",
    },

    /* Breadcrumb link */
    ".breadcrumb-link": {
      color: "rgb(var(--fg) / 0.6)",
      textDecoration: "none",
      transition: "color 0.2s ease",
      "&:hover": {
        color: "rgb(var(--p) / 1)",
      },
    },

    /* Active/current item */
    ".breadcrumb-item-active": {
      color: "rgb(var(--fg) / 1)",
      fontWeight: "500",
    },

    ".breadcrumb-item-active .breadcrumb-link": {
      color: "rgb(var(--fg) / 1)",
      pointerEvents: "none",
    },

    /* Separator */
    ".breadcrumb-separator": {
      display: "inline-flex",
      alignItems: "center",
      color: "rgb(var(--fg) / 0.4)",
      userSelect: "none",
    },

    /* Icons in breadcrumbs */
    ".breadcrumb-icon": {
      width: "1rem",
      height: "1rem",
      flexShrink: "0",
    },

    /* Responsive: collapse on mobile */
    "@media (max-width: 640px)": {
      ".breadcrumb-collapse .breadcrumb-item:not(:first-child):not(:last-child)":
        {
          display: "none",
        },
      ".breadcrumb-collapse .breadcrumb-separator:not(:last-of-type)": {
        display: "none",
      },
    },

    /* Variants */
    ".breadcrumb-solid": {
      padding: ".5rem .75rem",
      backgroundColor: "rgb(var(--fg) / 0.05)",
      borderRadius: "var(--rounded)",
    },

    ".breadcrumb-bordered": {
      padding: ".5rem .75rem",
      border: "1px solid rgb(0 0 0 / 0.1)",
      borderRadius: "var(--rounded)",
    },

    /* Size variants */
    ".breadcrumb-sm": {
      fontSize: ".75rem",
      gap: ".375rem",
    },

    ".breadcrumb-sm .breadcrumb-icon": {
      width: ".875rem",
      height: ".875rem",
    },

    ".breadcrumb-lg": {
      fontSize: "1rem",
      gap: ".625rem",
    },

    ".breadcrumb-lg .breadcrumb-icon": {
      width: "1.25rem",
      height: "1.25rem",
    },

    /* With dropdown (for collapsed items) */
    ".breadcrumb-dropdown": {
      position: "relative",
      display: "inline-flex",
    },

    ".breadcrumb-dropdown-toggle": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".25rem",
      padding: ".25rem",
      cursor: "pointer",
      borderRadius: ".25rem",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.08)",
      },
    },

    ".breadcrumb-dropdown-menu": {
      position: "absolute",
      top: "calc(100% + .25rem)",
      left: "0",
      display: "none",
      minWidth: "10rem",
      padding: ".5rem",
      backgroundColor: "rgb(var(--bg) / 1)",
      border: "1px solid rgb(0 0 0 / 0.1)",
      borderRadius: "var(--rounded)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      zIndex: "50",
    },

    '.breadcrumb-dropdown[data-open="true"] .breadcrumb-dropdown-menu': {
      display: "block",
    },

    ".breadcrumb-dropdown-item": {
      display: "block",
      padding: ".5rem .75rem",
      color: "rgb(var(--fg) / 0.8)",
      textDecoration: "none",
      borderRadius: ".25rem",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.05)",
        color: "rgb(var(--fg) / 1)",
      },
    },
  };
}
