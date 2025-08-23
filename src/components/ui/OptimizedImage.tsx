'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  onError,
  placeholder = 'blur',
  blurDataURL,
  quality = 85
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  // Intersection Observer for lazy loading
  const observerRef = useCallback((node: HTMLDivElement) => {
    if (node && !priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px' // Start loading 50px before the image enters viewport
        }
      );
      observer.observe(node);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate blur data URL if not provided
  const defaultBlurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#F8F5F0"/>
    </svg>`
  ).toString('base64')}`;

  // Note: Next.js Image component handles srcSet automatically

  if (hasError) {
    return (
      <div
        className={cn(
          'image-placeholder flex items-center justify-center bg-cream',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center text-warm-gray">
          <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <p className="text-xs">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={observerRef}
      className={cn(
        'relative overflow-hidden',
        fill ? 'w-full h-full' : '',
        className
      )}
      style={!fill ? { width, height } : undefined}
    >
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div
          className={cn(
            'skeleton absolute inset-0 z-10',
            fill ? 'w-full h-full' : ''
          )}
          style={!fill ? { width, height } : undefined}
        />
      )}

      {/* Actual image - only render when in view */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          {...(fill ? { fill } : { width: width || 400, height: height || 300 })}
          className={cn(
            'object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          sizes={sizes}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          onLoadingComplete={handleLoad}
          onError={handleError}
          // Performance optimizations
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {/* Placeholder when not in view */}
      {!isInView && !priority && (
        <div
          className="image-placeholder w-full h-full flex items-center justify-center"
          style={!fill ? { width, height } : undefined}
        >
          <svg className="w-8 h-8 text-warm-gray opacity-30" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

// Preset sizes for common use cases
export const MobileOptimizedImage = (props: Omit<OptimizedImageProps, 'sizes'>) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
  />
);

export const PortfolioImage = (props: Omit<OptimizedImageProps, 'sizes' | 'quality'>) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    quality={90} // Higher quality for portfolio
  />
);

export const ThumbnailImage = (props: Omit<OptimizedImageProps, 'sizes' | 'quality'>) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
    quality={75} // Lower quality for thumbnails
  />
);