import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, DollarSign, MapPin, Camera } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { SERVICES, PACKAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Photography Services | Visual Poetry Photography',
  description: 'Professional photography services including equestrian, portrait, business, and event photography. Custom packages available throughout California.',
  openGraph: {
    title: 'Photography Services | Visual Poetry Photography',
    description: 'Discover our comprehensive photography services and packages designed to capture your most important moments.',
    images: ['/images/services/services-hero.jpg'],
  },
};

const addOns = [
  {
    name: 'Rush Processing',
    description: 'Get your photos within 48 hours',
    price: '$150',
  },
  {
    name: 'Additional Hours',
    description: 'Extend your session time',
    price: '$200/hour',
  },
  {
    name: 'Travel Fee',
    description: 'For locations outside 30-mile radius',
    price: '$1/mile',
  },
  {
    name: 'Second Shooter',
    description: 'Additional photographer for events',
    price: '$300',
  },
  {
    name: 'Print Package',
    description: 'Professional prints and album',
    price: '$400',
  },
  {
    name: 'Drone Photography',
    description: 'Aerial shots (weather permitting)',
    price: '$250',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-deep-charcoal to-warm-brown text-warm-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Photography Services
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/90 mb-12 leading-relaxed">
              From intimate portraits to grand celebrations, we specialize in capturing 
              life&apos;s most precious moments with artistry and authenticity.
            </p>
            <Button size="lg" className="bg-gold-accent text-deep-charcoal hover:bg-yellow-500" asChild>
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Each service is tailored to your unique needs, ensuring we capture 
              the essence of your story with professional quality and artistic vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <Card key={service.id} id={service.id} hover className="group">
                <div className="relative h-80 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {service.popular && (
                    <div className="absolute top-6 left-6 bg-gold-accent text-deep-charcoal px-4 py-2 rounded-full font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {service.duration}
                        </div>
                        <div className="flex items-center text-lg font-semibold">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {service.price.replace('From $', '')}+
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-deep-charcoal mb-4">
                    {service.name}
                  </h3>
                  <p className="text-warm-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-gold-accent flex-shrink-0" />
                        <span className="text-warm-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-gold-accent group-hover:text-deep-charcoal" asChild>
                    <Link href={`/contact?service=${service.id}`}>
                      Book This Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Photography Packages
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Choose the package that best fits your needs. All packages include 
              professional editing, high-resolution images, and a private online gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.id} hover className={`relative group ${pkg.popular ? 'ring-2 ring-gold-accent' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold-accent text-deep-charcoal px-6 py-2 rounded-full font-semibold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gold-accent">
                      {pkg.price}
                      {pkg.originalPrice && (
                        <span className="text-lg text-warm-gray line-through ml-2">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-warm-gray">{pkg.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-center text-sm text-warm-gray bg-soft-beige rounded-lg py-2">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration} session
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <Check className="h-4 w-4 text-gold-accent flex-shrink-0" />
                            <span className="text-sm text-warm-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <Check className="h-4 w-4 text-gold-accent flex-shrink-0" />
                            <span className="text-sm text-warm-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-2">Deliverables:</h4>
                      <ul className="space-y-2">
                        {pkg.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <Check className="h-4 w-4 text-gold-accent flex-shrink-0" />
                            <span className="text-sm text-warm-gray">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gold-accent text-deep-charcoal hover:bg-yellow-500' : ''}`}
                    asChild
                  >
                    <Link href={`/contact?package=${pkg.id}`}>
                      Choose {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-warm-gray mb-6">
              Need something custom? We&apos;d love to work with you to create a package that fits your specific needs.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact?custom=true">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Add-On Services
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Enhance your photography experience with these additional services. 
              Perfect for making your session even more special and comprehensive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} hover className="group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-deep-charcoal group-hover:text-gold-accent transition-colors">
                      {addon.name}
                    </h3>
                    <div className="text-lg font-bold text-gold-accent">
                      {addon.price}
                    </div>
                  </div>
                  <p className="text-warm-gray text-sm">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
                Service Areas
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                We proudly serve clients throughout California and are available for 
                destination sessions. Travel fees may apply for locations outside our standard service area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Bay Area</h3>
                  <p className="text-warm-gray text-sm">San Francisco, Oakland, San Jose and surrounding areas</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Wine Country</h3>
                  <p className="text-warm-gray text-sm">Napa Valley, Sonoma County, and wine regions</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Central Coast</h3>
                  <p className="text-warm-gray text-sm">Monterey, Santa Barbara, and coastal areas</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Los Angeles</h3>
                  <p className="text-warm-gray text-sm">LA County, Orange County, and surrounding areas</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Sacramento</h3>
                  <p className="text-warm-gray text-sm">Sacramento Valley and Northern California</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Camera className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Destination</h3>
                  <p className="text-warm-gray text-sm">Available for travel anywhere in the US</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-deep-charcoal text-warm-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Book Your Session?
          </h2>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let&apos;s create something beautiful together. Contact us today to discuss your 
            photography needs and find the perfect service for your special moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gold-accent text-deep-charcoal hover:bg-yellow-500" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="secondary" size="lg" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-deep-charcoal" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}