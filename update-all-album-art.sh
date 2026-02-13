#!/bin/bash

# Backup original file
cp public/static/app.js public/static/app.js.backup-album-art

# Replace all Day 6 GitHub album art URLs with SVG data URLs
sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/sharmeeli.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F08080'/%3E%3Cstop offset='100%25' style='stop-color:%23CD5C5C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g5)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/akhiyaan-gulaab.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF69B4'/%3E%3Cstop offset='100%25' style='stop-color:%23C71585'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g6)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/woh.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB3BA'/%3E%3Cstop offset='100%25' style='stop-color:%23FF677D'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g7)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EW%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/humdum.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFC0CB'/%3E%3Cstop offset='100%25' style='stop-color:%23FF85A1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g8)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EH%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/suroor.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E6B0AA'/%3E%3Cstop offset='100%25' style='stop-color:%23C39BD3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g9)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/rakhlo-tum-chupaake.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F5B7B1'/%3E%3Cstop offset='100%25' style='stop-color:%23EC7063'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g10)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ER%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/iraaday.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B9D'/%3E%3Cstop offset='100%25' style='stop-color:%23C44569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g11)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EI%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/sawaal.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFA07A'/%3E%3Cstop offset='100%25' style='stop-color:%23FF69B4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g12)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

sed -i "s|'https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/album-art/hai-dil-ye-mera.jpg'|\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g13' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB6C1'/%3E%3Cstop offset='100%25' style='stop-color:%23FF1493'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23g13)'/%3E%3Ctext x='50%25' y='50%25' font-size='120' fill='white' text-anchor='middle' dy='.35em' font-family='Arial' font-weight='bold'%3EH%3C/text%3E%3C/svg%3E\"|g" public/static/app.js

# Also update Day 6 music URLs to local paths
sed -i "s|https://raw.githubusercontent.com/bunny-rgb/Valentine/main/public/static/music-day6/|/static/music-day6/|g" public/static/app.js

echo "✅ Album art updated for Day 5 & Day 6!"
echo "✅ Music URLs updated to local paths!"
echo ""
echo "Changed:"
grep -c "data:image/svg+xml" public/static/app.js | xargs echo "  SVG album art:" 
grep -c "/static/music-day6/" public/static/app.js | xargs echo "  Day 6 local music URLs:"
