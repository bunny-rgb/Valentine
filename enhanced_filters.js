// ==================== ENHANCED MODERN FILTER EFFECTS ====================

// Filter 1: Soft Dream Glow - ENHANCED Modern Dreamy Look
function applySoftDreamGlowEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply vibrant dreamy effect with pink-purple tones
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Enhanced pink-purple dreamy tones (more vibrant)
    data[i] = Math.min(255, r * 1.18 + 35);       // Stronger pink boost
    data[i + 1] = Math.min(255, g * 1.12 + 25);   // Enhanced warmth
    data[i + 2] = Math.min(255, b * 1.05 + 20);   // Slight blue for depth
    
    // Soft glow effect with brightness boost
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.88 + brightness * 0.12 + 25);
    data[i + 1] = Math.min(255, data[i + 1] * 0.90 + brightness * 0.10 + 18);
    data[i + 2] = Math.min(255, data[i + 2] * 0.92 + brightness * 0.08 + 15);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add vibrant pink vignette with stronger effect
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 192, 203, 0.1)');
  vignette.addColorStop(0.6, 'rgba(255, 105, 180, 0.15)');
  vignette.addColorStop(1, 'rgba(255, 20, 147, 0.25)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add sparkle overlay for dreamy effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 2: Polaroid Love Note - ENHANCED Vibrant Retro
function applyPolaroidEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply modern vintage look with enhanced colors
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Vibrant retro colors (not too desaturated)
    const avg = (r + g + b) / 3;
    data[i] = Math.min(255, r * 1.10 + avg * 0.05 + 20);      // Warm reds
    data[i + 1] = Math.min(255, g * 1.05 + avg * 0.05 + 15);  // Balanced
    data[i + 2] = Math.min(255, b * 0.90 + avg * 0.10 + 10);  // Less blue
    
    // Boost contrast for modern look
    const contrast = 1.15;
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, (data[i] - brightness) * contrast + brightness + 5);
    data[i + 1] = Math.min(255, (data[i + 1] - brightness) * contrast + brightness + 5);
    data[i + 2] = Math.min(255, (data[i + 2] - brightness) * contrast + brightness + 5);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add warm vintage glow
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  glow.addColorStop(0, 'rgba(255, 240, 200, 0.05)');
  glow.addColorStop(0.6, 'rgba(255, 200, 150, 0.08)');
  glow.addColorStop(1, 'rgba(255, 180, 100, 0.12)');
  
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 3: Romantic Movie Poster - ENHANCED Cinematic Look
function applyMoviePosterEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply cinematic color grading (teal & orange Hollywood look)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Hollywood teal & orange color grading
    const brightness = (r + g + b) / 3;
    
    if (brightness > 128) {
      // Highlights: warm orange/golden
      data[i] = Math.min(255, r * 1.20 + 25);       // Strong orange in highlights
      data[i + 1] = Math.min(255, g * 1.12 + 15);   // Golden warmth
      data[i + 2] = Math.min(255, b * 0.85);        // Reduced blue
    } else {
      // Shadows: cool teal/blue
      data[i] = Math.min(255, r * 1.05);            // Slight red
      data[i + 1] = Math.min(255, g * 1.08 + 10);   // Teal in shadows
      data[i + 2] = Math.min(255, b * 1.15 + 15);   // Strong blue/teal
    }
    
    // High contrast for cinematic look
    const contrast = 1.25;
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, Math.max(0, (data[i] - newBrightness) * contrast + newBrightness));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - newBrightness) * contrast + newBrightness));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - newBrightness) * contrast + newBrightness));
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add cinematic vignette (darker edges)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.65;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0.15)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 4: Kodak Black & White - CLASSIC B&W Film Look
function applyKodakVintageEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply classic black and white conversion
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Classic B&W conversion (weighted for better tonality)
    // Red channel = 0.299, Green = 0.587, Blue = 0.114
    let gray = r * 0.299 + g * 0.587 + b * 0.114;
    
    // Add slight contrast boost for film look
    const contrast = 1.15;
    gray = ((gray - 128) * contrast + 128);
    
    // Lifted blacks (classic film characteristic)
    gray = Math.min(255, Math.max(15, gray + 10));
    
    // Apply to all channels for B&W
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add subtle film grain texture
  const grain = ctx.createImageData(canvas.width, canvas.height);
  const grainData = grain.data;
  
  for (let i = 0; i < grainData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 15; // Subtle grain
    grainData[i] = 128 + noise;
    grainData[i + 1] = 128 + noise;
    grainData[i + 2] = 128 + noise;
    grainData[i + 3] = 15; // Low opacity
  }
  
  ctx.globalCompositeOperation = 'overlay';
  ctx.putImageData(grain, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  
  // Add classic film vignette (darker edges)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.6, 'rgba(0, 0, 0, 0.12)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.28)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
