// ==================== NEW FILTER EFFECTS ====================

// Filter 1: Soft Dream Glow - Magical, dreamy, romantic
function applySoftDreamGlowEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply warm highlights and subtle glow
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Warm highlights with subtle glow
    data[i] = Math.min(255, r * 1.12 + 20);       // Soft red boost
    data[i + 1] = Math.min(255, g * 1.08 + 15);   // Gentle green
    data[i + 2] = Math.min(255, b * 0.98 + 10);   // Slight blue reduction
    
    // Dreamy soft effect
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.90 + brightness * 0.10 + 15);
    data[i + 1] = Math.min(255, data[i + 1] * 0.92 + brightness * 0.08 + 10);
    data[i + 2] = Math.min(255, data[i + 2] * 0.94 + brightness * 0.06 + 8);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add slight vignette
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 245, 250, 0)');
  vignette.addColorStop(0.7, 'rgba(255, 220, 235, 0.08)');
  vignette.addColorStop(1, 'rgba(255, 192, 203, 0.15)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 2: Golden Hour Romance - Warm, radiant, intimate
function applyGoldenHourEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply golden warmth
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Golden warmth and brightness
    data[i] = Math.min(255, r * 1.20 + 30);       // Strong warm red
    data[i + 1] = Math.min(255, g * 1.15 + 25);   // Golden yellow
    data[i + 2] = Math.min(255, b * 0.85 + 5);    // Reduce blue for warmth
    
    // Gentle contrast boost
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const contrast = 1.1;
    data[i] = Math.min(255, (data[i] - brightness) * contrast + brightness);
    data[i + 1] = Math.min(255, (data[i + 1] - brightness) * contrast + brightness);
    data[i + 2] = Math.min(255, (data[i + 2] - brightness) * contrast + brightness);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add golden glow overlay
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  glow.addColorStop(0, 'rgba(255, 215, 0, 0.05)');
  glow.addColorStop(0.5, 'rgba(255, 200, 100, 0.08)');
  glow.addColorStop(1, 'rgba(255, 150, 50, 0.12)');
  
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 3: Polaroid Love Note - Cute, personal, nostalgic
function applyPolaroidEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply slight softness and vintage feel
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Slight desaturation and soft tones
    const avg = (r + g + b) / 3;
    data[i] = Math.min(255, r * 0.85 + avg * 0.15 + 10);
    data[i + 1] = Math.min(255, g * 0.85 + avg * 0.15 + 10);
    data[i + 2] = Math.min(255, b * 0.85 + avg * 0.15 + 10);
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Filter 4: Romantic Movie Poster - Cinematic & unforgettable
function applyMoviePosterEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Film-style color grading with enhanced contrast
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Cinematic color grading
    data[i] = Math.min(255, r * 1.15 + 10);       // Boost reds
    data[i + 1] = Math.min(255, g * 1.08);        // Slightly boost greens
    data[i + 2] = Math.min(255, b * 1.12 + 15);   // Boost blues for depth
    
    // Increased contrast
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const contrast = 1.25;
    data[i] = Math.min(255, Math.max(0, (data[i] - brightness) * contrast + brightness));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - brightness) * contrast + brightness));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - brightness) * contrast + brightness));
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add cinematic vignette
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.6, 'rgba(0, 0, 0, 0.15)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Add romantic frame with caption based on filter
function addRomanticFrameWithCaption(ctx, canvas, filter) {
  const width = canvas.width;
  const height = canvas.height;
  
  // Caption options for each filter
  const captions = {
    'dream': [
      "This moment feels like destiny ✨",
      "Where you are is where my heart belongs ❤️",
      "A memory wrapped in love."
    ],
    'golden': [
      "You are my favorite kind of forever 💛",
      "With you, everything feels golden.",
      "Every love story is beautiful, but ours is my favorite."
    ],
    'polaroid': [
      "Proof of a very special 'Yes' 💖",
      "Captured with love.",
      "Our little forever moment."
    ],
    'movie': [
      "A Love Story - Starring Us ❤️",
      "Two hearts. One beautiful story.",
      "And so, our story begins…"
    ]
  };
  
  // Select random caption for the filter
  const filterCaptions = captions[filter] || captions['dream'];
  const selectedCaption = filterCaptions[Math.floor(Math.random() * filterCaptions.length)];
  
  // Draw frame based on filter style
  if (filter === 'polaroid') {
    // Polaroid-style white frame
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    const frameWidth = 40;
    const bottomHeight = 100;
    
    // Top frame
    ctx.fillRect(0, 0, width, frameWidth);
    // Left frame
    ctx.fillRect(0, 0, frameWidth, height);
    // Right frame
    ctx.fillRect(width - frameWidth, 0, frameWidth, height);
    // Bottom frame (larger for Polaroid style)
    ctx.fillRect(0, height - bottomHeight, width, bottomHeight);
    
    // Handwritten style caption
    ctx.font = 'italic 28px "Comic Sans MS", cursive';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillText(selectedCaption, width / 2, height - 50);
    
  } else if (filter === 'movie') {
    // Movie poster style
    // Top black bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, width, 120);
    
    // Bottom black bar
    ctx.fillRect(0, height - 120, width, 120);
    
    // Title text (top)
    ctx.font = 'bold 48px "Helvetica Neue", Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFD700';
    ctx.fillText("A Love Story", width / 2, 70);
    
    // Caption text (bottom)
    ctx.font = 'italic 32px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 65);
    
  } else {
    // Dream and Golden filters - elegant gradient frame
    const borderGradient = ctx.createLinearGradient(0, 0, width, height);
    if (filter === 'golden') {
      borderGradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      borderGradient.addColorStop(0.5, 'rgba(255, 200, 100, 0.8)');
      borderGradient.addColorStop(1, 'rgba(255, 215, 0, 0.8)');
    } else {
      borderGradient.addColorStop(0, 'rgba(255, 192, 203, 0.8)');
      borderGradient.addColorStop(0.5, 'rgba(255, 182, 193, 0.8)');
      borderGradient.addColorStop(1, 'rgba(255, 192, 203, 0.8)');
    }
    
    // Outer frame
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 20;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    
    // Inner frame
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 8;
    ctx.strokeRect(35, 35, width - 70, height - 70);
    
    // Top title
    ctx.font = 'bold 55px "Brush Script MT", cursive';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillText("💕 Our Love Forever 💕", width / 2, 80);
    ctx.shadowBlur = 0;
    
    // Caption at bottom
    ctx.font = 'italic bold 30px Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 8;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 60);
    ctx.shadowBlur = 0;
  }
  
  // Add date (always included)
  ctx.font = 'bold 28px Arial';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 8;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  
  if (filter === 'polaroid') {
    ctx.fillText("Valentine's Day 2026", width / 2, height - 20);
  } else if (filter === 'movie') {
    ctx.fillText("FEBRUARY 14, 2026", width / 2, height - 25);
  } else {
    ctx.fillText("💖 Valentine's Day 2026 💖", width / 2, height - 20);
  }
  ctx.shadowBlur = 0;
}
