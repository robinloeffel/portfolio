import { signal, effect } from "@preact/signals-core";

const animatedElement = document.querySelector<HTMLHeadingElement>(".hero-title");
const isPaused = signal(false);

effect(() => {
	animatedElement?.classList.toggle("animation-stop", isPaused.value);
});

if (animatedElement) {
	const io = new IntersectionObserver(entries => {
		isPaused.value = !entries.at(0)?.isIntersecting;
	});

  io.observe(animatedElement);
}

document.addEventListener("visibilitychange", () => {
	isPaused.value = document.visibilityState === "hidden";
});
