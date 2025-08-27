'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  className?: string;
}

const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👤' },
  { name: 'Portfolio', href: '/portfolio', icon: '📸' },
  { name: 'Services', href: '/services', icon: '💼' },
  { name: 'Contact', href: '/contact', icon: '📞' },
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
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'lg:hidden touch-target touch-feedback',
          'relative z-50 p-2 rounded-lg',
          'focus:outline-none focus:ring-2 focus:ring-gold-accent',
          className
        )}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={cn(
              'block h-0.5 w-6 bg-deep-charcoal transition-all duration-300 ease-out',
              isOpen && 'rotate-45 translate-y-1.5'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-deep-charcoal transition-all duration-300 ease-out my-1',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-deep-charcoal transition-all duration-300 ease-out',
              isOpen && '-rotate-45 -translate-y-1.5'
            )}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={cn('mobile-nav-overlay', isOpen && 'active')}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <nav
        className={cn('mobile-nav-menu', isOpen && 'active')}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-serif font-semibold text-deep-charcoal">
            Navigation
          </h2>
          <button
            onClick={toggleMenu}
            className="touch-target touch-feedback rounded-full p-2"
            aria-label="Close menu"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center space-x-4 px-4 py-4 rounded-lg transition-all duration-200',
                  'touch-target touch-feedback',
                  'text-base font-medium',
                  isActive
                    ? 'bg-gold-accent/10 text-gold-accent border-l-4 border-gold-accent'
                    : 'text-deep-charcoal hover:bg-soft-beige'
                )}
                onClick={toggleMenu}
              >
                <span className="text-xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t border-soft-beige">
          <Button
            variant="primary"
            size="lg"
            className="w-full touch-feedback"
            asChild
          >
            <Link href="/contact">Session buchen</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center space-y-2 text-sm text-warm-gray">
          <p>
            <a
              href="tel:+1234567890"
              className="hover:text-gold-accent transition-colors"
            >
              📞 (123) 456-7890
            </a>
          </p>
          <p>
            <a
              href="mailto:wunderwerk.fotografie@web.de"
              className="hover:text-gold-accent transition-colors"
            >
              ✉️ wunderwerk.fotografie@web.de
            </a>
          </p>
        </div>
      </nav>
    </>
  );
};