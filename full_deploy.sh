#!/bin/bash
set -e
cd /home/user/webapp

echo "🚀 Starting full deployment with all assets..."

# Use wrangler pages deploy with increased timeout
export WRANGLER_SEND_METRICS=false

# Deploy everything 
npx wrangler pages deploy dist \
  --project-name=valentine-week \
  --branch=main \
  --commit-dirty=true

echo "✅ Deployment complete!"
