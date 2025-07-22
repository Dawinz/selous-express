/**
 * SafariYetu Error Handler Utility
 * Provides standardized error handling and logging for SafariYetu integration
 */

class SafariYetuErrorHandler {
  constructor(component = 'Unknown') {
    this.component = component;
    this.errorHistory = [];
    this.maxErrorHistory = 10;
  }

  /**
   * Coerce any value into an Error object
   * @param {any} error - The error to coerce
   * @returns {Error} Coerced error object
   */
  coerceError(error) {
    if (error instanceof Error) {
      return error;
    }
    
    if (typeof error === 'string') {
      return new Error(error);
    }
    
    if (error && typeof error === 'object') {
      if (error.message) {
        const err = new Error(error.message);
        if (error.stack) err.stack = error.stack;
        if (error.name) err.name = error.name;
        return err;
      }
      
      return new Error(JSON.stringify(error));
    }
    
    return new Error(`Unknown error occurred: ${String(error)}`);
  }

  /**
   * Log error with context and store in history
   * @param {any} error - The error to log
   * @param {string} context - Additional context about where the error occurred
   * @param {Object} metadata - Additional metadata about the error
   */
  logError(error, context = '', metadata = {}) {
    const coercedError = this.coerceError(error);
    const timestamp = new Date().toISOString();
    
    const errorEntry = {
      timestamp,
      component: this.component,
      context,
      message: coercedError.message,
      name: coercedError.name,
      stack: coercedError.stack,
      metadata
    };

    // Add to error history
    this.errorHistory.unshift(errorEntry);
    if (this.errorHistory.length > this.maxErrorHistory) {
      this.errorHistory.pop();
    }

    // Console logging with structured format
    console.group(`🚨 SafariYetu Error [${this.component}]`);
    console.error(`Context: ${context}`);
    console.error(`Message: ${coercedError.message}`);
    console.error(`Time: ${timestamp}`);
    
    if (Object.keys(metadata).length > 0) {
      console.error('Metadata:', metadata);
    }
    
    if (coercedError.stack) {
      console.error('Stack:', coercedError.stack);
    }
    console.groupEnd();

    return errorEntry;
  }

  /**
   * Handle script loading errors
   * @param {any} error - The error that occurred
   * @param {number} retryCount - Current retry count
   * @returns {Object} Error details and suggested actions
   */
  handleScriptLoadError(error, retryCount = 0) {
    const errorEntry = this.logError(error, 'Script Loading', { retryCount });
    
    let userMessage = 'SafariYetu booking system is not available.';
    let shouldRetry = false;
    let retryDelay = 1000;

    if (retryCount < 3) {
      shouldRetry = true;
      retryDelay = Math.min(1000 * Math.pow(2, retryCount), 5000); // Exponential backoff
      userMessage += ' Retrying...';
    } else {
      userMessage += ' Please refresh the page and try again.';
    }

    return {
      errorEntry,
      userMessage,
      shouldRetry,
      retryDelay,
      technicalError: this.coerceError(error).message
    };
  }

  /**
   * Handle dialog operation errors
   * @param {any} error - The error that occurred
   * @param {string} operation - The operation that failed (open, close, monitor)
   * @returns {Object} Error details and user message
   */
  handleDialogError(error, operation = 'unknown') {
    const errorEntry = this.logError(error, `Dialog ${operation}`, { operation });
    
    let userMessage;
    switch (operation.toLowerCase()) {
      case 'open':
        userMessage = 'Unable to open booking system. Please try again.';
        break;
      case 'close':
        userMessage = 'There was an issue closing the booking dialog.';
        break;
      case 'monitor':
        userMessage = 'Booking system monitoring encountered an issue.';
        break;
      default:
        userMessage = 'An error occurred with the booking system.';
    }

    return {
      errorEntry,
      userMessage,
      technicalError: this.coerceError(error).message,
      shouldCleanup: true
    };
  }

  /**
   * Handle cleanup errors (these should be non-fatal)
   * @param {any} error - The error that occurred
   * @param {string} cleanupType - Type of cleanup that failed
   */
  handleCleanupError(error, cleanupType = 'general') {
    this.logError(error, `Cleanup Error (${cleanupType})`, { 
      cleanupType,
      severity: 'warning' 
    });
    // Cleanup errors shouldn't interrupt user flow, just log them
  }

  /**
   * Handle timeout errors
   * @param {string} operation - The operation that timed out
   * @param {number} timeout - The timeout duration in ms
   * @returns {Object} Error details and user message
   */
  handleTimeoutError(operation, timeout) {
    const error = new Error(`${operation} operation timed out after ${timeout}ms`);
    const errorEntry = this.logError(error, 'Timeout', { operation, timeout });
    
    return {
      errorEntry,
      userMessage: 'The booking system is taking too long to respond. Please try again.',
      technicalError: error.message,
      shouldCleanup: true
    };
  }

  /**
   * Get recent error history
   * @param {number} limit - Maximum number of errors to return
   * @returns {Array} Recent error entries
   */
  getErrorHistory(limit = 5) {
    return this.errorHistory.slice(0, limit);
  }

  /**
   * Clear error history
   */
  clearErrorHistory() {
    this.errorHistory = [];
  }

  /**
   * Get error summary for debugging
   * @returns {Object} Summary of errors by type
   */
  getErrorSummary() {
    const summary = {
      total: this.errorHistory.length,
      byContext: {},
      recent: this.errorHistory.slice(0, 3)
    };

    this.errorHistory.forEach(error => {
      const context = error.context || 'Unknown';
      summary.byContext[context] = (summary.byContext[context] || 0) + 1;
    });

    return summary;
  }
}

// Create singleton instances for common components
export const createErrorHandler = (component) => new SafariYetuErrorHandler(component);

// Pre-created instances for common use cases
export const searchFormErrorHandler = new SafariYetuErrorHandler('SearchForm');
export const bookingPageErrorHandler = new SafariYetuErrorHandler('BookingPage');
export const scrollManagerErrorHandler = new SafariYetuErrorHandler('ScrollManager');

export default SafariYetuErrorHandler;