// src/components/rating.js
export default function ratingComponent() {
  return {
    /* Rating container */
    ".rating": {
      display: "inline-flex",
      gap: ".25rem",
      alignItems: "center",
    },

    /* Rating star */
    ".rating-star": {
      width: "1.5rem",
      height: "1.5rem",
      cursor: "pointer",
      color: "rgb(var(--fg) / 0.2)",
      fill: "currentColor",
      transition: "color 0.2s ease, transform 0.2s ease",
      "&:hover": {
        color: "rgb(var(--p) / 1)",
        transform: "scale(1.1)",
      },
    },

    /* Filled state */
    '.rating-star[data-filled="true"]': {
      color: "rgb(var(--p) / 1)",
    },

    /* Half filled */
    ".rating-star-half": {
      position: "relative",
      overflow: "hidden",
    },

    ".rating-star-half::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "50%",
      height: "100%",
      backgroundColor: "rgb(var(--p) / 1)",
      zIndex: "1",
    },

    /* Readonly state */
    ".rating-readonly .rating-star": {
      cursor: "default",
      pointerEvents: "none",
    },

    ".rating-readonly .rating-star:hover": {
      transform: "none",
    },

    /* Sizes */
    ".rating-sm .rating-star": {
      width: "1rem",
      height: "1rem",
    },

    ".rating-lg .rating-star": {
      width: "2rem",
      height: "2rem",
    },

    ".rating-xl .rating-star": {
      width: "2.5rem",
      height: "2.5rem",
    },

    /* Color variants */
    ".rating-secondary .rating-star[data-filled='true']": {
      color: "rgb(var(--s) / 1)",
    },

    ".rating-warning .rating-star[data-filled='true']": {
      color: "rgb(var(--wa, 245 158 11) / 1)",
    },

    ".rating-success .rating-star[data-filled='true']": {
      color: "rgb(var(--su, 34 197 94) / 1)",
    },

    /* With count */
    ".rating-count": {
      marginLeft: ".5rem",
      fontSize: ".875rem",
      fontWeight: "500",
      color: "rgb(var(--fg) / 0.7)",
    },

    /* Interactive hover effect */
    ".rating:not(.rating-readonly) .rating-star:hover ~ .rating-star": {
      color: "rgb(var(--fg) / 0.2)",
      transform: "none",
    },
  };
}
