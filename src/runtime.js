/**
 * VraithUI Runtime Helpers
 * JavaScript utilities for interactive components
 */

export const VraithUI = {
  /**
   * Modal helpers
   */
  modal: {
    open: (id) => {
      const modal = typeof id === 'string' ? document.getElementById(id) : id;
      if (modal) {
        modal.setAttribute('data-open', 'true');
        document.body.style.overflow = 'hidden';
        modal.dispatchEvent(new CustomEvent('modal:open', { detail: { modal } }));
      }
    },
    close: (id) => {
      const modal = typeof id === 'string' ? document.getElementById(id) : id;
      if (modal) {
        modal.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
        modal.dispatchEvent(new CustomEvent('modal:close', { detail: { modal } }));
      }
    },
    toggle: (id) => {
      const modal = typeof id === 'string' ? document.getElementById(id) : id;
      if (modal) {
        const isOpen = modal.getAttribute('data-open') === 'true';
        VraithUI.modal[isOpen ? 'close' : 'open'](modal);
      }
    },
    init: () => {
      document.addEventListener('click', (e) => {
        // Close on backdrop click
        if (e.target.classList.contains('modal') && e.target.getAttribute('data-open') === 'true') {
          VraithUI.modal.close(e.target);
        }
        // Close on close button click
        if (e.target.closest('[data-close]')) {
          const modal = e.target.closest('.modal');
          if (modal) VraithUI.modal.close(modal);
        }
      });
      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const openModal = document.querySelector('.modal[data-open="true"]');
          if (openModal) VraithUI.modal.close(openModal);
        }
      });
    }
  },

  /**
   * Dropdown helpers
   */
  dropdown: {
    open: (id) => {
      const dropdown = typeof id === 'string' ? document.getElementById(id) : id;
      if (dropdown) {
        VraithUI.dropdown.closeAll();
        dropdown.setAttribute('data-open', 'true');
        dropdown.dispatchEvent(new CustomEvent('dropdown:open', { detail: { dropdown } }));
      }
    },
    close: (id) => {
      const dropdown = typeof id === 'string' ? document.getElementById(id) : id;
      if (dropdown) {
        dropdown.setAttribute('data-open', 'false');
        dropdown.dispatchEvent(new CustomEvent('dropdown:close', { detail: { dropdown } }));
      }
    },
    toggle: (id) => {
      const dropdown = typeof id === 'string' ? document.getElementById(id) : id;
      if (dropdown) {
        const isOpen = dropdown.getAttribute('data-open') === 'true';
        VraithUI.dropdown[isOpen ? 'close' : 'open'](dropdown);
      }
    },
    closeAll: () => {
      document.querySelectorAll('.dropdown[data-open="true"]').forEach(dropdown => {
        VraithUI.dropdown.close(dropdown);
      });
    },
    init: () => {
      document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.dropdown-toggle');
        if (toggle) {
          e.preventDefault();
          const dropdown = toggle.closest('.dropdown');
          if (dropdown) VraithUI.dropdown.toggle(dropdown);
        } else if (!e.target.closest('.dropdown-menu')) {
          VraithUI.dropdown.closeAll();
        }
      });
    }
  },

  /**
   * Command Palette helpers
   */
  commandPalette: {
    open: (id) => {
      const palette = typeof id === 'string' ? document.getElementById(id) : id;
      if (palette) {
        palette.setAttribute('data-open', 'true');
        document.body.style.overflow = 'hidden';
        const input = palette.querySelector('.command-palette-input');
        if (input) setTimeout(() => input.focus(), 100);
        palette.dispatchEvent(new CustomEvent('commandpalette:open', { detail: { palette } }));
      }
    },
    close: (id) => {
      const palette = typeof id === 'string' ? document.getElementById(id) : id;
      if (palette) {
        palette.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
        palette.dispatchEvent(new CustomEvent('commandpalette:close', { detail: { palette } }));
      }
    },
    toggle: (id) => {
      const palette = typeof id === 'string' ? document.getElementById(id) : id;
      if (palette) {
        const isOpen = palette.getAttribute('data-open') === 'true';
        VraithUI.commandPalette[isOpen ? 'close' : 'open'](palette);
      }
    },
    init: () => {
      // Keyboard shortcut (Cmd/Ctrl + K)
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          const palette = document.querySelector('.command-palette');
          if (palette) VraithUI.commandPalette.toggle(palette);
        }
        if (e.key === 'Escape') {
          const openPalette = document.querySelector('.command-palette[data-open="true"]');
          if (openPalette) VraithUI.commandPalette.close(openPalette);
        }
      });
      // Close on overlay click
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('command-palette-overlay')) {
          const palette = e.target.closest('.command-palette');
          if (palette) VraithUI.commandPalette.close(palette);
        }
      });
    }
  },

  /**
   * Drawer helpers
   */
  drawer: {
    open: (id) => {
      const drawer = typeof id === 'string' ? document.getElementById(id) : id;
      if (drawer) {
        drawer.setAttribute('data-open', 'true');
        document.body.style.overflow = 'hidden';
        drawer.dispatchEvent(new CustomEvent('drawer:open', { detail: { drawer } }));
      }
    },
    close: (id) => {
      const drawer = typeof id === 'string' ? document.getElementById(id) : id;
      if (drawer) {
        drawer.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
        drawer.dispatchEvent(new CustomEvent('drawer:close', { detail: { drawer } }));
      }
    },
    toggle: (id) => {
      const drawer = typeof id === 'string' ? document.getElementById(id) : id;
      if (drawer) {
        const isOpen = drawer.getAttribute('data-open') === 'true';
        VraithUI.drawer[isOpen ? 'close' : 'open'](drawer);
      }
    },
    init: () => {
      document.addEventListener('click', (e) => {
        // Close on backdrop click
        if (e.target.classList.contains('drawer-overlay')) {
          const drawer = e.target.closest('.drawer');
          if (drawer) VraithUI.drawer.close(drawer);
        }
        // Close on close button
        if (e.target.closest('[data-drawer-close]')) {
          const drawer = e.target.closest('.drawer');
          if (drawer) VraithUI.drawer.close(drawer);
        }
      });
      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const openDrawer = document.querySelector('.drawer[data-open="true"]');
          if (openDrawer) VraithUI.drawer.close(openDrawer);
        }
      });
    }
  },

  /**
   * Toast notifications
   */
  toast: {
    show: (message, options = {}) => {
      const {
        type = 'info', // 'info' | 'success' | 'warning' | 'error'
        duration = 3000,
        position = 'bottom-right', // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
        dismissible = true
      } = options;

      // Create or get toast container
      let container = document.querySelector('.toast');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast';
        document.body.appendChild(container);
      }

      // Apply position classes
      container.className = 'toast';
      if (position.includes('top')) container.classList.add('toast-top');
      if (position.includes('left')) container.classList.add('toast-left');
      if (position.includes('center')) container.classList.add('toast-center');

      // Create toast item
      const toast = document.createElement('div');
      toast.className = `toast-item toast-${type}`;

      const content = document.createElement('div');
      content.textContent = message;
      toast.appendChild(content);

      if (dismissible) {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.className = 'btn btn-ghost btn-sm';
        closeBtn.onclick = () => VraithUI.toast.dismiss(toast);
        toast.appendChild(closeBtn);
      }

      container.appendChild(toast);

      // Auto dismiss
      if (duration > 0) {
        setTimeout(() => VraithUI.toast.dismiss(toast), duration);
      }

      toast.dispatchEvent(new CustomEvent('toast:show', { detail: { toast, message, options } }));

      return toast;
    },
    dismiss: (toast) => {
      toast.style.animation = 'vraithui-toast-out 150ms ease';
      setTimeout(() => {
        toast.remove();
        // Remove container if empty
        const container = document.querySelector('.toast');
        if (container && container.children.length === 0) {
          container.remove();
        }
      }, 150);
      toast.dispatchEvent(new CustomEvent('toast:dismiss', { detail: { toast } }));
    },
    info: (message, options = {}) => VraithUI.toast.show(message, { ...options, type: 'info' }),
    success: (message, options = {}) => VraithUI.toast.show(message, { ...options, type: 'success' }),
    warning: (message, options = {}) => VraithUI.toast.show(message, { ...options, type: 'warning' }),
    error: (message, options = {}) => VraithUI.toast.show(message, { ...options, type: 'error' })
  },

  /**
   * Tabs helpers
   */
  tabs: {
    activate: (tab) => {
      const tabElement = typeof tab === 'string' ? document.querySelector(tab) : tab;
      if (!tabElement) return;

      const tabContainer = tabElement.closest('.tabs, .tabs-vertical');
      if (!tabContainer) return;

      // Deactivate all tabs
      tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));

      // Activate clicked tab
      tabElement.classList.add('tab-active');

      // Show corresponding panel
      const targetId = tabElement.getAttribute('data-tab');
      if (targetId) {
        const allPanels = document.querySelectorAll(`[data-tab-panel]`);
        allPanels.forEach(panel => panel.style.display = 'none');

        const targetPanel = document.querySelector(`[data-tab-panel="${targetId}"]`);
        if (targetPanel) targetPanel.style.display = 'block';
      }

      tabElement.dispatchEvent(new CustomEvent('tab:activate', { detail: { tab: tabElement } }));
    },
    init: () => {
      document.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab');
        if (tab) {
          e.preventDefault();
          VraithUI.tabs.activate(tab);
        }
      });
    }
  },

  /**
   * Accordion helpers
   */
  accordion: {
    toggle: (item) => {
      const accordionItem = typeof item === 'string' ? document.querySelector(item) : item;
      if (!accordionItem) return;

      const isOpen = accordionItem.getAttribute('data-open') === 'true';

      if (isOpen) {
        VraithUI.accordion.close(accordionItem);
      } else {
        VraithUI.accordion.open(accordionItem);
      }
    },
    open: (item) => {
      const accordionItem = typeof item === 'string' ? document.querySelector(item) : item;
      if (!accordionItem) return;

      accordionItem.setAttribute('data-open', 'true');
      accordionItem.dispatchEvent(new CustomEvent('accordion:open', { detail: { item: accordionItem } }));
    },
    close: (item) => {
      const accordionItem = typeof item === 'string' ? document.querySelector(item) : item;
      if (!accordionItem) return;

      accordionItem.setAttribute('data-open', 'false');
      accordionItem.dispatchEvent(new CustomEvent('accordion:close', { detail: { item: accordionItem } }));
    },
    init: () => {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.accordion-trigger');
        if (trigger) {
          e.preventDefault();
          const item = trigger.closest('.accordion-item');
          if (item) VraithUI.accordion.toggle(item);
        }
      });
    }
  },

  /**
   * Theme switcher
   */
  theme: {
    set: (themeName) => {
      document.documentElement.setAttribute('data-theme', themeName);
      localStorage.setItem('vraithui-theme', themeName);
      document.dispatchEvent(new CustomEvent('theme:change', { detail: { theme: themeName } }));
    },
    get: () => {
      return document.documentElement.getAttribute('data-theme') || 'default';
    },
    toggle: (themes = ['default', 'dark']) => {
      const current = VraithUI.theme.get();
      const currentIndex = themes.indexOf(current);
      const nextIndex = (currentIndex + 1) % themes.length;
      VraithUI.theme.set(themes[nextIndex]);
    },
    init: () => {
      const savedTheme = localStorage.getItem('vraithui-theme');
      if (savedTheme) {
        VraithUI.theme.set(savedTheme);
      }
    }
  },

  /**
   * Initialize all components
   */
  init: () => {
    VraithUI.modal.init();
    VraithUI.dropdown.init();
    VraithUI.commandPalette.init();
    VraithUI.drawer.init();
    VraithUI.tabs.init();
    VraithUI.accordion.init();
    VraithUI.theme.init();

    document.dispatchEvent(new CustomEvent('vraithui:ready'));
  }
};

// Auto-init if DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', VraithUI.init);
  } else {
    VraithUI.init();
  }
}

// Default export
export default VraithUI;
