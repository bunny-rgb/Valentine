# 🚀 Cloudflare Deployment Guide - API Token Permissions Required

## ⚠️ Current Issue

The Cloudflare API token needs additional permissions for deployment. Here's how to fix it:

---

## 🔧 Fix: Update API Token Permissions

### **Step 1: Go to Cloudflare Dashboard**

1. Open: https://dash.cloudflare.com/profile/api-tokens
2. Find your current API token for this project
3. Click **Edit** on the token

### **Step 2: Add Required Permissions**

Your API token needs these permissions:

#### **Account Permissions:**
- ✅ `Account` → `Cloudflare Pages` → **Edit**
- ✅ `Account` → `Account Settings` → **Read**

#### **User Permissions:**
- ✅ `User` → `User Details` → **Read**
- ✅ `User` → `Memberships` → **Read**

#### **Zone Permissions (if using custom domain):**
- ✅ `Zone` → `DNS` → **Edit**
- ✅ `Zone` → `Zone` → **Read**

### **Step 3: Save and Copy Token**

1. Click **Continue to summary**
2. Click **Update Token**
3. Copy the token (you won't see it again!)

### **Step 4: Update Token in Deploy Tab**

1. Go to **Deploy** tab in GenSpark
2. Paste the new token in **Cloudflare API Key** field
3. Click **Save**

---

## 🎯 Alternative: Create New API Token

If editing doesn't work, create a new token:

### **1. Create Custom Token:**

Go to: https://dash.cloudflare.com/profile/api-tokens

Click: **Create Token** → **Create Custom Token**

### **2. Set Permissions:**

**Token Name:** `Valentine Week Deployment`

**Permissions:**
```
Account | Cloudflare Pages | Edit
Account | Account Settings | Read
User | User Details | Read
User | Memberships | Read
```

**Account Resources:**
- Include: `All accounts`

**Client IP Address Filtering:** (Optional)
- Leave empty for now

**TTL:** 
- Set expiration (e.g., 1 year) or leave as never expires

### **3. Create & Copy Token:**

1. Click **Continue to summary**
2. Click **Create Token**
3. **Copy the token immediately** (won't be shown again!)

### **4. Update in GenSpark:**

1. Go to **Deploy** tab
2. Paste new token in **Cloudflare API Key**
3. Click **Save**

---

## 📋 Deployment Command (After Token Update)

Once the token is updated, run:

```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name valentine-week
```

---

## ✅ Expected Successful Output

When deployment works, you'll see:

```
⛅️ wrangler 4.63.0
───────────────────

Uploading... (36 kB)
✨ Success! Uploaded 1 file (0.5 sec)

✨ Deployment complete!
✨ https://valentine-week.pages.dev
```

---

## 🔄 Alternative Deployment Options

### **Option 1: Use Wrangler Login (Interactive)**

```bash
npx wrangler login
```

This will:
1. Open browser
2. Login to Cloudflare
3. Authorize wrangler
4. No token needed

### **Option 2: Deploy via Cloudflare Dashboard (Manual)**

1. Go to: https://dash.cloudflare.com
2. Click **Pages** → **Create application**
3. Choose **Upload assets**
4. Upload the `dist` folder
5. Set project name: `valentine-week`
6. Click **Deploy**

### **Option 3: Connect GitHub (Automatic)**

1. Go to: https://dash.cloudflare.com
2. Click **Pages** → **Create application**
3. Choose **Connect to Git**
4. Select repository: `bunny-rgb/Valentine`
5. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
6. Click **Save and Deploy**

This will auto-deploy on every git push!

---

## 📊 Current Project Status

| Item | Status |
|------|--------|
| **Code** | ✅ Ready |
| **Build** | ✅ Successful |
| **GitHub** | ✅ Pushed |
| **Token Permissions** | ⚠️ Need Update |
| **Deployment** | ⏳ Pending token fix |

---

## 🎯 Recommended Next Steps

### **Fastest: Update Token Permissions**
1. Edit existing token permissions (5 minutes)
2. Update in Deploy tab
3. Run deployment command
4. ✅ Live in 2 minutes!

### **Easiest: GitHub Auto-Deploy**
1. Connect GitHub to Cloudflare Pages (one-time)
2. Auto-deploy on every push
3. ✅ Always up-to-date!

### **Works Now: Share Sandbox URL**
Current live URL: https://11000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai
- All features working
- Share with Anku now
- Deploy to Cloudflare later

---

## 📝 Summary

**Issue:** API token missing `Memberships` and `User Details` permissions

**Solution:** Add these permissions to your Cloudflare API token:
- ✅ Account → Cloudflare Pages → Edit
- ✅ Account → Account Settings → Read
- ✅ User → User Details → Read
- ✅ User → Memberships → Read

**After Fix:** Run deployment command and your app will be live at `valentine-week.pages.dev`

---

## 🆘 Need Help?

**Token Permission Guide:** https://developers.cloudflare.com/fundamentals/api/get-started/create-token/

**Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/

**Already Working:** Your sandbox URL is live and fully functional!

---

**Created**: February 8, 2026 03:15 UTC
**Status**: Waiting for token permission update
