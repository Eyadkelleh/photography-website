# Visual Poetry Photography Website

A professional photography website built with Next.js 14+ featuring modern design, performance optimization, and comprehensive functionality for equestrian and portrait photography services.

## 🌟 Features

### ✅ Completed Features
- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations using Framer Motion
- **Homepage**: Hero section, services preview, portfolio preview, testimonials carousel, and booking process
- **About Page**: Personal story, timeline, awards, statistics, and philosophy
- **Services Page**: Comprehensive service listings, packages, add-ons, and service areas
- **Professional Layout**: Header with navigation, footer with links and contact info
- **UI Components**: Reusable Button, Input, Textarea, Select, Card, and Modal components
- **SEO Optimized**: Proper metadata, OpenGraph, and Twitter cards
- **Performance**: Optimized images, fonts, and build process

### 🚧 In Progress / Planned Features
- **Portfolio Page**: Filterable gallery with lightbox functionality
- **Testimonials Page**: Full testimonials listing with filtering
- **Contact Page**: Multi-step contact form with validation
- **Blog System**: Dynamic blog with CMS integration
- **API Routes**: Contact form and newsletter endpoints
- **Analytics**: Vercel Analytics and Google Analytics 4 integration
- **Deployment**: Vercel deployment configuration

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email**: Nodemailer integration ready
- **Analytics**: Vercel Analytics integration ready

## 📁 Project Structure

```
src/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About page
│   │   ├── services/page.tsx     # Services page
│   │   ├── portfolio/page.tsx    # Portfolio gallery (planned)
│   │   ├── testimonials/page.tsx # Testimonials (planned)
│   │   ├── contact/page.tsx      # Contact page (planned)
│   │   └── blog/                 # Blog system (planned)
│   ├── api/                      # API routes (planned)
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── layout/                   # Layout components
│   ├── sections/                 # Page sections
│   └── forms/                    # Form components (planned)
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── validations.ts            # Form validations
│   └── constants.ts              # App constants
└── types/
    └── index.ts                  # TypeScript types
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Warm White**: `#FEFCF8` - Primary background
- **Cream**: `#F8F5F0` - Secondary background
- **Soft Beige**: `#E8E2D8` - Tertiary background
- **Warm Gray**: `#8B7D6B` - Text secondary
- **Deep Charcoal**: `#2C2420` - Text primary
- **Gold Accent**: `#D4AF37` - Primary accent
- **Soft Rose**: `#E6C2B8` - Secondary accent
- **Sage Green**: `#A8B5A0` - Tertiary accent
- **Warm Brown**: `#8B6B47` - Quaternary accent

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Lato (body text)

## 📝 Content Management

Most content is managed through constants in `src/lib/constants.ts`:
- **Site Configuration**: Update company info, contact details
- **Navigation**: Modify menu items  
- **Services**: Add/edit photography services and pricing
- **Packages**: Update photography packages and features
- **Awards**: Add professional recognition and awards

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables**:
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
3. **Deploy** - Vercel will automatically build and deploy

---

**Built with ❤️ for Visual Poetry Photography**
