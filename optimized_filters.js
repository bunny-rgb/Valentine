// ==================== OPTIMIZED PROFESSIONAL FILTERS ====================

// Filter 1: DREAM - Vibrant Pink-Purple Dream
function applySoftDreamGlowEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Apply pink-purple dreamy tones
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    const brightness = (r + g + b) / 3;
    
    // Pink-magenta + lavender shift
    if (brightness > 100) {
      data[i] = Math.min(255, r * 1.15 + 30);
      data[i + 1] = Math.min(255, g * 1.08 + 20);
      data[i + 2] = Math.min(255, b * 1.12 + 25);
    } else {
      data[i] = Math.min(255, r * 1.10 + 15);
      data[i + 1] = Math.min(255, g * 1.05 + 10);
      data[i + 2] = Math.min(255, b * 1.08 + 12);
    }
    
    // Gentle contrast
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const contrast = 1.08;
    data[i] = Math.min(255, (data[i] - newBrightness) * contrast + newBrightness + 10);
    data[i + 1] = Math.min(255, (data[i + 1] - newBrightness) * contrast + newBrightness + 8);
    data[i + 2] = Math.min(255, (data[i + 2] - newBrightness) * contrast + newBrightness + 10);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Bloom overlay
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = 'rgba(255, 192, 255, 0.12)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';
  
  // Pink vignette
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.78;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 200, 255, 0.08)');
  vignette.addColorStop(0.65, 'rgba(255, 150, 255, 0.15)');
  vignette.addColorStop(1, 'rgba(200, 100, 255, 0.22)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add sparkles
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

// Filter 2: POLAROID - Warm Retro
function applyPolaroidEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Warm retro tones
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Warm tone
    data[i] = Math.min(255, r * 1.12 + 25);
    data[i + 1] = Math.min(255, g * 1.08 + 18);
    data[i + 2] = Math.min(255, b * 0.88 + 8);
    
    // Slight desaturation
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i] * 0.85 + avg * 0.15;
    data[i + 1] = data[i + 1] * 0.85 + avg * 0.15;
    data[i + 2] = data[i + 2] * 0.85 + avg * 0.15;
    
    // Faded blacks
    data[i] = Math.max(20, data[i]);
    data[i + 1] = Math.max(20, data[i + 1]);
    data[i + 2] = Math.max(20, data[i + 2]);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Warm glow
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

// Filter 3: MOVIE - Hollywood Teal & Orange
function applyMoviePosterEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Teal & orange grading
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    const brightness = (r + g + b) / 3;
    
    if (brightness > 128) {
      // Orange highlights
      data[i] = Math.min(255, r * 1.22 + 28);
      data[i + 1] = Math.min(255, g * 1.14 + 18);
      data[i + 2] = Math.min(255, b * 0.82);
    } else {
      // Teal shadows
      data[i] = Math.min(255, r * 0.98);
      data[i + 1] = Math.min(255, g * 1.10 + 12);
      data[i + 2] = Math.min(255, b * 1.18 + 18);
    }
    
    // High contrast
    const contrast = 1.28;
    const newBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, Math.max(0, (data[i] - newBrightness) * contrast + newBrightness));
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - newBrightness) * contrast + newBrightness));
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - newBrightness) * contrast + newBrightness));
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Cinematic vignette
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

// Filter 4: KODAK - Pure Black & White
function applyKodakVintageEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Pure B&W conversion
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Classic B&W
    let gray = r * 0.299 + g * 0.587 + b * 0.114;
    
    // Contrast
    const contrast = 1.20;
    gray = ((gray - 128) * contrast + 128);
    
    // Soft blacks
    gray = Math.min(255, Math.max(12, gray));
    
    // Apply
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Minimal vignette
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
