import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Camera, Heart } from 'lucide-react';
import { Button, PhotoButton } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontakt | Wunderwerk Photography',
  description: 'Kontaktieren Sie Wunderwerk Photography für professionelle Pferde-, Porträt- und Eventfotografie in ganz Kalifornien.',
  openGraph: {
    title: 'Kontakt | Wunderwerk Photography',
    description: 'Bereit, Ihre besonderen Momente einzufangen? Kontaktieren Sie uns heute für professionelle Fotografie-Dienstleistungen.',
    images: ['/images/contact/contact-hero.jpg'],
  },
};

export default function ContactPage() {
  const t = useTranslations('contactPage');

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      description: 'Senden Sie uns jederzeit eine Nachricht',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      description: 'Rufen Sie uns an oder schreiben Sie uns',
    },
    {
      icon: MapPin,
      label: 'Standort',
      value: SITE_CONFIG.location,
      href: '#',
      description: 'Wo wir Magie erschaffen',
    },
  ];

  const responseTime = [
    {
      icon: Clock,
      title: 'Antwortzeit',
      description: 'Wir antworten normalerweise innerhalb von 24 Stunden',
    },
    {
      icon: Camera,
      title: 'Sitzungsplanung',
      description: 'Maßgeschneiderte Planung für Ihre einzigartige Vision',
    },
    {
      icon: Heart,
      title: 'Persönliche Betreuung',
      description: 'Jeder Kunde erhält persönliche Aufmerksamkeit',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-deep-charcoal to-warm-brown text-warm-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-script font-medium mb-6 leading-tight">
              Lassen Sie uns gemeinsam erschaffen
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/90 mb-12 leading-relaxed">
              Bereit, Ihre unvergesslichen Momente einzufangen? Wir würden gerne von Ihnen hören.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Egal, ob Sie eine intime Porträtsitzung oder eine große Feier planen, 
              wir sind hier, um Ihre Vision zum Leben zu erwecken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gold-accent/10 rounded-2xl p-8 hover:bg-gold-accent/20 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif font-semibold text-deep-charcoal mb-2">
                      {info.label}
                    </h3>
                    <p className="text-sm text-warm-gray mb-4">
                      {info.description}
                    </p>
                    {info.href !== '#' ? (
                      <Link
                        href={info.href}
                        className="text-gold-accent hover:text-gold-accent/80 font-medium transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-deep-charcoal font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Email CTA */}
          <div className="text-center">
            <div className="bg-cream p-12 rounded-2xl border border-soft-beige max-w-2xl mx-auto">
              <Mail className="h-12 w-12 text-gold-accent mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-semibold text-deep-charcoal mb-4">
                Bereit zu buchen?
              </h3>
              <p className="text-warm-gray mb-8 leading-relaxed">
                Senden Sie uns eine E-Mail mit Ihrer Vision, Ihren Wunschterminen und allen Fragen, die Sie haben. 
                Wir melden uns innerhalb von 24 Stunden mit einem personalisierten Angebot bei Ihnen zurück.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-gradient-to-r from-gold-accent to-amber-500 text-deep-charcoal font-semibold hover:from-gold-accent/90 hover:to-amber-500/90 hover:shadow-lg hover:shadow-gold-accent/25 hover:scale-[1.02] transition-all duration-200 border border-gold-accent/20 min-h-[48px] px-8 py-3 rounded-xl" asChild>
                  <Link href={`mailto:${SITE_CONFIG.email}`}>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      E-Mail an uns: {SITE_CONFIG.email}
                    </div>
                  </Link>
                </Button>
                <p className="text-sm text-warm-gray">
                  Oder rufen Sie uns direkt an unter{' '}
                  <Link href={`tel:${SITE_CONFIG.phone}`} className="text-gold-accent hover:underline">
                    {SITE_CONFIG.phone}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Was Sie erwarten können
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Unser Prozess ist darauf ausgelegt, Ihnen vom ersten Kontakt bis zur finalen 
              Übergabe die bestmögliche Erfahrung zu bieten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTime.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-warm-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <Icon className="h-10 w-10 text-gold-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif font-semibold text-deep-charcoal mb-4">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-deep-charcoal text-warm-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-script font-medium mb-6">
              Ihre Geschichte wartet
            </h2>
            <p className="text-xl text-warm-white/80 mb-12 leading-relaxed">
              Jeder Moment ist einzigartig, jede Geschichte ist besonders. Lassen Sie uns Ihre gemeinsam einfangen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <PhotoButton 
                href={`mailto:${SITE_CONFIG.email}`} 
                variant="primary" 
                icon="focus"
                className="min-w-[240px]"
              >
                Das Gespräch beginnen
              </PhotoButton>
              <PhotoButton 
                href="/portfolio" 
                variant="secondary" 
                icon="eye"
                className="min-w-[200px]"
              >
                Unsere Arbeit ansehen
              </PhotoButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}