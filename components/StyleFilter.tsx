'use client'

import { AnimationStyle } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'

interface StyleFilterProps {
  styles: AnimationStyle[];
}

export default function StyleFilter({ styles }: StyleFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentStyle = searchParams.get('style')

  const handleFilterChange = (slug: string | null) => {
    if (slug) {
      router.push(`/?style=${slug}`)
    } else {
      router.push('/')
    }
  }

  const getStyleColor = (styleName: string) => {
    const name = styleName.toLowerCase()
    if (name.includes('beast')) return 'from-red-500 to-orange-500'
    if (name.includes('smooth')) return 'from-blue-500 to-cyan-500'
    if (name.includes('zoom')) return 'from-purple-500 to-pink-500'
    return 'from-primary to-secondary'
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={() => handleFilterChange(null)}
        className={`px-6 py-3 rounded-full font-semibold transition-all ${
          !currentStyle
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
            : 'glass-effect text-slate-300 hover:text-white'
        }`}
      >
        All Styles
      </button>
      
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => handleFilterChange(style.slug)}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            currentStyle === style.slug
              ? `bg-gradient-to-r ${getStyleColor(style.metadata.style_name)} text-white shadow-lg`
              : 'glass-effect text-slate-300 hover:text-white'
          }`}
        >
          {style.metadata.style_name}
        </button>
      ))}
    </div>
  )
}