# Personal Website

A modern, minimalist portfolio website showcasing photography, films, and writing. Built with Astro for optimal performance and simplicity.

🌐 **Live Site:** [emaccumber.github.io/website](https://emaccumber.github.io/website/)

## ✨ Features

### Content Types
- **Photography Portfolios** - Organized albums with individual photo viewing and navigation
- **Film Showcase** - Video thumbnails with hover previews and embedded Vimeo players
- **Writing & Blog Posts** - MDX-powered articles with data visualization support
- **About Page** - Clean, minimal personal information

### User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Automatic system preference detection with manual toggle
- **Fast Performance** - Static site generation with optimized assets
- **Clean Navigation** - Intuitive menu with smooth transitions

### Technical Features
- **Content Collections** - Type-safe content management with Astro
- **Image Optimization** - Responsive images with Astro's built-in optimization
- **CDN Integration** - Backblaze B2 cloud storage for media assets
- **Interactive Charts** - Vega-Lite/Altair data visualizations in blog posts
- **SEO Optimized** - Proper meta tags, structured data, and performance

## 🛠 Technology Stack

### Core Framework
- **[Astro](https://astro.build/)** - Static site generator chosen for:
  - Exceptional performance with minimal JavaScript
  - Component-based architecture with multiple framework support
  - Built-in optimizations for images, CSS, and JavaScript
  - Excellent developer experience

### Integrations
- **[React](https://react.dev/)** - For interactive components (charts, video players)
- **[MDX](https://mdxjs.com/)** - Enhanced markdown with component support
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience

### Styling & Design
- **CSS** - Custom responsive styles following mobile-first principles
- **Modern Typography** - System font stack for optimal readability
- **Grid Layouts** - CSS Grid for responsive photo galleries and content organization

### Content & Media
- **Astro Content Collections** - Structured, type-safe content management
- **Backblaze B2** - Cloud storage for photos and videos
- **Vega-Lite** - Interactive data visualization library

## 🎯 Design Philosophy

This site prioritizes **simplicity and performance** over complexity. Key principles:

- **Content First** - Clean typography and generous whitespace let the work speak
- **Fast Loading** - Static generation ensures instant page loads
- **Accessible** - Semantic HTML, proper contrast ratios, and keyboard navigation
- **Sustainable** - Minimal JavaScript footprint and efficient asset delivery

## 🤖 Built with AI Assistance

This website was collaboratively built by **Ethan MacCumber** and **Claude (Anthropic's AI assistant)** using Claude Code. The development process involved:

### Human + AI Collaboration
- **Strategic Planning** - Ethan defined requirements and design vision
- **Technical Implementation** - Claude handled coding, architecture, and optimization
- **Iterative Refinement** - Back-and-forth feedback to achieve the desired aesthetic
- **Problem Solving** - Joint debugging of deployment and routing issues

### AI-Generated Components
- Complete Astro site architecture and configuration
- Responsive layouts and component library
- Content collection schemas and data management
- GitHub Actions deployment workflow
- Performance optimizations and SEO enhancements

This collaboration demonstrates how AI can accelerate development while maintaining human creative control and decision-making.

## 🚀 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── AltairChart.tsx     # Data visualization component
│   ├── Header.astro        # Site navigation
│   ├── PhotoViewer.astro   # Individual photo display
│   └── VimeoPlayer.tsx     # Video player component
├── content/             # Content collections
│   ├── photos/             # Photo album definitions
│   ├── films/              # Film and video metadata
│   └── posts/              # Blog posts and writing
├── layouts/             # Page templates
│   └── MainLayout.astro    # Base layout with header/navigation
├── lib/                 # Utility functions
│   └── mediaUrl.ts         # CDN URL generation
└── pages/               # Route definitions
    ├── photographs/        # Photo galleries and albums
    ├── films/              # Film showcase pages
    ├── writing/            # Blog and writing section
    └── information.mdx     # About page
```

## 🧞 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to `main`. The workflow:

1. **Build** - Generates static files with Astro
2. **Deploy** - Publishes to GitHub Pages
3. **CDN** - Content delivered via GitHub's global CDN

## 📝 Content Management

### Adding New Photos
1. Upload images to Backblaze B2 bucket
2. Create/update album JSON in `src/content/photos/`
3. Deploy - changes appear automatically

### Writing New Posts
1. Create `.mdx` file in `src/content/posts/`
2. Include frontmatter with title, date, and excerpt
3. Use React components like `<AltairChart>` for interactive content

## 🎨 Design Credits

Visual design inspired by the previous Next.js version of the site, refined for improved typography, spacing, and user experience. The aesthetic emphasizes:

- **Minimal Interface** - Clean layouts that highlight content
- **Responsive Grids** - Flexible layouts that work on any device
- **Smooth Interactions** - Subtle hover effects and transitions
- **Dark Mode Support** - Comprehensive theming for all components

---

*This project showcases modern web development practices and the potential of human-AI collaboration in creative and technical work.*
