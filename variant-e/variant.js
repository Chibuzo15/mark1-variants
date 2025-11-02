// Adding enhanced benefits section with key device features
console.log('Adding enhanced benefits section');

// @coframe-ignore-query: .cf-benefits-block

const blockToMove = document.querySelector('#lp-pom-block-206');
const positionedContent = document.querySelector('.lp-positioned-content');
const lpRoot = document.querySelector('#lp-pom-root');

if (blockToMove && lpRoot) {
  // Create enhanced benefit item component
  function createBenefitItem(iconName, title, description) {
    const container = document.createElement('div');
    container.className = 'cf:flex cf:flex-col cf:items-center cf:gap-2 cf:text-center';
    
    // Icon container
    const iconDiv = document.createElement('div');
    iconDiv.className = 'cf:w-16 cf:h-16 cf:flex cf:items-center cf:justify-center cf:rounded-full cf:text-white cf:flex-shrink-0 cf:shadow-md';
    iconDiv.style.backgroundColor = '#a0a0a0';
    
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', iconName);
    icon.style.width = '32px';
    icon.style.height = '32px';
    icon.style.color = 'white';
    icon.style.strokeWidth = '2.5';
    
    iconDiv.appendChild(icon);
    
    // Title
    const titleP = document.createElement('p');
    titleP.className = 'cf:font-bold cf:text-gray-900 cf:text-base cf:mt-1';
    titleP.textContent = title;
    
    // Description
    const descP = document.createElement('p');
    descP.className = 'cf:text-xs cf:text-gray-600 cf:leading-snug';
    descP.textContent = description;
    
    container.appendChild(iconDiv);
    container.appendChild(titleP);
    container.appendChild(descP);
    
    return container;
  }

  // Create benefits block
  function createBenefitsBlock() {
    const block = document.createElement('div');
    block.className = 'lp-element lp-pom-block cf-benefits-block';
    block.style.position = 'relative';
    block.style.display = 'flex';
    block.style.flexDirection = 'column';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
    block.style.padding = '40px 50px';
    block.style.minHeight = '300px';
    block.style.backgroundColor = 'rgb(250, 250, 250)';
    block.style.zIndex = '999';
    
    // Header
    const h2 = document.createElement('h2');
    h2.className = 'cf:text-2xl cf:font-bold cf:text-gray-900 cf:mb-2 cf:w-full cf:text-center';
    h2.textContent = 'Key Device Features';
    
    // Subheader
    const subheader = document.createElement('p');
    subheader.className = 'cf:text-sm cf:text-gray-600 cf:mb-8 cf:w-full cf:text-center';
    subheader.textContent = 'Advanced scent therapy with intelligent tracking and long battery life';
    
    // Grid container
    const grid = document.createElement('div');
    grid.className = 'cf:grid cf:grid-cols-3 cf:gap-6 cf:w-full cf:max-w-5xl';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '24px';
    grid.style.width = '100%';
    grid.style.maxWidth = '1200px';
    
    // Add benefit items
    grid.appendChild(createBenefitItem(
      'activity',
      'Real-Time Tracking',
      'Monitor your therapy progress with precision analytics'
    ));
    
    grid.appendChild(createBenefitItem(
      'heart-pulse',
      'Health Monitoring',
      'Track wellness metrics and personalized health insights'
    ));
    
    grid.appendChild(createBenefitItem(
      'zap',
      'Extended Battery',
      'Up to 30 days per charge with fast recharge'
    ));
    
    block.appendChild(h2);
    block.appendChild(subheader);
    block.appendChild(grid);
    
    return block;
  }

  // Remove existing benefits block if it exists
  const existingBenefits = document.querySelector('.cf-benefits-block');
  if (existingBenefits) {
    existingBenefits.remove();
  }

  // Insert new benefits block
  const benefitsBlock = createBenefitsBlock();
  blockToMove.parentNode.insertBefore(benefitsBlock, blockToMove);

  console.log('✅ Enhanced benefits block inserted');

  // Push down ALL elements that come after benefits block
  setTimeout(() => {
    const benefitsRect = benefitsBlock.getBoundingClientRect();
    const PUSH_DOWN_AMOUNT = 300; // Fixed push down of 300px
    
    console.log('Benefits block height:', Math.round(benefitsRect.height));
    console.log('Pushing elements down by:', PUSH_DOWN_AMOUNT, 'px');
    
    // Get block206 bounds for visual containment check
    const block206 = document.querySelector('#lp-pom-block-206');
    const block206Rect = block206 ? block206.getBoundingClientRect() : null;
    
    // Get all positioned elements
    const allElements = positionedContent.querySelectorAll('.lp-element');
    let pushedCount = 0;
    
    allElements.forEach(el => {
      if (el === benefitsBlock) return;
      
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      const shouldPush = (rect.top >= benefitsRect.top || 
                         (rect.top < benefitsRect.bottom && (rect.top + rect.height) > benefitsRect.top)) &&
                        style.display !== 'none' &&
                        rect.height > 0;
      
      if (shouldPush) {
        const currentTop = parseInt(style.top) || 0;
        if (currentTop > 0) {
          let newTop = currentTop + PUSH_DOWN_AMOUNT;
          
          // Add extra push-down for elements visually within block206 area
          if (block206Rect && rect.left >= block206Rect.left && rect.left < block206Rect.right) {
            newTop += 25;
            console.log(`Extra push for element in block206 area: +25px`);
          }
          
          el.style.top = newTop + 'px';
          console.log(`Pushed ${el.id || 'element'} from ${currentTop}px to ${newTop}px`);
          pushedCount++;
        }
      }
    });
    
    console.log(`✅ Total elements pushed: ${pushedCount}`);
  }, 50);

  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  console.log('✅ Benefits section completed');
} else {
  console.error('❌ Could not find required elements');
}

// Increase root container height to accommodate new content
setTimeout(() => {
  const lpRoot = document.querySelector('#lp-pom-root');
  if (lpRoot) {
    const currentHeight = parseInt(window.getComputedStyle(lpRoot).height) || 0;
    const newHeight = currentHeight + 300;
    lpRoot.style.height = newHeight + 'px';
    console.log('✅ Increased #lp-pom-root height from ' + currentHeight + 'px to ' + newHeight + 'px');
  }
}, 100);

