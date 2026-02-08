# Custom Domain Setup for Valentine Week

## 🌐 Mapping ankitamy.shop to valentine-week-611.pages.dev

### Current Status
- **Cloudflare Pages URL**: https://valentine-week-611.pages.dev
- **Desired Custom Domain**: https://ankitamy.shop
- **Project**: valentine-week

### Setup Steps

#### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Login with your account

2. **Navigate to Pages Project**
   - Go to Workers & Pages
   - Click on "valentine-week" project

3. **Add Custom Domain**
   - Click on "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter: `ankitamy.shop`
   - Click "Continue"

4. **DNS Configuration**
   Cloudflare will automatically configure DNS if your domain is already on Cloudflare:
   
   **If domain IS on Cloudflare:**
   - DNS records will be added automatically
   - CNAME record: `ankitamy.shop` → `valentine-week-611.pages.dev`
   
   **If domain is NOT on Cloudflare:**
   - You need to transfer nameservers to Cloudflare first
   - Or manually add CNAME record at your current DNS provider:
     ```
     Type: CNAME
     Name: @ (or ankitamy.shop)
     Value: valentine-week-611.pages.dev
     TTL: Auto/3600
     ```

5. **SSL/TLS Certificate**
   - Cloudflare automatically provisions SSL certificate
   - Usually takes 5-15 minutes
   - Certificate covers both www and non-www versions

6. **Verify Setup**
   - Wait for DNS propagation (can take up to 24 hours, usually 5-10 minutes)
   - Test: https://ankitamy.shop
   - Both http and https should work
   - http will automatically redirect to https

#### Option 2: Via Wrangler CLI (If needed)

The newer versions of Wrangler require using the Cloudflare Dashboard for domain management, as the CLI commands have been simplified.

### Expected DNS Records (After Setup)

```
ankitamy.shop CNAME valentine-week-611.pages.dev (Proxied through Cloudflare)
www.ankitamy.shop CNAME valentine-week-611.pages.dev (Optional, for www subdomain)
```

### Verification Commands

After setup, test your domain:

```bash
# Check DNS propagation
dig ankitamy.shop
dig CNAME ankitamy.shop

# Test HTTP access
curl -I https://ankitamy.shop

# Test HTTPS and redirects
curl -IL http://ankitamy.shop

# Verify SSL certificate
openssl s_client -connect ankitamy.shop:443 -servername ankitamy.shop < /dev/null 2>/dev/null | openssl x509 -noout -subject -dates
```

### Troubleshooting

**DNS Not Propagating:**
- Check DNS records at your registrar/DNS provider
- Use https://dnschecker.org/ to check propagation
- Wait 5-10 minutes for Cloudflare to provision SSL

**SSL Certificate Issues:**
- Ensure SSL/TLS mode is "Full" or "Full (strict)" in Cloudflare dashboard
- Wait for automatic certificate provisioning (5-15 minutes)

**404 or Connection Errors:**
- Verify CNAME points to: `valentine-week-611.pages.dev`
- Ensure Cloudflare proxy is enabled (orange cloud icon)
- Check project deployment is active at https://valentine-week-611.pages.dev

### Post-Setup

Once the custom domain is active:

1. **Update README and documentation** with new URL
2. **Test all features**:
   - Photo gallery
   - Music playback
   - Progress bar
   - Countdown timers
   - Proposal section

3. **Share new URL**: https://ankitamy.shop

### Quick Reference

| Item | Value |
|------|-------|
| **Project** | valentine-week |
| **Cloudflare Pages** | https://valentine-week-611.pages.dev |
| **Custom Domain** | https://ankitamy.shop |
| **DNS Record** | CNAME → valentine-week-611.pages.dev |
| **SSL** | Automatic (Cloudflare) |
| **Setup Time** | 5-15 minutes |
| **DNS Propagation** | 5 minutes to 24 hours |

---

## 📝 Next Steps

1. Login to Cloudflare Dashboard: https://dash.cloudflare.com/
2. Navigate to Workers & Pages → valentine-week
3. Click "Custom domains" → "Set up a custom domain"
4. Enter: `ankitamy.shop`
5. Wait 5-15 minutes for SSL provisioning
6. Test: https://ankitamy.shop

✅ Once complete, your Valentine Week app will be accessible at https://ankitamy.shop!

---

**Made with ❤️ by Bunny (mohitdev) for Anku 🧸**
