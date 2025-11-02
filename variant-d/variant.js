// Find the parent box containing the video (desktop)
const parentBox = document.getElementById('lp-pom-box-417');

if (parentBox) {
  // Clear the parent box content
  parentBox.innerHTML = '';
  
  // Remove the black background from the parent box
  parentBox.style.backgroundColor = 'transparent';
  parentBox.style.backgroundImage = 'none';
  
  // Create img element with the new image URL
  const imgElement = document.createElement('img');
  imgElement.src = 'https://cdn.coframe.com/assets/temp/memoryair/memoryair-5ce2c6ce-3e9a-4139-9d59-47645a62de3a.webp';
  imgElement.alt = 'Memory Air Device';
  
  // Apply the original video styling to the image
  imgElement.style.width = 'calc(100% - 40px)';
  imgElement.style.height = '100%';
  imgElement.style.objectFit = 'cover';
  imgElement.style.transform = 'scale(1.05)';
  imgElement.style.marginLeft = '20px';
  imgElement.style.marginBottom = '-20px';
  imgElement.style.borderRadius = '20px';
  
  // Append the image to the parent box
  parentBox.appendChild(imgElement);
  
  console.log('Video replaced with image successfully');
}

// Also replace the mobile image
const mobileImageElement = document.querySelector('#lp-pom-image-120 img');
if (mobileImageElement) {
  const newImageUrl = 'https://cdn.coframe.com/assets/temp/memoryair/memoryair-5ce2c6ce-3e9a-4139-9d59-47645a62de3a.webp';
  
  // Update src and srcset attributes
  mobileImageElement.src = newImageUrl;
  mobileImageElement.srcset = newImageUrl + ' 1x, ' + newImageUrl + ' 2x, ' + newImageUrl + ' 3x';
  mobileImageElement.setAttribute('data-src-mobile-1x', newImageUrl);
  mobileImageElement.setAttribute('data-src-mobile-2x', newImageUrl);
  mobileImageElement.setAttribute('data-src-mobile-3x', newImageUrl);
  
  console.log('Mobile image replaced successfully');
}

// Emit success
window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });

