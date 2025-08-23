'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui';
import { GALLERY_CATEGORIES } from '@/lib/constants';

const portfolioImages = [
  {
    id: '1',
    src: '/images/portfolio/equestrian-1.jpg',
    alt: 'Equestrian photography session',
    category: 'equestrian',
  },
  {
    id: '2',
    src: '/images/portfolio/portrait-1.jpg',
    alt: 'Professional portrait session',
    category: 'portrait',
  },
  {
    id: '3',
    src: '/images/portfolio/business-1.jpg',
    alt: 'Business photography session',
    category: 'business',
  },
  {
    id: '4',
    src: '/images/portfolio/event-1.jpg',
    alt: 'Event photography session',
    category: 'event',
  },
  {
    id: '5',
    src: '/images/portfolio/equestrian-2.jpg',
    alt: 'Horse and rider bonding moment',
    category: 'equestrian',
  },
  {
    id: '6',
    src: '/images/portfolio/portrait-2.jpg',
    alt: 'Lifestyle portrait session',
    category: 'portrait',
  },
  {
    id: '7',
    src: '/images/portfolio/lifestyle-1.jpg',
    alt: 'Lifestyle photography session',
    category: 'lifestyle',
  },
  {
    id: '8',
    src: '/images/portfolio/business-2.jpg',
    alt: 'Corporate headshot session',
    category: 'business',
  },
];

export const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const categories = GALLERY_CATEGORIES.slice(0, 5); // Show first 5 categories

  return (
    <section className="py-24 bg-warm-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-charcoal mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            A curated selection of our finest work, showcasing the beauty and 
            emotion we capture in every session.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? 'primary' : 'text'}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className="capitalize"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                // onMouseEnter={() => setHoveredImage(image.id)}
                // onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium capitalize">
                    {image.category} Photography
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};