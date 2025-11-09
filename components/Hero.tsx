import Link from 'next/link'
import { AnimatedPhoto } from '@/types'
import StyleBadge from '@/components/StyleBadge'

interface HeroProps {
  photo: AnimatedPhoto;
}

export default function Hero({ photo }: HeroProps) {
  const thumbnail = photo.metadata.thumbnail_image
  const style = photo.metadata.animation_style

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {thumbnail && (
        <div className="absolute inset-0">
          <img 
            src={`${thumbnail.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={photo.metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {style && (
            <div className="flex justify-center">
              <StyleBadge style={style} />
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {photo.metadata.title}
          </h1>
          
          {photo.metadata.description && (
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              {photo.metadata.description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/photos/${photo.slug}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Now
            </Link>
            
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 glass-effect text-white rounded-full font-semibold hover:bg-slate-700/50 transition-all"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}