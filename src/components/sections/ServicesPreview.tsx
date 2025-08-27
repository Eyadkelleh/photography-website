'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, PhotoButton } from '@/components/ui';
import { SERVICES } from '@/lib/constants';

export const ServicesPreview = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-medium text-deep-charcoal mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Von intimen Porträts bis hin zu großen Feierlichkeiten – wir spezialisieren uns darauf, 
            die kostbarsten Momente des Lebens mit Kunst und Authentizität festzuhalten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full group">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {service.popular && (
                    <div className="absolute top-4 left-4 group/badge">
                      <div className="relative bg-gradient-to-r from-gold-accent to-yellow-400 text-deep-charcoal px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full blur-sm opacity-40 animate-pulse"></div>
                        <span className="relative z-10 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Beliebteste
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-deep-charcoal mb-3">
                    {service.name}
                  </h3>
                  <p className="text-warm-gray mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-warm-gray">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center text-lg font-semibold text-gold-accent">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {service.price.replace('From $', '')}+
                    </div>
                  </div>
                  <PhotoButton
                    href={`/services#${service.id}`}
                    variant="secondary"
                    icon="eye"
                    className="w-full"
                  >
                    Mehr erfahren
                  </PhotoButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <PhotoButton 
            href="/services"
            variant="primary"
            icon="camera"
            className="min-w-[220px]"
          >
            Alle Leistungen ansehen
          </PhotoButton>
        </motion.div>
      </div>
    </section>
  );
};