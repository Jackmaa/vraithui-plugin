// src/themes.js
export const themes = {
  /* ========= BASE ========= */
  ":root": {
    /* core palette (RGB channels) */
    "--p": "34 197 94" /* primary */,
    "--pc": "255 255 255" /* primary-foreground */,
    "--s": "59 130 246" /* secondary */,
    "--sc": "255 255 255" /* secondary-foreground */,
    "--bg": "255 255 255" /* base background */,
    "--fg": "17 24 39" /* base foreground */,

    /* panels / surfaces */
    "--panel": "243 244 246" /* gray-100 */,
    "--panel-2": "229 231 235" /* gray-200 */,

    /* accent alias */
    "--accent": "34 197 94" /* same as primary */,

    /* borders */
    "--border": "0 0 0 / 0.1",

    /* semantic colors */
    "--in": "59 130 246" /* info -> blue 500 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "234 179 8" /* warning -> yellow 500 */,
    "--er": "239 68 68" /* error -> red 500 */,

    /* shapes */
    "--rounded": ".75rem",
    "--radius-btn": ".75rem",
    "--radius-card": ".75rem",

    /* extras (overlay/focus) */
    "--overlay": "0.5",
    "--focus-alpha": "0.35",

    /* vim modes */
    "--mode-n": "99 102 241" /* Normal (indigo) */,
    "--mode-i": "34 197 94" /* Insert (green) */,
    "--mode-v": "244 114 182" /* Visual (pink) */,
    "--mode-r": "239 68 68" /* Replace (red) */,
  },

  /* ========== DARK ========== */
  '[data-theme="dark"]': {
    "--p": "99 102 241",
    "--pc": "255 255 255",
    "--s": "20 184 166",
    "--sc": "0 0 0",
    "--bg": "17 24 39",
    "--fg": "229 231 235",
    "--panel": "31 41 55",
    "--panel-2": "55 65 81",
    "--accent": "99 102 241",
    "--border": "255 255 255 / 0.1",

    /* semantic colors */
    "--in": "96 165 250" /* info -> blue 400 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "251 191 36" /* warning -> amber 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "99 102 241",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== BRAND (clair) ========== */
  '[data-theme="brand"]': {
    "--p": "234 88 12" /* orange 600 */,
    "--pc": "255 255 255",
    "--s": "14 165 233" /* sky 500 */,
    "--sc": "0 0 0",
    "--bg": "250 250 250" /* fond légèrement gris */,
    "--fg": "15 23 42" /* slate 900 */,
    "--panel": "226 232 240" /* slate-200 */,
    "--panel-2": "203 213 225" /* slate-300 */,
    "--accent": "234 88 12",
    "--border": "0 0 0 / 0.12",

    /* semantic colors */
    "--in": "14 165 233" /* info -> sky 500 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "245 158 11" /* warning -> amber 500 */,
    "--er": "239 68 68" /* error -> red 500 */,

    "--overlay": "0.5",
    "--focus-alpha": "0.35",

    "--mode-n": "234 88 12",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== BRAND DARK ========== */
  '[data-theme="brand-dark"]': {
    "--p": "234 88 12",
    "--pc": "255 255 255",
    "--s": "14 165 233",
    "--sc": "0 0 0",
    "--bg": "12 14 18",
    "--fg": "232 236 244",
    "--panel": "18 22 28",
    "--panel-2": "24 28 36",
    "--accent": "234 88 12",
    "--border": "255 255 255 / 0.07",

    /* semantic colors */
    "--in": "56 189 248" /* info -> sky 400 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "251 191 36" /* warning -> amber 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "234 88 12",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== LUXURY (sombre) ========== */
  '[data-theme="luxury"]': {
    "--p": "202 138 4" /* amber 600 */,
    "--pc": "0 0 0",
    "--s": "217 119 6" /* orange 600 */,
    "--sc": "0 0 0",
    "--bg": "10 10 12",
    "--fg": "232 232 236",
    "--panel": "18 18 22",
    "--panel-2": "24 24 29",
    "--accent": "253 154 0" /* gold */,
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "56 189 248" /* info -> sky 400 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "251 191 36" /* warning -> amber 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "253 154 0",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== CYBERPUNK (sombre) ========== */
  '[data-theme="cyberpunk"]': {
    "--p": "236 72 153" /* fuchsia 500 */,
    "--pc": "0 0 0",
    "--s": "34 211 238" /* cyan 400 */,
    "--sc": "0 0 0",
    "--bg": "3 7 18" /* zinc 950-ish */,
    "--fg": "216 233 255",
    "--panel": "8 12 24",
    "--panel-2": "12 18 36",
    "--accent": "0 255 255" /* cyan accent */,
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "34 211 238" /* info -> cyan 400 */,
    "--su": "132 204 22" /* success -> lime 500 */,
    "--wa": "250 204 21" /* warning -> yellow 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.65",
    "--focus-alpha": "0.5",

    "--mode-n": "99 102 241",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== PASTEL (clair) ========== */
  '[data-theme="pastel"]': {
    "--p": "236 72 153" /* fuchsia 500 */,
    "--pc": "255 255 255",
    "--s": "96 165 250" /* blue 400 */,
    "--sc": "0 0 0",
    "--bg": "255 255 255",
    "--fg": "23 23 23" /* zinc 900 */,
    "--panel": "249 250 251",
    "--panel-2": "243 244 246",
    "--accent": "236 72 153",
    "--border": "0 0 0 / 0.08",

    /* semantic colors */
    "--in": "96 165 250" /* info -> blue 400 */,
    "--su": "74 222 128" /* success -> green 400 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.5",
    "--focus-alpha": "0.35",

    "--mode-n": "236 72 153",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== NEUTRAL (clair) ========== */
  '[data-theme="neutral"]': {
    "--p": "64 64 64" /* neutral 600 */,
    "--pc": "255 255 255",
    "--s": "115 115 115" /* neutral 400 */,
    "--sc": "255 255 255",
    "--bg": "250 250 250" /* neutral 50 */,
    "--fg": "10 10 10" /* neutral 900 */,
    "--panel": "229 229 229" /* neutral-200 */,
    "--panel-2": "212 212 212" /* neutral-300 */,
    "--accent": "82 82 82",
    "--border": "0 0 0 / 0.15",

    /* semantic colors */
    "--in": "59 130 246" /* info -> blue 500 */,
    "--su": "34 197 94" /* success -> green 500 */,
    "--wa": "234 179 8" /* warning -> yellow 500 */,
    "--er": "239 68 68" /* error -> red 500 */,

    "--overlay": "0.5",
    "--focus-alpha": "0.35",

    "--mode-n": "82 82 82",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== VELVET CHARCOAL ========== */
  '[data-theme="velvet-charcoal"]': {
    "--p": "245 222 179" /* creme */,
    "--pc": "0 0 0",
    "--s": "54 69 79",
    "--sc": "245 222 179",
    "--bg": "54 69 79" /* #36454F Velvet Charcoal */,
    "--fg": "245 222 179" /* #F5DEB3 Golden Creme */,
    "--panel": "64 82 92",
    "--panel-2": "74 92 102",
    "--accent": "245 222 179",
    "--border": "255 255 255 / 0.08",

    /* semantic colors */
    "--in": "125 211 252" /* info -> sky 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "245 222 179",
    "--mode-i": "132 204 22",
    "--mode-v": "236 72 153",
    "--mode-r": "239 68 68",
  },

  /* ========== PERSIAN PLUM ========== */
  '[data-theme="persian-plum"]': {
    "--p": "240 173 214",
    "--pc": "112 28 28",
    "--s": "112 28 28",
    "--sc": "240 173 214",
    "--bg": "112 28 28" /* #701C1C Persian Plum */,
    "--fg": "240 173 214" /* #F0ADD6 Ivory Quartz */,
    "--panel": "82 20 20",
    "--panel-2": "61 15 15",
    "--accent": "240 173 214",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "240 173 214",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== BORDEAUX SILK ========== */
  '[data-theme="bordeaux-silk"]': {
    "--p": "196 195 208",
    "--pc": "80 34 45",
    "--s": "80 34 45",
    "--sc": "196 195 208",
    "--bg": "80 34 45" /* #50222D Bordeaux */,
    "--fg": "196 195 208" /* #C4C3D0 Silver Dust */,
    "--panel": "60 25 33",
    "--panel-2": "45 20 25",
    "--accent": "196 195 208",
    "--border": "255 255 255 / 0.05",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "196 195 208",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== REGAL GOLD ========== */
  '[data-theme="regal-gold"]': {
    "--p": "255 215 0",
    "--pc": "0 0 0",
    "--s": "53 56 57",
    "--sc": "255 215 0",
    "--bg": "53 56 57" /* #353839 Onyx */,
    "--fg": "255 215 0" /* #FFD700 Gold */,
    "--panel": "43 46 47",
    "--panel-2": "33 36 37",
    "--accent": "255 215 0",
    "--border": "255 255 255 / 0.05",

    /* semantic colors */
    "--in": "96 165 250" /* info -> blue 400 */,
    "--su": "132 204 22" /* success -> lime 500 */,
    "--wa": "251 191 36" /* warning -> amber 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "255 215 0",
    "--mode-i": "132 204 22",
    "--mode-v": "236 72 153",
    "--mode-r": "239 68 68",
  },

  /* ========== VELVET INDIGO ========== */
  '[data-theme="velvet-indigo"]': {
    "--p": "229 228 226",
    "--pc": "75 0 130",
    "--s": "75 0 130",
    "--sc": "229 228 226",
    "--bg": "75 0 130" /* #4B0082 Indigo */,
    "--fg": "229 228 226" /* #E5E4E2 Platinum */,
    "--panel": "60 0 100",
    "--panel-2": "45 0 75",
    "--accent": "229 228 226",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "229 228 226",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== DEEP JUNGLE ========== */
  '[data-theme="deep-jungle"]': {
    "--p": "206 212 106",
    "--pc": "7 85 59",
    "--s": "7 85 59",
    "--sc": "206 212 106",
    "--bg": "7 85 59" /* #07553B Deep Jungle */,
    "--fg": "206 212 106" /* #CED46A Light Olive */,
    "--panel": "5 65 45",
    "--panel-2": "3 45 30",
    "--accent": "206 212 106",
    "--border": "255 255 255 / 0.05",

    /* semantic colors */
    "--in": "125 211 252" /* info -> sky 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "206 212 106",
    "--mode-i": "132 204 22",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== CRIMSON PEACH ========== */
  '[data-theme="crimson-peach"]': {
    "--p": "255 223 185",
    "--pc": "164 25 61",
    "--s": "164 25 61",
    "--sc": "255 223 185",
    "--bg": "164 25 61" /* #A4193D Crimson */,
    "--fg": "255 223 185" /* #FFDFB9 Peach */,
    "--panel": "130 20 50",
    "--panel-2": "100 15 40",
    "--accent": "255 223 185",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "255 223 185",
    "--mode-i": "132 204 22",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== IMPERIAL BLUE ========== */
  '[data-theme="imperial-blue"]': {
    "--p": "192 8 129",
    "--pc": "255 255 255",
    "--s": "0 35 102",
    "--sc": "255 255 255",
    "--bg": "0 35 102" /* #002366 Imperial Blue */,
    "--fg": "192 8 129" /* #C00881 Vintage Rose */,
    "--panel": "0 28 82",
    "--panel-2": "0 20 60",
    "--accent": "192 8 129",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "192 8 129",
    "--mode-i": "132 204 22",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== OXFORD MAIZE ========== */
  '[data-theme="oxford-maize"]': {
    "--p": "245 208 66",
    "--pc": "10 23 78",
    "--s": "10 23 78",
    "--sc": "245 208 66",
    "--bg": "10 23 78" /* #0A174E Oxford Blue */,
    "--fg": "245 208 66" /* #F5D042 Maize */,
    "--panel": "15 30 90",
    "--panel-2": "20 35 100",
    "--accent": "245 208 66",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "245 208 66",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== RICH BLACK ========== */
  '[data-theme="rich-black"]': {
    "--p": "254 231 21",
    "--pc": "0 0 0",
    "--s": "16 24 32",
    "--sc": "254 231 21",
    "--bg": "16 24 32" /* #101820 Rich Black */,
    "--fg": "254 231 21" /* #FEE715 Vivid Yellow */,
    "--panel": "20 30 40",
    "--panel-2": "25 35 45",
    "--accent": "254 231 21",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "96 165 250" /* info -> blue 400 */,
    "--su": "132 204 22" /* success -> lime 500 */,
    "--wa": "251 191 36" /* warning -> amber 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "254 231 21",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== MYSTIC JADE (clair) ========== */
  '[data-theme="mystic-jade"]': {
    "--p": "126 124 206",
    "--pc": "255 255 255",
    "--s": "119 168 168",
    "--sc": "0 0 0",
    "--bg": "119 168 168" /* #77A8A8 Mystic Jade */,
    "--fg": "126 124 206" /* #7E7CCE Pale Violet */,
    "--panel": "100 140 140",
    "--panel-2": "80 110 110",
    "--accent": "126 124 206",
    "--border": "255 255 255 / 0.08",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "74 222 128" /* success -> green 400 */,
    "--wa": "250 204 21" /* warning -> yellow 400 */,
    "--er": "248 113 113" /* error -> red 400 */,

    "--overlay": "0.5",
    "--focus-alpha": "0.35",

    "--mode-n": "126 124 206",
    "--mode-i": "34 197 94",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },

  /* ========== LUSH MERLOT ========== */
  '[data-theme="lush-merlot"]': {
    "--p": "197 168 128",
    "--pc": "115 0 0",
    "--s": "115 0 0",
    "--sc": "197 168 128",
    "--bg": "115 0 0" /* #730000 Merlot */,
    "--fg": "197 168 128" /* #C5A880 Gold */,
    "--panel": "90 0 0",
    "--panel-2": "70 0 0",
    "--accent": "197 168 128",
    "--border": "255 255 255 / 0.06",

    /* semantic colors */
    "--in": "147 197 253" /* info -> blue 300 */,
    "--su": "134 239 172" /* success -> green 300 */,
    "--wa": "253 224 71" /* warning -> yellow 300 */,
    "--er": "252 165 165" /* error -> red 300 */,

    "--overlay": "0.6",
    "--focus-alpha": "0.45",

    "--mode-n": "197 168 128",
    "--mode-i": "132 204 22",
    "--mode-v": "244 114 182",
    "--mode-r": "239 68 68",
  },
};
