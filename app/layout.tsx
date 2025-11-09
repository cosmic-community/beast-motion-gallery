import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beast Motion Gallery - Animated Photo Showcase',
  description: 'Experience photos brought to life with Beast Mode, Smooth Flow, and Dynamic Zoom animation effects',
  keywords: ['animation', 'video', 'photos', 'beast mode', 'motion graphics'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CosmicBadge bucketSlug={bucketSlug} />
        <script src="/dashboard-console-capture.js"></script>
      </body>
    </html>
  )
}