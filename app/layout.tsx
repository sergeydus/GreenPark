import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GreenPark - Nature Friendly Parking Solutions',
  description: 'Eco-friendly parking solutions that blend technology with nature',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
