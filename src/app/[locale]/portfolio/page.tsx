'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { GALLERY_CATEGORIES } from '@/lib/constants';

const portfolioImages = [
  {
    id: '1',
    src: '/images/portfolio/equestrian-1.jpg',
    alt: 'Equestrian photography session',
    category: 'equestrian',
    title: 'Horse & Rider Bond',
    description: 'Capturing the majestic connection between horse and rider in golden hour light.',
  },
  {
    id: '2',
    src: '/images/portfolio/portrait-1.jpg',
    alt: 'Professional portrait session',
    category: 'portrait',
    title: 'Executive Portrait',
    description: 'Professional headshot session emphasizing confidence and approachability.',
  },
  {
    id: '3',
    src: '/images/portfolio/business-1.jpg',
    alt: 'Business photography session',
    category: 'business',
    title: 'Corporate Environment',
    description: 'Modern business photography showcasing dynamic work environments.',
  },
  {
    id: '4',
    src: '/images/portfolio/event-1.jpg',
    alt: 'Event photography session',
    category: 'event',
    title: 'Celebration Moments',
    description: 'Candid moments and genuine emotions from special celebrations.',
  },
  {
    id: '5',
    src: '/images/portfolio/equestrian-2.jpg',
    alt: 'Horse and rider bonding moment',
    category: 'equestrian',
    title: 'Equestrian Elegance',
    description: 'The grace and power of equestrian sports captured in motion.',
  },
  {
    id: '6',
    src: '/images/portfolio/portrait-2.jpg',
    alt: 'Lifestyle portrait session',
    category: 'portrait',
    title: 'Natural Beauty',
    description: 'Lifestyle portrait emphasizing natural beauty and personality.',
  },
  {
    id: '7',
    src: '/images/portfolio/lifestyle-1.jpg',
    alt: 'Lifestyle photography session',
    category: 'lifestyle',
    title: 'Life in Motion',
    description: 'Authentic lifestyle moments captured in natural settings.',
  },
  {
    id: '8',
    src: '/images/portfolio/business-2.jpg',
    alt: 'Corporate headshot session',
    category: 'business',
    title: 'Professional Excellence',
    description: 'Corporate photography that reflects professionalism and success.',
  },
  {
    id: '9',
    src: '/images/portfolio/event-2.jpg',
    alt: 'Wedding ceremony moment',
    category: 'event',
    title: 'Sacred Moments',
    description: 'Intimate wedding moments filled with love and emotion.',
  },
  {
    id: '10',
    src: '/images/portfolio/lifestyle-2.jpg',
    alt: 'Family lifestyle session',
    category: 'lifestyle',
    title: 'Family Connection',
    description: 'Warm family moments captured in a relaxed, natural environment.',
  },
  {
    id: '11',
    src: '/images/portfolio/portrait-3.jpg',
    alt: 'Creative portrait session',
    category: 'portrait',
    title: 'Artistic Vision',
    description: 'Creative portraiture that tells a unique story through lighting and composition.',
  },
  {
    id: '12',
    src: '/images/portfolio/equestrian-3.jpg',
    alt: 'Horse photography',
    category: 'equestrian',
    title: 'Majestic Beauty',
    description: 'The raw beauty and spirit of horses captured in stunning detail.',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image: typeof portfolioImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-soft-cream to-warm-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-deep-charcoal mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed mb-8">
              A curated collection of our finest work, showcasing the artistry and emotion 
              we capture in every moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-warm-white sticky top-20 z-10 border-b border-sage-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {GALLERY_CATEGORIES.map((category) => (
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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleImageClick(image, index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-medium text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-white/80 capitalize">
                      {image.category} Photography
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-60 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-auto">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-lg mb-2">
                  {selectedImage.description}
                </p>
                <p className="text-white/60 capitalize">
                  {selectedImage.category} Photography
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}