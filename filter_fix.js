// ==================== REAL-TIME FILTER PREVIEW FIX ====================

// Global variables for filter preview
let filterPreviewCanvas = null;
let filterPreviewCtx = null;
let filterAnimationId = null;

// Modified openRomanticMomentCamera with REAL-TIME filter preview
function openRomanticMomentCamera() {
  // Remove filter selection modal
  const filterModal = document.getElementById('filter-selection-modal');
  if (filterModal) filterModal.remove();
  
  // Create camera modal
  const cameraModal = document.createElement('div');
  cameraModal.id = 'romantic-camera-modal';
  cameraModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
  `;
  
  cameraModal.innerHTML = `
    <div style="text-align: center; width: 100%; max-width: 600px;">
      <h2 style="color: #ff69b4; font-size: 32px; margin-bottom: 10px; text-shadow: 0 0 20px rgba(255, 105, 180, 0.6);">
        📸 Capture Your Magical Moment
      </h2>
      <p style="color: #fff; margin-bottom: 20px; font-size: 16px;">
        Your selected filter will be applied in real-time ✨
      </p>
      
      <div style="position: relative; display: inline-block; margin-bottom: 20px;">
        <!-- Hidden video element for camera input -->
        <video id="romantic-video" autoplay playsinline muted style="display: none;"></video>
        
        <!-- Visible canvas with filter applied in real-time -->
        <canvas id="filter-preview-canvas" style="
          width: 90vw;
          max-width: 600px;
          height: auto;
          display: block;
          border-radius: 20px;
          box-shadow: 0 10px 50px rgba(255, 105, 180, 0.3);
        "></canvas>
        
        <!-- Romantic frame overlay -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 3px solid rgba(255, 105, 180, 0.6); border-radius: 20px; pointer-events: none; box-shadow: inset 0 0 30px rgba(255, 105, 180, 0.4);"></div>
        
        <!-- Top decorative text -->
        <div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); font-size: 24px; font-weight: bold; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255, 105, 180, 0.8);">
          ✨ Bunny & Anku ✨
        </div>
        
        <!-- Bottom decorative text -->
        <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 18px; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          💕 Valentine's Day 2026 💕
        </div>
      </div>
      
      <!-- Hidden canvas for final capture -->
      <canvas id="romantic-canvas" style="display: none;"></canvas>
      
      <!-- Filter Switcher -->
      <div style="margin: 20px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <button onclick="switchCameraFilter('dream')" id="filter-btn-dream" style="
          padding: 12px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        ">✨ Dream</button>
        
        <button onclick="switchCameraFilter('golden')" id="filter-btn-golden" style="
          padding: 12px 20px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);
        ">💛 Golden</button>
        
        <button onclick="switchCameraFilter('polaroid')" id="filter-btn-polaroid" style="
          padding: 12px 20px;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(250, 112, 154, 0.3);
        ">📷 Polaroid</button>
        
        <button onclick="switchCameraFilter('movie')" id="filter-btn-movie" style="
          padding: 12px 20px;
          background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(48, 207, 208, 0.3);
        ">🎬 Movie</button>
        
        <button onclick="switchCameraFilter('kodak')" id="filter-btn-kodak" style="
          padding: 12px 20px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        ">📸 Kodak</button>
      </div>
      
      <p id="current-filter-name" style="color: #ff69b4; font-size: 18px; font-weight: bold; margin-bottom: 20px;">
        Current Filter: ${getFilterName(selectedFilter)}
      </p>
      
      <!-- Capture Button -->
      <button id="capture-btn" style="
        padding: 18px 50px;
        font-size: 20px;
        font-weight: bold;
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        transition: all 0.3s ease;
        margin-bottom: 20px;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      ">
        📸 Capture Magical Moment
      </button>
      
      <!-- Close Button -->
      <button id="camera-close-btn" style="
        padding: 12px 30px;
        font-size: 16px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
      ">
        ❌ Close Camera
      </button>
      
      <p id="camera-status" style="color: #fff; margin-top: 20px; font-size: 14px;"></p>
    </div>
  `;
  
  document.body.appendChild(cameraModal);
  
  // Highlight current filter
  updateFilterButtonStyles();
  
  // Get video and canvas elements
  const video = document.getElementById('romantic-video');
  filterPreviewCanvas = document.getElementById('filter-preview-canvas');
  filterPreviewCtx = filterPreviewCanvas.getContext('2d');
  
  // Access camera
  navigator.mediaDevices.getUserMedia({ 
    video: { 
      facingMode: 'user',
      width: { ideal: 1280 },
      height: { ideal: 720 }
    } 
  })
  .then(stream => {
    video.srcObject = stream;
    
    // Wait for video metadata to load
    video.addEventListener('loadedmetadata', () => {
      // Set canvas size to match video
      filterPreviewCanvas.width = video.videoWidth;
      filterPreviewCanvas.height = video.videoHeight;
      
      // Start real-time filter preview
      startFilterPreview(video);
      
      document.getElementById('camera-status').innerHTML = '✅ Camera ready! Switch filters and capture! 😊';
    });
    
    // Capture button
    const captureBtn = document.getElementById('capture-btn');
    
    // Remove any existing listeners
    const newCaptureBtn = captureBtn.cloneNode(true);
    captureBtn.parentNode.replaceChild(newCaptureBtn, captureBtn);
    
    // Add touch and click handlers
    newCaptureBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      console.log('👆 Capture button TOUCHED');
      captureRomanticMoment(video, stream);
    });
    
    newCaptureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('🖱️ Capture button CLICKED');
      captureRomanticMoment(video, stream);
    });
    
    // Close button
    document.getElementById('camera-close-btn').addEventListener('click', () => {
      // Stop filter preview
      stopFilterPreview();
      
      stream.getTracks().forEach(track => track.stop());
      cameraModal.remove();
      
      // Show celebration page
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    });
  })
  .catch(error => {
    console.error('Camera error:', error);
    alert('❌ Could not access camera. Please allow camera permissions and try again.');
    
    // Show celebration page anyway
    const celebrationPage = document.getElementById('celebration-page');
    if (celebrationPage) {
      celebrationPage.style.display = 'block';
      celebrationPage.scrollIntoView({ behavior: 'smooth' });
    }
    
    sendValentineResponseEmail('YES');
  });
}

// Start real-time filter preview
function startFilterPreview(video) {
  function updatePreview() {
    if (!video || !filterPreviewCanvas) return;
    
    // Draw video frame to canvas
    filterPreviewCtx.drawImage(video, 0, 0, filterPreviewCanvas.width, filterPreviewCanvas.height);
    
    // Apply current filter
    applyFilterToCanvas(filterPreviewCtx, filterPreviewCanvas, selectedFilter);
    
    // Continue animation
    filterAnimationId = requestAnimationFrame(updatePreview);
  }
  
  updatePreview();
}

// Stop filter preview
function stopFilterPreview() {
  if (filterAnimationId) {
    cancelAnimationFrame(filterAnimationId);
    filterAnimationId = null;
  }
}

// Apply filter to canvas
function applyFilterToCanvas(ctx, canvas, filterType) {
  switch(filterType) {
    case 'dream':
      applySoftDreamGlowEffect(ctx, canvas);
      break;
    case 'golden':
      applyGoldenHourEffect(ctx, canvas);
      break;
    case 'polaroid':
      applyPolaroidEffect(ctx, canvas);
      break;
    case 'movie':
      applyMoviePosterEffect(ctx, canvas);
      break;
    case 'kodak':
      applyKodakVintageEffect(ctx, canvas);
      break;
    default:
      applySoftDreamGlowEffect(ctx, canvas);
  }
}

// Switch filter in camera preview
function switchCameraFilter(filter) {
  selectedFilter = filter;
  
  // Update UI
  updateFilterButtonStyles();
  
  const filterName = getFilterName(filter);
  document.getElementById('current-filter-name').textContent = `Current Filter: ${filterName}`;
  
  console.log(`🎨 Switched to filter: ${filterName}`);
}

// Update filter button styles
function updateFilterButtonStyles() {
  // Reset all buttons
  ['dream', 'golden', 'polaroid', 'movie', 'kodak'].forEach(f => {
    const btn = document.getElementById(`filter-btn-${f}`);
    if (btn) {
      btn.style.border = '2px solid transparent';
      btn.style.transform = 'scale(1)';
    }
  });
  
  // Highlight selected
  const selectedBtn = document.getElementById(`filter-btn-${selectedFilter}`);
  if (selectedBtn) {
    selectedBtn.style.border = '2px solid #ff69b4';
    selectedBtn.style.transform = 'scale(1.05)';
    selectedBtn.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.6)';
  }
}

// Get filter friendly name
function getFilterName(filter) {
  const names = {
    'dream': 'Soft Dream Glow ✨',
    'golden': 'Golden Hour Romance 💛',
    'polaroid': 'Polaroid Love Note 📷',
    'movie': 'Romantic Movie Poster 🎬',
    'kodak': 'Kodak Vintage Film 📸'
  };
  return names[filter] || 'Soft Dream Glow ✨';
}

// Add Kodak Vintage Filter (previous filter)
function applyKodakVintageEffect(ctx, canvas) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Kodak film look - warm tones, lifted blacks, vintage feel
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Warm vintage tones
    data[i] = Math.min(255, r * 1.15 + 25);       // Warm reds
    data[i + 1] = Math.min(255, g * 1.05 + 15);   // Slight green boost
    data[i + 2] = Math.min(255, b * 0.90 + 20);   // Reduced blues, lifted blacks
    
    // Vintage softness
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = Math.min(255, data[i] * 0.85 + brightness * 0.15);
    data[i + 1] = Math.min(255, data[i + 1] * 0.88 + brightness * 0.12);
    data[i + 2] = Math.min(255, data[i + 2] * 0.90 + brightness * 0.10);
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Add vintage vignette
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = Math.max(canvas.width, canvas.height) * 0.7;
  
  const vignette = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  vignette.addColorStop(0, 'rgba(255, 240, 220, 0)');
  vignette.addColorStop(0.6, 'rgba(139, 69, 19, 0.08)');
  vignette.addColorStop(1, 'rgba(101, 67, 33, 0.20)');
  
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Expose functions globally
window.openRomanticMomentCamera = openRomanticMomentCamera;
window.switchCameraFilter = switchCameraFilter;
