// Elements caching
const elements = {
    hamburger: document.querySelector('.hamburger'),
    mobileMenu: document.querySelector('.nav-list'),
    header: document.querySelector('.header')
};

// Toggle mobile menu
elements.hamburger.addEventListener('click', () => {
    elements.hamburger.classList.toggle('active');
    elements.mobileMenu.classList.toggle('active');
});

// Change header background on scroll
const changeHeaderBackground = () => {
    const scrollPosition = window.scrollY;
    elements.header.style.backgroundColor = scrollPosition > 250 ? '#29323c' : 'transparent';
};

// Scroll event listener with debounce
const debounce = (func, delay = 100) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
};

document.addEventListener('scroll', debounce(changeHeaderBackground));
