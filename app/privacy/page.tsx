import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-8 text-center text-balance">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">Information Collection</h2>
                <p className="leading-relaxed">
                  We collect only necessary information to improve your experience on the site. This may include data about visits, preferences, and content interaction.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">Cookie Usage</h2>
                <p className="leading-relaxed">
                  We use cookies to improve site functionality and analyze traffic. By continuing to use the site, you agree to the use of cookies.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">Data Protection</h2>
                <p className="leading-relaxed">
                  We apply modern technologies to protect your personal data and do not transfer it to third parties without your consent.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
                <h2 className="text-2xl font-serif text-primary mb-4">Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to request access to your data, correction, or deletion. Contact us through the contact page to exercise these rights.
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
