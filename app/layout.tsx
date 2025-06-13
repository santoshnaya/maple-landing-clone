import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maple - Get your family organized',
  description: 'Trusted by families from all over the world to share household responsibilities.',
  keywords: ['family', 'organization', 'household', 'tasks', 'calendar', 'maple'],
  authors: [{ name: 'Maple Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-maple-beige text-maple-charcoal`}>
        {children}
      </body>
    </html>
  )
}