#!/bin/bash

# Backup
cp public/static/app.js public/static/app.js.backup-final

# Update Day 5, 6, 7 URLs to GitHub
sed -i 's|previewUrl: "/static/music-day5/|previewUrl: "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/|g' public/static/app.js
sed -i 's|previewUrl: "/static/music-day6/|previewUrl: "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/|g' public/static/app.js
sed -i 's|previewUrl: "/static/music-day7/|previewUrl: "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/|g' public/static/app.js

echo "✅ Updated all Day 5, 6, 7 music URLs to GitHub!"
echo ""
echo "Verification:"
grep -c "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/" public/static/app.js | xargs echo "Day 5 URLs:"
grep -c "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/" public/static/app.js | xargs echo "Day 6 URLs:"
grep -c "https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/" public/static/app.js | xargs echo "Day 7 URLs:"
