#!/bin/bash

# Quick deployment - Camera Fix ONLY (without redeploying large music files)
# This deploys only the code changes, music files stay as-is in production

echo "🚀 QUICK DEPLOYMENT - Camera Fix Only"
echo "======================================"
echo ""

cd /home/user/webapp

# Build
echo "🔨 Building..."
npm run build > /dev/null 2>&1

# Create minimal deployment package
DEPLOY_DIR="/tmp/valentine-camera-only"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy only essential files (NO music)
echo "📁 Creating minimal package..."
cp -r dist/_worker.js "$DEPLOY_DIR/"
cp -r dist/_routes.json "$DEPLOY_DIR/" 2>/dev/null || true
mkdir -p "$DEPLOY_DIR/static"
cp dist/static/app.js "$DEPLOY_DIR/static/"
cp dist/static/styles.css "$DEPLOY_DIR/static/"

# Copy photos (small)
cp -r dist/static/promise-photos "$DEPLOY_DIR/static/" 2>/dev/null || true
cp -r dist/static/kiss-photos "$DEPLOY_DIR/static/" 2>/dev/null || true
cp -r dist/static/valentine-photos "$DEPLOY_DIR/static/" 2>/dev/null || true

# NO MUSIC - keeps existing deployed music

PACKAGE_SIZE=$(du -sh "$DEPLOY_DIR" | cut -f1)
FILE_COUNT=$(find "$DEPLOY_DIR" -type f | wc -l)

echo "   Size: $PACKAGE_SIZE"
echo "   Files: $FILE_COUNT"
echo ""

echo "🌐 Deploying camera fix..."
cd "$DEPLOY_DIR"

npx wrangler pages deploy . \
  --project-name valentine-week \
  --commit-dirty=true \
  --branch main

DEPLOY_EXIT_CODE=$?

if [ $DEPLOY_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ CAMERA FIX DEPLOYED!"
    echo ""
    echo "   Camera will now open on YES click"
    echo "   Music files remain from previous deployment"
    echo ""
    echo "🔍 Verify at: https://ankitamy.shop"
else
    echo ""
    echo "❌ Deployment failed (exit code: $DEPLOY_EXIT_CODE)"
fi

cd /home/user/webapp
echo ""
echo "Completed: $(date)"
