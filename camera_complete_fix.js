// ==================== COMPLETE CAMERA FIX ====================

// Global variables for filter preview
let filterPreviewCanvas = null;
let filterPreviewCtx = null;
let filterAnimationId = null;
let selectedFilter = 'dream'; // Default filter

// Modified openRomanticMomentCamera with REAL-TIME filter preview
async function openRomanticMomentCamera() {
  console.log('🎥 Opening camera with real-time preview...');
  
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
      <h2 style="color: #ff69b4; font-size: 28px; margin-bottom: 10px; text-shadow: 0 0 20px rgba(255, 105, 180, 0.6);">
        📸 Capture Your Magical Moment
      </h2>
      <p style="color: #fff; margin-bottom: 15px; font-size: 14px;">
        Switch filters and see live preview ✨
      </p>
      
      <div style="position: relative; display: inline-block; margin-bottom: 15px;">
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
          border: 3px solid rgba(255, 105, 180, 0.4);
        "></canvas>
        
        <!-- Top decorative text -->
        <div style="position: absolute; top: 15px; left: 50%; transform: translateX(-50%); font-size: 20px; font-weight: bold; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255, 105, 180, 0.8); pointer-events: none;">
          ✨ Bunny & Anku ✨
        </div>
        
        <!-- Bottom decorative text -->
        <div style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); font-size: 16px; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.8); pointer-events: none;">
          💕 Valentine's Day 2026 💕
        </div>
      </div>
      
      <!-- Hidden canvas for final capture -->
      <canvas id="romantic-canvas" style="display: none;"></canvas>
      
      <!-- Filter Switcher -->
      <div style="margin: 15px 0; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
        <button onclick="window.switchCameraFilter('dream')" id="filter-btn-dream" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        ">✨ Dream</button>
        
        <button onclick="window.switchCameraFilter('golden')" id="filter-btn-golden" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);
        ">💛 Golden</button>
        
        <button onclick="window.switchCameraFilter('polaroid')" id="filter-btn-polaroid" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(250, 112, 154, 0.3);
        ">📷 Polaroid</button>
        
        <button onclick="window.switchCameraFilter('movie')" id="filter-btn-movie" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(48, 207, 208, 0.3);
        ">🎬 Movie</button>
        
        <button onclick="window.switchCameraFilter('kodak')" id="filter-btn-kodak" style="
          padding: 10px 16px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
          color: white;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        ">📸 Kodak</button>
      </div>
      
      <p id="current-filter-name" style="color: #ff69b4; font-size: 16px; font-weight: bold; margin-bottom: 15px;">
        Current Filter: ${getFilterName(selectedFilter)}
      </p>
      
      <!-- Capture Button -->
      <button id="capture-btn" style="
        padding: 16px 45px;
        font-size: 18px;
        font-weight: bold;
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        transition: all 0.3s ease;
        margin-bottom: 15px;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      ">
        📸 Capture Magical Moment
      </button>
      
      <!-- Close Button -->
      <button id="camera-close-btn" style="
        padding: 10px 25px;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      ">
        ❌ Close Camera
      </button>
      
      <p id="camera-status" style="color: #fff; margin-top: 15px; font-size: 13px;"></p>
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
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    
    video.srcObject = stream;
    
    // Wait for video metadata to load
    video.addEventListener('loadedmetadata', () => {
      console.log('✅ Video loaded:', video.videoWidth, 'x', video.videoHeight);
      
      // Set canvas size to match video
      filterPreviewCanvas.width = video.videoWidth;
      filterPreviewCanvas.height = video.videoHeight;
      
      // Start real-time filter preview
      startFilterPreview(video);
      
      document.getElementById('camera-status').innerHTML = '✅ Camera ready! Switch filters and capture! 😊';
    });
    
    // Capture button - ONE handler only
    const captureBtn = document.getElementById('capture-btn');
    captureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('🖱️ Capture button CLICKED');
      captureRomanticMoment(video, stream);
    }, { once: false }); // Allow multiple captures
    
    // Close button
    document.getElementById('camera-close-btn').addEventListener('click', () => {
      console.log('❌ Closing camera...');
      
      // Stop filter preview
      stopFilterPreview();
      
      // Stop camera stream
      stream.getTracks().forEach(track => track.stop());
      cameraModal.remove();
      
      // Show celebration page
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
  } catch (error) {
    console.error('Camera error:', error);
    alert('❌ Could not access camera. Please allow camera permissions and try again.');
    
    // Show celebration page anyway
    const celebrationPage = document.getElementById('celebration-page');
    if (celebrationPage) {
      celebrationPage.style.display = 'block';
      celebrationPage.scrollIntoView({ behavior: 'smooth' });
    }
    
    sendValentineResponseEmail('YES');
  }
}

// Start real-time filter preview
function startFilterPreview(video) {
  console.log('🎬 Starting filter preview...');
  
  function updatePreview() {
    if (!video || !filterPreviewCanvas || !video.videoWidth) {
      filterAnimationId = requestAnimationFrame(updatePreview);
      return;
    }
    
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
  console.log('⏹️ Filter preview stopped');
}

// Apply filter to canvas (used for both preview and capture)
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
  const filterNameEl = document.getElementById('current-filter-name');
  if (filterNameEl) {
    filterNameEl.textContent = `Current Filter: ${filterName}`;
  }
  
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

// FIXED captureRomanticMoment - include ALL filters including Kodak
function captureRomanticMoment(video, stream) {
  console.log('🎬 captureRomanticMoment called!');
  console.log('📹 Video element:', video);
  console.log('🎥 Stream:', stream);
  console.log('🎨 Selected filter:', selectedFilter);
  
  const canvas = document.getElementById('romantic-canvas');
  if (!canvas) {
    console.error('❌ Canvas not found!');
    alert('Error: Canvas not found. Please try again.');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  if (!video || !video.videoWidth) {
    console.error('❌ Video not ready!');
    alert('Please wait for camera to fully load and try again.');
    return;
  }
  
  console.log('✅ Video dimensions:', video.videoWidth, 'x', video.videoHeight);
  
  // Set canvas size to video size
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  
  console.log('✅ Canvas size set:', canvas.width, 'x', canvas.height);
  
  // Update status
  document.getElementById('camera-status').innerHTML = '📸 Capturing...';
  
  // Draw video frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  console.log('✅ Video frame drawn to canvas');
  
  // Apply filter based on selectedFilter
  try {
    console.log('🎨 Applying filter:', selectedFilter);
    
    switch(selectedFilter) {
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
        console.log('⚠️ Unknown filter, using dream');
        applySoftDreamGlowEffect(ctx, canvas);
    }
    
    console.log('✅ Filter applied successfully');
  } catch (error) {
    console.error('❌ Error applying filter:', error);
  }
  
  // Add romantic frame and caption
  try {
    console.log('🖼️ Adding frame with caption for filter:', selectedFilter);
    addRomanticFrameWithCaption(ctx, canvas, selectedFilter);
    console.log('✅ Frame and caption added');
  } catch (error) {
    console.error('❌ Error adding frame:', error);
  }
  
  console.log('💾 Converting canvas to blob...');
  
  // Convert to image
  canvas.toBlob(async (blob) => {
    if (!blob) {
      console.error('❌ Failed to create blob');
      alert('Failed to capture photo. Please try again.');
      return;
    }
    
    console.log('✅ Blob created:', blob.size, 'bytes');
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.download = `Bunny_Anku_Love_${getFilterName(selectedFilter).replace(/[^a-zA-Z0-9]/g, '_')}_${date}.jpg`;
    link.href = url;
    link.click();
    
    console.log('✅ Download triggered:', link.download);
    
    // Show success message
    const statusElement = document.getElementById('camera-status');
    if (statusElement) {
      statusElement.innerHTML = `
        ✅ Magical moment captured with ${getFilterName(selectedFilter)}! 💕<br>
        📥 Downloading... and sending to your love! 💌
      `;
    }
    
    // Send email with photo
    try {
      console.log('📧 Sending email...');
      await sendRomanticMomentEmail(blob, selectedFilter);
      console.log('✅ Email sent successfully');
    } catch (error) {
      console.error('❌ Email send failed:', error);
    }
    
    // Show celebration after a moment
    setTimeout(() => {
      const celebrationPage = document.getElementById('celebration-page');
      if (celebrationPage) {
        celebrationPage.style.display = 'block';
        celebrationPage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
    
  }, 'image/jpeg', 0.95);
}

// Expose functions globally
window.openRomanticMomentCamera = openRomanticMomentCamera;
window.switchCameraFilter = switchCameraFilter;
window.selectedFilter = selectedFilter;
