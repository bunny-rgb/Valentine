// ==================== PROFESSIONAL ENHANCED FILTERS ====================

// Filter 1: DREAM - Vibrant Pink-Purple Dream (Modern, glowing, fantasy-like)
function applySoftDreamGlowEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply soft highlight glow with pink-magenta + lavender shift
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Pink-magenta + subtle lavender shift (controlled saturation)
    const brightness = (r + g + b) / 3;
    
    // Soft highlight glow on bright areas
    if (brightness > 100) {
      data[i] = Math.min(255, r * 1.15 + 30);       // Pink boost
      data[i + 1] = Math.min(255, g * 1.08 + 20);   // Balanced
      data[i + 2] = Math.min(255, b * 1.12 + 25);   // Lavender undertone
    } else {
      data[i] = Math.min(255, r * 1.10 + 15);
      data[i + 1] = Math.min(255, g * 1.05 + 10);
      data[i + 2] = Math.min(255, b * 1.08 + 12);
    }
    
    // Slight brightness lift with reduced harsh contrast
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const softContrast = 1.08; // Gentle, not harsh
    data[i] = Math.min(255, (data[i] - newBrightness) * softContrast + newBrightness + 10);
    data[i + 1] = Math.min(255, (data[i + 1] - newBrightness) * softContrast + newBrightness + 8);
    data[i + 2] = Math.min(255, (data[i + 2] - newBrightness) * softContrast + newBrightness + 10);
    
    // Very gentle blur effect (soften)
    if (i > 4 && i < data.length - 4) {
      const blur = 0.08;
      data[i] = data[i] * (1 - blur) + (data[i - 4] + data[i + 4]) * blur / 2;
      data[i + 1] = data[i + 1] * (1 - blur) + (data[i - 3] + data[i + 5]) * blur / 2;
      data[i + 2] = data[i + 2] * (1 - blur) + (data[i - 2] + data[i + 6]) * blur / 2;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Soft bloom/glow overlay on bright areas
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = 'rgba(255, 192, 255, 0.12)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';
  
  // Subtle pink-purple vignette (soft edges)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.78;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 200, 255, 0.08)');
  vignette.addColorStop(0.65, 'rgba(255, 150, 255, 0.15)');
  vignette.addColorStop(1, 'rgba(200, 100, 255, 0.22)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add tiny sparkle particles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  for (let i = 0; i < 25; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3 + 1;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Filter 2: POLAROID - Warm Retro With Personality (Cute, nostalgic, playful)
function applyPolaroidEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Warm tone (slight yellow/red bias) + faded blacks
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Warm tone with yellow/red bias
    data[i] = Math.min(255, r * 1.12 + 25);       // Red boost
    data[i + 1] = Math.min(255, g * 1.08 + 18);   // Yellow warmth
    data[i + 2] = Math.min(255, b * 0.88 + 8);    // Reduced blue
    
    // Slight desaturation for vintage feel
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i] * 0.85 + avg * 0.15;
    data[i + 1] = data[i + 1] * 0.85 + avg * 0.15;
    data[i + 2] = data[i + 2] * 0.85 + avg * 0.15;
    
    // Faded blacks (lift shadows)
    data[i] = Math.max(20, data[i]);
    data[i + 1] = Math.max(20, data[i + 1]);
    data[i + 2] = Math.max(20, data[i + 2]);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Soft grain texture
  const grain = ctx.createImageData(canvas.width, canvas.height);
  const grainData = grain.data;
  
  for (let i = 0; i < grainData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 12;
    grainData[i] = 128 + noise;
    grainData[i + 1] = 128 + noise;
    grainData[i + 2] = 128 + noise;
    grainData[i + 3] = 18; // Low opacity
  }
  
  ctx.globalCompositeOperation = 'overlay';
  ctx.putImageData(grain, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  
  // Warm vintage glow
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.72;
  
  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  glow.addColorStop(0, 'rgba(255, 245, 220, 0.05)');
  glow.addColorStop(0.6, 'rgba(255, 220, 180, 0.08)');
  glow.addColorStop(1, 'rgba(255, 200, 150, 0.12)');
  
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 3: MOVIE - Hollywood Teal & Orange (Cinematic, dramatic, reel-worthy)
function applyMoviePosterEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Hollywood teal & orange color grading
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    const brightness = (r + g + b) / 3;
    
    if (brightness > 128) {
      // Warm orange highlights
      data[i] = Math.min(255, r * 1.22 + 28);       // Strong orange
      data[i + 1] = Math.min(255, g * 1.14 + 18);   // Golden warmth
      data[i + 2] = Math.min(255, b * 0.82);        // Reduced blue
    } else {
      // Teal shadows
      data[i] = Math.min(255, r * 0.98);            // Slight red
      data[i + 1] = Math.min(255, g * 1.10 + 12);   // Teal/cyan
      data[i + 2] = Math.min(255, b * 1.18 + 18);   // Strong blue
    }
    
    // Boosted contrast + slight clarity/sharpen
    const contrast = 1.28;
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, Math.max(0, (data[i] - newBrightness) * contrast + newBrightness));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - newBrightness) * contrast + newBrightness));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - newBrightness) * contrast + newBrightness));
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Subtle film grain
  const grain = ctx.createImageData(canvas.width, canvas.height);
  const grainData = grain.data;
  
  for (let i = 0; i < grainData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 10;
    grainData[i] = 128 + noise;
    grainData[i + 1] = 128 + noise;
    grainData[i + 2] = 128 + noise;
    grainData[i + 3] = 12;
  }
  
  ctx.globalCompositeOperation = 'overlay';
  ctx.putImageData(grain, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  
  // Soft cinematic vignette
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.68;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0.18)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.38)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Filter 4: KODAK - Pure Black & White (Timeless, elegant, emotionally strong)
function applyKodakVintageEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // True monochrome (no warm tint) - Keep it crisp, not grey-washed
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Classic B&W conversion with emphasis on contrast
    let gray = r * 0.299 + g * 0.587 + b * 0.114;
    
    // Boosted contrast for crisp look (not grey-washed)
    const contrast = 1.20;
    gray = ((gray - 128) * contrast + 128);
    
    // Deep but soft blacks (not pure black) + clean highlights
    gray = Math.min(255, Math.max(12, gray));
    
    // Apply to all channels
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Slight film grain (subtle, not overdone)
  const grain = ctx.createImageData(canvas.width, canvas.height);
  const grainData = grain.data;
  
  for (let i = 0; i < grainData.length; i += 4) {
    const noise = (Math.random() - 0.5) * 14;
    grainData[i] = 128 + noise;
    grainData[i + 1] = 128 + noise;
    grainData[i + 2] = 128 + noise;
    grainData[i + 3] = 16;
  }
  
  ctx.globalCompositeOperation = 'overlay';
  ctx.putImageData(grain, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  
  // Minimal vignette (very subtle)
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vignette.addColorStop(0.65, 'rgba(0, 0, 0, 0.08)');
  vignette.addColorStop(1, 'rgba(0, 0, 0, 0.20)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
