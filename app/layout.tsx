import type { Metadata } from 'next'
import { Cinzel_Decorative, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'
import { StarfieldBackground } from '@/components/starfield-background'

const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '600'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'BirdHavenPro ✨ - Sleep Sound Machines & White Noise Reviews',
  description: 'Find serenity in sound. Discover the best sleep sound machines, white noise generators, and relaxation devices. Your guide to peaceful sleep.',
  generator: 'v0.app',
  keywords: 'sleep sound machines, white noise, sleep aids, relaxation, meditation, baby sleep',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cinzelDecorative.variable} font-sans antialiased`}>
        <StarfieldBackground />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
