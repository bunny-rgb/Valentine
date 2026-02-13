#!/bin/bash

# Script to update Day 6 & 7 music URLs from local to GitHub
# This allows deployment without large music files

echo "🔄 Updating Day 6 & 7 Music URLs to GitHub"
echo "==========================================="
echo ""

FILE="public/static/app.js"
BACKUP="public/static/app.js.backup-before-github-urls"

# Create backup
cp "$FILE" "$BACKUP"
echo "✅ Backup created: $BACKUP"
echo ""

# GitHub raw URL base
GITHUB_BASE="https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static"

echo "📝 Updating Day 6 URLs..."

# Day 6 - Update all local URLs to GitHub
sed -i "s|previewUrl: '/static/music-day6/|previewUrl: '$GITHUB_BASE/music-day6/|g" "$FILE"

echo "📝 Updating Day 7 URLs..."

# Day 7 - Update all local URLs to GitHub
sed -i "s|previewUrl: '/static/music-day7/|previewUrl: '$GITHUB_BASE/music-day7/|g" "$FILE"

echo ""
echo "✅ URLs Updated!"
echo ""

# Verify changes
echo "🔍 Verification:"
echo ""
echo "Day 6 URLs (should show GitHub):"
grep "music-day6" "$FILE" | grep "previewUrl" | head -3
echo ""
echo "Day 7 URLs (should show GitHub):"
grep "music-day7" "$FILE" | grep "previewUrl" | head -3
echo ""

echo "✅ Day 6 & 7 music will now load from GitHub!"
echo "   This allows deployment without 419MB of music files."
echo ""
echo "Next steps:"
echo "   1. Build: npm run build"
echo "   2. Deploy: ./deploy-production.sh"
