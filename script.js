// Wallet Validation Site - Main JavaScript File

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  initializeForms();
});

// Initialize event listeners for interactive elements
function initializeEventListeners() {
  // Feature buttons
  const featureButtons = document.querySelectorAll('.btn-feature');
  featureButtons.forEach(button => {
    button.addEventListener('click', handleFeatureClick);
  });

  // Wallet cards
  const walletCards = document.querySelectorAll('.wallet-card');
  walletCards.forEach(card => {
    card.addEventListener('click', handleWalletClick);
  });
}

// Initialize form handling
function initializeForms() {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Subscribe form
  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', handleFormSubmit);
  }
}

// Handle feature button clicks
function handleFeatureClick(event) {
  event.preventDefault();
  const featureName = event.target.textContent;
  console.log('Feature clicked:', featureName);
  // You can add custom logic here
}

// Handle wallet card clicks
function handleWalletClick(event) {
  const walletCard = event.currentTarget;
  const walletName = walletCard.querySelector('h3').textContent;
  console.log('Wallet selected:', walletName);
  // You can add custom logic here
}

// Handle form submission
function handleFormSubmit(event) {
  // Formspree will handle the actual submission
  // We can add custom pre-submission logic here if needed
  const form = event.target;
  console.log('Form submitted:', form.id);
  // You can add custom logic here before form submission
}

// Smooth scroll functionality
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add animation on scroll
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  // Observe all cards and sections
  document.querySelectorAll('.wallet-card, .btn-feature, .section').forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations
if ('IntersectionObserver' in window) {
  observeElements();
}
