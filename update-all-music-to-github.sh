#!/bin/bash

# Update ALL music URLs to GitHub for Days 1-7
# This ensures all songs stream from GitHub repository

echo "🔄 Updating ALL Music URLs to GitHub"
echo "====================================="
echo ""

FILE="public/static/app.js"
BACKUP="public/static/app.js.backup-before-all-github"

# Create backup
cp "$FILE" "$BACKUP"
echo "✅ Backup created: $BACKUP"
echo ""

# GitHub raw URL base
GITHUB_BASE="https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static"

echo "📝 Updating URLs for all days..."
echo ""

# Day 1-3 original playlist (uses /static/music/)
echo "  Days 1-3 (original playlist)..."
sed -i "s|previewUrl: '/static/music/|previewUrl: '$GITHUB_BASE/music/|g" "$FILE"
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music/|previewUrl: '$GITHUB_BASE/music/|g" "$FILE"

# Day 2 special playlist
echo "  Day 2 (special playlist)..."
# Already using local URLs in day2SpecialPlaylist if any

# Day 3 special playlist  
echo "  Day 3 (special playlist)..."
# Already using local URLs in day3SpecialPlaylist if any

# Day 5 - Hug Day
echo "  Day 5 (Hug Day)..."
sed -i "s|previewUrl: '/static/music-day5/|previewUrl: '$GITHUB_BASE/music-day5/|g" "$FILE"
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/|previewUrl: '$GITHUB_BASE/music-day5/|g" "$FILE"

# Day 6 - Kiss Day
echo "  Day 6 (Kiss Day)..."
sed -i "s|previewUrl: '/static/music-day6/|previewUrl: '$GITHUB_BASE/music-day6/|g" "$FILE"
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/|previewUrl: '$GITHUB_BASE/music-day6/|g" "$FILE"

# Day 7 - Valentine's Day
echo "  Day 7 (Valentine's Day)..."
sed -i "s|previewUrl: '/static/music-day7/|previewUrl: '$GITHUB_BASE/music-day7/|g" "$FILE"
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/|previewUrl: '$GITHUB_BASE/music-day7/|g" "$FILE"

echo ""
echo "✅ All URLs Updated!"
echo ""

# Verify changes
echo "🔍 Verification:"
echo ""
echo "Days 1-3 URLs (sample):"
grep "previewUrl.*music/" "$FILE" | grep -v "music-day" | head -2
echo ""
echo "Day 5 URLs (sample):"
grep "previewUrl.*music-day5" "$FILE" | head -2
echo ""
echo "Day 6 URLs (sample):"
grep "previewUrl.*music-day6" "$FILE" | head -2
echo ""
echo "Day 7 URLs (sample):"
grep "previewUrl.*music-day7" "$FILE" | head -2
echo ""

echo "✅ All music will now stream from GitHub!"
echo "   No local music files needed for deployment"
echo ""
echo "Next steps:"
echo "   1. Build: npm run build"
echo "   2. Deploy: ./deploy-camera-fix-only.sh"
