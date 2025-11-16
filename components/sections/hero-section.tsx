'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      section.style.setProperty('--mouse-x', `${x}px`)
      section.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Nebula glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 float-animation">
          <h1 className="text-6xl md:text-8xl font-serif text-primary leading-tight text-balance">
            Sleep Among the Stars
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary leading-relaxed text-pretty">
            Find serenity in sound.
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect white noise machines and sound devices that will transform your sleep into a cosmic journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 glow-animation"
            >
              <Link href="/reviews">
                Explore the Constellations
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6"
            >
              <Link href="#top-products">
                Top Devices
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating stars decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/60 rounded-full star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
