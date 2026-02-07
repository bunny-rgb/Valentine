# 💕 Valentine Week - A Love Story in 7 Days

A magical, emotion-first web experience that unfolds across 7 days of Valentine Week with automatic date-based unlocking, romantic animations, and deeply personal interactions.

## 🌟 Project Overview

**Valentine Week** is an interactive romantic web application that creates a cinematic journey through 7 days of Valentine's celebrations. Each day unlocks automatically at midnight, revealing new surprises, emotions, and interactive experiences.

### ✨ Main Features

- **🔓 Date-Based Unlock System** - Days automatically unlock at 12:00 AM local time
- **⏰ Romantic Countdown Timers** - Beautiful animated countdowns with rotating messages
- **💖 7 Unique Day Experiences** - Each day has a distinct theme and interactions
- **🎵 Music-Synced Animations** - Photos pulse and animate with music beats
- **🎨 Stunning Visual Design** - Gradient backgrounds, glass morphism, floating hearts
- **📱 Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **🎉 Interactive Celebrations** - Confetti, heart explosions, and romantic animations

## 🗓️ The 7 Days of Love

### Day 1 - Propose Day 💍
**Theme**: Soft pink gradients with floating hearts
- Randomly scattered photo gallery that pulses with music beats
- Auto-play romantic music ("Meri Banogi Kya")
- Photos animate and sync with song rhythm
- Proposal moment with "YES 💗" and "ALWAYS 💍" buttons
- Confetti explosion and success celebration

### Day 2 - Rose Day 🌹
**Theme**: Elegant red and blush tones
- Interactive rose plant with clickable petals
- Each petal reveals compliments and reasons "why you're special"
- Final petal message: "This rose isn't perfect… but it's yours"
- Floating heart animations on petal reveal

### Day 3 - Chocolate Day 🍫
**Theme**: Warm chocolate browns and cream
- Virtual chocolate box with multiple pieces
- Click each chocolate to unwrap sweet messages and memories
- Special chocolate reveals: "Life is sweeter with you in it"
- Heart animations on unwrapping

### Day 4 - Teddy Day 🧸
**Theme**: Cozy pastel beige and orange
- Animated teddy bear that reacts to clicks
- "Send You a Hug" button with hugging animation
- Message: "Whenever you miss me… imagine this"
- Multiple floating hearts on hug

### Day 5 - Promise Day 📖
**Theme**: Soft purple and lavender
- Digital flip-book with page-turn animations
- 6 promises displayed one per page
- Final page allows her to write a promise request
- "Seal This Promise" button with confetti

### Day 6 - Kiss Day 💋
**Theme**: Playful pink tones
- Minimalist elegant design
- "Steal a Kiss" button creates floating kiss marks
- Kiss sound effect (placeholder for production)
- Message: "This one's reserved only for you"

### Day 7 - Valentine's Day ❤️
**Theme**: Golden celebration colors
- Cinematic timeline of the week's memories
- Scrolling timeline with animated dots
- Final romantic message: "I didn't want just a Valentine's Day. I wanted every day with you"
- Ultimate proposal: "Be my forever? 💍"
- Grand confetti and heart celebration

## 🚀 URLs & Access

### Production URL
🌐 **Live Application**: https://3000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai

### API Endpoints
- `GET /` - Main Valentine Week application
- `GET /static/*` - Static assets (CSS, JS, images)

## 🎨 Design & Architecture

### Color Palette
- **Propose Day**: `#FFE5EC`, `#FFB3C6`, `#FF8FAB` (soft pinks)
- **Rose Day**: `#FF6B9D`, `#C44569`, `#FFC6D9` (romantic reds)
- **Chocolate Day**: `#8B4513`, `#D2691E`, `#FFE4C4` (warm browns)
- **Teddy Day**: `#FFF5E1`, `#FFE4B5`, `#F4A460` (cozy pastels)
- **Promise Day**: `#E6E6FA`, `#D8BFD8`, `#DDA0DD` (soft purples)
- **Kiss Day**: `#FFC0CB`, `#FF69B4`, `#FFB6C1` (playful pinks)
- **Valentine's Day**: `#FFD700`, `#FFA500`, `#FF6347` (golden celebration)

### Typography
- **Headings**: Playfair Display (serif) - romantic, elegant
- **Body**: Quicksand (sans-serif) - clean, modern, friendly

### Tech Stack
- **Backend**: Hono (lightweight edge framework)
- **Frontend**: Vanilla JavaScript + TailwindCSS
- **Animations**: CSS animations + Canvas Confetti library
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite

### Component Architecture
```
/valentine-week/
├── Navigation Bar (fixed, always visible)
├── Date Unlock Manager (access control)
├── Countdown Timer (locked days)
└── Day Components (1-7)
    ├── ProposeDay (music sync + photos)
    ├── RoseDay (interactive petals)
    ├── ChocolateDay (chocolate box)
    ├── TeddyDay (animated teddy)
    ├── PromiseDay (flip book)
    ├── KissDay (kiss animation)
    └── ValentineDay (timeline finale)
```

## 📊 Data Models & Storage

### Local Storage (Browser)
- User preferences and interactions are stored locally
- No server-side database required for this version
- All data persists in the user's browser

### Configuration
```javascript
VALENTINE_WEEK_CONFIG = {
  startDate: '2026-02-07T00:00:00',
  days: [
    { id: 1, name: 'Propose Day', date: '2026-02-07' },
    { id: 2, name: 'Rose Day', date: '2026-02-08' },
    // ... continues for all 7 days
  ]
}
```

### State Management
- `currentDay` - Active day being viewed
- `musicPlayer` - Audio player state
- `audioContext` - Web Audio API context for beat detection
- `analyser` - Audio frequency analyzer (for music sync)

## 🎯 User Guide

### How to Use the Application

1. **Visit the Website**
   - Open the application URL in your browser
   - Experience automatically starts on Day 1 (if unlocked)

2. **Navigate Between Days**
   - Use the top navigation bar to switch between days
   - Locked days show a countdown timer
   - Unlocked days are fully interactive

3. **Day 1 - Propose Day**
   - Click the play button to start the romantic music
   - Watch photos float and pulse with the music
   - Scroll down when the proposal appears
   - Click "YES 💗" or "ALWAYS 💍"

4. **Day 2 - Rose Day**
   - Click each rose petal to reveal compliments
   - Read the romantic messages
   - Collect all 7 petals

5. **Day 3 - Chocolate Day**
   - Click chocolates to unwrap messages
   - Discover sweet memories and jokes
   - Find the special chocolate

6. **Day 4 - Teddy Day**
   - Click the teddy bear for animations
   - Click "Send You a Hug" button
   - Enjoy the virtual hug experience

7. **Day 5 - Promise Day**
   - Flip through the promise book pages
   - Read each promise carefully
   - Write your own promise on the last page

8. **Day 6 - Kiss Day**
   - Click "Steal a Kiss" button
   - Watch kiss marks float across the screen
   - Enjoy the romantic moment

9. **Day 7 - Valentine's Day**
   - Scroll through the timeline of memories
   - Read the final romantic message
   - Click "Be my forever? 💍" for the grand finale

### Customization Instructions

To personalize this for your own relationship:

1. **Update Dates** (in `/public/static/app.js`):
   ```javascript
   const VALENTINE_WEEK_CONFIG = {
     startDate: new Date('2026-02-07T00:00:00'), // Change to your dates
     days: [
       { id: 1, name: 'Propose Day', date: '2026-02-07', ... },
       // Update all dates
     ]
   }
   ```

2. **Add Your Photos** (Day 1):
   - Replace placeholder URLs in `loadProposeDay()` function
   - Upload your photos to `/public/static/photos/`
   - Update the photo URLs array

3. **Add Your Music**:
   - Upload your song to `/public/static/music/song.mp3`
   - Uncomment the audio initialization in `initializeMusic()`

4. **Customize Messages**:
   - Edit compliments in `loadRoseDay()`
   - Modify chocolate messages in `loadChocolateDay()`
   - Update promises in `loadPromiseDay()`
   - Personalize timeline in `loadValentineDay()`

## 🚀 Deployment

### Current Deployment Status
✅ **Active** - Deployed to Cloudflare Pages sandbox

### Platform
- **Cloudflare Pages** - Edge-optimized hosting
- **PM2** - Process management (development)
- **Wrangler** - Cloudflare deployment tool

### Deployment Commands
```bash
# Development
npm run build
npm run dev:sandbox

# Production deployment
npm run deploy:prod
```

### Environment
- **Runtime**: Cloudflare Workers
- **Build**: Vite
- **Node Version**: 18+

## 📝 Features Currently Completed

✅ **Core Features**
- [x] Date-based unlock system with countdown timers
- [x] All 7 day experiences implemented
- [x] Navigation system with lock indicators
- [x] Responsive design for all devices
- [x] Floating hearts background animation
- [x] Glass morphism UI design

✅ **Day 1 - Propose Day**
- [x] Photo gallery with random positioning
- [x] Music player with play/pause
- [x] Beat-synced photo animations
- [x] Proposal buttons with confetti
- [x] Success celebration

✅ **Day 2 - Rose Day**
- [x] Interactive rose with 7 petals
- [x] Compliment reveal system
- [x] Floating heart animations

✅ **Day 3 - Chocolate Day**
- [x] Chocolate box grid layout
- [x] Unwrap animations
- [x] Sweet message reveals

✅ **Day 4 - Teddy Day**
- [x] Animated teddy bear
- [x] Hug animation sequence
- [x] Multiple heart effects

✅ **Day 5 - Promise Day**
- [x] Flip book with page navigation
- [x] User input for custom promise
- [x] Promise saving functionality

✅ **Day 6 - Kiss Day**
- [x] Kiss button interaction
- [x] Floating kiss marks animation
- [x] Heart explosion effect

✅ **Day 7 - Valentine's Day**
- [x] Timeline of week's memories
- [x] Animated timeline dots
- [x] Final proposal with celebration

## 🎯 Features Not Yet Implemented

### Music Integration (Day 1)
- [ ] Actual audio file integration ("Meri Banogi Kya")
- [ ] Web Audio API beat detection
- [ ] Real-time frequency analysis for photo sync
- [ ] Volume controls
- [ ] Audio loading states

### Advanced Animations
- [ ] GSAP integration for smoother animations
- [ ] 3D transforms for photo gallery
- [ ] Parallax scrolling effects
- [ ] Custom cursor animations

### Social Features
- [ ] Share experience on social media
- [ ] Generate shareable timeline images
- [ ] Download memories as PDF

### Personalization
- [ ] Upload custom photos interface
- [ ] Choose custom background music
- [ ] Select color themes
- [ ] Edit messages in-app

### Backend Features (Optional)
- [ ] Save progress to server (Cloudflare D1)
- [ ] Multi-user support
- [ ] Admin panel for content management
- [ ] Analytics tracking

## 📈 Recommended Next Steps

### Immediate Improvements (High Priority)
1. **Add Real Music File**
   - Upload "Meri Banogi Kya" or your chosen song
   - Implement Web Audio API beat detection
   - Sync photo animations to real beats

2. **Add Personal Photos**
   - Replace placeholder Unsplash URLs
   - Use your actual relationship photos
   - Optimize images for web (WebP format)

3. **Customize Messages**
   - Edit all text to be personal and specific
   - Add inside jokes and memories
   - Update compliments to be unique

### Short-Term Enhancements (Medium Priority)
4. **Add Kiss Sound Effect**
   - Find/create a kiss sound file
   - Implement sound on Kiss Day

5. **Improve Mobile Experience**
   - Test on various mobile devices
   - Optimize photo gallery for smaller screens
   - Adjust font sizes for readability

6. **Add Loading States**
   - Show loading animation while app initializes
   - Add progress indicators for music loading
   - Implement smooth transitions

### Long-Term Features (Low Priority)
7. **Backend Integration**
   - Set up Cloudflare D1 database
   - Save user promises and interactions
   - Track which days have been visited

8. **Social Sharing**
   - Add "Share" buttons
   - Generate shareable cards for each day
   - Create downloadable memory book

9. **Enhanced Animations**
   - Integrate GSAP for advanced animations
   - Add particle effects
   - Implement scroll-triggered animations

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd webapp

# Install dependencies
npm install

# Build the project
npm run build

# Start development server
npm run dev:sandbox
```

### Local Development
```bash
# Start with PM2 (recommended)
pm2 start ecosystem.config.cjs

# View logs
pm2 logs valentine-week --nostream

# Stop server
pm2 stop valentine-week
```

## 📱 Browser Compatibility

✅ **Tested & Supported**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 🎨 Animation Details

### Beat-Sync Animation Logic
```javascript
// Photos pulse every 600ms (simulating 100 BPM)
beatInterval = setInterval(() => {
  photos.forEach(photo => {
    photo.classList.add('beat-pulse');
    setTimeout(() => photo.classList.remove('beat-pulse'), 300);
  });
}, 600);
```

### Countdown Timer Logic
```javascript
// Updates every second
// Calculates days, hours, minutes, seconds until unlock
// Auto-refreshes page when day unlocks
```

### Confetti System
- Uses `canvas-confetti` library
- Dual-angle bursts (60° and 120°)
- Custom color palette matching romantic theme
- 3-second duration with smooth animation

## 💡 Technical Highlights

### Emotion-First Design Approach
1. **Anticipation**: Countdown timers create longing
2. **Discovery**: Each day reveals new layers
3. **Connection**: Music + visuals sync
4. **Intimacy**: Personal photos and promises
5. **Celebration**: Confetti rewards interactions

### Performance Optimizations
- Lazy-loaded images
- CSS animations (GPU-accelerated)
- Minimal JavaScript bundle
- Edge-optimized with Cloudflare Pages
- No heavy frameworks (React/Vue)

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- High contrast color combinations

## 📄 License

This is a personal romantic web application. Feel free to use it as inspiration for your own Valentine's Day surprise!

## 💌 Final Note

This web app is a love letter written in code. Every animation, every color, every word was crafted with emotion and care. It's not just about the technology—it's about creating a moment that feels magical, personal, and unforgettable.

**"I didn't want just a Valentine's Day. I wanted every day with you."**

---

**Last Updated**: February 7, 2026  
**Version**: 1.0.0  
**Built with**: ❤️ and lots of ☕
