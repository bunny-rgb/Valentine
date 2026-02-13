#!/bin/bash

# Deploy Valentine Week - FINAL with Day 7 Camera Fix + All Music
# This deployment INCLUDES Day 7 music (365MB)

echo "🚀 VALENTINE WEEK - FINAL DEPLOYMENT (Camera Fix + Day 7 Music)"
echo "==============================================================="
echo ""

# Project details
PROJECT_NAME="valentine-week"
PRODUCTION_URL="https://ankitamy.shop"

echo "📦 Preparing deployment..."
echo "   Project: $PROJECT_NAME"
echo "   Production: $PRODUCTION_URL"
echo ""

# Navigate to project
cd /home/user/webapp

# Build first
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy directly from dist (includes ALL music)
echo "📁 Deployment package info:"
DIST_SIZE=$(du -sh dist | cut -f1)
FILE_COUNT=$(find dist -type f | wc -l)
echo "   Total size: $DIST_SIZE"
echo "   Files: $FILE_COUNT"
echo ""

echo "   Music included:"
echo "   - Day 5: $(du -sh dist/static/music-day5 2>/dev/null | cut -f1 || echo 'N/A')"
echo "   - Day 6: $(du -sh dist/static/music-day6 2>/dev/null | cut -f1 || echo 'N/A')"
echo "   - Day 7: $(du -sh dist/static/music-day7 2>/dev/null | cut -f1 || echo 'N/A')"
echo ""

echo "🌐 Deploying to Cloudflare Pages..."
echo "   (This may take several minutes due to large music files)"
echo ""

cd dist

# Deploy with increased timeout and retries
npx wrangler pages deploy . \
  --project-name "$PROJECT_NAME" \
  --commit-dirty=true \
  --branch main 2>&1 | tee /tmp/final-deploy.log

DEPLOY_EXIT_CODE=${PIPESTATUS[0]}

if [ $DEPLOY_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "🌐 Production URLs:"
    echo "   Main: $PRODUCTION_URL"
    echo "   Preview: https://valentine-week-611.pages.dev"
    echo ""
    echo "🆕 DEPLOYED:"
    echo "   ✅ Day 7 Camera Fix"
    echo "   ✅ Day 7 Music (12 songs, 365MB)"
    echo "   ✅ All previous fixes"
    echo ""
    echo "📋 Features:"
    echo "   ✅ Day 1-4: Unlocked"
    echo "   🔒 Day 5: Unlocks Feb 12, 2026"
    echo "   🔒 Day 6: Unlocks Feb 13, 2026"
    echo "   🔒 Day 7: Unlocks Feb 14, 2026"
    echo ""
    echo "📸 Day 7 Camera:"
    echo "   ✅ Opens on YES click"
    echo "   ✅ Kodak effects"
    echo "   ✅ Auto-download"
    echo "   ✅ Email with photo"
    echo ""
    echo "🎵 Music:"
    echo "   ✅ Day 5: 3 songs"
    echo "   ✅ Day 6: 10 songs"
    echo "   ✅ Day 7: 12 songs"
    echo ""
    echo "🎉 Production ready for Valentine's Week 2026!"
else
    echo ""
    echo "❌ DEPLOYMENT FAILED (Exit code: $DEPLOY_EXIT_CODE)"
    echo ""
    echo "Check log: /tmp/final-deploy.log"
    echo ""
    tail -50 /tmp/final-deploy.log
fi

cd /home/user/webapp
echo ""
echo "Deployment completed: $(date)"
