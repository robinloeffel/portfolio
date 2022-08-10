const images = document.querySelectorAll('[data-src]');

const fadeIn = ({ target }) => {
  window.requestAnimationFrame(() => {
    target.classList.add('project-image-visible');
  });
};

const io = new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.addEventListener('load', fadeIn);
      target.src = target.dataset.src;
      io.unobserve(target);
    }
  });
}, { threshold: 0.1 });

images.forEach(image => {
  io.observe(image);
});
