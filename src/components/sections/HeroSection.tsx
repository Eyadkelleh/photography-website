'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button, PhotoButton } from '@/components/ui';

const heroImages = [
  {
    src: '/images/hero/hero-1.jpg',
    alt: 'Professional portrait session capturing authentic moments',
    theme: 'warm'
  },
  {
    src: '/images/hero/hero-2.jpg', 
    alt: 'Elegant wedding photography with artistic composition',
    theme: 'elegant'
  },
  {
    src: '/images/hero/hero-3.jpg',
    alt: 'Creative lifestyle photography in natural settings',
    theme: 'natural'
  },
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Context7-style smooth transitions
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setDirection(1);
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToImage = (index: number) => {
    if (index === currentImage || isTransitioning) return;
    
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  };

  // Context7 modern slide variants with 3D depth
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
      rotateY: direction > 0 ? -15 : 15,
      z: -100,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
      z: -100,
    }),
  };

  const transition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 40,
    mass: 1,
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Modern Context7 Image Stack */}
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
            onAnimationStart={() => setIsTransitioning(true)}
            onAnimationComplete={() => setIsTransitioning(false)}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={heroImages[currentImage].src}
                alt={heroImages[currentImage].alt}
                fill
                priority={currentImage === 0}
                className="object-cover"
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Animated overlay effects based on theme */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  background: heroImages[currentImage].theme === 'warm' 
                    ? 'radial-gradient(circle at 30% 70%, rgba(218, 165, 32, 0.15) 0%, transparent 50%)'
                    : heroImages[currentImage].theme === 'elegant'
                    ? 'radial-gradient(circle at 70% 30%, rgba(244, 189, 189, 0.1) 0%, transparent 50%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(161, 189, 147, 0.1) 0%, transparent 50%)'
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced gradient overlay with motion */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
            'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
            'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 text-center text-white max-w-5xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium mb-6 leading-tight">
            Wunderwerk
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            Rein, authentisch, professionell
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Mit viel Liebe festgehalten
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <PhotoButton 
            href="/contact" 
            variant="primary" 
            icon="camera"
            className="min-w-[280px]"
          >
            Buchen Sie Ihren unvergesslichen Tag
          </PhotoButton>
          <PhotoButton 
            href="/about" 
            variant="secondary" 
            icon="eye"
            className="min-w-[200px]"
          >
            Unsere Geschichte
          </PhotoButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
        >
          <PhotoButton 
            href="#services" 
            variant="secondary" 
            icon="aperture"
            className="min-w-[160px] flex-col gap-1"
          >
            <span className="text-sm">Mehr entdecken</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </PhotoButton>
        </motion.div>
      </div>

      {/* Modern Context7 Navigation Dots */}
      <div className="absolute bottom-6 right-6 flex flex-col space-y-4">
        {heroImages.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => goToImage(index)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Main dot */}
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-500 backdrop-blur-sm ${
                index === currentImage
                  ? 'bg-gold-accent shadow-lg' 
                  : 'bg-white/40 hover:bg-white/70 border border-white/30'
              }`}
              animate={{
                scale: index === currentImage ? 1.25 : 1,
                boxShadow: index === currentImage 
                  ? '0 0 20px rgba(218, 165, 32, 0.4)' 
                  : '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Animated progress ring for current image */}
            {index === currentImage && (
              <motion.div
                className="absolute -inset-1 rounded-full border-2 border-gold-accent/30"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            
            {/* Tooltip on hover */}
            <motion.div
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none"
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {image.alt}
            </motion.div>
          </motion.button>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-2">
        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-gold-accent rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 6, 
              ease: "linear",
              repeat: Infinity 
            }}
            key={currentImage}
          />
        </div>
        <span className="text-white/60 text-xs font-medium">
          {String(currentImage + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};