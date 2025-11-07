import plugin from "tailwindcss/plugin";
import { themes } from "./themes.js";
import button from "./components/button.js";
import card from "./components/card.js";
import badge from "./components/badge.js";
import input from "./components/input.js";
import modal from "./components/modal.js";
import navbar from "./components/navbar.js";
import drawer from "./components/drawer.js";
import tabs from "./components/tabs.js";
import alerts from "./components/alerts.js";
import accordion from "./components/accordion.js";
import tooltip from "./components/tooltip.js";
import progress from "./components/progress.js";
import rating from "./components/rating.js";
import slider from "./components/slider.js";
import avatar from "./components/avatar.js";
import chip from "./components/chip.js";
import breadcrumb from "./components/breadcrumb.js";
import table from "./components/table.js";
import utilities from "./utilities.js";
import forms from "./components/forms.js";
import dropdown from "./components/dropdown.js";
import divider from "./components/divider.js";
import pagination from "./components/pagination.js";
import skeleton from "./components/skeleton.js";
import steps from "./components/steps.js";
import stats from "./components/stats.js";
import timeline from "./components/timeline.js";
import popover from "./components/popover.js";
import carousel from "./components/carousel.js";
import fileUpload from "./components/fileUpload.js";
import datePicker from "./components/datePicker.js";
import emptyState from "./components/emptyState.js";
import confirmDialog from "./components/confirmDialog.js";
import menu from "./components/menu.js";
import commandPalette from "./components/commandPalette.js";
import treeView from "./components/treeView.js";
import colorPicker from "./components/colorPicker.js";
import tagInput from "./components/tagInput.js";
import multiSelect from "./components/multiSelect.js";
import calendar from "./components/calendar.js";
import timePicker from "./components/timePicker.js";
import dataGrid from "./components/dataGrid.js";
import sidebarNav from "./components/sidebarNav.js";
import backdrop from "./components/backdrop.js";
import rangeInput from "./components/rangeInput.js";
import tabsVertical from "./components/tabsVertical.js";
import notification from "./components/notification.js";
export default plugin(function ({ addBase, addComponents, addUtilities }) {
  // 1) base variables + themes
  addBase(themes);

  // 2) components
  addComponents(button());
  addComponents(card());
  addComponents(badge());
  addComponents(input());
  addComponents(modal());
  addComponents(navbar());
  addComponents(drawer());
  addComponents(tabs());
  addComponents(alerts());
  addComponents(accordion());
  addComponents(tooltip());
  addComponents(progress());
  addComponents(rating());
  addComponents(slider());
  addComponents(avatar());
  addComponents(chip());
  addComponents(breadcrumb());
  addComponents(table());
  addComponents(forms());
  addComponents(dropdown());
  addComponents(divider());
  addComponents(pagination());
  addComponents(skeleton());
  addComponents(steps());
  addComponents(stats());
  addComponents(timeline());
  addComponents(popover());
  addComponents(carousel());
  addComponents(fileUpload());
  addComponents(datePicker());
  addComponents(emptyState());
  addComponents(confirmDialog());
  addComponents(menu());
  addComponents(commandPalette());
  addComponents(treeView());
  addComponents(colorPicker());
  addComponents(tagInput());
  addComponents(multiSelect());
  addComponents(calendar());
  addComponents(timePicker());
  addComponents(dataGrid());
  addComponents(sidebarNav());
  addComponents(backdrop());
  addComponents(rangeInput());
  addComponents(tabsVertical());
  addComponents(notification());

  // 3) built-in utilities
  addUtilities({
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

    /* ========== SEMANTIC COLORS (NEW) ========== */
    // Info
    ".bg-info": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(var(--in) / var(--tw-bg-opacity))",
    },
    ".bg-info-light": {
      backgroundColor: "rgb(var(--in) / 0.12)",
    },
    ".text-info": {
      "--tw-text-opacity": "1",
      color: "rgb(var(--in) / var(--tw-text-opacity))",
    },
    ".border-info": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(var(--in) / var(--tw-border-opacity))",
    },

    // Success
    ".bg-success": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(var(--su) / var(--tw-bg-opacity))",
    },
    ".bg-success-light": {
      backgroundColor: "rgb(var(--su) / 0.12)",
    },
    ".text-success": {
      "--tw-text-opacity": "1",
      color: "rgb(var(--su) / var(--tw-text-opacity))",
    },
    ".border-success": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(var(--su) / var(--tw-border-opacity))",
    },

    // Warning
    ".bg-warning": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(var(--wa) / var(--tw-bg-opacity))",
    },
    ".bg-warning-light": {
      backgroundColor: "rgb(var(--wa) / 0.12)",
    },
    ".text-warning": {
      "--tw-text-opacity": "1",
      color: "rgb(var(--wa) / var(--tw-text-opacity))",
    },
    ".border-warning": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(var(--wa) / var(--tw-border-opacity))",
    },

    // Error
    ".bg-error": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(var(--er) / var(--tw-bg-opacity))",
    },
    ".bg-error-light": {
      backgroundColor: "rgb(var(--er) / 0.12)",
    },
    ".text-error": {
      "--tw-text-opacity": "1",
      color: "rgb(var(--er) / var(--tw-text-opacity))",
    },
    ".border-error": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(var(--er) / var(--tw-border-opacity))",
    },

    /* ========== PANEL/ACCENT COLORS (NEW) ========== */
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
  });

  // 4) extended utilities (animations, effects, etc.)
  addUtilities(utilities());
});
