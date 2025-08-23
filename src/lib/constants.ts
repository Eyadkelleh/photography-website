import { NavigationItem, Service, Package, Award, FAQ, SocialMediaLink } from '@/types';

export const SITE_CONFIG = {
  name: 'Visual Poetry Photography',
  description: 'Professional equestrian and portrait photography capturing authentic moments with love and artistry',
  tagline: 'Pure, authentic, professional, captured with lots of love',
  url: 'https://visualpoetry.photography',
  email: 'hello@visualpoetry.photography',
  phone: '+1 (555) 123-4567',
  location: 'Available throughout California',
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'equestrian',
    name: 'Equestrian Photography',
    description: 'Capturing the bond between horse and rider in stunning natural settings',
    price: 'From $750',
    duration: '2-3 hours',
    image: '/images/services/equestrian.jpg',
    features: [
      'Action and portrait shots',
      'Horse and rider bonding moments',
      'Natural outdoor settings',
      '50+ edited high-resolution images',
      'Private online gallery',
    ],
    popular: true,
  },
  {
    id: 'portrait',
    name: 'Portrait Photography',
    description: 'Professional headshots and personal branding photography',
    price: 'From $450',
    duration: '1-2 hours',
    image: '/images/services/portrait.jpg',
    features: [
      'Professional headshots',
      'Personal branding photos',
      'Multiple outfit changes',
      '30+ edited high-resolution images',
      'LinkedIn-ready formats',
    ],
  },
  {
    id: 'business',
    name: 'Business Photography',
    description: 'Corporate events, team photos, and professional branding',
    price: 'From $950',
    duration: '3-4 hours',
    image: '/images/services/business.jpg',
    features: [
      'Corporate events',
      'Team photography',
      'Office environment shots',
      '75+ edited high-resolution images',
      'Commercial usage rights',
    ],
  },
  {
    id: 'event',
    name: 'Event Photography',
    description: 'Special occasions, celebrations, and milestone moments',
    price: 'From $650',
    duration: '4-6 hours',
    image: '/images/services/event.jpg',
    features: [
      'Full event coverage',
      'Candid and posed shots',
      'Group photography',
      '100+ edited high-resolution images',
      'Quick preview within 48 hours',
    ],
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'essential',
    name: 'Essential Package',
    price: '$750',
    description: 'Perfect for individual sessions and smaller events',
    duration: '2 hours',
    features: ['2-hour session', '30 edited images', 'Online gallery', 'Print release'],
    includes: ['Pre-session consultation', 'Professional editing', 'Digital delivery'],
    deliverables: ['High-resolution images', 'Web-optimized versions', 'Print-ready files'],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '$1,250',
    originalPrice: '$1,450',
    description: 'Most popular choice for comprehensive coverage',
    duration: '4 hours',
    features: ['4-hour session', '75 edited images', 'Online gallery', 'Print release', 'Rush delivery'],
    includes: ['Pre-session consultation', 'Professional editing', 'Digital delivery', 'USB drive'],
    deliverables: ['High-resolution images', 'Web-optimized versions', 'Print-ready files', 'Social media formats'],
    popular: true,
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    price: '$2,200',
    description: 'Complete coverage with premium services',
    duration: '8 hours',
    features: ['8-hour session', '150+ edited images', 'Online gallery', 'Print release', 'Same-day preview'],
    includes: ['Pre-session consultation', 'Professional editing', 'Digital delivery', 'USB drive', 'Premium album'],
    deliverables: ['High-resolution images', 'Web-optimized versions', 'Print-ready files', 'Social media formats', 'Premium prints'],
  },
];

export const AWARDS: Award[] = [
  {
    id: '1',
    name: 'Best Equestrian Photographer',
    organization: 'California Photography Awards',
    year: '2024',
    image: '/images/awards/award1.jpg',
  },
  {
    id: '2',
    name: 'Professional Photographer of the Year',
    organization: 'West Coast Photo Society',
    year: '2023',
    image: '/images/awards/award2.jpg',
  },
  {
    id: '3',
    name: 'Excellence in Portrait Photography',
    organization: 'International Portrait Society',
    year: '2023',
    image: '/images/awards/award3.jpg',
  },
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What is included in a typical photography session?',
    answer: 'Every session includes a pre-consultation, professional photography, expert editing, and delivery of high-resolution images through a private online gallery. Specific inclusions vary by package.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How far in advance should I book?',
    answer: 'I recommend booking at least 4-6 weeks in advance, especially for weekend sessions and peak seasons (spring and fall). Wedding and event bookings should be made 3-6 months ahead.',
    category: 'booking',
  },
  {
    id: '3',
    question: 'Do you travel for sessions?',
    answer: 'Yes! I travel throughout California and beyond. Travel fees may apply for locations outside my standard service area. Contact me for specific travel arrangements.',
    category: 'logistics',
  },
  {
    id: '4',
    question: 'What happens if weather is bad for an outdoor session?',
    answer: 'I monitor weather closely and will reschedule outdoor sessions if conditions are unsafe. Indoor backup locations are always available, and there are no fees for weather-related rescheduling.',
    category: 'weather',
  },
  {
    id: '5',
    question: 'Can I request specific shots or poses?',
    answer: 'Absolutely! I encourage clients to share inspiration photos and specific requests during our pre-session consultation. My goal is to capture exactly what you envision.',
    category: 'creative',
  },
];

export const SOCIAL_MEDIA: SocialMediaLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/visualpoetryphotography',
    icon: 'instagram',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/visualpoetryphotography',
    icon: 'facebook',
  },
  {
    platform: 'Pinterest',
    url: 'https://pinterest.com/visualpoetryphotography',
    icon: 'pinterest',
  },
];

export const BUDGET_RANGES = [
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2000', label: '$1,000 - $2,000' },
  { value: '2000-5000', label: '$2,000 - $5,000' },
  { value: 'over-5000', label: '$5,000+' },
];

export const GALLERY_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'equestrian', label: 'Equestrian' },
  { value: 'portrait', label: 'Portrait' },
  { value: 'business', label: 'Business' },
  { value: 'event', label: 'Event' },
  { value: 'lifestyle', label: 'Lifestyle' },
];

export const BOOKING_STEPS = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We discuss your vision, preferences, and session details',
    icon: 'message-circle',
  },
  {
    id: 2,
    title: 'Session Planning',
    description: 'Location scouting, timing, and creative direction planning',
    icon: 'map-pin',
  },
  {
    id: 3,
    title: 'Photography Session',
    description: 'Professional photography session capturing your unique moments',
    icon: 'camera',
  },
  {
    id: 4,
    title: 'Expert Editing',
    description: 'Professional post-processing and image enhancement',
    icon: 'edit',
  },
  {
    id: 5,
    title: 'Gallery Delivery',
    description: 'High-resolution images delivered through private online gallery',
    icon: 'image',
  },
];

export const METADATA_DEFAULTS = {
  title: 'Visual Poetry Photography | Professional Equestrian & Portrait Photography',
  description: 'Award-winning photographer specializing in equestrian and portrait photography. Capturing authentic moments with artistry and love throughout California.',
  keywords: ['equestrian photography', 'portrait photography', 'professional photographer', 'California photographer', 'horse photography'],
  image: '/images/og-image.jpg',
};