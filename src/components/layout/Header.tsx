'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Eye, Home, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PhotoButton, LanguageSwitcher } from '@/components/ui';
import { MobileNav } from '@/components/navigation/MobileNav';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Create navigation with photography-themed icons
  const navigationWithIcons = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Über mich', href: '/about', icon: User },
    { name: 'Portfolio', href: '/portfolio', icon: Eye },
    { name: 'Services', href: '/services', icon: Camera },
    { name: 'Kontakt', href: '/contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-center h-16 md:h-20">
        {/* Centered Photography Navigation Menu */}
        <motion.nav 
          className="hidden lg:flex items-center bg-warm-white/95 backdrop-blur-lg rounded-full shadow-xl border border-gold-accent/30 p-2 space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          {/* Main Navigation Links */}
          {navigationWithIcons.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative flex items-center space-x-1.5 px-3 py-2 rounded-full transition-all duration-300 group text-sm font-medium',
                    isActive
                      ? 'bg-gradient-to-r from-gold-accent/20 to-gold-accent/10 text-gold-accent shadow-md'
                      : 'text-deep-charcoal hover:bg-soft-beige/60 hover:shadow-sm'
                  )}
                >
                  <motion.div
                    className={cn(
                      'p-1 rounded-full transition-all duration-200',
                      isActive 
                        ? 'bg-gold-accent/20' 
                        : 'bg-warm-gray/10 group-hover:bg-warm-gray/20'
                    )}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={cn(
                      'w-3.5 h-3.5 transition-colors duration-200',
                      isActive ? 'text-gold-accent' : 'text-warm-gray group-hover:text-deep-charcoal'
                    )} />
                  </motion.div>
                  
                  <span className={cn(
                    'text-xs transition-colors duration-200',
                    isActive ? 'text-gold-accent font-medium' : 'text-deep-charcoal'
                  )}>
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold-accent rounded-full"
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}

          {/* Compact Actions Section */}
          <div className="flex items-center space-x-1 pl-2 ml-2 border-l border-gold-accent/20">
            <LanguageSwitcher />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PhotoButton 
                href="/portfolio"
                variant="secondary"
                icon="eye"
                className="px-3 py-1.5 text-xs rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                Portfolio
              </PhotoButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PhotoButton 
                href="/contact"
                variant="primary"
                icon="camera"
                className="px-3 py-1.5 text-xs rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Buchen
              </PhotoButton>
            </motion.div>

            <motion.a
              href="mailto:wunderwerk.fotografie@web.de"
              className="p-1.5 rounded-full bg-soft-rose/10 text-soft-rose hover:bg-soft-rose/20 transition-all duration-200 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Email kontaktieren"
            >
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.nav>

        {/* Mobile Contact Button & Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <LanguageSwitcher />
          <PhotoButton
            href="/contact"
            variant="primary"
            icon="camera"
            className="text-sm px-3 py-2 min-w-[70px] touch-feedback"
          >
            Book
          </PhotoButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};