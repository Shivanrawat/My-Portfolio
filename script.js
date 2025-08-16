// --- Standard Website Interactivity ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg', 'bg-light-navy/90');
        } else {
            header.classList.remove('shadow-lg', 'bg-light-navy/90');
        }
    });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 200,
        reset: false,
        viewFactor: 0.3,
        beforeReveal: (el) => {
            el.style.visibility = 'visible';
        }
    });

    sr.reveal('#hero');
    sr.reveal('#about', { delay: 300 });
    sr.reveal('#projects', { delay: 300 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('#skills', { delay: 300 });
    sr.reveal('#skills > div > .skill-item', { interval: 100 });
    sr.reveal('#contact', { delay: 300 });
});
