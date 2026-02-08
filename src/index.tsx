import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Spotify Credentials (Server-side only)
const SPOTIFY_CLIENT_ID = 'fb07ea764ff6493cb0a4700a61a7cfc9'
const SPOTIFY_CLIENT_SECRET = 'ec4eadbc9a5e48c7a749b4e09cf1780d'

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ==================== SPOTIFY API ENDPOINTS ====================

// Get Spotify Access Token
app.get('/api/spotify/token', async (c) => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    })

    if (!response.ok) {
      throw new Error('Failed to get Spotify token')
    }

    const data = await response.json()
    return c.json({
      access_token: data.access_token,
      expires_in: data.expires_in
    })
  } catch (error) {
    console.error('Spotify token error:', error)
    return c.json({ error: 'Failed to get Spotify token' }, 500)
  }
})

// Get Spotify Playlist
app.get('/api/spotify/playlist/:playlistId', async (c) => {
  const playlistId = c.req.param('playlistId')
  
  try {
    // Get access token first
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Spotify token')
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Get playlist with token
    const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!playlistResponse.ok) {
      throw new Error('Failed to get playlist')
    }

    const playlistData = await playlistResponse.json()
    
    // Extract and format track data
    const tracks = playlistData.tracks.items.map((item: any) => ({
      name: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(', '),
      album: item.track.album.name,
      albumArt: item.track.album.images[0]?.url || null,
      previewUrl: item.track.preview_url,
      duration: item.track.duration_ms
    }))

    return c.json({
      name: playlistData.name,
      description: playlistData.description,
      tracks: tracks
    })
  } catch (error) {
    console.error('Spotify playlist error:', error)
    return c.json({ error: 'Failed to get playlist' }, 500)
  }
})

// Main Valentine Week page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Valentine Week 💕 - A Love Story in 7 Days</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'romantic-pink': '#FFE5EC',
                  'deep-pink': '#FF8FAB',
                  'rose-red': '#FF6B9D',
                  'chocolate': '#8B4513',
                  'teddy-beige': '#FFF5E1',
                  'promise-purple': '#E6E6FA',
                  'kiss-pink': '#FFC0CB',
                  'valentine-gold': '#FFD700'
                },
                animation: {
                  'float': 'float 3s ease-in-out infinite',
                  'pulse-heart': 'pulseHeart 1.5s ease-in-out infinite',
                  'beat-sync': 'beatSync 0.3s ease-in-out',
                  'float-up': 'floatUp 4s ease-in-out infinite',
                  'rotate-slow': 'rotateSlow 20s linear infinite',
                  'confetti': 'confetti 3s ease-out forwards',
                  'fade-in': 'fadeIn 1s ease-in forwards',
                  'slide-up': 'slideUp 0.8s ease-out forwards',
                  'unlock': 'unlock 1.5s ease-out forwards'
                },
                keyframes: {
                  float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                  },
                  pulseHeart: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' }
                  },
                  beatSync: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.15)' }
                  },
                  floatUp: {
                    '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' }
                  },
                  rotateSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  },
                  confetti: {
                    '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
                  },
                  fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                  },
                  slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                  },
                  unlock: {
                    '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
                    '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: '0.5' },
                    '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' }
                  }
                }
              }
            }
          }
        </script>
    </head>
    <body class="min-h-screen bg-gradient-to-br from-romantic-pink via-white to-deep-pink overflow-x-hidden">
        <!-- Floating Hearts Background -->
        <div id="floating-hearts" class="fixed inset-0 pointer-events-none z-0"></div>
        
        <!-- Navigation Bar -->
        <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl font-bold text-rose-red">
                        <i class="fas fa-heart mr-2"></i>
                        Valentine Week
                    </h1>
                    <div class="flex gap-2 overflow-x-auto pb-2">
                        <button onclick="switchDay(1)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="1">
                            Day 1
                        </button>
                        <button onclick="switchDay(2)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="2">
                            Day 2
                        </button>
                        <button onclick="switchDay(3)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="3">
                            Day 3
                        </button>
                        <button onclick="switchDay(4)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="4">
                            Day 4
                        </button>
                        <button onclick="switchDay(5)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="5">
                            Day 5
                        </button>
                        <button onclick="switchDay(6)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="6">
                            Day 6
                        </button>
                        <button onclick="switchDay(7)" class="day-nav-btn px-3 py-2 rounded-lg text-sm font-semibold transition-all" data-day="7">
                            Day 7
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="pt-24 pb-16 px-4" id="main-content">
            <!-- Days content will be injected here -->
        </main>

        <!-- Confetti Container -->
        <div id="confetti-container" class="fixed inset-0 pointer-events-none z-50"></div>

        <!-- Footer (below music player) -->
        <footer class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-romantic-pink via-white to-deep-pink border-t border-rose-red/20 py-2 z-20">
            <div class="container mx-auto text-center">
                <p class="text-xs text-gray-600">
                    © 2026 <span class="font-semibold text-rose-red">Bunny</span> 
                    <span class="text-gray-400">(</span><span class="font-medium text-deep-pink">mohitdev</span><span class="text-gray-400">)</span>
                    <span class="mx-1">•</span>
                    <span class="text-gray-500">Made with</span> 
                    <i class="fas fa-heart text-rose-red animate-pulse-heart mx-1"></i>
                    <span class="text-gray-500">for Anku</span> 🧸
                </p>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
