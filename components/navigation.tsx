import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif text-primary glow-animation">BirdHavenPro</span>
          <span className="text-2xl">✨</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/reviews" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Reviews
          </Link>
          <Link href="/about" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
          Contact Us
        </Button>
      </div>
    </nav>
  )
}
