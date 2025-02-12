const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
    // If mobile menu is open, close it
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Product Slider functionality
const slider = document.querySelector('.products-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
const scrollStep = 300; // Adjust this value to control scroll distance

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if(scrollAmount > slider.scrollWidth - slider.clientWidth) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.scrollLeft = scrollAmount;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if(scrollAmount < 0) {
        scrollAmount = 0;
    }
    slider.scrollLeft = scrollAmount;
}); 