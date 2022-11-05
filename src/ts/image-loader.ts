const images = document.querySelectorAll("[data-src]") as NodeListOf<HTMLImageElement>;

const fadeIn = (event: Event) => {
  const image = event.target as HTMLImageElement;
  image.classList.add("project-image-visible");
};

const imageIo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const image = entry.target as HTMLImageElement;

    if (entry.isIntersecting) {
      imageIo.unobserve(image);
      image.addEventListener("load", fadeIn);
      image.src = image.dataset.src || "";
    }
  });
}, { threshold: 0.1 });

images.forEach(image => {
  imageIo.observe(image);
});
