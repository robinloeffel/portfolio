const images = document.querySelectorAll("[data-src]") as NodeListOf<HTMLImageElement>;

const fadeIn = (event: Event) => {
  const image = event.target as HTMLImageElement;
  image.classList.add("project-image-visible");
};

const imageIo = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const image = entry.target as HTMLImageElement;

    if (entry.isIntersecting) {
      imageIo.unobserve(image);
      image.addEventListener("load", fadeIn);
      image.src = image.dataset.src || "";
    }
  }
}, { threshold: 0.1 });

for (const image of images) {
  imageIo.observe(image);
}
