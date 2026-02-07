# 🚀 Deployment Guide - Valentine Week App

This guide covers deploying your Valentine Week application to production using Cloudflare Pages.

## 📋 Prerequisites

Before deploying, ensure you have:

- [x] Customized all content (photos, messages, dates)
- [x] Tested locally and verified all features work
- [x] A Cloudflare account (free tier works!)
- [x] Git repository initialized
- [x] All changes committed to git

## 🌐 Option 1: Deploy to Cloudflare Pages (Recommended)

### Step 1: Set Up Cloudflare Authentication

```bash
# Configure Cloudflare API key
# This command sets up your authentication
```

**If this fails**: 
- Go to your Cloudflare dashboard
- Navigate to **My Profile** → **API Tokens**
- Create an API token with "Cloudflare Pages" permissions
- Save the token for later use

### Step 2: Verify Build Works Locally

```bash
cd /home/user/webapp

# Clean any previous builds
rm -rf dist

# Build the project
npm run build

# Verify build output
ls -la dist/
# Should see: _worker.js, _routes.json, and other files
```

### Step 3: Create Cloudflare Pages Project

```bash
# Login to Cloudflare (if not already logged in)
npx wrangler login

# Create the Pages project
npx wrangler pages project create valentine-week \
  --production-branch main \
  --compatibility-date 2026-02-07
```

**Expected output:**
```
✨ Successfully created the 'valentine-week' project.
```

### Step 4: Deploy to Production

```bash
# Deploy the dist folder
npx wrangler pages deploy dist --project-name valentine-week

# You'll receive URLs like:
# Production: https://valentine-week.pages.dev
# Branch: https://main.valentine-week.pages.dev
```

### Step 5: Set Up Custom Domain (Optional)

If you own a domain:

```bash
# Add custom domain
npx wrangler pages domain add yourdomain.com --project-name valentine-week

# Follow DNS setup instructions provided by Cloudflare
```

**DNS Setup:**
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add a CNAME record:
   - Name: `@` (or `www`)
   - Value: `valentine-week.pages.dev`
3. Wait for DNS propagation (5-60 minutes)

### Step 6: Test Your Deployment

```bash
# Test the production URL
curl -I https://valentine-week.pages.dev

# Should return: HTTP/2 200
```

Open in browser:
- Production: `https://valentine-week.pages.dev`
- Test all 7 days
- Verify photos load
- Test countdown timers
- Check responsive design on mobile

## 🔄 Option 2: Deploy via GitHub (Automated)

### Step 1: Push to GitHub

```bash
cd /home/user/webapp

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/valentine-week.git

# Push code
git push -u origin main
```

### Step 2: Connect Cloudflare to GitHub

1. **Go to Cloudflare Dashboard**
   - Navigate to **Workers & Pages**
   - Click **Create Application**
   - Choose **Pages** → **Connect to Git**

2. **Authorize GitHub**
   - Select your repository: `valentine-week`
   - Click **Begin setup**

3. **Configure Build Settings**
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Deploy**
   - Click **Save and Deploy**
   - Wait for build to complete (2-3 minutes)
   - Get your URL: `https://valentine-week.pages.dev`

### Step 3: Enable Automatic Deployments

✅ **Already enabled!** Every push to `main` branch triggers automatic deployment.

```bash
# Make changes
git add .
git commit -m "Update photos and messages"
git push origin main

# Cloudflare will automatically rebuild and deploy
```

## 🎯 Option 3: Manual Static Hosting

If you prefer simple static hosting (Netlify, Vercel, etc.):

### Build Static Files

```bash
cd /home/user/webapp
npm run build

# Your files are in: dist/
# Upload these files to any static host
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔐 Environment Variables (If Needed)

If you add backend features later (API keys, etc.):

### Development (.dev.vars)

Create `/home/user/webapp/.dev.vars`:
```
API_KEY=your_dev_key_here
SECRET_TOKEN=your_secret_token
```

### Production (Cloudflare)

```bash
# Add secrets to Cloudflare
npx wrangler pages secret put API_KEY --project-name valentine-week
# Enter your API key when prompted

# List secrets
npx wrangler pages secret list --project-name valentine-week
```

## 📱 Testing Your Deployment

### Checklist

After deployment, test these features:

- [ ] **Homepage loads** - Check for errors in console (F12)
- [ ] **Navigation works** - All day buttons functional
- [ ] **Locked days show countdown** - Verify timer displays correctly
- [ ] **Unlocked days accessible** - Test current date's content
- [ ] **Photos display** - All images load properly
- [ ] **Music player appears** - Play button visible on Day 1
- [ ] **Animations smooth** - Floating hearts, confetti, etc.
- [ ] **Responsive design** - Test on mobile, tablet, desktop
- [ ] **All interactions work** - Buttons, clicks, form inputs
- [ ] **Final proposal** - Test Day 7 complete flow

### Testing Tools

```bash
# Test from command line
curl -I https://your-deployment-url.com

# Check specific endpoints
curl https://your-deployment-url.com/static/app.js
curl https://your-deployment-url.com/static/styles.css
```

### Browser Testing

Open in multiple browsers:
- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari (Mac/iOS)
- ✅ Mobile browsers

## 🐛 Troubleshooting Deployment Issues

### Build Fails

**Error**: `Cannot find module 'hono'`
```bash
# Solution: Install dependencies
npm install
npm run build
```

**Error**: `EACCES: permission denied`
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Pages

**Issue**: Routes return 404

**Solution**: Check `_routes.json` in dist folder:
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/static/*"]
}
```

### Photos Not Loading

**Issue**: 404 on image URLs

**Check**:
1. Photos are in `/public/static/photos/`
2. URLs use `/static/photos/image.jpg` (not `public/`)
3. File names match exactly (case-sensitive)

### Music Not Playing

**Issue**: Audio fails to load

**Solutions**:
1. Verify file is in `/public/static/music/`
2. Check format: MP3 recommended
3. Test URL directly: `https://your-url.com/static/music/song.mp3`
4. Check autoplay policies (user interaction required)

### Countdown Not Working

**Issue**: Timer doesn't count down

**Check**:
1. Date format correct: `YYYY-MM-DDTHH:MM:SS`
2. Browser time zone settings
3. JavaScript console for errors
4. Date is in the future

## 🔄 Update Deployment

### Update Content

```bash
# 1. Make changes to your files
# 2. Rebuild
npm run build

# 3. Test locally
npm run preview

# 4. Deploy
npx wrangler pages deploy dist --project-name valentine-week
```

### Update via Git (if using GitHub integration)

```bash
# Make changes
git add .
git commit -m "Update Valentine messages"
git push origin main

# Cloudflare auto-deploys in 2-3 minutes
```

## 📊 Monitor Your Deployment

### Cloudflare Analytics

1. Go to **Cloudflare Dashboard**
2. Select your **valentine-week** project
3. View **Analytics** tab:
   - Page views
   - Unique visitors
   - Countries
   - Performance metrics

### View Deployment Logs

```bash
# Check recent deployments
npx wrangler pages deployments list --project-name valentine-week

# View specific deployment
npx wrangler pages deployment tail
```

## 🎉 Post-Deployment Checklist

- [ ] Test production URL on all devices
- [ ] Verify all 7 days work correctly
- [ ] Test countdown timers
- [ ] Check photo gallery loads
- [ ] Verify music player (if added)
- [ ] Test all interactive elements
- [ ] Confirm responsive design
- [ ] Check browser console for errors
- [ ] Test social sharing (if added)
- [ ] Bookmark production URL
- [ ] Share URL with your Valentine 💕

## 🚀 Quick Deploy Commands Reference

```bash
# Full deployment workflow
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name valentine-week

# Update after changes
git add . && git commit -m "Update content"
npm run build
npx wrangler pages deploy dist --project-name valentine-week

# Check deployment status
npx wrangler pages deployments list --project-name valentine-week

# View logs
npx wrangler pages deployment tail
```

## 💰 Cost Estimates

### Cloudflare Pages (Free Tier)

✅ **Completely FREE for:**
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 5,000 pages per deployment
- Custom domains

💎 **Paid Features** (optional):
- Advanced Analytics: $5/month
- Priority support: Included in Pro plan

### Estimated Costs

For a personal Valentine's Day app:
- **Development**: $0
- **Hosting**: $0 (Cloudflare free tier)
- **Domain**: $10-15/year (optional)
- **Total**: $0-15/year

## 🎁 Share Your Deployment

Once deployed, share your Valentine Week experience:

1. **Get your URL**: `https://valentine-week.pages.dev`
2. **Create a QR code** (optional):
   - Use: qr-code-generator.com
   - Link: Your production URL
   - Print and attach to a gift

3. **Send the link**:
   ```
   "I made something special for you... 💕
   Visit this on February 7th: https://valentine-week.pages.dev"
   ```

## 🔒 Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use `.gitignore` for sensitive files
- ✅ Keep API keys in Cloudflare secrets
- ✅ Enable HTTPS (automatic with Cloudflare)
- ✅ Use strong passwords for admin panels (if added)

## 📞 Support & Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Hono Docs**: https://hono.dev/
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/

---

**Congratulations!** 🎉 Your Valentine Week app is now live and ready to create magical moments! ❤️

**Production URL**: https://valentine-week.pages.dev _(replace with your actual URL)_

**Remember**: Test thoroughly before the big day! The magic is in the details. 💕
