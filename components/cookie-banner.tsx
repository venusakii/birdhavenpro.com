'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-card/95 backdrop-blur-lg border-2 border-primary/30 rounded-xl p-6 shadow-[0_0_30px_rgba(249,199,132,0.3)]">
        <p className="text-sm text-foreground mb-4 leading-relaxed">
          This website uses cookies to improve your experience. By continuing to use the site, you agree to our cookie policy.
        </p>
        <Button 
          onClick={acceptCookies}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Accept
        </Button>
      </div>
    </div>
  )
}
