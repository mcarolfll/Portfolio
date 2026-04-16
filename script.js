<<<<<<< HEAD
=======

>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
<<<<<<< HEAD
=======
    
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

<<<<<<< HEAD
// ============================================================
// LANGUAGE TOGGLE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'pt';

const langToggle   = document.getElementById('lang-toggle');
const langLabel    = document.getElementById('lang-label');
const langDropdown = document.getElementById('lang-dropdown');
const langOptions  = document.querySelectorAll('.lang-option');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Atualiza flag e label no botão
    const flag  = lang === 'pt' ? '🇧🇷' : '🇺🇸';
    const label = lang === 'pt' ? 'PT' : 'EN';
    langToggle.querySelector('.lang-flag').textContent = flag;
    if (langLabel) langLabel.textContent = label;

    // Marca opção ativa
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Atualiza todos os elementos com data-pt / data-en
    document.querySelectorAll('[data-pt]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (!text) return;

        // Para elementos com HTML interno (parágrafos com <strong>)
        if (text.includes('<')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });

    // Atualiza atributo lang da <html>
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Abre/fecha dropdown
langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langToggle.classList.toggle('open');
});

// Seleciona idioma
langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLanguage(opt.dataset.lang);
        langToggle.classList.remove('open');
    });
});

// Fecha ao clicar fora
document.addEventListener('click', () => {
    langToggle.classList.remove('open');
});

// Aplica idioma salvo ao carregar
applyLanguage(currentLang);


// ============================================================
// MOBILE MENU
// ============================================================
const mobileBtn   = document.querySelector('.mobile-menu-btn');
const mobileMenu  = document.querySelector('.mobile-menu');
=======
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
<<<<<<< HEAD
    const spans = mobileBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
=======
    
 
    const spans = mobileBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        spans[2].style.transform = 'none';
    }
});

<<<<<<< HEAD
=======

>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
<<<<<<< HEAD
        spans[1].style.opacity   = '1';
=======
        spans[1].style.opacity = '1';
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        spans[2].style.transform = 'none';
    });
});


<<<<<<< HEAD
// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
=======
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
<<<<<<< HEAD
    let current = "";
    sections.forEach(section => {
        const sectionTop    = section.offsetTop - 150;
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


// ============================================================
// CERTIFICATE MODAL
// ============================================================
const modal        = document.getElementById('pdf-modal');
const modalFrame   = document.getElementById('pdf-frame');
const imgFrame     = document.getElementById('img-frame');
const closeBtn     = document.querySelector('.close-modal');
const certCards    = document.querySelectorAll('.cert-card');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal(url) {
    const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/i);
    if (isImage) {
        imgFrame.src              = url;
        imgFrame.style.display    = 'block';
        modalFrame.style.display  = 'none';
        modalFrame.src            = '';
        modal.classList.add('mode-image');
        modal.classList.remove('mode-pdf');
    } else {
        modalFrame.src            = url;
        modalFrame.style.display  = 'block';
        imgFrame.style.display    = 'none';
        imgFrame.src              = '';
        modal.classList.add('mode-pdf');
        modal.classList.remove('mode-image');
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
=======
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
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
}

function closeModal() {
    modal.classList.remove('active');
<<<<<<< HEAD
    setTimeout(() => { modalFrame.src = ''; imgFrame.src = ''; }, 300);
    document.body.style.overflow = '';
=======
    setTimeout(() => {
        modalFrame.src = ''; 
        imgFrame.src = '';
    }, 300); 
    document.body.style.overflow = ''; 
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
}

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const pdfUrl = card.getAttribute('data-pdf');
<<<<<<< HEAD
        if (pdfUrl) openModal(pdfUrl);
=======
        if (pdfUrl) {
            openModal(pdfUrl);
        }
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
    });
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

<<<<<<< HEAD
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});


// ============================================================
// SCROLL ANIMATION (Intersection Observer)
// ============================================================
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
=======

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
<<<<<<< HEAD
            observer.unobserve(entry.target);
=======
            observer.unobserve(entry.target); 
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        }
    });
}, observerOptions);

<<<<<<< HEAD
document.querySelectorAll('.hero-content, .section-title, .about-layout, .card, .section-instruction, .footer-content').forEach(el => {
=======
const animatedElements = document.querySelectorAll('.hero-content, .section-title, .about-content, .card, .section-instruction, .footer-content');

animatedElements.forEach(el => {
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
    el.classList.add('animate-hidden');
    observer.observe(el);
});


<<<<<<< HEAD
// ============================================================
// PARALLAX ORBS
// ============================================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.orb').forEach(el => {
=======
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.orb');
    
    parallaxElements.forEach((el, index) => {
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        el.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.3}px)`;
    });
});


<<<<<<< HEAD
// ============================================================
// MOUSE GRADIENT
// ============================================================
=======

>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
<<<<<<< HEAD
    gradientBg.style.backgroundPosition = `${x}% ${y}%`;
});


// ============================================================
// FLOATING PARTICLES
// ============================================================
function createFloatingParticles() {
    const container = document.querySelector('.particles-container');
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const startX = Math.random() * window.innerWidth;
        particle.style.left = startX + 'px';
        particle.style.top  = '-10px';
        const duration = 6 + Math.random() * 6;
        particle.style.animationDuration = duration + 's';
        const offsetX = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--offset-x', offsetX + 'px');
        container.appendChild(particle);
=======
    
    
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
        
        
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        setTimeout(() => particle.remove(), duration * 1000);
    }, 300);
}

<<<<<<< HEAD
createFloatingParticles();


// ============================================================
// CARD MOUSE SPOTLIGHT
// ============================================================
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top)  + 'px');
=======
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
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
    });
});


<<<<<<< HEAD
// ============================================================
// BUTTON RIPPLE
// ============================================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect   = this.getBoundingClientRect();
        const size   = Math.max(rect.width, rect.height);
        ripple.style.width  = ripple.style.height = size + 'px';
        ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
        ripple.classList.add('ripple');
        this.appendChild(ripple);
=======
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
        
>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
        setTimeout(() => ripple.remove(), 600);
    });
});


<<<<<<< HEAD
// ============================================================
// HERO TYPING EFFECT
// ============================================================
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) heroContent.style.animation = 'fadeInUp 0.8s ease-out';

    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    heroTitle.innerHTML = '';
    const cursor    = document.createElement('span');
    cursor.className = 'typing-cursor';
    const firstText = 'Software Developer';
    let index1 = 0;

    const typeFirstLine = () => {
        if (index1 < firstText.length) {
            if (heroTitle.lastChild && heroTitle.lastChild.classList && heroTitle.lastChild.classList.contains('typing-cursor')) {
                heroTitle.removeChild(heroTitle.lastChild);
            }
            if (index1 === 0) {
                const line1 = document.createElement('span');
                line1.className = 'highlight';
                line1.id = 'line1';
                heroTitle.appendChild(line1);
            }
            document.getElementById('line1').textContent += firstText[index1];
            heroTitle.appendChild(cursor.cloneNode(true));
            index1++;
            setTimeout(typeFirstLine, 80);
        } else {
            if (heroTitle.lastChild && heroTitle.lastChild.classList && heroTitle.lastChild.classList.contains('typing-cursor')) {
                heroTitle.removeChild(heroTitle.lastChild);
            }
            heroTitle.appendChild(document.createElement('br'));
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
                if (heroTitle.lastChild && heroTitle.lastChild.classList && heroTitle.lastChild.classList.contains('typing-cursor')) {
                    heroTitle.removeChild(heroTitle.lastChild);
                }
                line2.textContent += secondText[index2];
                heroTitle.appendChild(cursor.cloneNode(true));
                index2++;
                setTimeout(typeIt, 80);
            } else {
                if (heroTitle.lastChild && heroTitle.lastChild.classList && heroTitle.lastChild.classList.contains('typing-cursor')) {
                    heroTitle.removeChild(heroTitle.lastChild);
                }
            }
        };
        typeIt();
    };

    setTimeout(typeFirstLine, 200);
});
=======
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



>>>>>>> 85d15700a25a4f2d23ea5ed963a7013d57e46a28
