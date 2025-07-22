import { useEffect, useRef } from 'react';
import SafariYetuScrollManager from '../utils/safariYetuScrollManager';

/**
 * React hook for managing SafariYetu scroll behavior
 * Provides automatic cleanup and error handling for SafariYetu integration
 */
export const useSafariYetuScrollManager = () => {
  const scrollManagerRef = useRef(null);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (scrollManagerRef.current) {
        try {
          scrollManagerRef.current.cleanup();
        } catch (error) {
          console.error('Error cleaning up SafariYetu scroll manager:', error);
        } finally {
          scrollManagerRef.current = null;
        }
      }
    };
  }, []);

  /**
   * Open SafariYetu booking dialog with scroll management
   * @param {Object} bookingData - Booking data to pass to SafariYetu
   * @returns {Promise} Promise that resolves when dialog is opened
   */
  const openBookingDialog = async (bookingData) => {
    try {
      // Clean up any existing scroll manager
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
      }

      // Create new scroll manager instance
      scrollManagerRef.current = SafariYetuScrollManager.createInstance();

      // Open dialog with scroll management
      await scrollManagerRef.current.openBookingDialog(bookingData);
      
      return scrollManagerRef.current;
    } catch (error) {
      // Clean up on error
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
      throw error;
    }
  };

  /**
   * Manually close the dialog and clean up
   */
  const closeDialog = () => {
    if (scrollManagerRef.current) {
      try {
        scrollManagerRef.current.closeDialog();
      } catch (error) {
        console.error('Error closing SafariYetu dialog:', error);
      } finally {
        scrollManagerRef.current = null;
      }
    }
  };

  /**
   * Check if dialog is currently open
   * @returns {boolean} Whether the dialog is open
   */
  const isDialogOpen = () => {
    return scrollManagerRef.current && scrollManagerRef.current.isDialogOpen;
  };

  /**
   * Get cleanup function for manual cleanup
   * @returns {Function} Cleanup function
   */
  const getCleanupFunction = () => {
    return () => {
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
    };
  };

  return {
    openBookingDialog,
    closeDialog,
    isDialogOpen,
    getCleanupFunction,
    scrollManager: scrollManagerRef.current
  };
};

export default useSafariYetuScrollManager;