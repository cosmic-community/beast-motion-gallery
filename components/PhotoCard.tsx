import Link from 'next/link'
import { AnimatedPhoto } from '@/types'
import StyleBadge from '@/components/StyleBadge'

interface PhotoCardProps {
  photo: AnimatedPhoto;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const thumbnail = photo.metadata.thumbnail_image
  const style = photo.metadata.animation_style

  return (
    <Link href={`/photos/${photo.slug}`} className="group">
      <div className="glass-effect rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
        <div className="relative aspect-video overflow-hidden">
          {thumbnail ? (
            <>
              <img 
                src={`${thumbnail.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                alt={photo.metadata.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {photo.metadata.duration && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-dark/90 backdrop-blur-sm rounded-full text-sm font-medium">
              {photo.metadata.duration}s
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {photo.metadata.title}
          </h3>
          
          {photo.metadata.description && (
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {photo.metadata.description}
            </p>
          )}
          
          {style && (
            <StyleBadge style={style} />
          )}
        </div>
      </div>
    </Link>
  )
}