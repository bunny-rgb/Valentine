# 🚀 Quick Start Guide - Valentine Week App

Get your romantic web app running in 5 minutes!

## ⚡ Ultra-Fast Setup

### 1️⃣ Access the Live Demo (Right Now!)

**🌐 Open this URL**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai

**What you'll see**:
- ✨ Beautiful Valentine Week landing page
- 💕 Navigate through all 7 days
- 🎨 Experience romantic animations
- 📱 Works on mobile, tablet, desktop

### 2️⃣ Test All Features (2 minutes)

Click through each day in the navigation:

**Day 1 - Propose Day** 💍
- Click play button for music
- Watch photos float and pulse
- Scroll down for proposal
- Click "YES 💗" for confetti

**Day 2 - Rose Day** 🌹
- Click each rose petal
- Read romantic compliments
- Collect all 7 petals

**Day 3 - Chocolate Day** 🍫
- Click chocolates to unwrap
- Read sweet messages
- Find the special one

**Day 4 - Teddy Day** 🧸
- Click the teddy bear
- Press "Send You a Hug"
- Watch hearts fly

**Day 5 - Promise Day** 📖
- Flip through promise pages
- Read each promise
- Write your own on last page

**Day 6 - Kiss Day** 💋
- Click "Steal a Kiss"
- Watch kiss marks float
- Enjoy the moment

**Day 7 - Valentine's Day** ❤️
- Scroll through memory timeline
- Read final message
- Click "Be my forever?"

### 3️⃣ Customize for Your Relationship (10 minutes)

**📸 Add Your Photos**:
```bash
# 1. Upload photos to: /home/user/webapp/public/static/photos/
# 2. Edit /home/user/webapp/public/static/app.js
# 3. Find: const photos = [...]
# 4. Replace URLs with your photos
```

**✍️ Personalize Messages**:
```bash
# Edit /home/user/webapp/public/static/app.js

# Rose Day compliments (line ~250):
const compliments = [
  "Your smile lights up my world 🌟",
  "Add your own compliments here...",
]

# Chocolate messages (line ~320):
const chocolateMessages = [
  "You're sweeter than chocolate 🍫",
  "Add your memories here...",
]

# Promises (line ~400):
const promises = [
  "I promise to always make you smile 😊",
  "Add your promises here...",
]
```

**🗓️ Set Your Dates**:
```javascript
// Line ~1 in app.js:
const VALENTINE_WEEK_CONFIG = {
  startDate: new Date('2026-02-07T00:00:00'),
  // Change to your desired dates
}
```

### 4️⃣ Deploy to Production (5 minutes)

**Option A: Cloudflare Pages (Recommended)**

```bash
cd /home/user/webapp

# Build
npm run build

# Deploy
npx wrangler pages deploy dist --project-name valentine-week

# Get URL: https://valentine-week.pages.dev
```

**Option B: Keep Using Sandbox**

Already running! Just use:
https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai

---

## 📱 Share With Your Valentine

Once customized:

**💌 Send the link**:
```
"I made something special for you... 💕
Open this on February 7th:
https://your-valentine-week.pages.dev

Every day unlocks a new surprise!"
```

**🎁 Create a card**:
- Print the URL as a QR code
- Attach to a gift
- Let her scan and discover

---

## 🆘 Need Help?

### Quick Troubleshooting

**Q: Days are locked?**
- A: Set dates to today for testing, or wait until Feb 7

**Q: Photos not showing?**
- A: Check file paths in `public/static/photos/`

**Q: Music not playing?**
- A: Add your MP3 file to `public/static/music/song.mp3`

**Q: How do I edit text?**
- A: Edit `/home/user/webapp/public/static/app.js`

### Full Documentation

- 📖 **README.md** - Complete guide
- 🎨 **CUSTOMIZATION.md** - Personalization steps
- 🚀 **DEPLOYMENT.md** - Production deployment
- 🏗️ **ARCHITECTURE.md** - Technical details
- 📊 **PROJECT_SUMMARY.md** - Overview

---

## ✅ Checklist Before Launch

- [ ] Tested all 7 days
- [ ] Added personal photos
- [ ] Customized all messages
- [ ] Set correct dates
- [ ] Added music file (optional)
- [ ] Tested on mobile
- [ ] Deployed to production
- [ ] Tested production URL
- [ ] Prepared sharing message

---

## 🎉 You're Ready!

Your Valentine Week app is **complete** and **ready** to create magical moments!

**Remember**: 
- This is a love letter in code ❤️
- Every detail matters 💝
- Make it personal 🎨
- Test before the big day 🗓️

**Have a magical Valentine Week!** 🌹💕

---

**Quick Links**:
- 🌐 **Live Demo**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai
- 📖 **Full Docs**: See README.md
- 💬 **Questions**: Check documentation files
