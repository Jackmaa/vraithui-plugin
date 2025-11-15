export const semanticUtilities = {
  /* ========== PRIMARY & SECONDARY ========== */
  ".bg-primary": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--p) / var(--tw-bg-opacity))",
  },
  ".text-primary": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--p) / var(--tw-text-opacity))",
  },
  ".border-primary": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--p) / var(--tw-border-opacity))",
  },
  ".bg-secondary": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--s) / var(--tw-bg-opacity))",
  },
  ".text-secondary": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--s) / var(--tw-text-opacity))",
  },
  ".border-secondary": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--s) / var(--tw-border-opacity))",
  },

  /* ========== SEMANTIC COLORS ========== */
  ".bg-info": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--in) / var(--tw-bg-opacity))",
  },
  ".bg-success": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--su) / var(--tw-bg-opacity))",
  },
  ".bg-warning": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--wa) / var(--tw-bg-opacity))",
  },
  ".bg-error": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--er) / var(--tw-bg-opacity))",
  },

  /* Light backgrounds (12% opacity) */
  ".bg-info-light": {
    backgroundColor: "rgb(var(--in) / 0.12)",
  },
  ".bg-success-light": {
    backgroundColor: "rgb(var(--su) / 0.12)",
  },
  ".bg-warning-light": {
    backgroundColor: "rgb(var(--wa) / 0.12)",
  },
  ".bg-error-light": {
    backgroundColor: "rgb(var(--er) / 0.12)",
  },

  /* ========== TEXT COLORS ========== */
  ".text-info": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--in) / var(--tw-text-opacity))",
  },
  ".text-success": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--su) / var(--tw-text-opacity))",
  },
  ".text-warning": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--wa) / var(--tw-text-opacity))",
  },
  ".text-error": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--er) / var(--tw-text-opacity))",
  },

  /* ========== BORDER COLORS ========== */
  ".border-info": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--in) / var(--tw-border-opacity))",
  },
  ".border-success": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--su) / var(--tw-border-opacity))",
  },
  ".border-warning": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--wa) / var(--tw-border-opacity))",
  },
  ".border-error": {
    "--tw-border-opacity": "1",
    borderColor: "rgb(var(--er) / var(--tw-border-opacity))",
  },

  /* ========== RING COLORS (for focus states) ========== */
  ".ring-info": {
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgb(var(--in) / var(--tw-ring-opacity))",
  },
  ".ring-success": {
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgb(var(--su) / var(--tw-ring-opacity))",
  },
  ".ring-warning": {
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgb(var(--wa) / var(--tw-ring-opacity))",
  },
  ".ring-error": {
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgb(var(--er) / var(--tw-ring-opacity))",
  },

  /* ========== ACCENT/PANEL UTILITIES ========== */
  ".bg-accent": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(var(--accent) / var(--tw-bg-opacity))",
  },
  ".text-accent": {
    "--tw-text-opacity": "1",
    color: "rgb(var(--accent) / var(--tw-text-opacity))",
  },
  ".bg-panel": {
    backgroundColor: "rgb(var(--panel))",
  },
  ".bg-panel-2": {
    backgroundColor: "rgb(var(--panel-2))",
  },

  /* ========== EFFECTS ========== */
  ".shadow-soft": {
    boxShadow: "0 1px 2px rgb(0 0 0 / 0.06), 0 1px 3px rgb(0 0 0 / 0.08)",
  },
  ".glass": {
    backgroundColor: "rgb(255 255 255 / 0.08)",
    backdropFilter: "saturate(180%) blur(10px)",
    border: "1px solid rgb(255 255 255 / 0.12)",
  },
  ".glass-strong": {
    backgroundColor: "rgb(255 255 255 / 0.12)",
    backdropFilter: "saturate(200%) blur(16px)",
    border: "1px solid rgb(255 255 255 / 0.18)",
  },
  ".glass-subtle": {
    backgroundColor: "rgb(255 255 255 / 0.05)",
    backdropFilter: "saturate(160%) blur(8px)",
    border: "1px solid rgb(255 255 255 / 0.08)",
  },
};
