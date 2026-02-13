// Generate beautiful gradient album art placeholders for all songs

const fs = require('fs');

// Color palettes for different songs (romantic themed)
const colors = [
  ['#FF6B9D', '#C44569'], // Pink/Rose
  ['#FFA07A', '#FF69B4'], // Coral/HotPink
  ['#FFB6C1', '#FF1493'], // LightPink/DeepPink
  ['#DDA0DD', '#BA55D3'], // Plum/MediumOrchid
  ['#F08080', '#CD5C5C'], // LightCoral/IndianRed
  ['#FF69B4', '#C71585'], // HotPink/MediumVioletRed
  ['#FFB3BA', '#FF677D'], // Soft pink/Bright pink
  ['#FFC0CB', '#FF85A1'], // Pink/Rose
  ['#E6B0AA', '#C39BD3'], // Mauve/Lavender
  ['#F5B7B1', '#EC7063'], // Light Red/Red
];

// Generate SVG with gradient and first letter
function generateAlbumArtSVG(songName, colorIndex) {
  const [color1, color2] = colors[colorIndex % colors.length];
  const firstLetter = songName.charAt(0).toUpperCase();
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <defs>
    <linearGradient id="grad${colorIndex}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#grad${colorIndex})"/>
  <text x="50%" y="50%" font-size="120" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold">${firstLetter}</text>
</svg>`;
  
  // Convert to data URL
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Song list for all days
const allSongs = [
  // Day 5
  { name: 'Jiya Laage Na', day: 5 },
  { name: 'Ishq Hai', day: 5 },
  { name: 'Pal Pal Dil Ke Paas', day: 5 },
  // Day 6
  { name: 'Ishq Hai', day: 6 },
  { name: 'Sharmeeli', day: 6 },
  { name: 'Akhiyaan Gulaab', day: 6 },
  { name: 'Woh', day: 6 },
  { name: 'Humdum', day: 6 },
  { name: 'Suroor', day: 6 },
  { name: 'Rakhlo Tum Chupaake', day: 6 },
  { name: 'Iraaday', day: 6 },
  { name: 'Sawaal', day: 6 },
  { name: 'Hai Dil Ye Mera', day: 6 },
  // Day 7
  { name: 'Aaj Se Teri', day: 7 },
  { name: 'Sajni', day: 7 },
  { name: 'Woh', day: 7 },
  { name: 'Kehdoon Tumhen', day: 7 },
  { name: 'Rakhlo Tum Chupaake', day: 7 },
  { name: 'Iraaday', day: 7 },
  { name: 'Tera Ban Jaunga', day: 7 },
  { name: 'Pal Pal Dil Ke Paas', day: 7 },
  { name: 'Ek Din Aap', day: 7 },
  { name: 'Tose Naina', day: 7 },
  { name: 'Tum Ho Toh', day: 7 },
  { name: 'Raat Bhar', day: 7 },
];

console.log('// Album Art Data URLs (Beautiful Gradients)\n');
console.log('// Copy these into your app.js file\n');

allSongs.forEach((song, index) => {
  const dataUrl = generateAlbumArtSVG(song.name, index);
  console.log(`// Day ${song.day}: ${song.name}`);
  console.log(`albumArt: '${dataUrl}',\n`);
});

console.log('\n✅ Generated album art placeholders for all songs!');
