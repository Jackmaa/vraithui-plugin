// src/components/slider.js
export default function sliderComponent() {
  return {
    /* Slider container */
    ".slider": {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: ".5rem",
    },

    /* Range input base */
    ".slider-input": {
      appearance: "none",
      width: "100%",
      height: ".5rem",
      borderRadius: "9999px",
      background: "rgb(var(--fg) / 0.1)",
      outline: "none",
      cursor: "pointer",
      transition: "background 0.2s ease",
    },

    /* WebKit (Chrome, Safari, Edge) */
    ".slider-input::-webkit-slider-thumb": {
      appearance: "none",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--p) / 1)",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      },
      "&:active": {
        transform: "scale(1.15)",
      },
    },

    /* Firefox */
    ".slider-input::-moz-range-thumb": {
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--p) / 1)",
      cursor: "pointer",
      border: "none",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },

    ".slider-input::-moz-range-thumb:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },

    ".slider-input::-moz-range-thumb:active": {
      transform: "scale(1.15)",
    },

    /* Track color for webkit */
    ".slider-input::-webkit-slider-runnable-track": {
      width: "100%",
      height: ".5rem",
      borderRadius: "9999px",
      backgroundColor: "rgb(var(--fg) / 0.1)",
    },

    /* Track color for Firefox */
    ".slider-input::-moz-range-track": {
      width: "100%",
      height: ".5rem",
      borderRadius: "9999px",
      backgroundColor: "rgb(var(--fg) / 0.1)",
    },

    /* Slider label */
    ".slider-label": {
      display: "flex",
      justifyContent: "space-between",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.7)",
    },

    /* Slider value display */
    ".slider-value": {
      display: "inline-block",
      padding: ".25rem .75rem",
      fontSize: ".875rem",
      fontWeight: "600",
      color: "rgb(var(--p) / 1)",
      backgroundColor: "rgb(var(--p) / 0.1)",
      borderRadius: ".375rem",
    },

    /* Slider with tooltip */
    ".slider-tooltip": {
      position: "absolute",
      top: "-2.5rem",
      padding: ".25rem .5rem",
      fontSize: ".75rem",
      fontWeight: "600",
      color: "rgb(var(--pc) / 1)",
      backgroundColor: "rgb(var(--p) / 1)",
      borderRadius: ".25rem",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.2s ease",
      transform: "translateX(-50%)",
    },

    ".slider-tooltip::after": {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderWidth: ".25rem",
      borderStyle: "solid",
      borderColor: "rgb(var(--p) / 1) transparent transparent transparent",
    },

    ".slider:hover .slider-tooltip": {
      opacity: "1",
    },

    /* Color variants */
    ".slider-secondary .slider-input::-webkit-slider-thumb": {
      backgroundColor: "rgb(var(--s) / 1)",
    },

    ".slider-secondary .slider-input::-moz-range-thumb": {
      backgroundColor: "rgb(var(--s) / 1)",
    },

    ".slider-secondary .slider-value": {
      color: "rgb(var(--s) / 1)",
      backgroundColor: "rgb(var(--s) / 0.1)",
    },

    ".slider-success .slider-input::-webkit-slider-thumb": {
      backgroundColor: "rgb(var(--su, 34 197 94) / 1)",
    },

    ".slider-success .slider-input::-moz-range-thumb": {
      backgroundColor: "rgb(var(--su, 34 197 94) / 1)",
    },

    /* Disabled state */
    ".slider-input:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".slider-input:disabled::-webkit-slider-thumb": {
      cursor: "not-allowed",
    },

    ".slider-input:disabled::-moz-range-thumb": {
      cursor: "not-allowed",
    },

    /* Size variants */
    ".slider-sm .slider-input": {
      height: ".375rem",
    },

    ".slider-sm .slider-input::-webkit-slider-thumb": {
      width: "1rem",
      height: "1rem",
    },

    ".slider-sm .slider-input::-moz-range-thumb": {
      width: "1rem",
      height: "1rem",
    },

    ".slider-lg .slider-input": {
      height: ".625rem",
    },

    ".slider-lg .slider-input::-webkit-slider-thumb": {
      width: "1.5rem",
      height: "1.5rem",
    },

    ".slider-lg .slider-input::-moz-range-thumb": {
      width: "1.5rem",
      height: "1.5rem",
    },
  };
}
