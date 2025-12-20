import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false, 
  sizes = "100vw" 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={cn("overflow-hidden", className)}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
      {(!isInView || !isLoaded) && (
        <div 
          className="bg-muted animate-pulse"
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LazyImage;