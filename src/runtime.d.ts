/**
 * VraithUI Runtime TypeScript Definitions
 */

export interface ModalHelpers {
  open: (id: string | HTMLElement) => void;
  close: (id: string | HTMLElement) => void;
  toggle: (id: string | HTMLElement) => void;
  init: () => void;
}

export interface DropdownHelpers {
  open: (id: string | HTMLElement) => void;
  close: (id: string | HTMLElement) => void;
  toggle: (id: string | HTMLElement) => void;
  closeAll: () => void;
  init: () => void;
}

export interface CommandPaletteHelpers {
  open: (id: string | HTMLElement) => void;
  close: (id: string | HTMLElement) => void;
  toggle: (id: string | HTMLElement) => void;
  init: () => void;
}

export interface DrawerHelpers {
  open: (id: string | HTMLElement) => void;
  close: (id: string | HTMLElement) => void;
  toggle: (id: string | HTMLElement) => void;
  init: () => void;
}

export interface ToastOptions {
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  dismissible?: boolean;
}

export interface ToastHelpers {
  show: (message: string, options?: ToastOptions) => HTMLElement;
  dismiss: (toast: HTMLElement) => void;
  info: (message: string, options?: Omit<ToastOptions, 'type'>) => HTMLElement;
  success: (message: string, options?: Omit<ToastOptions, 'type'>) => HTMLElement;
  warning: (message: string, options?: Omit<ToastOptions, 'type'>) => HTMLElement;
  error: (message: string, options?: Omit<ToastOptions, 'type'>) => HTMLElement;
}

export interface TabsHelpers {
  activate: (tab: string | HTMLElement) => void;
  init: () => void;
}

export interface AccordionHelpers {
  toggle: (item: string | HTMLElement) => void;
  open: (item: string | HTMLElement) => void;
  close: (item: string | HTMLElement) => void;
  init: () => void;
}

export interface ThemeHelpers {
  set: (themeName: string) => void;
  get: () => string;
  toggle: (themes?: string[]) => void;
  init: () => void;
}

export interface VraithUIInstance {
  modal: ModalHelpers;
  dropdown: DropdownHelpers;
  commandPalette: CommandPaletteHelpers;
  drawer: DrawerHelpers;
  toast: ToastHelpers;
  tabs: TabsHelpers;
  accordion: AccordionHelpers;
  theme: ThemeHelpers;
  init: () => void;
}

export const VraithUI: VraithUIInstance;
export default VraithUI;

/**
 * Custom Events
 */
export interface VraithUIModalEvent extends CustomEvent {
  detail: { modal: HTMLElement };
}

export interface VraithUIDropdownEvent extends CustomEvent {
  detail: { dropdown: HTMLElement };
}

export interface VraithUICommandPaletteEvent extends CustomEvent {
  detail: { palette: HTMLElement };
}

export interface VraithUIDrawerEvent extends CustomEvent {
  detail: { drawer: HTMLElement };
}

export interface VraithUIToastEvent extends CustomEvent {
  detail: { toast: HTMLElement; message?: string; options?: ToastOptions };
}

export interface VraithUITabEvent extends CustomEvent {
  detail: { tab: HTMLElement };
}

export interface VraithUIAccordionEvent extends CustomEvent {
  detail: { item: HTMLElement };
}

export interface VraithUIThemeEvent extends CustomEvent {
  detail: { theme: string };
}

declare global {
  interface WindowEventMap {
    'modal:open': VraithUIModalEvent;
    'modal:close': VraithUIModalEvent;
    'dropdown:open': VraithUIDropdownEvent;
    'dropdown:close': VraithUIDropdownEvent;
    'commandpalette:open': VraithUICommandPaletteEvent;
    'commandpalette:close': VraithUICommandPaletteEvent;
    'drawer:open': VraithUIDrawerEvent;
    'drawer:close': VraithUIDrawerEvent;
    'toast:show': VraithUIToastEvent;
    'toast:dismiss': VraithUIToastEvent;
    'tab:activate': VraithUITabEvent;
    'accordion:open': VraithUIAccordionEvent;
    'accordion:close': VraithUIAccordionEvent;
    'theme:change': VraithUIThemeEvent;
    'vraithui:ready': Event;
  }
}
