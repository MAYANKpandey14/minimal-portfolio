// Performance monitoring utilities
export const measurePerformance = (name: string) => {
  const start = performance.now();
  
  return {
    end: () => {
      const duration = performance.now() - start;
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
      
      // Report to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'timing_complete', {
          name,
          value: Math.round(duration)
        });
      }
    }
  };
};

// Debounce utility for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for scroll/resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if ('PerformanceObserver' in window) {
    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    new PerformanceObserver((list) => {
      let cls = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      console.log('CLS:', cls);
    }).observe({ entryTypes: ['layout-shift'] });
  }
};