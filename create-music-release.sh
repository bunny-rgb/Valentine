#!/bin/bash

# Create a release for music files
RELEASE_TAG="music-v1.0"
RELEASE_NAME="Valentine Week Music Collection"

# Create the release
gh release create "$RELEASE_TAG" \
  --title "$RELEASE_NAME" \
  --notes "Music files for Valentine Week Days 5, 6, and 7

**Day 5 (Hug Day):** 3 songs (~17 MB)
**Day 6 (Kiss Day):** 10 songs (~54 MB)  
**Day 7 (Valentine's Day):** 12 songs (~365 MB)

Total: 25 songs, 436 MB

To use these files, download and place them in the respective folders:
- Day 5: public/static/music-day5/
- Day 6: public/static/music-day6/
- Day 7: public/static/music-day7/" \
  public/static/music-day5/*.mp3 \
  public/static/music-day6/*.mp3 \
  public/static/music-day7/*.mp3

echo "✅ Release created successfully!"
echo "Files will be available at: https://github.com/bunny-rgb/Valentine/releases/tag/$RELEASE_TAG"
