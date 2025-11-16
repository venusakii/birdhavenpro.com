import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-8 text-center text-balance">
              Terms of Use
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">1. General Provisions</h2>
                <p className="leading-relaxed">
                  Welcome to BirdHavenPro. By using our site, you agree to these terms of use.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">2. Affiliate Links</h2>
                <p className="leading-relaxed">
                  BirdHavenPro is a participant in the Amazon Affiliate Program. We receive a commission from purchases made through our links, which helps us maintain the site.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  Information on the site is provided "as is". We strive to ensure accuracy of information, but are not responsible for possible errors.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">4. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on the site is protected by copyright and belongs to BirdHavenPro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
