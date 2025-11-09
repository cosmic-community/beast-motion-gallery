import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}