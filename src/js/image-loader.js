const images = document.querySelectorAll('[data-srcset]');
const projectDiashow = document.querySelector('[data-project-diashow]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(({
    target: imageToShow,
    isIntersecting
  }) => {
    if (isIntersecting) {
      observer.unobserve(imageToShow);

      imageToShow.setAttribute('srcset', imageToShow.dataset.srcset);
      delete imageToShow.dataset.srcset;
    }
  });
}, {
  root: projectDiashow,
  threshold: 0.99
});

images.forEach(image => {
  observer.observe(image);

  image.addEventListener('load', () => {
    window.requestAnimationFrame(() => {
      image.classList.add('project-image-visible');
    });
  }, { once: true });
});
