console.log('Updating hero headline...');

// Find and update the main hero headline
const heroHeadline = document.querySelector('h1.headline-xl.text-primaryReverse');

if (heroHeadline) {
  // Replace the headline with a new compelling message
  heroHeadline.innerHTML = 'Finance automation<br>that actually works.';
  
  console.log('Hero headline updated successfully');
  
  // Emit success event after changes are applied
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Hero headline not found');
}

