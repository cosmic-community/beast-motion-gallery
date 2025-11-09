import { createBucketClient } from '@cosmicjs/sdk'
import { AnimatedPhoto, AnimationStyle, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all animated photos with animation style data
export async function getAnimatedPhotos(): Promise<AnimatedPhoto[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'animated-photos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AnimatedPhoto[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch animated photos')
  }
}

// Fetch single animated photo by slug
export async function getAnimatedPhoto(slug: string): Promise<AnimatedPhoto | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'animated-photos', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const photo = response.object as AnimatedPhoto
    
    if (!photo || !photo.metadata) {
      return null
    }
    
    return photo
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

// Fetch all animation styles
export async function getAnimationStyles(): Promise<AnimationStyle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'animation-styles' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as AnimationStyle[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch animation styles')
  }
}

// Fetch animated photos by animation style
export async function getPhotosByStyle(styleId: string): Promise<AnimatedPhoto[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'animated-photos',
        'metadata.animation_style': styleId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AnimatedPhoto[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch photos by style')
  }
}