// ==================== CREATIVE ROMANTIC FRAMES ====================

function addCreativeRomanticFrame(ctx, canvas, filter) {
  const width = canvas.width;
  const height = canvas.height;
  
  // Caption options for each filter
  const captions = {
    'dream': [
      "This moment feels like destiny ✨",
      "Where you are is where my heart belongs ❤️",
      "A memory wrapped in love 💕"
    ],
    'polaroid': [
      "Proof of a very special 'Yes' 💖",
      "Captured with love 💗",
      "Our little forever moment ✨"
    ],
    'movie': [
      "A Love Story - Starring Us ❤️",
      "Two hearts. One beautiful story 💕",
      "And so, our story begins… ✨"
    ],
    'kodak': [
      "In Bunny's arms, Anku found forever 💕",
      "Two souls, one timeless love story ✨",
      "Bunny & Anku - Where love began 💖"
    ]
  };
  
  // Select random caption
  const filterCaptions = captions[filter] || captions['dream'];
  const selectedCaption = filterCaptions[Math.floor(Math.random() * filterCaptions.length)];
  
  // Apply creative frames based on filter
  if (filter === 'dream') {
    // DREAM: Floating hearts border with romantic glow
    
    // Outer gradient glow border
    const outerGradient = ctx.createLinearGradient(0, 0, width, height);
    outerGradient.addColorStop(0, 'rgba(255, 182, 193, 0.8)');
    outerGradient.addColorStop(0.5, 'rgba(255, 105, 180, 0.8)');
    outerGradient.addColorStop(1, 'rgba(255, 192, 203, 0.8)');
    
    ctx.strokeStyle = outerGradient;
    ctx.lineWidth = 30;
    ctx.strokeRect(15, 15, width - 30, height - 30);
    
    // Inner sparkle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 10;
    ctx.strokeRect(50, 50, width - 100, height - 100);
    
    // Draw floating hearts around border
    ctx.font = '40px Arial';
    const heartPositions = [
      { x: 80, y: 80 }, { x: width - 80, y: 80 },
      { x: 80, y: height - 80 }, { x: width - 80, y: height - 80 },
      { x: width / 2, y: 80 }, { x: width / 2, y: height - 80 },
      { x: 80, y: height / 2 }, { x: width - 80, y: height / 2 }
    ];
    
    heartPositions.forEach(pos => {
      ctx.shadowColor = 'rgba(255, 105, 180, 0.8)';
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(255, 105, 180, 0.9)';
      ctx.fillText('💕', pos.x - 20, pos.y + 15);
    });
    ctx.shadowBlur = 0;
    
    // Top ornamental text with hearts
    ctx.font = 'bold 60px "Brush Script MT", cursive';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 15;
    const topGradient = ctx.createLinearGradient(0, 100, width, 100);
    topGradient.addColorStop(0, '#FFD700');
    topGradient.addColorStop(0.5, '#FF69B4');
    topGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = topGradient;
    ctx.fillText('💖 Bunny & Anku 💖', width / 2, 100);
    ctx.shadowBlur = 0;
    
    // Bottom caption with sparkles
    ctx.font = 'italic bold 34px Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 100);
    
    // Date
    ctx.font = 'bold 32px Arial';
    ctx.fillText('💕 Valentine\'s Day 2026 💕', width / 2, height - 50);
    ctx.shadowBlur = 0;
    
  } else if (filter === 'polaroid') {
    // POLAROID: Classic instant photo with handwritten feel
    
    // White polaroid frame
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    const frameWidth = 50;
    const bottomHeight = 140;
    
    // Top, left, right frames
    ctx.fillRect(0, 0, width, frameWidth);
    ctx.fillRect(0, 0, frameWidth, height);
    ctx.fillRect(width - frameWidth, 0, frameWidth, height);
    
    // Bottom frame (larger for Polaroid style)
    ctx.fillRect(0, height - bottomHeight, width, bottomHeight);
    
    // Add decorative tape effect at corners
    ctx.fillStyle = 'rgba(255, 240, 200, 0.7)';
    ctx.save();
    ctx.translate(80, 40);
    ctx.rotate(-0.3);
    ctx.fillRect(0, 0, 120, 30);
    ctx.restore();
    
    ctx.save();
    ctx.translate(width - 150, 40);
    ctx.rotate(0.3);
    ctx.fillRect(0, 0, 120, 30);
    ctx.restore();
    
    // Draw hearts in corners
    ctx.font = '35px Arial';
    ctx.fillStyle = 'rgba(255, 105, 180, 0.6)';
    ctx.fillText('💕', 60, 40);
    ctx.fillText('💕', width - 90, 40);
    
    // Handwritten-style caption
    ctx.font = 'italic 32px "Comic Sans MS", cursive';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillText(selectedCaption, width / 2, height - 85);
    
    // Date
    ctx.font = 'italic bold 28px "Comic Sans MS", cursive';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText('📷 Valentine\'s Day 2026 📷', width / 2, height - 40);
    
    // Add some sketched hearts
    ctx.font = '25px Arial';
    ctx.fillStyle = 'rgba(255, 105, 180, 0.5)';
    ctx.fillText('💗', width / 2 - 200, height - 45);
    ctx.fillText('💗', width / 2 + 200, height - 45);
    
  } else if (filter === 'movie') {
    // MOVIE: Cinematic film strip style
    
    // Top and bottom black bars (cinema style)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, width, 140);
    ctx.fillRect(0, height - 140, width, 140);
    
    // Film strip perforations on sides
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < height; i += 40) {
      ctx.fillRect(10, i, 20, 25);
      ctx.fillRect(width - 30, i, 20, 25);
    }
    
    // Gold film reel decoration
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(80, 70, 45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width - 80, 70, 45, 0, Math.PI * 2);
    ctx.stroke();
    
    // Title with film style
    ctx.font = 'bold 55px "Helvetica Neue", Arial';
    ctx.textAlign = 'center';
    
    // Gradient gold text
    const titleGradient = ctx.createLinearGradient(0, 70, width, 70);
    titleGradient.addColorStop(0, '#FFD700');
    titleGradient.addColorStop(0.5, '#FFA500');
    titleGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = titleGradient;
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillText('💕 A LOVE STORY 💕', width / 2, 75);
    ctx.shadowBlur = 0;
    
    // Subtitle
    ctx.font = 'italic 28px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Starring Bunny & Anku', width / 2, 115);
    
    // Bottom caption
    ctx.font = 'italic bold 36px Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillText(selectedCaption, width / 2, height - 85);
    ctx.shadowBlur = 0;
    
    // Date
    ctx.font = 'bold 32px Arial';
    const dateGradient = ctx.createLinearGradient(0, height - 40, width, height - 40);
    dateGradient.addColorStop(0, '#FFD700');
    dateGradient.addColorStop(0.5, '#FFA500');
    dateGradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = dateGradient;
    ctx.fillText('🎬 FEBRUARY 14, 2026 🎬', width / 2, height - 40);
    
  } else if (filter === 'kodak') {
    // KODAK: Vintage film with photo corners and stamps
    
    // Vintage sepia border
    ctx.fillStyle = 'rgba(139, 90, 43, 0.4)';
    ctx.fillRect(0, 0, width, 60);
    ctx.fillRect(0, height - 60, width, 60);
    ctx.fillRect(0, 0, 60, height);
    ctx.fillRect(width - 60, 0, 60, height);
    
    // Photo corners (vintage style)
    ctx.fillStyle = 'rgba(101, 67, 33, 0.7)';
    const cornerSize = 80;
    
    // Top-left corner
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(cornerSize, 0);
    ctx.lineTo(0, cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Top-right corner
    ctx.beginPath();
    ctx.moveTo(width, 0);
    ctx.lineTo(width - cornerSize, 0);
    ctx.lineTo(width, cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Bottom-left corner
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(cornerSize, height);
    ctx.lineTo(0, height - cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Bottom-right corner
    ctx.beginPath();
    ctx.moveTo(width, height);
    ctx.lineTo(width - cornerSize, height);
    ctx.lineTo(width, height - cornerSize);
    ctx.closePath();
    ctx.fill();
    
    // Decorative vintage border
    ctx.strokeStyle = 'rgba(255, 240, 220, 0.6)';
    ctx.lineWidth = 8;
    ctx.strokeRect(70, 70, width - 140, height - 140);
    
    // Inner decorative line
    ctx.strokeStyle = 'rgba(139, 90, 43, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 80, width - 160, height - 160);
    
    // Vintage stamp effect
    ctx.font = '35px Arial';
    ctx.save();
    ctx.translate(width - 150, 120);
    ctx.rotate(0.2);
    ctx.strokeStyle = 'rgba(255, 50, 50, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 100, 60);
    ctx.font = 'bold 18px Arial';
    ctx.fillStyle = 'rgba(255, 50, 50, 0.4)';
    ctx.textAlign = 'center';
    ctx.fillText('LOVE', 50, 25);
    ctx.fillText('FEB 14', 50, 45);
    ctx.restore();
    
    // Top title with film style
    ctx.font = 'bold 50px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText('📸 KODAK MOMENT 📸', width / 2, 110);
    ctx.shadowBlur = 0;
    
    // Film strip decoration
    ctx.fillStyle = 'rgba(139, 90, 43, 0.3)';
    for (let i = 100; i < width - 100; i += 50) {
      ctx.fillRect(i, 140, 30, 15);
    }
    
    // Caption
    ctx.font = 'italic bold 36px Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText(selectedCaption, width / 2, height - 100);
    ctx.shadowBlur = 0;
    
    // Date with vintage style
    ctx.font = 'bold 32px "Courier New", monospace';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.95)';
    ctx.fillText('🎞️ FEBRUARY 14, 2026 🎞️', width / 2, height - 50);
    ctx.shadowBlur = 0;
  }
}
