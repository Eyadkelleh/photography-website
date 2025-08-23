'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Camera, Edit, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui';

const steps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We discuss your vision, preferences, and session details to ensure we capture exactly what you envision.',
    icon: MessageCircle,
    color: 'text-soft-rose',
    bgColor: 'bg-soft-rose/10',
  },
  {
    id: 2,
    title: 'Session Planning',
    description: 'Location scouting, timing coordination, and creative direction planning for the perfect shoot.',
    icon: MapPin,
    color: 'text-sage-green',
    bgColor: 'bg-sage-green/10',
  },
  {
    id: 3,
    title: 'Photography Session',
    description: 'Professional photography session where we capture your unique moments with artistry and care.',
    icon: Camera,
    color: 'text-gold-accent',
    bgColor: 'bg-gold-accent/10',
  },
  {
    id: 4,
    title: 'Expert Editing',
    description: 'Professional post-processing and image enhancement to bring out the best in every photograph.',
    icon: Edit,
    color: 'text-warm-brown',
    bgColor: 'bg-warm-brown/10',
  },
  {
    id: 5,
    title: 'Gallery Delivery',
    description: 'High-resolution images delivered through your private online gallery for easy access and sharing.',
    icon: ImageIcon,
    color: 'text-deep-charcoal',
    bgColor: 'bg-deep-charcoal/10',
  },
];

export const BookingProcess = () => {
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
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final delivery, we ensure a seamless and 
            enjoyable experience that results in stunning photography.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-soft-rose via-gold-accent to-deep-charcoal opacity-20" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:space-x-12`}
                >
                  {/* Content */}
                  <div className={`flex-1 text-center lg:text-${isEven ? 'right' : 'left'} mb-8 lg:mb-0`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6 mx-auto lg:mx-0 ${isEven ? 'lg:ml-auto lg:mr-0' : ''}`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-deep-charcoal mb-4">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex relative">
                    <div className="w-6 h-6 rounded-full bg-gold-accent border-4 border-warm-white shadow-lg" />
                    <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-gold-accent/20 animate-ping" />
                  </div>

                  {/* Spacer for even layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-cream rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-deep-charcoal mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-warm-gray mb-8 leading-relaxed">
              Let&apos;s create something beautiful together. Book your consultation today 
              and take the first step toward capturing your most precious moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Session
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/services">
                  View Packages
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};