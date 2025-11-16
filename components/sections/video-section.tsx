export function VideoSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary text-balance">
            Hear the Universe
          </h2>
          
          <p className="text-lg text-foreground/70 text-pretty">
            Immerse yourself in the calming world of white noise
          </p>
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(249,199,132,0.2)]">
            <div className="aspect-video bg-muted/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nMfPqeZjc2c"
                title="White Noise for Sleep"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            
            {/* Holographic circle decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-secondary/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
