const images = document.querySelectorAll('.project-image');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('project-image-hidden');
    }
  });
});

images.forEach(image => {
  image.classList.add('project-image-hidden');
  observer.observe(image);
});
