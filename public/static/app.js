// Valentine Week Configuration
const VALENTINE_WEEK_CONFIG = {
  // Set your Valentine Week start date (February 8, 2026 - Propose Day)
  startDate: new Date('2026-02-08T00:00:00'),
  // PREVIEW MODE: Set to true to unlock all days for preview
  previewMode: false, // PRODUCTION - Days locked by date
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
      name: 'Aaj Se Teri',
      artist: 'Arijit Singh & Shashaa Tirupati',
      album: 'Padman',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EA%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Aaj Se Teri_spotdown.org.mp3',
      duration: 560000
    },
    {
      name: 'Sajni',
      artist: 'Arijit Singh & Ram Sampath',
      album: 'Laapataa Ladies',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Sajni_spotdown.org.mp3',
      duration: 298000
    },
    {
      name: 'Woh',
      artist: 'Ritviz',
      album: 'Woh',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EW%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Woh-(SambalpuriStar.In).mp3',
      duration: 297000
    },
    {
      name: 'Kehdoon Tumhen',
      artist: 'Kishore Kumar',
      album: 'Deewaar',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFB6C1"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EK%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Kehdoon Tumhen - From "Deewaar"_spotdown.org.mp3',
      duration: 372000
    },
    {
      name: 'Rakhlo Tum Chupaake',
      artist: 'Darshan Raval',
      album: 'Rakhlo Tum Chupaake',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFC0CB"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ER%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Rakhlo Tum Chupaake_spotdown.org.mp3',
      duration: 355000
    },
    {
      name: 'Iraaday',
      artist: 'Shubh',
      album: 'Iraaday',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EI%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Iraaday (PenduJatt.Com.Se).mp3',
      duration: 389000
    },
    {
      name: 'Tera Ban Jaunga',
      artist: 'Akhil Sachdeva & Tulsi Kumar',
      album: 'Kabir Singh',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Tera Ban Jaunga_spotdown.org.mp3',
      duration: 417000
    },
    {
      name: 'Pal Pal Dil Ke Paas',
      artist: 'Arijit Singh & Parampara Thakur',
      album: 'Pal Pal Dil Ke Paas',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF69B4"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EP%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Pal Pal Dil Ke Paas - Title Track - From "Pal Pal Dil Ke Paas"_spotdown.org.mp3',
      duration: 450000
    },
    {
      name: 'Ek Din Aap',
      artist: 'Arijit Singh',
      album: 'Yes Boss',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFB6C1"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3EE%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Ek Din Aap_spotdown.org.mp3',
      duration: 493000
    },
    {
      name: 'Tose Naina',
      artist: 'Arijit Singh',
      album: 'Mickey Virus',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFC0CB"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Tose Naina (From "Mickey Virus)_spotdown.org.mp3',
      duration: 483000
    },
    {
      name: 'Tum Ho Toh',
      artist: 'Jubin Nautiyal',
      album: 'Saiyaara',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FFD700"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ET%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Tum Ho Toh (From "Saiyaara")_spotdown.org.mp3',
      duration: 544000
    },
    {
      name: 'Raat Bhar',
      artist: 'Arijit Singh & Shreya Ghoshal',
      album: 'Heropanti',
      albumArt: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%23FF1493"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold"%3ER%3C/text%3E%3C/svg%3E',
      previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/Raat Bhar (From "Heropanti")_spotdown.org.mp3',
      duration: 587000
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
  
  // Dynamic playlist getter - returns appropriate playlist based on date
  get localPlaylist() {
    const now = new Date();
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
      console.error('❌ Playback error for:', track.name, error);
      console.warn('⚠️ Attempting next track...');
      
      // Immediately try next track without delay
      if (isPlaying) {
        nextTrack();
      }
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
    
    // Open camera for Kodak moment
    openKodakMomentCamera();
    
    // Stop music
    const button = document.getElementById('play-button');
    if (button) {
      button.classList.remove('playing');
    }
    stopBeatAnimation();
  }
}

// ==================== KODAK MOMENT CAMERA ====================

async function openKodakMomentCamera() {
  try {
    // Create camera modal
    const cameraModal = document.createElement('div');
    cameraModal.id = 'kodak-camera-modal';
    cameraModal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="text-align: center; color: white; padding: 20px; max-width: 600px;">
          <h2 style="font-size: 2rem; margin-bottom: 20px; font-weight: bold; background: linear-gradient(135deg, #FF6B9D, #C44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            📸 Capture Our Kodak Moment! 💕
          </h2>
          <p style="font-size: 1.1rem; margin-bottom: 30px; color: #FFB6C1;">
            Let's freeze this special moment forever! 🎉
          </p>
          
          <!-- Video Preview -->
          <div id="camera-preview" style="position: relative; display: inline-block; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255, 107, 157, 0.5); margin-bottom: 20px;">
            <video id="kodak-video" autoplay playsinline style="width: 100%; max-width: 500px; display: block; border-radius: 20px;"></video>
            
            <!-- Romantic Frame Overlay -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; border: 8px solid rgba(255, 107, 157, 0.3); border-radius: 20px;">
              <div style="position: absolute; top: 10px; left: 10px; right: 10px; bottom: 10px; border: 4px solid rgba(255, 182, 193, 0.5); border-radius: 15px;"></div>
            </div>
            
            <!-- Top text -->
            <div style="position: absolute; top: 20px; left: 0; right: 0; text-align: center; font-family: 'Brush Script MT', cursive; font-size: 1.5rem; color: white; text-shadow: 2px 2px 8px rgba(0,0,0,0.8); pointer-events: none;">
              💖 Our Love Story 💖
            </div>
            
            <!-- Bottom text -->
            <div style="position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; font-size: 0.9rem; color: white; text-shadow: 2px 2px 8px rgba(0,0,0,0.8); pointer-events: none;">
              Valentine's Day 2026 ❤️
            </div>
          </div>
          
          <!-- Canvas for captured image (hidden) -->
          <canvas id="kodak-canvas" style="display: none;"></canvas>
          
          <!-- Buttons -->
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button id="capture-btn" style="background: linear-gradient(135deg, #FF6B9D, #C44569); color: white; border: none; padding: 15px 40px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4); transition: transform 0.3s, box-shadow 0.3s;">
              📸 Capture Moment
            </button>
            <button id="camera-close-btn" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 15px 40px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: background 0.3s;">
              ✖️ Close
            </button>
          </div>
          
          <p id="camera-status" style="margin-top: 20px; font-size: 0.9rem; color: #FFB6C1;"></p>
        </div>
      </div>
    `;
    
    document.body.appendChild(cameraModal);
    
    // Add hover effects
    const captureBtn = document.getElementById('capture-btn');
    captureBtn.addEventListener('mouseenter', () => {
      captureBtn.style.transform = 'scale(1.05)';
      captureBtn.style.boxShadow = '0 15px 40px rgba(255, 107, 157, 0.6)';
    });
    captureBtn.addEventListener('mouseleave', () => {
      captureBtn.style.transform = 'scale(1)';
      captureBtn.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.4)';
    });
    
    // Get camera stream
    const video = document.getElementById('kodak-video');
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    
    video.srcObject = stream;
    document.getElementById('camera-status').textContent = '✅ Camera ready! Smile! 😊';
    
    // Capture button
    document.getElementById('capture-btn').addEventListener('click', () => {
      captureKodakMoment(video, stream);
    });
    
    // Close button
    document.getElementById('camera-close-btn').addEventListener('click', () => {
      stream.getTracks().forEach(track => track.stop());
      cameraModal.remove();
      
      // Show celebration page after closing camera
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
  } catch (error) {
    console.error('Camera error:', error);
    alert('❌ Could not access camera. Please allow camera permissions and try again.');
    
    // Show celebration page anyway even if camera fails
    const celebrationPage = document.getElementById('celebration-page');
    if (celebrationPage) {
      celebrationPage.style.display = 'block';
      celebrationPage.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Send email without photo
    sendValentineResponseEmail('YES');
  }
}

function captureKodakMoment(video, stream) {
  const canvas = document.getElementById('kodak-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size to video size
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  
  // Draw video frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Apply Kodak moment effects
  applyKodakEffect(ctx, canvas);
  
  // Add romantic frame and text
  addRomanticFrame(ctx, canvas);
  
  // Convert to image
  canvas.toBlob(async (blob) => {
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.download = `Our_Kodak_Moment_Valentine_${date}.jpg`;
    link.href = url;
    link.click();
    
    // Show success message
    document.getElementById('camera-status').innerHTML = `
      ✅ Kodak moment captured! 💕<br>
      📥 Downloading... and sending to your love! 💌
    `;
    
    // Send email with photo
    await sendKodakMomentEmail(blob);
    
    // Stop camera
    setTimeout(() => {
      stream.getTracks().forEach(track => track.stop());
      document.getElementById('kodak-camera-modal').remove();
      
      // Show celebration page after successful photo capture
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);
    
  }, 'image/jpeg', 0.95);
}

function applyKodakEffect(ctx, canvas) {
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply vintage Kodak color effect
  for (let i = 0; i < data.length; i += 4) {
    // Warm vintage tones
    data[i] = Math.min(255, data[i] * 1.1 + 20);       // Red boost
    data[i + 1] = Math.min(255, data[i + 1] * 1.05);   // Green slight boost
    data[i + 2] = Math.min(255, data[i + 2] * 0.9);    // Blue reduction
    
    // Slight sepia effect
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, avg + 40);       // Red warm
    data[i + 1] = Math.min(255, avg + 20);   // Green warm
    data[i + 2] = Math.min(255, avg);        // Blue normal
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add vintage vignette
  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
  );
  gradient.addColorStop(0, 'rgba(0,0,0,0)');
  gradient.addColorStop(0.7, 'rgba(0,0,0,0.1)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.4)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function addRomanticFrame(ctx, canvas) {
  const width = canvas.width;
  const height = canvas.height;
  
  // Outer frame (thick romantic border)
  ctx.strokeStyle = 'rgba(255, 107, 157, 0.8)';
  ctx.lineWidth = 20;
  ctx.strokeRect(10, 10, width - 20, height - 20);
  
  // Inner frame (delicate border)
  ctx.strokeStyle = 'rgba(255, 182, 193, 0.9)';
  ctx.lineWidth = 8;
  ctx.strokeRect(35, 35, width - 70, height - 70);
  
  // Top text: "Our Love Story"
  ctx.font = 'bold 60px "Brush Script MT", cursive';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'rgba(196, 69, 105, 0.8)';
  ctx.lineWidth = 3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  
  const topText = '💖 Our Love Story 💖';
  ctx.strokeText(topText, width / 2, 60);
  ctx.fillText(topText, width / 2, 60);
  
  // Bottom text: Date and hearts
  ctx.font = 'bold 40px Arial';
  const dateText = `Valentine's Day 2026 ❤️`;
  const bottomY = height - 80;
  
  ctx.strokeText(dateText, width / 2, bottomY);
  ctx.fillText(dateText, width / 2, bottomY);
  
  // Decorative hearts in corners
  ctx.font = '50px Arial';
  ctx.fillText('💕', 60, 60);
  ctx.fillText('💕', width - 60, 60);
  ctx.fillText('💕', 60, height - 60);
  ctx.fillText('💕', width - 60, height - 60);
  
  // Add subtle romantic message at bottom
  ctx.font = 'italic 30px Georgia';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillText('"Forever starts today"', width / 2, bottomY - 50);
}

async function sendKodakMomentEmail(photoBlob) {
  try {
    // Log photo details for debugging
    const sizeMB = (photoBlob.size / (1024 * 1024)).toFixed(2);
    console.log(`📸 Photo blob details:`, {
      size: `${sizeMB} MB`,
      type: photoBlob.type,
      sizeBytes: photoBlob.size
    });
    
    const formData = new FormData();
    formData.append('access_key', '3e74662b-aade-41a9-9f45-c72fb92d39f1');
    formData.append('subject', '💖 She Said YES! + Our Kodak Moment Photo 📸💕');
    formData.append('from_name', 'Valentine Week App - Kodak Moment');
    formData.append('to', 'pachourimohit1@gmail.com');
    formData.append('replyto', 'noreply@valentineweek.app');
    
    // Add photo as attachment with explicit type
    // Web3Forms supports attachments up to 10MB on free plan
    formData.append('attachment', photoBlob, 'Our_Kodak_Moment_Valentine.jpg');
    
    formData.append('message', `
      💖💖💖 VALENTINE'S DAY - SHE SAID YES! 💖💖💖
      
      🎉 AMAZING NEWS! 🎉
      
      Response: YES! ✅
      
      She said: "YES! I will be your Valentine! 💕"
      
      📸 KODAK MOMENT CAPTURED! 📸
      A beautiful photo has been captured to freeze this magical moment forever!
      See the attached photo - our first Kodak moment as an official couple! 💑
      
      ✨ Photo Details:
      - Filename: Our_Kodak_Moment_Valentine.jpg
      - Size: ${sizeMB} MB
      - Quality: High (1280x720, Vintage Kodak Effect)
      - Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      - Day: Day 7 - Valentine's Day ❤️
      - Special: Kodak Moment Photo Included! 📸💕
      
      🎉🎉🎉 CELEBRATION TIME! 🎉🎉🎉
      
      "Aaj se teri, baahon mein hai jeena
      Aaj se teri, raahon mein hai chalna  
      Aaj se teri, yaadein hai dil mein
      Aaj se meri, zindagi hai tere sang"
      
      This photo captures the beginning of forever! 💞
      
      With all my love,
      Your Valentine Week App 💕
      
      Made with ❤️ by Bunny for Anku
      
      P.S. The photo has Kodak vintage effects and a romantic frame! 📸✨
      
      📎 Check your email attachments for the photo!
    `);
    
    formData.append('redirect', 'false');
    
    console.log('📤 Sending email with photo to Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    console.log('📧 Web3Forms response:', data);
    
    if (data.success) {
      console.log('✅ Kodak moment sent to your email! 💕📸');
      console.log('📧 Email sent to: pachourimohit1@gmail.com');
      console.log('📎 Attachment: Our_Kodak_Moment_Valentine.jpg (' + sizeMB + ' MB)');
      
      // Update status message
      const statusElement = document.getElementById('camera-status');
      if (statusElement) {
        statusElement.innerHTML = `
          ✅ Photo sent to email! 💌<br>
          📧 Check: pachourimohit1@gmail.com<br>
          📎 Attachment: ${sizeMB} MB<br>
          <small>Look in your inbox or spam folder</small>
        `;
      }
    } else {
      console.error('❌ Failed to send Kodak moment:', data);
      alert(`Email sending failed: ${data.message || 'Unknown error'}\n\nPhoto was downloaded to your device.\nPlease check your browser console for details.`);
    }
  } catch (error) {
    console.error('Error sending Kodak moment email:', error);
    alert(`Error sending email: ${error.message}\n\nPhoto was downloaded to your device.`);
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
function createFloatingHeart(container) {
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
  
  // Open Kodak Moment Camera FIRST (before showing celebration)
  openKodakMomentCamera();
  
  // Trigger massive celebration
  triggerMassiveCelebration();
  
  // Note: Email will be sent by openKodakMomentCamera after photo capture
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
