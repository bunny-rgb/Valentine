#!/bin/bash
set -e

echo "🎵 Deploying with Day 5 Music Files..."
echo ""

# Create temporary deploy directory
DEPLOY_DIR="/tmp/valentine-day5-music"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copy essential files
echo "📦 Copying essential files..."
cp -r dist/_worker.js $DEPLOY_DIR/
cp -r dist/_routes.json $DEPLOY_DIR/
mkdir -p $DEPLOY_DIR/static
cp dist/static/app.js $DEPLOY_DIR/static/
cp dist/static/styles.css $DEPLOY_DIR/static/

# Copy photo directories
echo "📸 Copying photo directories..."
for dir in promise-photos kiss-photos romantic-couple valentine-photos; do
  if [ -d "dist/static/$dir" ]; then
    mkdir -p "$DEPLOY_DIR/static/$dir"
    cp -r dist/static/$dir/* $DEPLOY_DIR/static/$dir/
  fi
done

# Copy Day 5 music files
echo "🎵 Copying Day 5 music files..."
if [ -d "dist/static/music-day5" ]; then
  mkdir -p "$DEPLOY_DIR/static/music-day5"
  cp -r dist/static/music-day5/* $DEPLOY_DIR/static/music-day5/
  echo "   ✅ Day 5: $(ls -1 dist/static/music-day5/ | wc -l) songs (~17 MB)"
fi

# Copy Day 6 music files  
echo "🎵 Copying Day 6 music files..."
if [ -d "dist/static/music-day6" ]; then
  mkdir -p "$DEPLOY_DIR/static/music-day6"
  cp -r dist/static/music-day6/* $DEPLOY_DIR/static/music-day6/
  echo "   ✅ Day 6: $(ls -1 dist/static/music-day6/ | wc -l) songs (~54 MB)"
fi

# Show size
echo ""
echo "📊 Deployment package size:"
du -sh $DEPLOY_DIR
echo ""

# Deploy
echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy $DEPLOY_DIR \
  --project-name valentine-week \
  --branch main \
  --commit-dirty=true

echo ""
echo "✅ Day 5 Music Deployed!"
echo "🎵 Production: https://ankitamy.shop"
echo "📅 Day 5 unlocks: Feb 12, 00:00"
