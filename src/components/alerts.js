// src/components/alerts.js
export default function alertsAndToasts() {
  const alertBase = {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: ".5rem",
    padding: ".75rem .9rem",
    borderRadius: "var(--radius-card)",
    borderWidth: "1px",
    borderColor: "rgb(0 0 0 / 0.08)",
    backgroundColor: "rgb(var(--fg) / 0.04)",
    color: "rgb(var(--fg) / 1)",
  };
  const alertTitle = { fontWeight: "700", marginBottom: ".125rem" };
  const alertActions = {
    marginLeft: "auto",
    display: "inline-flex",
    gap: ".5rem",
  };

  const alertInfo = {
    backgroundColor: "rgb(var(--in, var(--s)) / 0.12)",
    borderColor: "rgb(var(--in, var(--s)) / 0.35)",
    color: "rgb(var(--in, var(--s)) / 1)",
  };
  const alertSuccess = {
    backgroundColor: "rgb(var(--su, var(--p)) / 0.12)",
    borderColor: "rgb(var(--su, var(--p)) / 0.35)",
    color: "rgb(var(--su, var(--p)) / 1)",
  };
  const alertWarning = {
    backgroundColor: "rgb(var(--wa, 245 158 11) / 0.12)",
    borderColor: "rgb(var(--wa, 245 158 11) / 0.35)",
    color: "rgb(var(--wa, 245 158 11) / 1)",
  };
  const alertError = {
    backgroundColor: "rgb(var(--er, 239 68 68) / 0.12)",
    borderColor: "rgb(var(--er, 239 68 68) / 0.35)",
    color: "rgb(var(--er, 239 68 68) / 1)",
  };

  return {
    /* ALERT */
    ".alert": alertBase,
    ".alert-title": alertTitle,
    ".alert-actions": alertActions,
    ".alert-info": alertInfo,
    ".alert-success": alertSuccess,
    ".alert-warning": alertWarning,
    ".alert-error": alertError,

    /* TOAST container */
    ".toast": {
      position: "fixed",
      right: "1rem",
      bottom: "1rem",
      display: "grid",
      gap: ".5rem",
      zIndex: "60",
    },
    ".toast-top": { top: "1rem", bottom: "auto" },
    ".toast-left": { left: "1rem", right: "auto" },
    ".toast-center": { left: "50%", transform: "translateX(-50%)" },

    /* TOAST item (hérite visuellement d'alertBase) */
    ".toast-item": {
      ...alertBase,
      display: "grid",
      gridAutoFlow: "row",
      alignItems: "center",
      animation: "vraithui-toast-in 150ms ease",
    },
    ".toast-item.toast-info": alertInfo,
    ".toast-item.toast-success": alertSuccess,
    ".toast-item.toast-warning": alertWarning,
    ".toast-item.toast-error": alertError,

    /* keyframes */
    "@keyframes vraithui-toast-in": {
      from: { transform: "translateY(6px)", opacity: "0" },
      to: { transform: "translateY(0)", opacity: "1" },
    },
    "@keyframes vraithui-toast-out": {
      from: { transform: "translateY(0)", opacity: "1" },
      to: { transform: "translateY(6px)", opacity: "0" },
    },
  };
}
