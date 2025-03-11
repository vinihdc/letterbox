function Letterbox() {
    document.addEventListener("DOMContentLoaded", () => {
        const carouselContainer = document.getElementById("carousel-container");
        const slides = carousel.children;
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        const indicators = document.querySelectorAll("[data-index]");
    
        let currentIndex = 0;
        const totalSlides = slides.length;
    
        function updatecarousel() {
          const offset = -currentIndex * 100;
          carousel.style.transform = `translateX(${offset}%)`;
    
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle("bg-white", index === currentIndex);
            indicator.classList.toggle("bg-gray-500", index !== currentIndex);
          });
        }
    
        nextButton.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updatecarousel();
        });
    
        prevButton.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updatecarousel();
        });
    
        indicators.forEach((dot) => {
          indicator.addEventListener("click", () => {
            currentIndex = parseInt(dot.getAttribute("data-index"));
            updatecarousel();
          });
        });
    
        updatecarousel();
      });
}

export default Letterbox