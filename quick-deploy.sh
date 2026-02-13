#!/bin/bash

echo "🚀 Quick Deployment Script"
echo "=========================="
echo ""

# Check if dist exists
if [ ! -d "dist" ]; then
  echo "❌ dist folder not found. Running build..."
  npm run build
fi

echo "📊 Checking dist folder size..."
du -sh dist/
echo ""

echo "📁 Checking music folders..."
du -sh dist/static/music-day*
echo ""

echo "🎵 Day 7 songs count:"
ls dist/static/music-day7/*.mp3 | wc -l
echo ""

echo "✅ Build ready for deployment!"
echo ""
echo "📤 Choose deployment method:"
echo ""
echo "Option 1: Manual Upload (RECOMMENDED for large files)"
echo "  1. Visit: https://dash.cloudflare.com/"
echo "  2. Go to: Workers & Pages → valentine-week"
echo "  3. Click: Create deployment"
echo "  4. Upload: /home/user/webapp/dist/ folder (439 MB)"
echo ""
echo "Option 2: Wrangler CLI"
echo "  Run: npm run deploy:prod"
echo "  Note: May timeout with 439 MB. Use Option 1 if it fails."
echo ""
echo "Option 3: GitHub Auto-Deploy"
echo "  1. Connect GitHub repo to Cloudflare Pages"
echo "  2. Enable automatic deployments"
echo ""

read -p "Press Enter to deploy via Wrangler CLI, or Ctrl+C to use manual upload..."

echo ""
echo "🚀 Deploying to Cloudflare Pages..."
npm run deploy:prod

echo ""
echo "✅ Deployment script completed!"
