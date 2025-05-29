// Simple scroll-triggered animation (optional)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s ease forwards';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Responsive nav toggle (optional)
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Optional: Add a toggle button in HTML for mobile if needed
// Example: <button id="nav-toggle">☰</button>

// Add mobile toggle logic if necessary
