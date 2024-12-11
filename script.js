let currentSlide = 0;
let autoSlideInterval; // Variable pour stocker l'intervalle automatique

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Défilement circulaire
    
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startAutoSlide() {
    // Démarre le défilement automatique toutes les 3 secondes
    autoSlideInterval = setInterval(() => {
        moveSlide(1); // Avance d'une diapositive
    }, 3000); // 3000 ms = 3 secondes
}

function stopAutoSlide() {
    // Arrête le défilement automatique
    clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
    stopAutoSlide(); // Arrête d'abord le défilement
    startAutoSlide(); // Redémarre le défilement automatique
}

// Ajout des événements pour les boutons de navigation
document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1); // Reculer d'une diapositive
    restartAutoSlide(); // Redémarre le défilement automatique après l'interaction
});

document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1); // Avancer d'une diapositive
    restartAutoSlide(); // Redémarre le défilement automatique après l'interaction
});

// Démarrer le défilement automatique dès le chargement de la page
startAutoSlide();
