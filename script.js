// Force scroll to top on page load
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    // Optional: Ensure URL doesn't keep hash if you want purely top
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = mobileBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // Adjusted offset
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// PDF MODAL FUNCTIONALITY
const modal = document.getElementById('pdf-modal');
const modalFrame = document.getElementById('pdf-frame');
const imgFrame = document.getElementById('img-frame');
const closeBtn = document.querySelector('.close-modal');
const certCards = document.querySelectorAll('.cert-card');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal(url) {
    // Check if file is an image
    const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i);

    if (isImage) {
        imgFrame.src = url;
        imgFrame.style.display = 'block';
        modalFrame.style.display = 'none';
        modalFrame.src = '';
        modal.classList.add('mode-image');
        modal.classList.remove('mode-pdf');
    } else {
        modalFrame.src = url;
        modalFrame.style.display = 'block';
        imgFrame.style.display = 'none';
        imgFrame.src = '';
        modal.classList.add('mode-pdf');
        modal.classList.remove('mode-image');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable scroll
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modalFrame.src = ''; 
        imgFrame.src = '';
    }, 300); // Wait for transition
    document.body.style.overflow = ''; // Enable scroll
}

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const pdfUrl = card.getAttribute('data-pdf');
        if (pdfUrl) {
            openModal(pdfUrl);
        }
    });
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.hero-content, .section-title, .about-content, .card, .section-instruction, .footer-content');

animatedElements.forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
});

// PARALLAX EFFECT ON SCROLL
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.orb');
    
    parallaxElements.forEach((el, index) => {
        el.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.3}px)`;
    });
});

// MOUSE GLOW EFFECT ON CARDS
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// BUTTON RIPPLE EFFECT
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Fade in hero content on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});
