import { 
  HeroSection, 
  ServicesPreview, 
  PortfolioPreview, 
  TestimonialsSection, 
  BookingProcess 
} from '@/components/sections';
import { ProgressiveLoader, SkeletonCard } from '@/components/loading/ProgressiveLoader';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero loads immediately */}
      <HeroSection />
      
      {/* Services load with a slight delay for progressive loading */}
      <ProgressiveLoader 
        delay={100}
        fallback={
          <section className="mobile-section mobile-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkeletonCard />
              <SkeletonCard className="hidden md:block" />
              <SkeletonCard className="hidden md:block" />
            </div>
          </section>
        }
      >
        <ServicesPreview />
      </ProgressiveLoader>
      
      {/* Portfolio loads after services */}
      <ProgressiveLoader 
        delay={200}
        fallback={
          <section className="mobile-section mobile-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        }
      >
        <PortfolioPreview />
      </ProgressiveLoader>
      
      {/* Testimonials load after portfolio */}
      <ProgressiveLoader delay={300}>
        <TestimonialsSection />
      </ProgressiveLoader>
      
      {/* Booking process loads last */}
      <ProgressiveLoader delay={400}>
        <BookingProcess />
      </ProgressiveLoader>
    </div>
  );
}
