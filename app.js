const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function showSlide(index) {
    if (index < 0 || index >= totalSlides) {
        return;
    }
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 50}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
})

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
})





