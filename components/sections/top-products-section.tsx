import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const topProducts = [
  {
    id: 'hatch-rest-plus',
    name: 'Hatch Rest+',
    description: 'Smart white noise machine with app',
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg'
  },
  {
    id: 'lectrofan-evo',
    name: 'LectroFan Evo',
    description: '22 unique sounds for perfect sleep',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71-3koMydDL._AC_SX679_.jpg'
  },
  {
    id: 'yogasleep-dohm',
    name: 'Yogasleep Dohm',
    description: 'Classic white noise generator',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg'
  }
]

export function TopProductsSection() {
  return (
    <section id="top-products" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Top Sleep Sound Machines
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            The stars of our collection — devices that received the highest user ratings
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topProducts.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,199,132,0.3)] cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  {/* Star decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-xl">★</span>
                  </div>
                  
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
                    <img 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                      {product.description}
                    </p>
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
                  
                  <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
                
                {/* Animated constellation lines */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(249, 199, 132, 0.1), transparent 70%)'
                  }}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
