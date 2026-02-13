#!/bin/bash
echo "🚀 Quick deployment with smaller batch..."
# Only deploy critical files
cd dist
# Create a minimal deployment
tar -czf ../minimal-deploy.tar.gz _worker.js _routes.json static/app.js static/styles.css
cd ..
echo "📦 Package created: $(du -h minimal-deploy.tar.gz | cut -f1)"
echo ""
echo "Now deploying..."
timeout 180 npx wrangler pages deploy dist --project-name valentine-week --commit-dirty=true 2>&1 | tee quick-deploy.log
echo ""
echo "✅ Check deploy result above"
