// Star Kids Brazil - School-Focused Website JavaScript

let currentLang = 'pt';

const langBtn = document.getElementById('langBtn');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Language Toggle
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        
        // Update button text with flags
        if (currentLang === 'pt') {
            langBtn.innerHTML = '<span class="flag">🇧🇷</span> <strong>PT</strong> / EN <span class="flag">🇺🇸</span>';
        } else {
            langBtn.innerHTML = '<span class="flag">🇧🇷</span> PT / <strong>EN</strong> <span class="flag">🇺🇸</span>';
        }
        
        updateLanguage();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-pt][data-en]');
    elements.forEach(element => {
        const text = currentLang === 'pt' ? element.getAttribute('data-pt') : element.getAttribute('data-en');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
}

// Mobile Navigation
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.challenge-card, .solution-feature, .program-card, .learning-card, .benefit-card, .step-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

console.log('Star Kids Brasil website loaded! 🌟⚽');
