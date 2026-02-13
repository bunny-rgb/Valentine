#!/bin/bash

# 🔓 Preview Mode Verification Script
# Verifies all 7 days are unlocked in local preview

echo "🔍 PREVIEW MODE VERIFICATION"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PREVIEW_URL="http://localhost:11000"
ERRORS=0

# Check if server is running
echo "1️⃣  Checking server status..."
if curl -s "$PREVIEW_URL" > /dev/null; then
    echo -e "${GREEN}✅ Server is running${NC}"
else
    echo -e "${RED}❌ Server is not running${NC}"
    echo "   Run: pm2 restart valentine-week"
    exit 1
fi
echo ""

# Check previewMode setting
echo "2️⃣  Checking previewMode setting..."
PREVIEW_MODE=$(curl -s "$PREVIEW_URL/static/app.js" | grep "previewMode:" | head -1)
if echo "$PREVIEW_MODE" | grep -q "true"; then
    echo -e "${GREEN}✅ previewMode: true${NC}"
    echo "   $PREVIEW_MODE"
else
    echo -e "${RED}❌ previewMode is not enabled${NC}"
    echo "   $PREVIEW_MODE"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check isDayUnlocked function
echo "3️⃣  Checking unlock function..."
UNLOCK_FUNC=$(curl -s "$PREVIEW_URL/static/app.js" | grep -A 3 "function isDayUnlocked")
if echo "$UNLOCK_FUNC" | grep -q "previewMode"; then
    echo -e "${GREEN}✅ isDayUnlocked checks previewMode${NC}"
else
    echo -e "${YELLOW}⚠️  Unlock function may not check previewMode${NC}"
fi
echo ""

# Check music files
echo "4️⃣  Checking Day 5 music files..."
DAY5_FILES=("jiya-laage-na.mp3" "ishq-hai.mp3" "pal-pal-dil-ke-paas.mp3")
for file in "${DAY5_FILES[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PREVIEW_URL/static/music-day5/$file")
    if [ "$STATUS" = "200" ]; then
        echo -e "${GREEN}✅ $file (HTTP $STATUS)${NC}"
    else
        echo -e "${RED}❌ $file (HTTP $STATUS)${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# Check Day 6 music files (sample)
echo "5️⃣  Checking Day 6 music files (sample)..."
DAY6_SAMPLES=("Ishq%20Hai_spotdown.org.mp3" "Sharmeeli_spotdown.org.mp3")
for file in "${DAY6_SAMPLES[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PREVIEW_URL/static/music-day6/$file")
    if [ "$STATUS" = "200" ]; then
        echo -e "${GREEN}✅ ${file//%20/ } (HTTP $STATUS)${NC}"
    else
        echo -e "${RED}❌ ${file//%20/ } (HTTP $STATUS)${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# Check album art in app.js
echo "6️⃣  Checking album art configuration..."
ALBUM_ART_COUNT=$(curl -s "$PREVIEW_URL/static/app.js" | grep -c "data:image/svg+xml")
if [ "$ALBUM_ART_COUNT" -gt 30 ]; then
    echo -e "${GREEN}✅ Found $ALBUM_ART_COUNT SVG album art placeholders${NC}"
else
    echo -e "${YELLOW}⚠️  Found only $ALBUM_ART_COUNT album art entries${NC}"
fi
echo ""

# Check promise photos
echo "7️⃣  Checking Day 4 promise photos..."
for i in {1..7}; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PREVIEW_URL/static/promise-photos/promise-$i.jpg")
    if [ "$STATUS" = "200" ]; then
        echo -e "${GREEN}✅ promise-$i.jpg (HTTP $STATUS)${NC}"
    else
        echo -e "${RED}❌ promise-$i.jpg (HTTP $STATUS)${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# Summary
echo "================================"
echo "📊 VERIFICATION SUMMARY"
echo "================================"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ ALL CHECKS PASSED${NC}"
    echo ""
    echo "🎉 Preview Mode is Active!"
    echo "🔓 All 7 days are unlocked"
    echo ""
    echo "🌐 Preview URL:"
    echo "   https://11000-inlk2mmv46jbov1syun1w-b237eb32.sandbox.novita.ai"
    echo ""
    echo "📋 What to Test:"
    echo "   • Navigate to any day (1-7)"
    echo "   • Test music player (pause/resume/seek)"
    echo "   • View Day 4 promise photos"
    echo "   • Test Day 7 Kodak camera (click YES)"
    echo ""
    echo "⚠️  REMEMBER: DO NOT deploy with previewMode: true"
    echo "   Change back to previewMode: false before production deploy"
else
    echo -e "${RED}❌ FOUND $ERRORS ERROR(S)${NC}"
    echo ""
    echo "🔧 Troubleshooting:"
    echo "   1. Rebuild: npm run build"
    echo "   2. Restart: pm2 restart valentine-week"
    echo "   3. Check logs: pm2 logs valentine-week --nostream"
    echo "   4. Hard refresh browser: Ctrl+Shift+R"
fi

echo ""
echo "Last checked: $(date)"
echo "================================"
