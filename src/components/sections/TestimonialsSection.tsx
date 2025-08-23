'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Napa Valley, CA',
    image: '/images/testimonials/client-1.jpg',
    rating: 5,
    text: 'Visual Poetry Photography exceeded all our expectations. Their ability to capture the authentic connection between my horse and me was simply magical. Every photo tells a story and brings back the emotions of that perfect day.',
    service: 'Equestrian Photography',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    image: '/images/testimonials/client-2.jpg',
    rating: 5,
    text: 'Professional, creative, and incredibly talented. The team made our corporate headshot session effortless and fun. The results speak for themselves - these photos have transformed our brand image.',
    service: 'Business Photography',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Los Angeles, CA',
    image: '/images/testimonials/client-3.jpg',
    rating: 5,
    text: 'From our first consultation to the final delivery, everything was perfect. The photographer has an incredible eye for capturing genuine moments. Our family portraits are now treasured heirlooms.',
    service: 'Portrait Photography',
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Sacramento, CA',
    image: '/images/testimonials/client-4.jpg',
    rating: 5,
    text: 'We hired Visual Poetry for our wedding, and they captured every moment beautifully. Their artistic vision and attention to detail is unmatched. We relive our special day through these incredible photos.',
    service: 'Event Photography',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-soft-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-charcoal mb-6">
            Client Stories
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about their experience with Visual Poetry Photography.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-warm-white p-8 md:p-12 text-center"
              >
                <Quote className="h-12 w-12 text-gold-accent mx-auto mb-6" />
                
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gold-accent fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-deep-charcoal mb-8 leading-relaxed italic">
                  &quot;{testimonials[currentIndex].text}&quot;
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-deep-charcoal text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-warm-gray text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="text-gold-accent text-sm font-medium">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 text-deep-charcoal" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 text-deep-charcoal" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gold-accent scale-125'
                  : 'bg-warm-gray hover:bg-gold-accent/50'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/testimonials">
              Read More Stories
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};