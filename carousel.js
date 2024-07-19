const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const slideCount = slides.length;

slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function showPrevSlide() {
    currentIndex = (currentIndex === 0) ? slideCount - 1 : currentIndex - 1;
    updateCarousel();
}

function showNextSlide() {
    currentIndex = (currentIndex === slideCount - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

setInterval(showNextSlide, 5000);