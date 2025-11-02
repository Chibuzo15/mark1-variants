// Add a "How it Works" section below the hero
console.log('Adding How it Works section...');

// Wait for the hero section to be available
const heroSection = document.querySelector('#hero-section');
if (heroSection) {
  // Get the parent container
  const parent = heroSection.parentElement;
  
  if (parent) {
    // Create the How it Works section
    const section = document.createElement('section');
    section.className = 'cf:py-16 cf:px-4 cf:md:py-24 cf:md:px-8 cf:lg:px-12 cf:xl:px-16 cf:bg-white';
    
    const container = document.createElement('div');
    container.className = 'cf:max-w-screen-2xl cf:mx-auto';
    
    // Header
    const header = document.createElement('div');
    header.className = 'cf:text-center cf:mb-12 cf:md:mb-16';
    
    const h2 = document.createElement('h2');
    h2.className = 'cf:text-3xl cf:md:text-4xl cf:font-bold cf:text-gray-900 cf:mb-4';
    h2.textContent = 'How it works';
    
    const p = document.createElement('p');
    p.className = 'cf:text-lg cf:text-gray-600 cf:max-w-2xl cf:mx-auto';
    p.textContent = 'Get started with Ramp in just a few simple steps and streamline your finance operations.';
    
    header.appendChild(h2);
    header.appendChild(p);
    
    // Steps Grid
    const stepsGrid = document.createElement('div');
    stepsGrid.className = 'cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-8 cf:md:gap-6';
    
    // Helper function to create a step
    function createStep(number, title, description) {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'cf:flex cf:flex-col cf:items-start';
      
      const numberDiv = document.createElement('div');
      numberDiv.className = 'cf:w-12 cf:h-12 cf:rounded-lg cf:bg-[#f6fab2] cf:flex cf:items-center cf:justify-center cf:mb-4';
      
      const numberSpan = document.createElement('span');
      numberSpan.className = 'cf:text-xl cf:font-bold cf:text-gray-900';
      numberSpan.textContent = number;
      numberDiv.appendChild(numberSpan);
      
      const h3 = document.createElement('h3');
      h3.className = 'cf:text-xl cf:font-semibold cf:text-gray-900 cf:mb-2';
      h3.textContent = title;
      
      const descP = document.createElement('p');
      descP.className = 'cf:text-gray-600 cf:leading-relaxed';
      descP.textContent = description;
      
      stepDiv.appendChild(numberDiv);
      stepDiv.appendChild(h3);
      stepDiv.appendChild(descP);
      
      return stepDiv;
    }
    
    // Step 1
    stepsGrid.appendChild(createStep(
      '1',
      'Connect your accounts',
      'Link your bank accounts and ERP system in minutes to get a complete view of your finances.'
    ));
    
    // Step 2
    stepsGrid.appendChild(createStep(
      '2',
      'Set your policies',
      'Define approval workflows, spending limits, and policies that automatically enforce themselves.'
    ));
    
    // Step 3
    stepsGrid.appendChild(createStep(
      '3',
      'Automate everything',
      'Sit back and let Ramp handle payments, reconciliation, and reporting automatically.'
    ));
    
    container.appendChild(header);
    container.appendChild(stepsGrid);
    section.appendChild(container);
    
    // Insert after hero section
    parent.insertBefore(section, heroSection.nextSibling);
    
    // Emit success
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
    console.log('How it Works section added successfully');
  } else {
    console.error('Could not find parent container');
  }
} else {
  console.error('Hero section not found');
}

