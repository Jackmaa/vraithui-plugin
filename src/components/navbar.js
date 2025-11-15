export default function navbarComponent() {
  return {
    ".navbar": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      width: "100%",
      padding: ".75rem 1rem",
      backgroundColor: "rgb(var(--bg) / 1)",
      color: "rgb(var(--fg) / 1)",
      borderBottomWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.08)",
    },
    ".navbar-sticky": {
      position: "sticky",
      top: "0",
      zIndex: "40",
      backgroundColor: "rgb(var(--bg) / 0.95)",
      backdropFilter: "saturate(180%) blur(8px)",
    },
    ".navbar-start, .navbar-center, .navbar-end": {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
    },
    ".navbar-start": { flex: "0 0 auto" },
    ".navbar-center": { flex: "1 1 0%", justifyContent: "center" },
    ".navbar-end": { flex: "0 0 auto", justifyContent: "flex-end" },
    ".navbar-brand": { fontWeight: "800", letterSpacing: "-0.02em" },

    /* Menu burger */
    ".navbar-burger": {
      display: "none",
      flexDirection: "column",
      gap: ".25rem",
      padding: ".5rem",
      cursor: "pointer",
      border: "none",
      background: "transparent",
      "@media (max-width: 768px)": {
        display: "flex",
      },
    },
    ".navbar-burger-line": {
      width: "1.5rem",
      height: "2px",
      backgroundColor: "rgb(var(--fg) / 1)",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },
    ".navbar-burger.active .navbar-burger-line:nth-child(1)": {
      transform: "rotate(45deg) translateY(7px)",
    },
    ".navbar-burger.active .navbar-burger-line:nth-child(2)": {
      opacity: "0",
    },
    ".navbar-burger.active .navbar-burger-line:nth-child(3)": {
      transform: "rotate(-45deg) translateY(-7px)",
    },

    /* Menu mobile */
    ".navbar-menu": {
      "@media (max-width: 768px)": {
        position: "fixed",
        top: "4rem",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgb(var(--bg) / 0.98)",
        backdropFilter: "blur(10px)",
        padding: "1.5rem",
        transform: "translateX(-100%)",
        transition: "transform 0.3s ease",
        zIndex: "30",
        overflow: "auto",
      },
    },
    ".navbar-menu.active": {
      "@media (max-width: 768px)": {
        transform: "translateX(0)",
      },
    },
    ".navbar-links": {
      display: "flex",
      gap: ".5rem",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        gap: ".25rem",
      },
    },
    ".navbar-link": {
      padding: ".5rem .75rem",
      borderRadius: ".5rem",
      color: "rgb(var(--fg) / 0.8)",
      textDecoration: "none",
      transition: "all 0.2s",
      "&:hover": {
        color: "rgb(var(--fg) / 1)",
        backgroundColor: "rgb(var(--fg) / 0.05)",
      },
    },

    /* Navbar variants */
    ".navbar-primary": {
      backgroundColor: "rgb(var(--p) / 1)",
      color: "rgb(var(--pc) / 1)",
      borderColor: "transparent",
    },
    ".navbar-primary .navbar-link": {
      color: "rgb(var(--pc) / 0.85)",
      "&:hover": {
        color: "rgb(var(--pc) / 1)",
        backgroundColor: "rgb(255 255 255 / 0.1)",
      },
    },
    ".navbar-primary .navbar-burger-line": {
      backgroundColor: "rgb(var(--pc) / 1)",
    },

    ".navbar-glass": {
      backgroundColor: "rgb(var(--bg) / 0.7)",
      backdropFilter: "saturate(180%) blur(10px)",
      borderColor: "rgb(255 255 255 / 0.12)",
    },

    ".navbar-shadow": {
      boxShadow: "0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06)",
    },
  };
}
