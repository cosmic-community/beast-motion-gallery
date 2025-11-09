// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  thumbnail?: string;
  published_at?: string;
}

// Animation Style interface
export interface AnimationStyle extends CosmicObject {
  type: 'animation-styles';
  metadata: {
    style_name: string;
    description?: string;
  };
}

// Animated Photo interface
export interface AnimatedPhoto extends CosmicObject {
  type: 'animated-photos';
  metadata: {
    title: string;
    description?: string;
    video_file?: {
      url: string;
      imgix_url?: string;
    } | null;
    thumbnail_image?: {
      url: string;
      imgix_url: string;
    } | null;
    animation_style?: AnimationStyle;
    duration?: number;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
export function isAnimatedPhoto(obj: CosmicObject): obj is AnimatedPhoto {
  return obj.type === 'animated-photos';
}

export function isAnimationStyle(obj: CosmicObject): obj is AnimationStyle {
  return obj.type === 'animation-styles';
}