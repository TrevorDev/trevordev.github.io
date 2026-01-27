// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');
const body = document.body;

// Check for saved dark mode preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleIcon.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleIcon.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleIcon.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Animate type items
document.querySelectorAll('.type-item').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, 100);
});

// Animate color swatches
document.querySelectorAll('.color-swatch').forEach((swatch, index) => {
  swatch.style.opacity = '0';
  swatch.style.transform = 'scale(0.8) rotate(-10deg)';
  swatch.style.transition = `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s`;

  setTimeout(() => {
    swatch.style.opacity = '1';
    swatch.style.transform = 'scale(1) rotate(0deg)';
  }, 100);
});