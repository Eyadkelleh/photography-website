export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  includes: string[];
  duration: string;
  deliverables: string[];
  popular?: boolean;
  special?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'equestrian' | 'portrait' | 'business' | 'event' | 'lifestyle';
  featured?: boolean;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified?: boolean;
}


export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: 'equestrian' | 'portrait' | 'business' | 'event' | 'consultation';
  eventDate?: string;
  location?: string;
  budget: string;
  message: string;
  inspiration?: File[];
  newsletter?: boolean;
}

export interface Award {
  id: string;
  name: string;
  organization: string;
  year: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface BookingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  completed?: boolean;
  active?: boolean;
}