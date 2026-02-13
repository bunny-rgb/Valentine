#!/bin/bash
set -e

echo "🚀 Starting deployment retry script..."
echo ""

# Kill any existing wrangler processes
killall -9 wrangler node 2>/dev/null || true
sleep 2

# Attempt 1: Standard deployment
echo "📤 Attempt 1: Standard deployment..."
timeout 120 npx wrangler pages deploy dist --project-name valentine-week --commit-dirty=true 2>&1 &
PID=$!
sleep 120
if kill -0 $PID 2>/dev/null; then
    echo "⚠️  Timeout - killing process"
    kill -9 $PID 2>/dev/null || true
    wait $PID 2>/dev/null || true
fi

echo ""
echo "📤 Checking if deployment succeeded..."
sleep 5

# Check latest deployment
npx wrangler pages deployment list --project-name=valentine-week 2>&1 | head -8

echo ""
echo "✅ Deployment script complete!"
echo ""
echo "If deployment failed, you have these options:"
echo "1. Use Cloudflare Dashboard: https://dash.cloudflare.com/ → Pages → valentine-week → Direct upload"
echo "2. Try again later (Wrangler sometimes has API issues)"
echo "3. Reduce package size by removing Day 3-4 music"
