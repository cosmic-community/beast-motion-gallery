import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Beast Motion
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Gallery
            </Link>
            <Link 
              href="/#styles" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Styles
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}