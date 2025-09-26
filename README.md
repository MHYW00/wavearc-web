# WaveArc - Premium Corporate Website

Ultra-minimal Apple-style corporate website. Siyah arka plan, beyaz yazılar, premium tasarım.

## ✨ Özellikler

- **Apple Tarzı Tasarım**: Siyah arka plan, ultra-minimal, premium estetik
- **Statik Website**: VPS gerektirmez, sadece hosting yeterli
- **System Fonts**: Apple'ın system fontları (-apple-system, SF Pro)
- **Smooth Animations**: Framer Motion ile akıcı geçişler
- **İki Dil**: Türkçe/İngilizce desteği
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Fast Loading**: Optimize edilmiş bundle'lar (~400KB)

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **TailwindCSS** for styling with custom design tokens
- **Framer Motion** for UI animations and page transitions
- **GSAP + ScrollTrigger** for advanced scroll-driven animations
- **React Three Fiber** for 3D elements and interactions
- **react-i18next** for internationalization
- **React Router** for client-side routing

### Development Tools
- **TypeScript** for type safety
- **ESLint & Prettier** for code quality
- **PostCSS & Autoprefixer** for CSS processing

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

### 3D Scene Customization
Modify `src/three/ProductScene.tsx` to:
- Change 3D models
- Adjust lighting and materials
- Add more interactive elements

## 🎯 Performance Optimization

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Use `next/image` equivalent or Vite plugins
- **Bundle Analysis**: Run `npm run build` to see chunk sizes
- **CDN**: Deploy static assets to CDN for better performance

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Color contrast compliance
- Screen reader friendly
- Focus management

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to WaveArc.

---

Built with ❤️ by the WaveArc Team