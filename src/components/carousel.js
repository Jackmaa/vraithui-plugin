// src/components/carousel.js
export default function carouselComponent() {
  return {
    /* ========== CAROUSEL ========== */
    ".carousel": {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      borderRadius: "var(--radius-card)",
    },

    ".carousel-container": {
      display: "flex",
      transition: "transform 0.5s ease",
      willChange: "transform",
    },

    ".carousel-item": {
      minWidth: "100%",
      flexShrink: "0",
    },

    ".carousel-nav": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--bg) / 0.9)",
      border: "1px solid rgb(var(--border))",
      color: "rgb(var(--fg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--bg))",
        transform: "translateY(-50%) scale(1.1)",
      },
    },

    ".carousel-nav-prev": {
      left: "1rem",
    },

    ".carousel-nav-next": {
      right: "1rem",
    },

    ".carousel-indicators": {
      position: "absolute",
      bottom: "1rem",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "0.5rem",
      zIndex: "10",
    },

    ".carousel-indicator": {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--fg) / 0.3)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.5)",
      },
    },

    ".carousel-indicator-active": {
      backgroundColor: "rgb(var(--p) / 1)",
      width: "2rem",
      borderRadius: "9999px",
    },
  };
}

