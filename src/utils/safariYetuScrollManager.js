import { scrollManagerErrorHandler } from './safariYetuErrorHandler.js';

class SafariYetuScrollManager {
  constructor() {
    this.isDialogOpen = false;
    this.originalOverflow = '';
    this.cleanupFunctions = [];
    this.checkInterval = null;
    this.retryCount = 0;
    this.maxRetries = 5;
    this.maxCheckDuration = 30000; // 30 seconds max
    this.startTime = null;
    this.isDestroyed = false;
    this.errorHandler = scrollManagerErrorHandler;
  }

  disableScroll() {
    try {
      if (!this.isDialogOpen) {
        this.originalOverflow = document.body.style.overflow || '';
        document.body.style.overflow = 'hidden';
        this.isDialogOpen = true;
        console.log('SafariYetu: Scroll disabled');
      }
    } catch (error) {
      this.errorHandler.logError(error, 'disableScroll');
    }
  }

  enableScroll() {
    try {
      if (this.isDialogOpen) {
        document.body.style.overflow = this.originalOverflow;
        this.isDialogOpen = false;
        console.log('SafariYetu: Scroll enabled');
      }
    } catch (error) {
      this.errorHandler.logError(error, 'enableScroll');
    }
  }

  handleEscapeKey(event) {
    if (event.key === 'Escape' && this.isDialogOpen) {
      console.log('SafariYetu: ESC key pressed, closing dialog');
      this.closeDialog();
    }
  }

  handleOutsideClick(event) {
    try {
      // Check if clicked element is part of SafariYetu dialog
      const safariDialog = document.querySelector('[data-safariplus-dialog], .safariplus-dialog, .safari-plus-dialog');
      if (safariDialog && !safariDialog.contains(event.target) && this.isDialogOpen) {
        console.log('SafariYetu: Outside click detected, closing dialog');
        this.closeDialog();
      }
    } catch (error) {
      this.errorHandler.logError(error, 'handleOutsideClick');
    }
  }

  checkDialogStatus() {
    if (this.isDestroyed) {
      this.cleanup();
      return;
    }

    try {
      // Check if we've exceeded maximum check duration
      if (this.startTime && (Date.now() - this.startTime) > this.maxCheckDuration) {
        this.errorHandler.handleTimeoutError('Dialog monitoring', this.maxCheckDuration);
        console.warn('SafariYetu: Dialog check timeout, cleaning up');
        this.closeDialog();
        return;
      }

      // Look for SafariYetu dialog elements in DOM
      const dialogSelectors = [
        '[data-safariplus-dialog]',
        '.safariplus-dialog',
        '.safari-plus-dialog',
        '[id*="safari"]',
        '[class*="safari"]',
        '.modal[style*="block"]',
        '.dialog[style*="block"]'
      ];

      const dialogExists = dialogSelectors.some(selector => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).some(el => {
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
      });

      // Check if SafariYetu script is still active
      const safariPlusActive = typeof window.safariplus !== 'undefined' && 
                              window.safariplus.isDialogOpen && 
                              window.safariplus.isDialogOpen();

      if (!dialogExists && !safariPlusActive && this.isDialogOpen) {
        console.log('SafariYetu: Dialog closed, re-enabling scroll');
        this.closeDialog();
      }
    } catch (error) {
      this.errorHandler.logError(error, 'checkDialogStatus');
    }
  }

  startDialogMonitoring() {
    if (this.isDestroyed) return;

    try {
      this.startTime = Date.now();
      this.disableScroll();

      // Set up ESC key listener
      const escHandler = (event) => this.handleEscapeKey(event);
      document.addEventListener('keydown', escHandler);
      this.cleanupFunctions.push(() => document.removeEventListener('keydown', escHandler));

      // Set up outside click listener with delay to avoid immediate triggering
      setTimeout(() => {
        if (!this.isDestroyed) {
          const clickHandler = (event) => this.handleOutsideClick(event);
          document.addEventListener('click', clickHandler);
          this.cleanupFunctions.push(() => document.removeEventListener('click', clickHandler));
        }
      }, 500);

      // Start polling for dialog closure
      this.checkInterval = setInterval(() => this.checkDialogStatus(), 1000);
      this.cleanupFunctions.push(() => {
        if (this.checkInterval) {
          clearInterval(this.checkInterval);
          this.checkInterval = null;
        }
      });

      console.log('SafariYetu: Dialog monitoring started');
    } catch (error) {
      this.errorHandler.handleDialogError(error, 'startDialogMonitoring');
      this.closeDialog();
    }
  }

  closeDialog() {
    try {
      this.enableScroll();
      this.cleanup();
    } catch (error) {
      this.errorHandler.handleDialogError(error, 'closeDialog');
    }
  }

  cleanup() {
    try {
      // Mark as destroyed to prevent further operations
      this.isDestroyed = true;

      // Execute all cleanup functions
      this.cleanupFunctions.forEach(cleanupFn => {
        try {
          cleanupFn();
        } catch (error) {
          this.errorHandler.handleCleanupError(error, 'event listeners');
        }
      });
      this.cleanupFunctions = [];

      // Clear interval if still active
      if (this.checkInterval) {
        clearInterval(this.checkInterval);
        this.checkInterval = null;
      }

      // Reset state
      this.startTime = null;
      this.retryCount = 0;

      console.log('SafariYetu: Cleanup completed');
    } catch (error) {
      this.errorHandler.handleCleanupError(error, 'general cleanup');
    }
  }

  async loadSafariYetuScript() {
    if (this.isDestroyed) return false;

    return new Promise((resolve) => {
      const checkScript = () => {
        if (typeof window.safariplus !== 'undefined') {
          console.log('SafariYetu: Script already loaded');
          resolve(true);
          return;
        }

        this.retryCount++;
        if (this.retryCount > this.maxRetries) {
          this.errorHandler.handleScriptLoadError(
            new Error('Script loading failed after maximum retries'), 
            this.retryCount
          );
          console.warn('SafariYetu: Max retries exceeded for script loading');
          resolve(false);
          return;
        }

        console.log(`SafariYetu: Script loading attempt ${this.retryCount}/${this.maxRetries}`);
        
        // Check again after delay
        setTimeout(checkScript, 1000);
      };

      checkScript();
    });
  }

  async openBookingDialog(bookingData) {
    if (this.isDestroyed) {
      throw new Error('ScrollManager has been destroyed');
    }

    try {
      // Ensure SafariYetu script is loaded
      const scriptLoaded = await this.loadSafariYetuScript();
      if (!scriptLoaded) {
        const errorDetails = this.errorHandler.handleScriptLoadError(
          new Error('SafariYetu script not available'),
          this.retryCount
        );
        throw new Error(errorDetails.userMessage);
      }

      // Start monitoring before opening dialog
      this.startDialogMonitoring();

      // Open SafariYetu dialog
      if (typeof window.safariplus.newTripDialog === 'function') {
        await window.safariplus.newTripDialog(bookingData);
      } else {
        throw new Error('SafariYetu booking function is not available');
      }

    } catch (error) {
      this.errorHandler.handleDialogError(error, 'open');
      this.closeDialog();
      throw this.errorHandler.coerceError(error);
    }
  }

  // Static method to create a new instance for each booking session
  static createInstance() {
    return new SafariYetuScrollManager();
  }

  // React cleanup helper
  getReactCleanupFunction() {
    return () => {
      this.cleanup();
    };
  }
}

// Export for both CommonJS and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SafariYetuScrollManager;
} else if (typeof window !== 'undefined') {
  window.SafariYetuScrollManager = SafariYetuScrollManager;
}

export default SafariYetuScrollManager;