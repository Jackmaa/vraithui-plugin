// src/components/forms.js
export default function formsComponent() {
  return {
    /* ========== CHECKBOX ========== */
    ".checkbox": {
      appearance: "none",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: ".25rem",
      borderWidth: "2px",
      borderColor: "rgb(var(--fg) / 0.25)",
      backgroundColor: "rgb(var(--bg) / 1)",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.2s ease",
      flexShrink: "0",
      "&:hover": {
        borderColor: "rgb(var(--p) / 0.5)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
      "&:checked": {
        backgroundColor: "rgb(var(--p) / 1)",
        borderColor: "rgb(var(--p) / 1)",
      },
      "&:checked::before": {
        content: '""',
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
        width: ".35rem",
        height: ".65rem",
        borderRight: "2px solid rgb(var(--pc) / 1)",
        borderBottom: "2px solid rgb(var(--pc) / 1)",
      },
      "&:disabled": {
        opacity: "0.5",
        cursor: "not-allowed",
      },
      "&:indeterminate": {
        backgroundColor: "rgb(var(--p) / 1)",
        borderColor: "rgb(var(--p) / 1)",
      },
      "&:indeterminate::before": {
        content: '""',
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: ".625rem",
        height: "2px",
        backgroundColor: "rgb(var(--pc) / 1)",
      },
    },

    /* Checkbox sizes */
    ".checkbox-sm": {
      width: "1rem",
      height: "1rem",
    },
    ".checkbox-sm:checked::before": {
      width: ".25rem",
      height: ".5rem",
    },

    ".checkbox-lg": {
      width: "1.5rem",
      height: "1.5rem",
    },
    ".checkbox-lg:checked::before": {
      width: ".4rem",
      height: ".75rem",
    },

    /* Checkbox variants */
    ".checkbox-secondary:checked": {
      backgroundColor: "rgb(var(--s) / 1)",
      borderColor: "rgb(var(--s) / 1)",
    },
    ".checkbox-success:checked": {
      backgroundColor: "rgb(var(--su) / 1)",
      borderColor: "rgb(var(--su) / 1)",
    },
    ".checkbox-warning:checked": {
      backgroundColor: "rgb(var(--wa) / 1)",
      borderColor: "rgb(var(--wa) / 1)",
    },
    ".checkbox-error:checked": {
      backgroundColor: "rgb(var(--er) / 1)",
      borderColor: "rgb(var(--er) / 1)",
    },

    /* ========== RADIO ========== */
    ".radio": {
      appearance: "none",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "50%",
      borderWidth: "2px",
      borderColor: "rgb(var(--fg) / 0.25)",
      backgroundColor: "rgb(var(--bg) / 1)",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.2s ease",
      flexShrink: "0",
      "&:hover": {
        borderColor: "rgb(var(--p) / 0.5)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
      "&:checked": {
        borderColor: "rgb(var(--p) / 1)",
        borderWidth: ".375rem",
      },
      "&:disabled": {
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },

    /* Radio sizes */
    ".radio-sm": {
      width: "1rem",
      height: "1rem",
    },
    ".radio-sm:checked": {
      borderWidth: ".3rem",
    },

    ".radio-lg": {
      width: "1.5rem",
      height: "1.5rem",
    },
    ".radio-lg:checked": {
      borderWidth: ".45rem",
    },

    /* Radio variants */
    ".radio-secondary:checked": {
      borderColor: "rgb(var(--s) / 1)",
    },
    ".radio-success:checked": {
      borderColor: "rgb(var(--su) / 1)",
    },
    ".radio-warning:checked": {
      borderColor: "rgb(var(--wa) / 1)",
    },
    ".radio-error:checked": {
      borderColor: "rgb(var(--er) / 1)",
    },

    /* ========== TOGGLE / SWITCH ========== */
    ".toggle": {
      appearance: "none",
      width: "2.75rem",
      height: "1.5rem",
      backgroundColor: "rgb(var(--fg) / 0.25)",
      borderRadius: "9999px",
      position: "relative",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      flexShrink: "0",
      "&:hover": {
        backgroundColor: "rgb(var(--fg) / 0.35)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: ".125rem",
        left: ".125rem",
        width: "1.25rem",
        height: "1.25rem",
        backgroundColor: "rgb(var(--bg) / 1)",
        borderRadius: "50%",
        transition: "transform 0.2s ease",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      },
      "&:checked": {
        backgroundColor: "rgb(var(--p) / 1)",
      },
      "&:checked::before": {
        transform: "translateX(1.25rem)",
      },
      "&:disabled": {
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },

    /* Toggle sizes */
    ".toggle-sm": {
      width: "2rem",
      height: "1.125rem",
    },
    ".toggle-sm::before": {
      width: ".875rem",
      height: ".875rem",
    },
    ".toggle-sm:checked::before": {
      transform: "translateX(.875rem)",
    },

    ".toggle-lg": {
      width: "3.5rem",
      height: "1.875rem",
    },
    ".toggle-lg::before": {
      width: "1.625rem",
      height: "1.625rem",
    },
    ".toggle-lg:checked::before": {
      transform: "translateX(1.625rem)",
    },

    /* Toggle variants */
    ".toggle-secondary:checked": {
      backgroundColor: "rgb(var(--s) / 1)",
    },
    ".toggle-success:checked": {
      backgroundColor: "rgb(var(--su) / 1)",
    },
    ".toggle-warning:checked": {
      backgroundColor: "rgb(var(--wa) / 1)",
    },
    ".toggle-error:checked": {
      backgroundColor: "rgb(var(--er) / 1)",
    },

    /* ========== FORM LABEL ========== */
    ".form-label": {
      display: "inline-flex",
      alignItems: "center",
      gap: ".5rem",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.9)",
      cursor: "pointer",
      userSelect: "none",
    },

    ".form-label-required::after": {
      content: '"*"',
      color: "rgb(var(--er, 239 68 68) / 1)",
      marginLeft: ".125rem",
    },

    /* ========== FORM GROUP ========== */
    ".form-group": {
      display: "grid",
      gap: ".5rem",
    },

    ".form-group-label": {
      display: "block",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.9)",
      marginBottom: ".25rem",
    },

    ".form-group-hint": {
      fontSize: ".75rem",
      color: "rgb(var(--fg) / 0.6)",
      marginTop: ".25rem",
    },

    ".form-group-error": {
      fontSize: ".75rem",
      color: "rgb(var(--er, 239 68 68) / 1)",
      marginTop: ".25rem",
      display: "flex",
      alignItems: "center",
      gap: ".25rem",
    },

    /* ========== SELECT ========== */
    ".select": {
      appearance: "none",
      width: "100%",
      borderRadius: "var(--rounded)",
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.12)",
      backgroundColor: "rgb(255 255 255 / 1)",
      color: "rgb(15 23 42 / 1)",
      padding: ".625rem 2.5rem .625rem .875rem",
      lineHeight: "1.25",
      cursor: "pointer",
      backgroundImage:
        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
      backgroundPosition: "right .5rem center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1.5rem 1.5rem",
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
        borderColor: "rgb(var(--p) / 1)",
      },
      "&:disabled": {
        opacity: "0.5",
        pointerEvents: "none",
      },
    },

    '[data-theme="dark"] .select': {
      backgroundColor: "rgb(31 41 55 / 1)",
      color: "rgb(229 231 235 / 1)",
      borderColor: "rgb(255 255 255 / 0.08)",
      backgroundImage:
        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
    },

    /* Select sizes */
    ".select-sm": {
      padding: ".5rem 2rem .5rem .75rem",
      fontSize: ".875rem",
    },

    ".select-lg": {
      padding: ".75rem 2.75rem .75rem 1rem",
      fontSize: "1rem",
    },

    /* ========== TEXTAREA ========== */
    ".textarea": {
      appearance: "none",
      width: "100%",
      borderRadius: "var(--rounded)",
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.12)",
      backgroundColor: "rgb(255 255 255 / 1)",
      color: "rgb(15 23 42 / 1)",
      padding: ".625rem .875rem",
      lineHeight: "1.5",
      resize: "vertical",
      minHeight: "6rem",
      "&::placeholder": {
        color: "rgb(100 116 139 / 1)",
      },
      "&:focus": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow: "0 0 0 3px rgb(var(--p) / 0.35)",
        borderColor: "rgb(var(--p) / 1)",
      },
      "&:disabled": {
        opacity: "0.5",
        pointerEvents: "none",
      },
    },

    '[data-theme="dark"] .textarea': {
      backgroundColor: "rgb(31 41 55 / 1)",
      color: "rgb(229 231 235 / 1)",
      borderColor: "rgb(255 255 255 / 0.08)",
    },

    ".textarea-no-resize": {
      resize: "none",
    },

    /* ========== FIELDSET ========== */
    ".fieldset": {
      borderWidth: "1px",
      borderColor: "rgb(0 0 0 / 0.12)",
      borderRadius: "var(--radius-card)",
      padding: "1rem",
    },

    ".fieldset-legend": {
      fontWeight: "600",
      fontSize: ".875rem",
      color: "rgb(var(--fg) / 0.9)",
      padding: "0 .5rem",
    },
  };
}
