/**
 * VraithUI Tailwind CSS Plugin TypeScript Definitions
 */

import { PluginCreator } from 'tailwindcss/types/config';

declare const vraithui: PluginCreator;
export default vraithui;

/**
 * Available themes
 */
export type VraithUITheme =
  | 'default'
  | 'dark'
  | 'brand'
  | 'brand-dark'
  | 'luxury'
  | 'cyberpunk'
  | 'pastel'
  | 'neutral'
  | 'velvet-charcoal'
  | 'persian-plum'
  | 'bordeaux-silk'
  | 'regal-gold'
  | 'velvet-indigo'
  | 'deep-jungle'
  | 'crimson-peach'
  | 'imperial-blue'
  | 'oxford-maize'
  | 'rich-black'
  | 'mystic-jade'
  | 'lush-merlot';

/**
 * Component class names
 */
export interface VraithUIComponents {
  // Buttons
  btn: string;
  'btn-primary': string;
  'btn-secondary': string;
  'btn-ghost': string;
  'btn-outline': string;
  'btn-success': string;
  'btn-error': string;
  'btn-warning': string;
  'btn-info': string;
  'btn-block': string;
  'btn-icon': string;
  'btn-sm': string;
  'btn-lg': string;
  'btn-loading': string;
  'btn-group': string;
  'btn-group-vertical': string;

  // Cards
  card: string;
  'card-body': string;
  'card-title': string;
  'card-subtitle': string;
  'card-actions': string;
  'card-image-top': string;
  'card-compact': string;
  'card-bordered': string;
  'card-hover': string;
  'card-glass': string;
  'card-flat': string;

  // Inputs
  input: string;
  'input-error': string;
  'input-success': string;
  'input-warning': string;
  'input-group': string;
  'input-group-text': string;
  'input-float': string;
  'input-sm': string;
  'input-lg': string;
  'form-group': string;
  'form-label': string;
  'form-label-required': string;
  'form-help': string;
  'form-error': string;

  // New Components
  kbd: string;
  'kbd-sm': string;
  'kbd-lg': string;
  fab: string;
  'fab-bottom-right': string;
  'fab-bottom-left': string;
  'fab-top-right': string;
  'fab-top-left': string;
  'fab-sm': string;
  'fab-lg': string;
  'fab-extended': string;
  'fab-secondary': string;
  'fab-accent': string;
  sheet: string;
  'sheet-overlay': string;
  'sheet-content': string;
  'sheet-header': string;
  'sheet-handle': string;
  'sheet-title': string;
  'sheet-body': string;
  'sheet-footer': string;
  'sheet-side': string;
  'sheet-side-left': string;

  // Modal
  modal: string;
  'modal-box': string;
  'modal-header': string;
  'modal-title': string;
  'modal-actions': string;
  'modal-close': string;

  // Dropdown
  dropdown: string;
  'dropdown-toggle': string;
  'dropdown-menu': string;
  'dropdown-item': string;
  'dropdown-item-active': string;
  'dropdown-item-disabled': string;
  'dropdown-item-destructive': string;

  // Alert & Toast
  alert: string;
  'alert-info': string;
  'alert-success': string;
  'alert-warning': string;
  'alert-error': string;
  toast: string;
  'toast-item': string;

  // Badge
  badge: string;

  // And many more...
}
