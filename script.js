document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slidesContainer = document.getElementById('photoSlides');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev-photo');
    const nextButton = document.getElementById('next-photo');
    let currentSlide = 0;
    const slideWidth = slides[0].clientWidth; // Largeur d'un slide
    const numSlides = slides.length; // Nombre total de slides
  
    // Initialiser l'affichage : ne montrer que le premier slide
    function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  
    // Aller à la diapositive suivante
    function nextSlide() {
      currentSlide = (currentSlide + 1) % numSlides;
      updateSlider();
    }
  
    // Aller à la diapositive précédente
    function prevSlide() {
      currentSlide = (currentSlide - 1 + numSlides) % numSlides; // Ajout de numSlides pour éviter les indices négatifs
      updateSlider();
    }
  
    // Écouteurs d'événements pour les boutons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    // Redirection vers une autre page au clic sur une image
    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        const link = slide.dataset.link; // Récupère le lien depuis l'attribut data-link
        if (link) {
          window.location.href = link; // Redirige vers la page
        }
      });
    });
  
    // Initialisation du slider (affiche la première image)
    updateSlider();
  });
  