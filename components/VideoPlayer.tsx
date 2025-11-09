'use client'

import { useState } from 'react'

interface VideoPlayerProps {
  thumbnail: {
    url: string;
    imgix_url: string;
  };
  title: string;
}

export default function VideoPlayer({ thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden glass-effect">
      <img 
        src={`${thumbnail.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
          >
            <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
      
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark/90">
          <p className="text-slate-400 text-lg">Video playback coming soon</p>
        </div>
      )}
    </div>
  )
}