# WaveArc - Web Hosting Upload Rehberi

## 🚀 Hazır Dosyalar

Production build başarıyla tamamlandı! `dist/` klasöründe web hosting'e yüklenecek dosyalar hazır.

## 📁 Upload Edilecek Dosyalar

```
dist/
├── index.html              # Ana sayfa
├── assets/
│   ├── index-ouwA2Z8N.css  # Stillər (24KB)
│   ├── index-BCP3QYNg.js   # Ana JavaScript (65KB)
│   ├── vendor-Gm9i_4Ku.js  # Vendor libs (141KB)
│   ├── animation-DxA2Nxkl.js # Animasyonlar (115KB)
│   ├── i18n-DBd2O2mF.js    # Dil dosyaları (53KB)
│   ├── three-CA7DsDud.js   # 3D (1KB)
│   └── vite.svg           # Favicon
```

**Toplam Boyut**: ~400KB (gzipped ~125KB)

## 🔧 cPanel ile Upload

### Adım 1: cPanel'e Giriş
1. Hosting sağlayıcının verdiği cPanel URL'sine git
2. Kullanıcı adı ve şifre ile giriş yap

### Adım 2: File Manager
1. cPanel'de "File Manager" butonuna tıkla
2. "public_html" klasörüne git (domain root)

### Adım 3: Upload
1. `dist/` klasöründeki **TÜM** dosyaları seç
2. `public_html` klasörüne yükle
3. `index.html` dosyası root'ta olmalı

### Klasör Yapısı (public_html):
```
public_html/
├── index.html
├── assets/
│   ├── index-ouwA2Z8N.css
│   ├── index-BCP3QYNg.js
│   ├── vendor-Gm9i_4Ku.js
│   ├── animation-DxA2Nxkl.js
│   ├── i18n-DBd2O2mF.js
│   ├── three-CA7DsDud.js
│   └── vite.svg
```

## 📧 FTP ile Upload (Alternatif)

### FTP Bilgileri (hosting sağlayıcından al):
- **Host**: ftp.domain.com
- **Username**: kullanıcı_adı
- **Password**: şifre
- **Port**: 21

### FTP Client (FileZilla önerisi):
1. FileZilla indir ve kur
2. FTP bilgilerini gir ve bağlan
3. `public_html` klasörüne git
4. `dist/` içindeki tüm dosyaları yükle

## ✅ Test Etme

Upload tamamlandıktan sonra:
1. **domain.com** adresini tarayıcıda aç
2. Site açılmalı ve çalışmalı
3. Mobile'da test et
4. Tüm sayfalar çalışıyor mu kontrol et:
   - Ana sayfa (/)
   - Hakkımızda (/about)
   - Diğer sayfalar

## 🔧 Sorun Giderme

### Site Açılmıyor:
- `index.html` dosyası `public_html` root'ında mı?
- Dosya izinleri 644 olarak ayarlandı mı?

### CSS/JS Yüklenmiyor:
- `assets/` klasörü doğru yüklenmiş mi?
- Dosya yolları doğru mu kontrol et

### 404 Hataları:
- Hosting single page app'leri destekliyor mu?
- `.htaccess` dosyası gerekebilir

## 📋 .htaccess (Gerekirse)

SPA routing için `public_html/.htaccess` oluştur:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# GZIP Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 🚀 Performance

Site çok hızlı:
- ⚡ ~400KB total size
- 🗜️ GZIP compression
- 📱 Mobile optimized
- 🎯 Apple-style premium design

Upload tamamlandığında domain'i paylaş, birlikte test edelim! 🎉