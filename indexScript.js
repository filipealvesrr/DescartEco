const modalOverlay = document.querySelector('.modal-overlay');
const buttonLink = document.querySelector('.button-points');

buttonLink.addEventListener('click', function() {
    modalOverlay.classList.add('active');
})
