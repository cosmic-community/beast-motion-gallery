// app/styles/[slug]/page.tsx
import { getAnimationStyles, getPhotosByStyle } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PhotoGrid from '@/components/PhotoGrid'
import Link from 'next/link'

export async function generateStaticParams() {
  const styles = await getAnimationStyles()
  
  return styles.map((style) => ({
    slug: style.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const styles = await getAnimationStyles()
  const style = styles.find(s => s.slug === slug)
  
  if (!style) {
    return {
      title: 'Style Not Found',
    }
  }
  
  return {
    title: `${style.metadata.style_name} - Beast Motion Gallery`,
    description: style.metadata.description || `View photos animated with ${style.metadata.style_name} effects`,
  }
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const styles = await getAnimationStyles()
  const style = styles.find(s => s.slug === slug)
  
  if (!style) {
    notFound()
  }
  
  const photos = await getPhotosByStyle(style.id)

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
        
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">{style.metadata.style_name}</h1>
          {style.metadata.description && (
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              {style.metadata.description}
            </p>
          )}
        </div>
        
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No photos found with this animation style yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}