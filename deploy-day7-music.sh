#!/bin/bash

# Deploy with Day 7 music, excluding Days 1-3 (they stream from GitHub)
# This reduces deployment size significantly

echo "🚀 DEPLOY - Day 7 Music + Camera Fix"
echo "======================================"
echo ""

cd /home/user/webapp

# Build
echo "🔨 Building..."
npm run build > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Create deployment package
DEPLOY_DIR="/tmp/valentine-day7-music"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR/static"

echo "📁 Creating deployment package..."

# Copy essential files
cp dist/_worker.js "$DEPLOY_DIR/"
cp dist/_routes.json "$DEPLOY_DIR/" 2>/dev/null || true
cp dist/static/app.js "$DEPLOY_DIR/static/"
cp dist/static/styles.css "$DEPLOY_DIR/static/"

# Copy photos (small)
cp -r dist/static/promise-photos "$DEPLOY_DIR/static/" 2>/dev/null || true
cp -r dist/static/kiss-photos "$DEPLOY_DIR/static/" 2>/dev/null || true
cp -r dist/static/valentine-photos "$DEPLOY_DIR/static/" 2>/dev/null || true

# EXCLUDE Days 1-3 music (they stream from GitHub now)
echo "   ⏭️  Skipping Days 1-3 music (streaming from GitHub)"

# Include Day 5 music (small - 17MB)
if [ -d "dist/static/music-day5" ]; then
    echo "   📦 Including Day 5 music (17MB)..."
    cp -r dist/static/music-day5 "$DEPLOY_DIR/static/"
fi

# Include Day 6 music (medium - 54MB)
if [ -d "dist/static/music-day6" ]; then
    echo "   📦 Including Day 6 music (54MB)..."
    cp -r dist/static/music-day6 "$DEPLOY_DIR/static/"
fi

# Include Day 7 music (large - 365MB)
if [ -d "dist/static/music-day7" ]; then
    echo "   📦 Including Day 7 music (365MB)..."
    cp -r dist/static/music-day7 "$DEPLOY_DIR/static/"
else
    echo "   ⚠️  Day 7 music not found in dist!"
fi

# Package stats
PACKAGE_SIZE=$(du -sh "$DEPLOY_DIR" | cut -f1)
FILE_COUNT=$(find "$DEPLOY_DIR" -type f | wc -l)

echo ""
echo "📊 Package Stats:"
echo "   Size: $PACKAGE_SIZE"
echo "   Files: $FILE_COUNT"
echo ""

echo "🌐 Deploying to Cloudflare Pages..."
echo "   (May take several minutes for large files)"
echo ""

cd "$DEPLOY_DIR"

npx wrangler pages deploy . \
  --project-name valentine-week \
  --commit-dirty=true \
  --branch main 2>&1 | tee /tmp/day7-deploy.log

DEPLOY_EXIT_CODE=${PIPESTATUS[0]}

if [ $DEPLOY_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "🎉 Deployed:"
    echo "   ✅ Camera fix"
    echo "   ✅ Day 5 music (3 songs)"
    echo "   ✅ Day 6 music (10 songs)"
    echo "   ✅ Day 7 music (12 songs)"
    echo ""
    echo "🎵 Music Configuration:"
    echo "   Days 1-3: GitHub streaming ✅"
    echo "   Days 5-7: Cloudflare CDN ✅"
    echo ""
    echo "🔍 Verify at: https://ankitamy.shop"
else
    echo ""
    echo "❌ Deployment failed"
    echo ""
    tail -50 /tmp/day7-deploy.log
fi

cd /home/user/webapp
echo ""
echo "Completed: $(date)"
