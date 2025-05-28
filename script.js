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



// Add to your script.js
// Typewriter effect for hero subtitle
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init TypeWriter
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.typewriter');
  const words = JSON.parse(txtElement.getAttribute('data-text'));
  const wait = txtElement.getAttribute('data-wait') || 3000;
  
  new TypeWriter(txtElement, words, wait);
}

// Smooth scroll for the indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight - 100,
    behavior: 'smooth'
  });
});


let currentSlide = {
      'carousel-1': 0,
      'carousel-2': 0
    };

    function moveSlide(direction, carouselId) {
      const carousel = document.getElementById(carouselId);
      const images = carousel.querySelectorAll('img');
      const totalSlides = images.length;
      
      // Remove active class from current image
      images[currentSlide[carouselId]].classList.remove('active');
      
      // Calculate new slide index
      currentSlide[carouselId] += direction;
      
      if (currentSlide[carouselId] >= totalSlides) {
        currentSlide[carouselId] = 0;
      } else if (currentSlide[carouselId] < 0) {
        currentSlide[carouselId] = totalSlides - 1;
      }
      
      // Add active class to new image
      images[currentSlide[carouselId]].classList.add('active');
    }

    // Video toggle functionality
    function toggleVideo(videoId, carouselId) {
      const videoContainer = document.getElementById(videoId);
      const carousel = document.getElementById(carouselId);
      const video = videoContainer.querySelector('video');
      
      if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
        videoContainer.style.display = 'block';
        carousel.style.display = 'none';
        video.play();
      } else {
        videoContainer.style.display = 'none';
        carousel.style.display = 'block';
        video.pause();
        video.currentTime = 0;
      }
    }

    // Auto-play carousel
    function autoPlay() {
      Object.keys(currentSlide).forEach(carouselId => {
        moveSlide(1, carouselId);
      });
    }

    // Start auto-play every 5 seconds
    setInterval(autoPlay, 5000);

    // Intersection Observer for animations
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

    // Observe project cards
    document.addEventListener('DOMContentLoaded', () => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        moveSlide(-1, 'carousel-1');
        moveSlide(-1, 'carousel-2');
      } else if (e.key === 'ArrowRight') {
        moveSlide(1, 'carousel-1');
        moveSlide(1, 'carousel-2');
      }
    });

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left - next slide
          moveSlide(1, 'carousel-1');
          moveSlide(1, 'carousel-2');
        } else {
          // Swipe right - previous slide
          moveSlide(-1, 'carousel-1');
          moveSlide(-1, 'carousel-2');
        }
      }
    });



     function togglePlay(button) {
      const videoWrapper = button.parentElement;
      const video = videoWrapper.querySelector('.mini-project-video');
      const playIcon = button.querySelector('i');
      
      if (video.paused) {
        video.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        videoWrapper.classList.add('video-playing');
      } else {
        video.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        videoWrapper.classList.remove('video-playing');
      }
    }

    // Reset video when it ends
    document.querySelectorAll('.mini-project-video').forEach(video => {
      video.addEventListener('ended', function() {
        const videoWrapper = this.parentElement.parentElement;
        const playButton = videoWrapper.querySelector('.play-button');
        const playIcon = playButton.querySelector('i');
        
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        videoWrapper.classList.remove('video-playing');
        this.currentTime = 0;
      });
    });

    // Intersection Observer for animations
    const observerOptions2 = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Initialize animations
    document.addEventListener('DOMContentLoaded', () => {
      const miniProjectCards = document.querySelectorAll('.mini-project-card');
      miniProjectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });

      // Preload videos for better performance
      const videos = document.querySelectorAll('.mini-project-video');
      videos.forEach(video => {
        video.setAttribute('data-loading', 'true');
        video.addEventListener('loadeddata', function() {
          this.removeAttribute('data-loading');
        });
      });
    });