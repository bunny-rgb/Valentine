#!/bin/bash
set -e

echo "🎵 Deploying Music Player Fixes..."
echo ""

# Create temporary deploy directory
DEPLOY_DIR="/tmp/valentine-music-fix"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copy essential files only (no large music files)
echo "📦 Copying essential files..."
cp -r dist/_worker.js $DEPLOY_DIR/
cp -r dist/_routes.json $DEPLOY_DIR/
mkdir -p $DEPLOY_DIR/static
cp dist/static/app.js $DEPLOY_DIR/static/
cp dist/static/styles.css $DEPLOY_DIR/static/

# Copy photo directories (small, needed for Days 4-7)
for dir in promise-photos kiss-photos romantic-couple valentine-photos; do
  if [ -d "dist/static/$dir" ]; then
    mkdir -p "$DEPLOY_DIR/static/$dir"
    cp -r dist/static/$dir/* $DEPLOY_DIR/static/$dir/
  fi
done

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
echo "✅ Music Player Fixes Deployed!"
echo "🎵 Production: https://ankitamy.shop"
