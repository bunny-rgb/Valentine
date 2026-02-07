# 🎨 Customization Guide - Make It Truly Yours

This guide will help you personalize the Valentine Week experience with your own photos, music, messages, and dates.

## 📅 Step 1: Set Your Own Dates

Edit `/public/static/app.js` and find the `VALENTINE_WEEK_CONFIG` object:

```javascript
const VALENTINE_WEEK_CONFIG = {
  // Change this to your desired start date
  startDate: new Date('2026-02-07T00:00:00'),
  days: [
    { id: 1, name: 'Propose Day', date: '2026-02-07', color: '#FFE5EC' },
    { id: 2, name: 'Rose Day', date: '2026-02-08', color: '#FF6B9D' },
    { id: 3, name: 'Chocolate Day', date: '2026-02-09', color: '#8B4513' },
    { id: 4, name: 'Teddy Day', date: '2026-02-10', color: '#FFF5E1' },
    { id: 5, name: 'Promise Day', date: '2026-02-11', color: '#E6E6FA' },
    { id: 6, name: 'Kiss Day', date: '2026-02-12', color: '#FFC0CB' },
    { id: 7, name: "Valentine's Day", date: '2026-02-14', color: '#FFD700' }
  ]
};
```

**💡 Tip**: For testing, set dates to today and the next few days to see all features immediately.

## 📸 Step 2: Add Your Personal Photos (Day 1)

### Option A: Upload Photos to the Project

1. Create a photos folder:
   ```bash
   mkdir -p /home/user/webapp/public/static/photos
   ```

2. Upload your photos (recommended: 5-10 photos, 300x400px)
   ```bash
   # Place your photos in: /home/user/webapp/public/static/photos/
   # photo1.jpg, photo2.jpg, photo3.jpg, etc.
   ```

3. Edit `/public/static/app.js` in the `loadProposeDay()` function:
   ```javascript
   const photos = [
     '/static/photos/photo1.jpg',
     '/static/photos/photo2.jpg',
     '/static/photos/photo3.jpg',
     '/static/photos/photo4.jpg',
     '/static/photos/photo5.jpg'
   ];
   ```

### Option B: Use Image URLs

If your photos are hosted elsewhere (Google Photos, Imgur, etc.):

```javascript
const photos = [
  'https://your-image-host.com/photo1.jpg',
  'https://your-image-host.com/photo2.jpg',
  'https://your-image-host.com/photo3.jpg',
  'https://your-image-host.com/photo4.jpg',
  'https://your-image-host.com/photo5.jpg'
];
```

## 🎵 Step 3: Add Your Romantic Song (Day 1)

### Upload Your Music

1. Get your song file (MP3 format recommended)
   ```bash
   # Place your song in: /home/user/webapp/public/static/music/
   mkdir -p /home/user/webapp/public/static/music
   # Copy your song.mp3 here
   ```

2. Edit `/public/static/app.js` in the `initializeMusic()` function:
   ```javascript
   function initializeMusic() {
     // Create audio element
     musicPlayer = new Audio('/static/music/song.mp3');
     musicPlayer.loop = false;
     
     // Auto-play after user interaction
     const playButton = document.getElementById('play-button');
     playButton.addEventListener('click', () => {
       if (musicPlayer.paused) {
         musicPlayer.play();
       } else {
         musicPlayer.pause();
       }
     });
     
     // Show proposal when song ends
     musicPlayer.addEventListener('ended', () => {
       document.getElementById('proposal-section').classList.remove('hidden');
       document.getElementById('proposal-section').scrollIntoView({ behavior: 'smooth' });
     });
     
     // Start beat detection
     setupBeatDetection();
   }
   ```

3. For beat detection (advanced), add this function:
   ```javascript
   function setupBeatDetection() {
     audioContext = new (window.AudioContext || window.webkitAudioContext)();
     analyser = audioContext.createAnalyser();
     const source = audioContext.createMediaElementSource(musicPlayer);
     
     source.connect(analyser);
     analyser.connect(audioContext.destination);
     
     analyser.fftSize = 256;
     const bufferLength = analyser.frequencyBinCount;
     const dataArray = new Uint8Array(bufferLength);
     
     function detectBeat() {
       analyser.getByteFrequencyData(dataArray);
       
       // Calculate average bass frequency
       let sum = 0;
       for (let i = 0; i < 10; i++) {
         sum += dataArray[i];
       }
       const average = sum / 10;
       
       // If beat detected (threshold: 200)
       if (average > 200) {
         const photos = document.querySelectorAll('.photo-frame');
         photos.forEach(photo => {
           photo.classList.add('beat-pulse');
           setTimeout(() => photo.classList.remove('beat-pulse'), 300);
         });
       }
       
       requestAnimationFrame(detectBeat);
     }
     
     detectBeat();
   }
   ```

## 🌹 Step 4: Customize Rose Day Messages (Day 2)

Edit `/public/static/app.js` in the `loadRoseDay()` function:

```javascript
const compliments = [
  "Your smile lights up my entire world 🌟",
  "You make every ordinary moment extraordinary 💫",
  "Your kindness touches my heart every day 💖",
  "I admire your strength and grace 🌹",
  "You inspire me to be a better person 🌈",
  "Your laughter is my favorite sound 🎵",
  "This rose isn't perfect… but it's yours 🌹"
];
```

**Replace with your own compliments:**
- Think about what makes her special
- Use specific memories or qualities
- Be genuine and heartfelt
- 7 messages total (one per petal)

## 🍫 Step 5: Customize Chocolate Messages (Day 3)

Edit `/public/static/app.js` in the `loadChocolateDay()` function:

```javascript
const chocolateMessages = [
  "You're sweeter than any chocolate 🍫",
  "Remember that time we... [add your memory] 💕",
  "[Your inside joke here] 😋",
  "You melt my heart like chocolate ❤️",
  "[Another sweet memory] 🌟",
  "[Something funny she said] 🎁",
  "Life is sweeter with you in it 🍬"
];
```

## 🧸 Step 6: Customize Teddy Day Message (Day 4)

The message is in `/public/static/app.js` in the `sendHug()` function:

```javascript
messageBox.innerHTML = `
  <p class="romantic-message text-2xl" style="color: #F4A460;">
    Whenever you miss me… imagine this. 💕
    [Add your own message here]
  </p>
`;
```

## 📖 Step 7: Write Your Promises (Day 5)

Edit `/public/static/app.js` - find the `promises` array:

```javascript
const promises = [
  "I promise to always make you smile, even on the toughest days 😊",
  "I promise to support your dreams and celebrate your victories 🌟",
  "I promise to listen with my heart, not just my ears 💖",
  "I promise to make every day special, not just the big occasions 🎉",
  "I promise to grow with you, through all of life's seasons 🌱",
  "I promise to cherish the little moments we share together ⏰",
  "Now... what promise do you want from me? 💭"
];
```

**Make them personal:**
- Think about what matters to your relationship
- Be specific about your intentions
- Include future plans and dreams
- Make them achievable and meaningful

## 💋 Step 8: Customize Kiss Day Message (Day 6)

Edit in the `loadKissDay()` function:

```javascript
<p class="romantic-message text-2xl text-pink-500">
  This one's reserved only for you. 😘
  [Add your own sweet message]
</p>
```

## ❤️ Step 9: Create Your Timeline (Day 7)

Edit `/public/static/app.js` in the `loadValentineDay()` function:

```javascript
const memories = [
  { 
    date: 'February 7', 
    title: 'The Day I Proposed', 
    description: 'You said yes, and my world changed forever 💍' 
  },
  { 
    date: 'February 8', 
    title: 'Rose Day', 
    description: 'Each petal represented a reason I love you 🌹' 
  },
  // Add your own memories here...
  {
    date: 'Our First Date',
    title: 'When I First Saw You',
    description: '[Add your memory]'
  },
  {
    date: 'That Special Moment',
    title: '[Your Memory Title]',
    description: '[Your Memory Description]'
  }
];
```

## 🎨 Step 10: Customize Colors (Optional)

Edit `/src/index.tsx` in the `tailwind.config`:

```javascript
colors: {
  'romantic-pink': '#FFE5EC',    // Change to your preferred pink
  'deep-pink': '#FF8FAB',        // Adjust intensity
  'rose-red': '#FF6B9D',         // Your favorite red
  // ... etc
}
```

## 🔧 Step 11: Test Your Changes

After making changes:

1. **Rebuild the project:**
   ```bash
   cd /home/user/webapp
   npm run build
   ```

2. **Restart the server:**
   ```bash
   pm2 restart valentine-week
   ```

3. **Test in browser:**
   - Check all 7 days
   - Test photo gallery
   - Verify music plays
   - Test all interactions

## 🚀 Step 12: Deploy Your Personalized Version

### For Testing (Use Today's Date)

Change the dates to today for immediate testing:

```javascript
const today = new Date();
const VALENTINE_WEEK_CONFIG = {
  startDate: today,
  days: [
    { id: 1, name: 'Propose Day', date: formatDate(today), ... },
    { id: 2, name: 'Rose Day', date: formatDate(addDays(today, 1)), ... },
    // etc.
  ]
};

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.setDate() + days);
  return result;
}
```

### For Production (Real Valentine Week)

Keep the actual Valentine Week dates (February 7-14).

## 📝 Quick Customization Checklist

- [ ] Update dates in `VALENTINE_WEEK_CONFIG`
- [ ] Add personal photos (5-10 images)
- [ ] Upload romantic song
- [ ] Customize rose petal compliments (7)
- [ ] Write chocolate box messages (7)
- [ ] Personalize teddy day message
- [ ] Create meaningful promises (6)
- [ ] Customize kiss day message
- [ ] Build timeline with real memories
- [ ] Update final proposal message
- [ ] Test all interactions
- [ ] Rebuild and deploy

## 💡 Pro Tips

1. **Use High-Quality Photos**
   - Resize to 300x400px for optimal loading
   - Use JPG format for photos, PNG for graphics
   - Compress images (use TinyPNG.com)

2. **Choose the Right Song**
   - Pick a song meaningful to your relationship
   - Ensure it's not too long (3-4 minutes ideal)
   - Test the beat detection with different songs

3. **Write from the Heart**
   - Be genuine, not overly poetic
   - Include inside jokes and shared memories
   - Be specific rather than generic
   - Show vulnerability

4. **Test Before the Big Day**
   - Run through all 7 days
   - Check on mobile devices
   - Verify all animations work
   - Test the countdown timer

5. **Backup Your Work**
   ```bash
   cd /home/user/webapp
   git add .
   git commit -m "Personalized for Valentine Week 2026"
   ```

## 🆘 Troubleshooting

### Photos Not Showing
- Check file paths are correct
- Verify images are in `/public/static/photos/`
- Check browser console for errors
- Ensure image URLs are accessible

### Music Not Playing
- Check file path: `/static/music/song.mp3`
- Verify MP3 format
- Check browser autoplay policies
- Test with user interaction first

### Dates Not Unlocking
- Verify system time is correct
- Check date format: `YYYY-MM-DDTHH:MM:SS`
- Test with dates set to today
- Clear browser cache

### Animations Not Smooth
- Reduce number of floating hearts
- Optimize image sizes
- Test on different browsers
- Check browser performance

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Test with simplified content first
4. Review the README.md for additional guidance

---

**Remember**: The best customization is one that's personal and meaningful to your relationship. Don't stress about perfection—focus on creating moments that matter. ❤️
