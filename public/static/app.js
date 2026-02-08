// Valentine Week Configuration
const VALENTINE_WEEK_CONFIG = {
  // Set your Valentine Week start date (February 8, 2026 - Propose Day)
  startDate: new Date('2026-02-08T00:00:00'),
  // PREVIEW MODE: Set to true to unlock all days for preview
  previewMode: false, // Change to false for production
  days: [
    { id: 1, name: 'Propose Day', date: '2026-02-08', color: '#FFE5EC' },
    { id: 2, name: 'Chocolate Day', date: '2026-02-09', color: '#8B4513' },
    { id: 3, name: 'Teddy Day', date: '2026-02-10', color: '#FFF5E1' },
    { id: 4, name: 'Promise Day', date: '2026-02-11', color: '#E6E6FA' },
    { id: 5, name: 'Hug Day', date: '2026-02-12', color: '#FFB6C1' },
    { id: 6, name: 'Kiss Day', date: '2026-02-13', color: '#FFC0CB' },
    { id: 7, name: "Valentine's Day", date: '2026-02-14', color: '#FFD700' }
  ]
};

// Music Configuration
const MUSIC_CONFIG = {
  // ⭐ LOCAL PLAYLIST (YOUR SONGS!) - Will play in order
  useLocalPlaylist: true, // Set to true to use local songs
  
  // 🎵 TIME-BASED PLAYLIST SWITCHING
  // Day 2 (Chocolate Day) special playlist unlocks on 2026-02-09 00:00:00
  day2UnlockDate: new Date('2026-02-09T00:00:00'),
  
  // Original playlist (until Day 2 unlocks)
  originalPlaylist: [
    {
      name: 'Meri Banogi Kya',
      artist: 'Rito Riba, Rajat Nagpal',
      album: 'Meri Banogi Kya',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/meri-banogi-kya.mp3',
      duration: 215000 // 3:35 in milliseconds
    },
    {
      name: 'Tainu Khabar Nahi',
      artist: 'Sachin-Jigar, Arijit Singh',
      album: 'Munjya',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF6347"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/tainu-khabar-nahi.mp3',
      duration: 188000 // 3:08
    },
    {
      name: 'Zaalima',
      artist: 'Arijit Singh, Harshdeep Kaur',
      album: 'Raees',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DC143C"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EZ%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/zaalima.mp3',
      duration: 299000 // 4:59
    },
    {
      name: 'O Meri Laila',
      artist: 'Atif Aslam, Jyotica Tangri',
      album: 'Laila Majnu',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EO%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/o-meri-laila.mp3',
      duration: 273000 // 4:33
    },
    {
      name: 'Samjhawan',
      artist: 'Arijit Singh, Shreya Ghoshal',
      album: 'Humpty Sharma Ki Dulhania',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23C71585"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/samjhawan.mp3',
      duration: 269000 // 4:29
    },
    {
      name: 'Tum Ho Toh',
      artist: 'Vishal Mishra',
      album: 'Saiyaara',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF4500"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/tum-ho-toh.mp3',
      duration: 318000 // 5:18
    },
    {
      name: 'Darkhaast',
      artist: 'Arijit Singh, Sunidhi Chauhan',
      album: 'Shivaay',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DA70D6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ED%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/darkhaast.mp3',
      duration: 312000 // 5:12
    }
  ],
  
  // 🆕 Day 2 Special Playlist (Chocolate Day songs - unlocks on Feb 9, 2026)
  day2Playlist: [
    {
      name: 'Mohabbat Ho Na Jaye',
      artist: 'Sonu Nigam',
      album: 'Kasoor',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/mohabbat-ho-na-jaye.mp3',
      duration: 216000 // ~3:36
    },
    {
      name: 'Tauba Tumhare Ishare',
      artist: 'Kumar Sanu, Alka Yagnik',
      album: 'Chalte Chalte',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DC143C"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/tauba-tumhare-ishare.mp3',
      duration: 207000 // ~3:27
    },
    {
      name: 'Chori Chori Sapnon Mein',
      artist: 'Alka Yagnik, Udit Narayan',
      album: 'Chal Mere Bhai',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EC%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/chori-chori-sapnon-mein.mp3',
      duration: 373000 // ~6:13
    },
    {
      name: 'Dil Kaa Jo Haal Hai',
      artist: 'Kumar Sanu',
      album: 'Dil Kaa Jo Haal Hai',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23C71585"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ED%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/dil-kaa-jo-haal-hai.mp3',
      duration: 387000 // ~6:27
    },
    {
      name: 'Jo Haal Dil Ka',
      artist: 'Kumar Sanu, Alka Yagnik',
      album: 'Sarfarosh',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF6EB4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EJ%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/jo-haal-dil-ka.mp3',
      duration: 400000 // ~6:40
    },
    {
      name: 'Pyar Ko Ho Jane Do',
      artist: 'Kumar Sanu',
      album: 'Dil Kaa Kya Kasoor',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF4500"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EP%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/pyar-ko-ho-jane-do.mp3',
      duration: 393000 // ~6:33
    },
    {
      name: 'Saagar Jaisi Aankhonwali',
      artist: 'S.P. Balasubrahmanyam',
      album: 'Saagar',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%2300CED1"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/saagar-jaisi-aankhonwali.mp3',
      duration: 367000 // ~6:07
    },
    {
      name: 'Suno Na Suno Na',
      artist: 'Anuradha Paudwal',
      album: 'Chalte Chalte',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DA70D6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/suno-na-suno-na.mp3',
      duration: 438000 // ~7:18
    },
    {
      name: 'Hum Tumko Nigahon Mein',
      artist: 'Udit Narayan, Alka Yagnik',
      album: 'Garv',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/hum-tumko-nigahon-mein.mp3',
      duration: 452000 // ~7:32
    },
    {
      name: 'Chand Se Parda',
      artist: 'Mohammad Rafi',
      album: 'Aaya Sawan Jhoom Ke',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DC143C"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EC%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/chand-se-parda.mp3',
      duration: 479000 // ~7:59
    },
    {
      name: 'Humko Sirf Tumse',
      artist: 'Udit Narayan, Alka Yagnik',
      album: 'Barsaat',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF6EB4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/humko-sirf-tumse.mp3',
      duration: 518000 // ~8:38
    },
    {
      name: 'Mere Mehboob Mere Sanam',
      artist: 'Kumar Sanu, Alka Yagnik',
      album: 'Duplicate',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23C71585"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/mere-mehboob-mere-sanam.mp3',
      duration: 559000 // ~9:19
    }
  ],
  
  // Dynamic playlist getter - returns appropriate playlist based on date
  get localPlaylist() {
    const now = new Date();
    const isDay2Unlocked = now >= this.day2UnlockDate;
    return isDay2Unlocked ? this.day2Playlist : this.originalPlaylist;
  },
  
  // Fallback to Spotify if local files fail
  playlistId: '37i9dQZF1DX50KOxCoe6eO',
  useBackendAPI: true,
  fallbackToSpotify: false // Set to true to fallback to Spotify if local fails
};

// Global State
let currentDay = 1;
let musicPlayer = null;
let audioContext = null;
let analyser = null;
let spotifyPlaylist = null;
let currentTrackIndex = 0;
let isPlaying = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  createFloatingHearts();
  updateNavigationButtons();
  loadDay(1); // Start with Day 1
  
  // Show preview mode banner
  if (VALENTINE_WEEK_CONFIG.previewMode) {
    showPreviewBanner();
  }
});

// Show preview mode banner
function showPreviewBanner() {
  const banner = document.createElement('div');
  banner.id = 'preview-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  `;
  banner.innerHTML = `
    ✨ PREVIEW MODE - All Days Unlocked ✨
    <span style="margin-left: 10px; font-size: 12px; opacity: 0.9;">
      Set previewMode: false in config for production
    </span>
  `;
  document.body.appendChild(banner);
  
  // Adjust body padding to account for banner
  document.body.style.paddingTop = '40px';
}

// Create floating hearts background
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 4 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(heart);
  }
}

// Check if day is unlocked
function isDayUnlocked(dayNumber) {
  // Preview mode unlocks all days
  if (VALENTINE_WEEK_CONFIG.previewMode) {
    return true;
  }
  
  const today = new Date();
  const dayConfig = VALENTINE_WEEK_CONFIG.days[dayNumber - 1];
  const dayDate = new Date(dayConfig.date + 'T00:00:00');
  return today >= dayDate;
}

// Update navigation buttons based on unlock status
function updateNavigationButtons() {
  const buttons = document.querySelectorAll('.day-nav-btn');
  buttons.forEach(btn => {
    const day = parseInt(btn.dataset.day);
    const unlocked = isDayUnlocked(day);
    
    if (!unlocked) {
      btn.classList.add('locked');
      btn.disabled = false; // Keep clickable to show countdown
      btn.title = 'Click to see countdown';
    } else {
      btn.classList.remove('locked');
      btn.disabled = false;
    }
    
    if (day === currentDay) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Switch to a different day
function switchDay(dayNumber) {
  if (!isDayUnlocked(dayNumber)) {
    showLockedMessage(dayNumber);
    return;
  }
  
  currentDay = dayNumber;
  updateNavigationButtons();
  loadDay(dayNumber);
}

// Show locked day message with countdown
function showLockedMessage(dayNumber) {
  const dayConfig = VALENTINE_WEEK_CONFIG.days[dayNumber - 1];
  const content = document.getElementById('main-content');
  
  // Update current day to show active state
  currentDay = dayNumber;
  updateNavigationButtons();
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="glass-card-locked p-12 text-center animate-fade-in">
        <div class="lock-icon mb-8">
          <i class="fas fa-lock"></i>
        </div>
        <h2 class="text-4xl font-bold text-rose-red mb-4">${dayConfig.name}</h2>
        <p class="text-xl text-gray-600 mb-8">This special day is still locked...</p>
        
        <div id="countdown-${dayNumber}" class="countdown-display mb-8"></div>
        
        <div class="romantic-message text-lg" id="waiting-message-${dayNumber}">
          Good things take time 💕
        </div>
      </div>
    </div>
  `;
  
  startCountdown(dayNumber);
  rotateWaitingMessages(dayNumber);
}

// Countdown timer
function startCountdown(dayNumber) {
  const dayConfig = VALENTINE_WEEK_CONFIG.days[dayNumber - 1];
  const targetDate = new Date(dayConfig.date + 'T00:00:00');
  const countdownElement = document.getElementById('countdown-' + dayNumber);
  
  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
      // Day unlocked! Reload page
      location.reload();
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `
      <div class="flex justify-center gap-8 flex-wrap">
        <div class="countdown-unit">
          <div class="countdown-number">${days}</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-number">${hours}</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-number">${minutes}</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-unit">
          <div class="countdown-number">${seconds}</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    `;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Rotate waiting messages
function rotateWaitingMessages(dayNumber) {
  const messages = [
    "Good things take time 💕",
    "Almost there… patience, my love 🕰️",
    "Tomorrow is worth the wait 💖",
    "Every moment brings us closer 🌹",
    "The best surprises are worth waiting for 🎁"
  ];
  
  let index = 0;
  const messageElement = document.getElementById('waiting-message-' + dayNumber);
  
  setInterval(() => {
    messageElement.style.opacity = '0';
    setTimeout(() => {
      index = (index + 1) % messages.length;
      messageElement.textContent = messages[index];
      messageElement.style.opacity = '1';
    }, 500);
  }, 4000);
}

// Load specific day content
function loadDay(dayNumber) {
  switch(dayNumber) {
    case 1: loadProposeDay(); break;
    case 2: loadChocolateDay(); break;
    case 3: loadTeddyDay(); break;
    case 4: loadPromiseDay(); break;
    case 5: loadHugDay(); break;
    case 6: loadKissDay(); break;
    case 7: loadValentineDay(); break;
  }
}

// ==================== DAY 1: PROPOSE DAY ====================
function loadProposeDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold text-rose-red mb-4">💍 Propose Day</h2>
        <p class="romantic-message text-2xl mb-8 animate-slide-up" style="animation-delay: 0.5s">
          "I didn't bring roses… I built a moment instead."
        </p>
      </div>
      
      <!-- Photo Gallery -->
      <div id="photo-gallery" class="relative h-[600px] mb-12" style="perspective: 1000px;">
        <!-- Photos will be dynamically placed here -->
        <div id="photo-hint" class="text-center text-lg text-rose-red mb-4 animate-pulse" style="position: absolute; top: -40px; left: 0; right: 0; z-index: 1;">
          💝 Click on photos to reveal the surprise...
        </div>
      </div>
      
      <!-- Proposal Section (hidden initially) -->
      <div id="proposal-section" class="glass-card p-12 text-center hidden animate-fade-in">
        <div class="mb-8">
          <h2 class="text-5xl font-bold text-rose-red mb-4">
            Anku 🧸
          </h2>
          <p class="text-2xl text-gray-700 mb-4 italic">
            "In a world full of temporary things, you are my forever..."
          </p>
          <h3 class="text-4xl font-bold text-rose-red mb-6">
            Will you be mine? 💕
          </h3>
          <p class="text-lg text-gray-600 mb-8">
            Through every sunrise and every moonlit night,<br/>
            I want to walk this journey by your side, holding your hand,<br/>
            making memories that last a lifetime... 🌹
          </p>
        </div>
        <div class="flex gap-8 justify-center flex-wrap">
          <button onclick="handleProposalResponse(true)" class="proposal-btn proposal-btn-yes glow-on-hover">
            YES, FOREVER 💗
          </button>
          <button onclick="handleProposalResponse(true)" class="proposal-btn proposal-btn-always glow-on-hover">
            ALWAYS & FOREVER 💍
          </button>
        </div>
      </div>
      
      <!-- Success Message (hidden initially) -->
      <div id="success-message" class="success-message text-center hidden">
        <h3 class="text-4xl font-bold mb-4">You just made my world complete. 🌍💕</h3>
        <p class="text-2xl">I promise to cherish every moment with you.</p>
      </div>
    </div>
  `;
  
  // Create Spotify music player controls at the bottom
  createSpotifyPlayer();
  
  // Note: In production, replace with actual photo URLs
  const photos = [
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop'
  ];
  
  createPhotoGallery(photos);
  setTimeout(initializeMusic, 1000);
}

// Create scattered photo gallery
function createPhotoGallery(photos) {
  const gallery = document.getElementById('photo-gallery');
  let removedCount = 0;
  const totalPhotos = photos.length;
  
  photos.forEach((photoUrl, index) => {
    const container = document.createElement('div');
    container.className = 'photo-container';
    container.style.cursor = 'pointer';
    
    const frame = document.createElement('div');
    frame.className = 'photo-frame';
    frame.style.width = '250px';
    frame.style.height = '300px';
    
    const img = document.createElement('img');
    img.src = photoUrl;
    img.alt = 'Memory ' + (index + 1);
    
    frame.appendChild(img);
    container.appendChild(frame);
    gallery.appendChild(container);
    
    // Random position
    randomizePhotoPosition(container);
    
    // Animate on load
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0) rotate(' + (Math.random() * 10 - 5) + 'deg)';
    }, index * 200);
    
    // Click handler to remove photo with slide animation
    container.addEventListener('click', function() {
      if (container.classList.contains('removing')) return; // Prevent double-click
      
      container.classList.add('removing');
      
      // Random slide-out direction
      const directions = [
        { x: -2000, y: 0 },      // Left
        { x: 2000, y: 0 },       // Right
        { x: 0, y: -2000 },      // Up
        { x: 0, y: 2000 },       // Down
        { x: -1500, y: -1500 },  // Top-left
        { x: 1500, y: -1500 },   // Top-right
        { x: -1500, y: 1500 },   // Bottom-left
        { x: 1500, y: 1500 }     // Bottom-right
      ];
      
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const rotation = Math.random() * 720 - 360; // Random spin
      
      // Apply slide-out animation
      container.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      container.style.transform = `translate(${direction.x}px, ${direction.y}px) rotate(${rotation}deg) scale(0.3)`;
      container.style.opacity = '0';
      
      // Remove from DOM after animation
      setTimeout(() => {
        container.remove();
        removedCount++;
        
        // Check if all photos removed
        if (removedCount === totalPhotos) {
          showProposalSection();
        }
      }, 600);
    });
  });
}

// Randomize photo positions
function randomizePhotoPosition(container) {
  const gallery = document.getElementById('photo-gallery');
  if (!gallery) return;
  
  const maxX = gallery.clientWidth - 250;
  const maxY = gallery.clientHeight - 300;
  
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  const rotation = Math.random() * 20 - 10;
  
  container.style.left = x + 'px';
  container.style.top = y + 'px';
  container.style.transform = `rotate(${rotation}deg)`;
  container.style.opacity = '0';
}

// Show proposal section after all photos removed
function showProposalSection() {
  console.log('✨ All photos removed! Showing proposal...');
  
  const proposalSection = document.getElementById('proposal-section');
  if (proposalSection) {
    // Remove hidden class and show with animation
    proposalSection.classList.remove('hidden');
    proposalSection.classList.add('proposal-section-appear');
    
    // Smooth scroll to proposal
    setTimeout(() => {
      proposalSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
    
    // Add sparkle effect
    createProposalSparkles();
    
    // Add confetti celebration
    setTimeout(() => {
      createCelebrationConfetti();
    }, 500);
  }
}

// Create sparkle effects around proposal
function createProposalSparkles() {
  const proposalSection = document.getElementById('proposal-section');
  if (!proposalSection) return;
  
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = ['✨', '💖', '💕', '💗', '⭐'][Math.floor(Math.random() * 5)];
      sparkle.style.position = 'fixed';
      sparkle.style.left = (Math.random() * window.innerWidth) + 'px';
      sparkle.style.top = (Math.random() * window.innerHeight) + 'px';
      sparkle.style.fontSize = (Math.random() * 30 + 20) + 'px';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '1000';
      sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 2000);
    }, i * 80);
  }
}

// Create celebration confetti
function createCelebrationConfetti() {
  const colors = ['#FFE5EC', '#FF6B9D', '#FFD700', '#FF1493', '#FFC0CB'];
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = (Math.random() * 100) + '%';
      confetti.style.top = '-10px';
      confetti.style.width = (Math.random() * 10 + 5) + 'px';
      confetti.style.height = (Math.random() * 20 + 10) + 'px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.opacity = '0.8';
      confetti.style.borderRadius = '2px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '999';
      confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }, i * 30);
  }
}

// ==================== SPOTIFY MUSIC PLAYER ====================

// Create Spotify Player UI
function createSpotifyPlayer() {
  // Check if player already exists - don't recreate it!
  if (document.getElementById('spotify-player')) {
    console.log('🎵 Music player already exists, skipping creation');
    return;
  }
  
  // Create music player container at bottom
  const playerHTML = `
    <div id="spotify-player" class="spotify-player-container">
      <div class="spotify-player glass-card">
        <!-- Mode Indicator -->
        <div class="playback-mode" id="playback-mode" style="display: none;">
          <i class="fas fa-eye"></i> Visual Mode
        </div>
        
        <!-- Now Playing Info -->
        <div class="now-playing">
          <div class="album-art" id="album-art">
            <i class="fas fa-music"></i>
          </div>
          <div class="track-info">
            <div class="track-name" id="track-name">Click play to start</div>
            <div class="artist-name" id="artist-name">Your Valentine Playlist</div>
          </div>
        </div>
        
        <!-- Playback Controls -->
        <div class="playback-controls">
          <button class="control-btn" onclick="previousTrack()" title="Previous">
            <i class="fas fa-step-backward"></i>
          </button>
          <button class="control-btn play-btn" id="spotify-play-btn" onclick="toggleSpotifyPlayback()" title="Play">
            <i class="fas fa-play"></i>
          </button>
          <button class="control-btn" onclick="nextTrack()" title="Next">
            <i class="fas fa-step-forward"></i>
          </button>
        </div>
        
        <!-- Progress Bar -->
        <div class="progress-container">
          <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="time-display">
            <span id="current-time">0:00</span>
            <span id="duration">0:00</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', playerHTML);
  
  // Add progress bar click/drag handler for seeking
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    // Click to seek
    progressBar.addEventListener('click', function(e) {
      if (!musicPlayer || !musicPlayer.duration) return;
      
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const seekTime = percent * musicPlayer.duration;
      
      musicPlayer.currentTime = seekTime;
      updateProgress();
      
      console.log('⏩ Seeked to:', formatTime(Math.floor(seekTime)));
    });
    
    // Drag to seek
    let isDragging = false;
    
    progressBar.addEventListener('mousedown', function(e) {
      isDragging = true;
      e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
      if (!isDragging || !musicPlayer || !musicPlayer.duration) return;
      
      const rect = progressBar.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const seekTime = percent * musicPlayer.duration;
      
      musicPlayer.currentTime = seekTime;
      updateProgress();
    });
    
    document.addEventListener('mouseup', function() {
      isDragging = false;
    });
    
    // Touch support for mobile
    progressBar.addEventListener('touchstart', function(e) {
      isDragging = true;
      e.preventDefault();
    });
    
    document.addEventListener('touchmove', function(e) {
      if (!isDragging || !musicPlayer || !musicPlayer.duration) return;
      
      const touch = e.touches[0];
      const rect = progressBar.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
      const seekTime = percent * musicPlayer.duration;
      
      musicPlayer.currentTime = seekTime;
      updateProgress();
      e.preventDefault();
    });
    
    document.addEventListener('touchend', function() {
      isDragging = false;
    });
  }
  
  // Load Spotify playlist only once
  loadSpotifyPlaylist();
}

// Load Spotify Playlist
async function loadSpotifyPlaylist() {
  try {
    // Priority 1: Use local playlist if enabled
    if (MUSIC_CONFIG.useLocalPlaylist && MUSIC_CONFIG.localPlaylist) {
      spotifyPlaylist = MUSIC_CONFIG.localPlaylist;
      console.log(`🎵 Loaded ${spotifyPlaylist.length} tracks from LOCAL playlist`);
      console.log('🎶 Your Valentine Playlist:', spotifyPlaylist.map(t => t.name).join(', '));
      
      // Update UI with first track info
      if (spotifyPlaylist.length > 0) {
        updateTrackInfo(0);
      }
      return;
    }
    
    // Priority 2: Fallback to Spotify API
    if (MUSIC_CONFIG.fallbackToSpotify) {
      const response = await fetch(`/api/spotify/playlist/${MUSIC_CONFIG.playlistId}`);
      
      if (!response.ok) {
        throw new Error('Failed to load playlist: ' + response.statusText);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      spotifyPlaylist = data.tracks;
      
      console.log(`✅ Loaded ${spotifyPlaylist.length} tracks from Spotify playlist: "${data.name}"`);
      
      // Update UI with first track info
      if (spotifyPlaylist.length > 0) {
        updateTrackInfo(0);
      } else {
        document.getElementById('track-name').textContent = 'Playlist is empty';
        document.getElementById('artist-name').textContent = 'Add some songs to your playlist';
      }
    }
  } catch (error) {
    console.error('Error loading playlist:', error);
    document.getElementById('track-name').textContent = 'Error loading playlist';
    document.getElementById('artist-name').textContent = error.message || 'Check console for details';
  }
}

// Update track info display
function updateTrackInfo(index) {
  if (!spotifyPlaylist || index >= spotifyPlaylist.length) return;
  
  const track = spotifyPlaylist[index];
  document.getElementById('track-name').textContent = track.name;
  document.getElementById('artist-name').textContent = track.artist;
  
  // Update album art
  const albumArt = document.getElementById('album-art');
  if (track.albumArt) {
    albumArt.style.backgroundImage = `url(${track.albumArt})`;
    albumArt.innerHTML = '';
  } else {
    albumArt.style.backgroundImage = 'none';
    albumArt.innerHTML = '<i class="fas fa-music"></i>';
  }
  
  // Update duration
  const duration = Math.floor(track.duration / 1000);
  document.getElementById('duration').textContent = formatTime(duration);
}

// Toggle Spotify playback
function toggleSpotifyPlayback() {
  if (!spotifyPlaylist || spotifyPlaylist.length === 0) {
    alert('⚠️ Playlist is still loading or empty.\n\nPlease wait a moment or check your playlist ID.');
    return;
  }
  
  const playBtn = document.getElementById('spotify-play-btn');
  const icon = playBtn.querySelector('i');
  
  if (isPlaying) {
    // Pause
    pauseTrack();
    icon.className = 'fas fa-play';
    isPlaying = false;
    stopBeatAnimation();
  } else {
    // Play
    playTrack(currentTrackIndex);
    icon.className = 'fas fa-pause';
    isPlaying = true;
    startBeatAnimation();
  }
}

// Play track
async function playTrack(index) {
  if (!spotifyPlaylist || index >= spotifyPlaylist.length) return;
  
  const track = spotifyPlaylist[index];
  currentTrackIndex = index;
  
  // Update UI
  updateTrackInfo(index);
  
  // Clean up existing player
  if (musicPlayer) {
    musicPlayer.pause();
    musicPlayer.removeEventListener('timeupdate', updateProgress);
    musicPlayer.removeEventListener('ended', handleTrackEnd);
    musicPlayer.removeEventListener('error', handlePlaybackError);
    musicPlayer = null;
  }
  
  // Clear any existing intervals
  if (window.simulatedProgressInterval) {
    clearInterval(window.simulatedProgressInterval);
    window.simulatedProgressInterval = null;
  }
  
  // Check if track has audio URL
  if (track.previewUrl) {
    // Real audio playback
    musicPlayer = new Audio();
    musicPlayer.volume = 0.7;
    musicPlayer.crossOrigin = 'anonymous'; // Enable CORS for music files
    musicPlayer.preload = 'auto'; // Preload audio for smooth playback
    
    console.log('🎵 Now playing:', track.name, 'by', track.artist);
    
    // Set duration immediately from track config (before metadata loads)
    const expectedDuration = Math.floor(track.duration / 1000);
    document.getElementById('duration').textContent = formatTime(expectedDuration);
    document.getElementById('current-time').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';
    
    // Handle metadata loaded
    musicPlayer.addEventListener('loadedmetadata', () => {
      // Update with actual duration when metadata loads
      const actualDuration = Math.floor(musicPlayer.duration);
      if (!isNaN(actualDuration) && isFinite(actualDuration)) {
        document.getElementById('duration').textContent = formatTime(actualDuration);
      }
      
      // Hide visual mode indicator if real audio is playing
      const modeIndicator = document.getElementById('playback-mode');
      if (modeIndicator) {
        modeIndicator.style.display = 'none';
      }
    });
    
    // Handle time updates
    musicPlayer.addEventListener('timeupdate', updateProgress);
    
    // Handle track end
    function handleTrackEnd() {
      console.log('✅ Track ended, moving to next');
      nextTrack();
    }
    musicPlayer.addEventListener('ended', handleTrackEnd);
    
    // Handle playback errors
    function handlePlaybackError(error) {
      console.error('❌ Playback error for:', track.name, error);
      console.warn('⚠️ Attempting next track...');
      
      // Immediately try next track without delay
      if (isPlaying) {
        nextTrack();
      }
    }
    musicPlayer.addEventListener('error', handlePlaybackError);
    
    // Set source and play
    musicPlayer.src = track.previewUrl;
    
    // Attempt to play with error handling
    const playPromise = musicPlayer.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('✅ Playback started successfully:', track.name);
        })
        .catch(error => {
          console.error('❌ Play failed:', error.message);
          // Only skip if still playing (user didn't pause)
          if (isPlaying) {
            console.warn('⚠️ Auto-skipping to next track');
            handlePlaybackError(error);
          }
        });
    }
  } else {
    // No audio URL - show error
    console.error('❌ No audio URL for track:', track.name);
    simulatePlayback(track);
  }
  
  // Show proposal after 25 seconds (only on first play)
  if (currentTrackIndex === 0 && !window.proposalShown) {
    window.proposalShown = true;
    setTimeout(() => {
      const proposalSection = document.getElementById('proposal-section');
      if (proposalSection && proposalSection.classList.contains('hidden')) {
        proposalSection.classList.remove('hidden');
        proposalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 25000);
  }
}

// Simulate playback for songs without preview URLs
function simulatePlayback(track) {
  console.log('🎵 Simulated playback mode:', track.name);
  
  // Show visual mode indicator with helpful message
  const modeIndicator = document.getElementById('playback-mode');
  if (modeIndicator) {
    modeIndicator.style.display = 'block';
    modeIndicator.innerHTML = `
      <i class="fas fa-info-circle"></i> Visual Mode Only
      <div style="font-size: 11px; margin-top: 5px;">
        💡 To enable audio: Upload song to <code>/static/music/song.mp3</code>
      </div>
    `;
  }
  
  const duration = Math.floor(track.duration / 1000); // Convert to seconds
  document.getElementById('duration').textContent = formatTime(duration);
  document.getElementById('current-time').textContent = '0:00';
  
  let currentTime = 0;
  const progressFill = document.getElementById('progress-fill');
  
  // Update progress every second
  window.simulatedProgressInterval = setInterval(() => {
    if (!isPlaying) {
      clearInterval(window.simulatedProgressInterval);
      return;
    }
    
    currentTime++;
    
    // Update time display
    document.getElementById('current-time').textContent = formatTime(currentTime);
    
    // Update progress bar
    const percentage = (currentTime / duration) * 100;
    progressFill.style.width = percentage + '%';
    
    // End of track
    if (currentTime >= duration) {
      clearInterval(window.simulatedProgressInterval);
      nextTrack();
    }
  }, 1000);
}

// Pause track
function pauseTrack() {
  if (musicPlayer) {
    musicPlayer.pause();
  }
  
  // Stop simulated playback
  if (window.simulatedProgressInterval) {
    clearInterval(window.simulatedProgressInterval);
    window.simulatedProgressInterval = null;
  }
}

// Next track
function nextTrack() {
  if (!spotifyPlaylist) return;
  
  currentTrackIndex = (currentTrackIndex + 1) % spotifyPlaylist.length;
  
  if (isPlaying) {
    playTrack(currentTrackIndex);
  } else {
    updateTrackInfo(currentTrackIndex);
  }
}

// Previous track
function previousTrack() {
  if (!spotifyPlaylist) return;
  
  currentTrackIndex = (currentTrackIndex - 1 + spotifyPlaylist.length) % spotifyPlaylist.length;
  
  if (isPlaying) {
    playTrack(currentTrackIndex);
  } else {
    updateTrackInfo(currentTrackIndex);
  }
}

// Update progress bar
function updateProgress() {
  if (!musicPlayer) return;
  
  const current = musicPlayer.currentTime;
  const duration = musicPlayer.duration;
  
  // Check if duration is valid
  if (duration && !isNaN(duration) && isFinite(duration) && duration > 0) {
    const percentage = (current / duration) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('current-time').textContent = formatTime(Math.floor(current));
    
    // Update duration display if it changed
    const durationText = formatTime(Math.floor(duration));
    const currentDurationText = document.getElementById('duration').textContent;
    if (currentDurationText === '0:00' || currentDurationText === 'NaN:NaN' || currentDurationText.includes('Infinity')) {
      document.getElementById('duration').textContent = durationText;
    }
  }
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
  // Handle invalid inputs
  if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) {
    return '0:00';
  }
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize music player (placeholder)
function initializeMusic() {
  // Spotify player is now created separately
  console.log('✨ Spotify music player ready. Click play to start your romantic playlist.');
}

let beatInterval;

// Start beat-synced animations
function startBeatAnimation() {
  beatInterval = setInterval(() => {
    const photos = document.querySelectorAll('.photo-frame');
    photos.forEach(photo => {
      photo.classList.add('beat-pulse');
      setTimeout(() => photo.classList.remove('beat-pulse'), 300);
    });
  }, 600); // Simulate 100 BPM
}

// Stop beat animations
function stopBeatAnimation() {
  if (beatInterval) {
    clearInterval(beatInterval);
  }
}

// Handle proposal response
function handleProposalResponse(accepted) {
  if (accepted) {
    // Trigger confetti
    triggerConfetti();
    
    // Show success message
    document.getElementById('proposal-section').classList.add('hidden');
    const successMsg = document.getElementById('success-message');
    successMsg.classList.remove('hidden');
    successMsg.scrollIntoView({ behavior: 'smooth' });
    
    // Stop music
    const button = document.getElementById('play-button');
    button.classList.remove('playing');
    stopBeatAnimation();
  }
}

// ==================== DAY 2: ROSE DAY ====================
function loadRoseDay() {
  const content = document.getElementById('main-content');
  
  const compliments = [
    "Your smile lights up my entire world 🌟",
    "You make every ordinary moment extraordinary 💫",
    "Your kindness touches my heart every day 💖",
    "I admire your strength and grace 🌹",
    "You inspire me to be a better person 🌈",
    "Your laughter is my favorite sound 🎵",
    "This rose isn't perfect… but it's yours 🌹"
  ];
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold text-rose-red mb-4">🌹 Rose Day</h2>
        <p class="text-xl text-gray-600 mb-8">Click each petal to reveal why you're special to me</p>
      </div>
      
      <!-- Rose Plant -->
      <div class="glass-card p-12">
        <div class="relative flex justify-center items-center" style="height: 500px;">
          <!-- Stem -->
          <div class="absolute bottom-0 w-4 h-64 bg-green-600 rounded" style="left: 50%; transform: translateX(-50%);"></div>
          
          <!-- Petals arranged in circle -->
          <div id="rose-petals" class="relative" style="width: 400px; height: 400px;">
            ${compliments.map((text, i) => {
              const angle = (360 / compliments.length) * i;
              const x = 150 * Math.cos(angle * Math.PI / 180);
              const y = 150 * Math.sin(angle * Math.PI / 180);
              return `
                <div class="rose-petal glow-on-hover" 
                     data-message="${text}" 
                     onclick="revealPetal(this)"
                     style="position: absolute; left: ${200 + x}px; top: ${200 + y}px; transform: translate(-50%, -50%) rotate(${angle + 45}deg);">
                </div>
              `;
            }).join('')}
          </div>
        </div>
        
        <!-- Message Display -->
        <div id="petal-message" class="mt-12 text-center hidden animate-fade-in">
          <p class="romantic-message text-2xl"></p>
        </div>
      </div>
    </div>
  `;
}

// Reveal petal message
function revealPetal(petal) {
  if (petal.classList.contains('revealed')) return;
  
  const message = petal.dataset.message;
  const messageBox = document.getElementById('petal-message');
  const messageText = messageBox.querySelector('p');
  
  petal.classList.add('revealed');
  messageBox.classList.remove('hidden');
  messageText.textContent = message;
  
  // Add floating heart effect
  createFloatingHeart(petal);
}

function createFloatingHeart(element) {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.fontSize = '3rem';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '1000';
  
  const rect = element.getBoundingClientRect();
  heart.style.left = rect.left + 'px';
  heart.style.top = rect.top + 'px';
  heart.style.animation = 'floatUp 2s ease-out forwards';
  
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

// ==================== DAY 2: CHOCOLATE DAY ====================
function loadChocolateDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="chocolate-day-container" style="position: relative; min-height: 70vh; overflow: hidden; padding-bottom: 150px;">
      <!-- Floating Chocolates Background -->
      <div id="floating-chocolates" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Center Message -->
      <div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 2rem;">
        <div class="glass-card" style="padding: 3rem; text-align: center; max-width: 600px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);">
          <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #8B4513;">🍫 Chocolate Day 🍫</h2>
          
          <div class="animate-pulse" style="margin: 2rem 0;">
            <p class="text-2xl md:text-3xl font-bold" style="color: #D2691E; margin-bottom: 1.5rem;">
              Order on its way!!!!
            </p>
            <p class="text-xl md:text-2xl" style="color: #FF69B4; font-weight: 600;">
              Wait Darling 💕
            </p>
          </div>
          
          <!-- Delivery Truck Animation with Banner -->
          <div style="margin-top: 2rem; position: relative; height: 150px; overflow: visible;">
            <!-- Banner tied to truck -->
            <div id="chocolate-banner" style="
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              background: linear-gradient(135deg, #FFE5EC 0%, #FFB3C6 100%);
              border: 3px solid #FF69B4;
              border-radius: 12px;
              padding: 0.6rem 0.9rem;
              font-size: clamp(0.75rem, 2vw, 1rem);
              font-weight: bold;
              color: #C71585;
              box-shadow: 0 5px 20px rgba(255, 105, 180, 0.3);
              animation: bannerFloatTied 4s ease-in-out infinite;
              white-space: nowrap;
              text-align: center;
              line-height: 1.2;
              z-index: 2;
            ">Order on its way Honey!!!</div>
            
            <!-- Delivery Truck -->
            <div id="delivery-truck" style="
              position: absolute;
              right: -150px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 3.5rem;
              animation: deliveryMoveRTL 4s ease-in-out infinite;
              z-index: 3;
            ">🚚</div>
          </div>
          
          <p class="text-lg text-gray-600 mt-6" style="font-style: italic;">
            Sweet surprises are coming your way... 🍬
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Create floating chocolates and candies
  createFloatingChocolates();
}

function createFloatingChocolates() {
  const container = document.getElementById('floating-chocolates');
  const chocolateEmojis = ['🍫', '🍬', '🍭', '🍩', '🧁', '🍰', '🎂', '🍪', '🍮', '🍯', '🍫', '🍬', '🍭'];
  
  for (let i = 0; i < 20; i++) {
    const chocolate = document.createElement('div');
    const emoji = chocolateEmojis[Math.floor(Math.random() * chocolateEmojis.length)];
    
    chocolate.innerHTML = emoji;
    chocolate.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 30 + 30}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatChocolate ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.8;
      pointer-events: none;
    `;
    
    container.appendChild(chocolate);
  }
}

// ==================== DAY 3: TEDDY DAY ====================
function loadTeddyDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="teddy-day-container" style="position: relative; min-height: 70vh; overflow: hidden; padding-bottom: 150px;">
      <!-- Floating Teddies Background -->
      <div id="floating-teddies" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Center Message -->
      <div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 2rem;">
        <div class="glass-card" style="padding: 3rem; text-align: center; max-width: 600px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);">
          <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F4A460;">🧸 Teddy Day 🧸</h2>
          
          <div class="animate-pulse" style="margin: 2rem 0;">
            <p class="text-2xl md:text-3xl font-bold" style="color: #8B4513; margin-bottom: 1.5rem;">
              Order on its way!!!!
            </p>
            <p class="text-xl md:text-2xl" style="color: #FF69B4; font-weight: 600;">
              Wait Darling 💕
            </p>
          </div>
          
          <!-- Delivery Boy Animation with Banner -->
          <div style="margin-top: 2rem; position: relative; height: 150px; overflow: visible;">
            <!-- Banner tied to cyclist -->
            <div id="teddy-banner" style="
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              background: linear-gradient(135deg, #FFF5E1 0%, #FFE4B5 100%);
              border: 3px solid #F4A460;
              border-radius: 12px;
              padding: 0.6rem 0.9rem;
              font-size: clamp(0.75rem, 2vw, 1rem);
              font-weight: bold;
              color: #8B4513;
              box-shadow: 0 5px 20px rgba(244, 164, 96, 0.3);
              animation: bannerFloatTied 4s ease-in-out infinite;
              white-space: nowrap;
              text-align: center;
              line-height: 1.2;
              z-index: 2;
            ">Order on its way Honey!!!</div>
            
            <!-- Delivery Cyclist -->
            <div id="delivery-boy" style="
              position: absolute;
              right: -150px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 3.5rem;
              animation: deliveryMoveRTL 4s ease-in-out infinite;
              z-index: 3;
            ">🚴</div>
          </div>
          
          <p class="text-lg text-gray-600 mt-6" style="font-style: italic;">
            A cuddly surprise is heading your way... 🧸💕
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Create floating teddies
  createFloatingTeddies();
}

function createFloatingTeddies() {
  const container = document.getElementById('floating-teddies');
  const teddyEmojis = ['🧸', '🐻', '🐼', '🧸', '🐻', '🐨', '🧸', '🐻', '🧸'];
  
  for (let i = 0; i < 15; i++) {
    const teddy = document.createElement('div');
    const emoji = teddyEmojis[Math.floor(Math.random() * teddyEmojis.length)];
    
    teddy.innerHTML = emoji;
    teddy.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 40 + 40}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatTeddy ${Math.random() * 12 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.7;
      pointer-events: none;
      transform: rotate(${Math.random() * 40 - 20}deg);
    `;
    
    container.appendChild(teddy);
  }
}

// ==================== DAY 4: PROMISE DAY ====================
function loadPromiseDay() {
  const content = document.getElementById('main-content');
  currentPage = 0;
  
  content.innerHTML = `
    <div class="promise-day-container" style="position: relative; min-height: 70vh; padding-bottom: 150px;">
      <!-- Romantic Background -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(255, 218, 224, 0.1) 100%); pointer-events: none;"></div>
      
      <div class="container mx-auto max-w-4xl" style="position: relative; z-index: 2;">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-5xl font-bold mb-4" style="color: #DDA0DD;">📖 Promise Day</h2>
          <p class="text-xl text-gray-600 mb-4">Flip through my promises to you</p>
          <p class="text-lg" style="color: #FF69B4; font-style: italic;">"Kuch vade aese banaye, jo tod na paaye..." 💕</p>
        </div>
        
        <div class="book-page" style="background: linear-gradient(135deg, #fff5f7 0%, #ffe6ea 100%); border: 3px solid #FFB6C1; box-shadow: 0 10px 40px rgba(255, 105, 180, 0.3);">
          <div id="promise-content" class="text-center">
            <!-- Promise content will be inserted here -->
          </div>
          
          <div class="flex justify-between items-center gap-4 mt-8" style="width: 100%;">
            <button onclick="prevPage()" id="prev-btn" class="page-flip-btn bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg" style="flex: 1; max-width: 150px; z-index: 20;">
              <i class="fas fa-arrow-left mr-2"></i> Previous
            </button>
            <button onclick="nextPage()" id="next-btn" class="page-flip-btn bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg" style="flex: 1; max-width: 150px; z-index: 20;">
              Next <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        
        <!-- Cute romantic quote floating -->
        <div class="mt-8 text-center animate-pulse">
          <p class="text-lg" style="color: #C71585; font-style: italic;">
            ✨ "Promise karna easy hai, nibhana mushkil... lekin tumhare saath sab aasaan hai" ✨
          </p>
        </div>
      </div>
    </div>
  `;
  
  showPromisePage();
}

// ==================== DAY 5: HUG DAY ====================
function loadHugDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="hug-day-container" style="position: relative; min-height: 70vh; overflow: hidden; padding-bottom: 150px;">
      <!-- Floating Flowers and Quotes -->
      <div id="floating-elements" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Center Message -->
      <div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 2rem;">
        <div class="glass-card" style="padding: 3rem; text-align: center; max-width: 700px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 2px solid rgba(255, 182, 193, 0.5);">
          <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #FFB6C1;">🤗 Hug Day 🤗</h2>
          
          <div class="animate-pulse" style="margin: 2rem 0;">
            <p class="text-2xl md:text-3xl font-bold" style="color: #FF1493; margin-bottom: 1.5rem;">
              It's due until we meet again...
            </p>
          </div>
          
          <!-- Romantic Bollywood Lines -->
          <div class="mt-6 space-y-4">
            <p class="text-lg md:text-xl" style="color: #C71585; font-style: italic; line-height: 1.8;">
              💕 "Suraj hua maddham, chaand jalne laga...<br>Aasmaan yeh haai kyun pighalne laga, main thehra raha, zameen chalne lagi" 💕
            </p>
            <p class="text-lg md:text-xl mt-4" style="color: #FF69B4; font-style: italic; line-height: 1.8;">
              🌹 "Tum paas aaye, yun muskuraaye...<br>Tumne na jaane kya sapne dikhaaye" 🌹
            </p>
            <p class="text-lg md:text-xl mt-4" style="color: #DB7093; font-style: italic; line-height: 1.8;">
              ✨ "Kuch kuch hota hai, tum nahi samjhoge...<br>Yeh humko kab hua pata nahi chala" ✨
            </p>
            <p class="text-lg md:text-xl mt-4" style="color: #E75480; font-style: italic; line-height: 1.8;">
              💖 "Tere liye hum hain jiye, hothon ko siye...<br>Dil mein magar jalte rahe, diye" 💖
            </p>
          </div>
          
          <div class="mt-8 p-6 rounded-lg" style="background: linear-gradient(135deg, rgba(255, 182, 193, 0.3) 0%, rgba(255, 228, 225, 0.3) 100%);">
            <p class="text-xl font-semibold" style="color: #8B4789;">
              🤗 Waiting for that warm hug... 🤗
            </p>
            <p class="text-md mt-2" style="color: #666;">
              Until we meet, you're always in my thoughts 💭💕
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Create floating flowers and romantic quotes
  createFloatingFlowersAndQuotes();
}

function createFloatingFlowersAndQuotes() {
  const container = document.getElementById('floating-elements');
  const flowers = ['🌹', '🌸', '🌺', '🌻', '🌷', '💐', '🏵️', '🌼'];
  const hearts = ['💕', '💖', '💗', '💝', '💞', '💓'];
  const quotes = [
    '"Suraj hua maddham"',
    '"Tum paas aaye"',
    '"Kuch kuch hota hai"',
    '"Tere liye hum hain jiye"',
    '"Aankhon mein teri"',
    '"Dil ne yeh kaha"',
    '"Tumse milke dil ka"',
    '"Jeena sirf mere liye"',
    '"Mohabbat dil ka sakoon"',
    '"Pyaar toh hona hi tha"'
  ];
  
  // Create floating flowers
  for (let i = 0; i < 20; i++) {
    const element = document.createElement('div');
    const isFlower = Math.random() > 0.3;
    
    if (isFlower) {
      const emoji = flowers[Math.floor(Math.random() * flowers.length)];
      element.innerHTML = emoji;
      element.style.fontSize = `${Math.random() * 25 + 25}px`;
    } else {
      const emoji = hearts[Math.floor(Math.random() * hearts.length)];
      element.innerHTML = emoji;
      element.style.fontSize = `${Math.random() * 20 + 20}px`;
    }
    
    element.style.cssText += `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatRandom ${Math.random() * 15 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.6;
      pointer-events: none;
    `;
    
    container.appendChild(element);
  }
  
  // Create floating quotes
  for (let i = 0; i < 8; i++) {
    const quote = document.createElement('div');
    const text = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerHTML = text;
    quote.style.cssText = `
      position: absolute;
      left: ${Math.random() * 90 + 5}%;
      top: ${Math.random() * 90 + 5}%;
      font-size: ${Math.random() * 8 + 14}px;
      color: rgba(255, 105, 180, 0.5);
      font-style: italic;
      font-weight: 600;
      animation: floatQuote ${Math.random() * 20 + 15}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.7;
      pointer-events: none;
      white-space: nowrap;
    `;
    
    container.appendChild(quote);
  }
}

function giveTeddyHug() {
  const teddy = document.querySelector('.teddy-bear');
  teddy.classList.add('hugging');
  setTimeout(() => teddy.classList.remove('hugging'), 1000);
  createFloatingHeart(teddy);
}

function sendHug() {
  const messageBox = document.getElementById('hug-message');
  messageBox.classList.remove('hidden');
  giveTeddyHug();
  
  // Create multiple hearts
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const teddy = document.querySelector('.teddy-bear');
      createFloatingHeart(teddy);
    }, i * 200);
  }
}

// ==================== DAY 5: PROMISE DAY ====================
let currentPage = 0;
const promises = [
  "I promise to always make you smile, even on the toughest days 😊",
  "I promise to support your dreams and celebrate your victories 🌟",
  "I promise to listen with my heart, not just my ears 💖",
  "I promise to make every day special, not just the big occasions 🎉",
  "I promise to grow with you, through all of life's seasons 🌱",
  "I promise to cherish the little moments we share together ⏰",
  "Now... what promise do you want from me? 💭"
];

function showPromisePage() {
  const content = document.getElementById('promise-content');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (currentPage < promises.length - 1) {
    content.innerHTML = `
      <div class="flex items-center justify-center min-h-[300px]">
        <p class="romantic-message text-2xl" style="color: #DDA0DD;">
          ${promises[currentPage]}
        </p>
      </div>
    `;
  } else {
    // Last page - user input
    content.innerHTML = `
      <div class="flex flex-col items-center justify-center min-h-[300px] gap-6">
        <p class="romantic-message text-2xl" style="color: #DDA0DD;">
          ${promises[currentPage]}
        </p>
        <textarea id="user-promise" 
                  class="w-full max-w-md p-4 rounded-lg border-2 border-purple-300 focus:border-purple-500 outline-none"
                  rows="4"
                  placeholder="Write your promise here..."></textarea>
        <button onclick="saveUserPromise()" 
                class="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-bold hover:scale-105 transition-all">
          Seal This Promise 💜
        </button>
      </div>
    `;
  }
  
  prevBtn.disabled = currentPage === 0;
  prevBtn.style.opacity = currentPage === 0 ? '0.5' : '1';
  nextBtn.style.display = currentPage === promises.length - 1 ? 'none' : 'block';
}

function nextPage() {
  if (currentPage < promises.length - 1) {
    currentPage++;
    showPromisePage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPromisePage();
  }
}

function saveUserPromise() {
  const userPromise = document.getElementById('user-promise').value;
  if (userPromise.trim()) {
    alert('Promise saved in my heart! 💜\n\n"' + userPromise + '"');
    triggerConfetti();
  } else {
    alert('Please write your promise first 💭');
  }
}

// ==================== DAY 6: KISS DAY ====================
function loadKissDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="kiss-day-container" style="position: relative; min-height: 70vh; padding-bottom: 150px;">
      <!-- Romantic gradient background -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255, 192, 203, 0.2) 0%, rgba(255, 182, 193, 0.2) 50%, rgba(255, 218, 224, 0.2) 100%); pointer-events: none;"></div>
      
      <!-- Floating hearts background -->
      <div id="floating-kiss-hearts" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Center Locked Message -->
      <div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 2rem;">
        <div class="glass-card" style="padding: 4rem 3rem; text-align: center; max-width: 600px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 3px solid rgba(255, 105, 180, 0.5); box-shadow: 0 15px 50px rgba(255, 105, 180, 0.3);">
          <!-- Big Lock Icon -->
          <div class="animate-bounce" style="font-size: 5rem; margin-bottom: 2rem;">
            🔒
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #FF1493;">💋 Kiss Day 💋</h2>
          
          <!-- Main Message -->
          <div class="animate-pulse" style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 182, 193, 0.1) 100%); border-radius: 20px;">
            <p class="text-3xl md:text-4xl font-bold" style="color: #C71585; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
              ABHI TIME HAI... 😊
            </p>
            <p class="text-xl md:text-2xl" style="color: #FF69B4; font-weight: 600;">
              Thoda aur intezaar karo, darling! 💕
            </p>
          </div>
          
          <!-- Romantic Quote -->
          <div class="mt-6" style="padding: 1.5rem; background: rgba(255, 228, 225, 0.5); border-radius: 15px; border-left: 4px solid #FF1493;">
            <p class="text-lg" style="color: #8B008B; font-style: italic; line-height: 1.6;">
              ✨ "Kuch khaas lamhe waqt maangte hain...<br>
              Aur yeh lamha bahut khaas hoga" ✨
            </p>
          </div>
          
          <!-- Cute Note -->
          <div class="mt-8 flex items-center justify-center gap-2">
            <span style="font-size: 2rem;">💝</span>
            <p class="text-md" style="color: #666; font-weight: 500;">
              Patience is the key to love's sweetest moments
            </p>
            <span style="font-size: 2rem;">💝</span>
          </div>
          
          <!-- Countdown hint -->
          <p class="text-sm mt-6" style="color: #999; font-style: italic;">
            💫 Coming soon on the perfect day! 💫
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Create floating hearts
  createFloatingKissHearts();
}

function createFloatingKissHearts() {
  const container = document.getElementById('floating-kiss-hearts');
  const hearts = ['💕', '💖', '💗', '💓', '💞', '💝', '❤️', '💋'];
  
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    const emoji = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.innerHTML = emoji;
    heart.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 25 + 20}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatHeart ${Math.random() * 12 + 8}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.6;
      pointer-events: none;
    `;
    
    container.appendChild(heart);
  }
}

// ==================== DAY 7: VALENTINE'S DAY ====================
let yesButtonScale = 1;
let noButtonMoves = 0;

function loadValentineDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="valentine-day-container" style="position: relative; min-height: 70vh; overflow: hidden; padding-bottom: 150px;">
      <!-- Romantic background with sparkles -->
      <div id="sparkle-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Question Page -->
      <div id="question-page" style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-center; min-height: 65vh; padding: 2rem;">
        <div class="glass-card" style="padding: 4rem 3rem; text-align: center; max-width: 700px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 3px solid rgba(255, 215, 0, 0.6); box-shadow: 0 20px 60px rgba(255, 105, 180, 0.4);">
          <!-- Hearts decoration -->
          <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem; font-size: 3rem;">
            <span class="animate-pulse">💕</span>
            <span class="animate-bounce">❤️</span>
            <span class="animate-pulse">💕</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-8" style="color: #FFD700;">
            ❤️ Valentine's Day ❤️
          </h2>
          
          <!-- Main Question -->
          <div style="padding: 2.5rem; background: linear-gradient(135deg, rgba(255, 182, 193, 0.2) 0%, rgba(255, 218, 224, 0.2) 100%); border-radius: 25px; margin-bottom: 3rem; border: 2px solid rgba(255, 105, 180, 0.3);">
            <p class="text-3xl md:text-4xl font-bold" style="color: #C71585; margin-bottom: 1.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
              Will you be my Valentine? 💕
            </p>
            <p class="text-lg md:text-xl" style="color: #FF69B4; font-style: italic;">
              "Meri zindagi ka sabse khoobsurat sawaal..." ✨
            </p>
          </div>
          
          <!-- Buttons Container -->
          <div style="position: relative; min-height: 200px; width: 100%; display: flex; align-items: center; justify-content: center;">
            <button 
              id="yes-button" 
              onclick="valentineYesClicked()"
              style="
                position: relative;
                padding: 1.5rem 3rem;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
                border: none;
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(255, 20, 147, 0.4);
                z-index: 10;
              "
              onmouseover="this.style.transform='scale(1.1)'"
              onmouseout="this.style.transform='scale(1)'">
              YES 💕
            </button>
            
            <button 
              id="no-button"
              onmouseover="moveNoButton(event)"
              onclick="moveNoButton(event)"
              style="
                position: absolute;
                right: 50px;
                top: 50%;
                transform: translateY(-50%);
                padding: 1rem 2rem;
                font-size: 1.2rem;
                font-weight: bold;
                color: #666;
                background: linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%);
                border: 2px solid #999;
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.2s ease;
                z-index: 5;
              ">
              NO
            </button>
          </div>
          
          <p class="text-sm mt-8" style="color: #999; font-style: italic;">
            💡 Hint: There's only one right answer... 💡
          </p>
        </div>
      </div>
      
      <!-- Celebration Page (Hidden Initially) -->
      <div id="celebration-page" style="display: none; position: relative; z-index: 2; min-height: 65vh; padding: 2rem;">
        <div class="glass-card" style="padding: 4rem 3rem; text-align: center; max-width: 700px; margin: 2rem auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 3px solid rgba(255, 215, 0, 0.6);">
          <div style="font-size: 6rem; margin-bottom: 2rem; animation: heartPulse 1s ease-in-out infinite;">
            💖
          </div>
          
          <h2 class="text-5xl font-bold mb-6" style="color: #FFD700; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
            🎉 YAYYY! 🎉
          </h2>
          
          <p class="text-3xl font-bold mb-8" style="color: #FF1493;">
            You said YES! 💕
          </p>
          
          <div style="padding: 2rem; background: rgba(255, 192, 203, 0.2); border-radius: 20px; margin-bottom: 2rem;">
            <p class="text-2xl" style="color: #C71585; font-style: italic; line-height: 1.8;">
              "Tum mile toh jeene ka maqsad mil gaya...<br>
              Dil ko ek naya pyaar mil gaya" ❤️
            </p>
          </div>
          
          <p class="text-xl mt-6" style="color: #FF69B4;">
            Happy Valentine's Day, Anku! 🧸💕<br>
            <span style="font-size: 1.2rem;">Forever and Always! 💍</span>
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Create continuous sparkles
  createValentineSparkles();
  
  // Reset button states
  yesButtonScale = 1;
  noButtonMoves = 0;
}

function moveNoButton(event) {
  event.preventDefault();
  const button = document.getElementById('no-button');
  const yesButton = document.getElementById('yes-button');
  const container = button.parentElement;
  const yesButtonRect = yesButton.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  
  noButtonMoves++;
  
  // Calculate distance to YES button
  const buttonRect = button.getBoundingClientRect();
  const yesButtonCenterX = yesButtonRect.left + yesButtonRect.width / 2;
  const yesButtonCenterY = yesButtonRect.top + yesButtonRect.height / 2;
  
  // Move NO button away from cursor, but gradually closer to YES button
  const moveRadius = Math.max(100, 200 - noButtonMoves * 15); // Gets closer each time
  
  // Random angle, but bias towards YES button location after multiple moves
  let angle = Math.random() * Math.PI * 2;
  if (noButtonMoves >= 3) {
    // Calculate angle towards YES button
    const toYesAngle = Math.atan2(
      yesButtonCenterY - (containerRect.top + containerRect.height / 2),
      yesButtonCenterX - (containerRect.left + containerRect.width / 2)
    );
    // Mix random angle with angle towards YES
    angle = angle * 0.3 + toYesAngle * 0.7;
  }
  
  const newX = containerRect.width / 2 + Math.cos(angle) * moveRadius - buttonRect.width / 2;
  const newY = containerRect.height / 2 + Math.sin(angle) * moveRadius - buttonRect.height / 2;
  
  // Clamp to container bounds
  const maxX = containerRect.width - buttonRect.width - 10;
  const maxY = containerRect.height - buttonRect.height - 10;
  const clampedX = Math.max(10, Math.min(newX, maxX));
  const clampedY = Math.max(10, Math.min(newY, maxY));
  
  button.style.left = clampedX + 'px';
  button.style.top = clampedY + 'px';
  button.style.right = 'auto';
  button.style.transform = 'translateY(0)';
  
  // Increase YES button size with each NO move
  yesButtonScale += 0.15;
  yesButton.style.transform = `scale(${yesButtonScale})`;
  
  // After 5 moves, YES button starts taking over
  if (noButtonMoves >= 5) {
    yesButton.style.transform = `scale(${yesButtonScale * 1.3})`;
    button.style.opacity = Math.max(0.1, 1 - (noButtonMoves - 5) * 0.15);
  }
  
  // After 8 moves, NO button becomes tiny and YES dominates
  if (noButtonMoves >= 8) {
    button.style.transform = 'scale(0.5)';
    button.style.opacity = '0.05';
    yesButton.style.transform = `scale(${yesButtonScale * 2})`;
    yesButton.style.padding = '2rem 4rem';
  }
}

function valentineYesClicked() {
  // Hide question page
  document.getElementById('question-page').style.display = 'none';
  
  // Show celebration page
  document.getElementById('celebration-page').style.display = 'block';
  
  // Trigger massive celebration
  triggerMassiveCelebration();
}

function triggerMassiveCelebration() {
  // Confetti explosion
  triggerConfetti();
  
  // Heart explosion
  triggerHeartExplosion();
  
  // Continuous sparkles
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createCelebrationSparkle();
    }, i * 100);
  }
}

function createValentineSparkles() {
  const container = document.getElementById('sparkle-container');
  const sparkles = ['✨', '💫', '⭐', '🌟', '💖', '💕', '❤️'];
  
  setInterval(() => {
    const sparkle = document.createElement('div');
    const emoji = sparkles[Math.floor(Math.random() * sparkles.length)];
    
    sparkle.innerHTML = emoji;
    sparkle.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 15}px;
      left: ${Math.random() * 100}%;
      top: -50px;
      animation: fallSparkle ${Math.random() * 3 + 2}s ease-in forwards;
      opacity: 0.8;
      pointer-events: none;
    `;
    
    container.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 5000);
  }, 300);
}

function createCelebrationSparkle() {
  const container = document.getElementById('sparkle-container');
  const sparkle = document.createElement('div');
  
  sparkle.innerHTML = ['🎉', '🎊', '✨', '💖', '💕', '❤️', '🌟'][Math.floor(Math.random() * 7)];
  sparkle.style.cssText = `
    position: absolute;
    font-size: ${Math.random() * 30 + 25}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: explodeSparkle 2s ease-out forwards;
    opacity: 1;
    pointer-events: none;
  `;
  
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

function finalProposal() {
  triggerConfetti();
  triggerHeartExplosion();
  
  setTimeout(() => {
    alert('Thank you for this magical week! Every day with you is Valentine\'s Day. ❤️');
  }, 1000);
}

// ==================== UTILITY FUNCTIONS ====================

// Confetti explosion
function triggerConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFB3C6', '#FF8FAB', '#FF6B9D', '#C44569']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FFB3C6', '#FF8FAB', '#FF6B9D', '#C44569']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Heart explosion effect
function triggerHeartExplosion() {
  const container = document.getElementById('confetti-container');
  
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.style.position = 'fixed';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = '2rem';
      heart.style.pointerEvents = 'none';
      heart.style.animation = `confetti ${2 + Math.random() * 2}s ease-out forwards`;
      heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, i * 50);
  }
}

// Export functions to global scope
window.switchDay = switchDay;
window.toggleMusic = toggleMusic;
window.handleProposalResponse = handleProposalResponse;
window.revealPetal = revealPetal;
window.openChocolate = openChocolate;
window.giveTeddyHug = giveTeddyHug;
window.sendHug = sendHug;
window.nextPage = nextPage;
window.prevPage = prevPage;
window.saveUserPromise = saveUserPromise;
window.stealKiss = stealKiss;
window.finalProposal = finalProposal;
