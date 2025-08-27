'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PhotoButton } from '@/components/ui';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Napa Valley, CA',
    image: '/images/testimonials/client-1.jpg',
    rating: 5,
    text: 'Wunderwerk Photography übertraf alle unsere Erwartungen. Ihre Fähigkeit, die authentische Verbindung zwischen meinem Pferd und mir einzufangen, war einfach magisch. Jedes Foto erzählt eine Geschichte und bringt die Emotionen jenes perfekten Tages zurück.',
    service: 'Pferdefotografie',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    image: '/images/testimonials/client-2.jpg',
    rating: 5,
    text: 'Professionell, kreativ und unglaublich talentiert. Das Team machte unser Unternehmens-Fotoshooting mühelos und vergnüglich. Die Ergebnisse sprechen für sich - diese Fotos haben unser Markenimage transformiert.',
    service: 'Businessfotografie',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Los Angeles, CA',
    image: '/images/testimonials/client-3.jpg',
    rating: 5,
    text: 'Von unserem ersten Beratungsgespräch bis zur finalen Übergabe war alles perfekt. Der Fotograf hat ein unglaubliches Auge für das Einfangen echter Momente. Unsere Familienporträts sind nun geschätzte Erbstücke.',
    service: 'Porträtfotografie',
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Sacramento, CA',
    image: '/images/testimonials/client-4.jpg',
    rating: 5,
    text: 'Wir haben Wunderwerk für unsere Hochzeit engagiert und sie haben jeden Moment wunderschön eingefangen. Ihre künstlerische Vision und Liebe zum Detail ist unvergleichlich. Wir erleben unseren besonderen Tag durch diese unglaublichen Fotos immer wieder.',
    service: 'Eventfotografie',
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-medium text-deep-charcoal mb-6">
            Kundenstimmen
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Verlassen Sie sich nicht nur auf unser Wort. Hier ist, was unsere Kunden 
            über ihre Erfahrung mit Wunderwerk Photography zu sagen haben.
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
          <PhotoButton 
            href="/testimonials"
            variant="primary"
            icon="eye"
            className="min-w-[240px]"
          >
            Weitere Geschichten lesen
          </PhotoButton>
        </motion.div>
      </div>
    </section>
  );
};