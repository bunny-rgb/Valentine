# 🎵 Spotify Music Integration Guide

## Overview

Your Valentine Week app now has a **beautiful Spotify music player** on Day 1 (Propose Day) that plays your romantic playlist with cute, minimal controls at the bottom of the page.

---

## 🎨 What You'll See

### Music Player Features
- 🎵 **Album Art Display** - Shows album cover from Spotify
- 🎤 **Track Info** - Song name and artist
- ⏯️ **Playback Controls** - Previous, Play/Pause, Next buttons
- 📊 **Progress Bar** - Visual track progress
- ⏱️ **Time Display** - Current time and duration
- 💫 **Beat Sync** - Photos pulse with the music
- 🎨 **Glass Morphism Design** - Beautiful frosted glass effect

---

## 🔐 Step 1: Get Your Spotify Access Token

### Option A: Quick Testing (Token expires in 1 hour)

1. **Go to Spotify Web API Console**
   - Visit: https://developer.spotify.com/console/get-playlist/

2. **Get Playlist Token**
   - Click "GET TOKEN" button
   - Select these scopes (if asked):
     - `playlist-read-private`
     - `playlist-read-collaborative`
   - Click "REQUEST TOKEN"
   - Copy the access token (long string starting with `BQ...`)

3. **Update Your Code**
   ```javascript
   // Edit /home/user/webapp/public/static/app.js
   // Find line ~3:
   
   const SPOTIFY_CONFIG = {
     playlistId: '2eDZ3I1FP5kWP505YIdACt',
     accessToken: 'BQA9x...' // Paste your token here
   };
   ```

### Option B: Server-Side (Recommended for Production)

For a production app, you should handle Spotify authentication server-side to keep tokens secure.

**We'll need to:**
1. Create a Cloudflare Worker API endpoint
2. Store your Spotify Client ID and Secret as environment variables
3. Implement token refresh logic

**For now, use Option A for testing!**

---

## 🎼 Step 2: Configure Your Playlist

### Use Your Own Playlist

1. **Open Spotify** (web or desktop app)
2. **Navigate to your playlist**
3. **Copy Playlist ID**:
   - Click "Share" → "Copy link to playlist"
   - URL looks like: `https://open.spotify.com/playlist/2eDZ3I1FP5kWP505YIdACt`
   - The ID is the last part: `2eDZ3I1FP5kWP505YIdACt`

4. **Update Config**:
   ```javascript
   const SPOTIFY_CONFIG = {
     playlistId: 'YOUR_PLAYLIST_ID_HERE', // Replace this
     accessToken: 'YOUR_ACCESS_TOKEN_HERE'
   };
   ```

### Create a Romantic Playlist

**Suggested songs for Valentine Week:**
- "Perfect" - Ed Sheeran
- "All of Me" - John Legend
- "Thinking Out Loud" - Ed Sheeran
- "A Thousand Years" - Christina Perri
- "Make You Feel My Love" - Adele
- "Meri Banogi Kya" (your special song!)

---

## 🚀 Step 3: Test the Music Player

### Rebuild and Test

```bash
# Navigate to project
cd /home/user/webapp

# Rebuild
npm run build

# Restart server
pm2 restart valentine-week

# Test
curl http://localhost:3000
```

### Test in Browser

1. **Open**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai
2. **Navigate to Day 1** (Propose Day)
3. **See Music Player** at the bottom
4. **Click Play Button** ▶️
5. **Watch magic happen**:
   - Music plays
   - Album art appears
   - Photos pulse with beat
   - Progress bar moves
6. **Test Controls**:
   - ⏮️ Previous track
   - ⏯️ Play/Pause
   - ⏭️ Next track

---

## 🎨 Music Player Design

### Visual Features

```
┌─────────────────────────────────────────┐
│  🎵 Album Art    Track Name              │
│                 Artist Name              │
├─────────────────────────────────────────┤
│       ⏮️    ▶️/⏸️    ⏭️                   │
│                                          │
│  ─────────────────────────              │
│  0:45                        3:21       │
└─────────────────────────────────────────┘
```

### Design Elements
- **Glass Morphism** - Frosted glass effect
- **Gradient Buttons** - Pink to rose gradients
- **Hover Effects** - Buttons scale and glow
- **Smooth Animations** - Slide up on load
- **Responsive** - Works on mobile, tablet, desktop
- **Minimal** - Clean, unobtrusive design

---

## 🎯 How It Works

### Music Flow

1. **Page Loads** → Spotify player appears at bottom
2. **Fetch Playlist** → Loads your Spotify tracks
3. **User Clicks Play** → First track starts
4. **Beat Detection** → Photos pulse every 600ms
5. **Track Progress** → Progress bar updates
6. **Track Ends** → Auto-plays next song
7. **After 25 seconds** → Proposal section appears
8. **User Clicks YES** → Music continues celebration

### API Integration

```javascript
// Fetch playlist from Spotify
GET https://api.spotify.com/v1/playlists/{playlistId}
Authorization: Bearer {accessToken}

// Response includes:
- Track names
- Artist names
- Album art URLs
- Preview URLs (30 second clips)
- Track durations
```

---

## ⚠️ Important Notes

### Spotify Preview Limitations

**What you need to know:**
- ✅ **Free to use** - No Spotify Premium required
- ⏱️ **30-second previews** - Most tracks have 30s clips
- 🔄 **Auto-advance** - Moves to next track after preview
- ❌ **Some tracks missing** - Not all songs have previews
- 🌍 **Region restrictions** - Some previews region-locked

### Token Expiration

**Access tokens expire after 1 hour.**

**When expired, you'll see:**
- "Error loading playlist" message
- "Check your Spotify token" warning

**Solutions:**
1. **Quick fix**: Get new token from Spotify Console (Option A)
2. **Permanent fix**: Implement OAuth token refresh (Option B)

---

## 🔧 Troubleshooting

### "Configure Spotify Token" Message

**Problem**: No access token configured

**Solution**:
```javascript
// In /home/user/webapp/public/static/app.js
const SPOTIFY_CONFIG = {
  playlistId: '2eDZ3I1FP5kWP505YIdACt',
  accessToken: 'YOUR_TOKEN_HERE' // Add your token!
};
```

### "Error loading playlist"

**Possible causes:**
1. Token expired (get new one)
2. Wrong playlist ID
3. Playlist is private
4. Network error

**Solution**:
- Get fresh token from Spotify Console
- Verify playlist ID
- Make playlist public
- Check browser console for errors

### "Could not play track"

**Cause**: Track doesn't have preview available

**Solution**: 
- Player auto-skips to next track
- Create playlist with popular songs (better preview availability)

### No Music Playing

**Checklist**:
- [ ] Token configured correctly?
- [ ] Playlist ID correct?
- [ ] Playlist is public?
- [ ] Browser allows autoplay?
- [ ] Volume is up?
- [ ] Check browser console (F12)

---

## 🎨 Customization Options

### Change Player Position

```css
/* In /home/user/webapp/public/static/styles.css */
.spotify-player-container {
    bottom: 0;        /* Change to: top: 0; for top position */
    left: 0;
    right: 0;
}
```

### Change Colors

```css
/* Primary color (buttons) */
.control-btn {
    background: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2);
}

/* Play button */
.control-btn.play-btn {
    background: linear-gradient(135deg, #YOUR_COLOR3, #YOUR_COLOR4);
}
```

### Adjust Beat Sync Speed

```javascript
// In app.js, startBeatAnimation function:
beatInterval = setInterval(() => {
  // ... pulse animation
}, 600); // Change 600 to your preferred milliseconds
         // 600ms = 100 BPM
         // 500ms = 120 BPM
         // 750ms = 80 BPM
```

---

## 🚀 Production Deployment

### For Cloudflare Pages Deployment

**Option 1: Client-Side (Current Setup)**
- Works immediately
- Token in code (public)
- Need to refresh token hourly
- ✅ Good for personal use

**Option 2: Server-Side (Recommended)**
- Create Cloudflare Worker API
- Store credentials as secrets
- Auto-refresh tokens
- ✅ Good for public deployment

### Environment Variables Setup

If going with server-side:

```bash
# Add Spotify credentials
npx wrangler secret put SPOTIFY_CLIENT_ID
npx wrangler secret put SPOTIFY_CLIENT_SECRET
```

---

## 📱 Mobile Experience

### Features on Mobile
- ✅ Responsive design (adjusts to screen)
- ✅ Touch-friendly buttons
- ✅ Swipe-able progress bar
- ✅ Optimized for small screens
- ✅ Works in mobile browsers

### Testing Mobile
```bash
# Use your phone's browser
# Navigate to the sandbox URL
# Try all controls
```

---

## 💡 Pro Tips

### 1. Create Multiple Playlists
```javascript
// Switch playlists for different moods
const PLAYLISTS = {
  romantic: '2eDZ3I1FP5kWP505YIdACt',
  upbeat: 'ANOTHER_PLAYLIST_ID',
  slow: 'YET_ANOTHER_ID'
};
```

### 2. Add Playlist Selector
Let her choose the mood with a dropdown!

### 3. Add Volume Control
```javascript
// Add volume slider
musicPlayer.volume = 0.7; // 0.0 to 1.0
```

### 4. Add Shuffle
```javascript
// Randomize playlist order
spotifyPlaylist.sort(() => Math.random() - 0.5);
```

---

## 📊 Example Working Config

```javascript
// Complete working example:
const SPOTIFY_CONFIG = {
  // This is a PUBLIC playlist (works for everyone)
  playlistId: '37i9dQZF1DX50KOxCoe6eO', // Love Pop playlist
  
  // Get your token from: 
  // https://developer.spotify.com/console/get-playlist/
  accessToken: 'BQA9xFZ...' // Your fresh token here
};
```

---

## 🎉 Ready to Test!

1. ✅ Get Spotify token
2. ✅ Update `SPOTIFY_CONFIG`
3. ✅ Rebuild: `npm run build`
4. ✅ Restart: `pm2 restart valentine-week`
5. ✅ Open browser and test
6. ✅ Click play and enjoy!

---

## 🆘 Need Help?

**Check these resources:**
- 🎵 [Spotify Web API Docs](https://developer.spotify.com/documentation/web-api/)
- 🔐 [Get Access Token](https://developer.spotify.com/console/get-playlist/)
- 📖 [Project README](./README.md)
- 🎨 [Customization Guide](./CUSTOMIZATION.md)

---

## 🌟 Features Summary

✅ **Spotify API Integration**
✅ **Cute Minimal Design**
✅ **Play/Pause/Next/Previous Controls**
✅ **Album Art Display**
✅ **Progress Bar**
✅ **Beat-Synced Photos**
✅ **Auto-Play Next Track**
✅ **Responsive Mobile Design**
✅ **Glass Morphism UI**
✅ **Smooth Animations**

---

**🎵 "Let the music play, and let your love story unfold..." 💕**

**Your romantic music player is ready to create magical moments!** ✨
