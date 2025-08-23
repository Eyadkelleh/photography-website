'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  aspectRatio?: string;
}

interface MobileGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export const MobileGallery: React.FC<MobileGalleryProps> = ({
  images,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Touch gesture handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeIndex < images.length - 1) {
      navigateToImage(activeIndex + 1);
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(30);
      }
    }
    if (isRightSwipe && activeIndex > 0) {
      navigateToImage(activeIndex - 1);
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(30);
      }
    }
  };

  const navigateToImage = useCallback((index: number) => {
    setActiveIndex(index);
    
    // Scroll gallery to center the active image
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = container.clientWidth * 0.85; // 85% as defined in CSS
      const scrollPosition = index * (imageWidth + 16); // 16px gap
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const openFullscreen = (index: number) => {
    setActiveIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
    
    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          if (activeIndex > 0) navigateToImage(activeIndex - 1);
          break;
        case 'ArrowRight':
          if (activeIndex < images.length - 1) navigateToImage(activeIndex + 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, activeIndex, images.length, navigateToImage]);

  // Preload images for smoother experience
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    // Preload current and next 2 images
    for (let i = activeIndex; i < Math.min(activeIndex + 3, images.length); i++) {
      preloadImage(images[i].src);
    }
  }, [activeIndex, images]);

  const handleImageLoad = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageStart = (imageId: string) => {
    setIsLoading(prev => ({ ...prev, [imageId]: true }));
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-cream rounded-lg">
        <p className="text-warm-gray">No images to display</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Gallery */}
      <div className={cn('relative', className)}>
        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollContainerRef}
          className="mobile-gallery"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="mobile-gallery-item relative"
              onClick={() => openFullscreen(index)}
            >
              {/* Loading skeleton */}
              {isLoading[image.id] && (
                <div className="absolute inset-0 skeleton rounded-lg" />
              )}
              
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 active:scale-95"
                onLoadingComplete={() => handleImageLoad(image.id)}
                onLoadStart={() => handleImageStart(image.id)}
                priority={index < 2} // Prioritize first 2 images
              />
              
              {/* Image overlay with title */}
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.title}</p>
                </div>
              )}
              
              {/* Active indicator */}
              {index === activeIndex && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-gold-accent rounded-full border-2 border-white" />
              )}
            </div>
          ))}
        </div>

        {/* Image counter */}
        <div className="flex justify-center mt-4">
          <span className="text-sm text-warm-gray">
            {activeIndex + 1} of {images.length}
          </span>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center space-x-2 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToImage(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200 touch-target',
                index === activeIndex
                  ? 'bg-gold-accent scale-125'
                  : 'bg-warm-gray/30 hover:bg-warm-gray/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black"
          onClick={closeFullscreen}
        >
          {/* Close button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-10 touch-target bg-black/50 text-white rounded-full p-3 backdrop-blur-sm"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen image container */}
          <div
            ref={fullscreenRef}
            className="flex items-center justify-center h-full p-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative max-w-full max-h-full">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation arrows */}
              {activeIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToImage(activeIndex - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 touch-target bg-black/50 text-white rounded-full p-3 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {activeIndex < images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToImage(activeIndex + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 touch-target bg-black/50 text-white rounded-full p-3 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Fullscreen image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <h3 className="text-lg font-medium mb-2">{images[activeIndex].title}</h3>
            <p className="text-sm text-white/80">
              {activeIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};