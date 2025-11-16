import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/20 bg-background/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif text-primary mb-4">BirdHavenPro ✨</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Your guide to the world of sounds for perfect sleep and relaxation.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/reviews" className="text-sm text-foreground/70 hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Amazon Partner</h4>
            <p className="text-xs text-foreground/60 leading-relaxed">
              As an Amazon Partner, we earn income from qualifying purchases.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-foreground/60">
            © 2025 BirdHavenPro.com. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50 mt-2">
            Amazon Associates Partner.
          </p>
        </div>
      </div>
      
      {/* Animated star dust effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </footer>
  )
}
