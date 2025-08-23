'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, Button } from '@/components/ui';
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            From intimate portraits to grand celebrations, we specialize in capturing 
            life&apos;s most precious moments with artistry and authenticity.
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
                    <div className="absolute top-4 left-4 bg-gold-accent text-deep-charcoal px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
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
                  <Button
                    variant="text"
                    className="w-full group-hover:bg-soft-beige transition-colors"
                    asChild
                  >
                    <Link href={`/services#${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
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
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};