// Analytics utility functions
export function trackContactFormSubmission(callback?: () => void) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'kontakt', {
      'event_callback': callback,
      'event_timeout': 2000,
      'event_category': 'form',
      'event_label': 'contact_form_submission'
    });
  } else if (callback) {
    // If gtag is not available, still execute callback
    callback();
  }
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
