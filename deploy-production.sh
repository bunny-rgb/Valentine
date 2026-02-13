#!/bin/bash

# Deploy Valentine Week to Production with All Fixes
# Date: February 11, 2026

echo "🚀 VALENTINE WEEK - PRODUCTION DEPLOYMENT"
echo "=========================================="
echo ""

# Project details
PROJECT_NAME="valentine-week"
PRODUCTION_URL="https://ankitamy.shop"

echo "📦 Preparing deployment..."
echo "   Project: $PROJECT_NAME"
echo "   Production: $PRODUCTION_URL"
echo ""

# Create deployment package (excluding local dev files)
echo "📁 Creating deployment package..."
cd /home/user/webapp

# Create temporary deployment directory
DEPLOY_DIR="/tmp/valentine-production-deploy"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy essential files only
echo "   Copying dist/ folder..."
cp -r dist/* "$DEPLOY_DIR/"

# Show package size
PACKAGE_SIZE=$(du -sh "$DEPLOY_DIR" | cut -f1)
echo "   Package size: $PACKAGE_SIZE"
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
    echo "🎯 Day 7 Features Ready:"
    echo "   ✅ Kodak Moment Camera"
    echo "   ✅ Photo with vintage effects"
    echo "   ✅ Auto-download"
    echo "   ✅ Email to pachourimohit1@gmail.com"
    echo "   ✅ YES response included"
    echo ""
    echo "🎵 Music Player:"
    echo "   ✅ Pause/Resume from current position"
    echo "   ✅ Progress bar updates"
    echo "   ✅ Drag to seek"
    echo "   ✅ Album art visible (SVG gradients)"
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
