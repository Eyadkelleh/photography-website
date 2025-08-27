'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PhotoButton, LanguageSwitcher } from '@/components/ui';
import { useNavigationItems } from '@/lib/constants-i18n';
import { MobileNav } from '@/components/navigation/MobileNav';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navigationItems = useNavigationItems();

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
        'mobile-container px-4 md:px-6',
        isScrolled
          ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity touch-feedback"
        >
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image
              src="/images/logo.jpg"
              alt="Visual Poetry Photography Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-deep-charcoal">
            <div className="font-script text-lg md:text-xl font-bold">Wunderwerk</div>
            <div className="text-xs text-warm-gray -mt-1 hidden md:block">Photography</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group',
                'hover:bg-gold-accent/10 hover:text-gold-accent',
                pathname === item.href
                  ? 'text-gold-accent bg-gold-accent/10'
                  : 'text-deep-charcoal'
              )}
            >
              {item.name}
              {/* Active indicator */}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold-accent rounded-full" />
              )}
              {/* Hover effect */}
              <span className="absolute inset-0 rounded-lg bg-gold-accent/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher />
          <div className="h-6 w-px bg-warm-gray/20 mx-2" />
          <PhotoButton 
            href="/portfolio"
            variant="secondary"
            icon="eye"
            className="min-w-[140px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            Portfolio ansehen
          </PhotoButton>
          <PhotoButton 
            href="/contact"
            variant="primary"
            icon="camera"
            className="min-w-[140px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Session buchen
          </PhotoButton>
        </div>

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