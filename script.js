document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

const cards = document.querySelectorAll('.value-card, .note-card, .rubric-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = '0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('%c⧉ ASKAL', 'font-size: 30px; color: #FF0000; font-weight: bold;');
console.log('%c"Я не шукаю світло. Я навчився бачити в темряві."', 'font-size: 14px; color: #CCCCCC; font-style: italic;');