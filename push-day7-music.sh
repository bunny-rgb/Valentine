#!/bin/bash

# Get all Day 7 music files
files=(public/static/music-day7/*.mp3)
total=${#files[@]}
batch_size=6
batch_num=1

echo "📦 Total files: $total"
echo "📦 Batch size: $batch_size files (~50-60 MB each)"
echo ""

# Process files in batches
for ((i=0; i<total; i+=batch_size)); do
    batch_files=("${files[@]:i:batch_size}")
    
    echo "📤 Batch $batch_num: Uploading ${#batch_files[@]} files..."
    
    git add "${batch_files[@]}"
    git commit -m "🎵 Add Day 7 music - Batch $batch_num (${#batch_files[@]} songs)"
    
    echo "⏳ Pushing to GitHub..."
    if timeout 300 git push origin main 2>&1; then
        echo "✅ Batch $batch_num pushed successfully!"
    else
        echo "❌ Batch $batch_num failed!"
        exit 1
    fi
    
    echo ""
    batch_num=$((batch_num + 1))
done

echo "🎉 All Day 7 music uploaded successfully!"
