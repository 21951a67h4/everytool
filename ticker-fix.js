// Standalone ticker fix script that runs immediately
(function() {
  // This function will run as soon as the script loads
  console.log('Ticker fix script loaded');
  
  // Function to initialize the ticker manually
  function initTicker() {
    console.log('Manual ticker initialization started');
    
    // Get ticker elements
    const ticker = document.getElementById('ticker');
    const progressBar = document.getElementById('ticker-progress-bar');
    
    if (!ticker) {
      console.error('Ticker element not found');
      return;
    }
    
    console.log('Ticker element found, applying manual styles');
    
    // First stop any existing animation
    ticker.style.animation = 'none';
    
    // Force layout recalculation
    void ticker.offsetWidth;
    
    // Get all ticker items
    const items = ticker.querySelectorAll('.ticker-item:not(.ticker-duplicate)');
    if (items.length === 0) {
      console.error('No ticker items found');
      return;
    }
    
    // Calculate total width
    let totalWidth = 0;
    items.forEach(item => {
      totalWidth += item.offsetWidth;
    });
    
    console.log(`Total ticker content width: ${totalWidth}px`);
    
    // Set direct animation with fallback
    const duration = Math.max(30000, totalWidth * 20);
    
    // Create and add a style element with the animation definition
    const style = document.createElement('style');
    style.textContent = `
      @keyframes manual-ticker-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth * 1.2}px); }
      }
      
      #ticker {
        animation: manual-ticker-scroll ${duration}ms linear infinite;
        display: flex !important;
        position: absolute !important;
        white-space: nowrap !important;
      }
    `;
    document.head.appendChild(style);
    
    // Apply animation
    ticker.style.animation = `manual-ticker-scroll ${duration}ms linear infinite`;
    
    console.log('Manual ticker animation applied');
    
    // Also update the progress bar if it exists
    if (progressBar) {
      progressBar.style.animation = 'none';
      void progressBar.offsetWidth;
      progressBar.style.animation = `ticker-progress ${duration}ms linear infinite`;
    }
  }
  
  // Try to initialize as soon as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initTicker, 500);
    });
  } else {
    // DOM already loaded, initialize with a delay
    setTimeout(initTicker, 500);
  }
  
  // Also try after window load event
  window.addEventListener('load', function() {
    setTimeout(initTicker, 1000);
  });
})();
