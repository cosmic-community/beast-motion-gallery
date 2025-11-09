import { AnimatedPhoto } from '@/types'
import PhotoCard from '@/components/PhotoCard'

interface PhotoGridProps {
  photos: AnimatedPhoto[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400 text-lg">No photos available yet.</p>
      </div>
    )
  }

  return (
    <div id="gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  )
}