import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.enum(['equestrian', 'portrait', 'business', 'event', 'consultation']),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  newsletter: z.boolean().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

export const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please specify the service'),
  rating: z.number().min(1).max(5),
  text: z.string().min(20, 'Testimonial must be at least 20 characters'),
  location: z.string().optional(),
  image: z.instanceof(File).optional(),
});

export const blogCommentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  website: z.string().url().optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type TestimonialData = z.infer<typeof testimonialSchema>;
export type BlogCommentData = z.infer<typeof blogCommentSchema>;