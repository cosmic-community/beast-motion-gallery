// app/photos/[slug]/page.tsx
import { getAnimatedPhoto, getAnimatedPhotos } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import VideoPlayer from '@/components/VideoPlayer'
import StyleBadge from '@/components/StyleBadge'
import Link from 'next/link'

export async function generateStaticParams() {
  const photos = await getAnimatedPhotos()
  
  return photos.map((photo) => ({
    slug: photo.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const photo = await getAnimatedPhoto(slug)
  
  if (!photo) {
    return {
      title: 'Photo Not Found',
    }
  }
  
  return {
    title: `${photo.metadata.title} - Beast Motion Gallery`,
    description: photo.metadata.description || `Watch ${photo.metadata.title} animated with stunning effects`,
  }
}

export default async function PhotoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const photo = await getAnimatedPhoto(slug)
  
  if (!photo) {
    notFound()
  }
  
  const thumbnail = photo.metadata.thumbnail_image
  const style = photo.metadata.animation_style

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{photo.metadata.title}</h1>
              {photo.metadata.description && (
                <p className="text-slate-400 text-lg leading-relaxed">
                  {photo.metadata.description}
                </p>
              )}
            </div>
            
            {style && (
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-sm font-semibold text-slate-400 mb-3">Animation Style</h3>
                <StyleBadge style={style} />
                {style.metadata.description && (
                  <p className="text-slate-300 mt-4">
                    {style.metadata.description}
                  </p>
                )}
              </div>
            )}
            
            {photo.metadata.duration && (
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-sm font-semibold text-slate-400 mb-2">Duration</h3>
                <p className="text-2xl font-bold text-primary">
                  {photo.metadata.duration} seconds
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:sticky lg:top-24">
            {thumbnail ? (
              <VideoPlayer 
                thumbnail={thumbnail}
                title={photo.metadata.title}
              />
            ) : (
              <div className="glass-effect rounded-xl p-12 text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-400">Video preview coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}