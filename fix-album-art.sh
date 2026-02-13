#!/bin/bash

echo "🎨 Fixing Album Art for All Days..."
echo ""

# Create a simple function to generate data URL
generate_svg_data_url() {
  local letter="$1"
  local color1="$2"
  local color2="$3"
  
  svg="<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:${color1}'/><stop offset='100%' style='stop-color:${color2}'/></linearGradient></defs><rect width='300' height='300' fill='url(#g)'/><text x='50%' y='50%' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'>${letter}</text></svg>"
  
  # URL encode
  echo "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${color1}'/%3E%3Cstop offset='100%25' style='stop-color:${color2}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3E${letter}%3C/text%3E%3C/svg%3E"
}

echo "Sample Data URLs:"
echo ""
echo "Jiya Laage Na:"
generate_svg_data_url "J" "%23FF6B9D" "%23C44569"
echo ""

echo "Ishq Hai:"
generate_svg_data_url "I" "%23FFA07A" "%23FF69B4"
echo ""

echo "Pal Pal Dil Ke Paas:"
generate_svg_data_url "P" "%23FFB6C1" "%23FF1493"
echo ""

echo "✅ Data URLs generated!"
echo "Now updating app.js..."
