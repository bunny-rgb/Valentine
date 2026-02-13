#!/bin/bash
echo "🔨 Building fresh..."
cd /home/user/webapp
npm run build

echo "📦 Creating deployment package..."
mkdir -p /tmp/valentine-final
cp -r dist/_worker.js dist/_routes.json /tmp/valentine-final/

# Copy all static files
mkdir -p /tmp/valentine-final/static
cp -r dist/static/*.js /tmp/valentine-final/static/
cp -r dist/static/*.css /tmp/valentine-final/static/
cp -r dist/static/*-photos /tmp/valentine-final/static/
cp -r dist/static/romantic-couple /tmp/valentine-final/static/
cp -r dist/static/*.jpg /tmp/valentine-final/static/ 2>/dev/null || true

# Skip music for now
echo "📊 Package contents:"
ls -lh /tmp/valentine-final/static/ | head -20

echo "🌐 Deploying..."
npx wrangler pages deploy /tmp/valentine-final --project-name valentine-week --branch main --commit-dirty=true
