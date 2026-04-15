export const GA_MEASUREMENT_ID = "G-YCV0ZVMX0G";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

export const trackPageView = (path: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: path });
  }
};
