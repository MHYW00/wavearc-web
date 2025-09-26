# WaveArc - Statik Deployment Rehberi

Bu proje tamamen statik bir website'dir ve VPS gerektirmez. `dist/` klasöründeki dosyalar herhangi bir statik hosting servisine yüklenebilir.

## 🚀 Hızlı Deployment

### 1. Netlify (Önerilen - En Kolay)

1. [Netlify.com](https://netlify.com)'a git
2. "Sites" > "Add new site" > "Deploy manually"
3. `dist` klasörünü sürükleyip bırak
4. Hemen yayında! Ücretsiz SSL sertifikası dahil

### 2. Vercel

1. [Vercel.com](https://vercel.com)'a git
2. "Add New" > "Project"
3. GitHub repo'yu bağla veya `dist` klasörünü yükle
4. Otomatik deploy

### 3. GitHub Pages

1. GitHub'a `dist` klasörünü yükle
2. Repository Settings > Pages
3. Source: Deploy from a branch > `main` seç
4. `username.github.io/repository-name` adresinde yayında

### 4. Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com)'a git
2. "Create a project"
3. `dist` klasörünü yükle
4. Ücretsiz CDN ve optimizasyon dahil

## 📁 Dosya Yapısı

```
dist/
├── index.html          # Ana sayfa
├── assets/
│   ├── *.css           # Stillər
│   ├── *.js            # JavaScript bundle'lar
│   └── vite.svg        # Favikon
```

## ⚡ Özellikler

✅ **Tamamen Statik**: VPS gerektirmez
✅ **Apple Tarzı Tasarım**: Siyah arka plan, minimal
✅ **Responsive**: Mobil uyumlu
✅ **Fast Loading**: Optimize edilmiş bundle'lar
✅ **SEO Ready**: Meta tags hazır
✅ **İki Dil**: Türkçe/İngilizce
✅ **Modern Animasyonlar**: Framer Motion
✅ **3D Elements**: Three.js (opsiyonel)

## 🔧 Local Test

```bash
# Development server
npm run dev         # http://localhost:5173

# Production build
npm run build       # dist/ klasörüne build eder

# Production preview
npm run preview     # http://localhost:4173
```

## 📊 Bundle Size

- **Total Size**: ~400KB (gzipped)
- **Initial Load**: ~200KB
- **Very Fast**: Apple seviyesi performans

## 🌐 Domain Bağlama

Hosting servisine yükledikten sonra:
1. Domain ayarlarından CNAME ekle
2. Hosting servisinde custom domain ayarla
3. SSL otomatik aktifleşir

## 💡 Notlar

- **VPS Gerektirmez**: Sadece statik hosting
- **Ücretsiz Hostingler**: Netlify, Vercel, GitHub Pages
- **CDN Dahil**: Tüm servislerde otomatik
- **HTTPS**: Otomatik SSL sertifikası
- **Global**: Dünya çapında hızlı erişim

Herhangi bir sorun için deployment sonrası domain'i paylaş, kontrol edelim! 🚀