'use client'

import { useEffect, useState } from 'react'

const backgroundImages = [
  // Replace these URLs with your actual eco-friendly parking images
  'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2000', // Green parking with trees
  'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2000', // Solar panels parking
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2000', // Nature parking lot
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000', // Green landscape
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2000', // Sustainable urban
]

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-background">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-bg-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  )
}
