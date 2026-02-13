// Valentine Week Configuration
const VALENTINE_WEEK_CONFIG = {
  // Set your Valentine Week start date (February 8, 2026 - Propose Day)
  startDate: new Date('2026-02-08T00:00:00'),
  // PREVIEW MODE: Set to true to unlock all days for preview
  previewMode: false, // Production mode - days unlock by date
  // PREVIEW SPECIFIC DAYS: Array of day IDs to unlock for preview (e.g., [3] for Day 3 only)
  previewDays: [], // All days locked - unlock based on date only
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
  // Day 3 (Teddy Day) special playlist unlocks on 2026-02-10 00:00:00
  
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
  
  // Day 3 Playlist - Teddy Day Songs
  day3Playlist: [
    {
      name: '12 to 12',
      artist: 'Unknown Artist',
      album: '12 to 12',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF6B9D"/%3E%3Ctext x="50%25" y="50%25" font-size="100" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3E1%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/12-to-12.mp3',
      duration: 415000 // ~6:55
    },
    {
      name: 'Co2',
      artist: 'Unknown Artist',
      album: 'Co2',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23E91E63"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EC%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/co2.mp3',
      duration: 276000 // ~4:36
    },
    {
      name: 'Daddy Cool',
      artist: 'Boney M',
      album: 'Daddy Cool',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF4081"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ED%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/daddy-cool.mp3',
      duration: 387000 // ~6:27
    },
    {
      name: 'I Think They Call This Love',
      artist: 'Elliot James Reay',
      album: 'I Think They Call This Love',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23F06292"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EI%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/i-think-they-call-this-love.mp3',
      duration: 339000 // ~5:39
    },
    {
      name: 'Show Me Love (with Tyla)',
      artist: 'Sam Feldt & Tyla',
      album: 'Show Me Love',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23EC407A"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/show-me-love-tyla.mp3',
      duration: 319000 // ~5:19
    },
    {
      name: 'Show Me Love',
      artist: 'Robin S.',
      album: 'Show Me Love',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23D81B60"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/show-me-love.mp3',
      duration: 294000 // ~4:54
    },
    {
      name: 'Back to Friends',
      artist: 'Unknown Artist',
      album: 'Back to Friends',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23C2185B"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EB%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/back-to-friends.mp3',
      duration: 354000 // ~5:54
    },
    {
      name: 'Cold Mess',
      artist: 'Prateek Kuhad',
      album: 'Cold Mess',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23AD1457"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EC%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/cold-mess.mp3',
      duration: 460000 // ~7:40
    },
    {
      name: 'Her',
      artist: 'Unknown Artist',
      album: 'Her',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23880E4F"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day3/her.mp3',
      duration: 282000 // ~4:42
    }
  ],
  
  // Day 4 (Promise Day) Playlist - 10 romantic promise songs
  day4Playlist: [
    {
      name: 'Maine Socha Ke Chura Loon',
      artist: 'Unknown Artist',
      album: 'Maine Socha Ke Chura Loon',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DDA0DD"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/maine-socha-ke-chura-loon.mp3',
      duration: 167000 // ~2:47
    },
    {
      name: 'Kuch To Hai',
      artist: 'Armaan Malik',
      album: 'Do Lafzon Ki Kahani',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DA70D6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EK%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/kuch-to-hai.mp3',
      duration: 245000 // ~4:05
    },
    {
      name: 'Love Me Thoda Aur',
      artist: 'Arijit Singh',
      album: 'Yaariyan',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23D8BFD8"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EL%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/love-me-thoda-aur.mp3',
      duration: 523000 // ~8:43
    },
    {
      name: 'Samjhawan',
      artist: 'Arijit Singh & Shreya Ghoshal',
      album: 'Humpty Sharma Ki Dulhania',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23E6B8E6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/samjhawan.mp3',
      duration: 520000 // ~8:40
    },
    {
      name: 'Qubool',
      artist: 'Unknown Artist',
      album: 'Haq',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DDA0DD"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EQ%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/qubool.mp3',
      duration: 552000 // ~9:12
    },
    {
      name: 'Ishq Mubarak',
      artist: 'Tum Bin 2',
      album: 'Tum Bin 2',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DA70D6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EI%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/ishq-mubarak.mp3',
      duration: 584000 // ~9:44
    },
    {
      name: 'Tumhe Kitna Pyaar Karte',
      artist: 'Arijit Singh',
      album: 'Bawaal',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23D8BFD8"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/tumhe-kitna-pyaar-karte.mp3',
      duration: 563000 // ~9:23
    },
    {
      name: 'Aaj Se Teri',
      artist: 'Unknown Artist',
      album: 'Aaj Se Teri',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23E6B8E6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EA%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/aaj-se-teri.mp3',
      duration: 623000 // ~10:23
    },
    {
      name: 'Tera Fitoor',
      artist: 'Arijit Singh',
      album: 'Genius',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DDA0DD"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/tera-fitoor.mp3',
      duration: 626000 // ~10:26
    },
    {
      name: 'Raat Bhar',
      artist: 'Arijit Singh & Shreya Ghoshal',
      album: 'Heropanti',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23DA70D6"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ER%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day4/raat-bhar.mp3',
      duration: 651000 // ~10:51
    }
  ],
  
  // Day 5 (Hug Day) Playlist - 3 romantic hug songs
  day5Playlist: [
    {
      name: 'Jiya Laage Na',
      artist: 'Shreya Ghoshal & Sanjay Leela Bhansali',
      album: 'Talaash',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B9D'/%3E%3Cstop offset='100%25' style='stop-color:%23C44569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g1)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EJ%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/jiya-laage-na.mp3',
      duration: 403000 // ~6:43
    },
    {
      name: 'Ishq Hai',
      artist: 'Unknown Artist',
      album: 'Ishq Hai',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFA07A'/%3E%3Cstop offset='100%25' style='stop-color:%23FF69B4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g2)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EI%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/ishq-hai.mp3',
      duration: 264000 // ~4:24
    },
    {
      name: 'Pal Pal Dil Ke Paas',
      artist: 'Arijit Singh & Parampara Thakur',
      album: 'Pal Pal Dil Ke Paas',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB6C1'/%3E%3Cstop offset='100%25' style='stop-color:%23FF1493'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g3)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EP%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/pal-pal-dil-ke-paas.mp3',
      duration: 499000 // ~8:19
    }
  ],
  
  // Day 6 (Kiss Day) Playlist - 10 romantic kiss songs
  day6Playlist: [
    {
      name: 'Ishq Hai',
      artist: 'Arijit Singh',
      album: 'Ishq Hai',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DDA0DD'/%3E%3Cstop offset='100%25' style='stop-color:%23BA55D3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g4)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EI%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Ishq%20Hai_spotdown.org.mp3',
      duration: 227000 // 3:47
    },
    {
      name: 'Sharmeeli',
      artist: 'Unknown Artist',
      album: 'Sharmeeli',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F08080'/%3E%3Cstop offset='100%25' style='stop-color:%23CD5C5C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g5)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Sharmeeli_spotdown.org.mp3',
      duration: 222000 // 3:42
    },
    {
      name: 'Akhiyaan Gulaab',
      artist: 'Mitraz',
      album: 'Teri Baaton Mein Aisa Uljha Jiya',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF69B4'/%3E%3Cstop offset='100%25' style='stop-color:%23C71585'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g6)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Akhiyaan%20Gulaab%20(From%20%22Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%22)_spotdown.org.mp3',
      duration: 293000 // 4:53
    },
    {
      name: 'Woh',
      artist: 'Ritviz',
      album: 'Woh',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB3BA'/%3E%3Cstop offset='100%25' style='stop-color:%23FF677D'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g7)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EW%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Woh-(SambalpuriStar.In).mp3',
      duration: 287000 // 4:47
    },
    {
      name: 'Humdum',
      artist: 'Jubin Nautiyal',
      album: 'Humdum',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFC0CB'/%3E%3Cstop offset='100%25' style='stop-color:%23FF85A1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g8)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EH%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Humdum_spotdown.org.mp3',
      duration: 306000 // 5:06
    },
    {
      name: 'Suroor',
      artist: 'Bilal Saeed',
      album: 'Suroor',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E6B0AA'/%3E%3Cstop offset='100%25' style='stop-color:%23C39BD3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g9)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Suroor_spotdown.org.mp3',
      duration: 312000 // 5:12
    },
    {
      name: 'Rakhlo Tum Chupaake',
      artist: 'Darshan Raval',
      album: 'Rakhlo Tum Chupaake',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F5B7B1'/%3E%3Cstop offset='100%25' style='stop-color:%23EC7063'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g10)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ER%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Rakhlo%20Tum%20Chupaake_spotdown.org.mp3',
      duration: 342000 // 5:42
    },
    {
      name: 'Iraaday',
      artist: 'Shubh',
      album: 'Iraaday',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B9D'/%3E%3Cstop offset='100%25' style='stop-color:%23C44569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g11)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EI%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Iraaday%20(PenduJatt.Com.Se).mp3',
      duration: 371000 // 6:11
    },
    {
      name: 'Sawaal',
      artist: 'Aditya Rikhari',
      album: 'Sawaal',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFA07A'/%3E%3Cstop offset='100%25' style='stop-color:%23FF69B4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g12)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Sawaal_spotdown.org.mp3',
      duration: 366000 // 6:06
    },
    {
      name: 'Hai Dil Ye Mera',
      artist: 'Armaan Malik',
      album: 'Hate Story 2',
      albumArt: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g13' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB6C1'/%3E%3Cstop offset='100%25' style='stop-color:%23FF1493'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g13)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EH%3C/text%3E%3C/svg%3E",
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/Hai%20Dil%20Ye%20Mera_spotdown.org.mp3',
      duration: 491000 // 8:11
    }
  ],
  
  // Day 7 (Valentine's Day) Playlist - 12 ultimate romantic songs
  day7Playlist: [
    {
      name: 'Sajni',
      artist: 'Arijit Singh & Ram Sampath',
      album: 'Laapataa Ladies',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Sajni_spotdown.org.mp3',
      duration: 298000
    },
    {
      name: 'Woh',
      artist: 'Ritviz',
      album: 'Woh',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EW%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Woh-(SambalpuriStar.In).mp3',
      duration: 297000
    },
    {
      name: 'Kehdoon Tumhen',
      artist: 'Kishore Kumar',
      album: 'Deewaar',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFB6C1"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EK%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Kehdoon Tumhen - From "Deewaar"_spotdown.org.mp3',
      duration: 372000
    },
    {
      name: 'Rakhlo Tum Chupaake',
      artist: 'Darshan Raval',
      album: 'Rakhlo Tum Chupaake',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFC0CB"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ER%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Rakhlo Tum Chupaake_spotdown.org.mp3',
      duration: 355000
    },
    {
      name: 'Iraaday',
      artist: 'Shubh',
      album: 'Iraaday',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EI%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Iraaday (PenduJatt.Com.Se).mp3',
      duration: 389000
    },
    {
      name: 'Tera Ban Jaunga',
      artist: 'Akhil Sachdeva & Tulsi Kumar',
      album: 'Kabir Singh',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Tera Ban Jaunga_spotdown.org.mp3',
      duration: 417000
    },
    {
      name: 'Pal Pal Dil Ke Paas',
      artist: 'Arijit Singh & Parampara Thakur',
      album: 'Pal Pal Dil Ke Paas',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EP%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Pal Pal Dil Ke Paas - Title Track - From "Pal Pal Dil Ke Paas"_spotdown.org.mp3',
      duration: 450000
    },
    {
      name: 'Aaj Se Teri',
      artist: 'Arijit Singh & Shashaa Tirupati',
      album: 'Padman',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EA%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Aaj Se Teri_spotdown.org.mp3',
      duration: 560000
    },
    {
      name: 'Ek Din Aap',
      artist: 'Arijit Singh',
      album: 'Yes Boss',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFB6C1"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EE%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Ek Din Aap_spotdown.org.mp3',
      duration: 493000
    },
    {
      name: 'Tose Naina',
      artist: 'Arijit Singh',
      album: 'Mickey Virus',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFC0CB"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Tose Naina (From "Mickey Virus)_spotdown.org.mp3',
      duration: 483000
    },
    {
      name: 'Tum Ho Toh',
      artist: 'Jubin Nautiyal',
      album: 'Saiyaara',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Tum Ho Toh (From "Saiyaara")_spotdown.org.mp3',
      duration: 544000
    },
    {
      name: 'Raat Bhar',
      artist: 'Shreya Ghoshal & Arijit Singh',
      album: 'Heropanti',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ER%3C/text%3E%3C/svg%3E',
      previewUrl: '/static/music-day7/Raat Bhar (From "Heropanti")_spotdown.org.mp3',
      duration: 588000
    }
  ],
  
  // Day 2 unlock date
  day2UnlockDate: new Date('2026-02-09T00:00:00'),
  
  // Day 3 unlock date  
  day3UnlockDate: new Date('2026-02-10T00:00:00'),
  
  // Day 4 unlock date
  day4UnlockDate: new Date('2026-02-11T00:00:00'),
  
  // Day 5 unlock date
  day5UnlockDate: new Date('2026-02-12T00:00:00'),
  
  // Day 6 unlock date
  day6UnlockDate: new Date('2026-02-13T00:00:00'),
  
  // Day 7 unlock date
  day7UnlockDate: new Date('2026-02-14T00:00:00'),
  
  // 🎵 PREVIEW MODE for Music: Force Day 7 playlist for testing
  musicPreviewMode: false,  // Production mode - music unlocks by date
  
  // Dynamic playlist getter - returns appropriate playlist based on date
  get localPlaylist() {
    const now = new Date();
    
    // 🎵 PREVIEW MODE: Force Day 7 playlist for testing
    if (this.musicPreviewMode) {
      console.log('🎵 MUSIC PREVIEW MODE ENABLED - Using Day 7 playlist (12 songs)');
      return this.day7Playlist;
    }
    
    const isDay7Unlocked = now >= this.day7UnlockDate;
    const isDay6Unlocked = now >= this.day6UnlockDate;
    const isDay5Unlocked = now >= this.day5UnlockDate;
    const isDay4Unlocked = now >= this.day4UnlockDate;
    const isDay3Unlocked = now >= this.day3UnlockDate;
    const isDay2Unlocked = now >= this.day2UnlockDate;
    
    if (isDay7Unlocked) {
      return this.day7Playlist;      // Returns ONLY 12 Day 7 songs
    } else if (isDay6Unlocked) {
      return this.day6Playlist;      // Returns ONLY 10 Day 6 songs
    } else if (isDay5Unlocked) {
      return this.day5Playlist;      // Returns ONLY 3 Day 5 songs
    } else if (isDay4Unlocked) {
      return this.day4Playlist;      // Returns ONLY 10 Day 4 songs
    } else if (isDay3Unlocked) {
      return this.day3Playlist;      // Returns ONLY 9 Day 3 songs
    } else if (isDay2Unlocked) {
      return this.day2Playlist;      // Returns ONLY 12 Day 2 songs
    } else {
      return this.originalPlaylist;  // Returns 7 original songs
    }
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
  // Removed - preview mode disabled for production
  return;
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
  
  // Check if this day is in previewDays array
  if (VALENTINE_WEEK_CONFIG.previewDays && VALENTINE_WEEK_CONFIG.previewDays.includes(dayNumber)) {
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
      console.log(`🎵 ========== MUSIC PLAYER DEBUG ==========`);
      console.log(`✅ Loaded ${spotifyPlaylist.length} tracks from LOCAL playlist`);
      console.log(`📁 Playlist type:`, spotifyPlaylist.constructor.name);
      console.log('🎶 Track list:', spotifyPlaylist.map((t, i) => `${i+1}. ${t.name} by ${t.artist}`).join('\n'));
      
      // Debug first track details
      if (spotifyPlaylist.length > 0) {
        const firstTrack = spotifyPlaylist[0];
        console.log('🎵 First track details:', {
          name: firstTrack.name,
          artist: firstTrack.artist,
          previewUrl: firstTrack.previewUrl,
          duration: firstTrack.duration,
          hasAudio: !!firstTrack.previewUrl
        });
        
        updateTrackInfo(0);
      }
      console.log(`🎵 ====================================`);
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
    // Play/Resume
    if (musicPlayer && !musicPlayer.paused && musicPlayer.currentTime > 0) {
      // Resume existing track
      resumeTrack();
    } else {
      // Start new track
      playTrack(currentTrackIndex);
    }
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
  
  // Clean up existing player ONLY if changing tracks
  if (musicPlayer && musicPlayer.src !== track.previewUrl) {
    musicPlayer.pause();
    musicPlayer.removeEventListener('timeupdate', updateProgress);
    musicPlayer.removeEventListener('ended', window._handleTrackEnd);
    musicPlayer.removeEventListener('error', window._handlePlaybackError);
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
    
    // Only set crossOrigin for external URLs, not local files
    if (track.previewUrl.startsWith('http://') || track.previewUrl.startsWith('https://')) {
      musicPlayer.crossOrigin = 'anonymous';
    }
    
    musicPlayer.preload = 'metadata'; // Load metadata first, then buffer on play
    
    // Check if browser can play MP3
    const canPlayMP3 = musicPlayer.canPlayType('audio/mpeg');
    console.log('🔊 Browser MP3 support:', canPlayMP3);
    
    if (!canPlayMP3 || canPlayMP3 === 'no') {
      console.error('❌ Browser does not support MP3 playback');
      setTimeout(() => nextTrack(), 500);
      return;
    }
    
    console.log('🎵 ========== NOW PLAYING ==========');
    console.log('🎵 Track:', track.name);
    console.log('🎤 Artist:', track.artist);
    console.log('📀 Album:', track.album);
    console.log('🔗 Audio URL:', track.previewUrl);
    console.log('⏱️ Duration:', Math.floor(track.duration / 1000), 'seconds');
    console.log('🎵 ================================');
    
    // Set duration immediately from track config (before metadata loads)
    const expectedDuration = Math.floor(track.duration / 1000);
    document.getElementById('duration').textContent = formatTime(expectedDuration);
    document.getElementById('current-time').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';
    
    // Handle load start
    musicPlayer.addEventListener('loadstart', () => {
      console.log('🔄 Audio loading started:', track.previewUrl);
    });
    
    // Handle can play through
    musicPlayer.addEventListener('canplaythrough', () => {
      console.log('✅ Audio can play through (buffered enough)');
    });
    
    // Handle metadata loaded
    musicPlayer.addEventListener('loadedmetadata', () => {
      console.log('📊 Metadata loaded, duration:', Math.floor(musicPlayer.duration), 'seconds');
      
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
    
    // Handle time updates - continuous progress updates
    musicPlayer.addEventListener('timeupdate', updateProgress);
    
    // Handle track end
    window._handleTrackEnd = function() {
      console.log('✅ Track ended, moving to next');
      nextTrack();
    };
    musicPlayer.addEventListener('ended', window._handleTrackEnd);
    
    // Handle playback errors
    window._handlePlaybackError = function(error) {
      console.error('❌ ========== PLAYBACK ERROR ==========');
      console.error('❌ Track:', track.name);
      console.error('❌ URL:', track.previewUrl);
      console.error('❌ Error:', error);
      console.error('❌ Media Error Code:', musicPlayer?.error?.code);
      console.error('❌ Media Error Message:', musicPlayer?.error?.message);
      console.error('❌ Network State:', musicPlayer?.networkState);
      console.error('❌ Ready State:', musicPlayer?.readyState);
      console.error('❌ ====================================');
      
      // Wait 2 seconds before trying next track (give time to load)
      setTimeout(() => {
        if (isPlaying) {
          console.warn('⚠️ Attempting next track after delay...');
          nextTrack();
        }
      }, 2000);
    };
    musicPlayer.addEventListener('error', window._handlePlaybackError);
    
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
          console.log('💡 User interaction may be required to start playback');
          // Don't auto-skip on play promise rejection - wait for actual errors
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
    console.log('⏸️ Paused at:', formatTime(Math.floor(musicPlayer.currentTime)));
  }
  
  // Stop simulated playback
  if (window.simulatedProgressInterval) {
    clearInterval(window.simulatedProgressInterval);
    window.simulatedProgressInterval = null;
  }
}

// Resume track
function resumeTrack() {
  if (musicPlayer && musicPlayer.paused) {
    musicPlayer.play()
      .then(() => {
        console.log('▶️ Resumed from:', formatTime(Math.floor(musicPlayer.currentTime)));
      })
      .catch(error => {
        console.error('❌ Resume failed:', error);
        // Fallback: restart the track
        playTrack(currentTrackIndex);
      });
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
    
    // Hide proposal section
    document.getElementById('proposal-section').classList.add('hidden');
    
    // Open camera for Magical moment
    showFilterSelectionModal();
    
    // Stop music
    const button = document.getElementById('play-button');
    if (button) {
      button.classList.remove('playing');
    }
    stopBeatAnimation();
  }
}

// ==================== MAGICAL MOMENT CAMERA ====================

// Global variable to store selected filter
// selectedFilter moved to camera section

// Show filter selection modal
function showFilterSelectionModal() {
  const filterModal = document.createElement('div');
  filterModal.id = 'filter-selection-modal';
  filterModal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; overflow-y: auto;">
      <div style="background: linear-gradient(135deg, #FFF5F7 0%, #FFE4E9 100%); border-radius: 30px; padding: 40px; max-width: 900px; width: 100%; box-shadow: 0 30px 80px rgba(255, 105, 180, 0.5); text-align: center;">
        <h2 style="font-size: 2.5rem; margin-bottom: 20px; font-weight: bold; background: linear-gradient(135deg, #FF6B9D, #C44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ✨ Choose Your Love Filter ✨
        </h2>
        <p style="font-size: 1.1rem; margin-bottom: 40px; color: #FF69B4;">
          Select a magical filter to make your photo extra special! 💕
        </p>
        
        <!-- Filter Options Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
          
          <!-- 1. Soft Dream Glow -->
          <div id="filter-dream" onclick="selectFilter('dream')" style="
            cursor: pointer;
            padding: 25px 15px;
            background: linear-gradient(135deg, #FFE4E9 0%, #FFD1DC 100%);
            border-radius: 20px;
            border: 4px solid #FF1493;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 182, 193, 0.4);
          ">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">✨</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #FF6B9D; margin-bottom: 8px;">Soft Dream Glow</div>
            <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">
              Magical & dreamy with warm highlights & subtle glow
            </div>
          </div>
          
          <!-- 2. Golden Hour Romance -->
          <div id="filter-golden" onclick="selectFilter('golden')" style="
            cursor: pointer;
            padding: 25px 15px;
            background: linear-gradient(135deg, #FFE5B4 0%, #FFDAB9 100%);
            border-radius: 20px;
            border: 4px solid transparent;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
          ">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">💛</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #DAA520; margin-bottom: 8px;">Golden Hour Romance</div>
            <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">
              Warm, radiant & intimate with golden warmth
            </div>
          </div>
          
          <!-- 3. Polaroid Love Note -->
          <div id="filter-polaroid" onclick="selectFilter('polaroid')" style="
            cursor: pointer;
            padding: 25px 15px;
            background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%);
            border-radius: 20px;
            border: 4px solid transparent;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          ">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📷</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #FF69B4; margin-bottom: 8px;">Polaroid Love Note</div>
            <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">
              Cute & nostalgic with white frame & soft tones
            </div>
          </div>
          
          <!-- 4. Romantic Movie Poster -->
          <div id="filter-movie" onclick="selectFilter('movie')" style="
            cursor: pointer;
            padding: 25px 15px;
            background: linear-gradient(135deg, #2C2C54 0%, #40407A 100%);
            border-radius: 20px;
            border: 4px solid transparent;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(44, 44, 84, 0.5);
          ">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🎬</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: #FFD700; margin-bottom: 8px;">Movie Poster</div>
            <div style="font-size: 0.85rem; color: #CCC; line-height: 1.4;">
              Cinematic & unforgettable with film-style grading
            </div>
          </div>
          
        </div>
        
        <!-- Continue Button -->
        <button onclick="openRomanticMomentCamera()" style="
          background: linear-gradient(135deg, #FF6B9D, #C44569);
          color: white;
          border: none;
          padding: 18px 50px;
          border-radius: 30px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4);
          transition: all 0.3s ease;
          width: 100%;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          📸 Continue with Selected Filter
        </button>
        
        <p style="margin-top: 20px; font-size: 0.9rem; color: #FF69B4;">
          ✨ You can change the filter anytime later! ✨
        </p>
      </div>
    </div>
  `;
  
  document.body.appendChild(filterModal);
}

// Select filter function
window.selectFilter = function(filter) {
  selectedFilter = filter;
  
  // Reset all filters
  const filters = ['dream', 'golden', 'polaroid', 'movie'];
  filters.forEach(f => {
    const elem = document.getElementById(`filter-${f}`);
    if (elem) {
      elem.style.border = '4px solid transparent';
      elem.style.transform = 'scale(1)';
    }
  });
  
  // Highlight selected filter
  const selectedElem = document.getElementById(`filter-${filter}`);
  if (selectedElem) {
    selectedElem.style.border = '4px solid #FF1493';
    selectedElem.style.transform = 'scale(1.05)';
    selectedElem.style.boxShadow = '0 15px 40px rgba(255, 105, 180, 0.6)';
  }
  
  const filterNames = {
    'dream': 'Soft Dream Glow ✨',
    'golden': 'Golden Hour Romance 💛',
    'polaroid': 'Polaroid Love Note 📷',
    'movie': 'Romantic Movie Poster 🎬'
  };
  
  console.log('✨ Filter selected:', filterNames[filter] || filter);
};

// Switch filter in camera preview
window.switchCameraFilter = function(filter) {
  selectedFilter = filter;
  
  const filterNames = {
    'dream': 'Soft Dream Glow ✨',
    'golden': 'Golden Hour Romance 💛',
    'polaroid': 'Polaroid Love Note 📷',
    'movie': 'Romantic Movie Poster 🎬',
    'vintage': 'Vintage Kodak Moment 📸'
  };
  
  // CSS filter presets for live preview
  const cssFilters = {
    'dream': 'brightness(1.1) contrast(0.9) saturate(1.2) hue-rotate(5deg)',
    'golden': 'brightness(1.15) contrast(1.1) saturate(1.3) sepia(0.2)',
    'polaroid': 'brightness(1.05) contrast(0.95) saturate(0.9) grayscale(0.1)',
    'movie': 'brightness(1.1) contrast(1.25) saturate(1.15) hue-rotate(-5deg)',
    'vintage': 'brightness(1.05) contrast(1.1) saturate(1.1) sepia(0.3) hue-rotate(-10deg)'
  };
  
  // Apply CSS filter to video for live preview
  const video = document.getElementById('romantic-video');
  if (video) {
    video.style.filter = cssFilters[filter] || cssFilters['dream'];
    console.log('✅ Applied CSS filter to video:', cssFilters[filter]);
  }
  
  // Update current filter name display
  const filterNameElem = document.getElementById('current-filter-name');
  if (filterNameElem) {
    filterNameElem.textContent = filterNames[filter] || filter;
  }
  
  // Update button styles
  const buttons = document.querySelectorAll('.filter-switch-btn');
  buttons.forEach(btn => {
    const btnFilter = btn.getAttribute('data-filter');
    if (btnFilter === filter) {
      btn.style.border = '2px solid #FF69B4';
      btn.style.transform = 'scale(1.05)';
      btn.style.boxShadow = '0 5px 15px rgba(255, 105, 180, 0.4)';
    } else {
      btn.style.border = '2px solid transparent';
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    }
  });
  
  console.log('📷 Camera filter switched to:', filterNames[filter] || filter);
};

// ==================== ENHANCED CAMERA WITH SWIPE GESTURES ====================

// Global variables for filter preview
let filterPreviewCanvas = null;
let filterPreviewCtx = null;
let filterAnimationId = null;
let selectedFilter = 'dream'; // Default filter

// Touch/swipe detection variables
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Filter order (removed golden)
const filterOrder = ['dream', 'polaroid', 'movie', 'kodak'];
let currentFilterIndex = 0;

// Modified openRomanticMomentCamera with SWIPE GESTURES
async function openRomanticMomentCamera() {
  console.log('🎥 Opening camera with swipe gestures...');
  
  // Remove filter selection modal
  const filterModal = document.getElementById('filter-selection-modal');
  if (filterModal) filterModal.remove();
  
  // Create camera modal
  const cameraModal = document.createElement('div');
  cameraModal.id = 'romantic-camera-modal';
  cameraModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
  `;
  
  cameraModal.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 600px;">
      <h2 style="color: #ff69b4; font-size: 26px; margin-bottom: 8px; text-shadow: 0 0 20px rgba(255, 105, 180, 0.6);">
        📸 Capture Your Love Story
      </h2>
      <p style="color: #fff; margin-bottom: 12px; font-size: 13px;">
        👆 Swipe left/right to change filters ✨
      </p>
      
      <div id="camera-preview-container" style="position: relative; display: inline-block; margin-bottom: 15px;">
        <!-- Hidden video element for camera input -->
        <video id="romantic-video" autoplay playsinline muted style="display: none;"></video>
        
        <!-- Visible canvas with filter applied in real-time -->
        <canvas id="filter-preview-canvas" style="
          width: 90vw;
          max-width: 600px;
          height: auto;
          display: block;
          border-radius: 20px;
          box-shadow: 0 10px 50px rgba(255, 105, 180, 0.3);
          border: 3px solid rgba(255, 105, 180, 0.4);
          touch-action: pan-y;
        "></canvas>
        
        <!-- Top decorative text -->
        <div style="position: absolute; top: 15px; left: 50%; transform: translateX(-50%); font-size: 20px; font-weight: bold; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255, 105, 180, 0.8); pointer-events: none;">
          ✨ Bunny & Anku ✨
        </div>
        
        <!-- Bottom decorative text -->
        <div style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); font-size: 16px; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8); pointer-events: none;">
          💕 Valentine's Day 2026 💕
        </div>
        
        <!-- Swipe indicator (animated) -->
        <div id="swipe-indicator" style="
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          pointer-events: none;
          animation: swipePulse 2s ease-in-out infinite;
        ">
          ⬅️ Swipe ➡️
        </div>
      </div>
      
      <!-- Hidden canvas for final capture -->
      <canvas id="romantic-canvas" style="display: none;"></canvas>
      
      <!-- Filter Buttons (backup for non-touch devices) -->
      <div style="margin: 15px 0; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
        <button onclick="window.switchCameraFilter('dream')" id="filter-btn-dream" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        ">✨ Dream</button>
        
        <button onclick="window.switchCameraFilter('polaroid')" id="filter-btn-polaroid" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(250, 112, 154, 0.3);
        ">📷 Polaroid</button>
        
        <button onclick="window.switchCameraFilter('movie')" id="filter-btn-movie" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(48, 207, 208, 0.3);
        ">🎬 Movie</button>
        
        <button onclick="window.switchCameraFilter('kodak')" id="filter-btn-kodak" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        ">📸 Kodak</button>
      </div>
      
      <p id="current-filter-name" style="color: #ff69b4; font-size: 16px; font-weight: bold; margin-bottom: 15px;">
        Current Filter: ${getFilterName(selectedFilter)}
      </p>
      
      <!-- Capture Button -->
      <button id="capture-btn" style="
        padding: 16px 45px;
        font-size: 18px;
        font-weight: bold;
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        transition: all 0.3s ease;
        margin-bottom: 15px;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      ">
        📸 Capture Magical Moment
      </button>
      
      <!-- Close Button -->
      <button id="camera-close-btn" style="
        padding: 10px 25px;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      ">
        ❌ Close Camera
      </button>
      
      <p id="camera-status" style="color: #fff; margin-top: 15px; font-size: 13px;"></p>
    </div>
  `;
  
  document.body.appendChild(cameraModal);
  
  // Add swipe animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes swipePulse {
      0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
      50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
    }
  `;
  document.head.appendChild(style);
  
  // Highlight current filter
  updateFilterButtonStyles();
  
  // Get video and canvas elements
  const video = document.getElementById('romantic-video');
  filterPreviewCanvas = document.getElementById('filter-preview-canvas');
  filterPreviewCtx = filterPreviewCanvas.getContext('2d');
  
  // Setup swipe detection
  const previewContainer = document.getElementById('camera-preview-container');
  setupSwipeGestures(previewContainer);
  
  // Access camera
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    
    video.srcObject = stream;
    
    // Wait for video metadata to load
    video.addEventListener('loadedmetadata', () => {
      console.log('✅ Video loaded:', video.videoWidth, 'x', video.videoHeight);
      
      // Set canvas size to match video
      filterPreviewCanvas.width = video.videoWidth;
      filterPreviewCanvas.height = video.videoHeight;
      
      // Start real-time filter preview
      startFilterPreview(video);
      
      // Hide swipe indicator after 3 seconds
      setTimeout(() => {
        const indicator = document.getElementById('swipe-indicator');
        if (indicator) indicator.style.display = 'none';
      }, 3000);
      
      document.getElementById('camera-status').innerHTML = '✅ Camera ready! Swipe to change filters! 😊';
    });
    
    // Capture button - single handler
    const captureBtn = document.getElementById('capture-btn');
    captureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('🖱️ Capture button CLICKED');
      captureRomanticMoment(video, stream);
    });
    
    // Close button
    document.getElementById('camera-close-btn').addEventListener('click', () => {
      console.log('❌ Closing camera...');
      stopFilterPreview();
      stream.getTracks().forEach(track => track.stop());
      cameraModal.remove();
      
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
  } catch (error) {
    console.error('Camera error:', error);
    alert('❌ Could not access camera. Please allow camera permissions and try again.');
    
    const celebrationPage = document.getElementById('celebration-page');
    if (celebrationPage) {
      celebrationPage.style.display = 'block';
      celebrationPage.scrollIntoView({ behavior: 'smooth' });
    }
    
    sendValentineResponseEmail('YES');
  }
}

// Setup swipe gesture detection
function setupSwipeGestures(element) {
  element.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  element.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });
}

// Handle swipe gesture
function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const minSwipeDistance = 50; // Minimum distance for swipe
  
  // Check if horizontal swipe (not vertical scroll)
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
    if (deltaX > 0) {
      // Swipe right - previous filter
      swipeToPreviousFilter();
    } else {
      // Swipe left - next filter
      swipeToNextFilter();
    }
  }
}

// Swipe to next filter
function swipeToNextFilter() {
  currentFilterIndex = (currentFilterIndex + 1) % filterOrder.length;
  const newFilter = filterOrder[currentFilterIndex];
  switchCameraFilter(newFilter);
  console.log('👉 Swiped to next filter:', newFilter);
}

// Swipe to previous filter
function swipeToPreviousFilter() {
  currentFilterIndex = (currentFilterIndex - 1 + filterOrder.length) % filterOrder.length;
  const newFilter = filterOrder[currentFilterIndex];
  switchCameraFilter(newFilter);
  console.log('👈 Swiped to previous filter:', newFilter);
}

// Start real-time filter preview
function startFilterPreview(video) {
  console.log('🎬 Starting filter preview...');
  
  function updatePreview() {
    if (!video || !filterPreviewCanvas || !video.videoWidth) {
      filterAnimationId = requestAnimationFrame(updatePreview);
      return;
    }
    
    // Draw video frame to canvas
    filterPreviewCtx.drawImage(video, 0, 0, filterPreviewCanvas.width, filterPreviewCanvas.height);
    
    // Apply current filter (only for non-Kodak during preview)
    if (selectedFilter !== 'kodak') {
      applyFilterToCanvas(filterPreviewCtx, filterPreviewCanvas, selectedFilter);
    }
    // For Kodak, show raw video in preview (filter only on capture)
    
    // Continue animation
    filterAnimationId = requestAnimationFrame(updatePreview);
  }
  
  updatePreview();
}

// Stop filter preview
function stopFilterPreview() {
  if (filterAnimationId) {
    cancelAnimationFrame(filterAnimationId);
    filterAnimationId = null;
  }
  console.log('⏹️ Filter preview stopped');
}

// Apply filter to canvas (used for both preview and capture)
function applyFilterToCanvas(ctx, canvas, filterType) {
  switch(filterType) {
    case 'dream':
      applySoftDreamGlowEffect(ctx, canvas);
      break;
    case 'polaroid':
      applyPolaroidEffect(ctx, canvas);
      break;
    case 'movie':
      applyMoviePosterEffect(ctx, canvas);
      break;
    case 'kodak':
      applyKodakVintageEffect(ctx, canvas);
      break;
    default:
      applySoftDreamGlowEffect(ctx, canvas);
  }
}

// Switch filter in camera preview
function switchCameraFilter(filter) {
  selectedFilter = filter;
  
  // Update current filter index
  currentFilterIndex = filterOrder.indexOf(filter);
  
  // Update UI
  updateFilterButtonStyles();
  
  const filterName = getFilterName(filter);
  const filterNameEl = document.getElementById('current-filter-name');
  if (filterNameEl) {
    filterNameEl.textContent = `Current Filter: ${filterName}`;
  }
  
  console.log(`🎨 Switched to filter: ${filterName}`);
}

// Update filter button styles
function updateFilterButtonStyles() {
  // Reset all buttons
  ['dream', 'polaroid', 'movie', 'kodak'].forEach(f => {
    const btn = document.getElementById(`filter-btn-${f}`);
    if (btn) {
      btn.style.border = '2px solid transparent';
      btn.style.transform = 'scale(1)';
    }
  });
  
  // Highlight selected
  const selectedBtn = document.getElementById(`filter-btn-${selectedFilter}`);
  if (selectedBtn) {
    selectedBtn.style.border = '2px solid #ff69b4';
    selectedBtn.style.transform = 'scale(1.05)';
    selectedBtn.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.6)';
  }
}

// Get filter friendly name
function getFilterName(filter) {
  const names = {
    'dream': 'Soft Dream Glow ✨',
    'polaroid': 'Polaroid Love Note 📷',
    'movie': 'Romantic Movie Poster 🎬',
    'kodak': 'Kodak Vintage Film 📸'
  };
  return names[filter] || 'Soft Dream Glow ✨';
}

// FIXED captureRomanticMoment - all filters working
function captureRomanticMoment(video, stream) {
  console.log('🎬 captureRomanticMoment called!');
  console.log('🎨 Selected filter:', selectedFilter);
  
  const canvas = document.getElementById('romantic-canvas');
  if (!canvas) {
    console.error('❌ Canvas not found!');
    alert('Error: Canvas not found. Please try again.');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  if (!video || !video.videoWidth) {
    console.error('❌ Video not ready!');
    alert('Please wait for camera to fully load and try again.');
    return;
  }
  
  console.log('✅ Video dimensions:', video.videoWidth, 'x', video.videoHeight);
  
  // Set canvas size to video size
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  
  console.log('✅ Canvas size set:', canvas.width, 'x', canvas.height);
  
  // Update status
  document.getElementById('camera-status').innerHTML = '📸 Capturing...';
  
  // Draw video frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  console.log('✅ Video frame drawn to canvas');
  
  // Apply filter
  try {
    console.log('🎨 Applying filter:', selectedFilter);
    applyFilterToCanvas(ctx, canvas, selectedFilter);
    console.log('✅ Filter applied successfully');
  } catch (error) {
    console.error('❌ Error applying filter:', error);
  }
  
  // Add romantic frame and caption
  try {
    console.log('🖼️ Adding creative romantic frame for filter:', selectedFilter);
    addCreativeRomanticFrame(ctx, canvas, selectedFilter);
    console.log('✅ Frame and caption added');
  } catch (error) {
    console.error('❌ Error adding frame:', error);
  }
  
  console.log('💾 Converting canvas to blob...');
  
  // Convert to image
  canvas.toBlob(async (blob) => {
    if (!blob) {
      console.error('❌ Failed to create blob');
      alert('Failed to capture photo. Please try again.');
      return;
    }
    
    console.log('✅ Blob created:', blob.size, 'bytes');
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.download = `Bunny_Anku_Love_${getFilterName(selectedFilter).replace(/[^a-zA-Z0-9]/g, '_')}_${date}.jpg`;
    link.href = url;
    link.click();
    
    console.log('✅ Download triggered:', link.download);
    
    // Show success message
    const statusElement = document.getElementById('camera-status');
    if (statusElement) {
      statusElement.innerHTML = `
        ✅ Captured with ${getFilterName(selectedFilter)}! 💕<br>
        📥 Downloading... and sending to your love! 💌
      `;
    }
    
    // Send email with photo
    try {
      console.log('📧 Sending email...');
      await sendRomanticMomentEmail(blob, selectedFilter);
      console.log('✅ Email sent successfully');
    } catch (error) {
      console.error('❌ Email send failed:', error);
    }
    
    // Show celebration after a moment
    setTimeout(() => {
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
    
  }, 'image/jpeg', 0.95);
}

// Expose functions globally
window.openRomanticMomentCamera = openRomanticMomentCamera;
window.switchCameraFilter = switchCameraFilter;
window.selectedFilter = selectedFilter;
// ==================== CREATIVE ROMANTIC FRAMES ====================

function addCreativeRomanticFrame(ctx, canvas, filter) {
  const width = canvas.width;
  const height = canvas.height;
  
  // Caption options for each filter
  const captions = {
    'dream': [
      "This moment feels like destiny ✨",
      "Where you are is where my heart belongs ❤️",
      "A memory wrapped in love 💕"
    ],
    'polaroid': [
      "Proof of a very special 'Yes' 💖",
      "Captured with love 💗",
      "Our little forever moment ✨"
    ],
    'movie': [
      "A Love Story - Starring Us ❤️",
      "Two hearts. One beautiful story 💕",
      "And so, our story begins… ✨"
    ],
    'kodak': [
      "In Bunny's arms, Anku found forever 💕",
      "Two souls, one timeless love story ✨",
      "Bunny & Anku - Where love began 💖"
    ]
  };
  
  // Select random caption
  const filterCaptions = captions[filter] || captions['dream'];
  const selectedCaption = filterCaptions[Math.floor(Math.random() * filterCaptions.length)];
  
  // Apply creative frames based on filter
  if (filter === 'dream') {
    // DREAM: Floating hearts border with romantic glow
    
    // Outer gradient glow border
    const outerGradient = ctx.createLinearGradient(0, 0, width, height);
    outerGradient.addColorStop(0, 'rgba(255, 182, 193, 0.8)');
    outerGradient.addColorStop(0.5, 'rgba(255, 105, 180, 0.8)');
    outerGradient.addColorStop(1, 'rgba(255, 192, 203, 0.8)');
    
    ctx.strokeStyle = outerGradient;
    ctx.lineWidth = 30;
    ctx.strokeRect(15, 15, width - 30, height - 30);
    
    // Inner sparkle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 10;
    ctx.strokeRect(50, 50, width - 100, height - 100);
    
    // Draw floating hearts around border
    ctx.font = '40px Arial';
    const heartPositions = [
      { x: 80, y: 80 }, { x: width - 80, y: 80 },
      { x: 80, y: height - 80 }, { x: width - 80, y: height - 80 },
      { x: width / 2, y: 80 }, { x: width / 2, y: height - 80 },
      { x: 80, y: height / 2 }, { x: width - 80, y: height / 2 }
    ];
    
    heartPositions.forEach(pos => {
      ctx.shadowColor = 'rgba(255, 105, 180, 0.8)';
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(255, 105, 180, 0.9)';
      ctx.fillText('💕', pos.x - 20, pos.y + 15);
    });
    ctx.shadowBlur = 0;
    
    // Top ornamental text with hearts
    ctx.font = 'bold 60px "Brush Script MT", cursive';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 15;
    const topGradient = ctx.createLinearGradient(0, 100, width, 100);
    topGradient.addColorStop(0, '#FFD700');
    topGradient.addColorStop(0.5, '#FF69B4');
    topGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = topGradient;
    ctx.fillText('💖 Bunny & Anku 💖', width / 2, 100);
    ctx.shadowBlur = 0;
    
    // Bottom caption with sparkles
    ctx.font = 'italic bold 34px Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 100);
    
    // Date
    ctx.font = 'bold 32px Arial';
    ctx.fillText('💕 Valentine\'s Day 2026 💕', width / 2, height - 50);
    ctx.shadowBlur = 0;
    
  } else if (filter === 'polaroid') {
    // POLAROID: Classic instant photo with handwritten feel
    
    // White polaroid frame
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    const frameWidth = 50;
    const bottomHeight = 140;
    
    // Top, left, right frames
    ctx.fillRect(0, 0, width, frameWidth);
    ctx.fillRect(0, 0, frameWidth, height);
    ctx.fillRect(width - frameWidth, 0, frameWidth, height);
    
    // Bottom frame (larger for Polaroid style)
    ctx.fillRect(0, height - bottomHeight, width, bottomHeight);
    
    // Add decorative tape effect at corners
    ctx.fillStyle = 'rgba(255, 240, 200, 0.7)';
    ctx.save();
    ctx.translate(80, 40);
    ctx.rotate(-0.3);
    ctx.fillRect(0, 0, 120, 30);
    ctx.restore();
    
    ctx.save();
    ctx.translate(width - 150, 40);
    ctx.rotate(0.3);
    ctx.fillRect(0, 0, 120, 30);
    ctx.restore();
    
    // Draw hearts in corners
    ctx.font = '35px Arial';
    ctx.fillStyle = 'rgba(255, 105, 180, 0.6)';
    ctx.fillText('💕', 60, 40);
    ctx.fillText('💕', width - 90, 40);
    
    // Handwritten-style caption
    ctx.font = 'italic 32px "Comic Sans MS", cursive';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillText(selectedCaption, width / 2, height - 85);
    
    // Date
    ctx.font = 'italic bold 28px "Comic Sans MS", cursive';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText('📷 Valentine\'s Day 2026 📷', width / 2, height - 40);
    
    // Add some sketched hearts
    ctx.font = '25px Arial';
    ctx.fillStyle = 'rgba(255, 105, 180, 0.5)';
    ctx.fillText('💗', width / 2 - 200, height - 45);
    ctx.fillText('💗', width / 2 + 200, height - 45);
    
  } else if (filter === 'movie') {
    // MOVIE: Cinematic film strip style
    
    // Top and bottom black bars (cinema style)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, width, 140);
    ctx.fillRect(0, height - 140, width, 140);
    
    // Film strip perforations on sides
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < height; i += 40) {
      ctx.fillRect(10, i, 20, 25);
      ctx.fillRect(width - 30, i, 20, 25);
    }
    
    // Gold film reel decoration
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(80, 70, 45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width - 80, 70, 45, 0, Math.PI * 2);
    ctx.stroke();
    
    // Title with film style
    ctx.font = 'bold 55px "Helvetica Neue", Arial';
    ctx.textAlign = 'center';
    
    // Gradient gold text
    const titleGradient = ctx.createLinearGradient(0, 70, width, 70);
    titleGradient.addColorStop(0, '#FFD700');
    titleGradient.addColorStop(0.5, '#FFA500');
    titleGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = titleGradient;
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillText('💕 A LOVE STORY 💕', width / 2, 75);
    ctx.shadowBlur = 0;
    
    // Subtitle
    ctx.font = 'italic 28px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Starring Bunny & Anku', width / 2, 115);
    
    // Bottom caption
    ctx.font = 'italic bold 36px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillText(selectedCaption, width / 2, height - 85);
    ctx.shadowBlur = 0;
    
    // Date
    ctx.font = 'bold 32px Arial';
    const dateGradient = ctx.createLinearGradient(0, height - 40, width, height - 40);
    dateGradient.addColorStop(0, '#FFD700');
    dateGradient.addColorStop(0.5, '#FFA500');
    dateGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = dateGradient;
    ctx.fillText('🎬 FEBRUARY 14, 2026 🎬', width / 2, height - 40);
    
  } else if (filter === 'kodak') {
    // KODAK: Vintage film with photo corners and stamps
    
    // Vintage sepia border
    ctx.fillStyle = 'rgba(139, 90, 43, 0.4)';
    ctx.fillRect(0, 0, width, 60);
    ctx.fillRect(0, height - 60, width, 60);
    ctx.fillRect(0, 0, 60, height);
    ctx.fillRect(width - 60, 0, 60, height);
    
    // Photo corners (vintage style)
    ctx.fillStyle = 'rgba(101, 67, 33, 0.7)';
    const cornerSize = 80;
    
    // Top-left corner
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(cornerSize, 0);
    ctx.lineTo(0, cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Top-right corner
    ctx.beginPath();
    ctx.moveTo(width, 0);
    ctx.lineTo(width - cornerSize, 0);
    ctx.lineTo(width, cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Bottom-left corner
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(cornerSize, height);
    ctx.lineTo(0, height - cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Bottom-right corner
    ctx.beginPath();
    ctx.moveTo(width, height);
    ctx.lineTo(width - cornerSize, height);
    ctx.lineTo(width, height - cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Decorative vintage border
    ctx.strokeStyle = 'rgba(255, 240, 220, 0.6)';
    ctx.lineWidth = 8;
    ctx.strokeRect(70, 70, width - 140, height - 140);
    
    // Inner decorative line
    ctx.strokeStyle = 'rgba(139, 90, 43, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 80, width - 160, height - 160);
    
    // Vintage stamp effect
    ctx.font = '35px Arial';
    ctx.save();
    ctx.translate(width - 150, 120);
    ctx.rotate(0.2);
    ctx.strokeStyle = 'rgba(255, 50, 50, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 100, 60);
    ctx.font = 'bold 18px Arial';
    ctx.fillStyle = 'rgba(255, 50, 50, 0.4)';
    ctx.textAlign = 'center';
    ctx.fillText('LOVE', 50, 25);
    ctx.fillText('FEB 14', 50, 45);
    ctx.restore();
    
    // Top title with film style
    ctx.font = 'bold 50px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText('📸 KODAK MOMENT 📸', width / 2, 110);
    ctx.shadowBlur = 0;
    
    // Film strip decoration
    ctx.fillStyle = 'rgba(139, 90, 43, 0.3)';
    for (let i = 100; i < width - 100; i += 50) {
      ctx.fillRect(i, 140, 30, 15);
    }
    
    // Caption
    ctx.font = 'italic bold 36px Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 100);
    ctx.shadowBlur = 0;
    
    // Date with vintage style
    ctx.font = 'bold 32px "Courier New", monospace';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText('🎞️ FEBRUARY 14, 2026 🎞️', width / 2, height - 50);
    ctx.shadowBlur = 0;
  }
}

// ==================== FILTER EFFECTS ====================

// ==================== ENHANCED MODERN FILTER EFFECTS ====================

// Filter 1: Soft Dream Glow - ENHANCED Modern Dreamy Look
function applySoftDreamGlowEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply vibrant dreamy effect with pink-purple tones
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Enhanced pink-purple dreamy tones (more vibrant)
    data[i] = Math.min(255, r * 1.18 + 35);       // Stronger pink boost
    data[i + 1] = Math.min(255, g * 1.12 + 25);   // Enhanced warmth
    data[i + 2] = Math.min(255, b * 1.05 + 20);   // Slight blue for depth
    
    // Soft glow effect with brightness boost
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.88 + brightness * 0.12 + 25);
    data[i + 1] = Math.min(255, data[i + 1] * 0.90 + brightness * 0.10 + 18);
    data[i + 2] = Math.min(255, data[i + 2] * 0.92 + brightness * 0.08 + 15);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add vibrant pink vignette with stronger effect
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 192, 203, 0.1)');
  vignette.addColorStop(0.6, 'rgba(255, 105, 180, 0.15)');
  vignette.addColorStop(1, 'rgba(255, 20, 147, 0.25)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add sparkle overlay for dreamy effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 2: Polaroid Love Note - ENHANCED Vibrant Retro
function applyPolaroidEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply modern vintage look with enhanced colors
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Vibrant retro colors (not too desaturated)
    const avg = (r + g + b) / 3;
    data[i] = Math.min(255, r * 1.10 + avg * 0.05 + 20);      // Warm reds
    data[i + 1] = Math.min(255, g * 1.05 + avg * 0.05 + 15);  // Balanced
    data[i + 2] = Math.min(255, b * 0.90 + avg * 0.10 + 10);  // Less blue
    
    // Boost contrast for modern look
    const contrast = 1.15;
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, (data[i] - brightness) * contrast + brightness + 5);
    data[i + 1] = Math.min(255, (data[i + 1] - brightness) * contrast + brightness + 5);
    data[i + 2] = Math.min(255, (data[i + 2] - brightness) * contrast + brightness + 5);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add warm vintage glow
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  glow.addColorStop(0, 'rgba(255, 240, 200, 0.05)');
  glow.addColorStop(0.6, 'rgba(255, 200, 150, 0.08)');
  glow.addColorStop(1, 'rgba(255, 180, 100, 0.12)');
  
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 3: Romantic Movie Poster - ENHANCED Cinematic Look
function applyMoviePosterEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply cinematic color grading (teal & orange Hollywood look)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Hollywood teal & orange color grading
    const brightness = (r + g + b) / 3;
    
    if (brightness > 128) {
      // Highlights: warm orange/golden
      data[i] = Math.min(255, r * 1.20 + 25);       // Strong orange in highlights
      data[i + 1] = Math.min(255, g * 1.12 + 15);   // Golden warmth
      data[i + 2] = Math.min(255, b * 0.85);        // Reduced blue
    } else {
      // Shadows: cool teal/blue
      data[i] = Math.min(255, r * 1.05);            // Slight red
      data[i + 1] = Math.min(255, g * 1.08 + 10);   // Teal in shadows
      data[i + 2] = Math.min(255, b * 1.15 + 15);   // Strong blue/teal
    }
    
    // High contrast for cinematic look
    const contrast = 1.25;
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, Math.max(0, (data[i] - newBrightness) * contrast + newBrightness));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - newBrightness) * contrast + newBrightness));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - newBrightness) * contrast + newBrightness));
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add cinematic vignette (darker edges)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.65;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0.15)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 4: Kodak Black & White - CLASSIC B&W Film Look
function applyKodakVintageEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply classic black and white conversion
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Classic B&W conversion (weighted for better tonality)
    // Red channel = 0.299, Green = 0.587, Blue = 0.114
    let gray = r * 0.299 + g * 0.587 + b * 0.114;
    
    // Add slight contrast boost for film look
    const contrast = 1.15;
    gray = ((gray - 128) * contrast + 128);
    
    // Lifted blacks (classic film characteristic)
    gray = Math.min(255, Math.max(15, gray + 10));
    
    // Apply to all channels for B&W
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add subtle film grain texture
  const grain = ctx.createImageData(canvas.width, canvas.height);
  const grainData = grain.data;
  
  for (let i = 0; i < grainData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 15; // Subtle grain
    grainData[i] = 128 + noise;
    grainData[i + 1] = 128 + noise;
    grainData[i + 2] = 128 + noise;
    grainData[i + 3] = 15; // Low opacity
  }
  
  ctx.globalCompositeOperation = 'overlay';
  ctx.putImageData(grain, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  
  // Add classic film vignette (darker edges)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.6, 'rgba(0, 0, 0, 0.12)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.28)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
// Filter 1: Romantic Vibe - Dreamy rose gold with soft pink tones
function applyRomanticVibeEffect(ctx, canvas) {
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply dreamy romantic color effect with soft glow
  for (let i = 0; i < data.length; i += 4) {
    // Soft romantic pink/rose gold tones
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Add warm romantic glow
    data[i] = Math.min(255, r * 1.15 + 25);       // Red boost for warmth
    data[i + 1] = Math.min(255, g * 1.08 + 15);   // Slight green
    data[i + 2] = Math.min(255, b * 0.95 + 10);   // Reduced blue for warmth
    
    // Add dreamy pastel effect
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.85 + brightness * 0.15 + 30);     // Rose gold
    data[i + 1] = Math.min(255, data[i + 1] * 0.88 + brightness * 0.12 + 20);  // Soft pink
    data[i + 2] = Math.min(255, data[i + 2] * 0.92 + brightness * 0.08 + 15);  // Warm undertone
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add soft romantic vignette with pink glow
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const vignette = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, maxRadius
  );
  vignette.addColorStop(0, 'rgba(255, 192, 203, 0)');
  vignette.addColorStop(0.5, 'rgba(255, 182, 193, 0.05)');
  vignette.addColorStop(0.8, 'rgba(255, 105, 180, 0.15)');
  vignette.addColorStop(1, 'rgba(199, 21, 133, 0.3)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add dreamy bokeh light effect
  ctx.globalAlpha = 0.15;
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 80 + 40;
    
    const bokeh = ctx.createRadialGradient(x, y, 0, x, y, size);
    bokeh.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    bokeh.addColorStop(0.4, 'rgba(255, 192, 203, 0.3)');
    bokeh.addColorStop(1, 'rgba(255, 182, 193, 0)');
    
    ctx.fillStyle = bokeh;
    ctx.fillRect(x - size, y - size, size * 2, size * 2);
  }
  ctx.globalAlpha = 1.0;
}

// Filter 2: Love Mood - Passionate deep pink with golden sparkles
function applyLoveMoodEffect(ctx, canvas) {
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply passionate love mood color effect
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Add passionate deep pink and warm golden tones
    data[i] = Math.min(255, r * 1.25 + 35);       // Strong red boost for passion
    data[i + 1] = Math.min(255, g * 1.12 + 20);   // Golden undertones
    data[i + 2] = Math.min(255, b * 0.85 + 5);    // Reduced blue for warmth
    
    // Add deep romantic saturation
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.88 + brightness * 0.12 + 40);     // Deep pink
    data[i + 1] = Math.min(255, data[i + 1] * 0.90 + brightness * 0.10 + 25);  // Golden glow
    data[i + 2] = Math.min(255, data[i + 2] * 0.95 + brightness * 0.05 + 10);  // Warm base
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add deep passionate vignette with magenta/gold glow
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const vignette = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, maxRadius
  );
  vignette.addColorStop(0, 'rgba(255, 215, 0, 0)');           // Golden center
  vignette.addColorStop(0.4, 'rgba(255, 20, 147, 0.08)');     // Deep pink
  vignette.addColorStop(0.7, 'rgba(199, 21, 133, 0.18)');     // Magenta
  vignette.addColorStop(1, 'rgba(139, 0, 139, 0.35)');        // Deep purple edge
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add golden sparkle effect
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 100 + 50;
    
    const sparkle = ctx.createRadialGradient(x, y, 0, x, y, size);
    sparkle.addColorStop(0, 'rgba(255, 215, 0, 0.8)');         // Golden center
    sparkle.addColorStop(0.3, 'rgba(255, 182, 193, 0.4)');     // Pink mid
    sparkle.addColorStop(1, 'rgba(255, 20, 147, 0)');          // Deep pink fade
    
    ctx.fillStyle = sparkle;
    ctx.fillRect(x - size, y - size, size * 2, size * 2);
  }
  ctx.globalAlpha = 1.0;
  
  // Add passionate heart sparkles in corners
  const heartPositions = [
    { x: canvas.width * 0.1, y: canvas.height * 0.1 },
    { x: canvas.width * 0.9, y: canvas.height * 0.1 },
    { x: canvas.width * 0.1, y: canvas.height * 0.9 },
    { x: canvas.width * 0.9, y: canvas.height * 0.9 }
  ];
  
  ctx.globalAlpha = 0.3;
  heartPositions.forEach(pos => {
    const size = 120;
    const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.9)');
    gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(pos.x - size, pos.y - size, size * 2, size * 2);
  });
  ctx.globalAlpha = 1.0;
}

function addRomanticFrame(ctx, canvas) {
  const width = canvas.width;
  const height = canvas.height;
  
  // Gradient border with romantic colors
  const borderGradient = ctx.createLinearGradient(0, 0, width, height);
  borderGradient.addColorStop(0, 'rgba(255, 105, 180, 0.9)');
  borderGradient.addColorStop(0.33, 'rgba(255, 182, 193, 0.9)');
  borderGradient.addColorStop(0.66, 'rgba(255, 192, 203, 0.9)');
  borderGradient.addColorStop(1, 'rgba(255, 105, 180, 0.9)');
  
  // Outer decorative frame
  ctx.strokeStyle = borderGradient;
  ctx.lineWidth = 25;
  ctx.strokeRect(12, 12, width - 24, height - 24);
  
  // Inner delicate frame
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.lineWidth = 10;
  ctx.strokeRect(40, 40, width - 80, height - 80);
  
  // Thin gold accent frame
  ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, width - 100, height - 100);
  
  // Add floating hearts animation positions
  const hearts = [
    { emoji: '💕', x: 70, y: 70, size: 50 },
    { emoji: '💖', x: width - 70, y: 70, size: 50 },
    { emoji: '💗', x: 70, y: height - 70, size: 50 },
    { emoji: '💝', x: width - 70, y: height - 70, size: 50 },
    { emoji: '💓', x: width / 2, y: 55, size: 40 },
    { emoji: '💞', x: width / 2, y: height - 55, size: 40 }
  ];
  
  // Draw hearts with glow effect
  hearts.forEach(heart => {
    // Glow effect
    ctx.shadowColor = 'rgba(255, 105, 180, 0.8)';
    ctx.shadowBlur = 20;
    ctx.font = `${heart.size}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(heart.emoji, heart.x, heart.y);
  });
  ctx.shadowBlur = 0;
  
  // Top romantic title with gradient
  const titleGradient = ctx.createLinearGradient(width / 2 - 200, 0, width / 2 + 200, 0);
  titleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
  titleGradient.addColorStop(0.5, 'rgba(255, 192, 203, 1)');
  titleGradient.addColorStop(1, 'rgba(255, 255, 255, 0.95)');
  
  ctx.font = 'bold 65px "Brush Script MT", cursive, "Comic Sans MS"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  
  // Title shadow for depth
  ctx.shadowColor = 'rgba(199, 21, 133, 0.6)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  const topText = '✨ Our Love Story ✨';
  ctx.fillStyle = titleGradient;
  ctx.fillText(topText, width / 2, 75);
  
  // Outline for better visibility
  ctx.strokeStyle = 'rgba(199, 21, 133, 0.7)';
  ctx.lineWidth = 4;
  ctx.strokeText(topText, width / 2, 75);
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // Bottom romantic quote
  ctx.font = 'italic bold 32px Georgia, serif';
  const quoteY = height - 140;
  const quote = '"She Said YES! Forever Starts Now" 💕';
  
  ctx.shadowColor = 'rgba(255, 105, 180, 0.5)';
  ctx.shadowBlur = 10;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillText(quote, width / 2, quoteY);
  ctx.shadowBlur = 0;
  
  // Date with elegant styling
  ctx.font = 'bold 38px Arial';
  const dateText = `💖 Valentine's Day 2026 💖`;
  const dateY = height - 85;
  
  ctx.shadowColor = 'rgba(255, 105, 180, 0.6)';
  ctx.shadowBlur = 12;
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillText(dateText, width / 2, dateY);
  
  ctx.strokeStyle = 'rgba(199, 21, 133, 0.8)';
  ctx.lineWidth = 3;
  ctx.strokeText(dateText, width / 2, dateY);
  ctx.shadowBlur = 0;
  
  // Add sparkle effects
  const sparkles = [
    { x: width * 0.15, y: height * 0.15 },
    { x: width * 0.85, y: height * 0.15 },
    { x: width * 0.15, y: height * 0.85 },
    { x: width * 0.85, y: height * 0.85 },
    { x: width * 0.5, y: height * 0.12 },
    { x: width * 0.5, y: height * 0.88 }
  ];
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  sparkles.forEach(sparkle => {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const radius = i % 2 === 0 ? 8 : 3;
      const x = sparkle.x + Math.cos(angle) * radius;
      const y = sparkle.y + Math.sin(angle) * radius;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
  });
  
  // Add cute romantic stickers
  ctx.font = '35px Arial';
  ctx.fillText('🌹', width * 0.1, height * 0.5);
  ctx.fillText('🌹', width * 0.9, height * 0.5);
  ctx.fillText('💐', width * 0.5, height * 0.08);
  ctx.fillText('🎀', width * 0.5, height * 0.92);
}

async function sendRomanticMomentEmail(photoBlob) {
  try {
    // Log photo details for debugging
    const sizeMB = (photoBlob.size / (1024 * 1024)).toFixed(2);
    console.log(`📸 Photo blob details:`, {
      size: `${sizeMB} MB`,
      type: photoBlob.type,
      sizeBytes: photoBlob.size,
      constructor: photoBlob.constructor.name
    });
    
    // Ensure we have a valid blob
    if (!photoBlob || photoBlob.size === 0) {
      console.error('❌ Invalid photo blob');
      alert('Failed to capture photo. Please try again.');
      return;
    }
    
    const formData = new FormData();
    formData.append('access_key', '3e74662b-aade-41a9-9f45-c72fb92d39f1');
    formData.append('subject', '💖 She Said YES! + Our Love Forever Photo 📸💕');
    formData.append('from_name', 'Valentine Week App - Love Forever');
    formData.append('to', 'pachourimohit1@gmail.com');
    
    // Create a File object from the Blob with proper metadata
    const photoFile = new File(
      [photoBlob], 
      'Our_Love_Forever_Valentine.jpg',
      { 
        type: 'image/jpeg',
        lastModified: Date.now()
      }
    );
    
    // Add photo as attachment with File object (better compatibility)
    formData.append('attachment', photoFile);
    
    formData.append('message', `
      💖💖💖 VALENTINE'S DAY - SHE SAID YES! 💖💖💖
      
      🎉 AMAZING NEWS! 🎉
      
      Response: YES! ✅
      
      She said: "YES! I will be your Valentine! 💕"
      
      📸 MAGICAL MOMENT CAPTURED! 📸
      A beautiful photo has been captured to freeze this magical moment forever!
      See the attached photo - our first Magical moment as an official couple! 💑
      
      ✨ Photo Details:
      - Filename: Our_Love_Forever_Valentine.jpg
      - Size: ${sizeMB} MB
      - Quality: High (1280x720, Vintage Romantic Effect)
      - Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      - Day: Day 7 - Valentine's Day ❤️
      - Special: Love Forever Photo Included! 📸💕
      
      🎉🎉🎉 CELEBRATION TIME! 🎉🎉🎉
      
      "Aaj se teri, baahon mein hai jeena
      Aaj se teri, raahon mein hai chalna  
      Aaj se teri, yaadein hai dil mein
      Aaj se meri, zindagi hai tere sang"
      
      This photo captures the beginning of forever! 💞
      
      With all my love,
      Your Valentine Week App 💕
      
      Made with ❤️ by Bunny for Anku
      
      P.S. The photo has Romantic vintage effects and a romantic frame! 📸✨
      
      📎 CHECK YOUR EMAIL ATTACHMENTS FOR THE PHOTO!
      (Look in inbox or spam folder - from: noreply@web3forms.com)
    `);
    
    console.log('📤 Sending email with photo attachment to Web3Forms...');
    console.log('📎 File details:', {
      name: photoFile.name,
      size: photoFile.size,
      type: photoFile.type
    });
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    console.log('📧 Web3Forms API response:', data);
    
    if (data.success) {
      console.log('✅ Magical moment email sent successfully! 💕📸');
      console.log('📧 Email sent to: pachourimohit1@gmail.com');
      console.log('📎 Attachment: Our_Love_Forever_Valentine.jpg (' + sizeMB + ' MB)');
      console.log('📬 Check your email inbox or spam folder!');
      
      // Update status message
      const statusElement = document.getElementById('camera-status');
      if (statusElement) {
        statusElement.innerHTML = `
          ✅ Photo sent to email! 💌<br>
          📧 To: pachourimohit1@gmail.com<br>
          📎 Attachment: ${sizeMB} MB<br>
          <small style="color: #666;">Check inbox or spam folder<br>From: noreply@web3forms.com</small>
        `;
      }
    } else {
      console.error('❌ Web3Forms API error:', data);
      const errorMsg = data.message || data.error || 'Unknown error';
      console.error('Error details:', errorMsg);
      
      alert(`Email sending failed: ${errorMsg}\n\n✅ Photo was downloaded to your device.\n\nPlease check:\n1. Browser console for details\n2. Your Web3Forms API key\n3. Email spam folder`);
      
      // Show error in UI
      const statusElement = document.getElementById('camera-status');
      if (statusElement) {
        statusElement.innerHTML = `
          ⚠️ Email failed, but photo saved! 📥<br>
          <small style="color: #666;">Check Downloads folder<br>Error: ${errorMsg}</small>
        `;
      }
    }
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('Error stack:', error.stack);
    
    alert(`Error sending email: ${error.message}\n\n✅ Photo was downloaded to your device.\n\nError details in console.`);
    
    // Show error in UI
    const statusElement = document.getElementById('camera-status');
    if (statusElement) {
      statusElement.innerHTML = `
        ⚠️ Email error, but photo saved! 📥<br>
        <small style="color: #666;">Check Downloads folder</small>
      `;
    }
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
      
      <!-- Main Content -->
      <div style="position: relative; z-index: 2; padding: 2rem; max-width: 1200px; margin: 0 auto;">
        
        <!-- Title Section -->
        <div class="text-center mb-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: #F4A460;">🧸 Teddy Day Special 🧸</h2>
        </div>

        <!-- Ted Bear Character with Speech Bubble -->
        <div style="margin: 3rem auto; max-width: 600px; position: relative;">
          <!-- Speech Bubble -->
          <div style="
            background: white;
            border: 4px solid #F4A460;
            border-radius: 25px;
            padding: 2rem 2.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            position: relative;
            animation: bubbleBounce 2s ease-in-out infinite;
          ">
            <p style="font-size: 1.8rem; font-weight: bold; color: #8B4513; text-align: center; line-height: 1.6; margin: 0;">
              Let's watch a movie together! 🎬
            </p>
            <!-- Arrow pointing down -->
            <div style="
              position: absolute;
              bottom: -30px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 30px solid transparent;
              border-right: 30px solid transparent;
              border-top: 30px solid #F4A460;
            "></div>
            <div style="
              position: absolute;
              bottom: -23px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 26px solid transparent;
              border-right: 26px solid transparent;
              border-top: 26px solid white;
            "></div>
          </div>

          <!-- Ted Bear Character -->
          <div id="ted-character" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2rem auto;
            animation: tedBounce 2s ease-in-out infinite;
          ">
            <!-- Ted's Head -->
            <div style="position: relative; margin-bottom: -20px;">
              <!-- Head -->
              <div style="
                width: 140px;
                height: 140px;
                background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                border-radius: 50%;
                position: relative;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: headTilt 3s ease-in-out infinite;
              ">
                <!-- Left Ear -->
                <div style="
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 50%;
                  top: -15px;
                  left: 10px;
                  box-shadow: inset -3px -3px 10px rgba(0,0,0,0.2);
                ">
                  <div style="
                    width: 30px;
                    height: 30px;
                    background: #CD853F;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "></div>
                </div>
                
                <!-- Right Ear -->
                <div style="
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 50%;
                  top: -15px;
                  right: 10px;
                  box-shadow: inset -3px -3px 10px rgba(0,0,0,0.2);
                ">
                  <div style="
                    width: 30px;
                    height: 30px;
                    background: #CD853F;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "></div>
                </div>

                <!-- Face -->
                <div style="
                  position: absolute;
                  width: 90px;
                  height: 80px;
                  background: #DEB887;
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -40%);
                  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1);
                ">
                  <!-- Left Eye -->
                  <div style="
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    background: #000;
                    border-radius: 50%;
                    top: 25px;
                    left: 20px;
                    animation: eyeBlink 4s ease-in-out infinite;
                  ">
                    <div style="
                      width: 6px;
                      height: 6px;
                      background: white;
                      border-radius: 50%;
                      position: absolute;
                      top: 4px;
                      left: 4px;
                    "></div>
                  </div>

                  <!-- Right Eye -->
                  <div style="
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    background: #000;
                    border-radius: 50%;
                    top: 25px;
                    right: 20px;
                    animation: eyeBlink 4s ease-in-out infinite;
                  ">
                    <div style="
                      width: 6px;
                      height: 6px;
                      background: white;
                      border-radius: 50%;
                      position: absolute;
                      top: 4px;
                      left: 4px;
                    "></div>
                  </div>

                  <!-- Nose -->
                  <div style="
                    position: absolute;
                    width: 20px;
                    height: 16px;
                    background: #8B4513;
                    border-radius: 50%;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                  "></div>

                  <!-- Smile -->
                  <div style="
                    position: absolute;
                    width: 40px;
                    height: 20px;
                    border: 3px solid #8B4513;
                    border-top: none;
                    border-radius: 0 0 40px 40px;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                  "></div>
                </div>
              </div>
            </div>

            <!-- Ted's Body -->
            <div style="position: relative;">
              <!-- Body -->
              <div style="
                width: 120px;
                height: 140px;
                background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                position: relative;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
              ">
                <!-- Belly -->
                <div style="
                  position: absolute;
                  width: 80px;
                  height: 90px;
                  background: #DEB887;
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -45%);
                  box-shadow: inset 0 -5px 15px rgba(0,0,0,0.1);
                "></div>

                <!-- RED OVERALL OUTFIT -->
                <div style="
                  position: absolute;
                  width: 95px;
                  height: 110px;
                  background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
                  border-radius: 15px 15px 30px 30px;
                  top: 15px;
                  left: 50%;
                  transform: translateX(-50%);
                  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                  z-index: 5;
                ">
                  <!-- Left Strap -->
                  <div style="
                    position: absolute;
                    width: 12px;
                    height: 50px;
                    background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
                    border-radius: 8px;
                    top: -15px;
                    left: 15px;
                    transform: rotate(-10deg);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                  ">
                    <!-- Button -->
                    <div style="
                      position: absolute;
                      width: 8px;
                      height: 8px;
                      background: #FFD700;
                      border-radius: 50%;
                      top: 5px;
                      left: 50%;
                      transform: translateX(-50%);
                      border: 2px solid #FFA000;
                      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    "></div>
                  </div>
                  
                  <!-- Right Strap -->
                  <div style="
                    position: absolute;
                    width: 12px;
                    height: 50px;
                    background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
                    border-radius: 8px;
                    top: -15px;
                    right: 15px;
                    transform: rotate(10deg);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                  ">
                    <!-- Button -->
                    <div style="
                      position: absolute;
                      width: 8px;
                      height: 8px;
                      background: #FFD700;
                      border-radius: 50%;
                      top: 5px;
                      left: 50%;
                      transform: translateX(-50%);
                      border: 2px solid #FFA000;
                      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    "></div>
                  </div>

                  <!-- Chest Pocket with Name Tag -->
                  <div style="
                    position: absolute;
                    width: 55px;
                    height: 35px;
                    background: white;
                    border: 3px solid #C62828;
                    border-radius: 8px;
                    top: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  ">
                    <!-- Name "TED" -->
                    <span style="
                      font-family: Arial, sans-serif;
                      font-size: 13px;
                      font-weight: bold;
                      color: #C62828;
                      letter-spacing: 1px;
                    ">TED</span>
                  </div>

                  <!-- Bottom Badge (circular pin) -->
                  <div style="
                    position: absolute;
                    width: 28px;
                    height: 28px;
                    background: white;
                    border: 3px solid #FFD700;
                    border-radius: 50%;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  ">
                    <!-- Heart emoji or cute icon -->
                    <span style="font-size: 14px;">❤️</span>
                  </div>
                </div>

                <!-- Left Arm -->
                <div style="
                  position: absolute;
                  width: 40px;
                  height: 80px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 20px;
                  top: 20px;
                  left: -25px;
                  transform: rotate(-30deg);
                  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                  animation: armWave 2s ease-in-out infinite;
                ">
                  <!-- Paw -->
                  <div style="
                    position: absolute;
                    width: 35px;
                    height: 35px;
                    background: #CD853F;
                    border-radius: 50%;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                  "></div>
                </div>

                <!-- Right Arm -->
                <div style="
                  position: absolute;
                  width: 40px;
                  height: 80px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 20px;
                  top: 20px;
                  right: -25px;
                  transform: rotate(30deg);
                  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                  animation: armWave 2s ease-in-out infinite;
                  animation-delay: 1s;
                ">
                  <!-- Paw -->
                  <div style="
                    position: absolute;
                    width: 35px;
                    height: 35px;
                    background: #CD853F;
                    border-radius: 50%;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                  "></div>
                </div>

                <!-- Left Leg -->
                <div style="
                  position: absolute;
                  width: 35px;
                  height: 60px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 20px;
                  bottom: -45px;
                  left: 20px;
                  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                ">
                  <!-- Foot -->
                  <div style="
                    position: absolute;
                    width: 40px;
                    height: 25px;
                    background: #CD853F;
                    border-radius: 50%;
                    bottom: -5px;
                    left: -5px;
                  "></div>
                </div>

                <!-- Right Leg -->
                <div style="
                  position: absolute;
                  width: 35px;
                  height: 60px;
                  background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%);
                  border-radius: 20px;
                  bottom: -45px;
                  right: 20px;
                  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                ">
                  <!-- Foot -->
                  <div style="
                    position: absolute;
                    width: 40px;
                    height: 25px;
                    background: #CD853F;
                    border-radius: 50%;
                    bottom: -5px;
                    right: -5px;
                  "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Movie Invitation Card -->
        <div class="glass-card" style="padding: 2.5rem; margin: 2rem auto; max-width: 800px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 3px solid #F4A460;">
          
          <!-- Movie Poster -->
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="
              display: inline-block;
              background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
              padding: 1rem;
              border-radius: 15px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.3);
              transform: rotate(-2deg);
            ">
              <img src="/static/ted-movie-poster.jpg" alt="Ted Movie Poster" style="
                max-width: 300px;
                width: 100%;
                border-radius: 10px;
                display: block;
              ">
            </div>
          </div>

          <!-- Movie Details -->
          <div style="text-align: center; margin-bottom: 2rem;">
            <p style="font-size: 1.3rem; color: #8B4513; margin-bottom: 1rem; line-height: 1.6;">
              🎬 <strong>Movie Night Invitation</strong> 🎬
            </p>
            <p style="font-size: 1.1rem; color: #666; margin-bottom: 0.5rem;">
              Join me for a cozy movie night! 🍿
            </p>
            <p style="font-size: 1rem; color: #FF69B4; font-weight: 600;">
              Let's laugh together watching Ted! 😄💕
            </p>
          </div>

          <!-- Time Slot Selection -->
          <div style="margin-bottom: 2rem;">
            <h4 style="text-align: center; font-size: 1.4rem; color: #8B4513; margin-bottom: 1.5rem; font-weight: bold;">
              📅 Pick Your Preferred Time Slot
            </h4>
            
            <div id="time-slots" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
              <!-- Time slots will be generated by JS -->
            </div>

            <p style="text-align: center; font-size: 0.9rem; color: #999; font-style: italic;">
              All slots are IST (Indian Standard Time) ⏰
            </p>
          </div>

          <!-- Selected Slot Display -->
          <div id="selected-slot-display" style="
            background: linear-gradient(135deg, #FFE5EC 0%, #FFB3C6 100%);
            border: 3px solid #FF69B4;
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            display: none;
            margin-bottom: 1.5rem;
          ">
            <p style="font-size: 1.2rem; color: #C71585; font-weight: bold; margin-bottom: 0.5rem;">
              🎉 Awesome Choice! 🎉
            </p>
            <p style="font-size: 1.1rem; color: #8B4513;" id="selected-time-text"></p>
            <p style="font-size: 0.95rem; color: #666; margin-top: 0.5rem;">
              I'll send you the movie link on the selected date! 💕
            </p>
          </div>

          <!-- Fun Facts Section -->
          <div style="background: linear-gradient(135deg, #FFF5E1 0%, #FFE4B5 100%); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
            <h4 style="text-align: center; font-size: 1.2rem; color: #8B4513; margin-bottom: 1rem; font-weight: bold;">
              🎭 Fun Ted Movie Facts
            </h4>
            <div id="fun-facts" style="font-size: 1rem; color: #666; line-height: 1.8;">
              <!-- Facts will rotate -->
            </div>
          </div>

          <!-- Snacks Section -->
          <div style="margin-top: 2rem; text-align: center;">
            <p style="font-size: 1.2rem; color: #8B4513; margin-bottom: 1rem; font-weight: bold;">
              🍿 Movie Snacks Ready! 🍿
            </p>
            <div style="font-size: 3rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <span class="snack-bounce" style="animation: snackBounce 1s ease-in-out infinite; animation-delay: 0s;">🍿</span>
              <span class="snack-bounce" style="animation: snackBounce 1s ease-in-out infinite; animation-delay: 0.2s;">🥤</span>
              <span class="snack-bounce" style="animation: snackBounce 1s ease-in-out infinite; animation-delay: 0.4s;">🍫</span>
              <span class="snack-bounce" style="animation: snackBounce 1s ease-in-out infinite; animation-delay: 0.6s;">🍕</span>
              <span class="snack-bounce" style="animation: snackBounce 1s ease-in-out infinite; animation-delay: 0.8s;">🍪</span>
            </div>
          </div>

        </div>

        <!-- Cute Message -->
        <div style="text-align: center; margin-top: 2rem;">
          <p style="font-size: 1.3rem; color: #FF69B4; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
            Can't wait to watch and laugh together! 🧸💕
          </p>
        </div>

      </div>
    </div>
  `;
  
  // Create floating teddies
  createFloatingTeddies();
  
  // Generate time slots
  generateTimeSlots();
  
  // Start rotating fun facts
  rotateFunFacts();
}

function generateTimeSlots() {
  const timeSlotsContainer = document.getElementById('time-slots');
  
  const slots = [
    { day: 'Tonight', time: '9:00 PM', date: 'Feb 10', emoji: '🌙' },
    { day: 'Tomorrow', time: '8:00 PM', date: 'Feb 11', emoji: '🌆' },
    { day: 'This Weekend', time: '7:00 PM', date: 'Feb 14', emoji: '💝' },
    { day: 'Next Saturday', time: '8:30 PM', date: 'Feb 15', emoji: '🎬' },
    { day: 'Sunday Evening', time: '6:00 PM', date: 'Feb 16', emoji: '🍿' },
    { day: 'Your Choice', time: 'Pick Any Time!', date: 'Flexible', emoji: '⭐' }
  ];
  
  slots.forEach((slot, index) => {
    const slotCard = document.createElement('div');
    slotCard.className = 'time-slot-card';
    slotCard.style.cssText = `
      background: white;
      border: 3px solid #F4A460;
      border-radius: 12px;
      padding: 1.2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    `;
    
    slotCard.innerHTML = `
      <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${slot.emoji}</div>
      <div style="font-size: 1.1rem; font-weight: bold; color: #8B4513; margin-bottom: 0.3rem;">${slot.day}</div>
      <div style="font-size: 1rem; color: #FF69B4; font-weight: 600; margin-bottom: 0.3rem;">${slot.time}</div>
      <div style="font-size: 0.85rem; color: #999;">${slot.date}</div>
    `;
    
    // Hover effects
    slotCard.addEventListener('mouseenter', () => {
      slotCard.style.transform = 'translateY(-5px) scale(1.05)';
      slotCard.style.boxShadow = '0 10px 30px rgba(244, 164, 96, 0.4)';
      slotCard.style.borderColor = '#FF69B4';
    });
    
    slotCard.addEventListener('mouseleave', () => {
      if (!slotCard.classList.contains('selected')) {
        slotCard.style.transform = 'translateY(0) scale(1)';
        slotCard.style.boxShadow = 'none';
        slotCard.style.borderColor = '#F4A460';
      }
    });
    
    // Click to select
    slotCard.addEventListener('click', () => {
      // Remove selection from all cards
      document.querySelectorAll('.time-slot-card').forEach(card => {
        card.classList.remove('selected');
        card.style.background = 'white';
        card.style.borderColor = '#F4A460';
        card.style.transform = 'translateY(0) scale(1)';
      });
      
      // Select this card
      slotCard.classList.add('selected');
      slotCard.style.background = 'linear-gradient(135deg, #FFE5EC 0%, #FFB3C6 100%)';
      slotCard.style.borderColor = '#FF69B4';
      slotCard.style.transform = 'translateY(-5px) scale(1.05)';
      slotCard.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.5)';
      
      // Show selected slot display
      const display = document.getElementById('selected-slot-display');
      const timeText = document.getElementById('selected-time-text');
      display.style.display = 'block';
      timeText.textContent = `${slot.day} at ${slot.time} (${slot.date})`;
      
      // Scroll to display
      setTimeout(() => {
        display.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
      
      // Confetti effect
      createHeartConfetti(slotCard);
      
      // Send email notification via Web3Forms
      sendMovieTimeSlotEmail(slot);
    });
    
    timeSlotsContainer.appendChild(slotCard);
  });
}

function rotateFunFacts() {
  const facts = [
    "🎬 Seth MacFarlane voiced Ted in the movie!",
    "🧸 Ted became the highest-grossing original R-rated comedy!",
    "😄 The movie was filmed in Boston, Massachusetts!",
    "🎭 Mark Wahlberg had to act with a tennis ball on a stick!",
    "🎵 The soundtrack features the iconic 'Thunder Buddies' song!",
    "🌟 Ted was nominated for an Oscar for Best Original Song!",
    "🎬 A sequel 'Ted 2' was released in 2015!",
    "🧸 Ted's personality was inspired by Peter Griffin!"
  ];
  
  const factsContainer = document.getElementById('fun-facts');
  let currentIndex = 0;
  
  function showFact() {
    factsContainer.style.opacity = '0';
    setTimeout(() => {
      factsContainer.innerHTML = `<p style="text-align: center;">${facts[currentIndex]}</p>`;
      factsContainer.style.opacity = '1';
      currentIndex = (currentIndex + 1) % facts.length;
    }, 300);
  }
  
  factsContainer.style.transition = 'opacity 0.3s ease';
  showFact();
  setInterval(showFact, 4000);
}

function createHeartConfetti(element) {
  const hearts = ['💕', '💖', '💗', '💝', '💓', '💞'];
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      font-size: 1.5rem;
      pointer-events: none;
      z-index: 10000;
      animation: confettiPop 1s ease-out forwards;
      opacity: 1;
    `;
    
    const angle = (Math.PI * 2 * i) / 10;
    const distance = 100 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

// Send movie time slot selection via Web3Forms
async function sendMovieTimeSlotEmail(slot) {
  try {
    const formData = new FormData();
    formData.append('access_key', '3e74662b-aade-41a9-9f45-c72fb92d39f1');
    formData.append('subject', '💕 Movie Night Time Slot Selection - Valentine Week');
    formData.append('from_name', 'Valentine Week App');
    formData.append('to', 'pachourimohit1@gmail.com');
    formData.append('message', `
      🎬 Movie Night Time Slot Selected!
      
      Day: ${slot.day}
      Time: ${slot.time}
      Date: ${slot.date}
      Emoji: ${slot.emoji}
      
      Selected at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      
      Love from,
      Your Valentine Week App 💕
    `);
    
    // Add redirect to false to handle response ourselves
    formData.append('redirect', 'false');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Show custom thank you modal
      showThankYouModal(slot);
    } else {
      console.error('Form submission failed:', data);
      alert('Oops! Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Oops! Something went wrong. Please try again.');
  }
}

// Show custom thank you modal
function showThankYouModal(slot) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'thank-you-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease-in-out;
  `;
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: linear-gradient(135deg, #FFE5EC 0%, #FFB3C6 50%, #FF69B4 100%);
    border: 5px solid #FF69B4;
    border-radius: 25px;
    padding: 3rem 2.5rem;
    max-width: 550px;
    width: 90%;
    text-align: center;
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.6);
    animation: scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
  `;
  
  modalContent.innerHTML = `
    <!-- Close Button -->
    <button id="close-modal" style="
      position: absolute;
      top: 15px;
      right: 15px;
      background: white;
      border: 3px solid #FF69B4;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    " onmouseover="this.style.transform='rotate(90deg) scale(1.1)'" onmouseout="this.style.transform='rotate(0) scale(1)'">
      ✕
    </button>
    
    <!-- Celebration Emoji -->
    <div style="font-size: 5rem; margin-bottom: 1rem; animation: bounce 1s ease-in-out infinite;">
      🎉
    </div>
    
    <!-- Thank You Message -->
    <h2 style="
      font-size: 2.2rem;
      font-weight: bold;
      color: #8B4513;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    ">
      Thank You, Love! 💕
    </h2>
    
    <p style="
      font-size: 1.3rem;
      color: #C71585;
      font-weight: 600;
      margin-bottom: 0.8rem;
      line-height: 1.6;
    ">
      Can't wait for our movie night! 🎬
    </p>
    
    <p style="
      font-size: 1.1rem;
      color: #8B4513;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    ">
      Your chosen slot:<br>
      <strong>${slot.day} at ${slot.time}</strong> (${slot.date})
    </p>
    
    <div style="
      background: white;
      border: 3px solid #FF69B4;
      border-radius: 15px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    ">
      <p style="
        font-size: 1.2rem;
        color: #FF69B4;
        font-weight: bold;
        margin-bottom: 0.5rem;
      ">
        📌 Quick Reminder
      </p>
      <p style="
        font-size: 1rem;
        color: #666;
        line-height: 1.6;
      ">
        Grab your snacks now! 🍿🥤<br>
        I'll send you the movie link soon! 💌
      </p>
    </div>
    
    <!-- Snack Emojis -->
    <div style="
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    ">
      <span style="animation: bounce 1s ease-in-out infinite; animation-delay: 0s;">🍿</span>
      <span style="animation: bounce 1s ease-in-out infinite; animation-delay: 0.2s;">🥤</span>
      <span style="animation: bounce 1s ease-in-out infinite; animation-delay: 0.4s;">🍫</span>
      <span style="animation: bounce 1s ease-in-out infinite; animation-delay: 0.6s;">🧸</span>
    </div>
    
    <p style="
      font-size: 1.1rem;
      color: #8B4513;
      font-weight: 600;
      margin-top: 1rem;
    ">
      See you soon! 😘💕
    </p>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close button handler
  document.getElementById('close-modal').addEventListener('click', () => {
    modal.style.animation = 'fadeOut 0.3s ease-in-out';
    setTimeout(() => modal.remove(), 300);
  });
  
  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.animation = 'fadeOut 0.3s ease-in-out';
      setTimeout(() => modal.remove(), 300);
    }
  });
  
  // Create floating hearts animation
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createFloatingHeart(modalContent);
    }, i * 100);
  }
}

// Create floating hearts for modal
function createModalFloatingHeart(container) {
  const heart = document.createElement('div');
  heart.textContent = '💕';
  heart.style.cssText = `
    position: absolute;
    font-size: ${Math.random() * 20 + 15}px;
    left: ${Math.random() * 100}%;
    bottom: -30px;
    animation: floatUp 3s ease-out forwards;
    pointer-events: none;
    opacity: ${Math.random() * 0.5 + 0.5};
  `;
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
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
  // Always use photo deck (photo deck is now the default for production)
  loadPromiseDayPhotoDeck();
}

// Interactive Photo Deck for Promise Day (PREVIEW MODE ONLY)
function loadPromiseDayPhotoDeck() {
  const content = document.getElementById('main-content');
  
  const photos = [
    { src: '/static/promise-photos/hands-pink.jpg', promise: 'I promise to hold your hand through all of life\'s journeys 💕' },
    { src: '/static/promise-photos/hands-heart.jpg', promise: 'I promise my heart will always beat for you ❤️' },
    { src: '/static/promise-photos/hands-forever.jpg', promise: 'I promise forever isn\'t long enough with you ♾️' },
    { src: '/static/promise-photos/fingerprints-love.jpg', promise: 'I promise you\'re my perfect match 👫' },
    { src: '/static/promise-photos/hands-holding.jpg', promise: 'I promise to never let you go 🤝' },
    { src: '/static/promise-photos/pinky-promise.jpg', promise: 'I promise this is a forever kind of thing 🤙' },
    { src: '/static/promise-photos/hands-interlock.jpg', promise: 'I promise our souls are meant to be intertwined 🔗' }
  ];
  
  content.innerHTML = `
    <div class="promise-day-container" style="
      position: relative;
      min-height: 100vh;
      background: linear-gradient(135deg, #FFF5F7 0%, #FFE6EA 50%, #FFF0F5 100%);
      padding: 2rem 1rem 200px;
      overflow-x: hidden;
    ">
      <!-- Title Section -->
      <div class="text-center mb-6 animate-fade-in" style="padding: 1rem; position: relative; z-index: 1;">
        <h2 class="text-4xl md:text-5xl font-bold mb-3" style="
          background: linear-gradient(135deg, #DDA0DD, #BA55D3, #9370DB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        ">📖 Promise Day 📖</h2>
        <p class="text-lg md:text-xl font-semibold" style="color: #BA55D3; margin-top: 0.5rem;">
          "My promises to you" 💕
        </p>
        <p class="text-sm md:text-base mt-2" style="color: #DDA0DD; font-style: italic;">
          ← Swipe to see ${photos.length} promises →
        </p>
      </div>

      <!-- Photo Deck Container (Above music player z-index) -->
      <div class="photo-deck-wrapper" style="
        max-width: 450px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        height: 550px;
        z-index: 15;
      ">
        <div id="promise-photo-deck" class="photo-deck" style="
          position: relative;
          width: 100%;
          height: 100%;
        ">
          ${photos.map((photo, index) => `
            <div class="promise-card" data-index="${index}" style="
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 25px;
              overflow: hidden;
              box-shadow: 0 25px 70px rgba(186, 85, 211, 0.4);
              cursor: grab;
              user-select: none;
              background: white;
            ">
              <img src="${photo.src}" alt="Promise ${index + 1}" draggable="false" style="
                width: 100%;
                height: 70%;
                object-fit: cover;
                pointer-events: none;
              ">
              <div style="
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 30%;
                background: linear-gradient(to top, rgba(186, 85, 211, 0.95), rgba(221, 160, 221, 0.9));
                padding: 1.5rem;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
              ">
                <p style="
                  font-size: 1.2rem;
                  font-weight: 600;
                  line-height: 1.6;
                  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
                ">
                  ${photo.promise}
                </p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Progress Indicators -->
        <div class="promise-progress-dots" style="
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 100;
        ">
          ${photos.map((_, index) => `
            <div class="promise-dot" data-dot-index="${index}" style="
              width: ${index === 0 ? '14px' : '10px'};
              height: ${index === 0 ? '14px' : '10px'};
              border-radius: 50%;
              background: ${index === 0 ? '#BA55D3' : 'rgba(186, 85, 211, 0.3)'};
              transition: all 0.3s ease;
              cursor: pointer;
            "></div>
          `).join('')}
        </div>
      </div>

      <!-- Swipe Hint -->
      <div id="promise-swipe-hint" style="
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        animation: swipeHintAnim 2s ease-in-out infinite;
        pointer-events: none;
        z-index: 10;
        opacity: 0.6;
      ">👆</div>

      <!-- Romantic Message -->
      <div class="promise-message" style="
        margin: 5rem auto 2rem;
        padding: 2rem;
        text-align: center;
        max-width: 600px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 3px solid #DDA0DD;
        border-radius: 25px;
        box-shadow: 0 15px 50px rgba(186, 85, 211, 0.3);
      ">
        <h3 class="text-2xl md:text-3xl font-bold mb-4" style="color: #BA55D3;">
          ✨ My Promise to You ✨
        </h3>
        <p class="text-lg" style="color: #9370DB; font-style: italic; line-height: 1.8;">
          "Kuch vade aese banaye, jo tod na paaye..."<br>
          Every promise I make to you is sealed with love 💜
        </p>
      </div>
    </div>
  `;
  
  // Initialize promise photo deck
  initPromisePhotoDeck(photos.length);
}

// Promise Photo Deck Interaction Logic
function initPromisePhotoDeck(totalPhotos) {
  const deck = document.getElementById('promise-photo-deck');
  const cards = deck.querySelectorAll('.promise-card');
  const dots = document.querySelectorAll('.promise-dot');
  const hint = document.getElementById('promise-swipe-hint');
  
  let currentIndex = 0;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let isDragging = false;
  let idleAnimationFrame = null;
  
  // Position cards in stack
  function updateCardStack(animate = true) {
    cards.forEach((card, index) => {
      const isCurrent = index === currentIndex;
      const isPast = index < currentIndex;
      const isFuture = index > currentIndex;
      const distanceFromCurrent = Math.abs(index - currentIndex);
      
      if (animate) {
        card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      } else {
        card.style.transition = 'none';
      }
      
      if (isPast) {
        // Past cards - slide off left
        card.style.transform = 'translateX(-120%) rotate(-15deg) scale(0.8)';
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.zIndex = '1';
      } else if (isCurrent) {
        // Current card
        card.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        card.style.zIndex = String(totalPhotos + 10);
      } else if (isFuture) {
        // Future cards stacked behind
        const offset = distanceFromCurrent * 12;
        const scale = 1 - (distanceFromCurrent * 0.04);
        const rotate = (distanceFromCurrent % 2 === 0 ? 1.5 : -1.5);
        card.style.transform = `translateX(0) translateY(${offset}px) rotate(${rotate}deg) scale(${scale})`;
        card.style.opacity = String(0.75 - (distanceFromCurrent * 0.1));
        card.style.pointerEvents = 'none';
        card.style.zIndex = String(totalPhotos + 10 - distanceFromCurrent);
      }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.style.width = '14px';
        dot.style.height = '14px';
        dot.style.background = '#BA55D3';
      } else {
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.background = 'rgba(186, 85, 211, 0.3)';
      }
    });
  }
  
  // Idle animation
  function startIdleAnimation() {
    let angle = 0;
    
    function animate() {
      if (!isDragging && currentIndex < totalPhotos) {
        const currentCard = cards[currentIndex];
        if (currentCard) {
          angle += 0.025;
          const tilt = Math.sin(angle) * 2.5;
          const sway = Math.cos(angle) * 10;
          currentCard.style.transform = `translateX(${sway}px) translateY(0) rotate(${tilt}deg) scale(1)`;
        }
      }
      idleAnimationFrame = requestAnimationFrame(animate);
    }
    
    animate();
  }
  
  // Event handlers
  function handleStart(e) {
    const touch = e.touches ? e.touches[0] : e;
    startX = touch.clientX;
    startY = touch.clientY;
    isDragging = true;
    
    const currentCard = cards[currentIndex];
    if (currentCard) {
      currentCard.style.cursor = 'grabbing';
      currentCard.style.transition = 'none';
    }
    
    if (hint) {
      hint.style.transition = 'opacity 0.3s';
      hint.style.opacity = '0';
      setTimeout(() => hint && hint.remove(), 300);
    }
  }
  
  function handleMove(e) {
    if (!isDragging) return;
    
    const touch = e.touches ? e.touches[0] : e;
    currentX = touch.clientX;
    const deltaX = currentX - startX;
    const deltaY = touch.clientY - startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      e.preventDefault();
      
      const currentCard = cards[currentIndex];
      if (currentCard) {
        const rotate = deltaX * 0.08;
        const opacity = 1 - Math.abs(deltaX) / 400;
        currentCard.style.transform = `translateX(${deltaX}px) rotate(${rotate}deg) scale(1)`;
        currentCard.style.opacity = String(Math.max(opacity, 0.3));
      }
    }
  }
  
  function handleEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaX = currentX - startX;
    const threshold = 80;
    const currentCard = cards[currentIndex];
    
    if (currentCard) {
      currentCard.style.cursor = 'grab';
    }
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && currentIndex < totalPhotos - 1) {
        currentIndex++;
      } else if (deltaX > 0 && currentIndex > 0) {
        currentIndex--;
      }
    }
    
    updateCardStack(true);
    startX = 0;
    currentX = 0;
  }
  
  // Attach listeners
  cards.forEach((card) => {
    card.addEventListener('mousedown', handleStart);
    card.addEventListener('touchstart', handleStart, { passive: false });
  });
  
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCardStack(true);
    });
  });
  
  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      updateCardStack(true);
    } else if (e.key === 'ArrowRight' && currentIndex < totalPhotos - 1) {
      currentIndex++;
      updateCardStack(true);
    }
  });
  
  // Initialize
  updateCardStack(false);
  setTimeout(startIdleAnimation, 500);
}

// Original Promise Day (PRODUCTION VERSION)
function loadPromiseDayOriginal() {
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
    <div class="hug-day-container" style="position: relative; min-height: 100vh; background: linear-gradient(135deg, #FFF5F7 0%, #FFE4E9 50%, #FFF0F5 100%); padding: 2rem 1rem; overflow: hidden;">
      
      <!-- Romantic Couple Gallery -->
      <div style="max-width: 1400px; margin: 0 auto; position: relative; z-index: 2;">
        
        <!-- Title Section -->
        <div class="text-center mb-12 animate-fade-in" style="padding: 2rem;">
          <h2 class="text-5xl md:text-6xl font-bold mb-4" style="
            background: linear-gradient(135deg, #FF69B4, #FF1493, #C71585);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">🤗 Hug Day 🤗</h2>
          <p class="text-2xl md:text-3xl font-bold animate-pulse" style="color: #FF1493; margin-top: 1rem;">
            "In your arms, I find my home" 💕
          </p>
        </div>
        
        <!-- Romantic Couple Images Gallery -->
        <div class="romantic-gallery" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
          margin-bottom: 3rem;
        ">
          <!-- Image 1: Roses & Hearts -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(-2deg);
            transition: all 0.3s ease;
            animation: floatGallery 6s ease-in-out infinite;
          ">
            <img src="/static/romantic-couple/couple-1.jpg" alt="Romantic Couple" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(255, 105, 180, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">💕 Love Blooms 💕</p>
            </div>
          </div>
          
          <!-- Image 2: Autumn Romance -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(2deg);
            transition: all 0.3s ease;
            animation: floatGallery 7s ease-in-out infinite;
            animation-delay: 1s;
          ">
            <img src="/static/romantic-couple/couple-2.jpg" alt="Autumn Romance" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(255, 140, 0, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">🍂 Forever Together 🍂</p>
            </div>
          </div>
          
          <!-- Image 3: Home Sweet Home -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(-1deg);
            transition: all 0.3s ease;
            animation: floatGallery 6.5s ease-in-out infinite;
            animation-delay: 2s;
          ">
            <img src="/static/romantic-couple/couple-3.jpg" alt="Home Together" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(255, 99, 71, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">🏡 Our Dream Home 🏡</p>
            </div>
          </div>
          
          <!-- Image 4: Warm Embrace -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(1.5deg);
            transition: all 0.3s ease;
            animation: floatGallery 7.5s ease-in-out infinite;
            animation-delay: 0.5s;
          ">
            <img src="/static/romantic-couple/couple-4.jpg" alt="Warm Embrace" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(186, 85, 211, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">🤗 Safe in Your Arms 🤗</p>
            </div>
          </div>
          
          <!-- Image 5: Sunset Love -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(-1.5deg);
            transition: all 0.3s ease;
            animation: floatGallery 6.8s ease-in-out infinite;
            animation-delay: 1.5s;
          ">
            <img src="/static/romantic-couple/couple-5.jpg" alt="Sunset Love" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(255, 69, 0, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">🌅 Endless Love 🌅</p>
            </div>
          </div>
          
          <!-- Image 6: Cozy Together -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(2.5deg);
            transition: all 0.3s ease;
            animation: floatGallery 7.2s ease-in-out infinite;
            animation-delay: 2.5s;
          ">
            <img src="/static/romantic-couple/couple-6.jpg" alt="Cozy Together" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(220, 20, 60, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">❄️ Winter Warmth ❄️</p>
            </div>
          </div>
          
          <!-- Image 7: Joyful Hug -->
          <div class="gallery-item" style="
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(255, 105, 180, 0.4);
            transform: rotate(-2.5deg);
            transition: all 0.3s ease;
            animation: floatGallery 6.3s ease-in-out infinite;
            animation-delay: 3s;
          ">
            <img src="/static/romantic-couple/couple-7.jpg" alt="Joyful Hug" style="
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            ">
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(255, 20, 147, 0.9), transparent);
              padding: 1.5rem;
              color: white;
              text-align: center;
            ">
              <p style="font-size: 1.2rem; font-weight: 600;">😊 Pure Happiness 😊</p>
            </div>
          </div>
        </div>
        
        <!-- Romantic Message Card -->
        <div class="glass-card" style="
          padding: 3rem;
          text-align: center;
          max-width: 800px;
          margin: 3rem auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 3px solid #FFB6C1;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(255, 105, 180, 0.3);
        ">
          <h3 class="text-3xl font-bold mb-6" style="color: #FF1493;">
            💕 Waiting for That Warm Hug 💕
          </h3>
          
          <div class="space-y-4 mb-6">
            <p class="text-xl" style="color: #C71585; font-style: italic; line-height: 1.8;">
              "Suraj hua maddham, chaand jalne laga...<br>
              Aasmaan yeh haai kyun pighalne laga" 🌙
            </p>
            <p class="text-xl" style="color: #FF69B4; font-style: italic; line-height: 1.8;">
              "Tum paas aaye, yun muskuraaye...<br>
              Tumne na jaane kya sapne dikhaaye" ✨
            </p>
          </div>
          
          <div style="
            background: linear-gradient(135deg, rgba(255, 182, 193, 0.4), rgba(255, 228, 225, 0.4));
            padding: 2rem;
            border-radius: 15px;
            margin-top: 2rem;
          ">
            <p class="text-2xl font-bold" style="color: #8B4789;">
              Until we meet, you're always in my heart 💭💖
            </p>
            <p class="text-lg mt-3" style="color: #666;">
              Every moment thinking of you... 🤗
            </p>
          </div>
        </div>
        
        <!-- Floating Hearts -->
        <div id="floating-hearts-hug" style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        "></div>
      </div>
    </div>
  `;
  
  // Add gallery hover effects and floating hearts
  addGalleryEffects();
  createFloatingHugHearts();
}

// Gallery hover effects
function addGalleryEffects() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(0deg)';
      this.style.boxShadow = '0 20px 60px rgba(255, 105, 180, 0.6)';
      this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
      const rotation = Math.random() * 4 - 2; // -2 to 2 degrees
      this.style.transform = `scale(1) rotate(${rotation}deg)`;
      this.style.boxShadow = '0 10px 40px rgba(255, 105, 180, 0.4)';
      this.style.zIndex = '1';
    });
  });
}

// Create floating hearts for Hug Day
function createFloatingHugHearts() {
  const container = document.getElementById('floating-hearts-hug');
  if (!container) return;
  
  const hearts = ['💕', '💖', '💗', '💝', '💞', '💓', '🤗', '🫂'];
  
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      font-size: ${Math.random() * 30 + 20}px;
      animation: floatHeart ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0.5;
      pointer-events: none;
    `;
    container.appendChild(heart);
  }
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
    <div class="kiss-day-container" style="position: relative; min-height: 100vh; padding-bottom: 150px; overflow: hidden;">
      <!-- Romantic gradient background -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255, 20, 147, 0.15) 0%, rgba(255, 105, 180, 0.15) 50%, rgba(255, 182, 193, 0.15) 100%); pointer-events: none;"></div>
      
      <!-- Floating hearts background -->
      <div id="floating-kiss-hearts" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;"></div>
      
      <!-- Header -->
      <div style="position: relative; z-index: 2; text-align: center; padding: 2rem 1rem 1rem;">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: #FF1493; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
          💋 Kiss Day 💋
        </h2>
        <p class="text-xl md:text-2xl mb-2" style="color: #FF69B4; font-weight: 600;">
          "A kiss is a secret told to the mouth instead of the ear" 💕
        </p>
        <p class="text-sm md:text-base" style="color: #C71585; font-style: italic;">
          Swipe through our sweetest moments ✨
        </p>
      </div>
      
      <!-- 3D Interactive Photo Carousel Container -->
      <div id="kiss-carousel-wrapper" style="position: relative; z-index: 10; margin: 2rem auto; max-width: 1200px; padding: 0 1rem;">
        <!-- 3D Carousel Stage -->
        <div id="kiss-carousel-stage" style="
          position: relative;
          width: 100%;
          height: 500px;
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: pan-y pinch-zoom;
        ">
          <!-- Photo Cards Container -->
          <div id="kiss-cards-container" style="
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
          ">
            <!-- Cards will be dynamically inserted here -->
          </div>
        </div>
        
        <!-- Navigation Controls -->
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin-top: 2rem;">
          <button id="kiss-prev-btn" class="kiss-nav-btn" style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF1493, #FF69B4);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 20, 147, 0.4);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          ">❮</button>
          
          <!-- Progress Indicators -->
          <div id="kiss-progress-dots" style="display: flex; gap: 12px;"></div>
          
          <button id="kiss-next-btn" class="kiss-nav-btn" style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF1493, #FF69B4);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 20, 147, 0.4);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          ">❯</button>
        </div>
        
        <!-- Photo Caption -->
        <div id="kiss-photo-caption" style="
          text-align: center;
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(255, 20, 147, 0.2);
          backdrop-filter: blur(10px);
        ">
          <p class="text-lg md:text-xl font-semibold" style="color: #FF1493;"></p>
        </div>
        
        <!-- Gesture Hint (fades out after first interaction) -->
        <div id="kiss-gesture-hint" style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          pointer-events: none;
          z-index: 5;
          animation: fadeHint 3s ease-in-out infinite;
        ">
          <p style="font-size: 3rem; margin-bottom: 0.5rem;">👆</p>
          <p style="color: #FF1493; font-weight: 600; font-size: 1.2rem; text-shadow: 0 2px 8px white;">
            Swipe or Drag
          </p>
        </div>
      </div>
      
      <!-- Romantic Message -->
      <div style="position: relative; z-index: 2; text-align: center; margin: 3rem auto; max-width: 800px; padding: 2rem;">
        <div style="
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(255, 20, 147, 0.3);
          border: 2px solid rgba(255, 105, 180, 0.3);
        ">
          <p class="text-lg md:text-xl" style="color: #C71585; line-height: 1.8; font-style: italic;">
            💕 Every kiss tells a story...<br>
            Every moment with you is magical 💖<br>
            <span style="font-size: 2rem; display: inline-block; margin-top: 1rem;">💋✨💕</span>
          </p>
        </div>
      </div>
    </div>
  `;
  
  // Initialize the 3D carousel
  initializeKissCarousel();
  
  // Create floating hearts
  createFloatingKissHearts();
}

// ==================== DAY 6: KISS DAY - 3D CAROUSEL ====================

function initializeKissCarousel() {
  // Photo data with captions
  const photos = [
    {
      src: '/static/kiss-photos/kiss-1.jpg',
      caption: '💋 Our First Kiss - Where it all began'
    },
    {
      src: '/static/kiss-photos/kiss-2.jpg',
      caption: '💕 Stolen Moments - Pure magic'
    },
    {
      src: '/static/kiss-photos/kiss-3.jpg',
      caption: '✨ Forever Together - You & Me'
    }
  ];
  
  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  let velocityX = 0;
  let lastX = 0;
  let lastTime = Date.now();
  
  const container = document.getElementById('kiss-cards-container');
  const progressDots = document.getElementById('kiss-progress-dots');
  const captionElement = document.querySelector('#kiss-photo-caption p');
  const gestureHint = document.getElementById('kiss-gesture-hint');
  const prevBtn = document.getElementById('kiss-prev-btn');
  const nextBtn = document.getElementById('kiss-next-btn');
  
  // Create photo cards
  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'kiss-photo-card';
    card.innerHTML = `
      <div class="kiss-card-inner" style="
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      ">
        <img src="${photo.src}" alt="Kiss photo ${index + 1}" style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        " draggable="false">
        <div class="kiss-photo-overlay" style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(255, 20, 147, 0.8), transparent);
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        ">
          <p style="color: white; font-weight: 600; font-size: 1.1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            ${photo.caption}
          </p>
        </div>
      </div>
    `;
    container.appendChild(card);
    
    // Progress dot
    const dot = document.createElement('button');
    dot.className = 'kiss-progress-dot';
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #FF1493;
      background: ${index === 0 ? '#FF1493' : 'transparent'};
      cursor: pointer;
      transition: all 0.3s ease;
    `;
    dot.addEventListener('click', () => goToSlide(index));
    progressDots.appendChild(dot);
  });
  
  const cards = document.querySelectorAll('.kiss-photo-card');
  
  // Position cards in 3D space
  function updateCardPositions() {
    const angleStep = 360 / photos.length;
    const radius = window.innerWidth < 768 ? 300 : 450;
    
    cards.forEach((card, index) => {
      const angle = ((index - currentIndex) * angleStep) * (Math.PI / 180);
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius - radius;
      const scale = z > -radius / 2 ? 1 : 0.7;
      const opacity = z > -radius ? 1 : 0.3;
      const rotateY = -((index - currentIndex) * angleStep);
      
      card.style.cssText = `
        position: absolute;
        width: ${window.innerWidth < 768 ? '280px' : '400px'};
        height: ${window.innerWidth < 768 ? '380px' : '500px'};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale});
        transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.6s ease;
        opacity: ${opacity};
        z-index: ${Math.round(z)};
        pointer-events: ${index === currentIndex ? 'auto' : 'none'};
      `;
      
      // Show overlay on center card
      const overlay = card.querySelector('.kiss-photo-overlay');
      if (index === currentIndex && overlay) {
        overlay.style.opacity = '1';
      } else if (overlay) {
        overlay.style.opacity = '0';
      }
    });
    
    // Update progress dots
    document.querySelectorAll('.kiss-progress-dot').forEach((dot, index) => {
      dot.style.background = index === currentIndex ? '#FF1493' : 'transparent';
      dot.style.transform = index === currentIndex ? 'scale(1.3)' : 'scale(1)';
    });
    
    // Update caption
    if (captionElement) {
      captionElement.textContent = photos[currentIndex].caption;
    }
  }
  
  function goToSlide(index) {
    currentIndex = (index + photos.length) % photos.length;
    updateCardPositions();
    hideGestureHint();
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateCardPositions();
    hideGestureHint();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateCardPositions();
    hideGestureHint();
  }
  
  function hideGestureHint() {
    if (gestureHint) {
      gestureHint.style.animation = 'none';
      gestureHint.style.opacity = '0';
      setTimeout(() => {
        gestureHint.style.display = 'none';
      }, 300);
    }
  }
  
  // Touch/Mouse Events for Swipe
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }
  
  function touchStart(event) {
    if (event.target.closest('.kiss-nav-btn') || event.target.closest('.kiss-progress-dot')) {
      return;
    }
    
    isDragging = true;
    startX = getPositionX(event);
    lastX = startX;
    lastTime = Date.now();
    velocityX = 0;
    container.style.cursor = 'grabbing';
    animationID = requestAnimationFrame(animation);
    hideGestureHint();
  }
  
  function touchMove(event) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(event);
    const now = Date.now();
    const timeDiff = now - lastTime;
    
    if (timeDiff > 0) {
      velocityX = (currentPosition - lastX) / timeDiff;
    }
    
    currentTranslate = prevTranslate + currentPosition - startX;
    lastX = currentPosition;
    lastTime = now;
  }
  
  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    container.style.cursor = 'grab';
    
    const movedBy = currentTranslate - prevTranslate;
    const threshold = window.innerWidth < 768 ? 60 : 100;
    
    // Check swipe with velocity
    if (Math.abs(velocityX) > 0.3 || Math.abs(movedBy) > threshold) {
      if (movedBy < -threshold || velocityX < -0.3) {
        nextSlide();
      } else if (movedBy > threshold || velocityX > 0.3) {
        prevSlide();
      }
    }
    
    currentTranslate = 0;
    prevTranslate = 0;
    velocityX = 0;
  }
  
  function animation() {
    if (isDragging) {
      const dragInfluence = currentTranslate * 0.001;
      container.style.transform = `rotateY(${dragInfluence * 20}deg)`;
      requestAnimationFrame(animation);
    } else {
      container.style.transform = 'rotateY(0deg)';
    }
  }
  
  // Event Listeners
  container.addEventListener('mousedown', touchStart);
  container.addEventListener('mousemove', touchMove);
  container.addEventListener('mouseup', touchEnd);
  container.addEventListener('mouseleave', touchEnd);
  
  container.addEventListener('touchstart', touchStart, { passive: true });
  container.addEventListener('touchmove', touchMove, { passive: true });
  container.addEventListener('touchend', touchEnd);
  
  // Navigation buttons
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  
  // Hover effects on nav buttons
  [prevBtn, nextBtn].forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.1)';
      btn.style.boxShadow = '0 6px 20px rgba(255, 20, 147, 0.6)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = '0 4px 15px rgba(255, 20, 147, 0.4)';
    });
  });
  
  // Initialize
  updateCardPositions();
  container.style.cursor = 'grab';
  
  // Handle window resize
  window.addEventListener('resize', updateCardPositions);
  
  // Auto-hide gesture hint after 5 seconds
  setTimeout(hideGestureHint, 5000);
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
      
      <!-- Romantic Photo Gallery -->
      <div id="valentine-photo-gallery" style="position: relative; z-index: 2; padding: 2rem 1rem; max-width: 1200px; margin: 0 auto;">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-8" style="color: #FFD700; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
          💕 Our Beautiful Journey 💕
        </h3>
        <div id="valentine-gallery-grid" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          perspective: 1000px;
        "></div>
      </div>
      
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
          <div id="valentine-buttons-container" style="position: relative; min-height: 250px; width: 100%; padding: 2rem 1rem;">
            <button 
              id="yes-button" 
              onclick="valentineYesClicked()"
              style="
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
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
              onmouseover="this.style.transform='translate(-50%, -50%) scale(1.1)'"
              onmouseout="this.style.transform='translate(-50%, -50%) scale(1)'">
              YES 💕
            </button>
            
            <button 
              id="no-button"
              onmouseover="moveNoButton(event)"
              ontouchstart="moveNoButton(event)"
              onclick="moveNoButton(event)"
              style="
                position: absolute;
                left: 75%;
                top: 30%;
                transform: translate(-50%, -50%);
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
                min-width: 100px;
              ">
              NO
            </button>
          </div>
          
          <style>
            @media (max-width: 768px) {
              #valentine-buttons-container {
                min-height: 300px !important;
              }
              #yes-button {
                padding: 1.2rem 2.5rem !important;
                font-size: 1.3rem !important;
              }
              #no-button {
                left: 70% !important;
                top: 25% !important;
                padding: 0.9rem 1.8rem !important;
                font-size: 1.1rem !important;
                min-width: 90px !important;
              }
            }
          </style>
          
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
              "Bunny found his forever home in Anku's heart...<br>
              Where two souls became one, and every moment feels like magic" ❤️
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
  
  // Create romantic photo gallery
  createValentineGallery();
  
  // Reset button states
  yesButtonScale = 1;
  noButtonMoves = 0;
}

function createValentineGallery() {
  const photos = [
    { src: '/static/valentine-photos/couple-1.jpg', caption: 'Love Blooms' },
    { src: '/static/valentine-photos/couple-2.jpg', caption: 'Forever Together' },
    { src: '/static/valentine-photos/couple-3.jpg', caption: 'Our Dream Home' },
    { src: '/static/valentine-photos/kiss-1.jpg', caption: 'First Kiss' },
    { src: '/static/valentine-photos/couple-4.jpg', caption: 'Safe in Your Arms' },
    { src: '/static/valentine-photos/kiss-2.jpg', caption: 'Stolen Moments' },
    { src: '/static/valentine-photos/couple-5.jpg', caption: 'Endless Love' },
    { src: '/static/valentine-photos/kiss-3.jpg', caption: 'Cherry Blossoms' },
    { src: '/static/valentine-photos/couple-6.jpg', caption: 'Cozy Together' },
    { src: '/static/valentine-photos/couple-7.jpg', caption: 'Pure Happiness' }
  ];
  
  const gallery = document.getElementById('valentine-gallery-grid');
  
  photos.forEach((photo, index) => {
    const photoCard = document.createElement('div');
    photoCard.className = 'valentine-photo-card';
    photoCard.style.cssText = `
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(255, 20, 147, 0.3);
      transition: all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
      cursor: pointer;
      animation: fadeInUp 0.6s ease-out forwards;
      animation-delay: ${index * 0.1}s;
      opacity: 0;
      transform-style: preserve-3d;
    `;
    
    photoCard.innerHTML = `
      <div style="
        position: relative;
        padding-bottom: 100%;
        background: linear-gradient(135deg, rgba(255, 192, 203, 0.2), rgba(255, 105, 180, 0.2));
      ">
        <img 
          src="${photo.src}" 
          alt="${photo.caption}"
          loading="lazy"
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          "
        >
        <div class="photo-overlay" style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 1rem;
          background: linear-gradient(to top, rgba(255, 20, 147, 0.9), transparent);
          color: white;
          font-weight: bold;
          font-size: 1.1rem;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        ">
          ${photo.caption} 💕
        </div>
      </div>
    `;
    
    // Hover effects
    photoCard.addEventListener('mouseenter', () => {
      photoCard.style.transform = 'translateY(-10px) scale(1.05) rotateX(5deg)';
      photoCard.style.boxShadow = '0 20px 50px rgba(255, 20, 147, 0.5)';
      const overlay = photoCard.querySelector('.photo-overlay');
      if (overlay) overlay.style.opacity = '1';
      const img = photoCard.querySelector('img');
      if (img) img.style.transform = 'scale(1.1)';
    });
    
    photoCard.addEventListener('mouseleave', () => {
      photoCard.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
      photoCard.style.boxShadow = '0 10px 30px rgba(255, 20, 147, 0.3)';
      const overlay = photoCard.querySelector('.photo-overlay');
      if (overlay) overlay.style.opacity = '0';
      const img = photoCard.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    });
    
    gallery.appendChild(photoCard);
  });
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
  button.style.transform = 'translate(0, 0)';
  
  // Increase YES button size with each NO move
  yesButtonScale += 0.15;
  yesButton.style.transform = `translate(-50%, -50%) scale(${yesButtonScale})`;
  
  // After 5 moves, YES button starts taking over
  if (noButtonMoves >= 5) {
    yesButton.style.transform = `translate(-50%, -50%) scale(${yesButtonScale * 1.3})`;
    button.style.opacity = Math.max(0.1, 1 - (noButtonMoves - 5) * 0.15);
  }
  
  // After 8 moves, NO button becomes tiny and YES dominates
  if (noButtonMoves >= 8) {
    button.style.transform = 'translate(0, 0) scale(0.5)';
    button.style.opacity = '0.05';
    yesButton.style.transform = `translate(-50%, -50%) scale(${yesButtonScale * 2})`;
    yesButton.style.padding = '2rem 4rem';
  }
}

function valentineYesClicked() {
  // Hide question page
  document.getElementById('question-page').style.display = 'none';
  
  // Open Love Forever Camera FIRST (before showing celebration)
  openRomanticMomentCamera();
  
  // Trigger massive celebration
  triggerMassiveCelebration();
  
  // Note: Email will be sent by openRomanticMomentCamera after photo capture
  // This includes both the photo and YES response
}

// Send Valentine's Day response via Web3Forms
async function sendValentineResponseEmail(response) {
  try {
    const formData = new FormData();
    formData.append('access_key', '3e74662b-aade-41a9-9f45-c72fb92d39f1');
    formData.append('subject', '💖 Valentine\'s Day Response - She Said YES! 💖');
    formData.append('from_name', 'Valentine Week App');
    formData.append('to', 'pachourimohit1@gmail.com');
    formData.append('message', `
      💖💖💖 VALENTINE'S DAY RESPONSE 💖💖💖
      
      Response: ${response}
      
      She said: "${response === 'YES' ? 'YES! I will be your Valentine! 💕' : response}"
      
      Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      Day: Day 7 - Valentine's Day ❤️
      
      🎉🎉🎉 CELEBRATION TIME! 🎉🎉🎉
      
      "Aaj se teri, baahon mein hai jeena
      Aaj se teri, raahon mein hai chalna
      Aaj se teri, yaadein hai dil mein
      Aaj se meri, zindagi hai tere sang"
      
      With all my love,
      Your Valentine Week App 💕
      
      Made with ❤️ by Bunny for Anku
    `);
    
    formData.append('redirect', 'false');
    
    const response_data = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response_data.json();
    
    if (data.success) {
      console.log('Valentine response sent successfully! 💕');
    } else {
      console.error('Failed to send Valentine response:', data);
    }
  } catch (error) {
    console.error('Error sending Valentine email:', error);
  }
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
