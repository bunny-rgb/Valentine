#!/bin/bash

# Configure music URLs properly:
# - Days 1-3: Use GitHub (files exist there)
# - Days 5-7: Use local URLs (already deployed to Cloudflare)

echo "🔧 Configuring Music URLs Correctly"
echo "===================================="
echo ""

FILE="public/static/app.js"

echo "📝 Setting up URLs..."
echo ""

# Days 1-3: Keep GitHub URLs (they work!)
echo "  ✅ Days 1-3: GitHub URLs (already set)"

# Day 5: Revert to local (already deployed to Cloudflare)
echo "  🔄 Day 5: Reverting to local URLs..."
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day5/|previewUrl: '/static/music-day5/|g" "$FILE"

# Day 6: Revert to local (already deployed to Cloudflare)
echo "  🔄 Day 6: Reverting to local URLs..."
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/|previewUrl: '/static/music-day6/|g" "$FILE"

# Day 7: Revert to local (will be deployed)
echo "  🔄 Day 7: Reverting to local URLs..."
sed -i "s|previewUrl: 'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day7/|previewUrl: '/static/music-day7/|g" "$FILE"

echo ""
echo "✅ Configuration Complete!"
echo ""
echo "📋 Final Configuration:"
echo "   Days 1-3: GitHub ✅ (streaming from repository)"
echo "   Day 5:    Local ✅ (already deployed)"
echo "   Day 6:    Local ✅ (already deployed)"
echo "   Day 7:    Local ⏰ (needs deployment)"
echo ""

# Verify
echo "🔍 Verification:"
echo ""
echo "Days 1-3 (GitHub):"
grep "previewUrl.*github.*music/" "$FILE" | grep -v "music-day" | head -1
echo ""
echo "Day 5 (Local):"
grep "previewUrl.*'/static/music-day5" "$FILE" | head -1
echo ""
echo "Day 6 (Local):"
grep "previewUrl.*'/static/music-day6" "$FILE" | head -1
echo ""
echo "Day 7 (Local):"
grep "previewUrl.*'/static/music-day7" "$FILE" | head -1
echo ""
