# 🌐 Custom Domain Setup - ankitamy.shop

## Quick Setup Guide

### Step 1: Access Cloudflare Dashboard

1. Open your browser and go to: **https://dash.cloudflare.com/**
2. Login with your Cloudflare account credentials

### Step 2: Navigate to Your Pages Project

1. In the left sidebar, click **"Workers & Pages"**
2. Find and click on **"valentine-week"** project
3. You should see your current deployment at `valentine-week-611.pages.dev`

### Step 3: Add Custom Domain

1. Click on the **"Custom domains"** tab at the top
2. Click the **"Set up a custom domain"** button
3. Enter your domain: **`ankitamy.shop`**
4. Click **"Continue"**

### Step 4: DNS Configuration

**IMPORTANT**: Check if your domain `ankitamy.shop` is already managed by Cloudflare:

#### ✅ If Domain IS on Cloudflare (Automatic)
- Cloudflare will automatically add the required DNS records
- You don't need to do anything manually
- Click **"Activate domain"**

#### ❌ If Domain is NOT on Cloudflare (Manual)
You have two options:

**Option A: Transfer DNS to Cloudflare (Recommended)**
1. In Cloudflare dashboard, go to "Websites"
2. Click "Add a site"
3. Enter `ankitamy.shop` and follow the wizard
4. Update nameservers at your domain registrar (where you bought the domain)
5. Wait for nameserver propagation (24-48 hours)
6. Then return to Pages and add custom domain

**Option B: Keep Current DNS Provider**
1. Go to your current DNS provider (where ankitamy.shop DNS is managed)
2. Add a new CNAME record:
   ```
   Type: CNAME
   Name: @ (or ankitamy.shop or leave blank)
   Target: valentine-week-611.pages.dev
   TTL: 3600 (or Auto)
   Proxy: Enabled (if available)
   ```
3. If your DNS provider doesn't support CNAME on root domain, add:
   ```
   Type: A
   Name: @ (or ankitamy.shop)
   Value: (Cloudflare will provide IP addresses)
   ```

### Step 5: SSL Certificate (Automatic)

- Cloudflare automatically provisions an SSL certificate
- This usually takes **5-15 minutes**
- The certificate covers both:
  - `ankitamy.shop`
  - `www.ankitamy.shop` (if you add it)

### Step 6: Verify Your Domain

After setup, wait 5-15 minutes and then test:

```bash
# Test if domain resolves
ping ankitamy.shop

# Test HTTP → HTTPS redirect
curl -I http://ankitamy.shop

# Test HTTPS access
curl -I https://ankitamy.shop

# Check if page loads
curl https://ankitamy.shop | grep "Valentine Week"
```

Or simply open in your browser:
- **https://ankitamy.shop** ← Should show your Valentine Week app!

---

## 🎯 Expected Results

### Before Custom Domain Setup:
- ✅ Working URL: https://valentine-week-611.pages.dev
- ❌ Not working: https://ankitamy.shop

### After Custom Domain Setup:
- ✅ Working URL: https://valentine-week-611.pages.dev (still works)
- ✅ Working URL: **https://ankitamy.shop** ← NEW!
- ✅ Auto-redirect: http://ankitamy.shop → https://ankitamy.shop
- ✅ SSL certificate: Valid and automatic

---

## 🔍 Troubleshooting

### Problem: Domain shows "DNS resolution error"
**Solution**: Wait 5-10 minutes. DNS propagation can take time.

### Problem: "ERR_SSL_VERSION_OR_CIPHER_MISMATCH"
**Solution**: 
1. Go to Cloudflare Dashboard → SSL/TLS
2. Ensure mode is set to **"Full"** or **"Full (strict)"**
3. Wait 5-15 minutes for SSL certificate provisioning

### Problem: Shows 404 error
**Solution**: 
1. Verify deployment is active: https://valentine-week-611.pages.dev
2. Check CNAME record points to: `valentine-week-611.pages.dev`
3. Ensure Cloudflare proxy is enabled (orange cloud ☁️)

### Problem: Custom domain not appearing in Cloudflare
**Solution**: 
1. Ensure you're logged into correct Cloudflare account
2. Check if domain is verified in your Cloudflare account
3. Try using Cloudflare Dashboard instead of CLI

---

## 📊 DNS Configuration Summary

### If using Cloudflare DNS:

| Type | Name | Target | Proxy | TTL |
|------|------|--------|-------|-----|
| CNAME | @ | valentine-week-611.pages.dev | Proxied | Auto |
| CNAME | www | valentine-week-611.pages.dev | Proxied | Auto |

### If using External DNS:

| Type | Name | Target | TTL |
|------|------|--------|-----|
| CNAME | @ (or ankitamy.shop) | valentine-week-611.pages.dev | 3600 |
| CNAME | www | valentine-week-611.pages.dev | 3600 |

---

## ⏱️ Timeline

| Step | Time Required |
|------|---------------|
| Add custom domain in dashboard | 2 minutes |
| SSL certificate provisioning | 5-15 minutes |
| DNS propagation (if new) | 5 minutes - 24 hours |
| **Total (if DNS exists)** | **~10-20 minutes** |
| **Total (if new DNS)** | **24-48 hours** |

---

## ✅ Final Checklist

After setup is complete, verify:

- [ ] https://ankitamy.shop loads the Valentine Week app
- [ ] http://ankitamy.shop redirects to https://ankitamy.shop
- [ ] SSL certificate is valid (green padlock in browser)
- [ ] Music player works on custom domain
- [ ] All 7 songs play correctly
- [ ] Progress bar updates during playback
- [ ] Photo gallery works (click to remove photos)
- [ ] Proposal section appears after removing all photos
- [ ] Countdown timers work on locked days
- [ ] Footer shows "© 2026 Bunny (mohitdev)"

---

## 🎉 Success!

Once complete, you can share:
- **Production URL**: https://ankitamy.shop
- **Fallback URL**: https://valentine-week-611.pages.dev
- **GitHub**: https://github.com/bunny-rgb/Valentine

Your Valentine Week app is now live on your custom domain! 🎊

---

## 📞 Need Help?

If you encounter issues:

1. **Check Cloudflare Dashboard**:
   - Go to Pages → valentine-week → Custom domains
   - Look for any error messages or warnings

2. **Check DNS Propagation**:
   - Visit: https://dnschecker.org/
   - Enter: `ankitamy.shop`
   - Verify CNAME points to `valentine-week-611.pages.dev`

3. **Check SSL Status**:
   - Visit: https://www.ssllabs.com/ssltest/
   - Enter: `ankitamy.shop`
   - Should show valid SSL certificate

4. **Contact Cloudflare Support**:
   - If domain is verified but not working
   - If SSL certificate fails to provision after 1 hour

---

**Made with ❤️ by Bunny (mohitdev) for Anku 🧸**

*Last Updated: February 8, 2026*
