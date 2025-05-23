// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Project Carousel + Video Toggle
  function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-inner img');
    let activeIndex = 0;
    
    // Find current active image
    images.forEach((img, index) => {
      if (img.classList.contains('active')) {
        activeIndex = index;
        img.classList.remove('active');
      }
    });
    
    // Calculate new index
    let newIndex = (activeIndex + direction + images.length) % images.length;
    
    // Show new image
    images[newIndex].classList.add('active');
  }
  
  function toggleVideo(videoContainerId, carouselId) {
    const videoContainer = document.getElementById(videoContainerId);
    const carousel = document.getElementById(carouselId);
    const video = videoContainer.querySelector('video');
    
    if (videoContainer.style.display === 'block') {
      videoContainer.style.display = 'none';
      carousel.style.display = 'block';
      video.pause();
    } else {
      videoContainer.style.display = 'block';
      carousel.style.display = 'none';
      video.currentTime = 0;
      video.play().catch(e => console.log("Video play failed:", e));
    }
  }
  
  // Initialize first image as active in each carousel on load
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel-inner').forEach(carousel => {
      const firstImg = carousel.querySelector('img');
      if (firstImg) firstImg.classList.add('active');
    });
  });




  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // Playground video controls
// Playground video controls
function togglePlay(button) {
    const video = button.closest('.mini-project-media').querySelector('video');
    const icon = button.querySelector('i');
    
    if (video.paused) {
      video.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
      button.style.opacity = '0.5';
    } else {
      video.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
      button.style.opacity = '0.9';
    }
  }
  
  // Pause all videos when scrolling away
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.querySelectorAll('.mini-project-video').forEach(video => {
        video.pause();
        const button = video.closest('.mini-project-media').querySelector('.play-button');
        if (button) {
          const icon = button.querySelector('i');
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
          button.style.opacity = '0.9';
        }
      });
    }
  });
  
  // Initialize videos to show first frame
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.mini-project-video').forEach(video => {
      // Ensure videos are muted (some browsers require this for autoplay)
      video.muted = true;
      // Show first frame
      video.currentTime = 0.1;
    });
  });


  // Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      mobileMenu.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});