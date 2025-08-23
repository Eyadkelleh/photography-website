'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveLoaderProps {
  className?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export const ProgressiveLoader: React.FC<ProgressiveLoaderProps> = ({
  className,
  children,
  fallback,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible && fallback) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div 
      className={cn(
        'transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

// Skeleton components for loading states
export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: 'full' | 'half' | 'quarter';
}> = ({ lines = 1, className, width = 'full' }) => {
  const widthClasses = {
    full: 'w-full',
    half: 'w-1/2',
    quarter: 'w-1/4'
  };

  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-4 skeleton rounded',
            index === lines - 1 && width !== 'full' ? widthClasses[width] : 'w-full'
          )}
        />
      ))}
    </div>
  );
};

export const SkeletonImage: React.FC<{
  className?: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
}> = ({ className, aspectRatio = 'landscape' }) => {
  const aspectClasses = {
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]'
  };

  return (
    <div
      className={cn(
        'skeleton rounded-lg w-full',
        aspectClasses[aspectRatio],
        className
      )}
    />
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('p-6 border border-soft-beige rounded-lg', className)}>
    <SkeletonImage className="mb-4" />
    <SkeletonText lines={2} />
  </div>
);

// Loading screen for initial app load
export const InitialLoadingScreen: React.FC = () => (
  <div className="fixed inset-0 bg-warm-white z-50 flex flex-col items-center justify-center">
    {/* Logo skeleton */}
    <div className="mb-8">
      <div className="w-16 h-16 skeleton rounded-full mb-4" />
      <div className="w-32 h-6 skeleton rounded mb-2" />
      <div className="w-20 h-4 skeleton rounded mx-auto" />
    </div>

    {/* Progress indicator */}
    <div className="w-64 h-2 bg-soft-beige rounded-full overflow-hidden">
      <div className="h-full bg-gold-accent rounded-full animate-pulse" style={{ width: '60%' }} />
    </div>
    
    {/* Loading text */}
    <p className="text-warm-gray text-sm mt-4 animate-pulse">
      Loading beautiful moments...
    </p>
  </div>
);

// Network status indicator
export const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOfflineMessage && isOnline) {
    return null;
  }

  return (
    <div 
      className={cn(
        'fixed top-16 md:top-20 left-4 right-4 z-40 p-3 rounded-lg shadow-lg transition-all duration-300',
        isOnline 
          ? 'bg-sage-green text-white' 
          : 'bg-orange-500 text-white'
      )}
    >
      <div className="flex items-center space-x-2">
        <div className={cn('w-2 h-2 rounded-full', isOnline ? 'bg-white' : 'bg-white animate-pulse')} />
        <span className="text-sm font-medium">
          {isOnline ? 'Back online!' : 'You\'re offline - Some features may be limited'}
        </span>
      </div>
    </div>
  );
};

// Service Worker registration component
export const ServiceWorkerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return <>{children}</>;
};