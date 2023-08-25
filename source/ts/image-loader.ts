const images = document.querySelectorAll<HTMLImageElement>("[data-src]");

const fadeIn = ({ target: image }: Event) => {
  (image as HTMLImageElement).classList.add("project-image-visible");
};

const imageIo = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const image = entry.target as HTMLImageElement;

    if (entry.isIntersecting) {
      imageIo.unobserve(image);
      image.addEventListener("load", fadeIn);
      image.src = image.dataset.src!;
    }
  }
}, { threshold: 0.1 });

for (const image of images) {
  imageIo.observe(image);
}
