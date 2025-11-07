// src/components/skeleton.js
export default function skeletonComponent() {
  return {
    /* ========== SKELETON LOADER ========== */
    ".skeleton": {
      position: "relative",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      borderRadius: "var(--rounded)",
      overflow: "hidden",
      "&::after": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "linear-gradient(90deg, transparent, rgb(var(--fg) / 0.1), transparent)",
        animation: "vraithui-skeleton 1.5s ease-in-out infinite",
      },
    },

    "@keyframes vraithui-skeleton": {
      "0%": {
        transform: "translateX(-100%)",
      },
      "100%": {
        transform: "translateX(100%)",
      },
    },

    ".skeleton-circle": {
      borderRadius: "50%",
    },

    ".skeleton-text": {
      height: "1rem",
      marginBottom: ".5rem",
      "&:last-child": {
        marginBottom: "0",
        width: "80%",
      },
    },

    ".skeleton-title": {
      height: "1.5rem",
      width: "60%",
      marginBottom: "1rem",
    },

    ".skeleton-avatar": {
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
    },

    ".skeleton-button": {
      height: "2.5rem",
      width: "8rem",
    },

    ".skeleton-card": {
      height: "12rem",
      borderRadius: "var(--radius-card)",
    },
  };
}

