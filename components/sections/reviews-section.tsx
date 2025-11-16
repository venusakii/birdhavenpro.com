import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    name: 'Emily K.',
    review: 'Game changer for baby sleep! The app is so easy to use.',
    rating: 5,
    location: 'Seattle, USA'
  },
  {
    name: 'Alex P.',
    review: 'Best white noise machine I\'ve ever owned. Blocks everything.',
    rating: 5,
    location: 'Los Angeles, USA'
  },
  {
    name: 'Laura S.',
    review: 'The brown noise is incredible for deep sleep.',
    rating: 5,
    location: 'Toronto, Canada'
  }
];

export function ReviewsSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Voices from the Sky
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            What our users from around the world say
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group float-animation bg-card/40 backdrop-blur-sm border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,200,227,0.3)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-xl font-semibold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-foreground/60">{review.location}</div>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
                
                <p className="text-sm text-foreground/80 leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
