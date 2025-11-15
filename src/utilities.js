// src/utilities.js
export default function utilities() {
  return {
    /* ========== ANIMATIONS ========== */
    "@keyframes vraithui-fade-in-up": {
      from: {
        opacity: "0",
        transform: "translateY(20px)",
      },
      to: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },

    "@keyframes vraithui-float": {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
    },

    "@keyframes vraithui-shimmer": {
      "0%": { backgroundPosition: "-1000px 0" },
      "100%": { backgroundPosition: "1000px 0" },
    },

    "@keyframes vraithui-pulse": {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },

    /* ========== ANIMATION CLASSES ========== */
    ".animate-fade-in": {
      animation: "vraithui-fade-in-up 0.6s ease-out forwards",
    },

    ".animate-float": {
      animation: "vraithui-float 3s ease-in-out infinite",
    },

    ".animate-shimmer": {
      animation: "vraithui-shimmer 2s linear infinite",
      backgroundSize: "1000px 100%",
    },

    ".animate-pulse": {
      animation: "vraithui-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },

    /* ========== GRADIENT TEXT ========== */
    ".gradient-text": {
      background:
        "linear-gradient(135deg, rgb(var(--p)) 0%, rgb(var(--s)) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    ".gradient-text-vertical": {
      background:
        "linear-gradient(180deg, rgb(var(--p)) 0%, rgb(var(--s)) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    /* ========== GLASS MORPHISM ========== */
    ".glass-card": {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },

    '[data-theme="dark"] .glass-card, [data-theme="brand-dark"] .glass-card, [data-theme="luxury"] .glass-card, [data-theme="cyberpunk"] .glass-card, [data-theme="velvet-charcoal"] .glass-card, [data-theme="persian-plum"] .glass-card, [data-theme="bordeaux-silk"] .glass-card, [data-theme="regal-gold"] .glass-card, [data-theme="velvet-indigo"] .glass-card, [data-theme="deep-jungle"] .glass-card, [data-theme="crimson-peach"] .glass-card, [data-theme="imperial-blue"] .glass-card, [data-theme="oxford-maize"] .glass-card, [data-theme="rich-black"] .glass-card, [data-theme="lush-merlot"] .glass-card':
      {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      },

    ".glass-panel": {
      background: "rgba(var(--panel), 0.7)",
      backdropFilter: "saturate(180%) blur(20px)",
      WebkitBackdropFilter: "saturate(180%) blur(20px)",
    },

    /* ========== HOVER EFFECTS ========== */
    ".card-hover": {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
    },

    ".btn-hover-lift": {
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "translateY(-2px)",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },

    ".hover-glow": {
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0 0 20px rgb(var(--p) / 0.5)",
      },
      ".hover\\:text-[rgb(var(--p))]:hover": {
        color: "rgb(var(--p))",
      }
    },


    /* ========== BACKGROUND PATTERNS ========== */
    ".bg-pattern": {
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(var(--p), 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(var(--s), 0.05) 0%, transparent 50%)`,
    },

    ".bg-pattern-dots": {
      backgroundImage:
        "radial-gradient(rgb(var(--fg) / 0.1) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },

    ".bg-pattern-grid": {
      backgroundImage: `linear-gradient(rgb(var(--fg) / 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgb(var(--fg) / 0.05) 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
    },

    ".bg-gradient-radial": {
      background:
        "radial-gradient(circle at center, rgb(var(--p) / 0.1) 0%, transparent 70%)",
    },

    /* ========== DIVIDERS ========== */
    ".section-divider": {
      width: "60px",
      height: "4px",
      background: "linear-gradient(90deg, rgb(var(--p)), rgb(var(--s)))",
      borderRadius: "2px",
      margin: "0 auto 2rem",
    },

    ".section-divider-left": {
      width: "60px",
      height: "4px",
      background: "linear-gradient(90deg, rgb(var(--p)), rgb(var(--s)))",
      borderRadius: "2px",
      margin: "0 0 2rem",
    },

    ".section-divider-full": {
      width: "100%",
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgb(var(--p)), rgb(var(--s)), transparent)",
      margin: "2rem 0",
    },

    /* ========== CUSTOM SCROLLBAR ========== */
    ".scroll-themed": {
      scrollbarWidth: "thin",
      scrollbarColor: "rgb(var(--p)) rgba(var(--bg), 0.3)",
      "&::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(var(--bg), 0.3)",
        borderRadius: "5px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgb(var(--p))",
        borderRadius: "5px",
        border: "2px solid rgba(var(--bg), 0.3)",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "rgb(var(--s))",
      },
    },

    ".scroll-thin": {
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
      },
    },

    ".scroll-hidden": {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },

    /* ========== BORDERS & OUTLINES ========== */
    ".border-gradient": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(135deg, rgb(var(--p)), rgb(var(--s))) 1",
    },

    ".outline-gradient": {
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: "-2px",
        borderRadius: "inherit",
        padding: "2px",
        background: "linear-gradient(135deg, rgb(var(--p)), rgb(var(--s)))",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      },
    },

    /* ========== SHADOWS ========== */
    ".shadow-glow": {
      boxShadow: "0 0 20px rgba(var(--p), 0.3)",
    },

    ".shadow-glow-lg": {
      boxShadow: "0 0 40px rgba(var(--p), 0.4)",
    },

    ".shadow-colored": {
      boxShadow: "0 10px 30px rgba(var(--p), 0.2)",
    },

    ".shadow-colored-lg": {
      boxShadow: "0 20px 60px rgba(var(--p), 0.3)",
    },

    /* ========== TEXT EFFECTS ========== */
    ".text-shadow": {
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },

    ".text-shadow-lg": {
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },

    ".text-glow": {
      textShadow: "0 0 10px rgba(var(--p), 0.5)",
    },

    /* ========== BACKDROP EFFECTS ========== */
    ".backdrop-blur-sm": {
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
    },

    ".backdrop-blur": {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },

    ".backdrop-blur-lg": {
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    },

    ".backdrop-blur-xl": {
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
    },

    /* ========== INTERACTIVE STATES ========== */
    ".interactive": {
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        opacity: "0.9",
      },
      "&:active": {
        transform: "scale(0.98)",
      },
    },

    ".focus-ring": {
      "&:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
    },

    /* ========== LOADING STATES ========== */
    ".skeleton": {
      background:
        "linear-gradient(90deg, rgb(var(--fg) / 0.05) 25%, rgb(var(--fg) / 0.1) 50%, rgb(var(--fg) / 0.05) 75%)",
      backgroundSize: "200% 100%",
      animation: "vraithui-shimmer 2s linear infinite",
    },

    ".loading-dots::after": {
      content: '"..."',
      animation: "vraithui-pulse 1.5s infinite",
    },

    /* ========== TRANSITIONS ========== */
    ".transition-smooth": {
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    ".transition-bounce": {
      transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },

    /* ========== LAYOUT HELPERS ========== */
    ".center-absolute": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },

    ".center-flex": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    /* ========== ACCESSIBILITY ========== */
    ".sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
    },

    ".reduce-motion": {
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none !important",
        transition: "none !important",
      },
    },
  };
}
