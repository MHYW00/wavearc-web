# WaveArc Website

Modern corporate website built with React, TypeScript, and premium design principles.

## Features

- **Minimal Design**: Clean, professional Apple-inspired aesthetics
- **Multilingual Support**: Turkish and English language options
- **Scroll Animations**: Velocity-responsive animations with Framer Motion
- **Mobile Responsive**: Optimized for all device sizes
- **Contact Integration**: Formspree-powered contact forms
- **Apple Store Ready**: Compliant support page for app submissions
- **Fast Performance**: Optimized build with code splitting

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing

### Features
- **Multilingual**: Context-based language switching
- **Form Handling**: Formspree integration for contact forms
- **Custom Hooks**: Scroll velocity detection and geolocation
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Button, etc.)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── common/          # Common components (Loading, etc.)
├── layouts/             # Layout components
├── pages/               # Page components
├── lib/                 # Utilities and configurations
├── three/               # 3D scenes and components
├── styles/              # Global styles and Tailwind config
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd wavearc-website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow the prompts to configure your project

### Netlify

1. Build the project
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 🎨 Customization

### Design Tokens
Edit `tailwind.config.js` to customize:
- Colors (brand colors, gradients)
- Typography (font families, sizes)
- Spacing and breakpoints
- Animation timings

### Internationalization
Add new languages in `src/lib/i18n.ts`:

```typescript
const resources = {
  en: { translation: { /* English strings */ } },
  tr: { translation: { /* Turkish strings */ } },
  // Add more languages here
}
```

## Pages

- **Home**: Hero section with typewriter animation and company overview
- **Studio**: Creative development services
- **Labs**: Research and innovation projects
- **Tech**: Technical infrastructure solutions
- **About**: Company information and team
- **Contact**: Contact form with Formspree integration
- **Support**: Apple Store compliant support page
- **Privacy**: Privacy policy and data handling

## Performance

- Fast loading with optimized bundle sizes
- Code splitting for efficient loading
- Responsive images and assets
- Smooth 60fps animations
- Mobile-first responsive design

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- ES6+ support required

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to WaveArc.