document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('bg-gray-800', 'shadow-lg'); // Cambia a un color sólido con sombra al hacer scroll
    } else {
        navbar.classList.remove('bg-gray-800', 'shadow-lg'); // Vuelve al color transparente
    }
});
