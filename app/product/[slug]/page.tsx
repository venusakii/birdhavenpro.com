import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock product data
const productData: Record<string, any> = {
  'hatch-rest-riot': {
    name: 'Hatch Baby Rest+ (RIOT Edition)',
    description: 'Baby sound machine & night light with app control',
    fullDescription: 'The Hatch Rest+ combines a sound machine, night light, time-to-rise, and audio monitor all in one smart device. Control everything from your phone, create routines, and help your child fall asleep and stay asleep longer.',
    rating: 4.7,
    reviewCount: 3200,
    price: '$89.99',
    link: 'https://www.amazon.com/Hatch-Baby-Rest-RIOT/dp/B08YS6S66Z',
    images: [
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
    ],
    features: [
      'Wi-Fi Enabled',
      'App Control (iOS/Android)',
      'Night Light & Time-to-Rise',
      'Two-Way Audio Monitor',
      '10+ Soothing Sounds',
      'Toddler Lock'
    ],
    reviews: [
      { author: 'Emily K.', rating: 5, text: 'Game changer for baby sleep! The app is so easy to use.' },
      { author: 'Mike T.', rating: 5, text: 'Love the time-to-rise feature. Worth every penny.' },
    ]
  },

  'lectrofan-evo': {
    name: 'Adaptive Sound Technologies LectroFan Evo',
    description: 'High-fidelity white noise machine with non-looping sounds',
    fullDescription: 'The LectroFan Evo generates dynamic, non-repeating sounds to mask disruptive noise. Features fan sounds, white/pink/brown noise, and ocean waves.',
    rating: 4.6,
    reviewCount: 18500,
    price: '$49.95',
    link: 'https://www.amazon.com/Adaptive-Sound-Technologies-LectroFan-Non-Looping/dp/B074FL2HL2',
    images: [
      'https://m.media-amazon.com/images/I/71-3koMydDL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71-3koMydDL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71-3koMydDL._AC_SX679_.jpg',
    ],
    features: [
      '20 Unique Non-Looping Sounds',
      'Precise Volume Control',
      'Sleep Timer (up to 8 hours)',
      'Compact & Portable',
      'No Moving Parts'
    ],
    reviews: [
      { author: 'Alex P.', rating: 5, text: 'Best white noise machine I’ve ever owned. Blocks everything.' },
      { author: 'Laura S.', rating: 5, text: 'The brown noise is incredible for deep sleep.' },
    ]
  },

  'yogasleep-dohm': {
    name: 'Yogasleep Dohm (Original)',
    description: 'The original mechanical white noise machine',
    fullDescription: 'The iconic Dohm uses a real fan to create natural white noise. Simple two-speed design with adjustable tone and volume.',
    rating: 4.5,
    reviewCount: 28000,
    price: '$44.95',
    link: 'https://www.amazon.com/Yogasleep-Original-Soothing-Cancelling-Meditation/dp/B00HD0ELFK',
    images: [
      'https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg',
    ],
    features: [
      'Real Fan-Based White Noise',
      'Two Speeds',
      'Adjustable Tone & Volume',
      'Hand-Assembled in USA',
      'No Loops or Recordings'
    ],
    reviews: [
      { author: 'James R.', rating: 5, text: 'Classic for a reason. Still the best after 50+ years.' },
    ]
  },

  'hatch-restore-2': {
    name: 'Hatch Restore 2',
    description: 'Sunrise alarm clock & sound machine for adults',
    fullDescription: 'Personalized sleep-wake routines with gentle sunrise lighting, relaxing sounds, and a dream library of bedtime content.',
    rating: 4.6,
    reviewCount: 890,
    price: '$199.99',
    link: 'https://www.amazon.com/Hatch-Restore-Sunrise-Alarm-Machine/dp/B0DLLSCVZW',
    images: [
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
    ],
    features: [
      'Sunrise & Sunset Simulation',
      'Curated Sleep Content',
      'App-Controlled Routines',
      'Reading Light',
      'Premium Design'
    ],
    reviews: [
      { author: 'Sophia L.', rating: 5, text: 'Finally waking up gently instead of with a shock!' },
    ]
  },

  'anker-soundcore': {
    name: 'Anker Soundcore Bluetooth Speaker',
    description: 'Portable speaker with white noise playlist support',
    fullDescription: 'While primarily a Bluetooth speaker, many users use it with downloaded white noise playlists for travel and sleep.',
    rating: 4.7,
    reviewCount: 135000,
    price: '$27.99',
    link: 'https://www.amazon.com/Anker-Soundcore-Bluetooth-Exclusive-Water-Resistant/dp/B01MTB55WH',
    images: [
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
    ],
    features: [
      '24-Hour Playtime',
      'IPX5 Waterproof',
      'Bluetooth 5.0',
      'Stereo Sound',
      'Budget-Friendly'
    ],
    reviews: [
      { author: 'Chris B.', rating: 5, text: 'Insane battery life and sound for the price.' },
    ]
  },

  'pure-enrichment-wave': {
    name: 'Pure Enrichment Wave Premium Sleep Therapy',
    description: '6 soothing sounds with timer & USB charging',
    fullDescription: 'Compact white noise machine with 6 nature-inspired sounds, optional night light, and built-in USB charger.',
    rating: 4.5,
    reviewCount: 8500,
    price: '$39.99',
    link: 'https://www.amazon.com/Pure-Enrichment%C2%AE-WaveTM-Soothing-Machine/dp/B0BNNS3PNW',
    images: [
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
    ],
    features: [
      '6 Soothing Sounds',
      'Optional Night Light',
      '60/90/120-min Timer',
      'USB Charging Port',
      'Battery or AC Powered'
    ],
    reviews: [
      { author: 'Megan F.', rating: 5, text: 'Perfect for travel and home use!' },
    ]
  },

  'special-supplies-pillow': {
    name: 'Special Supplies Vibrating Pillow',
    description: 'Pressure-activated vibrating pillow for sensory input',
    fullDescription: 'Massaging pillow that activates gentle vibration when hugged or leaned on. Great for calming and sensory regulation.',
    rating: 4.4,
    reviewCount: 1200,
    price: '$49.99',
    link: 'https://www.amazon.com/Special-Supplies-Vibrating-Pressure-Activated/dp/B0BWKZWSZM',
    images: [
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
    ],
    features: [
      'Pressure-Activated Vibration',
      'Soft Plush Cover',
      'Auto Shut-Off',
      'Rechargeable Battery',
      'Sensory Therapy Tool'
    ],
    reviews: [
      { author: 'Therapist Mom', rating: 5, text: 'My autistic son loves this for calming.' },
    ]
  },

  'fblfobeli-travel-case': {
    name: 'FBLFOBELI Travel Case for Hatch Rest/Plus',
    description: 'Hard carrying case for Hatch sound machines',
    fullDescription: 'Protective EVA travel case custom-fit for Hatch Rest, Rest+, and Rest Go with mesh pocket for charger.',
    rating: 4.8,
    reviewCount: 450,
    price: '$25.99',
    link: 'https://www.amazon.com/FBLFOBELI-Travel-Hatch-Sound-Machine/dp/B0DJV3HH3N',
    images: [
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
    ],
    features: [
      'Hard EVA Shell',
      'Custom Fit for Hatch Rest+',
      'Mesh Pocket & Handle',
      'Shockproof & Water-Resistant',
      'Smooth Zipper'
    ],
    reviews: [
      { author: 'Traveling Parent', rating: 5, text: 'Perfect protection for our Hatch on trips!' },
    ]
  },

  'hatch-rest-plus': {
    name: 'Hatch Baby Rest+ (RIOT Edition)',
    description: 'Baby sound machine & night light with app control',
    fullDescription: 'The Hatch Rest+ combines a sound machine, night light, time-to-rise, and audio monitor all in one smart device. Control everything from your phone, create routines, and help your child fall asleep and stay asleep longer.',
    rating: 4.7,
    reviewCount: 3200,
    price: '$89.99',
    link: 'https://www.amazon.com/Hatch-Baby-Rest-RIOT/dp/B08YS6S66Z',
    images: [
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
      'https://m.media-amazon.com/images/I/51DtHaO00TL._SX466_.jpg',
    ],
    features: [
      'Wi-Fi Enabled',
      'App Control (iOS/Android)',
      'Night Light & Time-to-Rise',
      'Two-Way Audio Monitor',
      '10+ Soothing Sounds',
      'Toddler Lock'
    ],
    reviews: [
      { author: 'Emily K.', rating: 5, text: 'Game changer for baby sleep! The app is so easy to use.' },
      { author: 'Mike T.', rating: 5, text: 'Love the time-to-rise feature. Worth every penny.' },
    ]
  },

  'hatch-baby-rest': {
    name: 'Hatch Restore 2',
    description: 'Sunrise alarm clock & sound machine for adults',
    fullDescription: 'Personalized sleep-wake routines with gentle sunrise lighting, relaxing sounds, and a dream library of bedtime content. Wake up naturally with gradual sunrise simulation.',
    rating: 4.9,
    reviewCount: 890,
    price: '$199.99',
    link: 'https://www.amazon.com/Hatch-Restore-Sunrise-Alarm-Machine/dp/B0DLLSCVZW',
    images: [
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81kueNVrxRL._AC_SX679_.jpg',
    ],
    features: [
      'Sunrise & Sunset Simulation',
      'Curated Sleep Content Library',
      'App-Controlled Routines',
      'Warm Reading Light',
      'Premium Minimalist Design',
      'Bluetooth Audio'
    ],
    reviews: [
      { author: 'Sophia L.', rating: 5, text: 'Finally waking up gently instead of with a shock! The sunrise feature is life-changing.' },
      { author: 'David M.', rating: 5, text: 'Worth every penny. My mornings are so much better now.' },
      { author: 'Rachel W.', rating: 4, text: 'Beautiful device, great features. Subscription content is optional but nice.' },
    ]
  },

  'portable-sound': {
    name: 'Anker Soundcore Bluetooth Speaker',
    description: 'Portable speaker with white noise playlist support',
    fullDescription: 'While primarily a Bluetooth speaker, many users love it for playing white noise playlists for travel and sleep. Incredible 24-hour battery life and IPX5 waterproof rating make it perfect for any environment.',
    rating: 4.5,
    reviewCount: 135000,
    price: '$27.99',
    link: 'https://www.amazon.com/Anker-Soundcore-Bluetooth-Exclusive-Water-Resistant/dp/B01MTB55WH',
    images: [
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/614l20nEhmL._AC_SX466_.jpg',
    ],
    features: [
      '24-Hour Playtime',
      'IPX5 Waterproof Rating',
      'Bluetooth 5.0 Connectivity',
      'Rich Stereo Sound',
      'Ultra Portable & Compact',
      'Budget-Friendly Price'
    ],
    reviews: [
      { author: 'Chris B.', rating: 5, text: 'Insane battery life and sound quality for the price. Use it for white noise every night!' },
      { author: 'Travel Nurse Sarah', rating: 5, text: 'Perfect for hotel rooms. Battery lasts all week without charging.' },
      { author: 'Matt K.', rating: 4, text: 'Great speaker. Pair it with a white noise app and you have a portable sleep machine.' },
    ]
  },

  'zen-meditation': {
    name: 'Pure Enrichment Wave Premium Sleep Therapy',
    description: '6 soothing sounds with timer & USB charging',
    fullDescription: 'Compact white noise machine with 6 nature-inspired sounds including ocean waves, rain, and white noise. Features optional warm night light and built-in USB charging port for devices.',
    rating: 4.8,
    reviewCount: 8500,
    price: '$39.99',
    link: 'https://www.amazon.com/Pure-Enrichment%C2%AE-WaveTM-Soothing-Machine/dp/B0BNNS3PNW',
    images: [
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71+hmbjIU+L._AC_SX679_.jpg',
    ],
    features: [
      '6 Soothing Natural Sounds',
      'Optional Warm Night Light',
      '60/90/120-Minute Timer',
      'USB Charging Port for Devices',
      'Battery or AC Powered',
      'Travel-Friendly Size'
    ],
    reviews: [
      { author: 'Megan F.', rating: 5, text: 'Perfect for travel and home use! Love the USB port for charging my phone.' },
      { author: 'Zen Master Joe', rating: 5, text: 'Use it for meditation and sleep. The ocean sounds are incredibly realistic.' },
      { author: 'Lisa T.', rating: 4, text: 'Compact and versatile. Night light is a nice touch.' },
    ]
  },

  'sleep-therapy': {
    name: 'Special Supplies Vibrating Pillow',
    description: 'Pressure-activated vibrating pillow for sensory input',
    fullDescription: 'Massaging pillow that activates gentle vibration when hugged or leaned on. Excellent for calming anxiety, sensory regulation, and relaxation therapy. Popular with parents of children with autism and sensory processing needs.',
    rating: 4.7,
    reviewCount: 1200,
    price: '$49.99',
    link: 'https://www.amazon.com/Special-Supplies-Vibrating-Pressure-Activated/dp/B0BWKZWSZM',
    images: [
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81lkdWxDg6L._AC_SX679_.jpg',
    ],
    features: [
      'Pressure-Activated Gentle Vibration',
      'Soft Plush Removable Cover',
      'Auto Shut-Off Safety Timer',
      'Rechargeable Battery',
      'Sensory Therapy Tool',
      'Washable Cover'
    ],
    reviews: [
      { author: 'Therapist Mom', rating: 5, text: 'My autistic son loves this for calming. It really helps during meltdowns.' },
      { author: 'OT Professional', rating: 5, text: 'Recommend this to many families. Excellent sensory regulation tool.' },
      { author: 'Jessica P.', rating: 4, text: 'Works great for my anxious daughter. She hugs it every night.' },
    ]
  },

  'travel-companion': {
    name: 'FBLFOBELI Travel Case for Hatch Rest/Plus',
    description: 'Hard carrying case for Hatch sound machines',
    fullDescription: 'Protective EVA travel case custom-fit for Hatch Rest, Rest+, and Rest Go with internal mesh pocket for charger and accessories. Hard shell exterior protects against drops and impacts during travel.',
    rating: 4.6,
    reviewCount: 450,
    price: '$25.99',
    link: 'https://www.amazon.com/FBLFOBELI-Travel-Hatch-Sound-Machine/dp/B0DJV3HH3N',
    images: [
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/71pji-B2aOL._AC_SX466_.jpg',
    ],
    features: [
      'Hard EVA Shell Protection',
      'Custom Fit for Hatch Rest+',
      'Internal Mesh Pocket & Handle',
      'Shockproof & Water-Resistant',
      'Smooth Double Zipper',
      'Compact & Lightweight'
    ],
    reviews: [
      { author: 'Traveling Parent', rating: 5, text: 'Perfect protection for our Hatch on trips! Fits everything we need.' },
      { author: 'Frequent Flyer Dad', rating: 5, text: 'Essential travel accessory. Our Hatch survived checked luggage!' },
      { author: 'Amanda S.', rating: 4, text: 'Great quality case. Wish it had a slightly larger pocket but works well.' },
    ]
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productData[slug]
  
  if (!product) {
    return (
      <div className="relative min-h-screen">
        <Navigation />
        <main className="relative z-10 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">Product Not Found</h1>
              <p className="text-xl text-foreground/80 mb-8">The product you're looking for doesn't exist.</p>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Product Header with halo effect */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4 relative text-balance">
                {product.name}
              </h1>
              <p className="text-xl text-foreground/80 relative text-pretty">
                {product.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 bg-card/20">
                  <img 
                    src={product.images[0] || "/placeholder.svg"} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((img: string, i: number) => (
                    null
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-lg text-foreground/70">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {product.fullDescription}
                </p>

                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-animation"
                  asChild
                >
                  <a href={product.link || 'https://amazon.com'} target="_blank" rel="noopener noreferrer">
                    🛒 View on Amazon
                  </a>
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  As an Amazon Partner, we earn income from qualifying purchases.
                </p>
              </div>
            </div>

            {/* Features Section */}
            <Card className="mb-16 bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif text-primary mb-6">🌌 Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/20 border border-primary/10">
                      <span className="text-secondary">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8 text-center">⭐ Customer Reviews</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {product.reviews.map((review: any, i: number) => (
                  <Card key={i} className="bg-card/30 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">{review.author}</span>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, j) => (
                            <span key={j} className="text-primary">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed italic">
                        "{review.text}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
