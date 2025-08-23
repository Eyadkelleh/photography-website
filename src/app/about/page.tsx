import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, MapPin, Camera, Heart, Users, Star } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';
import { AWARDS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Visual Poetry Photography',
  description: 'Meet the photographer behind Visual Poetry Photography. Learn about our passion for equestrian and portrait photography and our commitment to capturing authentic moments.',
  openGraph: {
    title: 'About | Visual Poetry Photography',
    description: 'Meet the photographer behind Visual Poetry Photography and learn about our artistic vision.',
    images: ['/images/about/photographer-portrait.jpg'],
  },
};

const stats = [
  { label: 'Years of Experience', value: '10+', icon: Camera },
  { label: 'Happy Clients', value: '500+', icon: Users },
  { label: 'Photo Sessions', value: '1200+', icon: Heart },
  { label: 'Awards Won', value: '15+', icon: Star },
];

const timeline = [
  {
    year: '2014',
    title: 'The Journey Begins',
    description: 'Started photography as a hobby while working with horses, discovering my passion for capturing the bond between humans and animals.',
  },
  {
    year: '2016',
    title: 'Professional Certification',
    description: 'Completed advanced photography certification and began taking on professional clients, specializing in equestrian photography.',
  },
  {
    year: '2018',
    title: 'Studio Launch',
    description: 'Launched Visual Poetry Photography, expanding services to include portraits and business photography.',
  },
  {
    year: '2020',
    title: 'Award Recognition',
    description: 'Received first major photography award for excellence in equestrian photography from the California Photography Society.',
  },
  {
    year: '2022',
    title: 'Digital Innovation',
    description: 'Embraced cutting-edge digital techniques and expanded into lifestyle and event photography.',
  },
  {
    year: '2024',
    title: 'Continued Excellence',
    description: 'Celebrating a decade of capturing memories and continuing to push creative boundaries in photography.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-cream to-soft-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-deep-charcoal leading-tight">
                  Meet the Artist
                </h1>
                <p className="text-xl md:text-2xl text-warm-gray leading-relaxed">
                  Behind every photograph is a story, and I'm here to help you tell yours.
                </p>
              </div>
              
              <div className="prose prose-lg text-warm-gray">
                <p>
                  Hello! I&apos;m Sarah, the photographer and creative force behind Visual Poetry Photography. 
                  My journey into photography began over a decade ago with a simple love for horses and 
                  the beautiful moments shared between humans and animals.
                </p>
                <p>
                  What started as capturing candid moments at the stable has evolved into a full-service 
                  photography business dedicated to preserving life&apos;s most precious memories. I believe 
                  that every photograph should tell a story, evoke emotion, and stand the test of time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Let's Create Together</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/photographer-portrait.jpg"
                  alt="Sarah, photographer at Visual Poetry Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-accent text-deep-charcoal px-6 py-3 rounded-xl shadow-lg">
                <p className="font-semibold">Capturing memories since 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              By the Numbers
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              A decade of dedication to the art of photography has resulted in 
              countless beautiful moments captured and preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-serif font-bold text-deep-charcoal mb-2">
                      {stat.value}
                    </div>
                    <div className="text-warm-gray">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              My Journey
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Every photographer has a story. Here's how my passion for capturing 
              authentic moments evolved into Visual Poetry Photography.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                  <div className="flex-shrink-0">
                    <div className="bg-gold-accent text-deep-charcoal px-4 py-2 rounded-full font-serif font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-deep-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              I&apos;m honored to have received recognition from peers and industry 
              organizations for my commitment to excellence in photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award) => (
              <Card key={award.id} hover className="group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-gold-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-serif font-semibold text-deep-charcoal mb-2">
                        {award.name}
                      </h3>
                      <p className="text-warm-gray text-sm mb-1">
                        {award.organization}
                      </p>
                      <p className="text-gold-accent font-medium">
                        {award.year}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
              My Philosophy
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-soft-rose/10 to-sage-green/10 border-none">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <Heart className="h-16 w-16 text-gold-accent mx-auto" />
                  <blockquote className="text-xl md:text-2xl font-serif text-deep-charcoal leading-relaxed italic">
                    &quot;Photography is not just about capturing what you see, but feeling what you experience. 
                    Every session is an opportunity to create art that tells your unique story and 
                    preserves the emotions of the moment forever.&quot;
                  </blockquote>
                  <cite className="text-warm-gray">— Sarah, Visual Poetry Photography</cite>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="bg-gold-accent/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Camera className="h-8 w-8 text-gold-accent" />
                    </div>
                    <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Authentic Moments</h3>
                    <p className="text-warm-gray text-sm">
                      Capturing genuine emotions and natural interactions that tell your real story.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-soft-rose/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-soft-rose" />
                    </div>
                    <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Personal Connection</h3>
                    <p className="text-warm-gray text-sm">
                      Building relationships with clients to create comfortable, meaningful sessions.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-sage-green/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-sage-green" />
                    </div>
                    <h3 className="font-serif font-semibold text-deep-charcoal mb-2">Timeless Quality</h3>
                    <p className="text-warm-gray text-sm">
                      Creating photographs that will be treasured for generations to come.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-deep-charcoal text-warm-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let&apos;s work together to capture your most precious moments. I&apos;d love to hear 
            your story and discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gold-accent text-deep-charcoal hover:bg-yellow-500" asChild>
              <Link href="/contact">Start Your Session</Link>
            </Button>
            <Button variant="secondary" size="lg" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-deep-charcoal" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}