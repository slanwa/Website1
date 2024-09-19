// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form validation example
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    let isValid = true;
    this.querySelectorAll('input[required], textarea[required]').forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = '';
      }
    });
    if (!isValid) e.preventDefault();
  });
});
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Modal functionality example
const modals = document.querySelectorAll('.modal');
const openModalButtons = document.querySelectorAll('[data-modal]');
const closeModalButtons = document.querySelectorAll('.modal-close');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Form submission example with AJAX
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  fetch(this.action, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent successfully!');
    contactForm.reset();
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
// Image slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

// Initial slide display
showSlide(currentSlide);

// Tooltip functionality
const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('mouseover', () => {
    const tooltipText = tooltip.getAttribute('data-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'tooltip';
    tooltipElement.textContent = tooltipText;
    document.body.appendChild(tooltipElement);
    const rect = tooltip.getBoundingClientRect();
    tooltipElement.style.top = `${rect.top + window.scrollY - tooltipElement.offsetHeight}px`;
    tooltipElement.style.left = `${rect.left + window.scrollX}px`;
  });

  tooltip.addEventListener('mouseout', () => {
    document.querySelectorAll('.tooltip').forEach(el => el.remove());
  });
});
