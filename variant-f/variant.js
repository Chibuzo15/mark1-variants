console.log('Adding sticky savings counter banner to Ramp homepage');

// Savings Banner Component
function SavingsBanner() {
  const baseAmount = 75000000 + Math.floor(Math.random() * 25000000);
  
  return (
    <div className="cf:fixed cf:right-0 cf:top-16 cf:z-[9998] cf:flex cf:flex-col cf:gap-0">
      {/* Minimizable Banner Container */}
      <div 
        id="savings-banner-content"
        className="cf:w-80 cf:max-w-[calc(100vw-16px)] cf:bg-[#1a1a1a] cf:rounded-lg cf:shadow-xl cf:overflow-hidden cf:transition-all cf:duration-300 cf:relative"
        style={{
          minHeight: '200px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff'
        }}
      >
        {/* Close button on left border, centered vertically */}
        <button
          id="banner-close-btn"
          className="cf:absolute cf:left-0 cf:top-1/2 cf:-translate-y-1/2 cf:-translate-x-1/2 cf:w-6 cf:h-6 cf:flex cf:items-center cf:justify-center cf:rounded-full cf:hover:bg-white/20 cf:transition-all cf:text-white/60 cf:hover:text-white cf:bg-[#1a1a1a]"
          onclick="document.getElementById('savings-banner-content').style.display='none'; localStorage.setItem('ramp-banner-hidden', 'true');"
          aria-label="Minimize banner"
        >
          <i data-lucide="chevron-right" className="cf:w-25 cf:h-25" style="padding-left:13px; font-size: 22px"></i>
        </button>

        {/* Header - removed close button, simplified */}
        <div className="cf:flex cf:items-center cf:justify-start cf:p-4 cf:border-b cf:border-white/10 cf:pl-8">
          <span className="cf:text-sm cf:font-semibold cf:text-white/90">Ramp Savings</span>
        </div>

        {/* Counter Content */}
        <div className="cf:p-6 cf:flex cf:flex-col cf:gap-4">
          {/* Pulse dot */}
          <div className="cf:flex cf:items-center cf:gap-3">
            <div 
              className="cf:w-2 cf:h-2 cf:rounded-full cf:bg-emerald-500"
              style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
            <span className="cf:text-xs cf:text-white/60 cf:font-medium">Live Savings</span>
          </div>

          {/* Main Counter Display */}
          <div>
            <div className="cf:text-xs cf:text-white/60 cf:mb-2">This Month</div>
            <div className="cf:flex cf:items-baseline cf:gap-1">
              <span className="cf:text-3xl cf:font-bold cf:text-white">
                <span id="savings-amount">75</span>
              </span>
              <span className="cf:text-lg cf:text-white/80">M</span>
            </div>
          </div>

          {/* Description */}
          <p className="cf:text-xs cf:text-white/70 cf:leading-relaxed">
            Finance teams have saved this month with Ramp
          </p>

          {/* Animation indicator */}
          <div 
            className="cf:text-2xl cf:text-center"
            style={{ animation: 'fadeInOut 2s ease-in-out infinite' }}
          >
            💰
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          #savings-banner-content {
            width: 70vw !important;
            max-width: 70vw !important;
          }
        }
      `}</style>
    </div>
  );
}

// Remove any existing banner
const existingBanner = document.querySelector('#savings-banner-content');
if (existingBanner) {
  existingBanner.remove();
}

// Check if user previously minimized the banner
if (localStorage.getItem('ramp-banner-hidden') !== 'true') {
  // Insert banner
  const banner = <SavingsBanner />;
  document.body.insertAdjacentElement('afterbegin', banner);

  // Animate the counter incrementing
  let currentAmount = 75;
  setInterval(() => {
    currentAmount += (0.5 + Math.random() * 1.5); // Increment by 0.5-2M
    const amountEl = document.getElementById('savings-amount');
    if (amountEl) {
      amountEl.textContent = currentAmount.toFixed(1);
    }
  }, 2000 + Math.random() * 1000);
}

window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });

console.log('✅ Right-side sticky savings banner added successfully');

