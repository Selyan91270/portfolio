let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Logique pour faire un défilement circulaire

    // Déplacer le carrousel en fonction de l'indice actuel
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Ajout d'événements pour les boutons de navigation
document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1); // Avance d'un slide
});

document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1); // Recule d'un slide
});



