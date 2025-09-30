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


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено! Свяжусь с вами в ближайшее время.');
    this.reset();
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

document.querySelector('.cta-button').addEventListener('click', function() {
    const contactSection = document.querySelector('.contact');
    const contactForm = document.querySelector('.contact-form');
    
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
   
    setTimeout(() => {
        contactForm.style.transform = 'scale(1.02)';
        contactForm.style.boxShadow = '0 0 30px rgba(231, 76, 60, 0.3)';
        contactForm.style.border = '2px solid #e74c3c';
        
        setTimeout(() => {
            contactForm.style.transform = 'scale(1)';
            contactForm.style.boxShadow = '';
            contactForm.style.border = '';
        }, 2000);
        
    }, 800);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});