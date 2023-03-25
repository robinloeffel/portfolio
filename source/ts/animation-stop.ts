const heroText = document.querySelector(".hero-text") as HTMLSpanElement;

const animationIo = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const span = entry.target as HTMLSpanElement;
    span.classList.toggle("animation-paused", !entry.isIntersecting);
  }
});

animationIo.observe(heroText);
