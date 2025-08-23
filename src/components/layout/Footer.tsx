import Link from 'next/link';
import { Instagram, Facebook, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS, SOCIAL_MEDIA } from '@/lib/constants';
// import { Button } from '@/components/ui';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  pinterest: Heart,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-charcoal text-warm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gold-accent mb-2">
                Visual Poetry
              </h3>
              <p className="text-sm text-warm-white/80 leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>
            <div className="flex space-x-4">
              {SOCIAL_MEDIA.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-warm-white/10 hover:bg-gold-accent hover:text-deep-charcoal transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.platform}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#equestrian"
                  className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  Equestrian Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services#portrait"
                  className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  Portrait Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services#business"
                  className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  Business Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services#event"
                  className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  Event Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold-accent mt-0.5 flex-shrink-0" />
                <div>
                  <Link
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold-accent mt-0.5 flex-shrink-0" />
                <div>
                  <Link
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm text-warm-white/80 hover:text-gold-accent transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-warm-white/80">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-warm-white/60">
              © {currentYear} Visual Poetry Photography. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-warm-white/60 hover:text-gold-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-warm-white/60 hover:text-gold-accent transition-colors"
              >
                Terms of Service
              </Link>
              <div className="text-warm-white/60">
                Made with{' '}
                <Heart className="inline h-4 w-4 text-gold-accent" />{' '}
                for authentic moments
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};