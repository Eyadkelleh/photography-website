'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button, LanguageSwitcher } from '@/components/ui';
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
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gold-accent',
                pathname === item.href
                  ? 'text-gold-accent'
                  : 'text-deep-charcoal'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="secondary" size="sm" asChild>
            <Link href="/portfolio">Portfolio ansehen</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contact">Session buchen</Link>
          </Button>
        </div>

        {/* Mobile Contact Button & Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <LanguageSwitcher />
          <Button
            variant="primary"
            size="sm"
            className="text-sm px-3 py-2 touch-feedback"
            asChild
          >
            <Link href="/contact">Book</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};