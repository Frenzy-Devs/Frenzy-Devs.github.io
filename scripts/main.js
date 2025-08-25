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
        themeBtn.innerHTML = '<img src="public/sun-icon.svg" alt="Light Mode" class="theme-icon">';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.innerHTML = '<img src="public/moon-icon.svg" alt="Dark Mode" class="theme-icon">';
    }
}

// Toggle theme
function toggleTheme() {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.innerHTML = '<img src="public/sun-icon.svg" alt="Light Mode" class="theme-icon">';
    } else {
        currentTheme = 'dark';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.innerHTML = '<img src="public/moon-icon.svg" alt="Dark Mode" class="theme-icon">';
    }
    
    localStorage.setItem('theme', currentTheme);
}

// Popup Management
function openHelloPopup() {
    helloPopupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
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
    
    // Add entrance animation
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
    
    // Add entrance animation
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
    if (e.target === helloPopupOverlay) {
        closeHelloPopup();
    }
    if (e.target === aboutPopupOverlay) {
        closeAboutPopup();
    }
    if (e.target === recruitPopupOverlay) {
        closeRecruitPopup();
    }
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
            // Start over after a delay
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
            // Typing forward
            if (currentChar <= line.length) {
                typingCode.textContent = codeLines.slice(0, currentLine).join('\n') + '\n' + line.slice(0, currentChar);
                currentChar++;
                setTimeout(typeCode, 100);
            } else {
                // Move to next line
                isDeleting = true;
                setTimeout(typeCode, 500);
            }
        } else {
            // Deleting backward
            if (currentChar > 0) {
                typingCode.textContent = codeLines.slice(0, currentLine).join('\n') + '\n' + line.slice(0, currentChar);
                currentChar--;
                setTimeout(typeCode, 50);
            } else {
                // Move to next line
                currentLine++;
                isDeleting = false;
                setTimeout(typeCode, 200);
            }
        }
    }
    
    // Start the animation
    typeCode();
}

// Parallax Effect for Hero Section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (hero && heroBg) {
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
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
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
    
    // Add particle animation CSS
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

// Performance Optimization: Throttle scroll events
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Add animation styles
    addAnimationStyles();
    
    // Create particles
    createParticles();
    
    // Start coding animation
    setTimeout(animateCode, 1000);
    
    // Event Listeners
    themeBtn.addEventListener('click', toggleTheme);
    
    // Window control buttons
    redControl.addEventListener('click', openHelloPopup);
    yellowControl.addEventListener('click', openAboutPopup);
    greenControl.addEventListener('click', openRecruitPopup);
    
    // Popup close buttons
    helloPopupClose.addEventListener('click', closeHelloPopup);
    aboutPopupClose.addEventListener('click', closeAboutPopup);
    recruitPopupClose.addEventListener('click', closeRecruitPopup);
    
    // Close popups when clicking outside
    helloPopupOverlay.addEventListener('click', handleOutsideClick);
    aboutPopupOverlay.addEventListener('click', handleOutsideClick);
    recruitPopupOverlay.addEventListener('click', handleOutsideClick);
    
    // Add click effects to floating cards
    document.querySelectorAll('.hero-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.9)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
    
    // Scroll event listeners with throttling
    window.addEventListener('scroll', throttle(handleParallax, 16));
    window.addEventListener('scroll', throttle(animateOnScroll, 100));
    
    // Close popup on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (helloPopupOverlay.classList.contains('active')) {
                closeHelloPopup();
            }
            if (aboutPopupOverlay.classList.contains('active')) {
                closeAboutPopup();
            }
            if (recruitPopupOverlay.classList.contains('active')) {
                closeRecruitPopup();
            }
        }
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Add loading animation CSS
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hero-title .title-line {
        animation-delay: 0.5s;
    }
    
    .hero-subtitle {
        animation: fadeInUp 0.8s ease 0.8s both;
    }
    
    .hero-description {
        animation: fadeInUp 0.8s ease 1s both;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(loadingStyle);

// Add some extra cool effects
function addExtraEffects() {
    // Glitch effect for title on hover
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
    
    // Add glitch animation
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

// Initialize extra effects after a delay
setTimeout(addExtraEffects, 2000);
