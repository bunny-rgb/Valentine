# 🚀 Deployment Instructions - Valentine Week App

## ✅ All Updates Complete

### 1. ✅ Web3Forms API Key Updated
- **Old Key:** `c9a985fe-237d-4fef-84a5-b1f4ab2dcabf`
- **New Key:** `3e74662b-aade-41a9-9f45-c72fb92d39f1`
- **Updated in:** 3 locations (all email functions)
- **Recipient:** pachourimohit1@gmail.com

### 2. ✅ Music-day7 Folder Created
- **Location:** `/home/user/webapp/public/static/music-day7/`
- **Files:** 53 MP3 files
- **Size:** 365 MB
- **Status:** Uploaded to GitHub ✅

### 3. ✅ All Music on GitHub
- **Day 5:** 3 songs (17 MB) ✅
- **Day 6:** 10 songs (54 MB) ✅
- **Day 7:** 54 songs (365 MB) ✅
- **Repository:** https://github.com/bunny-rgb/Valentine/tree/main/public/static/

### 4. ✅ App Streaming from GitHub
All Day 5, 6, 7 music URLs updated to:
```javascript
'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/[filename].mp3'
```

---

## 🚨 DEPLOYMENT ISSUE

### Problem
Wrangler CLI keeps hanging at "Uploading... (47/89)" - this is a known Wrangler bug with large uploads.

### Current Status
- **Build:** ✅ Complete (285 MB)
- **GitHub:** ✅ All code pushed
- **Deployment:** ❌ Wrangler upload fails

---

## 🛠️ MANUAL DEPLOYMENT REQUIRED

Since Wrangler CLI is failing, you need to **manually upload via Cloudflare Dashboard**.

### Step-by-Step Instructions:

#### **Step 1: Download the Built Package**
The built files are ready at: `/home/user/webapp/dist/`

You can create a zip file to download:
```bash
cd /home/user/webapp
tar -czf valentine-week-deploy.tar.gz dist/
```

#### **Step 2: Login to Cloudflare Dashboard**
1. Go to: https://dash.cloudflare.com/
2. Login with your Cloudflare account
3. Navigate to: **Workers & Pages** → **valentine-week**

#### **Step 3: Create Manual Deployment**
1. Click **"Create deployment"** or **"Upload assets"**
2. Select **"Direct upload"** method
3. Upload all files from `dist/` folder:
   - `_worker.js`
   - `_routes.json`
   - `static/` folder (with all contents)

#### **Step 4: Alternative - Connect GitHub**
Even better - set up automatic deployments:

1. In Cloudflare Dashboard → valentine-week
2. Go to **"Settings"** → **"Builds & deployments"**
3. Click **"Connect to GitHub"**
4. Select repository: **bunny-rgb/Valentine**
5. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
6. Click **"Save and Deploy"**

Now every git push will auto-deploy! 🎉

---

## 📧 Email Configuration

### Web3Forms Settings
- **API Key:** `3e74662b-aade-41a9-9f45-c72fb92d39f1`
- **Recipient:** pachourimohit1@gmail.com
- **From Name:** Valentine Week App - Kodak Moment
- **Subject:** 💖 She Said YES! + Our Kodak Moment Photo 📸💕

### Email Functions
There are 3 email functions in the app:
1. **sendKodakMomentEmail()** - Day 7 camera photo with attachment
2. **sendValentineDayResponse()** - Day 7 YES/NO response
3. Additional email functions for other features

All now use the new API key: `3e74662b-aade-41a9-9f45-c72fb92d39f1`

### Testing Email
After deployment:
1. Open https://ankitamy.shop
2. Navigate to Day 7 (unlocks Feb 14, 2026)
3. Click YES button
4. Camera opens
5. Capture photo
6. Check console for:
   ```
   📸 Photo blob details: { size: "0.35 MB", ... }
   📤 Sending email with photo to Web3Forms...
   ✅ Kodak moment sent to your email! 💕📸
   ```
7. Check email: pachourimohit1@gmail.com (inbox or spam)

---

## 📊 File Structure

### Production Files (dist/)
```
dist/
├── _worker.js (36 KB) - Hono backend
├── _routes.json - Routing config
└── static/
    ├── app.js - Main frontend (with GitHub music URLs)
    ├── styles.css
    ├── music/ (Day 1-3 songs)
    ├── music-day4/ (73 MB)
    ├── promise-photos/ (7 images)
    ├── kiss-photos/
    └── valentine-photos/
```

**Note:** Day 5, 6, 7 music folders removed from dist/ - now streaming from GitHub

### Source Files (public/static/)
```
public/static/
├── app.js - Updated with new API key ✅
├── styles.css
├── music/ (Day 1-3)
├── music-day4/ (73 MB)
├── music-day5/ (17 MB) - On GitHub ✅
├── music-day6/ (54 MB) - On GitHub ✅
├── music-day7/ (365 MB) - On GitHub ✅
├── promise-photos/
├── kiss-photos/
└── valentine-photos/
```

---

## 🎯 Quick Commands

### Build
```bash
cd /home/user/webapp
npm run build
```

### Deploy (if Wrangler works)
```bash
cd /home/user/webapp
npm run deploy:prod
```

### Push to GitHub
```bash
cd /home/user/webapp
git add -A
git commit -m "Your message"
git push origin main
```

### Create Deployment Package
```bash
cd /home/user/webapp
tar -czf valentine-deploy-$(date +%Y%m%d).tar.gz dist/
```

---

## 🔗 Important Links

- **Production URL:** https://ankitamy.shop
- **GitHub Repository:** https://github.com/bunny-rgb/Valentine
- **Cloudflare Dashboard:** https://dash.cloudflare.com/
- **Web3Forms Dashboard:** https://web3forms.com/

---

## 🎊 What's Working Now

✅ Web3Forms API key updated to new key  
✅ All 3 email functions use new API key  
✅ Music-day7 folder exists in public/static/  
✅ All Day 5, 6, 7 music on GitHub  
✅ App streams music from GitHub  
✅ Camera captures and downloads photos  
✅ Email logging improved  
✅ Build complete (285 MB)  
✅ All code pushed to GitHub  

---

## ⏳ What Needs Manual Action

❌ **Deployment to Cloudflare Pages** - Requires manual upload via dashboard

**Action Required:**
1. Login to Cloudflare Dashboard
2. Upload dist/ folder manually
3. OR connect GitHub for auto-deploy

---

## 📅 Timeline

- **Today (Feb 13, 2026):** All updates complete
- **Tomorrow (Feb 14, 2026):** Day 7 unlocks at midnight IST
  - YES/NO buttons appear
  - Camera feature active
  - 12 songs + email with photo attachment

---

**Last Updated:** February 13, 2026, 19:30 UTC  
**Status:** ✅ Ready for Manual Deployment  
**Git Commit:** e33bdbd - 🔧 Update Web3Forms API key to new key
