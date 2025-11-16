import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactSection } from '@/components/sections/contact-section'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6 text-balance">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-foreground/70 text-pretty">
              Мы всегда рады вашим вопросам и предложениям
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
