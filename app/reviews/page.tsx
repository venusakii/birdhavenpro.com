import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const allReviews = [
  { slug: 'hatch-rest-plus', name: 'Hatch Rest+', category: 'Smart Devices', rating: 4.8, image: 'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg' },
  { slug: 'lectrofan-evo', name: 'LectroFan Evo', category: 'White Noise', rating: 4.7, image: 'https://m.media-amazon.com/images/I/71-3koMydDL._AC_SX679_.jpg' },
  { slug: 'yogasleep-dohm', name: 'Yogasleep Dohm', category: 'Classic', rating: 4.6, image: 'https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg' },
  { slug: 'hatch-baby-rest', name: 'Hatch Baby Rest', category: 'Baby', rating: 4.9, image: 'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg' },
  { slug: 'portable-sound', name: 'Portable Sound+', category: 'Travel', rating: 4.5, image: 'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg' },
  { slug: 'zen-meditation', name: 'Zen Meditation Pro', category: 'Meditation', rating: 4.8, image: 'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg' },
  { slug: 'sleep-therapy', name: 'Sleep Therapy Plus', category: 'Therapy', rating: 4.7, image: 'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg' },
  { slug: 'travel-companion', name: 'Travel Companion', category: 'Travel', rating: 4.6, image: 'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg' },
]

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4 text-balance">
              All Sound Machine Reviews
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
              The complete collection of our constellations of calm
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allReviews.map((product) => (
              <Link key={product.slug} href={`/product/${product.slug}`}>
                <Card className="group relative bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,199,132,0.3)] cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-primary text-xl">★</span>
                    </div>
                    
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted/20">
                      <img 
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div>
                      <div className="text-xs text-secondary mb-1">{product.category}</div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-foreground/60">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
