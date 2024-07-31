document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const images = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const imageWidth = images.querySelector('img').clientWidth;
    let index = 0;

    function updateCarousel() {
        images.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.children.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.children.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
});
