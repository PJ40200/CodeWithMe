// script.js

// Toggle sidebar submenu
document.querySelectorAll('.menu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Add animations to text
const animatedText = document.querySelectorAll('.fade-in, .slide-up');
animatedText.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.3}s`;
});
