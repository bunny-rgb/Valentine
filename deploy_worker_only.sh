#!/bin/bash
# Deploy only worker code, skip large assets
cd /home/user/webapp
echo "Creating minimal deployment directory..."
rm -rf /tmp/deploy_min
mkdir -p /tmp/deploy_min
cp dist/_worker.js /tmp/deploy_min/
cp dist/_routes.json /tmp/deploy_min/
cd /tmp/deploy_min
echo "Deploying worker only..."
npx wrangler pages deploy . --project-name valentine-week --branch main
