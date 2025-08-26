'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Hero image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />
      
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
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <Link href="/contact">
              Buchen Sie Ihren unvergesslichen Tag
            </Link>
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-deep-charcoal">
            <Play className="mr-2 h-5 w-5" />
            Unsere Geschichte
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            href="#services"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
          >
            <span className="text-sm mb-2">Mehr entdecken</span>
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? 'bg-gold-accent scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};