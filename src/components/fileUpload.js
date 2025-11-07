// src/components/fileUpload.js
export default function fileUploadComponent() {
  return {
    /* ========== FILE UPLOAD ========== */
    ".file-upload": {
      position: "relative",
      display: "inline-block",
      width: "100%",
    },

    ".file-upload-input": {
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

    ".file-upload-label": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 2rem",
      border: "2px dashed rgb(var(--border))",
      borderRadius: "var(--rounded)",
      backgroundColor: "rgb(var(--bg))",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "rgb(var(--p) / 0.5)",
        backgroundColor: "rgb(var(--p) / 0.05)",
      },
    },

    ".file-upload-label-dragover": {
      borderColor: "rgb(var(--p) / 1)",
      backgroundColor: "rgb(var(--p) / 0.1)",
    },

    ".file-upload-icon": {
      fontSize: "3rem",
      marginBottom: "1rem",
      color: "rgb(var(--fg) / 0.5)",
    },

    ".file-upload-text": {
      fontSize: "1rem",
      fontWeight: "500",
      color: "rgb(var(--fg))",
      marginBottom: "0.5rem",
    },

    ".file-upload-hint": {
      fontSize: "0.875rem",
      color: "rgb(var(--fg) / 0.6)",
    },

    ".file-list": {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },

    ".file-item": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "0.75rem",
      backgroundColor: "rgb(var(--bg))",
      border: "1px solid rgb(var(--border))",
      borderRadius: "var(--rounded)",
    },

    ".file-item-icon": {
      fontSize: "1.5rem",
      color: "rgb(var(--p) / 1)",
    },

    ".file-item-info": {
      flex: "1",
      minWidth: "0",
    },

    ".file-item-name": {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "rgb(var(--fg))",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    ".file-item-size": {
      fontSize: "0.75rem",
      color: "rgb(var(--fg) / 0.6)",
    },

    ".file-item-progress": {
      width: "100%",
      height: "0.25rem",
      backgroundColor: "rgb(var(--fg) / 0.1)",
      borderRadius: "9999px",
      overflow: "hidden",
      marginTop: "0.5rem",
    },

    ".file-item-progress-bar": {
      height: "100%",
      backgroundColor: "rgb(var(--p) / 1)",
      transition: "width 0.3s ease",
    },

    ".file-item-remove": {
      padding: "0.25rem",
      cursor: "pointer",
      color: "rgb(var(--fg) / 0.6)",
      "&:hover": {
        color: "rgb(var(--er) / 1)",
      },
    },
  };
}

