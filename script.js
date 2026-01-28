
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
 
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


mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});


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


const modal = document.getElementById('pdf-modal');
const modalFrame = document.getElementById('pdf-frame');
const imgFrame = document.getElementById('img-frame');
const closeBtn = document.querySelector('.close-modal');
const certCards = document.querySelectorAll('.cert-card');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal(url) {
    
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
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modalFrame.src = ''; 
        imgFrame.src = '';
    }, 300); 
    document.body.style.overflow = ''; 
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


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.hero-content, .section-title, .about-content, .card, .section-instruction, .footer-content');

animatedElements.forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.orb');
    
    parallaxElements.forEach((el, index) => {
        el.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.3}px)`;
    });
});



document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    
    gradientBg.style.backgroundPosition = `${x}% ${y}%`;
});

function createFloatingParticles() {
    const container = document.querySelector('.particles-container');
    
    // Criar partículas periodicamente
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        
        const startX = Math.random() * window.innerWidth;
        particle.style.left = startX + 'px';
        particle.style.top = '-10px';
        
        // Duração aleatória entre 6-12 segundos
        const duration = 6 + Math.random() * 6;
        particle.style.animationDuration = duration + 's';
        
        
        const offsetX = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--offset-x', offsetX + 'px');
        
        container.appendChild(particle);
        
        
        setTimeout(() => particle.remove(), duration * 1000);
    }, 300);
}

// Iniciar geração de partículas
createFloatingParticles();



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


window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
    
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        const firstText = 'Software Developer';
        let index1 = 0;
        
        const typeFirstLine = () => {
            if (index1 < firstText.length) {
                
                if (heroTitle.lastChild && heroTitle.lastChild.classList.contains('typing-cursor')) {
                    heroTitle.removeChild(heroTitle.lastChild);
                }
                
                
                if (index1 === 0) {
                    const line1 = document.createElement('span');
                    line1.className = 'highlight';
                    line1.id = 'line1';
                    heroTitle.appendChild(line1);
                }
                
                const line1 = document.getElementById('line1');
                line1.textContent += firstText[index1];
                const newCursor = cursor.cloneNode(true);
                heroTitle.appendChild(newCursor);
                
                index1++;
                setTimeout(typeFirstLine, 80);
            } else {
                
                if (heroTitle.lastChild && heroTitle.lastChild.classList.contains('typing-cursor')) {
                    heroTitle.removeChild(heroTitle.lastChild);
                }
                
                const br = document.createElement('br');
                heroTitle.appendChild(br);
                
                setTimeout(typeSecondLine, 300);
            }
        };
        
        
        const typeSecondLine = () => {
            const secondText = '& UI/UX Designer';
            let index2 = 0;
            
            
            const line2 = document.createElement('span');
            line2.id = 'line2';
            heroTitle.appendChild(line2);
            
            const typeIt = () => {
                if (index2 < secondText.length) {
                  
                    if (heroTitle.lastChild && heroTitle.lastChild.classList.contains('typing-cursor')) {
                        heroTitle.removeChild(heroTitle.lastChild);
                    }
                    
                    line2.textContent += secondText[index2];
                    
                    
                    const newCursor = cursor.cloneNode(true);
                    heroTitle.appendChild(newCursor);
                    
                    index2++;
                    setTimeout(typeIt, 80);
                } else {
                    
                    if (heroTitle.lastChild && heroTitle.lastChild.classList.contains('typing-cursor')) {
                        heroTitle.removeChild(heroTitle.lastChild);
                    }
                }
            };
            
            typeIt();
        };
        

        setTimeout(typeFirstLine, 200);
    }

});



