const images = document.querySelectorAll<HTMLImageElement>("[data-src]");

const fadeIn = ({ target }: Event) => {
	const image = target as HTMLImageElement;
	image.classList.add("visible");
};

const imageIo = new IntersectionObserver(entries => {
	for (const { target, isIntersecting } of entries) {
		const image = target as HTMLImageElement;

		if (isIntersecting) {
			imageIo.unobserve(image);
			image.addEventListener("load", fadeIn);
			image.src = image.dataset.src ?? "";
			delete image.dataset.src;
		}
	}
}, { threshold: 0.1 });

for (const image of images) {
	imageIo.observe(image);
}
