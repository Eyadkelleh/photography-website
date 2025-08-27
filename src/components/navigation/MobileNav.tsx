'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Aperture, Focus, Home, User, Briefcase, Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PhotoButton } from '@/components/ui';

interface MobileNavProps {
  className?: string;
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Über mich', href: '/about', icon: User },
  { name: 'Portfolio', href: '/portfolio', icon: Eye },
  { name: 'Services', href: '/services', icon: Camera },
  { name: 'Kontakt', href: '/contact', icon: Mail },
];

export const MobileNav: React.FC<MobileNavProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Add haptic feedback on supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <>
      {/* Modern Capsule Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className={cn(
          'lg:hidden relative z-50 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-warm-gray/20',
          'focus:outline-none focus:ring-2 focus:ring-gold-accent focus:ring-offset-2',
          'hover:bg-white hover:shadow-xl transition-all duration-300',
          className
        )}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            className="block h-0.5 w-6 bg-deep-charcoal rounded-full"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-deep-charcoal rounded-full my-1.5"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-deep-charcoal rounded-full"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Animated Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Modern Capsule Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%", opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "100%", opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-4 right-4 bottom-4 w-80 max-w-[calc(100vw-2rem)] bg-warm-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden rounded-3xl border border-gold-accent/20"
            aria-hidden={!isOpen}
          >
            {/* Header with Photographer Portrait */}
            <div className="relative p-6 bg-gradient-to-br from-gold-accent/10 to-soft-rose/10 border-b border-gold-accent/20 rounded-t-3xl">
              {/* Close Button */}
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200"
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Aperture className="w-5 h-5 text-deep-charcoal" />
                </motion.div>
              </motion.button>

              {/* Photographer Portrait */}
              <div className="flex items-center space-x-4 mb-4">
                <motion.div 
                  className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-gold-accent/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/about/photographer-portrait.jpg"
                    alt="Uta, Photographer"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </motion.div>
                <div>
                  <h2 className="text-lg font-script font-medium text-deep-charcoal">
                    Uta
                  </h2>
                  <p className="text-sm text-warm-gray">
                    Photography Artist
                  </p>
                </div>
              </div>
              
              {/* Inspirational Quote */}
              <p className="text-sm text-deep-charcoal/80 italic leading-relaxed">
                "Capturing moments that tell your story"
              </p>
            </div>

            {/* Navigation Links with Photography Icons */}
            <div className="p-6 space-y-3">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center space-x-4 p-4 rounded-full transition-all duration-300',
                        'touch-target group relative overflow-hidden',
                        isActive
                          ? 'bg-gradient-to-r from-gold-accent/20 to-gold-accent/10 text-gold-accent shadow-lg border border-gold-accent/30'
                          : 'text-deep-charcoal hover:bg-soft-beige/50 hover:shadow-md hover:border hover:border-warm-gray/20'
                      )}
                      onClick={toggleMenu}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gold-accent rounded-full"
                          transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        />
                      )}
                      
                      <motion.div
                        className={cn(
                          'p-3 rounded-full transition-colors duration-200 shadow-sm',
                          isActive 
                            ? 'bg-gold-accent/20 shadow-gold-accent/20' 
                            : 'bg-warm-gray/10 group-hover:bg-warm-gray/20 group-hover:shadow-md'
                        )}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className={cn(
                          'w-5 h-5 transition-colors duration-200',
                          isActive ? 'text-gold-accent' : 'text-warm-gray group-hover:text-deep-charcoal'
                        )} />
                      </motion.div>
                      
                      <span className={cn(
                        'font-medium text-base transition-colors duration-200',
                        isActive ? 'text-gold-accent' : 'text-deep-charcoal'
                      )}>
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="p-6 mt-auto border-t border-gold-accent/20 rounded-b-3xl bg-gradient-to-t from-gold-accent/5 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <PhotoButton
                  href="/contact"
                  variant="primary"
                  icon="camera"
                  className="w-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-4"
                  onClick={toggleMenu}
                >
                  Session buchen
                </PhotoButton>
              </motion.div>

              {/* Contact Icons */}
              <motion.div 
                className="flex justify-center space-x-6 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <motion.a
                  href="tel:+1234567890"
                  className="p-3 rounded-full bg-sage-green/10 text-sage-green hover:bg-sage-green/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:wunderwerk.fotografie@web.de"
                  className="p-3 rounded-full bg-soft-rose/10 text-soft-rose hover:bg-soft-rose/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/portfolio"
                  className="p-3 rounded-full bg-warm-brown/10 text-warm-brown hover:bg-warm-brown/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Focus className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};