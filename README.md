# Personal Portfolio Website

A modern, responsive personal portfolio website built with **Astro**, **Svelte**, and **Tailwind CSS**. This website showcases professional experience, projects, and blog posts with a clean, minimalist design.

## 🌟 Features

- **Modern Tech Stack**: Built with Astro 5.x, Svelte 5.x, and Tailwind CSS 4.x
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Content Management**: MDX support for blog posts and project descriptions
- **Performance Optimized**: Static site generation with optimized assets
- **Interactive Elements**: Dynamic navigation bars and smooth transitions
- **SEO Optimized**: Built-in SEO components and meta tags
- **TypeScript Support**: Full TypeScript integration for type safety

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **UI Framework**: [Svelte](https://svelte.dev/) - Component framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX support
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## 📁 Project Structure

```
simple-personal-web/
├── public/                          # Static assets
│   ├── assets/                      # Images, logos, and media files
│   │   ├── logo.svg                # Site logo
│   │   ├── me.webp                 # Profile image
│   │   ├── posts/                  # Blog post images
│   │   └── projects/               # Project cover images
│   ├── favicon.svg                 # Site favicon
│   └── robots.txt                  # SEO robots file
├── src/
│   ├── common/                     # Shared data and utilities
│   │   └── data/                   # Data files
│   │       ├── sites.ts            # Site configuration
│   │       └── work-experiences.ts # Work experience data
│   ├── components/                 # Reusable UI components
│   │   ├── card/                   # Card components
│   │   ├── section/                # Section components
│   │   ├── selection/              # Selection components
│   │   └── SEO.astro              # SEO component
│   ├── content/                    # Content collections
│   │   ├── posts/                  # Blog posts (MDX)
│   │   ├── projects/               # Projects (MDX)
│   │   └── config.ts              # Content configuration
│   ├── domain/                     # Type definitions
│   ├── layouts/                    # Page layouts
│   ├── pages/                      # Route pages
│   └── styles/                     # Global styles
├── astro.config.mjs               # Astro configuration
├── package.json                    # Dependencies and scripts
├── svelte.config.js               # Svelte configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd simple-personal-web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm astro` | Run Astro CLI commands |

## 🎨 Customization

### Adding New Projects

1. Create a new MDX file in `src/content/projects/`
2. Use the following frontmatter structure:
   ```mdx
   ---
   title: "Project Name"
   description: "Project description"
   date: 2024-01-01
   featured: true
   draft: false
   cover: "cover.webp"
   ---
   ```

3. Add cover image to `public/assets/projects/[project-name]/`

### Adding New Blog Posts

1. Create a new MDX file in `src/content/posts/`
2. Use the following frontmatter structure:
   ```mdx
   ---
   title: "Post Title"
   description: "Post description"
   date: 2024-01-01
   draft: false
   ---
   ```

3. Add images to `public/assets/posts/[post-name]/`

### Modifying Work Experience

Edit `src/common/data/work-experiences.ts` to update your work history:

```typescript
export const workExperiences: WorkExperience[] = [
  {
    company: "Company Name",
    position: "Position Title",
    startDate: "2023-01",
    endDate: "2024-01",
    description: "Job description",
    technologies: ["React", "Node.js", "TypeScript"]
  }
];
```

## 🎯 Key Components

### Layout System
- **Layout.astro**: Main layout with navigation bars and global scripts
- **PostLayout.astro**: Layout for blog posts
- **ProjectLayout.astro**: Layout for project pages

### Content Components
- **PostCard.svelte**: Blog post preview cards
- **ProjectCard.astro**: Project showcase cards
- **WorkExperienceCard.astro**: Work experience display cards

### Section Components
- **PostSection.astro**: Blog posts listing section
- **ProjectSection.astro**: Projects showcase section
- **WorkExperienceSection.astro**: Work experience section

## 🌐 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Deploy!

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

## 🔧 Configuration

### Astro Configuration (`astro.config.mjs`)
- Site URL configuration
- MDX integration
- Svelte integration
- Tailwind CSS integration
- Build optimization settings

### Tailwind Configuration
The project uses Tailwind CSS 4.x with the new Vite plugin for optimal performance.

### Content Configuration (`src/content/config.ts`)
- Content collections setup
- Schema validation for posts and projects

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout with optimized spacing
- **Tablet**: Two-column layout for better content organization
- **Desktop**: Full-width layout with maximum content width

## 🚀 Performance Features

- **Static Generation**: All pages are pre-built for optimal performance
- **Image Optimization**: WebP format for modern browsers
- **Code Splitting**: Automatic CSS and JS code splitting
- **Lazy Loading**: Images and components load as needed
- **Minification**: Production builds are fully optimized

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag management
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling configuration
- **Open Graph**: Social media sharing optimization

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `pnpm install`
2. **Type Errors**: Check TypeScript configuration and type definitions
3. **Styling Issues**: Verify Tailwind CSS classes and custom CSS
4. **Content Not Loading**: Check content collection configuration and file paths

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- UI components powered by [Svelte](https://svelte.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Iconify](https://iconify.design/)

---