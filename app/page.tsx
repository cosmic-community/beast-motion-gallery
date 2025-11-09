import { getAnimatedPhotos, getAnimationStyles } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import PhotoGrid from '@/components/PhotoGrid'
import StyleFilter from '@/components/StyleFilter'

export const revalidate = 60

export default async function Home() {
  const [photos, styles] = await Promise.all([
    getAnimatedPhotos(),
    getAnimationStyles(),
  ])
  
  // Get featured photo (first one)
  const featuredPhoto = photos[0]

  return (
    <div className="min-h-screen">
      {featuredPhoto && <Hero photo={featuredPhoto} />}
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Animation Gallery
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-8">
            Browse our collection of animated photos featuring Beast Mode, Smooth Flow, and Dynamic Zoom effects
          </p>
          
          <StyleFilter styles={styles} />
        </div>
        
        <PhotoGrid photos={photos} />
      </div>
    </div>
  )
}