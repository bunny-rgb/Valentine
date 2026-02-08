# 🎯 Domain Mapping: ankitamy.shop → valentine-week

## ✅ Good News!

Your domain **ankitamy.shop** is already on Cloudflare! 🎉

**Current Status:**
- ✅ Domain: `ankitamy.shop` is active on Cloudflare
- ✅ SSL: Valid and working
- ⚠️ Content: Shows "Assets have not yet been deployed..."
- 🎯 Goal: Map to Valentine Week project

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Login to Cloudflare Dashboard

1. Open: **https://dash.cloudflare.com/**
2. Login with your Cloudflare account

### Step 2: Navigate to Valentine Week Project

1. Click **"Workers & Pages"** in left sidebar
2. Find and click **"valentine-week"**
3. Click **"Custom domains"** tab

### Step 3: Add Your Domain

1. Click **"Set up a custom domain"** button
2. Enter: `ankitamy.shop`
3. Click **"Continue"**
4. Click **"Activate domain"**

**That's it!** Since your domain is already on Cloudflare, DNS records will be added automatically.

### Step 4: Wait for SSL Certificate

- SSL certificate will be provisioned automatically
- Takes: **5-15 minutes**
- You'll see a green checkmark when ready

### Step 5: Test Your Domain

After 5-15 minutes, open in your browser:
- **https://ankitamy.shop** ← Should show Valentine Week app!

---

## 🔧 Alternative: If Custom Domain Tab Not Available

If you don't see "Custom domains" tab in the Pages project, you can map the domain directly:

### Method 1: Via Pages Project Settings

1. Go to **Workers & Pages** → **valentine-week**
2. Click **"Settings"** tab
3. Scroll to **"Custom domains"** section
4. Click **"Add"** or **"Set up domain"**
5. Enter `ankitamy.shop` and save

### Method 2: Via DNS Records (Manual)

If automatic mapping doesn't work:

1. Go to **Websites** in Cloudflare dashboard
2. Click on **ankitamy.shop**
3. Click **"DNS"** → **"Records"**
4. Look for existing records pointing to your current project
5. Edit or add new CNAME record:
   ```
   Type: CNAME
   Name: @
   Target: valentine-week-611.pages.dev
   Proxy: Enabled (orange cloud)
   TTL: Auto
   ```

6. Save and wait 2-5 minutes for propagation

---

## 🎯 Expected Behavior

### Before Mapping:
```
https://ankitamy.shop
→ Shows: "Assets have not yet been deployed..."
```

### After Mapping:
```
https://ankitamy.shop
→ Shows: "Valentine Week 💕 - A Love Story in 7 Days"
→ Music player, photo gallery, proposal section all working!
```

---

## ✅ Verification Checklist

After setup, verify these work on **https://ankitamy.shop**:

- [ ] Page loads with Valentine Week title
- [ ] "Propose Day" shows (Day 1 is unlocked)
- [ ] Photo gallery appears (5 photos)
- [ ] Click photos to remove them
- [ ] Proposal appears after removing all photos
- [ ] Music player is visible at bottom
- [ ] Click Play button → Music starts
- [ ] Progress bar moves during playback
- [ ] Next/Previous buttons work
- [ ] Days 2-7 show countdown timers
- [ ] Footer shows "© 2026 Bunny (mohitdev)"

---

## 🔍 Troubleshooting

### Issue: Domain still shows "Assets have not yet been deployed"

**Solution 1: Clear Cloudflare Cache**
1. In Cloudflare Dashboard → ankitamy.shop
2. Go to **Caching** → **Configuration**
3. Click **"Purge Everything"**
4. Wait 2-3 minutes and refresh

**Solution 2: Check DNS Records**
1. Go to **DNS** → **Records**
2. Ensure CNAME @ points to `valentine-week-611.pages.dev`
3. Ensure Proxy is **Enabled** (orange cloud)

**Solution 3: Re-add Custom Domain**
1. In Pages project, remove custom domain if exists
2. Wait 2 minutes
3. Add it again: `ankitamy.shop`
4. Activate and wait 5 minutes

### Issue: SSL Certificate Error

**Solution:**
1. Go to **SSL/TLS** in Cloudflare Dashboard
2. Set mode to **"Full"** or **"Full (strict)"**
3. Wait 5-15 minutes
4. SSL certificate will auto-provision

### Issue: 404 Error

**Solution:**
1. Verify deployment is active: https://valentine-week-611.pages.dev
2. Check deployment history in Pages project
3. Ensure latest deployment is successful
4. If needed, redeploy:
   ```bash
   cd /home/user/webapp
   npm run build
   npx wrangler pages deploy dist --project-name valentine-week
   ```

---

## 📊 Current Configuration

| Item | Current Value |
|------|---------------|
| **Domain** | ankitamy.shop |
| **Cloudflare** | ✅ Active |
| **SSL** | ✅ Valid |
| **DNS** | ✅ Configured |
| **Current Content** | "Assets have not yet been deployed" |
| **Target Project** | valentine-week |
| **Target URL** | valentine-week-611.pages.dev |

**After Mapping:**

| Item | New Value |
|------|-----------|
| **Domain** | ankitamy.shop |
| **Content** | Valentine Week App |
| **Music** | 7 songs (31 minutes) |
| **Features** | All working |

---

## 🎉 Final URLs

Once setup is complete:

### Production URLs:
- **Primary**: https://ankitamy.shop ← Share this one!
- **Fallback**: https://valentine-week-611.pages.dev

### Development URLs:
- **Sandbox**: https://11000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai
- **GitHub**: https://github.com/bunny-rgb/Valentine

---

## ⏱️ Timeline

| Step | Time |
|------|------|
| Add custom domain in dashboard | 2 min |
| DNS propagation | 2-5 min |
| SSL certificate provisioning | 5-15 min |
| **Total** | **10-20 min** |

---

## 📞 Need Help?

If mapping doesn't work after following all steps:

1. **Screenshot** the Custom Domains section in Pages project
2. **Screenshot** the DNS Records for ankitamy.shop
3. **Check** deployment history for any errors
4. **Verify** you're using the correct Cloudflare account

---

## 🎯 Quick Commands for Testing

```bash
# Check if domain is reachable
curl -I https://ankitamy.shop

# Check SSL certificate
openssl s_client -connect ankitamy.shop:443 -servername ankitamy.shop < /dev/null 2>/dev/null | grep subject

# Check page content
curl -s https://ankitamy.shop | grep "Valentine Week"

# Expected output: Should see "Valentine Week 💕"
```

---

## ✨ Summary

Your domain **ankitamy.shop** is already on Cloudflare and ready to be mapped to your Valentine Week project! Just follow the 5-minute setup steps above in the Cloudflare Dashboard, and your custom domain will be live! 🚀

**Made with ❤️ by Bunny (mohitdev) for Anku 🧸**

*Last Updated: February 8, 2026*
