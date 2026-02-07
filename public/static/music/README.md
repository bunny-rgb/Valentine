# Background Music Setup

## Add Your Own Music

To enable audio playback on Day 1 (Propose Day), add your song file here:

### Quick Setup:
1. **Find your song**: "Meri Banogi Kya" or any romantic song you like
2. **Convert to MP3** (if needed)
3. **Rename** the file to `song.mp3`
4. **Upload** to: `/home/user/webapp/public/static/music/song.mp3`

### Upload Methods:

**Method 1: Using Terminal (if you have the file on your computer)**
```bash
# From your local machine, use scp or upload via file manager
# The file should be placed at: /home/user/webapp/public/static/music/song.mp3
```

**Method 2: Download from URL**
```bash
cd /home/user/webapp/public/static/music
# Replace URL with your song link
wget -O song.mp3 "YOUR_SONG_URL_HERE"
```

**Method 3: Use YouTube to MP3 Converter**
- Find "Meri Banogi Kya" on YouTube
- Use a converter: https://ytmp3.cc
- Download as MP3
- Upload to `/home/user/webapp/public/static/music/song.mp3`

## Configuration

After uploading your song, rebuild the app:

```bash
cd /home/user/webapp
npm run build
pm2 restart valentine-week
```

## Test

Open the app and click Day 1 - the music should play automatically!

**Demo URL**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai

---

**Note**: If no local file is found, the app will fall back to Spotify playlist (visual mode only).
