# 🎵 Audio Setup Guide - Valentine Week

## Current Status

**❌ Audio Not Playing** - You're seeing "Visual Mode Only" because:
1. No local audio file is present at `/static/music/song.mp3`
2. Spotify tracks don't have audio previews (previewUrl is null)

## ✅ Solution: Add Your Own Music

### Option 1: Upload "Meri Banogi Kya" (RECOMMENDED)

**Step 1: Get the Song**
- Find "Meri Banogi Kya" - Rito Riba, Rajat Nagpal
- Download as MP3 from:
  - YouTube: https://www.youtube.com/results?search_query=meri+banogi+kya
  - Use converter: https://ytmp3.cc or https://y2mate.com
  
**Step 2: Upload to Project**
```bash
# Place the file here:
/home/user/webapp/public/static/music/song.mp3

# Or use command line:
cd /home/user/webapp/public/static/music
# Then upload your song.mp3 file
```

**Step 3: Rebuild & Restart**
```bash
cd /home/user/webapp
npm run build
pm2 restart valentine-week
```

**Step 4: Test**
- Open: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai
- Click Day 1
- Click Play button
- 🎵 Music should play!

---

### Option 2: Use Any Romantic Song

You can use ANY MP3 file you like:

```bash
# Example songs to try:
- Meri Banogi Kya.mp3
- Perfect - Ed Sheeran.mp3
- Tum Hi Ho - Arijit Singh.mp3
- All of Me - John Legend.mp3
```

Just make sure:
1. File is named `song.mp3`
2. Located at: `/home/user/webapp/public/static/music/song.mp3`
3. Format: MP3 (most compatible)

---

### Option 3: Use Spotify Playlist with Audio Previews

If you don't have a local file, use a Spotify playlist that has preview URLs:

**Edit `/home/user/webapp/public/static/app.js`:**

```javascript
// Around line 16-35
const SPOTIFY_CONFIG = {
  // Change to a playlist with audio previews:
  playlistId: '37i9dQZF1DX50KOxCoe6eO', // Love Pop (has previews!)
  
  useBackendAPI: true,
  
  localBackgroundMusic: '/static/music/song.mp3',
  useLocalMusic: false, // ⚠️ Set to false to use Spotify instead
  
  fallbackToSpotify: true
};
```

Then rebuild:
```bash
cd /home/user/webapp
npm run build
pm2 restart valentine-week
```

**Note**: Only ~30-second previews available, not full songs.

---

## 🎯 Quick Fix Summary

**Fastest Way to Get Audio Working:**

1. **Download** "Meri Banogi Kya" from YouTube as MP3
2. **Rename** to `song.mp3`
3. **Upload** to `/home/user/webapp/public/static/music/song.mp3`
4. **Run**:
   ```bash
   cd /home/user/webapp && npm run build && pm2 restart valentine-week
   ```
5. **Test** at Day 1!

---

## 🔍 How to Verify

**Check if file exists:**
```bash
ls -lh /home/user/webapp/public/static/music/song.mp3
```

**Test in browser console:**
```javascript
// Open browser console (F12) and run:
fetch('/static/music/song.mp3', { method: 'HEAD' })
  .then(r => console.log('✅ File exists!', r.ok))
  .catch(e => console.log('❌ File not found'));
```

---

## ⚙️ Configuration Reference

### Current Settings (in app.js)

```javascript
const SPOTIFY_CONFIG = {
  playlistId: '37i9dQZF1DX50KOxCoe6eO',
  useBackendAPI: true,
  localBackgroundMusic: '/static/music/song.mp3',
  useLocalMusic: true, // ⭐ Set to true to play local file
  fallbackToSpotify: true
};
```

**What each option does:**

- `useLocalMusic: true` - Priority to local file
- `useLocalMusic: false` - Priority to Spotify
- `fallbackToSpotify: true` - Use Spotify if local file fails
- `localBackgroundMusic` - Path to your song file

---

## 🎵 Audio Priority Order

The app tries to play audio in this order:

1. **Local File First** (if `useLocalMusic: true`)
   - Checks: `/static/music/song.mp3`
   - If found: Plays your song ✅
   - If not found: Continue to #2

2. **Spotify Preview** (if local not found)
   - Checks: track.previewUrl
   - If found: Plays 30-second preview ✅
   - If not found: Continue to #3

3. **Visual Mode Only** (fallback)
   - Shows: "Visual Mode Only" message
   - No audio plays ❌

---

## 🐛 Troubleshooting

### "Visual Mode Only" still showing

**Problem**: Local file not found

**Solution**:
```bash
# Check file exists
ls -lh /home/user/webapp/public/static/music/

# Check file permissions
chmod 644 /home/user/webapp/public/static/music/song.mp3

# Rebuild
cd /home/user/webapp && npm run build && pm2 restart valentine-week
```

### No sound when clicking Play

**Problem**: Browser autoplay policy

**Solution**: Click anywhere on page first, then click Play button

### File size too large

**Problem**: MP3 file > 10MB

**Solution**: Compress the file:
```bash
# Use ffmpeg to reduce size
ffmpeg -i original.mp3 -b:a 128k -ar 44100 song.mp3
```

---

## 📝 File Structure

```
webapp/
├── public/
│   └── static/
│       └── music/
│           ├── song.mp3        ⬅️ Your music file goes here
│           └── README.md       ⬅️ Setup instructions
├── src/
│   └── index.tsx
├── package.json
└── ...
```

---

## 🎬 Demo

**Live URL**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai

**What you should see**:
- Day 1 opens with a beautiful UI
- Spotify player at bottom
- Click Play → Music starts 🎵
- Photos pulse with beat
- After 25 seconds: Proposal appears
- Click YES → Confetti! 🎉

---

## ✅ Success Checklist

- [ ] Song file downloaded
- [ ] Renamed to `song.mp3`
- [ ] Uploaded to `/home/user/webapp/public/static/music/song.mp3`
- [ ] File verified: `ls -lh /home/user/webapp/public/static/music/song.mp3`
- [ ] App rebuilt: `npm run build`
- [ ] App restarted: `pm2 restart valentine-week`
- [ ] Browser opened: Day 1
- [ ] Play button clicked
- [ ] 🎵 Music playing!

---

## 📞 Need Help?

**Check logs:**
```bash
pm2 logs valentine-week --nostream
```

**Test API:**
```bash
curl http://localhost:3000/api/spotify/playlist/37i9dQZF1DX50KOxCoe6eO
```

**Browser Console:**
- Open F12 → Console
- Look for 🎵 messages
- Check for errors

---

**🎵 Happy Valentine Week! Your love story deserves the perfect soundtrack. 💕**
