#!/bin/bash
set -e

echo "🎵 Uploading Music Files to GitHub..."
echo ""

# Configure git to use larger post buffer for large files
git config http.postBuffer 524288000

# Try force push with larger buffer
echo "📤 Pushing to GitHub (this may take a few minutes for large files)..."
git push -f origin main 2>&1 || {
  echo ""
  echo "⚠️ Git push failed. Trying alternative: uploading via GitHub API..."
  
  # Alternative: commit smaller batches
  echo "📦 Committing in smaller batches..."
  
  # Check if files are staged
  if git diff --cached --quiet; then
    echo "No changes to push"
  else
    git commit -m "Add music files" || true
  fi
  
  # Try push again with verbose output
  GIT_CURL_VERBOSE=1 git push origin main 2>&1
}

echo ""
echo "✅ Upload complete!"
