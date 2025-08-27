'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Eye, Aperture, Focus } from 'lucide-react';
import { clsx } from 'clsx';

interface PhotoButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: 'camera' | 'eye' | 'aperture' | 'focus';
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
  disabled?: boolean;
}

const iconMap = {
  camera: Camera,
  eye: Eye,
  aperture: Aperture,
  focus: Focus,
};

export const PhotoButton: React.FC<PhotoButtonProps> = ({
  children,
  href,
  variant = 'primary',
  icon = 'camera',
  className,
  onClick,
  'aria-label': ariaLabel,
  disabled = false,
}) => {
  const IconComponent = iconMap[icon];
  
  const buttonContent = (
    <motion.button
      className={clsx(
        // Base styles with mobile-friendly touch targets (min 44px)
        'photo-button group relative overflow-hidden rounded-xl font-medium transition-all duration-300 ease-in-out',
        'border-2 focus:outline-none focus:ring-4 focus:ring-gold-accent/20',
        // Mobile-first responsive padding and sizing
        'px-4 py-3 text-sm', // Small screens
        'sm:px-6 sm:py-3 sm:text-base', // Small and up
        'md:px-8 md:py-4 md:text-base', // Medium and up
        // Ensure minimum touch target size (44px)
        'min-h-[44px] min-w-[120px]',
        // Touch-friendly interactions
        'touch-manipulation select-none',
        // Photography-inspired gradient and shadows
        variant === 'primary' && [
          'bg-gradient-to-br from-gold-accent via-amber-500 to-gold-accent/80',
          'border-gold-accent/30 text-deep-charcoal shadow-lg shadow-gold-accent/25',
          'hover:shadow-xl hover:shadow-gold-accent/40',
          // Enhanced contrast for accessibility
          'focus:ring-gold-accent/40 focus:ring-offset-2',
          // Active states for touch feedback
          'active:shadow-md active:translate-y-0.5',
          // Disabled state
          disabled && 'opacity-60 cursor-not-allowed pointer-events-none'
        ],
        variant === 'secondary' && [
          'bg-gradient-to-br from-warm-white/15 via-warm-white/8 to-transparent',
          'border-warm-white/40 text-warm-white backdrop-blur-sm',
          'hover:bg-warm-white/25 hover:border-warm-white/60 hover:shadow-lg hover:shadow-warm-white/20',
          // Enhanced contrast for accessibility
          'focus:ring-warm-white/40 focus:ring-offset-2 focus:ring-offset-transparent',
          // Active states for touch feedback
          'active:bg-warm-white/20 active:translate-y-0.5',
          // Disabled state
          disabled && 'opacity-60 cursor-not-allowed pointer-events-none'
        ],
        className
      )}
      // Mobile-optimized animations
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      initial="initial"
      animate="animate"
      variants={{
        initial: { scale: 1, y: 0 },
        hover: { 
          scale: 1.02,
          y: -2,
          transition: { duration: 0.2, ease: "easeOut" }
        },
        tap: { 
          scale: 0.98,
          y: 1,
          transition: { duration: 0.1, ease: "easeInOut" }
        }
      }}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      // Accessibility enhancements
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {/* Shimmer Effect */}
      <motion.div
        className={clsx(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          variant === 'primary' 
            ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-warm-white/20 to-transparent'
        )}
        variants={{
          initial: { x: '-100%' },
          hover: { x: '100%' }
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Camera lens ring effect */}
      <motion.div
        className="absolute inset-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100"
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1, opacity: 1 }
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      
      {/* Content with responsive sizing */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
        <motion.div
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: icon === 'aperture' ? 180 : 15 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
        </motion.div>
        <span className="font-semibold tracking-wide text-center leading-tight">
          {children}
        </span>
      </div>
      
      {/* Pulsing light effect for primary variant */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gold-accent/20"
          variants={{
            initial: { scale: 1, opacity: 0 },
            animate: { scale: [1, 1.1, 1], opacity: [0, 0.3, 0] }
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      )}
      
      {/* Depth shadow for 3D effect */}
      <div className={clsx(
        'absolute inset-0 rounded-xl transition-all duration-300 -z-10',
        variant === 'primary' 
          ? 'bg-gold-accent/20 group-hover:translate-y-1 translate-y-0.5' 
          : 'bg-warm-white/10 group-hover:translate-y-1 translate-y-0.5'
      )} />
    </motion.button>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className="inline-block focus:outline-none focus:ring-4 focus:ring-gold-accent/20 focus:ring-offset-2 rounded-xl"
        role="button"
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        tabIndex={disabled ? -1 : 0}
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
      >
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};