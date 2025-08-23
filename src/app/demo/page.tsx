import { MobileGallery } from '@/components/gallery';
import { MobileContactForm } from '@/components/forms';
import { OptimizedImage, PortfolioImage, ThumbnailImage } from '@/components/ui/OptimizedImage';
import { ProgressiveLoader, SkeletonText, SkeletonImage } from '@/components/loading';

// Sample gallery images
const sampleImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    alt: 'Wedding photography',
    title: 'Wedding Ceremony',
    category: 'wedding'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    alt: 'Portrait photography',
    title: 'Portrait Session',
    category: 'portrait'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop',
    alt: 'Family photography',
    title: 'Family Moments',
    category: 'family'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    alt: 'Event photography',
    title: 'Corporate Event',
    category: 'corporate'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1465145498025-928c7a71cab9?w=800&h=600&fit=crop',
    alt: 'Nature photography',
    title: 'Natural Beauty',
    category: 'nature'
  }
];

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mobile-full-width bg-gradient-to-br from-warm-white to-cream py-12 md:py-20">
        <div className="mobile-container text-center">
          <h1 className="mobile-title font-serif font-bold text-deep-charcoal mb-4">
            Mobile-First Photography Experience
          </h1>
          <p className="mobile-body text-warm-gray max-w-2xl mx-auto mb-8">
            Experience our mobile-optimized photography website with swipe gestures, 
            touch-friendly navigation, and progressive loading.
          </p>
          
          {/* Demo CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary touch-feedback">
              📱 Try Mobile Features
            </button>
            <button className="btn-secondary touch-feedback">
              🖼️ View Gallery Below
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Gallery Demo */}
      <section className="mobile-section bg-warm-white">
        <div className="mobile-container">
          <div className="text-center mb-8">
            <h2 className="text-h2 mb-4">📸 Swipe Gallery</h2>
            <p className="text-body text-warm-gray">
              Swipe left and right to navigate. Tap images for fullscreen view with pinch-to-zoom.
            </p>
          </div>
          
          <MobileGallery 
            images={sampleImages}
            className="mb-8"
          />
          
          <div className="bg-cream rounded-lg p-4 text-sm text-warm-gray">
            <p className="font-medium mb-2">Mobile Features:</p>
            <ul className="space-y-1">
              <li>👆 Touch-friendly swipe navigation</li>
              <li>📱 Fullscreen mode with tap-to-close</li>
              <li>🔍 Pinch-to-zoom on images</li>
              <li>📳 Haptic feedback on interactions</li>
              <li>⚡ Progressive image loading</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optimized Images Demo */}
      <section className="mobile-section bg-cream">
        <div className="mobile-container">
          <h2 className="text-h2 text-center mb-8">🚀 Performance Optimizations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Regular Optimized Image */}
            <div className="space-y-4">
              <h3 className="text-h3 text-center">Lazy Loading</h3>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop"
                alt="Lazy loaded image"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <p className="text-sm text-warm-gray text-center">
                Loads when scrolled into view
              </p>
            </div>
            
            {/* Portfolio Image */}
            <div className="space-y-4">
              <h3 className="text-h3 text-center">High Quality</h3>
              <PortfolioImage
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop"
                alt="Portfolio quality image"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <p className="text-sm text-warm-gray text-center">
                90% quality for portfolio
              </p>
            </div>
            
            {/* Thumbnail Image */}
            <div className="space-y-4">
              <h3 className="text-h3 text-center">Fast Thumbnails</h3>
              <ThumbnailImage
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop"
                alt="Thumbnail image"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <p className="text-sm text-warm-gray text-center">
                75% quality for speed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Loading Demo */}
      <section className="mobile-section bg-warm-white">
        <div className="mobile-container">
          <h2 className="text-h2 text-center mb-8">⏱️ Progressive Loading</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skeleton Loading Demo */}
            <div className="space-y-4">
              <h3 className="text-h3">Loading States</h3>
              <div className="space-y-4 p-4 border border-soft-beige rounded-lg">
                <SkeletonImage aspectRatio="landscape" />
                <SkeletonText lines={3} />
                <SkeletonText lines={1} width="half" />
              </div>
            </div>
            
            {/* Progressive Loader Demo */}
            <div className="space-y-4">
              <h3 className="text-h3">Staged Content</h3>
              <ProgressiveLoader 
                delay={1000}
                fallback={
                  <div className="p-4 border border-soft-beige rounded-lg">
                    <SkeletonImage aspectRatio="square" />
                  </div>
                }
              >
                <div className="p-4 border border-soft-beige rounded-lg">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop"
                    alt="Progressive content"
                    width={300}
                    height={300}
                    className="rounded w-full"
                  />
                </div>
              </ProgressiveLoader>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Form */}
      <section className="mobile-section bg-cream">
        <div className="mobile-container">
          <div className="text-center mb-8">
            <h2 className="text-h2 mb-4">📝 Mobile-First Forms</h2>
            <p className="text-body text-warm-gray">
              Multi-step form with mobile keyboard optimization and real-time validation.
            </p>
          </div>
          
          <MobileContactForm className="max-w-md mx-auto" />
          
          <div className="mt-8 bg-warm-white rounded-lg p-4 text-sm text-warm-gray max-w-md mx-auto">
            <p className="font-medium mb-2">Mobile Form Features:</p>
            <ul className="space-y-1">
              <li>📱 Prevents zoom on iOS (16px font-size)</li>
              <li>⌨️ Optimized keyboard types (email, tel, number)</li>
              <li>✅ Real-time validation with haptic feedback</li>
              <li>📊 Progress indicator for multi-step flow</li>
              <li>👆 Large, touch-friendly inputs (44px min)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}