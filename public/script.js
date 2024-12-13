// JavaScript for AI-Based Energy Monitoring System

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation for the Sign-Up section
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demonstration purposes
  
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
  
    if (name === '' || email === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Sign-up successful! Thank you for joining.');
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  function redirectToSignIn() {
    window.location.href = "./signin.html";
  }
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Slider Functionality
  
  // Duplicate slides for seamless loop
  const sliderItems = document.querySelectorAll('.slider-item');
  sliderItems.forEach(item => {
    const clone = item.cloneNode(true);
    sliderContainer.appendChild(clone);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  const wrapper = document.querySelector('.wrapper')
  const registerLink = document.querySelector('.register-link')
  const loginLink = document.querySelector('.login-link')
  
  registerLink.onclick = () => {
      wrapper.classList.add('active')
  }
  
  loginLink.onclick = () => {
      wrapper.classList.remove('active')
  }   
  
  
  // Smooth scrolling to sections
  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
  });