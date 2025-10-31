# Gen Engineering INC - Deployment Guide

## Pre-Deployment Checklist

### ✅ SEO Optimization Complete
- [x] robots.txt configured in `/public/robots.txt`
- [x] sitemap.xml configured in `/public/sitemap.xml`
- [x] Meta tags added to all pages (title, description, keywords)
- [x] OpenGraph tags for social media sharing
- [x] Twitter Card metadata
- [x] Structured Data (JSON-LD) for Google Rich Results
- [x] Canonical URLs configured
- [x] Mobile-responsive design verified

### ✅ Performance Optimization
- [x] Image optimization enabled (AVIF, WebP)
- [x] Compression enabled
- [x] Security headers configured
- [x] Next.js production optimizations

### ✅ Functionality
- [x] All navigation links working
- [x] Footer links redirecting correctly
- [x] Contact form functional
- [x] Responsive on all devices (mobile, tablet, desktop)
- [x] All pages load without errors

## Environment Variables

Before deploying, ensure you have the following environment variables set:

```env
# Production URL (Update with your actual domain)
NEXT_PUBLIC_SITE_URL=https://www.genengg.com

# Contact Form (if using email service)
# NEXT_PUBLIC_EMAIL_SERVICE_KEY=your_key_here
```

## Deployment Steps

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Update Domain Settings in Vercel Dashboard:
   - Add your custom domain: `www.genengg.com`
   - Configure DNS records as instructed by Vercel

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 3: Self-Hosted (Docker)

1. Build the application:
```bash
npm run build
```

2. Create Dockerfile (if not exists):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

3. Build and run:
```bash
docker build -t genengg .
docker run -p 3000:3000 genengg
```

## Post-Deployment Tasks

### 1. Update Sitemap URLs
Update the URLs in `/public/sitemap.xml` with your actual domain:
```xml
<loc>https://www.genengg.com/</loc>
```

### 2. Update robots.txt
Update the sitemap URL in `/public/robots.txt`:
```
Sitemap: https://www.genengg.com/sitemap.xml
```

### 3. Update Structured Data
Update the URLs in `/src/components/StructuredData.tsx`:
```typescript
"url": "https://www.genengg.com"
```

### 4. Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property with your domain
3. Verify ownership
4. Submit sitemap: `https://www.genengg.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

### 5. Analytics (Optional)

Add Google Analytics 4:
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 6. Performance Testing

Test your site performance:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

Target Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 7. SSL Certificate

Ensure HTTPS is enabled:
- Vercel/Netlify: Automatic
- Self-hosted: Use Let's Encrypt

### 8. DNS Configuration

Point your domain to hosting:
```
A Record: @ -> Your-Server-IP
CNAME: www -> your-app.vercel.app
```

## Monitoring

### Health Checks
Monitor these endpoints:
- Homepage: `https://www.genengg.com/`
- Sitemap: `https://www.genengg.com/sitemap.xml`
- Robots: `https://www.genengg.com/robots.txt`

### Uptime Monitoring
Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

## Troubleshooting

### Issue: 404 on page routes
- Check `.next` folder is included in deployment
- Verify build completed successfully

### Issue: Images not loading
- Check remote patterns in `next.config.ts`
- Verify image URLs are accessible

### Issue: Slow initial load
- Enable compression in hosting platform
- Check CDN is configured
- Verify image optimization is working

## Support

For deployment issues, contact:
- Email: info@genengg.com
- Phone: +1 302-499-2050

## License

© 2025 Gen Engineering INC. All rights reserved.
