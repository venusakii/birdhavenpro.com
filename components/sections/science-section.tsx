export function ScienceSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary text-balance">
            The Science of Sleep Sound
          </h2>
          
          <div className="relative py-12">
            {/* Constellation lines forming brain waves */}
            <svg className="w-full h-40 opacity-50" viewBox="0 0 800 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 0 80 Q 100 20, 200 80 T 400 80 T 600 80 T 800 80" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F9C784" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#7EC8E3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B66FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Connection points */}
              {[0, 200, 400, 600, 800].map((x, i) => (
                <circle key={i} cx={x} cy="80" r="4" fill="#F9C784" className="star" />
              ))}
            </svg>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold text-secondary mb-3">🧠 Better Sleep</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                White noise masks external sounds and helps your brain switch to rest mode faster.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold text-secondary mb-3">🎵 Consistent Background</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Steady sound frequencies create a calming effect and reduce stress.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
              <h3 className="text-xl font-semibold text-secondary mb-3">⭐ Scientifically Proven</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Research shows that white noise improves sleep quality for 70% of users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
