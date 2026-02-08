// Valentine Week Configuration
const VALENTINE_WEEK_CONFIG = {
  // Set your Valentine Week start date (February 8, 2026 - Propose Day)
  startDate: new Date('2026-02-08T00:00:00'),
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
  
  localPlaylist: [
    {
      name: 'Meri Banogi Kya',
      artist: 'Rito Riba, Rajat Nagpal',
      album: 'Meri Banogi Kya',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2732ebd3d368294e9c19696299c',
      previewUrl: '/static/music/meri-banogi-kya.mp3',
      duration: 215000 // 3:35 in milliseconds
    },
    {
      name: 'Tainu Khabar Nahi',
      artist: 'Sachin-Jigar, Arijit Singh',
      album: 'Munjya',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b27398bc1bc90e3cc5deceeff408',
      previewUrl: '/static/music/tainu-khabar-nahi.mp3',
      duration: 188000 // 3:08
    },
    {
      name: 'Zaalima',
      artist: 'Arijit Singh, Harshdeep Kaur',
      album: 'Raees',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b27398bc1bc90e3cc5deceeff408',
      previewUrl: '/static/music/zaalima.mp3',
      duration: 299000 // 4:59
    },
    {
      name: 'O Meri Laila',
      artist: 'Atif Aslam, Jyotica Tangri',
      album: 'Laila Majnu',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273d998c880f085f08c7ddeeafc',
      previewUrl: '/static/music/o-meri-laila.mp3',
      duration: 273000 // 4:33
    },
    {
      name: 'Samjhawan',
      artist: 'Arijit Singh, Shreya Ghoshal',
      album: 'Humpty Sharma Ki Dulhania',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2738a7ae7092464f6685355dc3c',
      previewUrl: '/static/music/samjhawan.mp3',
      duration: 269000 // 4:29
    },
    {
      name: 'Tum Ho Toh',
      artist: 'Vishal Mishra',
      album: 'Saiyaara',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b273d998c880f085f08c7ddeeafc',
      previewUrl: '/static/music/tum-ho-toh.mp3',
      duration: 318000 // 5:18
    },
    {
      name: 'Darkhaast',
      artist: 'Arijit Singh, Sunidhi Chauhan',
      album: 'Shivaay',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b27350db5756a51048c1fe02dd20',
      previewUrl: '/static/music/darkhaast.mp3',
      duration: 312000 // 5:12
    }
  ],
  
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
});

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

// ==================== DAY 3: CHOCOLATE DAY ====================
function loadChocolateDay() {
  const content = document.getElementById('main-content');
  
  const chocolateMessages = [
    "You're sweeter than any chocolate 🍫",
    "Life tastes better with you 💕",
    "Every moment with you is delicious 😋",
    "You melt my heart like chocolate ❤️",
    "Sweet memories with you 🌟",
    "You're my favorite treat 🎁",
    "Life is sweeter with you in it 🍬"
  ];
  
  content.innerHTML = `
    <div class="container mx-auto max-w-5xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold mb-4" style="color: #8B4513;">🍫 Chocolate Day</h2>
        <p class="text-xl text-gray-600 mb-8">Pick a chocolate to unwrap a sweet message</p>
      </div>
      
      <!-- Chocolate Box -->
      <div class="glass-card p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center" id="chocolate-box">
          ${chocolateMessages.map((msg, i) => `
            <div class="chocolate-piece glow-on-hover" 
                 data-message="${msg}" 
                 onclick="openChocolate(this, ${i})">
              <span class="text-white text-4xl">🍫</span>
            </div>
          `).join('')}
        </div>
        
        <!-- Message Display -->
        <div id="chocolate-message" class="mt-12 text-center hidden animate-fade-in">
          <p class="romantic-message text-2xl" style="color: #8B4513;"></p>
        </div>
      </div>
    </div>
  `;
}

function openChocolate(chocolate, index) {
  if (chocolate.classList.contains('opened')) return;
  
  const message = chocolate.dataset.message;
  const messageBox = document.getElementById('chocolate-message');
  const messageText = messageBox.querySelector('p');
  
  chocolate.classList.add('opened');
  chocolate.innerHTML = '<span class="text-white text-2xl">💝</span>';
  
  messageBox.classList.remove('hidden');
  messageText.textContent = message;
  
  createFloatingHeart(chocolate);
}

// ==================== DAY 3: TEDDY DAY ====================
function loadTeddyDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold mb-4" style="color: #F4A460;">🧸 Teddy Day</h2>
        <p class="text-xl text-gray-600 mb-8">A cuddly reminder of my love</p>
      </div>
      
      <div class="glass-card p-12 text-center">
        <div class="teddy-bear glow-on-hover" onclick="giveTeddyHug()">
          🧸
        </div>
        
        <button onclick="sendHug()" class="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-800 rounded-full text-xl font-bold hover:scale-110 transition-all">
          Hug the Teddy 🧸
        </button>
        
        <div id="hug-message" class="mt-8 hidden animate-fade-in">
          <p class="romantic-message text-2xl" style="color: #F4A460;">
            This teddy represents all the hugs I can't give you in person 💕
          </p>
        </div>
      </div>
    </div>
  `;
}

// ==================== DAY 4: PROMISE DAY ====================
// ==================== DAY 5: HUG DAY ====================
function loadHugDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold mb-4" style="color: #FFB6C1;">🤗 Hug Day</h2>
        <p class="text-xl text-gray-600 mb-8">Sending you warm hugs and love</p>
      </div>
      
      <div class="glass-card p-12 text-center">
        <div class="teddy-bear glow-on-hover" onclick="giveTeddyHug()">
          🤗
        </div>
        
        <button onclick="sendHug()" class="mt-8 px-8 py-4 bg-gradient-to-r from-pink-200 to-pink-300 text-pink-800 rounded-full text-xl font-bold hover:scale-110 transition-all">
          Send You a Big Hug 💕
        </button>
        
        <div id="hug-message" class="mt-8 hidden animate-fade-in">
          <p class="romantic-message text-2xl" style="color: #FFB6C1;">
            Wrapped in my arms, even from afar 🤗💕
          </p>
        </div>
      </div>
    </div>
  `;
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

function loadPromiseDay() {
  const content = document.getElementById('main-content');
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold mb-4" style="color: #DDA0DD;">📖 Promise Day</h2>
        <p class="text-xl text-gray-600 mb-8">Flip through my promises to you</p>
      </div>
      
      <div class="book-page">
        <div id="promise-content" class="text-center">
          <!-- Promise content will be inserted here -->
        </div>
        
        <div class="flex justify-between">
          <button onclick="prevPage()" id="prev-btn" class="page-flip-btn" style="left: 20px;">
            <i class="fas fa-arrow-left mr-2"></i> Previous
          </button>
          <button onclick="nextPage()" id="next-btn" class="page-flip-btn" style="right: 20px;">
            Next <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  
  showPromisePage();
}

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
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold text-pink-500 mb-4">💋 Kiss Day</h2>
        <p class="text-xl text-gray-600 mb-8">A sweet virtual kiss, just for you</p>
      </div>
      
      <div class="glass-card p-12 text-center">
        <div id="kiss-zone" class="relative h-96 flex items-center justify-center">
          <button onclick="stealKiss()" 
                  class="px-12 py-6 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full text-2xl font-bold hover:scale-110 transition-all glow-on-hover">
            Steal a Kiss 💋
          </button>
        </div>
        
        <div id="kiss-message" class="mt-8 hidden animate-fade-in">
          <p class="romantic-message text-2xl text-pink-500">
            This one's reserved only for you. 😘
          </p>
        </div>
      </div>
    </div>
  `;
}

function stealKiss() {
  const zone = document.getElementById('kiss-zone');
  const messageBox = document.getElementById('kiss-message');
  
  // Create kiss marks
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const kiss = document.createElement('div');
      kiss.className = 'kiss-mark';
      kiss.innerHTML = '💋';
      kiss.style.left = (Math.random() * 80 + 10) + '%';
      kiss.style.top = (Math.random() * 80 + 10) + '%';
      kiss.style.animationDelay = (Math.random() * 0.5) + 's';
      zone.appendChild(kiss);
      
      setTimeout(() => kiss.remove(), 3000);
    }, i * 100);
  }
  
  // Play kiss sound effect (if available)
  // new Audio('/static/kiss.mp3').play();
  
  messageBox.classList.remove('hidden');
  triggerHeartExplosion();
}

// ==================== DAY 7: VALENTINE'S DAY ====================
function loadValentineDay() {
  const content = document.getElementById('main-content');
  
  const memories = [
    { date: 'February 7', title: 'The Day I Proposed', description: 'You said yes, and my world changed forever 💍' },
    { date: 'February 8', title: 'Rose Day', description: 'Each petal represented a reason I love you 🌹' },
    { date: 'February 9', title: 'Chocolate Day', description: 'Sweet moments, sweeter memories 🍫' },
    { date: 'February 10', title: 'Teddy Day', description: 'Virtual hugs that felt so real 🧸' },
    { date: 'February 11', title: 'Promise Day', description: 'Promises we\'ll keep forever 📖' },
    { date: 'February 12', title: 'Kiss Day', description: 'A kiss that sealed our hearts 💋' },
    { date: 'February 14', title: 'Today', description: 'The beginning of our forever ❤️' }
  ];
  
  content.innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl font-bold mb-4" style="color: #FFD700;">❤️ Valentine's Day</h2>
        <p class="text-xl text-gray-600 mb-8">Our journey through this magical week</p>
      </div>
      
      <!-- Timeline -->
      <div class="glass-card p-12">
        ${memories.map((memory, i) => `
          <div class="timeline-item animate-slide-up" style="animation-delay: ${i * 0.2}s;">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="text-sm text-gray-500 font-semibold mb-1">${memory.date}</div>
              <h3 class="text-2xl font-bold mb-2" style="color: #FFD700;">${memory.title}</h3>
              <p class="text-lg text-gray-700">${memory.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Final Message -->
      <div class="mt-12 text-center animate-fade-in" style="animation-delay: 1.5s;">
        <div class="glass-card p-12">
          <p class="romantic-message text-3xl mb-8" style="color: #FFD700;">
            "I didn't want just a Valentine's Day.<br>
            I wanted every day with you."
          </p>
          <button onclick="finalProposal()" 
                  class="px-12 py-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-full text-2xl font-bold hover:scale-110 transition-all glow-on-hover">
            Be my forever? 💍
          </button>
        </div>
      </div>
    </div>
  `;
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
