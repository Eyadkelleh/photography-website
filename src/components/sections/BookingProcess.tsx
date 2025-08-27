'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, MapPin, Camera, Edit, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui';

const steps = [
  {
    id: 1,
    title: 'Erstberatung',
    description: 'Wir besprechen Ihre Vision, Vorlieben und Details der Sitzung, um sicherzustellen, dass wir genau das einfangen, was Sie sich vorstellen.',
    icon: MessageCircle,
    color: 'text-soft-rose',
    bgColor: 'bg-soft-rose/10',
  },
  {
    id: 2,
    title: 'Sitzungsplanung',
    description: 'Location-Scouting, Zeitabstimmung und kreative Ausrichtungsplanung für das perfekte Shooting.',
    icon: MapPin,
    color: 'text-sage-green',
    bgColor: 'bg-sage-green/10',
  },
  {
    id: 3,
    title: 'Fotoshooting',
    description: 'Professionelle Fotositzung, bei der wir Ihre einzigartigen Momente mit Künstlerischem Geschick und Sorgfalt einfangen.',
    icon: Camera,
    color: 'text-gold-accent',
    bgColor: 'bg-gold-accent/10',
  },
  {
    id: 4,
    title: 'Professionelle Bearbeitung',
    description: 'Professionelle Nachbearbeitung und Bildverbesserung, um das Beste aus jedem Foto herauszuholen.',
    icon: Edit,
    color: 'text-warm-brown',
    bgColor: 'bg-warm-brown/10',
  },
  {
    id: 5,
    title: 'Galerie-Übergabe',
    description: 'Hochauflösende Bilder, die über Ihre private Online-Galerie für einfachen Zugang und Teilen bereitgestellt werden.',
    icon: ImageIcon,
    color: 'text-deep-charcoal',
    bgColor: 'bg-deep-charcoal/10',
  },
];

export const BookingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Context7-style animated line progress
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Enhanced step tracking with Intersection Observer + scroll progress
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Create observers for each step
    stepRefs.current.forEach((stepRef, index) => {
      if (stepRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveStep((prev) => Math.max(prev, index));
            }
          },
          { 
            threshold: 0.2,
            rootMargin: '-15% 0px -15% 0px'
          }
        );
        
        observer.observe(stepRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Separate scroll progress tracking for smooth line animation
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // More aggressive activation for last steps
      if (value >= 0.8) {
        setActiveStep(steps.length - 1);
      } else if (value >= 0.65) {
        setActiveStep(4);
      } else if (value >= 0.5) {
        setActiveStep(3);
      } else if (value >= 0.35) {
        setActiveStep(2);
      } else if (value >= 0.2) {
        setActiveStep(1);
      } else if (value >= 0.05) {
        setActiveStep(0);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section className="py-24 bg-warm-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script font-medium text-deep-charcoal mb-6">
            Unser Prozess
          </h2>
          <p className="text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Von der Erstberatung bis zur finalen Übergabe gewährleisten wir ein nahtloses und 
            angenehmes Erlebnis, das in atemberaubender Fotografie resultiert.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line with Context7 style */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            {/* Background line */}
            <div className="w-full h-full bg-gradient-to-b from-soft-rose/20 via-gold-accent/20 to-deep-charcoal/20 rounded-full" />
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-soft-rose via-gold-accent to-deep-charcoal rounded-full origin-top"
              style={{
                height: useTransform(lineProgress, (value) => `${value}%`),
              }}
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const isActive = index <= activeStep;
              const isCurrentActive = index === activeStep;

              return (
                <motion.div
                  key={step.id}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:space-x-12`}
                >
                  {/* Content */}
                  <motion.div 
                    className={`flex-1 text-center lg:text-${isEven ? 'right' : 'left'} mb-8 lg:mb-0`}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto lg:mx-0 ${isEven ? 'lg:ml-auto lg:mr-0' : ''}`}
                      animate={{
                        backgroundColor: isActive ? 
                          (step.color === 'text-soft-rose' ? 'rgba(244, 189, 189, 0.2)' :
                           step.color === 'text-sage-green' ? 'rgba(161, 189, 147, 0.2)' :
                           step.color === 'text-gold-accent' ? 'rgba(218, 165, 32, 0.2)' :
                           step.color === 'text-warm-brown' ? 'rgba(139, 115, 95, 0.2)' :
                           'rgba(47, 60, 73, 0.2)') : 
                          'rgba(0, 0, 0, 0.05)',
                        scale: isCurrentActive ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1 : 0.8,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 400,
                          damping: 20
                        }}
                      >
                        <Icon className={`h-8 w-8 ${step.color}`} />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-serif font-semibold text-deep-charcoal mb-4"
                      animate={{
                        color: isActive ? '#2f3c49' : '#8b9cb5',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      Schritt {step.id}: {step.title}
                    </motion.h3>
                    <motion.p 
                      className="leading-relaxed max-w-md mx-auto lg:mx-0"
                      animate={{
                        color: isActive ? '#6b7c93' : '#b0bcc9',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  {/* Animated Timeline Node */}
                  <div className="hidden lg:flex relative">
                    <motion.div 
                      className="w-6 h-6 rounded-full border-4 border-warm-white shadow-lg"
                      animate={{
                        backgroundColor: isActive ? '#daa520' : '#e5e5e5',
                        scale: isCurrentActive ? 1.3 : 1,
                        boxShadow: isCurrentActive ? 
                          '0 0 20px rgba(218, 165, 32, 0.5)' : 
                          '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                    />
                    
                    {/* Animated pulse ring */}
                    <motion.div 
                      className="absolute -top-1 -left-1 w-8 h-8 rounded-full border-2"
                      animate={{
                        borderColor: isActive ? 'rgba(218, 165, 32, 0.3)' : 'transparent',
                        scale: isCurrentActive ? [1, 1.5, 1] : 1,
                        opacity: isCurrentActive ? [0.7, 0, 0.7] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isCurrentActive ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Connection line to next step */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute top-6 left-3 w-0.5 h-12 lg:h-20 bg-gradient-to-b from-gold-accent to-transparent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{
                          scaleY: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0.3,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                      />
                    )}
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
              Bereit, Ihre Reise zu beginnen?
            </h3>
            <p className="text-warm-gray mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam etwas Schönes erschaffen. Buchen Sie heute Ihre Beratung 
              und machen Sie den ersten Schritt zum Einfangen Ihrer kostbarsten Momente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Sitzung beginnen
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/services">
                  Pakete ansehen
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};