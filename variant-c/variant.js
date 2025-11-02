// ROI Savings Calculator for Ramp
console.log('Initializing ROI Savings Calculator');

const heroSection = document.querySelector('#hero-section');

if (heroSection) {
  // Create calculator container
  const container = document.createElement('section');
  container.className = 'cf:bg-gray-100 cf:py-12 cf:md:py-16 cf:lg:py-20';

  // Main wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:px-4 cf:md:px-8 cf:lg:px-12 cf:xl:px-16';

  // Header section
  const header = document.createElement('div');
  header.className = 'cf:mb-12 cf:text-center';

  const h2 = document.createElement('h2');
  h2.className = 'cf:text-3xl cf:md:text-4xl cf:font-bold cf:text-gray-900 cf:mb-4';
  h2.textContent = 'Calculate Your Ramp Savings';

  const subtitle = document.createElement('p');
  subtitle.className = 'cf:text-gray-600 cf:text-lg';
  subtitle.textContent = 'See how much time and money your team could save with Ramp';

  header.appendChild(h2);
  header.appendChild(subtitle);

  // Grid container
  const gridContainer = document.createElement('div');
  gridContainer.className = 'cf:grid cf:grid-cols-1 cf:lg:grid-cols-3 cf:gap-8 cf:mb-8';

  // Input Card
  const inputCard = document.createElement('div');
  inputCard.className = 'cf:lg:col-span-1 cf:bg-white cf:rounded-2xl cf:p-8 cf:shadow-sm cf:border cf:border-gray-200';

  const inputCardTitle = document.createElement('h3');
  inputCardTitle.className = 'cf:text-xl cf:font-semibold cf:text-gray-900 cf:mb-6';
  inputCardTitle.textContent = 'Your Details';

  // Monthly Spend Input
  const spendDiv = document.createElement('div');
  spendDiv.className = 'cf:mb-6';

  const spendLabel = document.createElement('label');
  spendLabel.htmlFor = 'monthlySpend';
  spendLabel.className = 'cf:block cf:text-sm cf:font-medium cf:text-gray-700 cf:mb-2';
  spendLabel.textContent = 'Monthly Card Spend';

  const spendInputWrapper = document.createElement('div');
  spendInputWrapper.className = 'cf:relative';

  const spendDollarSign = document.createElement('span');
  spendDollarSign.className = 'cf:absolute cf:left-3 cf:top-3 cf:text-gray-500';
  spendDollarSign.textContent = '$';

  const monthlySpendInput = document.createElement('input');
  monthlySpendInput.id = 'monthlySpend';
  monthlySpendInput.type = 'number';
  monthlySpendInput.placeholder = '50000';
  monthlySpendInput.value = '50000';
  monthlySpendInput.min = '0';
  monthlySpendInput.step = '1000';
  monthlySpendInput.className = 'cf:w-full cf:pl-7 cf:pr-4 cf:py-2 cf:border cf:border-gray-300 cf:rounded-lg cf:focus:outline-none cf:focus:ring-2 cf:focus:ring-blue-500 cf:focus:border-transparent';

  const spendHint = document.createElement('p');
  spendHint.className = 'cf:text-xs cf:text-gray-500 cf:mt-1';
  spendHint.textContent = "Enter your team's monthly card spending";

  spendInputWrapper.appendChild(spendDollarSign);
  spendInputWrapper.appendChild(monthlySpendInput);
  spendDiv.appendChild(spendLabel);
  spendDiv.appendChild(spendInputWrapper);
  spendDiv.appendChild(spendHint);

  // Employees Input
  const employeesDiv = document.createElement('div');
  employeesDiv.className = 'cf:mb-6';

  const employeesLabel = document.createElement('label');
  employeesLabel.htmlFor = 'employees';
  employeesLabel.className = 'cf:block cf:text-sm cf:font-medium cf:text-gray-700 cf:mb-2';
  employeesLabel.textContent = 'Number of Employees';

  const employeesInput = document.createElement('input');
  employeesInput.id = 'employees';
  employeesInput.type = 'number';
  employeesInput.placeholder = '50';
  employeesInput.value = '50';
  employeesInput.min = '1';
  employeesInput.step = '1';
  employeesInput.className = 'cf:w-full cf:px-4 cf:py-2 cf:border cf:border-gray-300 cf:rounded-lg cf:focus:outline-none cf:focus:ring-2 cf:focus:ring-blue-500 cf:focus:border-transparent';

  const employeesHint = document.createElement('p');
  employeesHint.className = 'cf:text-xs cf:text-gray-500 cf:mt-1';
  employeesHint.textContent = 'Number of team members using Ramp';

  employeesDiv.appendChild(employeesLabel);
  employeesDiv.appendChild(employeesInput);
  employeesDiv.appendChild(employeesHint);

  inputCard.appendChild(inputCardTitle);
  inputCard.appendChild(spendDiv);
  inputCard.appendChild(employeesDiv);

  // Results Cards Container
  const resultsContainer = document.createElement('div');
  resultsContainer.className = 'cf:lg:col-span-2 cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-6';

  // Helper function to create result cards
  function createResultCard(id, title, defaultValue, description, iconColor) {
    const card = document.createElement('div');
    card.className = 'cf:bg-white cf:rounded-2xl cf:p-8 cf:shadow-sm cf:border cf:border-gray-200';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'cf:flex cf:items-center cf:justify-between cf:mb-2';

    const cardTitle = document.createElement('h4');
    cardTitle.className = 'cf:text-sm cf:font-semibold cf:text-gray-600 cf:uppercase cf:tracking-wide';
    cardTitle.textContent = title;

    cardHeader.appendChild(cardTitle);

    const value = document.createElement('div');
    value.id = id;
    value.className = `cf:text-4xl cf:font-bold cf:text-${iconColor}-600`;
    value.textContent = defaultValue;

    const desc = document.createElement('p');
    desc.className = 'cf:text-xs cf:text-gray-500 cf:mt-2';
    desc.textContent = description;

    card.appendChild(cardHeader);
    card.appendChild(value);
    card.appendChild(desc);

    return card;
  }

  // Annual Savings Card
  resultsContainer.appendChild(createResultCard(
    'annualSavings',
    'Annual Savings',
    '$18,000',
    '3% cashback on annual spend',
    'green'
  ));

  // Hours Saved Card
  resultsContainer.appendChild(createResultCard(
    'hoursSaved',
    'Hours Saved/Year',
    '1,200',
    '2 hours per employee per month',
    'blue'
  ));

  // ROI Card
  resultsContainer.appendChild(createResultCard(
    'roiPercentage',
    'First-Year ROI',
    '360%',
    'Based on implementation cost',
    'yellow'
  ));

  gridContainer.appendChild(inputCard);
  gridContainer.appendChild(resultsContainer);

  // CTA Section
  const ctaSection = document.createElement('div');
  ctaSection.className = 'cf:text-center';

  const ctaLink = document.createElement('a');
  ctaLink.href = '/see-a-demo';
  ctaLink.className = 'cf:inline-flex cf:items-center cf:justify-center cf:px-6 cf:py-3 cf:bg-blue-600 hover:cf:bg-blue-700 cf:text-white cf:rounded-lg cf:font-semibold cf:transition cf:ease-in-out cf:duration-200';
  ctaLink.textContent = 'See a Demo';

  ctaSection.appendChild(ctaLink);

  // Assemble everything
  wrapper.appendChild(header);
  wrapper.appendChild(gridContainer);
  wrapper.appendChild(ctaSection);
  container.appendChild(wrapper);

  // Insert calculator after hero section
  heroSection.parentNode.insertBefore(container, heroSection.nextSibling);

  // Add real-time calculation handler
  setTimeout(() => {
    const monthlySpendInputEl = document.getElementById('monthlySpend');
    const employeesInputEl = document.getElementById('employees');
    const annualSavingsDisplay = document.getElementById('annualSavings');
    const hoursSavedDisplay = document.getElementById('hoursSaved');
    const roiDisplay = document.getElementById('roiPercentage');

    const updateCalculations = () => {
      const monthlySpend = parseFloat(monthlySpendInputEl.value) || 0;
      const employees = parseInt(employeesInputEl.value) || 1;

      // Calculate metrics
      const annualSpend = monthlySpend * 12;
      const annualSavings = annualSpend * 0.03; // 3% cashback
      const hoursSavedPerYear = employees * 2 * 12; // 2 hours per employee per month
      const implementationCost = 5000; // Assumed cost
      const roi = ((annualSavings - implementationCost) / implementationCost) * 100;

      // Update displays with formatting
      annualSavingsDisplay.textContent = '$' + annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 });
      hoursSavedDisplay.textContent = hoursSavedPerYear.toLocaleString('en-US');
      roiDisplay.textContent = Math.max(0, Math.round(roi)) + '%';
    };

    monthlySpendInputEl.addEventListener('input', updateCalculations);
    employeesInputEl.addEventListener('input', updateCalculations);
    updateCalculations();
  }, 0);

  // Emit success event
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  console.log('ROI Calculator inserted successfully');
} else {
  console.error('Hero section not found');
}

