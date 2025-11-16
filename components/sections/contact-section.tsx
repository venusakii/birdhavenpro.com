'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Send a Signal
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Contact us — we're always here
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-foreground/80">Your Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card/30 border-primary/30 focus:border-primary text-foreground"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-foreground/80">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card/30 border-primary/30 focus:border-primary text-foreground"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground/80">Message</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card/30 border-primary/30 focus:border-primary text-foreground min-h-32"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-animation"
              disabled={submitted}
            >
              {submitted ? '✓ Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
