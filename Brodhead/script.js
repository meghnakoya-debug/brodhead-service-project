
// Custom cursor
const cursor = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Navigation scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add hover effects to interactive elements
document.querySelectorAll('.project-card, .cta-button, .nav-button, .preview-card').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(3)';
    cursor.style.opacity = '0.3';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.opacity = '1';
  });
});

// Add loading animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Form validation (if contact forms are added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Utility function for smooth page transitions
function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  let start = performance.now();
  
  function animate(timestamp) {
    let progress = (timestamp - start) / duration;
    element.style.opacity = Math.min(progress, 1);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}
