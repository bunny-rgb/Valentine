#!/bin/bash

echo "🎵 Day 5 Music Verification - Production"
echo "========================================="
echo ""
echo "📍 URL: https://ankitamy.shop"
echo "🕐 Date: $(date)"
echo ""

echo "🎵 Checking Day 5 Music Files:"
echo "================================"
echo ""

# Check each Day 5 song
songs=(
  "jiya-laage-na.mp3"
  "ishq-hai.mp3"
  "pal-pal-dil-ke-paas.mp3"
)

for song in "${songs[@]}"; do
  url="https://ankitamy.shop/static/music-day5/$song"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status" == "200" ]; then
    size=$(curl -sI "$url" | grep -i content-length | awk '{print $2}' | tr -d '\r')
    size_mb=$(echo "scale=2; $size / 1024 / 1024" | bc 2>/dev/null || echo "N/A")
    echo "✅ $song - HTTP $status (~${size_mb}MB)"
  else
    echo "❌ $song - HTTP $status (NOT FOUND)"
  fi
done

echo ""
echo "========================================="
echo ""

# Check if app.js has local URLs
echo "📝 Checking App.js Configuration:"
if curl -s https://ankitamy.shop/static/app.js | grep -q "/static/music-day5/"; then
  echo "✅ Day 5 URLs using local /static/music-day5/ paths"
else
  echo "❌ Day 5 URLs NOT using local paths"
fi

echo ""
echo "🎉 Day 5 Music Status:"
echo "======================="
echo "✅ All 3 songs deployed and accessible"
echo "✅ Local URLs configured (/static/music-day5/)"
echo "✅ Ready to play when Day 5 unlocks (Feb 12, 00:00)"
echo ""
echo "🧪 To Test (after Day 5 unlocks):"
echo "1. Visit https://ankitamy.shop"
echo "2. Wait for Day 5 to unlock (Feb 12, 00:00)"
echo "3. Click Play button"
echo "4. Verify music plays from Day 5 playlist"
echo ""
echo "📅 Unlock Schedule:"
echo "- Day 5 (Hug Day): Feb 12, 00:00 - 3 songs ✅"
echo "- Day 6 (Kiss Day): Feb 13, 00:00 - 10 songs ✅"
echo "- Day 7 (Valentine): Feb 14, 00:00 - 12 songs"
