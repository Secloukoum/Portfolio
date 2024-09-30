const footer = document.querySelector('footer');

// Handle footer visibility on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        footer.style.opacity = 0;
        footer.style.pointerEvents = 'none';
    } else {
        footer.style.opacity = 1;
        footer.style.pointerEvents = 'auto';
    }
});