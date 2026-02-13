#!/bin/bash
# Deploy only essential static files (no music)

echo "🚀 Deploying essential static files only..."

# Create a temporary dist with only essential files
mkdir -p /tmp/valentine-dist-static
cp -r dist/_worker.js dist/_routes.json /tmp/valentine-dist-static/

# Copy only photo directories (skip music)
mkdir -p /tmp/valentine-dist-static/static
cp -r dist/static/promise-photos /tmp/valentine-dist-static/static/ 2>/dev/null || true
cp -r dist/static/romantic-couple /tmp/valentine-dist-static/static/ 2>/dev/null || true
cp -r dist/static/valentine-photos /tmp/valentine-dist-static/static/ 2>/dev/null || true
cp -r dist/static/kiss-photos /tmp/valentine-dist-static/static/ 2>/dev/null || true
cp -r dist/static/hug-photos /tmp/valentine-dist-static/static/ 2>/dev/null || true

# Copy CSS/JS
cp -r dist/static/*.css /tmp/valentine-dist-static/static/ 2>/dev/null || true
cp -r dist/static/*.js /tmp/valentine-dist-static/static/ 2>/dev/null || true

echo "📦 Package size:"
du -sh /tmp/valentine-dist-static

echo "🌐 Deploying to Cloudflare Pages..."
cd /home/user/webapp
npx wrangler pages deploy /tmp/valentine-dist-static --project-name valentine-week --branch main --commit-dirty=true

echo "✅ Deployment complete!"
