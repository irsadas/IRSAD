// Typing effect for dynamic text
if (document.getElementById("typing")) {
  const typed = new Typed("#typing", {
    strings: [
      "Senior Full Stack Developer",
      "React & Node.js Expert",
      "Scalable Systems Architect",
      "Tech Innovator",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500,
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};

// Function to add 'active' class to navbar link based on section in view
const setActiveLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  let current = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 60){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach( link => {
    link.classList.remove('active');
    if(link.getAttribute('href').includes(current)){
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', () => {
});

window.addEventListener("scroll", revealOnScroll);
// Trigger once on load
revealOnScroll();

// EmailJS integration for contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
      to_email: 'irsadas0786@gmail.com',
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }).then(() => {
      alert('Message sent successfully!');
      this.reset();
    });
  });
}

// ========== PREMIUM FEATURES ==========

// 1. Scroll Progress Bar
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Back to Top Button Visibility
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    if (winScroll > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
});

// 2. Back to Top Functionality
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// 4. Particle Background Animation
const canvas = document.getElementById("canvas-bg");
const ctx = canvas.getContext("2d");

let particlesArray;

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.directionX = (Math.random() * 0.4) - 0.2;
    this.directionY = (Math.random() * 0.4) - 0.2;
    this.size = Math.random() * 2;
    this.color = '#0d9488';
  }

  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 15000;
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  
  // Connect particles
  connect();
}

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
      if (distance < (canvas.width/7) * (canvas.height/7)) {
        opacityValue = 1 - (distance/20000);
        ctx.strokeStyle = 'rgba(13, 148, 136,' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

init();
animate();

// 5. Project Modal Functionality
const projectsData = {
  1: {
    title: "E-Commerce Platform",
    icon: "🌐",
    description: "A comprehensive e-commerce solution built for scalability. This platform handles over 10k monthly users with ease. Key features include real-time inventory management using WebSockets, secure payment processing via Stripe, and a robust admin dashboard for analytics and product management. The backend is architected with microservices to ensure high availability.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Socket.io"],
    live: "#",
    github: "#"
  },
  2: {
    title: "Analytics Dashboard",
    icon: "📊",
    description: "A high-performance analytics dashboard that processes over 1M+ data points to visualize critical business metrics. It features interactive charts powered by D3.js, exportable reports in PDF/CSV formats, and granular role-based access control. Optimized for speed, it reduces data retrieval time by 40% compared to the previous system.",
    tags: ["Vue.js", "D3.js", "Firebase", "Cloud Functions", "Auth0"],
    live: "#",
    github: "#"
  },
  3: {
    title: "Social Chat Application",
    icon: "💬",
    description: "A secure, real-time messaging application designed for privacy. It implements end-to-end encryption for all messages. Users can create group chats, share files up to 50MB, and receive push notifications. Built with a mobile-first approach, ensuring a seamless experience across devices.",
    tags: ["React", "Socket.io", "PostgreSQL", "WebRTC", "Express"],
    live: "#",
    github: "#"
  }
};

const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modalTitle");
const modalIcon = document.getElementById("modalIcon");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLive = document.getElementById("modalLive");
const modalGithub = document.getElementById("modalGithub");

document.querySelectorAll(".project-details-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const projectId = btn.getAttribute("data-id");
    const project = projectsData[projectId];
    
    if (project) {
      modalTitle.textContent = project.title;
      modalIcon.textContent = project.icon;
      modalDescription.textContent = project.description;
      
      // Clear and add tags
      modalTags.innerHTML = "";
      project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        modalTags.appendChild(span);
      });
      
      modalLive.href = project.live;
      modalGithub.href = project.github;
      
      modal.classList.add("show");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// Skill Modal Functionality
const skillModal = document.getElementById("skillModal");
const skillModalTitle = document.getElementById("skillModalTitle");
const skillModalBody = document.getElementById("skillModalBody");
const closeSkillModal = document.getElementById("closeSkillModal");

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h4").textContent;
    const content = card.querySelector(".skill-list").cloneNode(true);
    
    skillModalTitle.textContent = title;
    skillModalBody.innerHTML = "";
    skillModalBody.appendChild(content);
    
    skillModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

if (closeSkillModal) {
  closeSkillModal.addEventListener("click", () => {
    skillModal.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}

// 6. Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      const categories = card.getAttribute('data-categories');
      
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 7. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navList.classList.remove('active');
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu && navList && mobileMenu.classList.contains('active')) {
    if (!mobileMenu.contains(e.target) && !navList.contains(e.target)) {
      mobileMenu.classList.remove('active');
      navList.classList.remove('active');
    }
  }
});

// 8. Navbar Scroll Effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 9. FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close other open items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// 10. Hire Me Button Visibility
const hireMeBtn = document.getElementById('hireMeBtn');
const heroSection = document.getElementById('home');

if (hireMeBtn && heroSection) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > heroSection.offsetHeight - 100) {
      hireMeBtn.classList.add('visible');
    } else {
      hireMeBtn.classList.remove('visible');
    }
  });
}

// 11. Blog Read Time Estimate
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
  const wordCount = card.getAttribute('data-word-count');
  if (wordCount) {
    const readTime = Math.ceil(wordCount / 200); // 200 words per minute
    const meta = card.querySelector('.blog-meta');
    const date = card.querySelector('.blog-date');
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'blog-read-time';
    timeSpan.innerHTML = `⏱️ ${readTime} min read`;
    
    // Insert after date to position it in the middle (flex space-between)
    if (date && meta) {
      date.after(timeSpan);
    }
  }
});

window.addEventListener('scroll', setActiveLink);

// 12. Testimonial Swipe (Mobile)
const testimonialContainer = document.querySelector('.testimonial-grid');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDotsContainer = document.querySelector('.testimonial-dots');
let testimonialIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

if (testimonialContainer) {
  testimonialContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  testimonialContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  // Create Pagination Dots
  if (testimonialDotsContainer) {
    testimonialCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        testimonialIndex = index;
        updateTestimonials();
      });
      testimonialDotsContainer.appendChild(dot);
    });
  }
}

function handleSwipe() {
  // Only enable on mobile/tablet
  if (window.innerWidth > 768) return;

  const threshold = 50;
  if (touchEndX < touchStartX - threshold) {
    // Swipe Left (Next)
    if (testimonialIndex < testimonialCards.length - 1) {
      testimonialIndex++;
    }
  }
  if (touchEndX > touchStartX + threshold) {
    // Swipe Right (Prev)
    if (testimonialIndex > 0) {
      testimonialIndex--;
    }
  }
  updateTestimonials();
}

function updateTestimonials() {
  testimonialCards.forEach(card => {
    card.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  });

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === testimonialIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Reset on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    testimonialIndex = 0;
    testimonialCards.forEach(card => card.style.transform = '');
  }
});

// 13. Admin Login Modal
const loginModal = document.getElementById('loginModal');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginForm = document.getElementById('loginForm');

if (adminLoginBtn && loginModal) {
  adminLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('show');
    document.body.style.overflow = "hidden";
  });

  closeLoginModal.addEventListener('click', () => {
    loginModal.classList.remove('show');
    document.body.style.overflow = "auto";
  });

  window.addEventListener('click', (e) => {
    if (e.target == loginModal) {
      loginModal.classList.remove('show');
      document.body.style.overflow = "auto";
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') {
      window.location.href = 'admin.html';
    } else {
      alert('Incorrect password!');
    }
  });
}
