// src/components/avatar.js
export default function avatarComponent() {
  return {
    /* Avatar container */
    ".avatar": {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
    },

    /* Avatar image */
    ".avatar-img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },

    /* Avatar with initials */
    ".avatar-placeholder": {
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: "rgb(var(--p) / 0.15)",
      color: "rgb(var(--p) / 1)",
      fontWeight: "600",
      fontSize: "1rem",
    },

    /* Sizes */
    ".avatar-xs": {
      width: "1.5rem",
      height: "1.5rem",
    },

    ".avatar-xs .avatar-placeholder": {
      width: "1.5rem",
      height: "1.5rem",
      fontSize: ".625rem",
    },

    ".avatar-sm": {
      width: "2rem",
      height: "2rem",
    },

    ".avatar-sm .avatar-placeholder": {
      width: "2rem",
      height: "2rem",
      fontSize: ".75rem",
    },

    ".avatar-md": {
      width: "2.5rem",
      height: "2.5rem",
    },

    ".avatar-lg": {
      width: "3rem",
      height: "3rem",
    },

    ".avatar-lg .avatar-placeholder": {
      width: "3rem",
      height: "3rem",
      fontSize: "1.125rem",
    },

    ".avatar-xl": {
      width: "4rem",
      height: "4rem",
    },

    ".avatar-xl .avatar-placeholder": {
      width: "4rem",
      height: "4rem",
      fontSize: "1.5rem",
    },

    ".avatar-2xl": {
      width: "5rem",
      height: "5rem",
    },

    ".avatar-2xl .avatar-placeholder": {
      width: "5rem",
      height: "5rem",
      fontSize: "2rem",
    },

    /* Square variant */
    ".avatar-square .avatar-img": {
      borderRadius: ".5rem",
    },

    ".avatar-square .avatar-placeholder": {
      borderRadius: ".5rem",
    },

    /* Rounded variant */
    ".avatar-rounded .avatar-img": {
      borderRadius: ".75rem",
    },

    ".avatar-rounded .avatar-placeholder": {
      borderRadius: ".75rem",
    },

    /* Status badge */
    ".avatar-status": {
      position: "absolute",
      bottom: "0",
      right: "0",
      width: ".75rem",
      height: ".75rem",
      borderRadius: "50%",
      border: "2px solid rgb(var(--bg) / 1)",
      backgroundColor: "rgb(var(--fg) / 0.3)",
    },

    ".avatar-status-online": {
      backgroundColor: "rgb(34 197 94 / 1)", // green
    },

    ".avatar-status-offline": {
      backgroundColor: "rgb(156 163 175 / 1)", // gray
    },

    ".avatar-status-busy": {
      backgroundColor: "rgb(239 68 68 / 1)", // red
    },

    ".avatar-status-away": {
      backgroundColor: "rgb(245 158 11 / 1)", // orange
    },

    /* Ring/border */
    ".avatar-ring": {
      padding: ".125rem",
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgb(var(--p)), rgb(var(--s)))",
    },

    ".avatar-ring .avatar-img": {
      border: "2px solid rgb(var(--bg) / 1)",
    },
    ".avatar-ring .avatar-placeholder": {
      border: "2px solid rgb(var(--bg) / 1)",
    },

    /* Group avatars */
    ".avatar-group": {
      display: "inline-flex",
      alignItems: "center",
    },

    ".avatar-group .avatar": {
      marginLeft: "-.5rem",
      border: "2px solid rgb(var(--bg) / 1)",
      transition: "transform 0.2s ease, z-index 0.2s ease",
    },

    ".avatar-group .avatar:first-child": {
      marginLeft: "0",
    },

    ".avatar-group .avatar:hover": {
      transform: "translateY(-2px)",
      zIndex: "10",
    },

    /* Profile card */
    ".profile-card": {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      padding: ".75rem",
      borderRadius: "var(--radius-card)",
      backgroundColor: "rgb(var(--bg) / 1)",
      border: "1px solid rgb(0 0 0 / 0.08)",
      transition: "all 0.2s ease",
      "&:hover": {
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },

    ".profile-info": {
      display: "flex",
      flexDirection: "column",
      gap: ".125rem",
      flex: "1",
      minWidth: "0",
    },

    ".profile-name": {
      fontWeight: "600",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 1)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    ".profile-subtitle": {
      fontSize: ".75rem",
      color: "rgb(var(--fg) / 0.6)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    ".profile-actions": {
      display: "flex",
      gap: ".5rem",
      marginLeft: "auto",
    },
  };
}
