document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active', 'left', 'right');

            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('left');
            } else if (index === (currentIndex + 1) % items.length) {
                item.classList.add('right');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel(); // Initial setup
});
