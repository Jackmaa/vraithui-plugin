// src/components/tooltip.js
export default function tooltipComponent() {
  return {
    /* Tooltip container */
    ".tooltip": {
      position: "relative",
      display: "inline-block",
    },

    /* Tooltip content */
    ".tooltip-content": {
      position: "absolute",
      zIndex: "50",
      padding: ".5rem .75rem",
      fontSize: ".875rem",
      lineHeight: "1.25",
      color: "rgb(var(--pc) / 1)",
      backgroundColor: "rgb(var(--p) / 1)",
      borderRadius: ".375rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      whiteSpace: "nowrap",
      opacity: "0",
      visibility: "hidden",
      transition: "opacity 0.2s ease, visibility 0.2s ease",
      pointerEvents: "none",
    },

    /* Arrow */
    ".tooltip-content::before": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "0",
      borderStyle: "solid",
    },

    /* Positions */
    // Top
    ".tooltip-top .tooltip-content": {
      bottom: "calc(100% + .5rem)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    ".tooltip-top .tooltip-content::before": {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderWidth: ".25rem .25rem 0 .25rem",
      borderColor: "rgb(var(--p) / 1) transparent transparent transparent",
    },

    // Bottom
    ".tooltip-bottom .tooltip-content": {
      top: "calc(100% + .5rem)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    ".tooltip-bottom .tooltip-content::before": {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderWidth: "0 .25rem .25rem .25rem",
      borderColor: "transparent transparent rgb(var(--p) / 1) transparent",
    },

    // Left
    ".tooltip-left .tooltip-content": {
      right: "calc(100% + .5rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    ".tooltip-left .tooltip-content::before": {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      borderWidth: ".25rem 0 .25rem .25rem",
      borderColor: "transparent transparent transparent rgb(var(--p) / 1)",
    },

    // Right
    ".tooltip-right .tooltip-content": {
      left: "calc(100% + .5rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    ".tooltip-right .tooltip-content::before": {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      borderWidth: ".25rem .25rem .25rem 0",
      borderColor: "transparent rgb(var(--p) / 1) transparent transparent",
    },

    /* Hover state */
    ".tooltip:hover .tooltip-content": {
      opacity: "1",
      visibility: "visible",
    },

    /* Open state (for click-triggered tooltips) */
    '.tooltip[data-open="true"] .tooltip-content': {
      opacity: "1",
      visibility: "visible",
    },

    /* Color variants */
    ".tooltip-secondary .tooltip-content": {
      backgroundColor: "rgb(var(--s) / 1)",
      color: "rgb(var(--sc) / 1)",
    },
    ".tooltip-secondary .tooltip-content::before": {
      borderTopColor: "rgb(var(--s) / 1)",
      borderBottomColor: "rgb(var(--s) / 1)",
      borderLeftColor: "rgb(var(--s) / 1)",
      borderRightColor: "rgb(var(--s) / 1)",
    },

    ".tooltip-dark .tooltip-content": {
      backgroundColor: "rgb(var(--fg) / 1)",
      color: "rgb(var(--bg) / 1)",
    },
    ".tooltip-dark .tooltip-content::before": {
      borderTopColor: "rgb(var(--fg) / 1)",
      borderBottomColor: "rgb(var(--fg) / 1)",
      borderLeftColor: "rgb(var(--fg) / 1)",
      borderRightColor: "rgb(var(--fg) / 1)",
    },
  };
}
