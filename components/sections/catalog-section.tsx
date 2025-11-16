'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const categories = ['All', 'For Babies', 'For Travel', 'For Meditation']

const products = [
  { id: 'hatch-baby-rest', name: 'Hatch Baby Rest', category: 'For Babies', rating: 4.9, image: '/baby-sound-machine-with-night-light.jpg' },
  { id: 'portable-sound-machine', name: 'Portable Sound+', category: 'For Travel', rating: 4.5, image: '/portable-compact-sound-machine.jpg' },
  { id: 'zen-meditation', name: 'Zen Meditation Pro', category: 'For Meditation', rating: 4.8, image: '/meditation-sound-machine-wooden.jpg' },
  { id: 'sleep-therapy', name: 'Sleep Therapy Plus', category: 'For Babies', rating: 4.7, image: '/sleep-therapy-sound-machine.jpg' },
  { id: 'travel-companion', name: 'Travel Companion', category: 'For Travel', rating: 4.6, image: '/travel-sound-machine-small.jpg' },
  { id: 'mindful-sound', name: 'Mindful Sound', category: 'For Meditation', rating: 4.9, image: '/mindful-meditation-sound-device.jpg' },
]

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Constellations of Calm
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 text-pretty">
            Explore our collection of stellar devices
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary/30 text-primary hover:bg-primary/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group relative bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,200,227,0.3)] cursor-pointer h-full">
                <CardContent className="p-5 space-y-3">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted/20">
                    <img 
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div>
                    <div className="text-xs text-secondary mb-1">{product.category}</div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}`}>
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
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
            <Link href="/reviews">
              View All Reviews →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
