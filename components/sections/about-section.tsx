export function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Rotating planets decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-accent animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-secondary animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">
            About BirdHavenPro
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="text-pretty">
              We are a team of healthy sleep enthusiasts who believe in the power of the right sounds. Our mission is to help everyone find their perfect sound solution for quality rest.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-sm text-foreground/70">
                  Helping people find peace through the power of sound
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Our Values</h3>
                <p className="text-sm text-foreground/70">
                  Honesty, quality, and care for every user
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <div className="text-4xl mb-3">🌙</div>
                <h3 className="text-xl font-semibold text-accent mb-2">Our Vision</h3>
                <p className="text-sm text-foreground/70">
                  A world where everyone sleeps peacefully under the stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
