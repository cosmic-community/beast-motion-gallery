import Link from 'next/link'
import { AnimationStyle } from '@/types'

interface StyleBadgeProps {
  style: AnimationStyle;
  showLink?: boolean;
}

export default function StyleBadge({ style, showLink = true }: StyleBadgeProps) {
  const getStyleColor = (styleName: string) => {
    const name = styleName.toLowerCase()
    if (name.includes('beast')) return 'from-red-500 to-orange-500'
    if (name.includes('smooth')) return 'from-blue-500 to-cyan-500'
    if (name.includes('zoom')) return 'from-purple-500 to-pink-500'
    return 'from-primary to-secondary'
  }

  const badge = (
    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getStyleColor(style.metadata.style_name)} rounded-full text-white text-sm font-semibold shadow-lg`}>
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      {style.metadata.style_name}
    </div>
  )

  if (showLink) {
    return (
      <Link href={`/styles/${style.slug}`} className="hover:scale-105 transition-transform inline-block">
        {badge}
      </Link>
    )
  }

  return badge
}