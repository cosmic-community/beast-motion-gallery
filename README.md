# 🎬 Beast Motion Gallery

![Beast Motion Gallery](https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=300&fit=crop&auto=format)

A stunning showcase platform for animated photo content featuring dynamic video presentations with multiple animation styles including Beast Mode, Smooth Flow, and Dynamic Zoom effects.

## ✨ Features

- 🎥 **Dynamic Video Gallery** - Browse animated photos with beautiful thumbnail previews
- 🎨 **Animation Style Filtering** - Filter content by Beast Mode, Smooth Flow, or Dynamic Zoom
- 📱 **Fully Responsive** - Optimized viewing experience across all devices
- 🎬 **Video Playback** - Full-screen video player with style information
- 🌙 **Dark Theme UI** - Modern glassmorphic design with smooth animations
- ⚡ **High Performance** - Built with Next.js 16 and optimized for speed
- 🔍 **SEO Optimized** - Proper meta tags and structured data

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69111a31fb7423bbdde4f858&clone_repository=69111be8fb7423bbdde4f87e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Video of my photo moving with beast"

### Code Generation Prompt

> "Based on the content model I created for "Video of my photo moving with beast", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Cosmic
- **Package Manager:** Bun
- **Deployment:** Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your system
- A Cosmic account with bucket credentials

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd beast-motion-gallery
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Animated Photos

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all animated photos with animation style data
const { objects: photos } = await cosmic.objects
  .find({ type: 'animated-photos' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get photos by animation style
const { objects: beastModePhotos } = await cosmic.objects
  .find({ 
    type: 'animated-photos',
    'metadata.animation_style': 'style-id-here'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Animation Styles

```typescript
// Get all animation styles
const { objects: styles } = await cosmic.objects
  .find({ type: 'animation-styles' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic object types:

### Animated Photos
- **Title** (text, required) - Name of the animated photo
- **Description** (textarea) - Description of the content
- **Video File** (file, required) - The animated video file
- **Thumbnail** (file, image) - Preview image for the gallery
- **Animation Style** (object relationship) - Connected animation style
- **Duration** (number) - Length of the video in seconds

### Animation Styles
- **Style Name** (text, required) - Name of the animation style
- **Description** (textarea) - Description of the animation effect

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

The application is optimized for Vercel's edge network and will automatically deploy on every push to your main branch.

<!-- README_END -->