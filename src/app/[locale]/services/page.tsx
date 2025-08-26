import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, DollarSign, MapPin, Camera } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useServices, usePackages } from '@/lib/constants-i18n';

export const metadata: Metadata = {
  title: 'Photography Services | Visual Poetry Photography',
  description: 'Professional photography services including equestrian, portrait, business, and event photography. Custom packages available throughout California.',
  openGraph: {
    title: 'Photography Services | Visual Poetry Photography',
    description: 'Discover our comprehensive photography services and packages designed to capture your most important moments.',
    images: ['/images/services/services-hero.jpg'],
  },
};

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const services = useServices();
  const packages = usePackages();

  const addOns = [
    {
      name: t('addOns.rushProcessing.name'),
      description: t('addOns.rushProcessing.description'),
      price: t('addOns.rushProcessing.price'),
    },
    {
      name: t('addOns.additionalHours.name'),
      description: t('addOns.additionalHours.description'),
      price: t('addOns.additionalHours.price'),
    },
    {
      name: t('addOns.travelFee.name'),
      description: t('addOns.travelFee.description'),
      price: t('addOns.travelFee.price'),
    },
    {
      name: t('addOns.secondShooter.name'),
      description: t('addOns.secondShooter.description'),
      price: t('addOns.secondShooter.price'),
    },
    {
      name: t('addOns.printPackage.name'),
      description: t('addOns.printPackage.description'),
      price: t('addOns.printPackage.price'),
    },
    {
      name: t('addOns.dronePhotography.name'),
      description: t('addOns.dronePhotography.description'),
      price: t('addOns.dronePhotography.price'),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-deep-charcoal to-warm-brown text-warm-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-script font-medium mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/90 mb-12 leading-relaxed">
              {t('subtitle')}
            </p>
            <Button size="lg" className="bg-gold-accent text-deep-charcoal hover:bg-cyan-400 hover:text-white hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-200" asChild>
              <Link href="#packages">{t('viewPackages')}</Link>
            </Button>
          </div>
        </div>
      </section>


      <section id="packages" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script font-medium text-deep-charcoal mb-6">
              {t('photographyPackages')}
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {t('packagesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} hover className={`relative group ${pkg.popular ? 'ring-2 ring-gold-accent' : ''}`}>
                <CardHeader className="text-center pb-4 relative pt-12">
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="relative group">
                        <div className="bg-gradient-to-r from-gold-accent via-yellow-400 to-gold-accent text-deep-charcoal px-3 py-1 rounded-full font-bold text-xs shadow-lg border-2 border-white backdrop-blur-sm">
                          <div className="absolute inset-0 bg-gradient-to-r from-gold-accent via-yellow-400 to-gold-accent rounded-full blur-sm opacity-30 animate-pulse"></div>
                          <span className="relative z-10 flex items-center gap-1">
                            <svg className="w-3 h-3 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {t('mostPopular')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gold-accent">
                      {pkg.price}
                      {(pkg as any).originalPrice && (
                        <span className="text-lg text-warm-gray line-through ml-2">
                          {(pkg as any).originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-warm-gray">{pkg.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-center text-sm text-warm-gray bg-soft-beige rounded-lg py-2">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration} {t('session')}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-2">{t('features')}:</h4>
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
                      <h4 className="font-semibold text-deep-charcoal mb-2">{t('includes')}:</h4>
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
                      <h4 className="font-semibold text-deep-charcoal mb-2">{t('deliverables')}:</h4>
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
                    className={`w-full transition-all duration-200 ${pkg.popular ? 'bg-gold-accent text-deep-charcoal hover:bg-cyan-400 hover:text-white hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105' : 'hover:bg-teal-400 hover:text-white hover:shadow-lg'}`}
                    asChild
                  >
                    <Link href={`/contact?package=${pkg.id}`}>
                      {t('choose')} {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-warm-gray mb-6">
              {t('customDescription')}
            </p>
            <Button variant="secondary" size="lg" className="hover:bg-teal-400 hover:text-white hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-200" asChild>
              <Link href="/contact?custom=true">{t('customQuote')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              {t('addOnServices')}
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {t('addOnDescription')}
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
                {t('serviceAreas')}
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                {t('serviceAreasDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.bayArea.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.bayArea.description')}</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.wineCountry.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.wineCountry.description')}</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.centralCoast.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.centralCoast.description')}</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.losAngeles.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.losAngeles.description')}</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.sacramento.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.sacramento.description')}</p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Camera className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif font-semibold text-deep-charcoal mb-2">{t('areas.destination.name')}</h3>
                  <p className="text-warm-gray text-sm">{t('areas.destination.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-deep-charcoal text-warm-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-script font-medium mb-6">
            {t('readyToBook')}
          </h2>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('readyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gold-accent text-deep-charcoal hover:bg-cyan-400 hover:text-white hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-200" asChild>
              <Link href="/contact">{t('getStarted')}</Link>
            </Button>
            <Button variant="secondary" size="lg" className="border-warm-white text-warm-white hover:bg-emerald-400 hover:text-white hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-200" asChild>
              <Link href="/portfolio">{t('viewWork')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}