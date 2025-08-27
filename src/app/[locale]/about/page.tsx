import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, MapPin, Camera, Heart, Users, Star, Leaf, Sun, Search, Sparkles } from 'lucide-react';
import { PhotoButton } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useAwards } from '@/lib/constants-i18n';

export const metadata: Metadata = {
  title: 'About | Visual Poetry Photography',
  description: 'Meet the photographer behind Visual Poetry Photography. Learn about our passion for equestrian and portrait photography and our commitment to capturing authentic moments.',
  openGraph: {
    title: 'About | Visual Poetry Photography',
    description: 'Meet the photographer behind Visual Poetry Photography and learn about our artistic vision.',
    images: ['/images/about/photographer-portrait.jpg'],
  },
};

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const awards = useAwards();

  const stats = [
    { label: t('stats.experience'), value: '10+', icon: Camera },
    { label: t('stats.clients'), value: '500+', icon: Users },
    { label: t('stats.sessions'), value: '1200+', icon: Heart },
    { label: t('stats.awards'), value: '15+', icon: Star },
  ];

  const timeline = [
    {
      year: '2014',
      title: t('timeline.2014.title'),
      description: t('timeline.2014.description'),
    },
    {
      year: '2016',
      title: t('timeline.2016.title'),
      description: t('timeline.2016.description'),
    },
    {
      year: '2018',
      title: t('timeline.2018.title'),
      description: t('timeline.2018.description'),
    },
    {
      year: '2020',
      title: t('timeline.2020.title'),
      description: t('timeline.2020.description'),
    },
    {
      year: '2022',
      title: t('timeline.2022.title'),
      description: t('timeline.2022.description'),
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-sm font-medium text-gold-accent bg-gold-accent/10 px-4 py-2 rounded-full tracking-wide">
                      PHOTOGRAPHER
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-script text-deep-charcoal leading-tight">
                    {t('title')}
                  </h1>
                  <p className="text-xl text-warm-gray/80 leading-relaxed max-w-2xl">
                    {t('subtitle')}
                  </p>
                </div>
                
                {/* Introduction */}
                <div className="space-y-6 text-warm-gray leading-relaxed max-w-2xl">
                  <p className="text-lg">
                    {t('intro1')}
                  </p>
                  <p className="text-lg">
                    {t('intro2')}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <PhotoButton 
                    href="/contact"
                    variant="primary"
                    icon="camera"
                    className="min-w-[180px]"
                  >
                    {t('letsCreate')}
                  </PhotoButton>
                  <PhotoButton 
                    href="/portfolio"
                    variant="secondary"
                    icon="eye"
                    className="min-w-[180px]"
                  >
                    {t('viewWork')}
                  </PhotoButton>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/images/about/photographer-portrait.jpg"
                    alt="Uta, photographer with her dog among cherry blossoms"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                  <p className="text-sm font-medium text-deep-charcoal">{t('capturingMemories')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Style Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-deep-charcoal mb-4 tracking-tight">
                {t('myStyle')}
              </h2>
              <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Style Item 1 */}
              <div className="group bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center group-hover:bg-sage-green/20 transition-colors duration-300">
                    <Leaf className="h-8 w-8 text-sage-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-deep-charcoal">
                      {t('styleGentle')}
                    </h3>
                    <div className="w-12 h-0.5 bg-sage-green mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Style Item 2 */}
              <div className="group bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gold-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-accent/20 transition-colors duration-300">
                    <Sun className="h-8 w-8 text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-deep-charcoal">
                      {t('styleLight')}
                    </h3>
                    <div className="w-12 h-0.5 bg-gold-accent mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Style Item 3 */}
              <div className="group bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-soft-rose/10 rounded-2xl flex items-center justify-center group-hover:bg-soft-rose/20 transition-colors duration-300">
                    <Search className="h-8 w-8 text-soft-rose" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-deep-charcoal">
                      {t('styleDetail')}
                    </h3>
                    <div className="w-12 h-0.5 bg-soft-rose mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Style Item 4 */}
              <div className="group bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-warm-brown/10 rounded-2xl flex items-center justify-center group-hover:bg-warm-brown/20 transition-colors duration-300">
                    <Sparkles className="h-8 w-8 text-warm-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-deep-charcoal">
                      {t('styleEmpathetic')}
                    </h3>
                    <div className="w-12 h-0.5 bg-warm-brown mt-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Wish */}
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gold-accent to-warm-brown rounded-2xl mb-8">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <blockquote className="text-2xl font-light text-deep-charcoal leading-relaxed italic">
                  "{t('myWish')}"
                </blockquote>
                <cite className="text-warm-gray mt-4 block">— Uta</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-deep-charcoal mb-4 tracking-tight">
              {t('byTheNumbers')}
            </h2>
            <p className="text-lg text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
              {t('numbersDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mb-6">
                    <Icon className="h-8 w-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-light text-deep-charcoal mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-warm-gray uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-deep-charcoal mb-4 tracking-tight">
              {t('myJourney')}
            </h2>
            <p className="text-lg text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
              {t('journeyDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0 md:w-32">
                      <div className="inline-block bg-deep-charcoal text-white px-6 py-3 rounded-xl font-medium text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-medium text-deep-charcoal mb-4">
                        {item.title}
                      </h3>
                      <p className="text-warm-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute left-16 top-20 w-px h-16 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-deep-charcoal mb-4 tracking-tight">
              {t('awardsRecognition')}
            </h2>
            <p className="text-lg text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
              {t('awardsDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-gold-accent/5 transition-all duration-300 border border-gray-100 hover:border-gold-accent/20">
                <div className="w-16 h-16 bg-gold-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-accent/20 transition-colors duration-300">
                  <Award className="h-8 w-8 text-gold-accent" />
                </div>
                <h3 className="font-medium text-deep-charcoal mb-3 leading-tight">
                  {award.name}
                </h3>
                <p className="text-warm-gray text-sm mb-2">
                  {award.organization}
                </p>
                <p className="text-gold-accent font-medium text-sm">
                  {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-deep-charcoal mb-4 tracking-tight">
              {t('myPhilosophy')}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Philosophy Quote */}
            <div className="text-center mb-20">
              <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-3xl border border-gray-100">
                <div className="w-16 h-16 bg-gold-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Heart className="h-8 w-8 text-gold-accent" />
                </div>
                <blockquote className="text-2xl md:text-3xl font-light text-deep-charcoal leading-relaxed italic mb-8">
                  "{t('philosophyQuote')}"
                </blockquote>
                <cite className="text-warm-gray font-medium">
                  {t('philosophyAuthor')}
                </cite>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-gold-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-gold-accent" />
                </div>
                <h3 className="font-medium text-deep-charcoal mb-4 text-lg">
                  {t('values.authenticMoments.title')}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {t('values.authenticMoments.description')}
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-soft-rose/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-soft-rose" />
                </div>
                <h3 className="font-medium text-deep-charcoal mb-4 text-lg">
                  {t('values.personalConnection.title')}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {t('values.personalConnection.description')}
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-sage-green" />
                </div>
                <h3 className="font-medium text-deep-charcoal mb-4 text-lg">
                  {t('values.timelessQuality.title')}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {t('values.timelessQuality.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
              {t('readyToCreate')}
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {t('readyDescription')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PhotoButton 
                href="/contact"
                variant="primary"
                icon="camera"
                className="min-w-[180px]"
              >
                {t('startSession')}
              </PhotoButton>
              <PhotoButton 
                href="/services"
                variant="secondary"
                icon="aperture"
                className="min-w-[180px]"
              >
                {t('viewServices')}
              </PhotoButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}