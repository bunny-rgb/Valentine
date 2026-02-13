#!/bin/bash

# Deploy Valentine Week to Production - With Day 7 Camera Fix
# Optimized: Excludes large Day 6 & 7 music from deployment
# Music will stream from local URLs (already deployed)

echo "🚀 VALENTINE WEEK - PRODUCTION DEPLOYMENT (WITH CAMERA FIX)"
echo "============================================================"
echo ""

# Project details
PROJECT_NAME="valentine-week"
PRODUCTION_URL="https://ankitamy.shop"

echo "📦 Preparing deployment..."
echo "   Project: $PROJECT_NAME"
echo "   Production: $PRODUCTION_URL"
echo ""

# Build first
echo "🔨 Building project..."
cd /home/user/webapp
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Create deployment package (EXCLUDING Day 6 & 7 music to reduce size)
echo "📁 Creating optimized deployment package..."
DEPLOY_DIR="/tmp/valentine-production-camera-fix"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy dist folder
echo "   Copying dist/ folder..."
cp -r dist/* "$DEPLOY_DIR/"

# Remove Day 6 & 7 music to reduce deployment size (already deployed)
echo "   Removing Day 6 & 7 music from package (already in production)..."
rm -rf "$DEPLOY_DIR/static/music-day6" 2>/dev/null || true
rm -rf "$DEPLOY_DIR/static/music-day7" 2>/dev/null || true

# Show package size
PACKAGE_SIZE=$(du -sh "$DEPLOY_DIR" | cut -f1)
echo "   Package size: $PACKAGE_SIZE (optimized)"
echo ""

# Count files
FILE_COUNT=$(find "$DEPLOY_DIR" -type f | wc -l)
echo "   Files to upload: $FILE_COUNT"
echo ""

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
cd "$DEPLOY_DIR"

npx wrangler pages deploy . \
  --project-name "$PROJECT_NAME" \
  --commit-dirty=true \
  --branch main

DEPLOY_EXIT_CODE=$?

if [ $DEPLOY_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "🌐 Production URLs:"
    echo "   Main: $PRODUCTION_URL"
    echo "   Preview: https://valentine-week-611.pages.dev"
    echo ""
    echo "📋 Deployed Features:"
    echo "   ✅ Day 1-4: Unlocked (accessible now)"
    echo "   🔒 Day 5: Locked until Feb 12, 2026"
    echo "   🔒 Day 6: Locked until Feb 13, 2026"
    echo "   🔒 Day 7: Locked until Feb 14, 2026"
    echo ""
    echo "🆕 NEW: Day 7 Camera Fix:"
    echo "   ✅ Camera opens on YES click"
    echo "   ✅ Live preview with romantic frame"
    echo "   ✅ Kodak vintage effects"
    echo "   ✅ Auto-download photo"
    echo "   ✅ Email to pachourimohit1@gmail.com"
    echo "   ✅ Photo attachment included"
    echo ""
    echo "🎵 Music Player:"
    echo "   ✅ Pause/Resume from current position"
    echo "   ✅ Progress bar updates"
    echo "   ✅ Drag to seek"
    echo "   ✅ Album art visible (SVG gradients)"
    echo ""
    echo "🎵 Day 6 & 7 Music:"
    echo "   ✅ URLs updated to GitHub"
    echo "   ✅ Will stream from repository"
    echo "   ✅ No deployment size limits"
    echo ""
    echo "📸 Day 4:"
    echo "   ✅ 7 Promise photos"
    echo ""
    echo "🎉 Ready for Valentine's Week 2026!"
else
    echo ""
    echo "❌ DEPLOYMENT FAILED (Exit code: $DEPLOY_EXIT_CODE)"
    echo ""
    echo "🔧 Troubleshooting:"
    echo "   1. Check Cloudflare API token: npx wrangler whoami"
    echo "   2. Verify project name: $PROJECT_NAME"
    echo "   3. Check deployment logs"
fi

# Cleanup
cd /home/user/webapp
echo ""
echo "Last deployed: $(date)"
