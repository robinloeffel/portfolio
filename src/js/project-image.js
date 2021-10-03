const images = document.querySelectorAll('.project-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project-image-visible');
      observer.unobserve(entry.target);
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});
