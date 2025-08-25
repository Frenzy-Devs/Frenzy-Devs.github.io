// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const redControl = document.getElementById('redControl');
const yellowControl = document.getElementById('yellowControl');
const greenControl = document.getElementById('greenControl');
const helloPopupOverlay = document.getElementById('helloPopupOverlay');
const helloPopupClose = document.getElementById('helloPopupClose');
const aboutPopupOverlay = document.getElementById('aboutPopupOverlay');
const aboutPopupClose = document.getElementById('aboutPopupClose');
const recruitPopupOverlay = document.getElementById('recruitPopupOverlay');
const recruitPopupClose = document.getElementById('recruitPopupClose');
const typingCode = document.getElementById('typingCode');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme
function initTheme() {
    if (currentTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.innerHTML = '<img src="public/lightMode.svg" alt="Light Mode" class="theme-icon">';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.innerHTML = '<img src="public/darkMode.svg" alt="Dark Mode" class="theme-icon">';
    }
}

// Toggle theme
function toggleTheme() {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.innerHTML = '<img src="public/lightMode.svg" alt="Light Mode" class="theme-icon">';
    } else {
        currentTheme = 'dark';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.innerHTML = '<img src="public/darkMode.svg" alt="Dark Mode" class="theme-icon">';
    }
    
    localStorage.setItem('theme', currentTheme);
}

// Popup Management
function openHelloPopup() {
    helloPopupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        helloPopupOverlay.style.opacity = '1';
    }, 10);
}

function closeHelloPopup() {
    helloPopupOverlay.style.opacity = '0';
    setTimeout(() => {
        helloPopupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

function openAboutPopup() {
    aboutPopupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        aboutPopupOverlay.style.opacity = '1';
    }, 10);
}

function closeAboutPopup() {
    aboutPopupOverlay.style.opacity = '0';
    setTimeout(() => {
        aboutPopupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

function openRecruitPopup() {
    recruitPopupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        recruitPopupOverlay.style.opacity = '1';
    }, 10);
}

function closeRecruitPopup() {
    recruitPopupOverlay.style.opacity = '0';
    setTimeout(() => {
        recruitPopupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close popup when clicking outside
function handleOutsideClick(e) {
    if (e.target === helloPopupOverlay) closeHelloPopup();
    if (e.target === aboutPopupOverlay) closeAboutPopup();
    if (e.target === recruitPopupOverlay) closeRecruitPopup();
}

// Animated Coding Simulation
function animateCode() {
    const codeLines = [
        'class FrenzyDevs {',
        '  constructor() {',
        '    this.team = [];',
        '    this.skills = [\'coding\', \'design\', \'innovation\'];',
        '    this.passion = \'unlimited\';',
        '  }',
        '  ',
        '  async recruit() {',
        '    return \'Join the frenzy!\';',
        '  }',
        '}'
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeCode() {
        if (currentLine >= codeLines.length) {
            setTimeout(() => {
                currentLine = 0;
                currentChar = 0;
                isDeleting = false;
                typingCode.textContent = '';
                typeCode();
            }, 3000);
            return;
        }
        
        const line = codeLines[currentLine];
        
        if (!isDeleting) {
            if (currentChar <= line.length) {
                typingCode.textContent = codeLines.slice(0, currentLine).join('\n') + '\n' + line.slice(0, currentChar);
                currentChar++;
                setTimeout(typeCode, 100);
            } else {
                isDeleting = true;
                setTimeout(typeCode, 500);
            }
        } else {
            if (currentChar > 0) {
                typingCode.textContent = codeLines.slice(0, currentLine).join('\n') + '\n' + line.slice(0, currentChar);
                currentChar--;
                setTimeout(typeCode, 50);
            } else {
                currentLine++;
                isDeleting = false;
                setTimeout(typeCode, 200);
            }
        }
    }
    
    typeCode();
}

// Parallax Effect for Hero Section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    }
}

// Animate Elements on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.hero-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) element.classList.add('animate-in');
    });
}

// Add CSS for animations
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .hero-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .hero-card.animate-in {
            opacity: 0.8;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Particle Animation
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-primary);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    addAnimationStyles();
    createParticles();
    setTimeout(animateCode, 1000);
    
    themeBtn.addEventListener('click', toggleTheme);
    
    redControl.addEventListener('click', openHelloPopup);
    yellowControl.addEventListener('click', openAboutPopup);
    greenControl.addEventListener('click', openRecruitPopup);
    
    helloPopupClose.addEventListener('click', closeHelloPopup);
    aboutPopupClose.addEventListener('click', closeAboutPopup);
    recruitPopupClose.addEventListener('click', closeRecruitPopup);
    
    helloPopupOverlay.addEventListener('click', handleOutsideClick);
    aboutPopupOverlay.addEventListener('click', handleOutsideClick);
    recruitPopupOverlay.addEventListener('click', handleOutsideClick);
    
    window.addEventListener('scroll', throttle(handleParallax, 16));
    window.addEventListener('scroll', throttle(animateOnScroll, 100));
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (helloPopupOverlay.classList.contains('active')) closeHelloPopup();
            if (aboutPopupOverlay.classList.contains('active')) closeAboutPopup();
            if (recruitPopupOverlay.classList.contains('active')) closeRecruitPopup();
        }
    });
    
    window.addEventListener('load', () => document.body.classList.add('loaded'));
});

// Loading animation CSS
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) { opacity: 0; transition: opacity 0.5s ease; }
    body.loaded { opacity: 1; }
    .hero-title .title-line { animation-delay: 0.5s; }
    .hero-subtitle { animation: fadeInUp 0.8s ease 0.8s both; }
    .hero-description { animation: fadeInUp 0.8s ease 1s both; }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(loadingStyle);

// Extra effects (glitch etc.)
function addExtraEffects() {
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach(line => {
        line.addEventListener('mouseenter', () => {
            line.style.textShadow = '2px 0 var(--accent-secondary), -2px 0 var(--accent-primary)';
            line.style.animation = 'glitch 0.3s ease';
        });
        line.addEventListener('mouseleave', () => {
            line.style.textShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
            line.style.animation = 'titleGlow 3s ease-in-out infinite alternate';
        });
    });

    const glitchStyle = document.createElement('style');
    glitchStyle.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(glitchStyle);
}

setTimeout(addExtraEffects, 2000);

/**
 * this is for the red btn hacker animetion
 */

const terminalMessage = document.getElementById('terminalMessage');

const hackerText = `
ERROR 404: StackTraceNotFoundException
┌─────────────────────────────────┐
│   Message: Secret Not Found     │
│   File: /path/to/undefined.js   │
│   Function: retrieveMystery()   │
│   Status: undefined             │
└─────────────────────────────────┘

Hint: The secret you're looking for does not exist in this scope.
`;

// Typing effect with optional glitch span
function typeTerminalMessage(text, element, delay = 30) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            let char = text[i];
            // randomly wrap chars in glitch class for jitter
            if (char !== '\n' && Math.random() < 0.05) {
                element.innerHTML += `<span class="glitch">${char}</span>`;
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Inject message when opening red popup
redControl.addEventListener('click', () => {
    openHelloPopup();
    typeTerminalMessage(hackerText, terminalMessage, 25);
});
