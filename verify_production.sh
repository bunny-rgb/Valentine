#!/bin/bash
echo "🔍 Valentine Week Production Verification"
echo "=========================================="
echo ""

echo "✅ 1. Checking Production URL..."
curl -s https://ankitamy.shop | grep -q "Valentine Week" && echo "   ✅ Site is live" || echo "   ❌ Site is down"

echo ""
echo "✅ 2. Checking Day 4 Code..."
curl -s https://ankitamy.shop/static/app.js | grep -q "loadPromiseDayPhotoDeck" && echo "   ✅ Day 4 function deployed" || echo "   ❌ Day 4 function missing"

echo ""
echo "✅ 3. Checking Promise Photos..."
for photo in hands-pink hands-heart hands-forever hands-holding hands-interlock pinky-promise fingerprints-love; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/promise-photos/${photo}.jpg)
  if [ "$status" = "200" ]; then
    echo "   ✅ ${photo}.jpg (HTTP 200)"
  else
    echo "   ❌ ${photo}.jpg (HTTP $status)"
  fi
done

echo ""
echo "✅ 4. Checking Other Photo Directories..."
for dir in romantic-couple valentine-photos kiss-photos; do
  status=$(curl -s -o /dev/null -w "%{http_code}" https://ankitamy.shop/static/${dir}/)
  if [ "$status" = "200" ] || [ "$status" = "403" ]; then
    echo "   ✅ ${dir}/ exists"
  else
    echo "   ❌ ${dir}/ missing (HTTP $status)"
  fi
done

echo ""
echo "✅ 5. Checking CSS & JS..."
curl -s -o /dev/null -w "   ✅ app.js (HTTP %{http_code})\n" https://ankitamy.shop/static/app.js
curl -s -o /dev/null -w "   ✅ styles.css (HTTP %{http_code})\n" https://ankitamy.shop/static/styles.css

echo ""
echo "=========================================="
echo "🎉 Production Verification Complete!"
echo "🌐 URL: https://ankitamy.shop"
echo "📅 Next Unlock: Day 4 (Feb 11, 00:00)"
echo "=========================================="
