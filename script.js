if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});

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
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = mobileBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = 'none';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = 'none';
    });
});


// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
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
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { modalFrame.src = ''; imgFrame.src = ''; }, 300);
    document.body.style.overflow = '';
}

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const pdfUrl = card.getAttribute('data-pdf');
        if (pdfUrl) openModal(pdfUrl);
    });
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});


// ============================================================
// SCROLL ANIMATION (Intersection Observer)
// ============================================================
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-content, .section-title, .about-layout, .card, .section-instruction, .footer-content').forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
});


// ============================================================
// PARALLAX ORBS
// ============================================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.orb').forEach(el => {
        el.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.3}px)`;
    });
});


// ============================================================
// MOUSE GRADIENT
// ============================================================
document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
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
        setTimeout(() => particle.remove(), duration * 1000);
    }, 300);
}

createFloatingParticles();


// ============================================================
// CARD MOUSE SPOTLIGHT
// ============================================================
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top)  + 'px');
    });
});


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
        setTimeout(() => ripple.remove(), 600);
    });
});


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
