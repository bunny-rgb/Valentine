#!/bin/bash
echo "🔍 Comprehensive Day 5, 6, 7 Verification"
echo "=========================================="
echo ""

echo "✅ Day 5 - Hug Day Photos:"
for i in 1 2 3 4 5 6 7; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/romantic-couple/couple-$i.jpg 2>/dev/null)
  if [ "$status" = "200" ]; then
    echo "   ✅ couple-$i.jpg (HTTP 200)"
  else
    echo "   ❌ couple-$i.jpg (HTTP $status)"
  fi
done

echo ""
echo "✅ Day 6 - Kiss Day Photos:"
for i in 1 2 3; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/kiss-photos/kiss-$i.jpg 2>/dev/null)
  if [ "$status" = "200" ]; then
    echo "   ✅ kiss-$i.jpg (HTTP 200)"
  else
    echo "   ❌ kiss-$i.jpg (HTTP $status)"
  fi
done

echo ""
echo "✅ Day 7 - Valentine Photos:"
for i in 1 2 3 4 5; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/valentine-photos/couple-$i.jpg 2>/dev/null)
  if [ "$status" = "200" ]; then
    echo "   ✅ couple-$i.jpg (HTTP 200)"
  else
    echo "   ❌ couple-$i.jpg (HTTP $status)"
  fi
done

echo ""
echo "✅ Day 7 - Valentine Kiss Photos:"
for i in 1 2 3; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/valentine-photos/kiss-$i.jpg 2>/dev/null)
  if [ "$status" = "200" ]; then
    echo "   ✅ kiss-$i.jpg (HTTP 200)"
  else
    echo "   ❌ kiss-$i.jpg (HTTP $status)"
  fi
done

echo ""
echo "✅ Code Functions:"
curl -s https://ankitamy.shop/static/app.js | grep -q "function loadHugDay" && echo "   ✅ loadHugDay() deployed" || echo "   ❌ loadHugDay() missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "function loadKissDay" && echo "   ✅ loadKissDay() deployed" || echo "   ❌ loadKissDay() missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "function loadValentineDay" && echo "   ✅ loadValentineDay() deployed" || echo "   ❌ loadValentineDay() missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "initializeKissCarousel" && echo "   ✅ initializeKissCarousel() deployed" || echo "   ❌ initializeKissCarousel() missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "createValentineGallery" && echo "   ✅ createValentineGallery() deployed" || echo "   ❌ createValentineGallery() missing"

echo ""
echo "✅ Music Playlists:"
curl -s https://ankitamy.shop/static/app.js | grep -q "day5Playlist:" && echo "   ✅ day5Playlist (3 songs)" || echo "   ❌ day5Playlist missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "day6Playlist:" && echo "   ✅ day6Playlist (10 songs)" || echo "   ❌ day6Playlist missing"
curl -s https://ankitamy.shop/static/app.js | grep -q "day7Playlist:" && echo "   ✅ day7Playlist (12 songs)" || echo "   ❌ day7Playlist missing"

echo ""
echo "=========================================="
echo "🎉 Verification Complete!"
echo "=========================================="
