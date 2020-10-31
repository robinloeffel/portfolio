const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('load', () => {
    image.classList.add('image-loaded');
  }, {
    once: true
  });
});
