// src/components/progress.js
export default function progressComponent() {
  return {
    /* ========== LINEAR PROGRESS ========== */
    ".progress": {
      position: "relative",
      width: "100%",
      height: ".75rem",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      borderRadius: "9999px",
      overflow: "hidden",
    },

    ".progress-bar": {
      height: "100%",
      backgroundColor: "rgb(var(--p) / 1)",
      borderRadius: "9999px",
      transition: "width 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ".75rem",
      fontWeight: "600",
      color: "rgb(var(--pc) / 1)",
    },

    /* Variants */
    ".progress-primary .progress-bar": {
      backgroundColor: "rgb(var(--p) / 1)",
    },

    ".progress-secondary .progress-bar": {
      backgroundColor: "rgb(var(--s) / 1)",
      color: "rgb(var(--sc) / 1)",
    },

    ".progress-success .progress-bar": {
      backgroundColor: "rgb(var(--su, 34 197 94) / 1)",
      color: "white",
    },

    ".progress-warning .progress-bar": {
      backgroundColor: "rgb(var(--wa, 245 158 11) / 1)",
      color: "white",
    },

    ".progress-error .progress-bar": {
      backgroundColor: "rgb(var(--er, 239 68 68) / 1)",
      color: "white",
    },

    /* Sizes */
    ".progress-sm": {
      height: ".5rem",
    },

    ".progress-lg": {
      height: "1rem",
    },

    ".progress-xl": {
      height: "1.5rem",
    },

    /* Striped */
    ".progress-striped .progress-bar": {
      backgroundImage:
        "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
      backgroundSize: "1rem 1rem",
    },

    /* Animated stripes */
    ".progress-animated .progress-bar": {
      animation: "vraithui-progress-stripes 1s linear infinite",
    },

    "@keyframes vraithui-progress-stripes": {
      "0%": { backgroundPosition: "1rem 0" },
      "100%": { backgroundPosition: "0 0" },
    },

    /* ========== CIRCULAR PROGRESS ========== */
    ".progress-circle": {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".progress-circle svg": {
      transform: "rotate(-90deg)",
    },

    ".progress-circle-bg": {
      fill: "none",
      stroke: "rgb(var(--fg) / 0.1)",
      strokeWidth: "4",
    },

    ".progress-circle-bar": {
      fill: "none",
      stroke: "rgb(var(--p) / 1)",
      strokeWidth: "4",
      strokeLinecap: "round",
      transition: "stroke-dashoffset 0.3s ease",
    },

    ".progress-circle-label": {
      position: "absolute",
      fontSize: ".875rem",
      fontWeight: "600",
      color: "rgb(var(--fg) / 1)",
    },

    /* ========== SPINNER / LOADER ========== */
    ".spinner": {
      display: "inline-block",
      width: "2rem",
      height: "2rem",
      border: "3px solid rgb(var(--fg) / 0.1)",
      borderTopColor: "rgb(var(--p) / 1)",
      borderRadius: "50%",
      animation: "vraithui-spinner 0.6s linear infinite",
    },

    "@keyframes vraithui-spinner": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },

    /* Spinner sizes */
    ".spinner-sm": {
      width: "1rem",
      height: "1rem",
      borderWidth: "2px",
    },

    ".spinner-lg": {
      width: "3rem",
      height: "3rem",
      borderWidth: "4px",
    },

    ".spinner-xl": {
      width: "4rem",
      height: "4rem",
      borderWidth: "5px",
    },

    /* Spinner colors */
    ".spinner-secondary": {
      borderTopColor: "rgb(var(--s) / 1)",
    },

    ".spinner-success": {
      borderTopColor: "rgb(var(--su, 34 197 94) / 1)",
    },

    /* Dots loader */
    ".loader-dots": {
      display: "inline-flex",
      gap: ".5rem",
    },

    ".loader-dot": {
      width: ".75rem",
      height: ".75rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--p) / 1)",
      animation: "vraithui-dot-bounce 1.4s infinite ease-in-out both",
    },

    ".loader-dot:nth-child(1)": {
      animationDelay: "-0.32s",
    },

    ".loader-dot:nth-child(2)": {
      animationDelay: "-0.16s",
    },

    "@keyframes vraithui-dot-bounce": {
      "0%, 80%, 100%": {
        transform: "scale(0)",
        opacity: "0.5",
      },
      "40%": {
        transform: "scale(1)",
        opacity: "1",
      },
    },
  };
}
