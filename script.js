// Grab the DOM elements for the Mobile Menu Button and Navigation links list
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Toggle standard navigation visible states using CSS class assignments
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Basic beginner interactive accessibility update: Change burger sign safely
  if (navLinks.classList.contains('active')) {
    menuBtn.textContent = '✕'; // Close character
  } else {
    menuBtn.textContent = '☰'; // Burger character
  }
});