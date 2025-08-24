import { useTranslations } from 'next-intl';

export function useNavigationItems() {
  const t = useTranslations('navigation');
  
  return [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('testimonials'), href: '/testimonials' },
    { name: t('contact'), href: '/contact' },
  ];
}

export function useSiteConfig() {
  const t = useTranslations('site');
  
  return {
    name: t('name'),
    description: t('description'),
    tagline: t('tagline'),
    url: 'https://visualpoetry.photography',
    email: t('email'),
    phone: t('phone'),
    location: t('location'),
  };
}

export function useServices() {
  const t = useTranslations('services');
  
  return [
    {
      id: 'equestrian',
      name: t('equestrian.name'),
      description: t('equestrian.description'),
      price: t('equestrian.price'),
      duration: t('equestrian.duration'),
      image: '/images/services/equestrian.jpg',
      features: [
        t('equestrian.features.action'),
        t('equestrian.features.bonding'),
        t('equestrian.features.outdoor'),
        t('equestrian.features.images'),
        t('equestrian.features.gallery'),
      ],
      popular: true,
    },
    {
      id: 'portrait',
      name: t('portrait.name'),
      description: t('portrait.description'),
      price: t('portrait.price'),
      duration: t('portrait.duration'),
      image: '/images/services/portrait.jpg',
      features: [
        t('portrait.features.headshots'),
        t('portrait.features.branding'),
        t('portrait.features.outfits'),
        t('portrait.features.images'),
        t('portrait.features.linkedin'),
      ],
    },
    {
      id: 'business',
      name: t('business.name'),
      description: t('business.description'),
      price: t('business.price'),
      duration: t('business.duration'),
      image: '/images/services/business.jpg',
      features: [
        t('business.features.events'),
        t('business.features.team'),
        t('business.features.office'),
        t('business.features.images'),
        t('business.features.rights'),
      ],
    },
    {
      id: 'event',
      name: t('event.name'),
      description: t('event.description'),
      price: t('event.price'),
      duration: t('event.duration'),
      image: '/images/services/event.jpg',
      features: [
        t('event.features.coverage'),
        t('event.features.shots'),
        t('event.features.group'),
        t('event.features.images'),
        t('event.features.preview'),
      ],
    },
  ];
}

export function usePackages() {
  const t = useTranslations('packages');
  
  return [
    {
      id: 'essential',
      name: t('essential.name'),
      price: t('essential.price'),
      description: t('essential.description'),
      duration: t('essential.duration'),
      features: t.raw('essential.features') as string[],
      includes: t.raw('essential.includes') as string[],
      deliverables: t.raw('essential.deliverables') as string[],
    },
    {
      id: 'premium',
      name: t('premium.name'),
      price: t('premium.price'),
      originalPrice: t('premium.originalPrice'),
      description: t('premium.description'),
      duration: t('premium.duration'),
      features: t.raw('premium.features') as string[],
      includes: t.raw('premium.includes') as string[],
      deliverables: t.raw('premium.deliverables') as string[],
      popular: true,
    },
    {
      id: 'luxury',
      name: t('luxury.name'),
      price: t('luxury.price'),
      description: t('luxury.description'),
      duration: t('luxury.duration'),
      features: t.raw('luxury.features') as string[],
      includes: t.raw('luxury.includes') as string[],
      deliverables: t.raw('luxury.deliverables') as string[],
    },
  ];
}

export function useAwards() {
  const t = useTranslations('awards');
  
  return [
    {
      id: '1',
      name: t('equestrian.name'),
      organization: t('equestrian.organization'),
      year: t('equestrian.year'),
      image: '/images/awards/award1.jpg',
    },
    {
      id: '2',
      name: t('photographer.name'),
      organization: t('photographer.organization'),
      year: t('photographer.year'),
      image: '/images/awards/award2.jpg',
    },
    {
      id: '3',
      name: t('portrait.name'),
      organization: t('portrait.organization'),
      year: t('portrait.year'),
      image: '/images/awards/award3.jpg',
    },
  ];
}

export function useFAQs() {
  const t = useTranslations('faqs');
  
  return [
    {
      id: '1',
      question: t('general.question'),
      answer: t('general.answer'),
      category: 'general',
    },
    {
      id: '2',
      question: t('booking.question'),
      answer: t('booking.answer'),
      category: 'booking',
    },
    {
      id: '3',
      question: t('travel.question'),
      answer: t('travel.answer'),
      category: 'logistics',
    },
    {
      id: '4',
      question: t('weather.question'),
      answer: t('weather.answer'),
      category: 'weather',
    },
    {
      id: '5',
      question: t('creative.question'),
      answer: t('creative.answer'),
      category: 'creative',
    },
  ];
}

export function useBookingSteps() {
  const t = useTranslations('bookingSteps');
  
  return [
    {
      id: 1,
      title: t('consultation.title'),
      description: t('consultation.description'),
      icon: 'message-circle',
    },
    {
      id: 2,
      title: t('planning.title'),
      description: t('planning.description'),
      icon: 'map-pin',
    },
    {
      id: 3,
      title: t('session.title'),
      description: t('session.description'),
      icon: 'camera',
    },
    {
      id: 4,
      title: t('editing.title'),
      description: t('editing.description'),
      icon: 'edit',
    },
    {
      id: 5,
      title: t('delivery.title'),
      description: t('delivery.description'),
      icon: 'image',
    },
  ];
}

export function useBudgetRanges() {
  const t = useTranslations('budgetRanges');
  
  return [
    { value: 'under-500', label: t('under500') },
    { value: '500-1000', label: t('500to1000') },
    { value: '1000-2000', label: t('1000to2000') },
    { value: '2000-5000', label: t('2000to5000') },
    { value: 'over-5000', label: t('over5000') },
  ];
}

export function useGalleryCategories() {
  const t = useTranslations('galleryCategories');
  
  return [
    { value: 'all', label: t('all') },
    { value: 'equestrian', label: t('equestrian') },
    { value: 'portrait', label: t('portrait') },
    { value: 'business', label: t('business') },
    { value: 'event', label: t('event') },
    { value: 'lifestyle', label: t('lifestyle') },
  ];
}