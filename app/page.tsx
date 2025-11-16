import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ScienceSection } from '@/components/sections/science-section'
import { TopProductsSection } from '@/components/sections/top-products-section'
import { VideoSection } from '@/components/sections/video-section'
import { CatalogSection } from '@/components/sections/catalog-section'
import { ReviewsSection } from '@/components/sections/reviews-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ScienceSection />
        <TopProductsSection />
        <VideoSection />
        <CatalogSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
